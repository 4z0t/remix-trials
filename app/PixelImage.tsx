import React, { Component } from "react";
import { LinksFunction } from "@remix-run/react/dist/routeModules";
import "./PixelImage.css";

export { PixelImage };
// export const links: LinksFunction = () => [
//   { rel: "stylesheet", href: stylePixelImage },
// ];

class PixelImage extends Component<
  React.ImgHTMLAttributes<HTMLImageElement>,
  React.CSSProperties
> {
  render() {
    return (
      <img
        className="PixelImage"
        style={{
          imageRendering: "pixelated",
          ...this.props.style
        }}
        src={this.props.src}
      />
    );
  }
}
