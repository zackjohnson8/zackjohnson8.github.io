const SkillCard = ({ title, description, imageUrl }) => {
    return (
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
            {/* if you added an image url to your skillsData, you can display it like this: */}
            {/* <img src={imageUrl} alt={title} /> */}
        </div>
    );
};

export default SkillCard;