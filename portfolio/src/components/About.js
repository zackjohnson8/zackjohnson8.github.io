import photo from './BusinessCas1to1.jpg';
import './About.css';

function About() {
    return (
        <div className="About">
            <header className="Headshot-header">
                <img src={photo} className="Headshot" alt="logo" />
                <p>
                    Welcome to my portfolio! I am currently working on this page, so please check back soon!
                </p>
            </header>
            <div className="ScrollIndicator">⬇</div>
        </div>
    );
}

export default About;