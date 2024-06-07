import github from '../images/github.png'
import linkedin from '../images/linkedin.png'
import html from '../images/html.png'
import css from '../images/css.png'
import js from '../images/js.png'
import react from '../images/react.png'
import sql from "../images/sql.png";
import mongodb from "../images/mongodb.png";
import python from "../images/python1.png";


export default function Home() {
    const linkedinUrl = "https://www.linkedin.com/in/vlomeliponce/";
    const githubUrl = "https://github.com/vlomeli";

    return (
      <>
        <section className="home">
          <div className="home-content">
            <h1>Hi, I'm Victor Lomeli Ponce</h1>
            <h3 className='typing-animation'>Full-stack Web Developer</h3>
            <p>
              Take a peek at what I've been working on. Whether you have a
              project idea or just want to chat about web development, feel free
              to reach out! Thank you for stopping by! 🚀
            </p>
            <div className="socials">
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <img src={linkedin} alt="linkedin logo"></img>
              </a>

              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <img src={github} alt="linkedin logo"></img>
              </a>
            </div>
            <div className="techstack">
              <h2>
                <span className="tech-icons">
                  <img
                    src={html}
                    alt="linkedin logo"
                    className="tech-icon"
                  ></img>
                  <img
                    src={css}
                    alt="linkedin logo"
                    className="tech-icon"
                  ></img>
                  <img src={js} alt="linkedin logo" className="tech-icon"></img>
                  <img
                    src={python}
                    alt="linkedin logo"
                    className="tech-icon"
                  ></img>
                  <img
                    src={react}
                    alt="linkedin logo"
                    className="tech-icon"
                  ></img>
                  <img
                    src={sql}
                    alt="linkedin logo"
                    className="tech-icon"
                  ></img>
                  <img
                    src={mongodb}
                    alt="linkedin logo"
                    className="tech-icon"
                  ></img>
                </span>
              </h2>
            </div>
          </div>
        </section>
      </>
    );
}