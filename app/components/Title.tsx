import React from "react";
import style from "~/styles/Title.css";

export { style };

export function Title(props: React.PropsWithChildren<React.CSSProperties>) {
  return (
    <div className="title-box">
      <p className="title-text">{props.children}</p>
    </div>
  );
}
