import React from "react";
import style from "~/styles/Title.css";

export function Title(props: React.PropsWithChildren<React.CSSProperties>) {
  return (
    <div className="title-box">
      <p className="title-text" style={props}>
        {props.children}
      </p>
    </div>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: style }];
}
