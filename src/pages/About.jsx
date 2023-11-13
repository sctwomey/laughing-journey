import avatar from '../assets/images/male-avatar.jpg';

export default function About() {
    return (
        <section className="container-full" id="about">
            <h1>About Me</h1>
            <div className="row">
                <div className="about-me d-flex justify-content-even">
                    <img src={avatar} alt="male avatar profile picture" />
                    <div>
                        <p>Welcome!</p>
                        <p>
                            I am a Full-Stack Developer.
                        </p>
                        <p>
                            I completed a Full-Stack Coding Bootcamp from The University of North Carolina at Charlotte in November 2023.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}