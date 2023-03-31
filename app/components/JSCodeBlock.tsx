import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import React from "react";

type PropsWithString<P = unknown> = P & {
  children: string | string[];
};

export function JSCodeBlock(props: PropsWithString) {
  return (
    <SyntaxHighlighter language="javascript" style={a11yDark}>
      {props.children}
    </SyntaxHighlighter>
  );
}
