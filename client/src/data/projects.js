import portfolioImg from '../assets/images/portfolioImg.webp';
import tournamentImg from '../assets/images/tournamentImg.webp';

// Secondary projects, rendered as the card grid on the home page. BearTrax is
// deliberately not in here — it gets the featured block and its own case study
// page (see ./beartrax.js).
const projects = [
    {
        id: 'tournament-generator',
        title: 'Tournament Generator',
        blurb: 'Dynamic tournament bracket generator & tracker',
        image: tournamentImg,
        imageAlt: 'Players competing at a bank of monitors in a dim esports arena',
        links: [
            { label: 'GitHub', href: 'https://github.com/SAToland/tournament-generator' },
        ],
    },
    {
        id: 'portfolio',
        title: 'Portfolio',
        blurb: "This website's GitHub repo",
        image: portfolioImg,
        imageAlt: 'A monitor and keyboard lit by blue and magenta neon light',
        links: [
            { label: 'GitHub', href: 'https://github.com/SAToland/Portfolio' },
        ],
    },
];

export default projects;
