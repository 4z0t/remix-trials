import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula as style } from "react-syntax-highlighter/dist/cjs/styles/hljs";

export function LuaCodeBlock(props: PropsWithString) {
  return (
    <SyntaxHighlighter language="lua" style={{ ...style }}>
      {props.children}
    </SyntaxHighlighter>
  );
}
