import Navbar from "./navbar.jsx";
import Body from "./body.jsx";
import Countdown from "./countdown.jsx";
import About from "./about.jsx";
import Schedule from "./schedule.jsx";
import ScheduleCards from "./scheduleCards.jsx";
import SponserTitle from "./sponserTitle.jsx";
import SponsersBody from "./sponserBody.jsx";
import Footer from "./footer.jsx";


const Home = () => {
    return (
        <div className="h-screen w-screen bg-background-color overflow-x-hidden cursor-custom">
         <Navbar />
            <Body/>
            <Countdown/>
            <About/>
            <Schedule/>
            <ScheduleCards/>
            <SponserTitle/>
            <SponsersBody/>
            <Footer/>
        </div>
    )
}

export default Home;