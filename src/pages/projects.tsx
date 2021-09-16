import * as React from 'React';
import NavComponent from "../components/NavComponent/NavComponent";
// @ts-ignore
import * as style from "./style/global.module.css"
import Axios from 'axios';
import ProjectItem from "../components/ProjectComponent/ProjectItem";
import {useEffect, useState} from "react";


const ProjectsPage = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        Axios.get("https://api.github.com/users/6lyxt/repos?sort=updated&direction=desc").then(res => {
           setProjects(res.data);
        })
    }, [])


    return (
        <main>
            <title>Portfolio Seite | Projects</title>
            <NavComponent> </NavComponent>
            <div className={style.container + " " + style.textCenter}>
                <h1>Projects</h1>
                {
                    projects.map((project, index) => {
                        return (
                            <ProjectItem Name={project.name} Description={project.description} Stars={project.stargazers_count} URL={project.html_url} />
                        )
                    })
                }
            </div>
        </main>
    )
}

export default ProjectsPage