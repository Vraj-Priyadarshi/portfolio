import React, { useEffect, useState } from "react";
import "./Loading.css";

const Loading = ({ progress }) => {
  const messages = [
    "Warming up pixels...",
    "Polishing portfolio...",
    "Summoning creativity...",
    "Almost there...",
  ];

  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 1000);

    return () => clearInterval(messageInterval);
  }, []);

  return (
    <div className="loading-screen">
        {/*  */}
        <video
            autoPlay
            loop
            muted
            playsInline
            className="loading-video"
        >
            <source src="/assets/videoplayback.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        {/*  */}
      <div className="loading-text">{messages[messageIndex]}</div>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
};

export default Loading;
