import React from "react";
import { Boddy,Promo,PromoText,H1Jordan} from './containerStyle';
import Banner from "./Banner";

function Container() {
    return (
        <>
            <Boddy>
                <Promo>
                    <PromoText>Ganhe R$ 10,00 de desconto no frete</PromoText>
                </Promo>
                <H1Jordan>JordanShoes</H1Jordan>
                <Banner/>
                
            </Boddy>
        </>
    )
}
export default Container;