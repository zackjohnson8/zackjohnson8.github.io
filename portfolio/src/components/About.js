import photo from './BusinessCas1to1.jpg';
import './About.css';

function About() {
    return (
        <div className="About">
            <header className="Headshot-header">
                <h1 className="PortfolioHeader">Portfolio of</h1>
                <h1 className="TitleHeader">Zachary L. Johnson</h1>
                <img src={photo} className="Headshot" alt="logo" />
                <div>
                    <p className="EntryText">
                        A highly skilled and solution-oriented Software Engineer with 3 years of experience in designing, developing, and maintaining software applications. Proficient in a broad range of programming languages, including Python, C#, and Swift. Demonstrated expertise in diverse areas such as web development, automation, iOS development, and DevOps, as well as both front-end and back-end architectures. Recognized for the ability to quickly learn and master new technologies, producing clean,  efficient code, and driving projects to successful completion. Committed to achieving technical excellence, eager to contribute to team successes, and passionate about continuous learning and professional growth.
                    </p>
                </div>
            </header>
            <div className="ScrollIndicator">⬇</div>
        </div>
    );
}

export default About;