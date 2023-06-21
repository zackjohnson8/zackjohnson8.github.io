import SkillCard from './SkillCard';
import './Skills.css'

const Skills = () => {
    const skillsData = [
        {
            id: 1,
            title: 'Python (Experienced)',
            description: 'Leveraged Python to develop a suite of automation tools, integrating with the TeamCity API, ' +
                'to create a responsive system for real-time adaptation to changes within the TeamCity environment. ' +
                'Developed a backend system for retrieving information to feed my website ' +
                'https://www.foodfortraders.com/',
        },
        {
            id: 2,
            title: 'C# (Experienced)',
            description: 'Assisted in the development of a C# Coded UI framework for automated testing of Cimetrix ' +
                'products'
        },
        {
            id: 3,
            title: 'Swift (Experienced)',
            description: 'Developed iOS applications for iPhone and iPad using SwiftUI and UIKit'
        },
        {
            id: 4,
            title: 'Javascript, HTML, CSS, Vue.js & React.js (Skillful)',
            description: 'Developed a website https://www.foodfortraders.com/ using Vue.js. Developed this portfolio ' +
                'website using React.js'
        },
        {
            id: 5,
            title: 'AWS - EC2, S3, CloudFront, Route 53 (Skillful)',
            description: 'Deployed a website https://www.foodfortraders.com/ using AWS EC2, S3, CloudFront, Route 53'
        },
        {
            id: 6,
            title: 'PostgresSQL (Skillful)',
            description: 'Developed a database for a website https://www.foodfortraders.com/ using PostgresSQL. ' +
                'Deployed on AWS EC2 instance using Docker'
        },
        {
            id: 7,
            title: 'Docker (Skillful)',
            description: 'Deployed a website https://www.foodfortraders.com/ using Docker. Also manage a TeamCity ' +
                'server using Docker'
        },
        {
            id: 8,
            title: 'TeamCity (Experienced)',
            description: 'Manage a TeamCity server for continuous integration and deployment at Aristocrat. Manage ' +
                'my own TeamCity server for continuous integration and deployment of my website and other applications'
        },
        {
            id: 9,
            title: 'C++ (Skillful)',
            description: 'Developed in C++ in college as my primary language and debugged C++ code at Cimetrix as a ' +
                'QE employee'
        },
        {
            id: 10,
            title: 'Java (Skillful)',
            description: 'Developed in Java in college as my primary language and debugged Java code at Cimetrix as a '
        }
    ];

    return (
        <div className="Skills">
            <h2>Language Experience</h2>
            <div className="SkillsGrid">
                {/* Setup skillsData as a two column grid*/}
                {skillsData.map(skill => (
                    <SkillCard
                        key={skill.id}
                        title={skill.title}
                        description={skill.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default Skills;