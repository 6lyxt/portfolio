import * as React from 'react';
import {FC} from 'react';
import NavItem from "./NavItem";
// @ts-ignore
import * as style from "../../pages/style/global.module.css"
import { Scrambler } from "react-text-scrambler";


const NavComponent: FC = () => {
    return (
        <main>
            <div className={style.navbar}>
                <ul>
                    <NavItem Name={"Home"} URL={"/"}> </NavItem>
                    <NavItem Name={"Projects"} URL={"/projects"}> </NavItem>
                    <NavItem Name={"About Me"} URL={"/about"}> </NavItem>
                    <li><h2 className={style.navTitle}>
                        <Scrambler text="6lyxt.rip" typewriter={true} renderIn={1000} />
                    </h2></li>
                </ul>
            </div>
        </main>
    )
}

export default NavComponent