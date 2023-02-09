import React from "react";
import { Body, Promo, PromoText, Htext,Ptext2,Ptext3 } from './Style';
import Banner from "../Banner/Banner";
import Display from "../Display/Display"

function Container() {
    return (
        <>
            <Body>
                <Promo>
                    <PromoText>Ganhe R$ 10,00 de desconto no frete</PromoText>
                </Promo>
                <Htext>JordanShoes</Htext>
                <Banner />
                <Ptext2>Destaques</Ptext2>
                <Ptext3>Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado. </Ptext3>
                <Display/>

            </Body>
        </>
    )
}
export default Container;