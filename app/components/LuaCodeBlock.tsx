import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus as style } from "react-syntax-highlighter/dist/cjs/styles/prism";

import type { SyntaxHighlighterCodeProps } from "~/utils";

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
