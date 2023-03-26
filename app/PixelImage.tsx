import React, { Component } from "react";
import { LinksFunction } from "@remix-run/react/dist/routeModules";
import "./PixelImage.css";

export { PixelImage };
// export const links: LinksFunction = () => [
//   { rel: "stylesheet", href: stylePixelImage },
// ];

class PixelImage extends Component<
  React.CSSProperties | React.ImgHTMLAttributes<HTMLImageElement>
> {
  src: string;
  constructor(props: any) {
    super(props);
    this.src = props.src;
  }
  render() {
    return (
      <img
        className="PixelImage"
        style={{
          imageRendering: "pixelated",
          ...this.props,
        }}
        src={this.src}
      />
    );
  }
}
