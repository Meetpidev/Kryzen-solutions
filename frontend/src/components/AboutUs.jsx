import { useEffect, useRef, useState } from "react";
import Img_1 from "../public/About_1.webp";
import Img_2 from "../public/About_2.webp";
import Img_3 from "../public/fortune.webp";
import Img_4 from "../public/About_4.webp";
import Img_5 from "../public/About_5.webp";
import Img_6 from "../public/About_6.webp";
import Img_8 from "../public/About_7.webp";

const cards = [
  { image: Img_1, stat: "2+", desc: "Years of Experience" },
  { image: Img_8, stat: "15+", desc: "Projects Completed" },
  { image: Img_3, stat: "20+", desc: "Fortunes 500 Companies" },
  { image: Img_4, stat: "10+", desc: "IT Professionals" },
  { image: Img_5, stat: "99%", desc: "Client Retention" },
  { image: Img_6, stat: "2+", desc: "Industry Served" },
  { image: Img_2, stat: "20+", desc: "Satisfied Clients" },
  { image: Img_2, stat: "20+", desc: "Google Reviews" },
];

export default function AboutUs() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const goPrev = () => setCurrent(current === 0 ? cards.length - 1 : current - 1);
  const goNext = () => setCurrent(current === cards.length - 1 ? 0 : current + 1);

  return (
    <div className="bg-[#1668a7] py-11 px-2 min-h-[60vh]">
      <h2 className="text-white text-3xl font-bold text-center mb-4 md:text-4xl">About Us</h2>
      <p className="text-white text-center mb-8 text-1xl md:text-2xl">Kryzen delivers cutting-edge digital solutions that drive our clients to achieve unparalleled success</p>
      {/* small/medium screens: carousel */}
      <div className="block lg:hidden">
        <div className="w-full max-w-xs mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
            <img src={cards[current].image} className="mb-4 w-44 h-44 object-cover rounded" alt="Icnos" />
            <div className="text-4xl font-bold text-blue-600">{cards[current].stat}</div>
            <div className="text-lg text-gray-700">{cards[current].desc}</div>
          </div>
        </div>
        <div className="flex justify-center gap-8 mt-4">
          <button onClick={goPrev} className="p-3 rounded-full bg-blue-100 hover:bg-blue-300">&lt;</button>
          <button onClick={goNext} className="p-3 rounded-full bg-blue-100 hover:bg-blue-300">&gt;</button>
        </div>
      </div>
      {/* large screens: grid */}
      <div className="hidden lg:grid grid-cols-4 gap-x-8 gap-y-6 px-58">
        {cards.map(card => (
          <div key={card.start} className="bg-white rounded-xl shadow-lg p-4 flex items-center gap-4 w-[16rem]">
  <img
    src={card.image}
    className="w-30 h-30 object-cover rounded"
    alt="Icnos"
  />
  <div className="flex flex-col">
    <div className="text-3xl font-bold text-blue-600">{card.stat}</div>
    <div className="text-base text-gray-700">{card.desc}</div>
  </div>
</div>
        ))}
      </div>
    </div>
  );
}
