import React, { Component } from "react";
export { PixelImage };
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
