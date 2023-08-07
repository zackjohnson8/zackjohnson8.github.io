import ProjectCard from './ProjectCard';
import './Projects.css'

const Projects = () => {
    const projectsData = [
        {
            id: 1,
            title: 'Pocket Professional',
            description: 'A deployed iOS app that leverages the use of ChatGPT API.',
            url: 'https://apps.apple.com/us/app/pocket-professional/id6449138114'
        },
        {
            id: 2,
            title: 'Food for Traders',
            description: 'A financial news and analysis website for traders.',
            url: 'https://www.foodfortraders.com/'
        },
        {
            id: 3,
            title: 'PinDit',
            description: 'Keep track of your travels with PinDit. Pin your favorite places on the map and add notes.',
            url: 'https://apps.apple.com/us/app/pindit/id1547133643'
        }
    ];

    return (
        <div className="Projects">
            <h1>Recent Projects</h1>
            <div className="ProjectsGrid">
                {/* Setup skillsData as a two column grid*/}
                {projectsData.map(skill => (
                    <ProjectCard
                        key={skill.id}
                        title={skill.title}
                        description={skill.description}
                        url={skill.url}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
