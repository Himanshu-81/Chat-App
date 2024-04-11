import React from "react";
import { tranformImage } from "../../lib/features";

const RederAttachment = ({ file, url }) => {
  switch (file) {
    case "video":
      <video src={url} preload="none" width={"200px"} controls />;
      break;

    case "image":
      <img
        src={tranformImage(url, 200)}
        alt="Attachment"
        width={"200px"}
        height={"150px"}
        style={{
          objectFit: "contain",
        }}
      />;
      break;
    default:
      break;
  }
};

export default RederAttachment;
