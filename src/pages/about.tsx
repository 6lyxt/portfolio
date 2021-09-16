import * as React from 'React';
import IndexPage from "./index";
import NavComponent from "../components/NavComponent/NavComponent";
// @ts-ignore
import * as style from "./style/global.module.css"


const AboutPage = () => {
    return (
        <main>
            <title>Portfolio Seite | About</title>
            <NavComponent> </NavComponent>
            <div className={style.container + " " + style.textCenter}>
                <h1>About me</h1>
                <p> I'm literally just retarded </p>
            </div>
        </main>
    )
}

export default AboutPage