import SkillCard from './SkillCard';

const Skills = () => {
    const skillsData = [
        {
            id: 1,
            title: 'Python',
            description: 'Leveraged Python to develop a suite of automation tools, integrating with the TeamCity API, ' +
                'to create a responsive system for real-time adaptation to changes within the TeamCity environment. ' +
                'Developed a backend system for retrieving information to feed my website ' +
                'https://www.foodfortraders.com/',
            // optionally, you could add a url to an image or icon representing the skill
            // imageUrl: 'url-to-image-or-icon'
        },
        // add more skills as needed...
    ];

    return (
        <div>
            <h2>Skills</h2>
            {skillsData.map(skill =>
                <SkillCard
                    key={skill.id}
                    title={skill.title}
                    description={skill.description}
                    // imageUrl={skill.imageUrl}
                />
            )}
        </div>
    );
};

export default Skills;