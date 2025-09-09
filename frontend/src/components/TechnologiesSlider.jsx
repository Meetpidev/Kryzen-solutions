import { useState, useEffect } from "react";

const techCards = [
  {
    title: "Voice Search and Voice Assistants",
    description: "We use Voice search technology that enables users to search the Internet, a website, or an application using voice commands.",
    icon: <span className="text-5xl">icon</span>,
  },
  {
    title: "Wearable App Integration",
    description: "Our skilled developers are masters in integrating wearable apps, guaranteeing compatibility across many devices, and providing outstanding user experiences.",
    icon: <span className="text-5xl">icon</span>,
  },
  {
    title: "Beacons and Location-Based Services",
    description: "We use Beacons and location-based services to offer a wide range of features, including check-ins, location-based alerts, real-time mapping and navigation, and customized suggestions.",
    icon: <span className="text-5xl">icon</span>,
  },
  {
    title: "Cross-Platform Development",
    description: "With a few single codebases, we enable us to develop for multiple platforms, including iOS, Android, and more.",
    icon: <span className="text-5xl">icon</span>,
  },
  {
    title: "Cross-Platform Development",
    description: "With a few single codebases, we enable us to develop for multiple platforms, including iOS, Android, and more.",
    icon: <span className="text-5xl">icon</span>,
  },
  {
    title: "Cross-Platform Development",
    description: "With a few single codebases, we enable us to develop for multiple platforms, including iOS, Android, and more.",
    icon: <span className="text-5xl">icon</span>,
  },
  {
    title: "Cross-Platform Development",
    description: "With a few single codebases, we enable us to develop for multiple platforms, including iOS, Android, and more.",
    icon: <span className="text-5xl">icon</span>,
  },
  {
    title: "Cross-Platform Development",
    description: "With a few single codebases, we enable us to develop for multiple platforms, including iOS, Android, and more.",
    icon: <span className="text-5xl">icon</span>,
  },

];

export function TechnologiesSlider() {
  const [current, setCurrent] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4);

  useEffect(() => {
    function updateCardsPerView() {
      setCardsPerView(window.innerWidth >= 1024 ? 4 : 1);
    }
    window.addEventListener("resize", updateCardsPerView);
    updateCardsPerView();
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  useEffect(() => {
    if (cardsPerView !== 4) return;
    const interval = setInterval(() => {
      setCurrent(prev =>
        (prev + cardsPerView) % techCards.length
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [cardsPerView]);

  function prev() {
    setCurrent(prev =>
      prev - cardsPerView < 0
        ? (techCards.length - cardsPerView + prev) % techCards.length
        : prev - cardsPerView
    );
  }
  function next() {
    setCurrent(prev =>
      (prev + cardsPerView) % techCards.length
    );
  }

  const visibleCards = Array(cardsPerView)
    .fill(0)
    .map((_, i) => techCards[(current + i) % techCards.length]);

  return (
    <div className="bg-white py-10 px-2 md:px-8 max-w-full">
      <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-8">
        Cutting Edge Technologies Kryzen Use For Mobile App Development
      </h2>
      <div className="flex justify-center overflow-hidden">
        {visibleCards.map((card, idx) => (
          <div
            key={idx}
            className="bg-blue-100 rounded-lg p-8 mx-2 shadow-md flex flex-col items-start w-full max-w-xs min-h-[215px]"
          >
            <div className="mb-3">{card.icon}</div>
            <h4 className="font-bold text-lg mb-2">{card.title}</h4>
            <p className="text-gray-700 text-base">{card.description}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center gap-6 mt-4">
        <button
          className="px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 font-bold text-xl"
          onClick={prev}
          aria-label="Previous"
        >
          ←
        </button>
        <button
          className="px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 font-bold text-xl"
          onClick={next}
          aria-label="Next"
        >
          →
        </button>
      </div>
    </div>
  );
}