import styles from "~/styles/oxygen.css";
import Markdown from "markdown-to-jsx";

const str = "Hello";

export default function Index() {
  return (
    <main>
      <h1>Oxygen - new framework for old game</h1>
      <Markdown>{str}</Markdown>
    </main>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
