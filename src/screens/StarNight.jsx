import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // For animations
import { FaStar } from "react-icons/fa";
import singer1 from "../assets/images/man-5431169_640.webp";
import shubhamImg from "../assets/images/ShubhamImage.jpeg";
import HarjeetImg from "../assets/images/Harjeet.jpeg";
import divyImg from "../assets/images/davyImage.jpeg";
import kaviImg from "../assets/images/KaviImgae.jpeg";
import MunendraImg from "../assets/images/munendra.jpeg";
import "../style/StarNight.css";

const calculateTimeLeft = (eventDate) => {
  const now = new Date();
  const targetDate = new Date(eventDate); // Example: "2024-11-21T20:00:00"
  const difference = targetDate - now;

  if (difference > 0) {
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds };
  } else {
    // Time has passed
    return null;
  }
};

const StarNight = () => {
  const eventDate = "2024-11-21T20:00:00"; // Main performance date and time
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(eventDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(eventDate));
    }, 1000);

    return () => clearInterval(timer); // Cleanup on component unmount
  }, [eventDate]);

  const mainSinger = {
    name: "Davy",
    date: "21st November 2024",
    time: "6:40 PM",
    image: divyImg, // Replace with actual image path
  };

  const otherSingers = [
    {
      name: "Shubham Rana",
      date: "20th November 2024",
      time: "6:00 PM",
      image: shubhamImg, // Replace with actual image path
    },
    {
      name: "Harjeet Deewana",
      date: "20th November 2024",
      time: "6:30 PM",
      image: HarjeetImg, // Replace with actual image path
    },
    {
      name: "Kavi Sandhu",
      date: "20th November 2024",
      time: "7:00 PM",
      image: kaviImg, // Replace with actual image path
    },
    {
      name: "Munendra Vihan",
      date: "20th November 2024",
      time: "7:30 PM",
      image: MunendraImg, // Replace with actual image path
    },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900 to-black text-white relative py-10">
      {/* Animated Star Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars bg-repeat bg-contain opacity-30"></div>
      </div>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-12 z-10 relative"
      >
        <h1 className="text-5xl sm:text-6xl font-extrabold uppercase mb-4 text-yellow-400 tracking-wider">
          <FaStar className="inline-block ml-2" /> Star Night{" "}
          <FaStar className="inline-block ml-2" />
        </h1>
        <p className="text-lg sm:text-xl text-gray-300">
          Witness the magic of Rhythm 2024 with incredible performances!
        </p>
      </motion.div>

      {/* Main Singer Spotlight */}
      <div className="relative bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-700 p-8 rounded-xl shadow-2xl mx-4 sm:mx-auto sm:max-w-4xl text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            {mainSinger.name}
          </h2>
          <p className="text-xl text-gray-800">
            {mainSinger.date} | {mainSinger.time}
          </p>
          <img
            src={mainSinger.image}
            alt={mainSinger.name}
            className="w-[200px] h-[200px] sm:w-60 sm:h-60 mx-auto rounded-full mt-6 shadow-lg border-4 border-yellow-400"
          />
        </motion.div>

        {/* Countdown Timer */}
        <div className="mt-8 text-center">
          {timeLeft ? (
            <div>
              <p className="text-xl sm:text-2xl text-white font-bold">
                Countdown to the Performance:
              </p>
              <div className="text-4xl sm:text-5xl text-yellow-300 mt-2 font-extrabold">
                {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
                {timeLeft.seconds}s
              </div>
            </div>
          ) : (
            <div className="text-4xl sm:text-5xl text-green-400 font-extrabold">
              The performance has started!
            </div>
          )}
        </div>
      </div>

      {/* Supporting Singers */}
      <div className="mt-16 px-4 sm:px-8 relative z-10">
        <h3 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-yellow-300">
          Performers on 20th November
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {otherSingers.map((singer, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="bg-gradient-to-b from-purple-800 to-purple-900 p-6 rounded-lg shadow-lg text-center relative group"
            >
              <img
                src={singer.image}
                alt={singer.name}
                className="w-[150px] h-[150px] sm:w-32 sm:h-32 mx-auto rounded-full mb-4 border-4 border-yellow-300 shadow-md"
              />
              <h4 className="text-lg sm:text-xl font-bold text-yellow-200">
                {singer.name}
              </h4>
              <p className="text-sm sm:text-base text-gray-300">
                | {singer.date} |
              </p>
              {/* Glowing Effect */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 bg-gradient-to-r from-yellow-400 via-red-500 to-purple-500 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StarNight;
