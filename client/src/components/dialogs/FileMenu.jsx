import { Menu } from "@mui/material";
import React from "react";

const FileMenu = ({ anchorE1 }) => {
  return (
    <Menu anchorEl={anchorE1} open={false}>
      <div
        style={{
          width: "10rem",
        }}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga enim
        magni neque minus, molestias sit, illum consequatur deleniti, magnam at
        asperiores libero amet facilis. Voluptates nemo ipsum
      </div>
    </Menu>
  );
};

export default FileMenu;
