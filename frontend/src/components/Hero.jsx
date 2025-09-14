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
            style={{ opacity: idx === currentVideo ? 0.65 : 0, zIndex: -1 }}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src={video} type="video/mp4" />
          </video>
        ))}
        <div className="absolute inset-0 bg-black/80" />
      </div>
      
      <div className="relative z-10 flex flex-col min-h-screen justify-start">
        <div className="pt-20 px-6 md:px-16 max-w-full sm:max-w-2xl lg:max-w-4xl xl:max-w-5xl mt-12 md:mt-20">
          <h1 className="text-white font-extrabold sm:text-4xl md:text-5xl lg:text-6xl xl:text-4xl xl:mt-30 md:mt-6 sm:mt-7 mb-2 leading-tight">
            AI Innovation
          </h1>
          <h2 className="font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-3xl mb-4 leading-snug">
            <span className="text-cyan-400">Your Vision, </span>
            <span
              className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
              style={{ WebkitBackgroundClip: "text" }}
            >
              Our Technology
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-200 font-semibold mb-2">
            (Limitless Possibilities)
          </p>

          <ul className="list-disc pl-7 space-y-2 text-white text-base sm:text-lg md:text-xl mb-7">
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

          <button className="mt-1 mb-8 px-7 py-3 text-lg sm:text-xl font-semibold rounded-lg bg-cyan-600 hover:bg-purple-600 text-white shadow-lg transition-colors text-left">
            Let’s Talk
          </button>
        </div>

        <div className="absolute bottom-14 right-6 sm:right-10 md:right-16 xl:right-24 text-right max-w-xs sm:max-w-sm whitespace-nowrap">
          <h3 className="text-white font-extrabold text-xl sm:text-2xl md:text-3xl mb-1 leading-tight">
            {rightContent.line1}
          </h3>
          <h4
            className="text-lg sm:text-xl md:text-2xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 bg-clip-text text-transparent"
            style={{ WebkitBackgroundClip: "text" }}
          >
            {rightContent.line2}
          </h4>
        </div>
      </div>
    </div>
  );
}

