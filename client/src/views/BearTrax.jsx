import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import BugReportIcon from '@mui/icons-material/BugReport';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';
import AnimatedSection from '../components/animate';
import PhoneFrame from '../components/PhoneFrame';
import beartrax from '../data/beartrax';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './BearTrax.css';

const BearTrax = () => {
    useEffect(() => {
        document.title = 'BearTrax — Case Study | Seth Toland';
        return () => {
            document.title = 'Seth Toland — Full Stack & Mobile Developer';
        };
    }, []);

    return (
        <div className="caseStudy">
            <Container className="caseNav">
                <Link to="/" className="caseBackLink">
                    <ArrowBackIcon />
                    Back to portfolio
                </Link>
            </Container>

            <AnimatedSection className="caseHero">
                <Container>
                    <Row className="align-items-center g-5">
                        <Col lg={7}>
                            <span className="caseEyebrow">Case study</span>
                            <h1 className="caseTitle">{beartrax.name}</h1>
                            <p className="caseClient">{beartrax.client}</p>
                            <p className="caseTagline">{beartrax.tagline}</p>
                            <p className="caseStatus">
                                <CheckCircleOutlineIcon />
                                <span>
                                    <strong>{beartrax.status}.</strong> {beartrax.statusDetail}
                                </span>
                            </p>
                            <div className="caseBadges">
                                {beartrax.techBadges.map((tech) => (
                                    <span className="techBadge" key={tech}>{tech}</span>
                                ))}
                            </div>
                        </Col>
                        <Col lg={5} className="caseHeroShot">
                            <PhoneFrame
                                src={beartrax.screenshots[0].src}
                                alt={beartrax.screenshots[0].alt}
                                caption={null}
                            />
                        </Col>
                    </Row>
                </Container>
            </AnimatedSection>

            <AnimatedSection className="caseStats">
                <Container>
                    <div className="statRow">
                        {beartrax.stats.map((stat) => (
                            <div className="statCell" key={stat.label}>
                                <span className="statValue">{stat.value}</span>
                                <span className="statLabel">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </Container>
            </AnimatedSection>

            <AnimatedSection className="caseBlock">
                <Container>
                    <div className="caseProse">
                        <h2>{beartrax.problem.heading}</h2>
                        {beartrax.problem.body.map((para, i) => (
                            <p key={i}>{para}</p>
                        ))}
                    </div>
                </Container>
            </AnimatedSection>

            <AnimatedSection className="caseBlock">
                <Container>
                    <div className="caseProse">
                        <h2>How it works</h2>
                        {beartrax.sections.map((section) => (
                            <section className="caseSubsection" key={section.heading}>
                                <h3>{section.heading}</h3>
                                {section.body.map((para, i) => (
                                    <p key={i}>{para}</p>
                                ))}
                            </section>
                        ))}
                    </div>
                </Container>
            </AnimatedSection>

            <AnimatedSection className="caseBlock caseScreens">
                <Container>
                    <div className="caseProse">
                        <h2>In the app</h2>
                    </div>
                    <Row className="g-4 justify-content-center">
                        {beartrax.screenshots.map((shot) => (
                            <Col xs={6} lg={3} key={shot.id}>
                                <PhoneFrame src={shot.src} alt={shot.alt} caption={shot.caption} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </AnimatedSection>

            <AnimatedSection className="caseBlock caseDebug">
                <Container>
                    <div className="caseProse">
                        <h2>{beartrax.debugging.heading}</h2>
                        <p className="caseDebugIntro">{beartrax.debugging.intro}</p>
                    </div>
                    <Row className="g-4">
                        {beartrax.debugging.cases.map((item) => (
                            <Col md={6} key={item.title}>
                                <div className="debugCard">
                                    <BugReportIcon className="debugIcon" />
                                    <h3>{item.title}</h3>
                                    <p>{item.body}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </AnimatedSection>

            <AnimatedSection className="caseBlock">
                <Container>
                    <Row className="g-5">
                        <Col lg={6}>
                            <div className="caseProse">
                                <h2>What's in it</h2>
                                <ul className="featureList">
                                    {beartrax.features.map((feature) => (
                                        <li key={feature}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="caseProse">
                                <h2>Stack</h2>
                                <dl className="stackList">
                                    {beartrax.stack.map((row) => (
                                        <div className="stackRow" key={row.layer}>
                                            <dt>{row.layer}</dt>
                                            <dd>{row.detail}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </AnimatedSection>

            <AnimatedSection className="caseFooter">
                <Container className="text-center">
                    <h2>Want the detail?</h2>
                    <p>
                        The repository is private and owned by the client, so there's no public link —
                        but I'm happy to walk through the architecture or the code.
                    </p>
                    <div className="caseFooterButtons">
                        <a href="mailto:tolandseth@gmail.com">
                            <button className="footerButton"><EmailIcon/>Get in Touch</button>
                        </a>
                        <a href="/Seth_Toland_Resume.pdf" target="_blank" rel="noopener noreferrer">
                            <button className="footerButton"><DescriptionIcon/>View Resume</button>
                        </a>
                    </div>
                    <Link to="/" className="caseBackLink caseBackBottom">
                        <ArrowBackIcon />
                        Back to portfolio
                    </Link>
                </Container>
            </AnimatedSection>
        </div>
    );
};

export default BearTrax;
