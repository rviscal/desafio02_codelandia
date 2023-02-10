import React from "react";
import { ImgData } from "./ImgData";
import { Box1, Container } from "./Style";
import { ImgStyle } from "./Style";

function ImgRender() {
  const Listimg = ImgData.map((item, i) => (
    <Box1>
      <ImgStyle key={i} src={item.url} alt="img" />
    </Box1>
  ));

  return (
    <>
      <Container>{Listimg}</Container>
    </>
  );
}
export default ImgRender;
