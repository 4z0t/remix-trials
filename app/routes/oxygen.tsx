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
            <div
              className="expandable-content"
              style={{
                margin: "1px 2px",
              }}
            >
              <LuaCodeBlock
                wrapLongLines={true}
                customStyle={{
                  borderRadius: "5px",
                }}
              >
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
            <Title>Players Manager</Title>
            <div className="expandable-content">
              <LuaCodeBlock
                wrapLongLines={true}
                customStyle={{
                  borderRadius: "5px",
                }}
              >
                {`playersData = playersManager:Init
 {
    -- name of each upgrade is annotated, so, you dont need to 
    -- learn each to set. But dont forget that not all upgrades may fit in the same slot.
    -- Setting up upgrades for all players:
    -- the returned value is data per player, it has as many entries as there are players in lobby
  enhancements = {
    Aeon = {
        "AdvancedEngineering",
        "T3Engineering",
        "ResourceAllocation",
        "ResourceAllocationAdvanced",
        "EnhancedSensors"
    },
    Cybran = {
        "AdvancedEngineering",
        "T3Engineering",
        "ResourceAllocation",
        "MicrowaveLaserGenerator"
    },
    UEF = {
        "AdvancedEngineering",
        "T3Engineering",
        "ResourceAllocation",
        "Shield",
        "ShieldGeneratorField"
    },
    Seraphim = {
        "AdvancedEngineering",
        "T3Engineering",
        "DamageStabilization",
        "DamageStabilizationAdvanced",
        "ResourceAllocation",
        "ResourceAllocationAdvanced"
    }
  },
  {
    -- we can set any color we want as it is done in UI
    color = "ff18DAE0",
    -- those are used to spawn player on map (those names must be defined on map
    -- for each player)
    units =
    {
        Aeon = 'AeonPlayer_1',
        Cybran = 'CybranPlayer_1',
        UEF = 'UEFPlayer_1',
        Seraphim = 'SeraPlayer_1',
    },
    -- custom name for a player (if not set it will use its own from lobby)
    name = "Punch lox"
  },
  {
    color = "ff69D63E",
    units =
    {
        Cybran = 'CybranPlayer_2',
        UEF = 'UEFPlayer_2',
        Aeon = 'AeonPlayer_2',
        Seraphim = 'SeraPlayer_2',
    },
    name = "Zadsport",
    -- we can set specific upgrades per player as well
    enhancements = {
        Aeon = {
            "AdvancedEngineering",
            "T3Engineering",
            "ResourceAllocation",
        },
        Cybran = {
            "AdvancedEngineering",
            "T3Engineering",
            "ResourceAllocation",
        },
        UEF = {
            "AdvancedEngineering",
            "T3Engineering",
            "ResourceAllocation",
        },
        Seraphim = {
            "AdvancedEngineering",
            "T3Engineering",
            "ResourceAllocation",
        }
  },
  },
 }

-- we can get their count like this
local playersCount = table.getsize(playersData)

 ...
-- After that we can spawn players' ACUs warping them ...
playersManager:WarpIn(function()
    ScenarioFramework.Dialogue(VOStrings.E01_D01_010, PlayerDeath, true)
end)
-- or gating in (this only changes effects ACUs spawn with, you will have to setup gate on map yourself)
playersManager:GateIn(function()
    ScenarioFramework.Dialogue(VOStrings.E01_D01_010, PlayerDeath, true)
end)
-- The function passed in is players' death callback.
-- You can make mission end if player dies or keep count of dead players.`}
              </LuaCodeBlock>
            </div>
          </Expandable>

          <Expandable expandTime="1s">
            <Title>Cinematics</Title>
            <div className="expandable-content">
              <LuaCodeBlock
                wrapLongLines={true}
                customStyle={{
                  borderRadius: "5px",
                }}
              >
                {`
local OC = Oxygen.Cinematics
...
-- During NIS mode players cant do any input and black bars appear on top and bottom.
-- We can also pass in areas where units will become invulnerable during cutscene.
OC.NISMode(function()

    -- Position camera with marker defined on map
    OC.MoveTo("Cam1", 0)

    -- Create dialog where nice man tells you about objective (there are lots of examples in other missions,
    -- most important here that we can create our own provided with mission, but it isnt easy process since game is really old)
    ScenarioFramework.Dialogue( {{
            text = '[HQ]: <something describing mission>',
            vid = 'video.sfd',
            bank = 'wolf',
            cue = 'corre',
            faction = 'Cybran'
        }}, nil, true)
    
    -- waiting a bit
    WaitSeconds(2)

    -- we can display some text, but as I tried to make it bigger, it would crash game
    -- UI 4 Sim is better which I'll show later (UI 4 Sim allows you create custom UI for map which is synced)
    OC.DisplayText("Global\nWarning", 12, 'ffffffff', 'center', 1)

    -- moving camera to other position for 2,5 seconds
    OC.MoveTo("Cam3", 2.5)
    WaitSeconds(2.5)

    -- creating vision at enemy base just to show how dangerous it is
    -- it will be hidden after NIS mode ends leaving no icons ('true' flag)
    OC.VisionAtLocation("MainBase_M", 60, Brains.Player1):DestroyOnExit(true)

    -- and so on...
    OC.MoveTo("BaseCam1", 3)
    OC.MoveTo("BaseCam2", 1)
    OC.MoveTo("Cam3", 4)

end, {"BattleField1", "BattleField2"})

                `}
              </LuaCodeBlock>
            </div>
          </Expandable>
          <Expandable>
            <Title>test</Title>
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
