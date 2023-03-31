import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

export function LuaCodeBlock(props: PropsWithString) {
  return (
    <SyntaxHighlighter language="lua" style={a11yDark}>
      {props.children}
    </SyntaxHighlighter>
  );
}
