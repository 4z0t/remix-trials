import styles from "~/styles/oxygen.css";
import Markdown from "markdown-to-jsx";
import { Expandable } from "~/components/Expandable";
import { Title } from "~/components/Title";
import { Link } from "@remix-run/react";
import { LuaCodeBlock } from "~/components/LuaCodeBlock";

import indexStyles from "~/styles/index.css";
import expandableStyles from "~/styles/Expandable.css";
import { links as titleStyles } from "~/components/Title";

export default function Index() {
  return (
    <main>
      <div className="main-contents">
        <h1 className="title">Oxygen - new framework for old game</h1>
        <div className="expandable-container">
          <Expandable>
            <Title>Platoon Builder</Title>
            <div className="expandable-content" style={{
              margin:"1px 2px",
            }}>
              <LuaCodeBlock>
                {`
...
local pb = Oxygen.PlatoonBuilder()
 -- before platoon builder is used it can be set up to reduce amount of code
pb
    -- sets AI function to be used for any platoon created by platoon builder 
    -- if there wasnt specified
    :UseAIFunction(Oxygen.PlatoonAI.Common, "PatrolChainPickerThread") 
    -- base manager name that builds this platoon
    -- not necessary since platoon loader of Advanced Base Manager sets it by default
    -- (ill show later)
    :UseLocation "SE_BASE"
    -- type of platoon to produce (can be Land, Air, Sea, Gate or Any)
    :UseType 'Land'
    -- sets PlatoonData to be used by AI function
    :UseData
    {
        PatrolChains = {
            "LAC01",
            "LAC02",
            "LAC03",
        },
        Offset = 10
    }

    -- after that we can add platoons into base manager directly with creating

baseManager:LoadPlatoons 
{
    pb:NewDefault "Rhinos SE" -- name of platoon, must be a unique value
        :InstanceCount(5)     -- number of instances of platoon that base manager will produce (defaults to 1)
        :Priority(280)        -- priority of platoon construction,
        -- base manager will build platoons with higher priority first
        :AddUnit(UNIT "Rhino", 4) -- adding 4 rhinos into platoon
        :AddUnit(UNIT "Deceiver", 1) -- and 1 deceiver
        :Create(), -- creating, before it is actually added into BM it will get all 'Use' we set before

    -- another way of doing this
    pb:NewDefault "Brick Attack"
        :InstanceCount(5)
        :Priority(200)
        -- we can set on what difficulties to build this platoon
        :Difficulty { "Medium", "Hard" }
        :AddUnits
        {
            { UNIT "Brick", 5 },
            { UNIT "Banger", 3 },
            { UNIT "Deceiver", 1 },
        }
        :Create(),
    
    -- we can make brick fly, platoon will pick transport from dedicated BM or from global pool
    -- and then move on transport by chains specified (PlatoonData is being replaced as well as AIFunction,
    -- because we specified those)
    pb:NewDefault "Flying Brick"
        :InstanceCount(3)
        :Priority(250)
        :AddUnit(UNIT "Brick", 1)
        :AddUnit(UNIT "Deceiver", 1)
        :AIFunction('/lua/ScenarioPlatoonAI.lua', 'LandAssaultWithTransports')
        :Data
        {
            TransportReturn = "MainBase_M",
            TransportChain = "FlyingBrickRoute",
            LandingChain = "FlyingBrickLanding",
            AttackChain = "TransportAttack"
        }
        :Create(),

    -- transporting engineers to build expansion base, also requires dedicated BM to exist
    pb:NewDefault "SE Engineers"
        :InstanceCount(1)
        :Priority(500)
        :AddUnit(UNIT "T3 Cybran Engineer", 5)
        :Data
        {
            UseTransports = true,
            TransportReturn = "MainBase_M",
            TransportChain = "SE_Base_chain",
            LandingLocation = "SE_Base_M",
        }
        -- this line makes all magic, it makes specific platoon setup
        -- so it becomes an expansion one (also provided by Oxygen)
        :Create(Oxygen.BaseManager.Platoons.ExpansionOf "SE_BASE"),
    
    -- we can load platoon template units that were defined on map
    -- setting up squad (Artillery) and its formation (GrowthFormation)
    -- by default all units added into platoon builder without specified
    -- squad or formation get those as 'Attack' and 'AttackFormation'
    pb:NewDefault "Arty attack"
        :Priority(500)
        :AddUnits(
            Oxygen.Misc.FromMapUnits("Evil Bot", "ArtyAttack", 'Artillery', 'GrowthFormation')
        )
        :Create(),

    -- Ras bots are also supported :P
    -- of course Gate must present in base
    pb:NewDefault "bois"
        :Type "Gate"
        :Priority(500)
        :AddUnit(UNIT "Cybran RAS SACU", 10)
        :Create(Oxygen.BaseManager.Platoons.ExpansionOf "NukeBaseGroup"),

}
`}
              </LuaCodeBlock>
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
