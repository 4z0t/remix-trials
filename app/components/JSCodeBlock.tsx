import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import type { SyntaxHighlighterProps } from "react-syntax-highlighter";

export function JSCodeBlock(props: SyntaxHighlighterProps) {
  return (
    <SyntaxHighlighter {...props} language="javascript" style={a11yDark}>
      {props.children}
    </SyntaxHighlighter>
  );
}
