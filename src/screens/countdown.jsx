import { useEffect, useState } from 'react';

const Countdown = () => {
    const width = window.innerWidth;

    const calculateTime = () => {
        const countDownDate = new Date('November 31, 2024 00:00:00').getTime();
        const now = new Date().getTime();
        const remainingTime = countDownDate - now;

        const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTime());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTime());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    if (timeLeft.days < 0) {
        return (
            <div className="h-80 w-screen bg-background-color">
                <div className="relative top-20">
                    <h1 className="text-white font-extrabold 2xl:text-5xl animate-pulse ">
                        🎉 THE MOMENT IS HERE! 🎉
                    </h1>
                    <h4 className="text-white 2xl:text-2xl text-sm pl-10 pr-10 text-wrap font-bold mt-4 ">
                        The wait is over, and the excitement begins NOW!
                    </h4>
                </div>
            </div>
        );
    }

    return (
        <div className="2xl:h-96 h-64 w-screen bg-background-color border-b-2">
            <div className="relative top-20">
                <h1 className="text-white font-extrabold 2xl:text-4xl lg:text-3xl md:text-2xl"> 🚀 EVENT STARTS IN 🚀 </h1>
            </div>
            <div className="2xl:h-40 2xl:mt-32  2xl:mr-20  justify-around items-center flex relative mt-28 lg:top-4  gap-1
            " style={{ width }}>
                <div className="flex-col 2xl:pl-5 2xl:w-44 bg-website-gradient 2xl:p-5 2xl:rounded-xl rounded p-3 md:p-3 md:pl-6 md:pr-6">
                    <h1 className="text-white  2xl:text-5xl font-black text-sm">{timeLeft.days}</h1>
                    <h1 className="2xl:text-3xl text-white 2xl:font-black font-semibold text-sm">DAYS</h1>
                </div>
                <div className="flex-col bg-website-gradient 2xl:w-44 2xl:p-5 2xl:rounded-xl rounded p-3">
                    <h1 className="text-white 2xl:text-5xl font-black text-sm">{timeLeft.hours}</h1>
                    <h1 className="2xl:text-3xl text-white 2xl:font-black font-semibold text-sm">HOURS</h1>
                </div>
                <div className="flex-col bg-website-gradient 2xl:p-5 2xl:rounded-xl rounded p-3">
                    <h1 className="text-white 2xl:text-5xl font-black text-sm">{timeLeft.minutes}</h1>
                    <h1 className="2xl:text-3xl text-white 2xl:font-black font-semibold text-sm">MINUTES</h1>
                </div>
                <div className="flex-col bg-website-gradient 2xl:p-5 2xl:rounded-xl rounded p-3">
                    <h1 className="text-white 2xl:text-5xl font-black text-sm">{timeLeft.seconds}</h1>
                    <h1 className="2xl:text-3xl text-white 2xl:font-black font-semibold text-sm">SECONDS</h1>
                </div>
            </div>
        </div>
    );
};

export default Countdown;
