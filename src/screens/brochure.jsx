import Navbar from "./navbar.jsx";
import '../style/brochure.css'
import gif from '../assets/images/brochure.gif'
import pdf from '../assets/docs/Brochure.pdf'


const Brochure = () => {
    return (
        <div className="h-screen w-screen bg-background-color overflow-x-hidden background-container" >
            <Navbar/>
            <div className="event-container w-screen flex justify-center flex-col items-center">
                <h1 className="event-mainheading">BROCHURE</h1>
                <h6 className="mt-6 text-4xl font-bold animate-bounce brochure-subheading text-white">Download Brochure & Plan Your Fest!
                </h6>

                <a href={pdf} download="RHYTHM_BROCHURE_2K24" className="text-white">
                    <div className="brochure-card">
                        <img src={gif} alt="brochure"/>
                        Download Brochure
                    </div>
                </a>
            </div>


        </div>
    )
}

export default Brochure;