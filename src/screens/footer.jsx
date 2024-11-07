import facebook from '../assets/images/facebook.png';
import twitter from '../assets/images/twitter.png';
import linkedin from '../assets/images/linkedin.png';
import instagram from '../assets/images/instagram.png';
import '../style/footer.css';

const Footer = () => {

        const sendMail = () => {
            window.open("mailto:rhythm@dcrustm.org", "_self");
        };
    return (
        <div className="footer-container">
            {/* Left Container */}
            <div className="footer-left">
                {/* Social Handles */}
                <div className="social-handles">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src={facebook} alt="Facebook" />
                    </a>
                    <a href="https://www.instagram.com/rhythm_dcrust/" target="_blank" rel="noopener noreferrer">
                        <img src={instagram} alt="Instagram" />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src={twitter} alt="Twitter" />
                    </a>
                </div>
                {/* Copyright */}
                <div className="footer-copyright">
                    <h3>&copy; DCRUST</h3>
                </div>
            </div>

            {/* Right Container */}
            <div className="footer-right">
                {/* Developers */}
                <div className="developers">
                    <div className="developer-item">
                        <h3>DESIGNER AND DEVELOPER: Alok Pandit</h3>
                        <a href="https://www.linkedin.com/in/alokpandit03/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="LinkedIn of Alok Pandit" />
                        </a>
                    </div>
                    <div className="developer-item">
                        <h3>BACKEND DEVELOPER: Mannu Kumar</h3>
                        <a href="https://www.linkedin.com/in/mannu-kumar-38a280246/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="LinkedIn of Mannu Kumar" />
                        </a>
                    </div>
                    <div className="developer-item">
                        <h3>BACKEND DEVELOPER: Lakshay Bhatia</h3>
                        <a href="https://www.linkedin.com/in/lakshay-bhatia-3b52b8256/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="LinkedIn of Lakshay Bhatia" />
                        </a>
                    </div>
                </div>
                {/* Contact Us Button */}
                <div className="contact-us-button" onClick={sendMail}>
                        <button>CONTACT US</button>
                </div>
            </div>
        </div>
);
};

export default Footer;
