import resume from "../assets/resume/stwomey_resume.pdf";

export default function Resume() {

    return (
        <div>
            <h1>Resume</h1>
            <section className="container-full resume">
                <p>Download My
                    <a href={resume} download> [ Resume ]</a>
                </p>
                <section className="proficiencies">
                    <div className="frontEnd">
                        <h2>Front-End Proficiencies</h2>
                        <ul>
                            <li>Accessibilty</li>
                            <li>Bootstrap</li>
                            <li>Client-side APIs</li>
                            <li>CSS</li>
                            <li>HTML</li>
                            <li>Javascript</li>
                            <li>jQuery</li>
                            <li>React</li>
                            <li>Resposive Design</li>
                        </ul>
                    </div>
                    <div className="backEnd">
                        <h2>Back-End Proficiencies</h2>
                        <ul>
                            <li>Express</li>
                            <li>GraphQL</li>
                            <li>MongoDB</li>
                            <li>Mongoose</li>
                            <li>MySQL</li>
                            <li>Node</li>
                            <li>REST API</li>
                            <li>Sequelize</li>
                            <li>Server-Side APIs</li>
                        </ul>
                    </div>
                </section>
            </section>
        </div>
    );

};