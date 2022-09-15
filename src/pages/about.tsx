import * as React from 'React';
import IndexPage from "./index";
import NavComponent from "../components/NavComponent/NavComponent";
// @ts-ignore
import * as style from "./style/global.module.css"
import {Link} from "gatsby";


const AboutPage = () => {
    return (
        <main>
            <title>Portfolio Seite | About</title>
            <NavComponent> </NavComponent>
            <div className={style.container + " " + style.textCenter}>
                <h1>About me</h1>
                <p> I am 17 y/o apprentice web developer @ <a href={"https://www.cic.at/"}>CIC</a> Also, I'm heavily interested in motorsports & enthusiast cars :) </p>
                <p>An overview of my private projects is available on <Link to={"/projects/"}>Projects</Link>, but please consider that most of my projects were started before I started working as a web developer. </p>

            </div>
        </main>
    )
}

export default AboutPage
