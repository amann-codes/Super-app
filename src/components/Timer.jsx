import React, { useState, useEffect, useRef } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    let interval;
    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0 && isRunning) {
      setIsRunning(false);
      playSound();
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  const startTimer = () => {
    if (hours > 0 || minutes > 0 || seconds > 0) {
      setTime(hours * 3600 + minutes * 60 + seconds);
      setIsRunning(true);
    }
  };

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(error => console.error("Error playing sound:", error));
    }
  };

  const formatTime = (timeInSeconds) => {
    const h = Math.floor(timeInSeconds / 3600);
    const m = Math.floor((timeInSeconds % 3600) / 60);
    const s = timeInSeconds % 60;
    return `${h.toString().padStart(2, "0")}:${m
      .toString()
      .padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const calculateProgress = () => {
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;
    return ((totalSeconds - time) / totalSeconds) * 100 || 0;
  };

  const incrementTime = (unit) => {
    switch (unit) {
      case "hours":
        setHours((prev) => (prev < 23 ? prev + 1 : 0));
        break;
      case "minutes":
        setMinutes((prev) => (prev < 59 ? prev + 1 : 0));
        break;
      case "seconds":
        setSeconds((prev) => (prev < 59 ? prev + 1 : 0));
        break;
    }
  };

  const decrementTime = (unit) => {
    switch (unit) {
      case "hours":
        setHours((prev) => (prev > 0 ? prev - 1 : 23));
        break;
      case "minutes":
        setMinutes((prev) => (prev > 0 ? prev - 1 : 59));
        break;
      case "seconds":
        setSeconds((prev) => (prev > 0 ? prev - 1 : 59));
        break;
    }
  };

  return (
    <div className="bg-gray-800 px-4 py-2 rounded-xl shadow-lg w-[887px]">
      <div className="flex flex-row items-center justify-between">
        <div className="relative size-[200px] mr-8">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
              className="text-gray-700 stroke-current"
              strokeWidth="4"
              cx="50"
              cy="50"
              r="48"
              fill="transparent"
            />
            <circle
              className="text-pink-500 stroke-current"
              strokeWidth="4"
              strokeLinecap="round"
              cx="50"
              cy="50"
              r="48"
              fill="transparent"
              strokeDasharray="301.59"
              strokeDashoffset={301.59 - (calculateProgress() / 100) * 301.59}
              transform="rotate(-90 50 50)"
            />
          </svg>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-bold">
            {formatTime(time || hours * 3600 + minutes * 60 + seconds)}
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex flex-row my-5 items-center">
            <div className="flex flex-col items-center">
              <p className="text-gray-400 mb-1">Hours</p>
              <button
                onClick={() => incrementTime("hours")}
                className="text-gray-400"
              >
                ▲
              </button>
              <span className="text-white text-2xl my-1">
                {hours.toString().padStart(2, "0")}
              </span>
              <button
                onClick={() => decrementTime("hours")}
                className="text-gray-400"
              >
                ▼
              </button>
            </div>
            <span className="text-white mt-12 text-3xl mx-2 my-auto">:</span>
            <div className="flex flex-col items-center">
              <p className="text-gray-400 mb-1">Minutes</p>
              <button
                onClick={() => incrementTime("minutes")}
                className="text-gray-400"
              >
                ▲
              </button>
              <span className="text-white text-2xl my-1">
                {minutes.toString().padStart(2, "0")}
              </span>
              <button
                onClick={() => decrementTime("minutes")}
                className="text-gray-400"
              >
                ▼
              </button>
            </div>
            <span className="text-white mt-12 text-3xl mx-2 my-auto">:</span>
            <div className="flex flex-col items-center">
              <p className="text-gray-400 mb-1">Seconds</p>
              <button
                onClick={() => incrementTime("seconds")}
                className="text-gray-400"
              >
                ▲
              </button>
              <span className="text-white text-2xl my-1">
                {seconds.toString().padStart(2, "0")}
              </span>
              <button
                onClick={() => decrementTime("seconds")}
                className="text-gray-400"
              >
                ▼
              </button>
            </div>
          </div>
          <button
            onClick={startTimer}
            className="w-full bg-pink-500 text-white py-2 rounded-full text-lg font-semibold"
          >
            Start
          </button>
        </div>
      </div>
      <audio ref={audioRef} src="https://assets.mixkit.co/sfx/preview/mixkit-alarm-digital-clock-beep-989.mp3" />
    </div>
  );
};

export default Timer;