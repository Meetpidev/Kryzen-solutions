import { useState, useEffect } from "react";

function BenefitCard({ icon, title, description, bg }) {
  return (
    <div
      className={`rounded-lg p-6 shadow-md flex flex-col items-start max-w-xl w-full ${bg}`}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}

export function ImpactCards({ sectionTitle, benefitCards, autoInterval = 3000 }) {
  const [current, setCurrent] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);

  useEffect(() => {
    function updateCardsPerView() {
      setCardsPerView(window.innerWidth >= 1024 ? 4 : 1);
    }
    window.addEventListener("resize", updateCardsPerView);
    updateCardsPerView();
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + cardsPerView) % benefitCards.length);
    }, autoInterval);
    return () => clearInterval(interval);
  }, [cardsPerView, benefitCards.length, autoInterval]);

  function prevCard() {
    setCurrent((prev) =>
      (prev - cardsPerView + benefitCards.length) % benefitCards.length
    );
  }

  function nextCard() {
    setCurrent((prev) => (prev + cardsPerView) % benefitCards.length);
  }

  const visibleCards = Array(cardsPerView)
    .fill(0)
    .map((_, idx) => benefitCards[(current + idx) % benefitCards.length]);

  return (
    <section className="bg-white py-10 px-4 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10">
        {sectionTitle}
      </h2>
      <div
        className={`w-full max-w-6xl grid gap-6 ${cardsPerView === 1 ? "grid-cols-1" : "grid-cols-4"
          }`}
      >
        {visibleCards.map(({ icon, title, description, bg }, idx) => (
          <BenefitCard
            key={title + idx}
            icon={icon}
            title={title}
            description={description}
            bg={bg}
          />
        ))}
      </div>

      {cardsPerView === 1 && (
        <div className="flex gap-6 mt-8">
          <button
            className="px-4 py-2 rounded-full bg-gray-800 text-white hover:bg-gray-900 font-bold text-xl"
            onClick={prevCard}
            aria-label="Previous"
          >
            ←
          </button>
          <button
            className="px-4 py-2 rounded-full bg-gray-800 text-white hover:bg-gray-900 font-bold text-xl"
            onClick={nextCard}
            aria-label="Next"
          >
            →
          </button>
        </div>
      )}
    </section>
  );
}
