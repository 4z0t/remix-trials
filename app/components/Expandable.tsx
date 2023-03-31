import React, { useState, useEffect, PropsWithChildren, useRef } from "react";

interface ExpandableProperties {
  children: React.ReactElement<React.CSSProperties>[];
  expandTime?: string; //time needed to expand
}

type ExpandableElement = React.ReactElement<ExpandableProperties>;

const additionalHeight: number = 10;

function SumHeights(children: HTMLCollection): number {
  let sum = additionalHeight;
  for (let i = 0; i < children.length; i++) {
    const element = children[i];
    sum += element.scrollHeight;
  }
  return sum;
}

/**
 * Wraps other components into expandable div that expands on click.
 * First child is considered as title and others as contents of group.
 *
 * @param props @see ExpandableProperties
 * @returns
 */
export function Expandable(
  props: ExpandableProperties & { style?: React.CSSProperties }
): ExpandableElement {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<string>("0");
  const [hidden, setHidden] = useState<boolean>(false);

  const handleOnClick = () => {
    if (!ref.current) return;

    setHeight(hidden ? "0" : SumHeights(ref.current.children) + "px");
    setHidden(!hidden);
  };

  return (
    <div className="expandable" onClick={handleOnClick} style={props.style}>
      {props.children[0]}
      <div className="expandable-content"
        ref={ref}
        style={{
          maxHeight: height,
          transition: `max-height ${props.expandTime ?? "0.5s"} ease-out`,
          overflowY: "hidden",
        }}
      >
        {props.children.slice(1)}
      </div>
    </div>
  );
}
