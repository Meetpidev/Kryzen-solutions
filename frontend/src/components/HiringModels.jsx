import React, { useState, useEffect, useRef } from "react";

const hiringModels = [
  {
    icon: 'icon',
    title: "Fixed Price",
    description:
      "If you represent a company with a project that needs dedicated attention, ask about dedicated teams. It's a pay-as-you-go monthly rolling contract.",
    bullets: [
      "Optimal flexibility",
      "Agile team",
      "Small projects",
      "Complete control over budget",
    ],
    button: "Hire Now",
  },
  {
    icon: 'icon',
    title: "Time Material",
    description:
      "If you represent a company with undefined projects and need ongoing work, ask about hourly. It's a pay-as-you-go hour-wise rolling contract.",
    bullets: [
      "No hidden costs",
      "Working based hours",
      "Monthly billing",
      "Pay only for measurable work",
    ],
    button: "Hire Now",
  },
  {
    icon: 'icon',
    title: "Dedicated Team",
    description:
      "If you represent a company with a project that needs dedicated attention, ask about dedicated teams. It's a pay-as-you-go monthly rolling contract.",
    bullets: [
      "No hidden costs",
      "160 hours of assured work",
      "Monthly billing",
      "Pay only for measurable work",
    ],
    button: "Hire Now",
  },
  {
    icon: "icon",
    title: "Buckets Approach",
    description:
      "A lot of businesses typically select our bucket approach which allows for payment convenience once the project is finished and things are in place.",
    bullets: [
      "Direct Resource Monitoring",
      "Less Risk",
      "Less budget",
      "Pay only for measurable work",
    ],
    button: "Hire Now",
  },
];

export default function HiringModels() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    startAutoChange();
    return () => stopAutoChange();
  }, []);

  const startAutoChange = () => {
    stopAutoChange();
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % hiringModels.length);
    }, 5000);
  };

  const stopAutoChange = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const goPrev = () => {
    stopAutoChange();
    setCurrentIndex((prev) => (prev === 0 ? hiringModels.length - 1 : prev - 1));
    startAutoChange();
  };

  const goNext = () => {
    stopAutoChange();
    setCurrentIndex((prev) => (prev + 1) % hiringModels.length);
    startAutoChange();
  };

  return (
    <section className="bg-blue-50 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-black">
          Business Friendly Hiring Models : Building Greater Futures Through Innovation
        </h2>
        <p className="text-center text-gray-700 mb-6 text-lg">
          We offer three different types of hiring models that are designed to suit your diverse needs and budget. Take a look at our hiring models:
        </p>

        {/* Large and medium screens grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {hiringModels.map((model) => (
            <Card key={model.title} model={model} />
          ))}
        </div>

        {/* Small screens carousel */}
        <div className="md:hidden flex flex-col items-center">
          <Card model={hiringModels[currentIndex]} />
          <div className="mt-6 flex space-x-6">
            <button
              onClick={goPrev}
              className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 focus:outline-none"
              aria-label="Previous"
            >
              &#8592;
            </button>
            <button
              onClick={goNext}
              className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 focus:outline-none"
              aria-label="Next"
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ model }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-7 flex flex-col items-center text-center hover:shadow-xl transition-shadow border border-gray-100 max-w-md mx-auto">
      <div className="text-4xl mb-4 text-purple-600 font-bold">{model.icon}</div>
      <h3 className="mt-4 mb-2 text-2xl font-semibold">{model.title}</h3>
      <p className="mb-4 text-gray-600">{model.description}</p>
      <ul className="mb-6 text-left space-y-2 w-full px-4">
        {model.bullets.map((point) => (
          <li key={point} className="flex items-center text-sm text-gray-800">
            <span className="text-xl text-blue-600 mr-2">&#10003;</span>
            {point}
          </li>
        ))}
      </ul>
      <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-lg">
        {model.button}
      </button>
    </div>
  );
}
