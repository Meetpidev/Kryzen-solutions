import { useState, useEffect } from "react";

export function TechnologiesSlider({ title, techCards = [] }) {
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
    if (cardsPerView !== 4 || !Array.isArray(techCards) || techCards.length === 0) return;

    const interval = setInterval(() => {
      setCurrent(prev =>
        (prev + cardsPerView) % techCards.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [cardsPerView, techCards]);

  function prev() {
    if (!Array.isArray(techCards) || techCards.length === 0) return;

    setCurrent(prev =>
      prev - cardsPerView < 0
        ? (techCards.length - cardsPerView + prev) % techCards.length
        : prev - cardsPerView
    );
  }

  function next() {
    if (!Array.isArray(techCards) || techCards.length === 0) return;

    setCurrent(prev =>
      (prev + cardsPerView) % techCards.length
    );
  }

  const visibleCards = Array(cardsPerView)
    .fill(0)
    .map((_, i) =>
      techCards.length > 0 ? techCards[(current + i) % techCards.length] : null
    )
    .filter(Boolean);  // Remove nulls if techCards is empty

  if (visibleCards.length === 0) return null;  // Render nothing if no cards

  return (
    <div className="bg-white py-10 px-2 md:px-8 max-w-full">
      <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-8">
        {title}
      </h2>

      <div className="flex justify-center overflow-hidden">
        {visibleCards.map((card, idx) => (
          <div
            key={idx}
            className="bg-blue-100 rounded-lg p-8 mx-2 shadow-md flex flex-col items-start w-full max-w-xs min-h-[215px]"
          >
            <img src={card.icon} className="mb-3"></img>
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
};
