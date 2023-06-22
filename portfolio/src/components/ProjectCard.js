import './ProjectCard.css'

const ProjectCard = ({ title, description, url }) => {
    return (
        <div className="SkillCard">
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={url} target="_blank" rel="noopener noreferrer">{title} link</a>
        </div>
    );
};

export default ProjectCard;