import React, { useState, useEffect, PropsWithChildren } from "react";

 interface ExpandableProperties extends React.CSSProperties {
    children: React.ReactElement<React.CSSProperties>[]
}

type ExpandableElement = React.ReactElement< ExpandableProperties>;



export function Expandable(props: ExpandableProperties): ExpandableElement {

    let [hidden, setHidden] = useState<boolean>(true);

    return (
        <div className="expandable"
            onClick={() => setHidden(!hidden)}>
            {props.children[0]}
            <div style={{ maxHeight: hidden ? "0" : "1000px", transition: "max-height 0.5s ease-out", overflow: "hidden" }}>
                {props.children.slice(1)}
            </div>
        </div>
    );
}