import { useState, useEffect } from "react";

const STORAGE_KEY = "offer_countdown_end_v2";
const OFFER_DURATION_MS = 48 * 60 * 60 * 1000; // 48 hours in milliseconds

const getEndTime = (): number => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    const endTime = parseInt(stored, 10);
    if (endTime > Date.now()) {
      return endTime;
    }
  }
  // Set new end time
  const newEndTime = Date.now() + OFFER_DURATION_MS;
  localStorage.setItem(STORAGE_KEY, newEndTime.toString());
  return newEndTime;
};

interface CountdownTime {
  hours: number;
  minutes: number;
  seconds: number;
}

export const useOfferCountdown = (): CountdownTime => {
  const [timeLeft, setTimeLeft] = useState<CountdownTime>(() => {
    const endTime = getEndTime();
    const diff = Math.max(0, endTime - Date.now());
    return {
      hours: Math.floor(diff / (1000 * 60 * 60)),
      minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((diff % (1000 * 60)) / 1000),
    };
  });

  useEffect(() => {
    const updateTimer = () => {
      const endTime = getEndTime();
      const diff = Math.max(0, endTime - Date.now());
      
      if (diff === 0) {
        // Reset timer when it reaches zero
        localStorage.removeItem(STORAGE_KEY);
        const newEndTime = Date.now() + OFFER_DURATION_MS;
        localStorage.setItem(STORAGE_KEY, newEndTime.toString());
      }

      setTimeLeft({
        hours: Math.floor(diff / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    };

    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);

  return timeLeft;
};
