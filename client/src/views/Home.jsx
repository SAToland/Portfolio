import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import DoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import DoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AnimatedSection from '../components/animate';
import PhoneFrame from '../components/PhoneFrame';
import projects from '../data/projects';
import beartrax from '../data/beartrax';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';

const skills = [
    'Flutter', 'Dart', 'Firebase', 'React', 'JavaScript', 'TypeScript',
    'Java', 'Spring Boot', 'Python', 'MongoDB', 'SQL', 'HTML/CSS',
];

const Home = () => {
    const [showElement, setshowElement] = useState(false);

    useEffect(() => {
        document.title = 'Seth Toland — Full Stack & Mobile Developer';
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => setshowElement(true), 50);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div id="container">
            <AnimatedSection className="pageSection topSection">
                <div className="nameContainer">
                    <span className="name">
                        <DoubleArrowRightIcon className={`nameArrowIcon${showElement ? " animateIn" : ""} leftArrow`} style={{ fontSize: '1.5rem' }}/>
                        Seth Toland
                        <DoubleArrowLeftIcon className={`nameArrowIcon${showElement ? " animateIn" : ""} rightArrow`} style={{ fontSize: '1.5rem' }}/>
                    </span>
                    <Container fluid>
                        <p className="introText text-center mx-auto fs-6 fs-md-4">
                            <i><b>Hi, I'm Seth Toland — a full stack and mobile developer.</b></i>{' '}
                            I built and maintain <Link to="/beartrax"><u><b>BearTrax</b></u></Link>, an
                            offline-first Flutter app an oilfield services company runs its daily safety
                            reporting and payroll on. Here's <a href="#projects"><u><b>what I've built</b></u></a>.
                        </p>
                    </Container>
                </div>
                <h2>Full Stack &amp; Mobile Developer</h2>
                <DoubleArrowDownIcon className={`arrowIcon${showElement ? " animateIn" : ""}`}/>
            </AnimatedSection>

            <AnimatedSection className="pageSection projectSection">
                <h3 id="projects">Featured Work</h3>

                <AnimatedSection className="featuredWrap">
                    <Container>
                        <div className="featuredCard">
                            <Row className="align-items-center g-4">
                                <Col md={5} className="featuredShotCol">
                                    <PhoneFrame
                                        src={beartrax.screenshots[0].src}
                                        alt={beartrax.screenshots[0].alt}
                                        caption={null}
                                        className="featuredPhone"
                                    />
                                </Col>
                                <Col md={7}>
                                    <span className="featuredLabel">Featured project</span>
                                    <h4 className="featuredTitle">{beartrax.name}</h4>
                                    <p className="featuredClient">
                                        {beartrax.client}
                                        <span className="featuredStatus">{beartrax.status}</span>
                                    </p>
                                    <p className="featuredPitch">{beartrax.tagline}</p>
                                    <p className="featuredBlurb">
                                        Digital safety and billing forms that generate print-ready PDFs,
                                        feed automatic payroll reporting, and keep working when the crew
                                        is out of signal.
                                    </p>

                                    <div className="featuredStats">
                                        {beartrax.headlineStats.map((stat) => (
                                            <div className="featuredStat" key={stat.label}>
                                                <span className="featuredStatValue">{stat.value}</span>
                                                <span className="featuredStatLabel">{stat.label}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="featuredBadges">
                                        {beartrax.techBadges.map((tech) => (
                                            <span className="techBadge" key={tech}>{tech}</span>
                                        ))}
                                    </div>

                                    <Link to="/beartrax" className="featuredCta">
                                        Read the case study
                                        <ArrowForwardIcon />
                                    </Link>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </AnimatedSection>

                <h3 className="otherProjectsTitle">Other Projects</h3>
                <AnimatedSection className="projectGrid">
                    <Container>
                        <Row>
                            {projects.map((project) => (
                                <Col md={6} key={project.id}>
                                    <div className={`projectBox${showElement ? " animateIn" : ""}`}>
                                        <Image
                                            fluid
                                            className="projectImage"
                                            src={project.image}
                                            alt={project.imageAlt}
                                            width="500px"
                                            height="300px"
                                            style={{ borderRadius: "30px" }}
                                        />
                                        <div className="projectTextArea">
                                            <h4 className="projectText">{project.title}</h4>
                                            <p className="projectText">{project.blurb}</p>
                                        </div>
                                        <div className="projectButtonsArea">
                                            {project.links.map((link) => (
                                                <a
                                                    key={link.label}
                                                    href={link.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <button className="projectButton">{link.label}</button>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </AnimatedSection>

                <h3 className="skillsTitle" id="skills">Skills &amp; Technologies</h3>
                <AnimatedSection className="skillGrid mb-5">
                    <Container>
                        <div className="skillRow">
                            {skills.map((skill, i) => (
                                <Badge
                                    key={skill}
                                    className="skillButton customSkillBadge fs-6 fs-md-5 py-2 py-md-3 px-3 px-md-4"
                                    style={{ "--i": i + 1 }}
                                >
                                    {skill}
                                </Badge>
                            ))}
                        </div>
                    </Container>
                </AnimatedSection>
            </AnimatedSection>

            <AnimatedSection className="footerSection">
                <h3>Let's Connect</h3>
                <p>
                    <PersonPinCircleIcon sx={{ fontSize: 20, marginRight: "8px", position: "relative", top: "2px" }}/>
                    Plano, TX
                </p>
                <div>
                    <a href="mailto:tolandseth@gmail.com">
                        <button className="footerButton"><EmailIcon/>Get in Touch</button>
                    </a>
                    <a href="/Seth_Toland_Resume.pdf" target="_blank" rel="noopener noreferrer">
                        <button className="footerButton"><DescriptionIcon/>View Resume</button>
                    </a>
                </div>
                <div>
                    <a href="https://github.com/SAToland" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <button className="socialButton"><GitHubIcon/></button>
                    </a>
                    <a href="https://www.linkedin.com/in/seth-toland/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <button className="socialButton"><LinkedInIcon/></button>
                    </a>
                </div>
            </AnimatedSection>
        </div>
    );
};

export default Home;
