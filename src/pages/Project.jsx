
export default function Project({ projects }) {

    return (
        <div>
            <div className="project-description">
                <div className="row proj-urls">
                    <a href={projects.pageUrl} className="project-title" target="_blank" rel="noreferrer">{projects.name}</a>
                    <a href={projects.githubUrl} target="_blank" rel="noreferrer"><span className="icon icon-github"></span></a>
                </div>
                <p>{projects.description}</p>
            </div>
        </div>
    );

};