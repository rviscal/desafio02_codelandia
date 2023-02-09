import React from "react";
import { BannerDiv, ImgBanner, TitleBanner, PBanner } from "./BannerStyle";
import JordanBanner from "../../Assets/JordanBanner.png"

function Banner() {
    return (
        <>
            <BannerDiv>
                <ImgBanner src={JordanBanner} />
                <TitleBanner>A melhor loja de Jordan</TitleBanner>
                <PBanner>O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan.</PBanner>
            </BannerDiv>
        </>
    )
}
export default Banner;