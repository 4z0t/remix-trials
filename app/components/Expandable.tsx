import React, { useState, Component } from "react";



export interface ExpandableProperties extends React.CSSProperties {
    children: [React.ReactElement<React.CSSProperties>, React.ReactElement<React.CSSProperties>]
}

type ExpandableElement = React.ReactElement<ExpandableProperties>;

export function Expandable(props: ExpandableProperties): ExpandableElement {


    let [hidden, setHidden] = useState<boolean>();


    const handleMouseOver = (e: React.MouseEvent<HTMLDivElement>) => {
        const control: ExpandableElement = e.currentTarget;
        const children = control.props.children;
        const content = children[1];
        content.props.maxHeight = null;
        console.log("over");
    };
    const handleMouseOut = (e: React.MouseEvent<HTMLDivElement>) => {
        const control: ExpandableElement = e.currentTarget;
        const children = control.props.children;
        const content = children[1];
        content.props.maxHeight = content.props.scrollHeight + "px";
        console.log("out");
        
    };

    return (
        <div className="expandable" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            {/* <div className="expandable-title">

            </div>
            <div className="expandable-content">
                
            </div> */}
            {props.children}

        </div>
    );
}