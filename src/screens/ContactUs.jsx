import Navbar from "./navbar.jsx";
import '../style/contact.css'
import insta from '../assets/images/instagram.png'
import mail from '../assets/images/gmail.png'
import phone from '../assets/images/telephone.png'
const ContactUsPage = () => {
    return (
        <div className=" bg-background-color h-screen
        contact-main
        ">
            {/*NAVBAR*/}
            <Navbar />
            {/* Contact us   */}
            <div className="contact-us">
                <h1>CONTACT US</h1>
                    <div className="contact-us-card">
                        <a href="https://www.instagram.com/rhythm_dcrust/" target="_blank" rel="noopener noreferrer">
                            <img src={insta} alt="instagram"/>
                        </a>

                        <div className="contact-us-card-mail">
                                <img src={mail} alt="instagram"/>
                            <p>
                                rhythm@dcrustm.org </p>
                        </div>

                        <div className="coordinators">
                            <h4>☎ COORDINATORS CONTACT NUMBERS:</h4>
                            <p>Nitish Beniwal : +91 83078 55385
                            </p>
                            <p>Khushi Pandey : +91 74270 55539
                            </p>
                            <p>Naman Rathee: +91 87931 30080
                            </p>
                            <p>Bhumi Gupta: +91 93504 09567
                            </p>
                            <p>Animesh Lodhi: +91 83688 25928
                            </p>

                        </div>
                    </div>
            </div>
        </div>
    )
}

export default ContactUsPage;