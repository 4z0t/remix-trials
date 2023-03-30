import React, { useState, useEffect, PropsWithChildren } from "react";


export interface ExpandableProperties extends React.CSSProperties {
    children: React.ReactElement<React.CSSProperties>[]
}

type ExpandableElement = React.ReactElement<ExpandableProperties>;



export function Expandable(props: ExpandableProperties): ExpandableElement {

    let [hidden, setHidden] = useState<boolean>(true);

    const handleMouseOver = () => {
        setHidden(false);
        console.log("over");
    };
    const handleMouseOut = () => {
        setHidden(true);
        console.log("out");
    };

    return (
        <div className="expandable" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            {props.children[0]}
            <div style={{ maxHeight: hidden ? "0" : "max-content", transition: "max-height 0.3s ease-out", overflow: "hidden" }}>
                {props.children.slice(1)}
            </div>
        </div>
    );
}