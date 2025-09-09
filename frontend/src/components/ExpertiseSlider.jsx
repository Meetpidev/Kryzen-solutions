import { useState, useEffect } from "react";

function ExpertiseCard({ title, description, btn }) {
  return (
    <div className="bg-blue-100 rounded-lg p-8 shadow-md flex flex-col min-h-[180px] w-full max-w-md">
      <h4 className="font-bold text-lg mb-2">{title}</h4>
      <p className="text-gray-800 mb-6">{description}</p>
      <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded transition self-start">
        {btn}
      </button>
    </div>
  );
}

export function ExpertiseSlider({
  expertiseCards,
  sectionTitle,
  sectionDescription,
}) {
  const [current, setCurrent] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    function updateCardsPerView() {
      setCardsPerView(window.innerWidth >= 1024 ? 3 : 1);
    }
    window.addEventListener("resize", updateCardsPerView);
    updateCardsPerView();
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);
 
  useEffect(() => {
    if (cardsPerView !== 3) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + cardsPerView) % expertiseCards.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [cardsPerView, expertiseCards.length]);

  function prev() {
    setCurrent((prev) =>
      prev - cardsPerView < 0
        ? expertiseCards.length - cardsPerView
        : prev - cardsPerView
    );
  }
  function next() {
    setCurrent((prev) => (prev + cardsPerView) % expertiseCards.length);
  }

  const visibleCards = Array(cardsPerView)
    .fill(0)
    .map((_, i) => expertiseCards[(current + i) % expertiseCards.length]);

  return (
    <section className="bg-white py-10 px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-2">
        {sectionTitle}
      </h2>
      <p className="text-lg text-center text-gray-600 mb-10">{sectionDescription}</p>
      <div className="flex justify-center overflow-hidden gap-8">
        {visibleCards.map((props, idx) => (
          <ExpertiseCard key={props.title + idx} {...props} />
        ))}
      </div>
      <div className="flex justify-center items-center gap-6 mt-8">
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
    </section>
  );
}

