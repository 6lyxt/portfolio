import * as React from 'react';
import {FC} from 'react';
import NavComponent from "../components/NavComponent/NavComponent";
// @ts-ignore
import * as style from "./style/global.module.css"
// @ts-ignore
import {StaticImage} from "gatsby-plugin-image";


const IndexPage: FC = () => {
    return (
        <main>
            <title>Portfolio Seite</title>
            <NavComponent> </NavComponent>
            <div className={style.container + " " + style.textCenter}>
                <h1> Hello </h1>
                <p>I'm 6lyxt, weeb & wannabe developer</p>
                <StaticImage src={"../images/wave.png"} alt={"Waving Hand"} width={250} className={style.wavingHand} />
            </div>
        </main>
    )
}

export default IndexPage