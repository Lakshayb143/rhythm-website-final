import Navbar from "./navbar.jsx";
import pdf from "../assets/docs/rhythm.pdf";
import search from "../assets/images/search.gif";
import '../style/rulebook.css'

const Rulebook = () => {
    return (
        <div className="h-screen w-screen bg-background-color overflow-x-hidden">
            <Navbar/>
            {/*RULE BOOK*/}

            <div className="event-container w-screen flex justify-center flex-col items-center">
                <h1 className="event-mainheading">Welcome to RHYTHM'24! 🎉
                </h1>
                <p className="mt-10 text-xl font-base pl-10 pr-10  text-white brochure-subheading">Get ready to unleash the
                    energy, creativity, and fun at RHYTHM'24, the biggest fest of the year! Before you dive into the
                    excitement, take a moment to explore the Rulebook — your guide to participating in various events
                    and ensuring a smooth and fair experience for everyone!
                </p>

                <a href={pdf} download="rulebook" className="text-white">
                    <div className="brochure-card">
                        <img src={search} alt="brochure"/>
                        Download Rulebook
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Rulebook;