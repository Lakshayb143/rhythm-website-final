import { useEffect, useState } from 'react';

const Countdown = () => {
    const width = window.innerWidth;

    const calculateTime = () => {
        const countDownDate = new Date('November 20, 2024 00:00:00').getTime();
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
            <div className="container hidden">
                <div className="centered">
                    <h1 className="main-heading">🎉 THE MOMENT IS HERE! 🎉</h1>
                        <h4 className="sub-heading">
                        The wait is over, and the excitement begins NOW!
                    </h4>
                </div>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="centered">
                <h1 className="main-heading">🚀 EVENT STARTS IN 🚀</h1>
            </div>
            <div className="timer-container" style={{ width }}>
                <div className="time-box">
                    <h1 className="time-number">{timeLeft.days}</h1>
                    <h1 className="time-label">DAYS</h1>
                </div>
                <div className="time-box">
                    <h1 className="time-number">{timeLeft.hours}</h1>
                    <h1 className="time-label">HOURS</h1>
                </div>
                <div className="time-box">
                    <h1 className="time-number">{timeLeft.minutes}</h1>
                    <h1 className="time-label">MINUTES</h1>
                </div>
                <div className="time-box">
                    <h1 className="time-number">{timeLeft.seconds}</h1>
                    <h1 className="time-label">SECONDS</h1>
                </div>
            </div>
        </div>
    );
};

export default Countdown;
