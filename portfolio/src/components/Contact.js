import './Contact.css'
import githubLogo from './github-mark.png'
import linkedinLogo from './LI-In-Bug.png'

const Contact = () => {
    return (
        <div className="Contact">
            <h1>Contact</h1>
            <div className="ContactGrid">
                <div className="ContactCard">
                    <h3>Email</h3>
                    <a href="mailto:zackjohnson8@gmail.com">zackjohnson8@gmail.com</a>
                </div>
                <div className="ContactCard">
                    <h3>LinkedIn</h3>
                    <a href="https://www.linkedin.com/in/zachary-johnson-688854132/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedinLogo} alt="LinkedIn Logo" />
                    </a>
                </div>
                <div className="ContactCard">
                    <h3>GitHub</h3>
                    <a href="https://github.com/zackjohnson8" target="_blank" rel="noopener noreferrer">
                        <img src={githubLogo} alt="GitHub Logo" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;