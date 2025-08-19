import { useEffect, useState } from 'react';
import { useNavigate, Link, Route } from 'react-router-dom';
import tournamentImg from '../assets/images/tournamentImg.jpg';
import DoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import DoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import DoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AnimatedSection from '../components/animate';
import resume from '../assets/files/Seth_Toland_Resume.pdf';
import portfolioImg from '../assets/images/portfolioImg.jpg';



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
                <div className='nameContainer'>
                    <span className='name'>
                        <DoubleArrowRightIcon className={`nameArrowIcon${showElement ? " animateIn" : ""} leftArrow`} style={{ fontSize: '1.5rem' }}/>
                        Seth Toland
                        <DoubleArrowLeftIcon className={`nameArrowIcon${showElement ? " animateIn" : ""} rightArrow`} style={{ fontSize: '1.5rem' }}/>
                    </span>
                    <span className='introText'>
                        <p className='introText'>
                        <i><b>Hi, I'm Seth Toland — a full-stack developer passionate about React & JavaScript. </b></i>
                        I build applications end-to-end with tools like <b>MongoDB</b> & <b>SQL</b>. 
                        This portfolio highlights my <a href="#projects"><u><b>projects and skills</b></u></a> as I look for exciting new opportunities.
                        </p>
                    </span>
                </div>
                <h2>Full Stack Developer</h2>
                <DoubleArrowDownIcon className={`arrowIcon${showElement ? " animateIn" : ""}`}/>
            </AnimatedSection>
            <AnimatedSection className="pageSection projectSection">
                <h3 id='projects'>Featured Projects</h3>
                <AnimatedSection className="projectGrid">
                    <div className={`projectBox${showElement ? " animateIn" : ""}`}>
                    <img className="projectImage" src={portfolioImg} alt="Tournament Image" width="500px" height="300px" style={{borderRadius: "30px"}}/>
                    <div className="projectTextArea">
                        <h4 className="projectText">Portfolio</h4>
                        <p className="projectText">This websites github repo</p>
                    </div>
                    <div className="projectButtonsArea">
                        <a href="https://github.com/SAToland/tournament-generator" target="_blank">
                            <button className="projectButton">GitHub</button>
                        </a>
                    </div>
                    </div>
                    <div className={`projectBox${showElement ? " animateIn" : ""}`}>
                        <img className="projectImage" src={tournamentImg} alt="Tournament Image" width="500px" height="300px" style={{borderRadius: "30px"}}/>
                        <div className="projectTextArea">
                            <h4 className="projectText">Tournament Generator</h4>
                            <p className="projectText">Dynamic tournament bracket generator & tracker</p>
                        </div>
                        <div className="projectButtonsArea">
                            <a href="https://github.com/SAToland/tournament-generator" target="_blank">
                                <button className="projectButton">GitHub</button>
                            </a>
                        </div>
                    </div>
                </AnimatedSection>
                <h3 className="skillsTitle" id='skills'>Skills & Technologies</h3>
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
                            <a  href={resume} target='_blank' rel='noopener noreferrer'><button className="footerButton"><DescriptionIcon/>View Resume</button></a>
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