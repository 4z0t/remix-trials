import { SyntaxHighlighterProps } from "react-syntax-highlighter";

export type PropsWithString<P = unknown> = P & {
  children: string | string[];
};

export type SyntaxHighlighterCodeProps = PropsWithString &
  SyntaxHighlighterProps;
