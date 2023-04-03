import type { SyntaxHighlighterProps } from "react-syntax-highlighter";

export type PropsWithString<P = unknown> = P & {
  children: string | string[];
};

//this shit doesnt work
export type SyntaxHighlighterCodePropsWithSetLanguage = Omit<
  SyntaxHighlighterProps,
  "language"
>;
