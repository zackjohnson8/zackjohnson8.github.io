import './SkillCard.css'

const SkillCard = ({ title, description }) => {
    return (
        <div className="SkillCard">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default SkillCard;