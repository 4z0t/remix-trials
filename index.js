var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.RemixServer, { context: remixContext, url: request.url }),
      {
        onAllReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.RemixServer, { context: remixContext, url: request.url }),
      {
        onShellReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(err) {
          reject(err);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  meta: () => meta
});
var import_react2 = require("@remix-run/react"), import_jsx_runtime2 = require("react/jsx-runtime"), meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Links, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Outlet, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.ScrollRestoration, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Scripts, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.LiveReload, {})
    ] })
  ] });
}

// app/routes/oxygen.tsx
var oxygen_exports = {};
__export(oxygen_exports, {
  default: () => Index,
  links: () => links2
});

// app/components/Expandable.tsx
var import_react3 = require("react"), import_jsx_runtime3 = require("react/jsx-runtime"), additionalHeight = 10;
function SumHeights(children) {
  let sum = additionalHeight;
  for (let i = 0; i < children.length; i++) {
    let element = children[i];
    sum += element.scrollHeight;
  }
  return sum;
}
function Expandable(props) {
  let ref = (0, import_react3.useRef)(null), [height, setHeight] = (0, import_react3.useState)("0"), [hidden, setHidden] = (0, import_react3.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "expandable", onClick: () => {
    !ref.current || (setHeight(hidden ? "0" : SumHeights(ref.current.children) + "px"), setHidden(!hidden));
  }, style: props.style, children: [
    props.children[0],
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      "div",
      {
        className: "expandable-content",
        ref,
        style: {
          maxHeight: height,
          transition: `max-height ${props.expandTime ?? "0.5s"} ease-out`,
          overflowY: "hidden"
        },
        children: props.children.slice(1)
      }
    )
  ] });
}

// app/styles/Title.css
var Title_default = "/build/_assets/Title-6VQNJVCA.css";

// app/components/Title.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function Title(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "title-box", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "title-text", style: props, children: props.children }) });
}
function links() {
  return [{ rel: "stylesheet", href: Title_default }];
}

// app/components/LuaCodeBlock.tsx
var import_react_syntax_highlighter = __toESM(require("react-syntax-highlighter")), import_hljs = require("react-syntax-highlighter/dist/cjs/styles/hljs"), import_jsx_runtime5 = require("react/jsx-runtime");
function LuaCodeBlock(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react_syntax_highlighter.default, { ...props, language: "lua", style: import_hljs.darcula, children: props.children });
}

// app/styles/index.css
var styles_default = "/build/_assets/index-XCDWXE3O.css";

// app/styles/Expandable.css
var Expandable_default = "/build/_assets/Expandable-DKNFDFP4.css";

// app/routes/oxygen.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "main-contents", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h1", { className: "title", children: "Oxygen - new framework for old game" }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "expandable-container", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(Expandable, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Title, { children: "Platoon Builder" }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          "div",
          {
            className: "expandable-content",
            style: {
              margin: "1px 2px"
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
              LuaCodeBlock,
              {
                wrapLongLines: !0,
                customStyle: {
                  borderRadius: "5px"
                },
                children: `
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
`
              }
            )
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(Expandable, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Title, { children: "Players Manager" }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "expandable-content", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          LuaCodeBlock,
          {
            wrapLongLines: !0,
            customStyle: {
              borderRadius: "5px"
            },
            children: `playersData = playersManager:Init
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
-- You can make mission end if player dies or keep count of dead players.`
          }
        ) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(Expandable, { expandTime: "1s", children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Title, { children: "Cinematics" }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "expandable-content", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          LuaCodeBlock,
          {
            wrapLongLines: !0,
            customStyle: {
              borderRadius: "5px"
            },
            children: `
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
    OC.DisplayText("Global
Warning", 12, 'ffffffff', 'center', 1)

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

                `
          }
        ) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(Expandable, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Title, { children: "test" }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "expandable-content", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(LuaCodeBlock, { children: `
                if a == 1 then
                  return
                end
              ` }) })
      ] })
    ] })
  ] }) });
}
function links2() {
  return [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com" },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Rajdhani&display=swap"
    },
    { rel: "stylesheet", href: styles_default },
    { rel: "stylesheet", href: Expandable_default },
    ...links()
  ];
}

// app/routes/uimods.tsx
var uimods_exports = {};
__export(uimods_exports, {
  default: () => Index2
});
var import_jsx_runtime7 = require("react/jsx-runtime");
function Index2() {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_jsx_runtime7.Fragment, {});
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index3,
  links: () => links3
});
var import_react5 = require("@remix-run/react");

// app/components/PixelImage.tsx
var import_react4 = require("react"), import_jsx_runtime8 = require("react/jsx-runtime"), PixelImage = class extends import_react4.Component {
  render() {
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      "img",
      {
        style: {
          imageRendering: "pixelated",
          ...this.props.style
        },
        src: this.props.src
      }
    );
  }
};

// app/routes/index.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
function Index3() {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      PixelImage,
      {
        src: "/media/gifs/logo4z0t.gif",
        style: {
          width: "100%",
          margin: "-20% 0% -40% -3.125%"
        }
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "main-contents", children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h1", { className: "title", children: "Welcome to my blog!" }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { children: "Here is my project list" }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h2", { children: "FAF" }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react5.Link, { to: "/oxygen", children: "Oxygen" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react5.Link, { to: "/uimods", children: "UI mods" }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "expandable-container", children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(Expandable, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Title, { children: "Better Chat" }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "expandable-content", children: [
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("img", { src: "/media/betterchat.png", width: "100%" }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quas nam architecto quo molestias ipsa dolores commodi error expedita officiis provident cupiditate dicta, molestiae dolor unde placeat a ex exercitationem." })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(Expandable, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Title, { children: "HotBuild Overhaul" }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "expandable-content", children: [
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("img", { src: "/media/HotBuildOverhaul.png", width: "100%" }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quas nam architecto quo molestias ipsa dolores commodi error expedita officiis provident cupiditate dicta, molestiae dolor unde placeat a ex exercitationem." })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(Expandable, { expandTime: "1s", children: [
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Title, { children: "Scoreboard" }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "expandable-content", children: [
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("img", { src: "/media/scoreboard.png", width: "100%" }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quas nam architecto quo molestias ipsa dolores commodi error expedita officiis provident cupiditate dicta, molestiae dolor unde placeat a ex exercitationem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quas nam architecto quo molestias ipsa dolores commodi error expedita officiis provident cupiditate dicta, molestiae dolor unde placeat a ex exercitationem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quas nam architecto quo molestias ipsa dolores commodi error expedita officiis provident cupiditate dicta, molestiae dolor unde placeat a ex exercitationem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quas nam architecto quo molestias ipsa dolores commodi error expedita officiis provident cupiditate dicta, molestiae dolor unde placeat a ex exercitationem." }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quas nam architecto quo molestias ipsa dolores commodi error expedita officiis provident cupiditate dicta, molestiae dolor unde placeat a ex exercitationem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quas nam architecto quo molestias ipsa dolores commodi error expedita officiis provident cupiditate dicta, molestiae dolor unde placeat a ex exercitationem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quas nam architecto quo molestias ipsa dolores commodi error expedita officiis provident cupiditate dicta, molestiae dolor unde placeat a ex exercitationem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quas nam architecto quo molestias ipsa dolores commodi error expedita officiis provident cupiditate dicta, molestiae dolor unde placeat a ex exercitationem." })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(Expandable, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Title, { children: "Oxygen" }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "expandable-content", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(LuaCodeBlock, { children: `
                if a == 1 then
                  return
                end
              ` }) })
        ] })
      ] })
    ] })
  ] });
}
function links3() {
  return [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com" },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Rajdhani&display=swap"
    },
    { rel: "stylesheet", href: styles_default },
    { rel: "stylesheet", href: Expandable_default },
    ...links()
  ];
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "82ea8ccb", entry: { module: "/build/entry.client-GCUI7WUR.js", imports: ["/build/_shared/chunk-XBSS7FZH.js", "/build/_shared/chunk-LMXH6R3J.js", "/build/_shared/chunk-Q3IECNXJ.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-VSW3FNCD.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-IOGXIV3T.js", imports: ["/build/_shared/chunk-W23KEKE5.js", "/build/_shared/chunk-GO2O4AEA.js", "/build/_shared/chunk-WKLRDLK3.js", "/build/_shared/chunk-VZYR42VP.js", "/build/_shared/chunk-UZ5QAAOU.js", "/build/_shared/chunk-R6UH7CFB.js", "/build/_shared/chunk-BRENWNJY.js", "/build/_shared/chunk-DBBLCCWL.js", "/build/_shared/chunk-RYFVQNKA.js", "/build/_shared/chunk-GV7PO6WN.js", "/build/_shared/chunk-KQEI4BMA.js", "/build/_shared/chunk-YDRHFXL4.js", "/build/_shared/chunk-FCUNWOOO.js", "/build/_shared/chunk-TB4FK2TK.js", "/build/_shared/chunk-XTETXOVE.js", "/build/_shared/chunk-YDWSCTG6.js", "/build/_shared/chunk-LWH76XIM.js", "/build/_shared/chunk-UMMU2BHZ.js", "/build/_shared/chunk-AMUYGW2N.js", "/build/_shared/chunk-TEDPXH77.js", "/build/_shared/chunk-VLFGLMXY.js", "/build/_shared/chunk-EEUCKNIS.js", "/build/_shared/chunk-SZTSTJTF.js", "/build/_shared/chunk-QT3GZEEY.js", "/build/_shared/chunk-OMNNI6BH.js", "/build/_shared/chunk-BGPNKALF.js", "/build/_shared/chunk-FFBCPNDD.js", "/build/_shared/chunk-PNWAKRWL.js", "/build/_shared/chunk-KNGD23XG.js", "/build/_shared/chunk-NSCFZAIQ.js", "/build/_shared/chunk-YTEBR3NS.js", "/build/_shared/chunk-VT4N7S6Q.js", "/build/_shared/chunk-GMKJKNEN.js", "/build/_shared/chunk-FQ22CFTH.js", "/build/_shared/chunk-ZIARY6RN.js", "/build/_shared/chunk-AXQJYC35.js", "/build/_shared/chunk-JSGCTR7L.js", "/build/_shared/chunk-IVTE73IA.js", "/build/_shared/chunk-LLHNYOVU.js", "/build/_shared/chunk-2YBAPB3R.js", "/build/_shared/chunk-BPKFG657.js", "/build/_shared/chunk-5YCUILXN.js", "/build/_shared/chunk-MUKKLZ5J.js", "/build/_shared/chunk-K3LLCSSP.js", "/build/_shared/chunk-DKEI2NS7.js", "/build/_shared/chunk-CY3DGFU2.js", "/build/_shared/chunk-4AGMBJON.js", "/build/_shared/chunk-34LIPU3P.js", "/build/_shared/chunk-ZOO6V6TD.js", "/build/_shared/chunk-RZZ3LPVQ.js", "/build/_shared/chunk-DF2HVTPY.js", "/build/_shared/chunk-R5L5NLIY.js", "/build/_shared/chunk-IG2RCWL6.js", "/build/_shared/chunk-IADNGBRQ.js", "/build/_shared/chunk-DJPFDZPU.js", "/build/_shared/chunk-FDJ47UAK.js", "/build/_shared/chunk-N7MAINLQ.js", "/build/_shared/chunk-XPQ4TIXQ.js", "/build/_shared/chunk-DTSBRAYD.js", "/build/_shared/chunk-O2DAMZ4X.js", "/build/_shared/chunk-HOQTACCK.js", "/build/_shared/chunk-MWIDPTLR.js", "/build/_shared/chunk-QBXC37TA.js", "/build/_shared/chunk-5KAML3F2.js", "/build/_shared/chunk-VNF7AAZG.js", "/build/_shared/chunk-BARZ57QB.js", "/build/_shared/chunk-YBU5C5SK.js", "/build/_shared/chunk-LXGANFLD.js", "/build/_shared/chunk-BT7YOX4V.js", "/build/_shared/chunk-ZGFO33CT.js", "/build/_shared/chunk-IQ6I77JI.js", "/build/_shared/chunk-L77GZQRT.js", "/build/_shared/chunk-B4MO25WV.js", "/build/_shared/chunk-OB3I3NAF.js", "/build/_shared/chunk-J4LXPGY7.js", "/build/_shared/chunk-W2WZFQB7.js", "/build/_shared/chunk-X5C45DVS.js", "/build/_shared/chunk-BGGLYQQP.js", "/build/_shared/chunk-TKY6YL5U.js", "/build/_shared/chunk-7VJHESNN.js", "/build/_shared/chunk-PMMGHMX2.js", "/build/_shared/chunk-MYAGLM7K.js", "/build/_shared/chunk-6XYYXJX6.js", "/build/_shared/chunk-GCAWYKFC.js", "/build/_shared/chunk-65AN4YQ7.js", "/build/_shared/chunk-2BZ3KTHZ.js", "/build/_shared/chunk-SMQQY2AZ.js", "/build/_shared/chunk-CSE34A3A.js", "/build/_shared/chunk-HKLQXQQJ.js", "/build/_shared/chunk-IP7PF7RF.js", "/build/_shared/chunk-4QXI6PVN.js", "/build/_shared/chunk-FBRRRYPL.js", "/build/_shared/chunk-PINTE7CE.js", "/build/_shared/chunk-AKOAE52J.js", "/build/_shared/chunk-SNAQFTK6.js", "/build/_shared/chunk-UPLOJEJB.js", "/build/_shared/chunk-TAT6EIHP.js", "/build/_shared/chunk-GGLF47VB.js", "/build/_shared/chunk-IKLO5GBF.js", "/build/_shared/chunk-3PUKCNJG.js", "/build/_shared/chunk-Q2ZEVVV3.js", "/build/_shared/chunk-F2EH57OU.js", "/build/_shared/chunk-WJ7IQPC5.js", "/build/_shared/chunk-KPJJPUUU.js", "/build/_shared/chunk-NVAIEAXQ.js", "/build/_shared/chunk-A6VU3OVR.js", "/build/_shared/chunk-ZVDGTAZY.js", "/build/_shared/chunk-MICRD5L4.js", "/build/_shared/chunk-LVZ3LNKN.js", "/build/_shared/chunk-3VM4RNZQ.js", "/build/_shared/chunk-CUGKHUGM.js", "/build/_shared/chunk-JDN2RZI6.js", "/build/_shared/chunk-EUYEOJQ6.js", "/build/_shared/chunk-EHNF5IX4.js", "/build/_shared/chunk-SKUJMYU4.js", "/build/_shared/chunk-7UQVZCQE.js", "/build/_shared/chunk-4M2UDYSY.js", "/build/_shared/chunk-DREEFDBM.js", "/build/_shared/chunk-IEZ5WBDQ.js", "/build/_shared/chunk-2BWMJYYV.js", "/build/_shared/chunk-BSDNM6RF.js", "/build/_shared/chunk-A3UL2PJ6.js", "/build/_shared/chunk-E3LZQ2EN.js", "/build/_shared/chunk-F4MS62M6.js", "/build/_shared/chunk-O4VUAYAO.js", "/build/_shared/chunk-766Y75P3.js", "/build/_shared/chunk-WFHUTNIN.js", "/build/_shared/chunk-RUCRZFQF.js", "/build/_shared/chunk-FWYXJO67.js", "/build/_shared/chunk-DDF324SJ.js", "/build/_shared/chunk-CLCIXHJ6.js", "/build/_shared/chunk-IFQHMC4N.js", "/build/_shared/chunk-KEKPMWOQ.js", "/build/_shared/chunk-PN6RCZK5.js", "/build/_shared/chunk-K3EFMASK.js", "/build/_shared/chunk-23Z6DNHF.js", "/build/_shared/chunk-T6ROI35C.js", "/build/_shared/chunk-22M7456F.js", "/build/_shared/chunk-QFFKKMU2.js", "/build/_shared/chunk-YH4BB2TK.js", "/build/_shared/chunk-6OZGM5IY.js", "/build/_shared/chunk-YQWUILCZ.js", "/build/_shared/chunk-VQ5D6JES.js", "/build/_shared/chunk-N5HLU6TK.js", "/build/_shared/chunk-KP6LUQ3Q.js", "/build/_shared/chunk-427TOX6R.js", "/build/_shared/chunk-ZU2RJTE2.js", "/build/_shared/chunk-2IYOB2LT.js", "/build/_shared/chunk-7EXTD2R3.js", "/build/_shared/chunk-J3TDMGAW.js", "/build/_shared/chunk-42IK36R6.js", "/build/_shared/chunk-BPPUFWZJ.js", "/build/_shared/chunk-ND2R6GZT.js", "/build/_shared/chunk-I7PVUM4Y.js", "/build/_shared/chunk-YMSTRBLR.js", "/build/_shared/chunk-7BJ4VQEN.js", "/build/_shared/chunk-3OTKGX2J.js", "/build/_shared/chunk-VMZQQVXP.js", "/build/_shared/chunk-J4M63W4K.js", "/build/_shared/chunk-3EQ2TQBX.js", "/build/_shared/chunk-Q2OS5AEM.js", "/build/_shared/chunk-KGZY5H33.js", "/build/_shared/chunk-EXA4XJWT.js", "/build/_shared/chunk-ZMRXYSST.js", "/build/_shared/chunk-3P4X5ASX.js", "/build/_shared/chunk-GKT6LKNB.js", "/build/_shared/chunk-JG54SHQB.js", "/build/_shared/chunk-IA6FKFMJ.js", "/build/_shared/chunk-Z2LU7KJL.js", "/build/_shared/chunk-XMHX3KUQ.js", "/build/_shared/chunk-C2XYHXUU.js", "/build/_shared/chunk-KQ4VMITJ.js", "/build/_shared/chunk-H3OE56GW.js", "/build/_shared/chunk-6ICZ4MNQ.js", "/build/_shared/chunk-SMSR3T7N.js", "/build/_shared/chunk-5YHWXIMH.js", "/build/_shared/chunk-VYJHNE2B.js", "/build/_shared/chunk-66AJCPKP.js", "/build/_shared/chunk-JPRUS5NB.js", "/build/_shared/chunk-W3OC5Y4V.js", "/build/_shared/chunk-HNXZA7IL.js", "/build/_shared/chunk-CBBJ63BX.js", "/build/_shared/chunk-BPQ2SGDV.js", "/build/_shared/chunk-5NYXEEZX.js", "/build/_shared/chunk-LRNIOUG5.js", "/build/_shared/chunk-47CSYKGG.js", "/build/_shared/chunk-QD7OJXWE.js", "/build/_shared/chunk-MHUEO2E7.js", "/build/_shared/chunk-YHNLPHG6.js", "/build/_shared/chunk-NHIHT2FL.js", "/build/_shared/chunk-APRZ4ILT.js", "/build/_shared/chunk-O6DBBTMI.js", "/build/_shared/chunk-7HFMBNZD.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/oxygen": { id: "routes/oxygen", parentId: "root", path: "oxygen", index: void 0, caseSensitive: void 0, module: "/build/routes/oxygen-IWUHLZZU.js", imports: ["/build/_shared/chunk-W23KEKE5.js", "/build/_shared/chunk-GO2O4AEA.js", "/build/_shared/chunk-WKLRDLK3.js", "/build/_shared/chunk-VZYR42VP.js", "/build/_shared/chunk-UZ5QAAOU.js", "/build/_shared/chunk-R6UH7CFB.js", "/build/_shared/chunk-BRENWNJY.js", "/build/_shared/chunk-DBBLCCWL.js", "/build/_shared/chunk-RYFVQNKA.js", "/build/_shared/chunk-GV7PO6WN.js", "/build/_shared/chunk-KQEI4BMA.js", "/build/_shared/chunk-YDRHFXL4.js", "/build/_shared/chunk-FCUNWOOO.js", "/build/_shared/chunk-TB4FK2TK.js", "/build/_shared/chunk-XTETXOVE.js", "/build/_shared/chunk-YDWSCTG6.js", "/build/_shared/chunk-LWH76XIM.js", "/build/_shared/chunk-UMMU2BHZ.js", "/build/_shared/chunk-AMUYGW2N.js", "/build/_shared/chunk-TEDPXH77.js", "/build/_shared/chunk-VLFGLMXY.js", "/build/_shared/chunk-EEUCKNIS.js", "/build/_shared/chunk-SZTSTJTF.js", "/build/_shared/chunk-QT3GZEEY.js", "/build/_shared/chunk-OMNNI6BH.js", "/build/_shared/chunk-BGPNKALF.js", "/build/_shared/chunk-FFBCPNDD.js", "/build/_shared/chunk-PNWAKRWL.js", "/build/_shared/chunk-KNGD23XG.js", "/build/_shared/chunk-NSCFZAIQ.js", "/build/_shared/chunk-YTEBR3NS.js", "/build/_shared/chunk-VT4N7S6Q.js", "/build/_shared/chunk-GMKJKNEN.js", "/build/_shared/chunk-FQ22CFTH.js", "/build/_shared/chunk-ZIARY6RN.js", "/build/_shared/chunk-AXQJYC35.js", "/build/_shared/chunk-JSGCTR7L.js", "/build/_shared/chunk-IVTE73IA.js", "/build/_shared/chunk-LLHNYOVU.js", "/build/_shared/chunk-2YBAPB3R.js", "/build/_shared/chunk-BPKFG657.js", "/build/_shared/chunk-5YCUILXN.js", "/build/_shared/chunk-MUKKLZ5J.js", "/build/_shared/chunk-K3LLCSSP.js", "/build/_shared/chunk-DKEI2NS7.js", "/build/_shared/chunk-CY3DGFU2.js", "/build/_shared/chunk-4AGMBJON.js", "/build/_shared/chunk-34LIPU3P.js", "/build/_shared/chunk-ZOO6V6TD.js", "/build/_shared/chunk-RZZ3LPVQ.js", "/build/_shared/chunk-DF2HVTPY.js", "/build/_shared/chunk-R5L5NLIY.js", "/build/_shared/chunk-IG2RCWL6.js", "/build/_shared/chunk-IADNGBRQ.js", "/build/_shared/chunk-DJPFDZPU.js", "/build/_shared/chunk-FDJ47UAK.js", "/build/_shared/chunk-N7MAINLQ.js", "/build/_shared/chunk-XPQ4TIXQ.js", "/build/_shared/chunk-DTSBRAYD.js", "/build/_shared/chunk-O2DAMZ4X.js", "/build/_shared/chunk-HOQTACCK.js", "/build/_shared/chunk-MWIDPTLR.js", "/build/_shared/chunk-QBXC37TA.js", "/build/_shared/chunk-5KAML3F2.js", "/build/_shared/chunk-VNF7AAZG.js", "/build/_shared/chunk-BARZ57QB.js", "/build/_shared/chunk-YBU5C5SK.js", "/build/_shared/chunk-LXGANFLD.js", "/build/_shared/chunk-BT7YOX4V.js", "/build/_shared/chunk-ZGFO33CT.js", "/build/_shared/chunk-IQ6I77JI.js", "/build/_shared/chunk-L77GZQRT.js", "/build/_shared/chunk-B4MO25WV.js", "/build/_shared/chunk-OB3I3NAF.js", "/build/_shared/chunk-J4LXPGY7.js", "/build/_shared/chunk-W2WZFQB7.js", "/build/_shared/chunk-X5C45DVS.js", "/build/_shared/chunk-BGGLYQQP.js", "/build/_shared/chunk-TKY6YL5U.js", "/build/_shared/chunk-7VJHESNN.js", "/build/_shared/chunk-PMMGHMX2.js", "/build/_shared/chunk-MYAGLM7K.js", "/build/_shared/chunk-6XYYXJX6.js", "/build/_shared/chunk-GCAWYKFC.js", "/build/_shared/chunk-65AN4YQ7.js", "/build/_shared/chunk-2BZ3KTHZ.js", "/build/_shared/chunk-SMQQY2AZ.js", "/build/_shared/chunk-CSE34A3A.js", "/build/_shared/chunk-HKLQXQQJ.js", "/build/_shared/chunk-IP7PF7RF.js", "/build/_shared/chunk-4QXI6PVN.js", "/build/_shared/chunk-FBRRRYPL.js", "/build/_shared/chunk-PINTE7CE.js", "/build/_shared/chunk-AKOAE52J.js", "/build/_shared/chunk-SNAQFTK6.js", "/build/_shared/chunk-UPLOJEJB.js", "/build/_shared/chunk-TAT6EIHP.js", "/build/_shared/chunk-GGLF47VB.js", "/build/_shared/chunk-IKLO5GBF.js", "/build/_shared/chunk-3PUKCNJG.js", "/build/_shared/chunk-Q2ZEVVV3.js", "/build/_shared/chunk-F2EH57OU.js", "/build/_shared/chunk-WJ7IQPC5.js", "/build/_shared/chunk-KPJJPUUU.js", "/build/_shared/chunk-NVAIEAXQ.js", "/build/_shared/chunk-A6VU3OVR.js", "/build/_shared/chunk-ZVDGTAZY.js", "/build/_shared/chunk-MICRD5L4.js", "/build/_shared/chunk-LVZ3LNKN.js", "/build/_shared/chunk-3VM4RNZQ.js", "/build/_shared/chunk-CUGKHUGM.js", "/build/_shared/chunk-JDN2RZI6.js", "/build/_shared/chunk-EUYEOJQ6.js", "/build/_shared/chunk-EHNF5IX4.js", "/build/_shared/chunk-SKUJMYU4.js", "/build/_shared/chunk-7UQVZCQE.js", "/build/_shared/chunk-4M2UDYSY.js", "/build/_shared/chunk-DREEFDBM.js", "/build/_shared/chunk-IEZ5WBDQ.js", "/build/_shared/chunk-2BWMJYYV.js", "/build/_shared/chunk-BSDNM6RF.js", "/build/_shared/chunk-A3UL2PJ6.js", "/build/_shared/chunk-E3LZQ2EN.js", "/build/_shared/chunk-F4MS62M6.js", "/build/_shared/chunk-O4VUAYAO.js", "/build/_shared/chunk-766Y75P3.js", "/build/_shared/chunk-WFHUTNIN.js", "/build/_shared/chunk-RUCRZFQF.js", "/build/_shared/chunk-FWYXJO67.js", "/build/_shared/chunk-DDF324SJ.js", "/build/_shared/chunk-CLCIXHJ6.js", "/build/_shared/chunk-IFQHMC4N.js", "/build/_shared/chunk-KEKPMWOQ.js", "/build/_shared/chunk-PN6RCZK5.js", "/build/_shared/chunk-K3EFMASK.js", "/build/_shared/chunk-23Z6DNHF.js", "/build/_shared/chunk-T6ROI35C.js", "/build/_shared/chunk-22M7456F.js", "/build/_shared/chunk-QFFKKMU2.js", "/build/_shared/chunk-YH4BB2TK.js", "/build/_shared/chunk-6OZGM5IY.js", "/build/_shared/chunk-YQWUILCZ.js", "/build/_shared/chunk-VQ5D6JES.js", "/build/_shared/chunk-N5HLU6TK.js", "/build/_shared/chunk-KP6LUQ3Q.js", "/build/_shared/chunk-427TOX6R.js", "/build/_shared/chunk-ZU2RJTE2.js", "/build/_shared/chunk-2IYOB2LT.js", "/build/_shared/chunk-7EXTD2R3.js", "/build/_shared/chunk-J3TDMGAW.js", "/build/_shared/chunk-42IK36R6.js", "/build/_shared/chunk-BPPUFWZJ.js", "/build/_shared/chunk-ND2R6GZT.js", "/build/_shared/chunk-I7PVUM4Y.js", "/build/_shared/chunk-YMSTRBLR.js", "/build/_shared/chunk-7BJ4VQEN.js", "/build/_shared/chunk-3OTKGX2J.js", "/build/_shared/chunk-VMZQQVXP.js", "/build/_shared/chunk-J4M63W4K.js", "/build/_shared/chunk-3EQ2TQBX.js", "/build/_shared/chunk-Q2OS5AEM.js", "/build/_shared/chunk-KGZY5H33.js", "/build/_shared/chunk-EXA4XJWT.js", "/build/_shared/chunk-ZMRXYSST.js", "/build/_shared/chunk-3P4X5ASX.js", "/build/_shared/chunk-GKT6LKNB.js", "/build/_shared/chunk-JG54SHQB.js", "/build/_shared/chunk-IA6FKFMJ.js", "/build/_shared/chunk-Z2LU7KJL.js", "/build/_shared/chunk-XMHX3KUQ.js", "/build/_shared/chunk-C2XYHXUU.js", "/build/_shared/chunk-KQ4VMITJ.js", "/build/_shared/chunk-H3OE56GW.js", "/build/_shared/chunk-6ICZ4MNQ.js", "/build/_shared/chunk-SMSR3T7N.js", "/build/_shared/chunk-5YHWXIMH.js", "/build/_shared/chunk-VYJHNE2B.js", "/build/_shared/chunk-66AJCPKP.js", "/build/_shared/chunk-JPRUS5NB.js", "/build/_shared/chunk-W3OC5Y4V.js", "/build/_shared/chunk-HNXZA7IL.js", "/build/_shared/chunk-CBBJ63BX.js", "/build/_shared/chunk-BPQ2SGDV.js", "/build/_shared/chunk-5NYXEEZX.js", "/build/_shared/chunk-LRNIOUG5.js", "/build/_shared/chunk-47CSYKGG.js", "/build/_shared/chunk-QD7OJXWE.js", "/build/_shared/chunk-MHUEO2E7.js", "/build/_shared/chunk-YHNLPHG6.js", "/build/_shared/chunk-NHIHT2FL.js", "/build/_shared/chunk-APRZ4ILT.js", "/build/_shared/chunk-O6DBBTMI.js", "/build/_shared/chunk-7HFMBNZD.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/uimods": { id: "routes/uimods", parentId: "root", path: "uimods", index: void 0, caseSensitive: void 0, module: "/build/routes/uimods-YIPS5QJC.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, url: "/build/manifest-82EA8CCB.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { unstable_cssModules: !1, unstable_cssSideEffectImports: !1, unstable_dev: !1, unstable_vanillaExtract: !1, v2_errorBoundary: !1, v2_meta: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/oxygen": {
    id: "routes/oxygen",
    parentId: "root",
    path: "oxygen",
    index: void 0,
    caseSensitive: void 0,
    module: oxygen_exports
  },
  "routes/uimods": {
    id: "routes/uimods",
    parentId: "root",
    path: "uimods",
    index: void 0,
    caseSensitive: void 0,
    module: uimods_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
