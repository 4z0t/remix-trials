import { Link } from "@remix-run/react";
import { PixelImage } from "~/components/PixelImage";
import { Expandable } from "~/components/Expandable";

import indexStyles from "~/styles/index.css";
import expandableStyles from "~/styles/Expandable.css";
import { links as titleStyles, Title } from "~/components/Title";

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
        <div className="expandable-container">
          <Expandable>
            <Title>Better Chat</Title>
            <div className="expandable-content">
              <img src="/media/betterchat.png" width="100%"></img>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quas
                nam architecto quo molestias ipsa dolores commodi error expedita
                officiis provident cupiditate dicta, molestiae dolor unde
                placeat a ex exercitationem.
              </p>
            </div>
          </Expandable>
          <Expandable>
            <Title>HotBuild Overhaul</Title>
            <div className="expandable-content">
              <img src="/media/HotBuildOverhaul.png" width="100%"></img>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quas
                nam architecto quo molestias ipsa dolores commodi error expedita
                officiis provident cupiditate dicta, molestiae dolor unde
                placeat a ex exercitationem.
              </p>
            </div>
          </Expandable>

          <Expandable expandTime="1s">
            <Title>Scoreboard</Title>
            <div className="expandable-content">
              <img src="/media/scoreboard.png" width="100%"></img>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quas
                nam architecto quo molestias ipsa dolores commodi error expedita
                officiis provident cupiditate dicta, molestiae dolor unde
                placeat a ex exercitationem. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Ab quas nam architecto quo
                molestias ipsa dolores commodi error expedita officiis provident
                cupiditate dicta, molestiae dolor unde placeat a ex
                exercitationem. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Ab quas nam architecto quo molestias ipsa
                dolores commodi error expedita officiis provident cupiditate
                dicta, molestiae dolor unde placeat a ex exercitationem. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Ab quas nam
                architecto quo molestias ipsa dolores commodi error expedita
                officiis provident cupiditate dicta, molestiae dolor unde
                placeat a ex exercitationem.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quas
                nam architecto quo molestias ipsa dolores commodi error expedita
                officiis provident cupiditate dicta, molestiae dolor unde
                placeat a ex exercitationem. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Ab quas nam architecto quo
                molestias ipsa dolores commodi error expedita officiis provident
                cupiditate dicta, molestiae dolor unde placeat a ex
                exercitationem. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Ab quas nam architecto quo molestias ipsa
                dolores commodi error expedita officiis provident cupiditate
                dicta, molestiae dolor unde placeat a ex exercitationem. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Ab quas nam
                architecto quo molestias ipsa dolores commodi error expedita
                officiis provident cupiditate dicta, molestiae dolor unde
                placeat a ex exercitationem.
              </p>
            </div>
          </Expandable>
        </div>
      </div>
    </div>
  );
}

export function links() {
  return [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com" },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Rajdhani&display=swap",
    },
    { rel: "stylesheet", href: indexStyles },
    { rel: "stylesheet", href: expandableStyles },
    ...titleStyles(),
  ];
}
