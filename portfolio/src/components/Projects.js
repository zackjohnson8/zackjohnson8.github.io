import ProjectCard from './ProjectCard';
import './Projects.css'

const Projects = () => {
    const projectsData = [
        {
            id: 1,
            title: 'Food for Traders',
            description: 'A financial news and analysis website for traders.',
            url: 'https://www.foodfortraders.com/'
        },
        {
            id: 2,
            title: 'PinDit',
            description: 'Keep track of your travels with PinDit. Pin your favorite places on the map and add notes.',
            url: 'https://apps.apple.com/us/app/pindit/id1547133643'
        },
        {
            id: 3,
            title: 'TeamCity Server',
            description: 'Launch your own TeamCity instance on your local machine using Docker.',
            url: 'https://github.com/zackjohnson8/TeamCityServer'
        }
    ];

    return (
        <div className="Projects">
            <h2>Projects</h2>
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