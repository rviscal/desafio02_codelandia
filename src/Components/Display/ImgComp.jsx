import React from "react";
import { Box1 } from "./Style";
import ImgData from "./ImgData";


function ImgRender () {
    
  const Listimg= ImgData.map((item,i)=>{
    return(
      <img key={i} src={item.url} alt='img'/>
    )
  })
 
  return (
    <>
    <Box1>
      {Listimg}
    </Box1>
    </>
  );
  }
export default ImgRender;
