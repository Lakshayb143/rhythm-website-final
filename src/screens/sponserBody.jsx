import sponser1 from '../assets/images/sponser1.png';
import sponser2 from '../assets/images/sponor2.png';
import sponser3 from '../assets/images/sponsor3.png';
import sponser4 from '../assets/images/sponsor4.png';
import slider1 from '../assets/images/slider.jpg';
import slider2 from '../assets/images/slider5.jpg';
import slider3 from '../assets/images/slider2.jpg';
import slider4 from '../assets/images/slider3.jpg';
import slider5 from '../assets/images/slider4.jpg';



const SponsersBody = () => {
    return (<div
        className="relative 2xl:h-[500px] h-[1000px] max-[320px]:h-[900px] bg-background-color w-screen flex items-center justify-center border-b-2">
        {/*PREVIOUS IMAGE*/}

        <div className=" h-[400px] w-screen flex overflow-hidden scrollbar">
            <div className="scroll-content">
                <img src={slider1} alt="Slide 1"/>
                <img src={slider2} alt="Slide 2"/>
                <img src={slider3} alt="Slide 3"/>
                <img src={slider4} alt="Slide 4"/>
                <img src={slider5} alt="Slide 5"/>
                <img src={slider1} alt="Slide 1"/>
                <img src={slider2} alt="Slide 2"/>
                <img src={slider3} alt="Slide 3"/>
                <img src={slider4} alt="Slide 4"/>
                <img src={slider5} alt="Slide 5"/>
            </div>
        </div>

    </div>)
}

export default SponsersBody