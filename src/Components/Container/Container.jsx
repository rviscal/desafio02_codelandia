import React from "react";
import { BarBlack, BpText, Htext, Ptext2, Ptext3 } from "./Style";
import Banner from "../Banner/Banner";
import Display from "../Display/Display";

function Container() {
  return (
    <>
      <BarBlack>
        <BpText>Ganhe R$ 10,00 de desconto no frete</BpText>
      </BarBlack>
      <Htext>JordanShoes</Htext>
      <Banner />
      <Ptext2>Destaques</Ptext2>
      <Ptext3>
        Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado.{" "}
      </Ptext3>
      <Display />
      <BarBlack>
        <BpText>Todos os direitos reservados.</BpText>
      </BarBlack>
    </>
  );
}
export default Container;
