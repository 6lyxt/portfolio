import * as React from 'react';
import {FC} from "react";
// @ts-ignore
import * as style from "../../pages/style/global.module.css"
import {Link} from "gatsby";


type ProjectItemData = {
    Name: string,
    Description: string,
    URL: string,
    Stars: number
}

const ProjectItem:FC<ProjectItemData> = (props) => {
    return (
        <div className={style.projectItem}>
            <h2><Link to={props.URL}>{props.Name}</Link></h2>
            <p>{props.Description}</p>
            <Link to={props.URL + "/stargazers"}>{props.Stars} ⭐</Link>

        </div>
    )

}

export default ProjectItem