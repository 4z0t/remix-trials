import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { SyntaxHighlighterProps } from "react-syntax-highlighter";
import { darcula as style } from "react-syntax-highlighter/dist/cjs/styles/hljs";

import { SyntaxHighlighterCodeProps } from "~/utils";

export function LuaCodeBlock(props: SyntaxHighlighterCodeProps) {
  return (
    <SyntaxHighlighter {...props} language="lua" style={style}>
      {props.children}
    </SyntaxHighlighter>
  );
}

// export class LuaCode extends SyntaxHighlighter {
//   /**
//    *
//    */
//   constructor(props: SyntaxHighlighterCodeProps) {
//     props.language = "lua";
//     super(props);
//   }
// }
