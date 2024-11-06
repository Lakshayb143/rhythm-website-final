import Navbar from "./navbar.jsx";
import '../style/brochure.css'
import gif from '../assets/images/brochure.gif'
const Brochure=()=>{
    return (
        <div className="h-screen w-screen bg-background-color overflow-x-hidden">
                    <Navbar />
            <div className="event-container w-screen flex justify-center flex-col items-center">
                <h1 className="event-mainheading">BROCHURE</h1>
                <h6 className="mt-6 text-4xl font-bold animate-bounce">Download Brochure & Plan Your Fest!
                </h6>


                <div className="brochure-card">
                    <img src={gif} alt="brochure"/>
                    Download brochure!!
                </div>
            </div>

        </div>
    )
}

export default Brochure;