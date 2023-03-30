import { Link } from "@remix-run/react";
import { PixelImage } from "../PixelImage";
import { Expandable } from "~/components/Expandable";

import indexStyles from "~/styles/index.css";
import expandableStyles from "~/styles/Expandable.css";
import { style as titleStyles, Title } from "~/components/Title";

export default function Index() {
  return (
    <div>
      <PixelImage
        src="/media/gifs/logo4z0t.gif"
        style={{
          width: "100%",
          margin: "-20% 0% -40% -3.125%",
        }}
      ></PixelImage>
      <div className="main-contents">
        <h1 className="title">Welcome to my blog!</h1>
        <p>Here is my project list</p>
        <h2>FAF</h2>
        <ul>
          <li>
            <Link to="/oxygen">Oxygen</Link>
          </li>
          <li>
            <Link to="/uimods">UI mods</Link>
          </li>
        </ul>

        <Expandable>
          <Title>AAAAAAAa</Title>
          <div className="expandable-content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quas
              nam architecto quo molestias ipsa dolores commodi error expedita
              officiis provident cupiditate dicta, molestiae dolor unde placeat
              a ex exercitationem.
            </p>
          </div>
        </Expandable>

        <Expandable>
          <Title>bbbbbbbb</Title>
          <div className="expandable-content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quas
              nam architecto quo molestias ipsa dolores commodi error expedita
              officiis provident cupiditate dicta, molestiae dolor unde placeat
              a ex exercitationem. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ab quas nam architecto quo molestias ipsa
              dolores commodi error expedita officiis provident cupiditate
              dicta, molestiae dolor unde placeat a ex exercitationem. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Ab quas nam
              architecto quo molestias ipsa dolores commodi error expedita
              officiis provident cupiditate dicta, molestiae dolor unde placeat
              a ex exercitationem. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ab quas nam architecto quo molestias ipsa
              dolores commodi error expedita officiis provident cupiditate
              dicta, molestiae dolor unde placeat a ex exercitationem.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quas
              nam architecto quo molestias ipsa dolores commodi error expedita
              officiis provident cupiditate dicta, molestiae dolor unde placeat
              a ex exercitationem. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ab quas nam architecto quo molestias ipsa
              dolores commodi error expedita officiis provident cupiditate
              dicta, molestiae dolor unde placeat a ex exercitationem. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Ab quas nam
              architecto quo molestias ipsa dolores commodi error expedita
              officiis provident cupiditate dicta, molestiae dolor unde placeat
              a ex exercitationem. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ab quas nam architecto quo molestias ipsa
              dolores commodi error expedita officiis provident cupiditate
              dicta, molestiae dolor unde placeat a ex exercitationem.
            </p>
          </div>
        </Expandable>
      </div>
    </div>
  );
}

export function links() {
  return [
    { rel: "stylesheet", href: indexStyles },
    { rel: "stylesheet", href: expandableStyles },
    { rel: "stylesheet", href: titleStyles },
  ];
}
