import { useEffect, useState } from 'react';
import { useNavigate, Link, Route } from 'react-router-dom';
import tournamentImg from '../assets/images/tournamentImg.jpg';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AnimatedSection from '../components/animate';
import resume from '../assets/files/Seth_Toland_Resume.pdf'



const Home = () => {
 const [showElement, setshowElement] = useState(false)
 let skills = ["React", "JavaScript", "Java", "Python", "HTML/CSS", "MongoDB", "SQL", "Spring Boot"]

 useEffect(() => {
    const timer = setTimeout(() => setshowElement(true), 50)
    return () => clearTimeout(timer);
 }, []);


    return (
        <div id="container">
            <AnimatedSection className="pageSection topSection">
                <h1>Seth Toland</h1>
                <h2>Full Stack Developer</h2>
                <KeyboardDoubleArrowDownIcon className={`arrowIcon${showElement ? " animate-in" : ""}`}/>
            </AnimatedSection>
            <AnimatedSection className="pageSection projectSection">
                <h3>Featured Projects</h3>
                <div className={`projectBox${showElement ? " animate-in" : ""}`}>
                    <img className="projectImage" src={tournamentImg} alt="Tournament Image" width="500px" height="300px" style={{borderRadius: "30px"}}/>
                    <div className="projectTextArea">
                        <h4 className="projectText">Tournament Generator</h4>
                        <p className="projectText">Dynamic tournament bracket generator & tracker</p>
                    </div>
                    <div className="projectButtonsArea">
                        <button className="projectButton">View Project</button>
                        <a href="https://github.com/SAToland/tournament-generator" target="_blank">
                            <button className="projectButton">GitHub</button>
                        </a>
                    </div>
                </div>
                <h3 className="skillsTitle">Skills & Technologies</h3>
                <AnimatedSection className="skillGrid">
                        {skills.map((skill, i) => (
                            <button 
                            className="skillButton"
                            style={{"--i" : i + 1}}
                            key={skill}
                            >
                                {skill}
                            </button>
                        ))}
                </AnimatedSection>
            </AnimatedSection>
            <AnimatedSection className="footerSection">
                        <h3>Let's Connect</h3>
                        <p><PersonPinCircleIcon sx={{fontSize: 20, marginRight: "8px", position: "relative", top: "2px"}}/>The Colony, TX</p>
                        <div>
                            <a href="mailto:tolandseth@gmail.com"><button className="footerButton"><EmailIcon/>Get in Touch</button></a>
                            <a  href={resume} download="Seth_Toland_Resume"><button className="footerButton"><DescriptionIcon/>View Resume</button></a>
                        </div>
                        <div>
                            <a href="https://github.com/SAToland" target="_blank"><button className="socialButton"><GitHubIcon/></button></a>
                            <a href="https://www.linkedin.com/in/seth-toland/" target="_blank"><button className="socialButton"><LinkedInIcon/></button></a>
                        </div>

            </AnimatedSection>
        </div>
    )
}

export default Home;