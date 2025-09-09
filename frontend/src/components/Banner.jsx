import { useState, useEffect } from "react";

function Banner() {
  const words = ["Great", "Greate", "Big", "New"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex items-center justify-between bg-[#078ab5] py-8 px-4 md:px-12 max-w-full mt-4">

      <div className="hidden md:block flex-shrink-0">
        <img
          src="/your-left-image.jpg"
          alt=""
          className="rounded-tl-[60px] rounded-bl-[60px] h-[280px] w-auto object-cover"
          style={{ maxHeight: '350px', minWidth: '200px' }}
        />
      </div>
     
      <div className="flex flex-col items-center flex-1 text-center px-2">
        <h1 className="text-white text-2xl md:text-4xl font-bold mb-6">
          Let’s Start Something{" "}
          <span className="text-[yellow] font-bold drop-shadow-[0_0_3px_#9ab769] animate-pulse">{words[index]}</span> Together
        </h1>
        <p className="text-white text-base md:text-lg mb-8 max-w-3xl mx-auto">
          Book a meeting with our specialists today to learn more about how Kryzen Software Solutions can help you unlock technology visions and drive your product strategy.
        </p>
        <button className="bg-white text-[#078ab5] border-2 border-[#078ab5] rounded-md py-3 px-10 font-semibold text-lg hover:bg-[#078ab5] hover:text-white transition-colors duration-200">
          Get In Touch
        </button>
      </div>

      <div className="hidden md:block flex-shrink-0">
        <img
          src="/your-right-image.jpg" 
          alt=""
          className="rounded-tr-[60px] rounded-br-[60px] h-[280px] w-auto object-cover"
          style={{ maxHeight: '350px', minWidth: '200px' }}
        />
      </div>
    </div>
  )
}

export default Banner;
