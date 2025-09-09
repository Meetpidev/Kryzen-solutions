import { useState, useEffect } from "react";

const sectors = [
  {
    bg: "bg-blue-100",
    icon: <span className="bg-blue-500 text-white rounded p-3 text-3xl mr-2"></span>,
    title: "Logistics App Development Company",
    description:
      "Enterprise mobility is the most acceptable way to deliver something distinctive compared to other businesses in the same industry as you.",
    features: [
      { color: "bg-purple-200", icon: "", text: "Last-Mile Delivery" },
      { color: "bg-orange-100", icon: "", text: "On-Demand Delivery" },
      { color: "bg-pink-200", icon: "", text: "Fleet Management" },
      { color: "bg-green-100", icon: "", text: "On-Field Workforce" },
      { color: "bg-yellow-100", icon: "", text: "On-Demand Delivery" },
      { color: "bg-blue-50", icon: "", text: "Delivery Management" },
    ],
  },
  {
    bg: "bg-blue-100",
    icon: <span className="bg-blue-500 text-white rounded p-3 text-3xl mr-2"></span>,
    title: "E-commerce Website Development Services",
    description:
      "As a top ecommerce Website Development Company, we assist B2B and B2C businesses in increasing client fulfillment, traffic growth, and lead generation. Our client-centric approach help businesses reimagine the digital commerce. Contact us now!",
    features: [
      { color: "bg-purple-200", icon: "", text: "Customer Testimonials" },
      { color: "bg-pink-100", icon: "", text: "Dashboard In Real-Time" },
      { color: "bg-blue-50", icon: "", text: "Catalog Administration" },
      { color: "bg-green-100", icon: "", text: "Login To Social Media" },
      { color: "bg-yellow-100", icon: "", text: "Management Of Stores" },
      { color: "bg-blue-200", icon: "", text: "Order Monitoring" },
    ],
  },
  {
    bg: "bg-blue-100",
    icon: <span className="bg-blue-500 text-white rounded p-3 text-3xl mr-2"></span>,
    title: "Tourism App Development",
    description:
      "Because of the continued expansion of the e-commerce industry, every company now needs tourism website development.",
    features: [
      { color: "bg-purple-200", icon: "", text: "Ticket, Hotel Bookings" },
      { color: "bg-orange-100", icon: "", text: "Car Booking" },
      { color: "bg-pink-200", icon: "", text: "Ad-Hoc Services" },
      { color: "bg-green-100", icon: "", text: "Travel Planning" },
      { color: "bg-yellow-100", icon: "", text: "CRM Platform" },
      { color: "bg-blue-50", icon: "", text: "Virtual Reality" },
    ],
  },
   {
    bg: "bg-blue-100",
    icon: <span className="bg-blue-500 text-white rounded p-3 text-3xl mr-2"></span>,
    title: "Tourism App Development",
    description:
      "Because of the continued expansion of the e-commerce industry, every company now needs tourism website development.",
    features: [
      { color: "bg-purple-200", icon: "", text: "Ticket, Hotel Bookings" },
      { color: "bg-orange-100", icon: "", text: "Car Booking" },
      { color: "bg-pink-200", icon: "", text: "Ad-Hoc Services" },
      { color: "bg-green-100", icon: "", text: "Travel Planning" },
      { color: "bg-yellow-100", icon: "", text: "CRM Platform" },
      { color: "bg-blue-50", icon: "", text: "Virtual Reality" },
    ],
  },
];

function SectorCard({ bg, icon, title, description, features }) {
  return (
    <div className={`${bg} rounded-lg p-8 shadow-md flex flex-col min-h-[230px] w-full max-w-md`}>
      <div className="flex items-center mb-2">{icon}</div>
      <h4 className="font-bold text-xl mb-2">{title}</h4>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="grid grid-cols-2 gap-2">
        {features.map((feature, i) => (
          <div
            key={i}
            className={`${feature.color} flex gap-2 items-center px-2 py-1 text-sm rounded`}
          >
            <span>{feature.icon}</span>
            {feature.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export function SectorsSlider() {
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
      setCurrent(prev => (prev + cardsPerView) % sectors.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [cardsPerView]);

  function prev() {
    setCurrent((prev) =>
      prev - cardsPerView < 0
        ? sectors.length - cardsPerView
        : prev - cardsPerView
    );
  }
  function next() {
    setCurrent((prev) =>
      (prev + cardsPerView) % sectors.length
    );
  }

 
  const visibleCards = Array(cardsPerView)
    .fill(0)
    .map((_, i) => sectors[(current + i) % sectors.length]);

  return (
    <div className="bg-white py-10 px-4">
      <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-10">
        Sectors Thriving Through Kryzen’s Bespoke Mobile App Development Services
      </h2>
      <div className="flex justify-center overflow-hidden gap-6">
        {visibleCards.map((props, idx) => (
          <SectorCard key={props.title + idx} {...props} />
        ))}
      </div>
      <div className="flex justify-center items-center gap-6 mt-6">
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