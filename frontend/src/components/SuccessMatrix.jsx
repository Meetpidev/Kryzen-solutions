import { useState, useEffect } from "react";
import SEO from "../public/ic_seo.png";
import Support from "../public/ic_support.png";
import NoDisclosure from "../public/ic_non_disclosure.png";
import Money from "../public/ic_money.png";
import Coding from "../public/ic_coding_version.png";
import Payment from "../public/ic_flexible_payment.png";
import Analysis from "../public/ic_in_dept_analysis.png";
import AMC from "../public/ic_amc.png";
import Mind from "../public/ic_mind_maps.png";
import Moneys from "../public/ic_money.png";
import Quality from "../public/ic_quality.png";
import Penalty from "../public/ic_penalty.png";
import RealTime from "../public/ic_real_time.png";

const successMatrixData = [
  {
    title: "SEO and Digital Marketing",
    icon: SEO,
  },
  {
    title: "4 months + Free Post Launch Support",
    icon: Support,
  },
  {
    title: "Non-Disclosure",
    icon: NoDisclosure,
  },
  {
    title: "100% value for the money",
    icon: Money,
  },
  {
    title: "Professional coding and version controls",
    icon: Coding,
  },
  {
    title: "Flexible payment plans",
    icon: Payment,
  },
  {
    title: "Real-time project tracking tools",
    icon: RealTime,
  },
  {
    title: "Custom Tailored support | AMC Plans",
    icon: AMC,
  },
  {
    title: "Quality Assurance and Unit Test Cases",
    icon: Quality,
  },
  {
    title: "Penalty enforcement in case of Delivery Delay",
    icon: Penalty,
  },
  {
    title: "In-dept analysis of revenue business Models",
    icon: Analysis,
  },
  {
    title: "Mind Maps and video demos",
    icon: Mind,
  },
];

export default function SuccessMatrix() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSmallOrMedium, setIsSmallOrMedium] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsSmallOrMedium(window.innerWidth < 1024);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    if (!isSmallOrMedium) return;
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex =>
        prevIndex === successMatrixData.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [isSmallOrMedium]);

  const prev = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? successMatrixData.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === successMatrixData.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (isSmallOrMedium) {
    const item = successMatrixData[currentIndex];
    return (
      <div className="bg-blue-50 py-12 px-4 flex flex-col items-center min-h-[60vj]">
        <div className="max-w-md w-full text-center">
          <h2 className="text-4xl font-extrabold mb-4 text-gray-900">Success Matrix</h2>
          <p className="mb-12 text-lg text-gray-700">
            We offer comprehensive services to develop digital solutions &amp; manage complete product lifecycle. We've robust work history with diverse business services.
          </p>
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-lg transition w-full">
            <img src={item.icon} alt="Icons" />
            <div className="font-bold text-lg text-center">{item.title}</div>
          </div>
          <div className="flex justify-center gap-6 mt-8">
            <button
              onClick={prev}
              aria-label="Previous item"
              className="p-3 rounded-full bg-white hover:bg-gray-100 transition"
            >
              {/* Left arrow */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Next item"
              className="p-3 rounded-full bg-white hover:bg-gray-100 transition"
            >
              {/* Right arrow */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-blue-50 py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-2 text-gray-900">Success Matrix</h2>
        <p className="mb-12 text-lg text-gray-700">
          We offer comprehensive services to develop digital solutions &amp; manage complete product lifecycle. We've robust work history with diverse business services.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {successMatrixData.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-lg transition">
              <img src={item.icon} alt="Icons" />
              <div className="font-bold text-lg text-center">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
