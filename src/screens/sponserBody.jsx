
import slider1 from '../assets/images/slider.jpg';
import slider2 from '../assets/images/slider5.jpg';
import slider3 from '../assets/images/slider2.jpg';
import slider4 from '../assets/images/slider3.jpg';
import slider5 from '../assets/images/slider4.jpg';
import slider6 from '../assets/images/slideshow1.jpeg';
import slider7 from '../assets/images/slideshow2.jpeg';
import slider8 from '../assets/images/slideshow3.jpeg';
import slider9 from '../assets/images/slideshow4.jpeg';
import '../style/slider.css';


const SponsersBody = () => {
    return (<div
        className="relative 2xl:h-[500px]  bg-background-color w-screen flex items-center justify-center border-b-2">
        {/*PREVIOUS IMAGE*/}

        <div className=" w-screen flex overflow-hidden scrollbar slider-container">
            <div className="scroll-content">
                <img src={slider1} alt="Slide 1"/>
                <img src={slider2} alt="Slide 2"/>
                <img src={slider3} alt="Slide 3"/>
                <img src={slider4} alt="Slide 4"/>
                <img src={slider5} alt="Slide 5"/>
                <img src={slider6} alt="Slide 1"/>
                <img src={slider7} alt="Slide 2"/>
                <img src={slider8} alt="Slide 3"/>
                <img src={slider9} alt="Slide 4"/>
                <img src={slider1} alt="Slide 5"/>
            </div>
        </div>

    </div>)
}

export default SponsersBody