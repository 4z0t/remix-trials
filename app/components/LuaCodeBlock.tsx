import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus as style } from "react-syntax-highlighter/dist/cjs/styles/prism";
import type { SyntaxHighlighterProps } from "react-syntax-highlighter";

export function LuaCodeBlock(props: SyntaxHighlighterProps) {
  return (
    <SyntaxHighlighter {...props} language="lua" style={style}>
      {props.children}
    </SyntaxHighlighter>
  );
}
