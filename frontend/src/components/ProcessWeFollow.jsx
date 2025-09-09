import { useState, useEffect } from "react";
import Arrows from "../public/process_we_follow_arrow.cb4604ab.jpg";
import Requirement from "../public/our_process_ic_1.png";
import Design from "../public/our_process_ic_2.png";
import Prototype from "../public/our_process_ic_3.png";
import Confirmation from "../public/our_process_ic_4.png";
import Development from "../public/our_process_ic_5.png";
import Deployment from "../public/our_process_ic_6.png";
import Support from "../public/our_process_ic_7.png";
import Seo from "../public/our_process_ic_8.png";

const processSteps = [
  {
    title: "Requirement Gathering",
    desc: "Focus would be on documentation first for clarity and better understanding from both sides and come to the same page.",
    step: "01",
    color: "bg-[#e4dcfa]",
    icon: Requirement,
  },
  {
    title: "Designs, Wireframes, & Mockups",
    desc: "We help our clients to create an interactive and wonder to watch UI designs that describes user-friendly flow of web/app/platform.",
    step: "02",
    color: "bg-[#cdf3fa]",
    icon: Design,
  },
  {
    title: "Prototype Demo",
    desc: "After finalizing and designs approval, we freeze the scope and help our client with demo or prototype to have a look and feel of the app/web/platform.",
    step: "03",
    color: "bg-[#ffe7e0]",
    icon: Prototype,
  },
  {
    title: "Changes And Confirmation",
    desc: "Clients can feel free to add and mention the required changes as per expectations they need in the existing platform. We'll proceed with client's confirmation on the same.",
    step: "04",
    color: "bg-[#fdf3d6]",
    icon: Confirmation,
  },
  {
    title: "Development",
    desc: "With client approval, we start the development with the technologies best suited for you, and deliver you results in the timeframe as committed by our technical team.",
    step: "05",
    color: "bg-[#ffe7f5]",
    icon: Development,
  },
  {
    title: "Deployment",
    desc: "We are open to help our clients with final testing, UAT, training, and final deployment of the source code, and launching in client’s platform.",
    step: "06",
    color: "bg-[#e6fae4]",
    icon: Deployment,
  },
  {
    title: "Support And Maintenance",
    desc: "We provide free service and support as per decided terms in our agreement. We also provide packages further monthly or yearly based on your requirement.",
    step: "07",
    color: "bg-[#f5e4fa]",
    icon: Support,
  },
  {
    title: "SEO",
    desc: "We are open to help our clients for promoting their businesses/products with providing complimentary SEO services, providing them a help hand to market their product/business.",
    step: "08",
    color: "bg-[#fafad6]",
    icon: Seo,
  },
];

export default function ProcessWeFollow() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSmall, setisSmall] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setisSmall(window.innerWidth < 1024); 
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    if (!isSmall) return; 
    const interval = setInterval(() => {
      setCurrentStep(prev => (prev === processSteps.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [isSmall]);

  const prevStep = () => {
    setCurrentStep(prev => (prev === 0 ? processSteps.length - 1 : prev - 1));
  };

  const nextStep = () => {
    setCurrentStep(prev => (prev === processSteps.length - 1 ? 0 : prev + 1));
  };

  if (isSmall) {
    const step = processSteps[currentStep];
    return (
      <div className="px-4 py-12 bg-white max-w-md mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Process We Follow</h2>

        <div className={`${step.color} rounded-2xl p-6 shadow flex flex-col h-full text-center`}>
          <div className="flex justify-center"><img src={step.icon} alt="Icons" /></div>
          <div className="font-bold mt-2 text-xl">{step.title}</div>
          <p className="mt-2 text-gray-700 text-base">{step.desc}</p>
          <div className="text-black-300 text-5xl font-bold mt-auto self-center">{step.step}</div>
        </div>

        <div className="flex justify-center gap-10 mt-8">
          <button
            aria-label="Previous step"
            onClick={prevStep}
            className="p-3 bg-blue-100 hover:bg-blue-200 rounded-full transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            aria-label="Next step"
            onClick={nextStep}
            className="p-3 bg-blue-100 hover:bg-blue-200 rounded-full transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 py-12 bg-white max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-5">Process We Follow</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {processSteps.slice(0, 4).map((step) => (
          <div key={step.title} className={`${step.color} rounded-2xl p-6 shadow flex flex-col h-full`}>
            <div className="h-14 w-14"><img src={step.icon} alt="Icons" /></div>
            <div className="font-bold mt-2">{step.title}</div>
            <p className="mt-1 text-gray-700 text-[15px]">{step.desc}</p>
            <div className="text-black-300 text-4xl font-bold mt-auto self-end">{step.step}</div>
          </div>
        ))}
      </div>

      {/* Timeline dots and lines */}
      <div className="flex justify-center w-full">
        <img src={Arrows} alt="Arrows" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {processSteps.slice(4).reverse().map((step) => (
          <div key={step.title} className={`${step.color} rounded-2xl p-6 shadow flex flex-col h-full`}>
            <div className="h-14 w-14"><img src={step.icon} alt="Icons" /></div>
            <div className="font-bold mt-2">{step.title}</div>
            <p className="mt-1 text-gray-700 text-[15px]">{step.desc}</p>
            <div className="text-black-300 text-4xl font-bold mt-auto self-end">{step.step}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
