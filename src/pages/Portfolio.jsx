import Project from "./Project";
import projects from "../../projects.json";

export default function Portfolio() {

    return (
        <div>
            <h1>Portfolio</h1>
            <section id="my-work" className="container-full my-work">
                <ul className="project-list">
                    {projects.map((projects) => (
                        <li className={projects.id} key={projects.id}>
                            < Project projects={projects} />
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};