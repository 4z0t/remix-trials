import styles from "~/styles/oxygen.css";
import Markdown from "markdown-to-jsx";
import { Expandable } from "~/components/Expandable";
import { Title } from "~/components/Title";
import { Link } from "@remix-run/react";
import { LuaCodeBlock } from "~/components/LuaCodeBlock";

import indexStyles from "~/styles/index.css";
import expandableStyles from "~/styles/Expandable.css";
import { links as titleStyles } from "~/components/Title";

const str = "Hello";

export default function Index() {
  return (
    <main>
      <div className="main-contents">
        <h1 className="title">Oxygen - new framework for old game</h1>
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
          <Expandable>
            <Title>Oxygen</Title>
            <div className="expandable-content">
              <LuaCodeBlock>{`
                if a == 1 then
                  return
                end
              `}</LuaCodeBlock>
            </div>
          </Expandable>
        </div>
      </div>
    </main>
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
