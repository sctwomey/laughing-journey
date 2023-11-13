
export default function Project({ projects }) {

    return (
        <div>
            <div className="project-description">
                <div className="container d-flex justify-content-between">
                    <a href={projects.pageUrl} className="project-title" target="_blank" rel="noreferrer">{projects.name}</a>
                    <a href={projects.githubUrl} target="_blank" rel="noreferrer"><span className="icon icon-github"></span></a>
                </div>
                <div className="proj-desc">
                    <p>{projects.description}</p>
                </div>
            </div>
        </div>
    );

};