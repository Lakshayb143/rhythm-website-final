import { useState, useEffect } from "react";

const CalculateTimeLeft = (eventDate) => {
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


export default CalculateTimeLeft;