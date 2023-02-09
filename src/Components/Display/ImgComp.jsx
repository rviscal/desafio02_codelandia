import React from "react";
import ImgData from "./ImgData";
import { Box1 } from "./Style.jsx";

function img() {
  return (
    <div>
      {ImgData.map((item) => (
        <Box1>{item}</Box1>
      ))}
    </div>
  );
}
export default img;
