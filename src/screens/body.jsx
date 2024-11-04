import  {useState, useEffect} from 'react';
import ImageOne from '../assets/images/img1.jpg';
import ImageTwo from '../assets/images/img2.jpg';
import location from '../assets/images/location.png';
import  calender from '../assets/images/calendar.png';
const Body = () => {
    const height = window.innerHeight - 200;
    const width = window.innerWidth;
    const sliderImages = [
        {url: ImageOne},
        {url:ImageTwo}
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative 2xl:mt-20">
            {/* Image Slider */}
            <div
                className="bg-cover bg-center"
                style={{
                    backgroundImage: `url(${sliderImages[currentIndex].url})`,
                    height,
                    width
                }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50" style={{height}}></div>

            {/* Centered Text */}
            <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl font-extrabold bg-text-gradient bg-clip-text text-transparent drop-shadow-2xl lg:text-6xl 2xl:text-8xl  ">
                RHYTHM&#39;24
            </h1>


            <h3 className=" absolute top-1/2 mt-10 left-1/3 -ml-28 font-extrabold text-base text-white animate-pulse md:-ml-20 lg:-ml-36 lg:mt-12 lg:text-2xl xl:-ml-20 2xl:mt-20 2xl:-ml-20 2xl:text-3xl ">THE
                OFFICIAL CULTURAL FEST OF DCRUST , MURTHAL</h3>
            <div className="absolute top-2/3 left-1/2 -ml-32 mt-6 flex gap-6 md:-ml-36 lg:-ml-48 2xl:mt-12 2xl:-ml-56">
                <div className="flex items-center gap-2">
                    <img src={calender} alt="" className="h-4 w-4 md:h-6 md:w-6 lg:h-10 lg:w-10"/>
                    <h3 className="text-white font-semibold text-xs lg:text-base 2xl:text-xl">23-24 NOV&#39;24</h3>
                </div>

                <div className="flex items-center gap-2 ">
                    <img src={location} alt="" className="h-4 w-4 md:h-6 md:w-6 lg:h-10 lg:w-10"/>
                    <h3 className="text-white font-semibold text-xs underline lg:text-base 2xl:text-xl">DCRUST , MURTHAL</h3>
                </div>
            </div>
            <button className=" lg:mt-14 absolute top-3/4 mt-6 left-1/2 -ml-20 rounded-xl text-white border-2 h-10 w-40 border-button-outline md:-ml-20 font-bold cursor-custom hover:bg-website-gradient hover:border-0 2xl:mt-16 2xl:h-14 2xl:-ml-28  2xl:w-44">
                REGISTER NOW!!
            </button>
        </div>
    );
};

export default Body;
