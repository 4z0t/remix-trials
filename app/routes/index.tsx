import { Link } from "@remix-run/react";
import { PixelImage } from "../PixelImage";
import styles from "~/styles/index.css";

export default function Index() {
  return (
    <div>
      <PixelImage
        src="/media/gifs/logo4z0t.gif"
        style={{
          width: "100%",
          margin: "-30% 0% -30% -3.125%",
          zIndex: -1,
        }}
      ></PixelImage>
      <div className="main-contents">
        <h1 className="title">Welcome to my blog!</h1>
        <p>
          Here is my project list
        </p>
        <h2>FAF</h2>
        <ul>
          <li>
            <Link to="/oxygen">Oxygen</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}


export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
