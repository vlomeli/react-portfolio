import github from '../images/github.png'
import linkedin from '../images/linkedin.png'
import html from '../images/html.png'
import css from '../images/css.png'
import js from '../images/js.png'
import react from '../images/react.png'
import bootstrap from '../images/bootstrap.png'

export default function Home() {
    const linkedinUrl = "https://www.linkedin.com/in/vlomeliponce/";
    const githubUrl = "https://github.com/vlomeli";

    return (
        <>
    <section className="home">
        <div className="home-content">
            <h1>Hi, I'm Victor Lomeli-Ponce</h1>
            <h3>Frontend Web Developer</h3>
            <p>Take a peek at what I've been working on. 
                Whether you have a project idea or just want to chat about web development, feel free to reach out! 
                Thank you for stopping by! 🚀</p>
        <div className="socials">
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="linkedin logo"></img>
            </a>
        
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <img src={github} alt="linkedin logo"></img>
            </a>
        </div>
        <div className="techstack">
            <h2>
               
                    <span className="tech-icons">
                    <img src={html} alt="linkedin logo"></img> 
                    <img src={css} alt="linkedin logo"></img> 
                    <img src={js} alt="linkedin logo"></img> 
                    <img src={react} alt="linkedin logo"></img> 
                    <img src={bootstrap} alt="linkedin logo"></img> 
                </span>
            </h2>
        </div>
    </div>
        
    </section>
        </>
    )
}