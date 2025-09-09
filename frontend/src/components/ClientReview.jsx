import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "aa",
    location: "London, United Kingdom",
    avatar: "av",
    rating: 5,
    platform: "Clutch",
    text:
      "While the project is ongoing, the results thus far have met the expectations of the internal team. Sapphire Software Solutions has been prepared to accommodate requests and changes in the project development. They've been prompt, clever, and collaborative throughout the workflow.",
  },
  {
    name: "ss",
    location: "Kenya",
    avatar: "av",
    rating: 5,
    platform: "Clutch",
    text:
      "The product was delivered within budget and timeframe. Sapphire Software Solutions was able to work around the client's budget limitations. Their team provided excellent customer service and greater product development.",
  },
  {
    name: "dd.",
    location: "Georgia",
    avatar: "av",
    rating: 5,
    platform: "Clutch",
    text:
      "The team continues to exhibit development and collaborative skills that allow them to create end products that exceed their client's expectations. They exert ample time and energy to make sure that they provide high-quality service within a reliable timeframe.",
  },
  {
    name: "ff",
    location: "Georgia",
    avatar: "av",
    rating: 5,
    platform: "Clutch",
    text:
      "The team continues to exhibit development and collaborative skills that allow them to create end products that exceed their client's expectations. They exert ample time and energy to make sure that they provide high-quality service within a reliable timeframe.",
  },
  {
    name: "gg",
    location: "Georgia",
    avatar: "av",
    rating: 5,
    platform: "Clutch",
    text:
      "The team continues to exhibit development and collaborative skills that allow them to create end products that exceed their client's expectations. They exert ample time and energy to make sure that they provide high-quality service within a reliable timeframe.",
  },

];

function TestimonialCard({ name, location, avatar, rating, platform, text }) {
  return (
    <div className="bg-white rounded-lg shadow p-8 w-full max-w-md min-h-[250px] flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-center mb-2">
          <div className="flex gap-1">
            {[...Array(rating)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-xl">★</span>
            ))}
          </div>
          <span className="font-bold text-lg text-slate-700">{platform}</span>
        </div>
        <p className="text-gray-700 mb-6">{text}</p>
      </div>
      <div className="flex items-center mt-auto">
        <img src={avatar} alt={name} className="w-10 h-10 rounded-full mr-3 object-cover" />
        <div>
          <div className="font-bold text-base">{name}</div>
          <div className="text-gray-500 text-sm">{location}</div>
        </div>
      </div>
    </div>
  );
}

export default function ClientReview() {
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
      setCurrent((prev) => (prev + cardsPerView) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [cardsPerView]);

  function prev() {
    setCurrent((prev) =>
      prev - cardsPerView < 0
        ? testimonials.length - cardsPerView
        : prev - cardsPerView
    );
  }
  function next() {
    setCurrent((prev) =>
      (prev + cardsPerView) % testimonials.length
    );
  }

  const visibleCards = Array(cardsPerView)
    .fill(0)
    .map((_, i) => testimonials[(current + i) % testimonials.length]);

  return (
    <section className="bg-[#005D89] py-12 px-4">
      <h2 className="text-2xl md:text-3xl font-extrabold text-center text-white mb-10">
        What Our Clients Say
      </h2>
      <div className="flex justify-center gap-8 mb-4">
        {visibleCards.map((props, idx) => (
          <TestimonialCard key={props.name + idx} {...props} />
        ))}
      </div>
      <div className="flex justify-center items-center gap-6 mt-2">
        <button
          className="px-4 py-2 rounded-full bg-white text-cyan-900 hover:bg-cyan-100 font-bold text-xl"
          onClick={prev}
          aria-label="Previous"
        >
          ←
        </button>
        <button
          className="px-4 py-2 rounded-full bg-white text-cyan-900 hover:bg-cyan-100 font-bold text-xl"
          onClick={next}
          aria-label="Next"
        >
          →
        </button>
      </div>
    </section>
  );
}
