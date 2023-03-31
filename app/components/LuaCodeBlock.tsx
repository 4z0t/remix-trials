import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { SyntaxHighlighterProps } from "react-syntax-highlighter";
import { darcula as style } from "react-syntax-highlighter/dist/cjs/styles/hljs";

export function LuaCodeBlock(
  props: PropsWithString & {
    customStyle?: React.CSSProperties;
  } & SyntaxHighlighterProps
) {
  return (
    <SyntaxHighlighter
      language="lua"
      style={{ ...style }}
      customStyle={props.customStyle}
      wrapLongLines={props.wrapLongLines}
    >
      {props.children}
    </SyntaxHighlighter>
  );
}
