import { useEffect, useState } from "react";
import video1 from "../public/video1.mp4";
import video2 from "../public/video2.mp4";

export default function Hero() {
  const [currentVideo, setCurrentVideo] = useState(0);

  const videos = [video1, video2];

  const rightContents = [
    {
      line1: "Streamlining Success With",
      line2: "Intelligent AI Solutions",
    },
    {
      line1: "Transform Your Workflow",
      line2: "AI That Delivers ROI",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 12000);
    return () => clearInterval(interval);
  }, [videos.length]);

  const rightContent = rightContents[currentVideo];

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        {videos.map((video, idx) => (
          <video
            key={video}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
            style={{ opacity: idx === currentVideo ? 0.6 : 0, zIndex: -1 }}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src={video} type="video/mp4" />
          </video>
        ))}
        <div className="absolute inset-0 bg-black/70" />
      </div>
      
      <div className="relative z-10 flex flex-col min-h-screen justify-start">
        <div className="pt-20 px-4 sm:px-6 md:px-12 max-w-full sm:max-w-2xl lg:max-w-4xl xl:max-w-6xl mt-10 md:mt-20">
          <h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl md:mt-4 sm:mt-6 mb-2 leading-tight">
            AI Innovation
          </h1>
          <h2 className="font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-4 leading-snug">
            <span className="text-cyan-400">Your Vision, </span>
            <span
              className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
              style={{ WebkitBackgroundClip: "text" }}
            >
              Our Technology
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-200 font-semibold mb-2">
            (Limitless Possibilities)
          </p>

          <ul className="list-disc pl-5 sm:pl-7 space-y-2 text-white text-sm sm:text-base md:text-lg mb-6 sm:mb-7">
            <li>
              <span>Fast-growing IT startup with <span className="text-white font-bold">2+ years</span>{" "}of experience</span>
            </li>
            <li>
              <span>Strong portfolio of <span className="text-white font-bold">15+ clients</span>{" "} worldwide</span>
            </li>
            <li>
              <span>Specializes in <span className="text-white font-bold">AI solutions, website development, and mobile app development</span>{" "}</span>
            </li>
            <li>
              <span>Delivers innovative and <span className="text-white font-bold">reliable technology</span>{" "}tailored to business needs</span>
            </li>
          </ul>

          <button className="mt-1 mb-8 px-6 py-3 w-full sm:w-auto text-base sm:text-lg font-semibold rounded-lg bg-cyan-600 hover:bg-purple-600 text-white shadow-lg transition-colors text-left">
            Let’s Talk
          </button>
        </div>

        <div className="md:absolute md:bottom-14 md:right-6 lg:right-16 xl:right-24 md:text-right max-w-xs sm:max-w-sm whitespace-nowrap px-4 sm:px-6 mt-auto pb-10 md:pb-0">
          <h3 className="text-white font-extrabold text-lg sm:text-xl md:text-3xl mb-1 leading-tight">
            {rightContent.line1}
          </h3>
          <h4
            className="text-base sm:text-lg md:text-2xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 bg-clip-text text-transparent"
            style={{ WebkitBackgroundClip: "text" }}
          >
            {rightContent.line2}
          </h4>
        </div>
      </div>
    </div>
  );
}

