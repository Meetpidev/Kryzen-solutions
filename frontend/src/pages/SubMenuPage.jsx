import React from "react";
import { useParams } from "react-router-dom";
import LogoCarousel from "../components/LogoCarousel";
import PremiumServices from "../components/PremiumServices";
import { useState, useEffect } from "react";
import AboutUs from "../components/AboutUs";
import ProcessWeFollow from "../components/ProcessWeFollow";
import TestimonialSlider from "../components/TestimonialSlider";
import Brands from "../components/Brands";
import SuccessMatrix from "../components/SuccessMatrix";
import CaseStudySlider from "../components/CaseStudySlider";
import ClientReview from "../components/ClientReview";
import Upper from "../components/Upper";
import FAQSection from "../components/FAQSection";
import { CTASubscribe, CTAWorkTogether } from "../components/FeaturedLogos";

const services = [
  {
    label: "Mobile App Development",
    sub: [
      "Watch App Development",
      "Mobile App Development",
      "Cross Platform App Development",
      "IPad App Development Services",
      "Kotlin App Development",
      "Hybrid App Development",
      "Progressive Web App Development",
      "Swift App Development",
      "IBeacon App Development",
      "Wearable App Development",
      "Native App Development",
      "Windows App Development",
      "Custom Mobile App Development",
      "B2B Mobile App Development"
    ]
  },
  { label: "Back End Development", sub: [] },
  { label: "AI & ML Development", sub: [] }
];

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
  
  // Add more cards as needed
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

  // Always show "cardsPerView" cards, wrapping around the array if needed
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

  // Auto-advance only on large screens
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

  // Wrap around for always showing "cardsPerView"
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

const expertiseCards = [
  {
    title: "iOS App Development",
    description:
      "We create iOS App Development company with fresh concepts, a straightforward GUI and interactive elements to help users reach out to you in a convenient way.",
    btn: "View More",
  },
  {
    title: "Flutter App Development",
    description:
      "Our team can develop Flutter App Development Company for your business that will help you save money, time while providing you with visually appealing native apps to boost ROI.",
    btn: "View More",
  },
  {
    title: "Cross-Platform Mobile Apps",
    description:
      "Our team combines transparency, features, and sensitive interfaces by leveraging the best cross-platform development such as Ionic, Xamarin, and others.",
    btn: "View More",
  },
  {
    title: "Cross-Platform Mobile Apps",
    description:
      "Our team combines transparency, features, and sensitive interfaces by leveraging the best cross-platform development such as Ionic, Xamarin, and others.",
    btn: "View More",
  },
  // Add more cards if needed
];

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

export function ExpertiseSlider() {
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

  // Auto-advance every 3s (desktop only)
  useEffect(() => {
    if (cardsPerView !== 3) return;
    const interval = setInterval(() => {
      setCurrent(prev => (prev + cardsPerView) % expertiseCards.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [cardsPerView]);

  function prev() {
    setCurrent((prev) =>
      prev - cardsPerView < 0
        ? expertiseCards.length - cardsPerView
        : prev - cardsPerView
    );
  }
  function next() {
    setCurrent((prev) =>
      (prev + cardsPerView) % expertiseCards.length
    );
  }

  // Always cardsPerView cards, wrapping around if needed
  const visibleCards = Array(cardsPerView)
    .fill(0)
    .map((_, i) => expertiseCards[(current + i) % expertiseCards.length]);

  return (
    <section className="bg-white py-10 px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-2">
        Our Expertise in Mobile App Development Services
      </h2>
      <p className="text-lg text-center text-gray-600 mb-10">
        We specialize in top mobile app development services for every industry type and size. Our expertise includes:
      </p>
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


const contentMap = {
  "mobile app development": (
    <>
        <section
        id="mobile"
        className="relative bg-blue-50 min-h-[95vh] flex flex-col md:flex-row items-center justify-center overflow-hidden"
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-8">
          <div className="max-w-xl mb-10 md:mb-0 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Best Mobile App Development Company
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-8">
              As a leading mobile app development company with Good Review and High Rating, we strive to offer cutting-edge solutions tailored to our clients' needs. Let's design an app that surpasses your expectations and makes you an industry leader. Contact us now!
            </p>
            <a
              href="#contact"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-lg transition duration-150"
            >
              Get Started
              <span className="ml-2 font-normal text-xl">&rarr;</span>
            </a>
          </div>
          <div className="w-full md:w-auto flex justify-center px-20">
            <img
              src=''
              alt="Digital Solutions illustration"
              className="w-full max-w-lg h-auto object-contain"
            />
          </div>
        </div>
      </section>
      <LogoCarousel />
      
      <section className="py-10 px-24">
        <div className="bg-gray-50 py-12 px-6">
      {/* Top row: Market Size Chart and Stats Card */}
      <div className="flex flex-col md:flex-row md:space-x-8 mb-12">
        {/* Bar Chart & Market Size */}
        <div className="flex-1 rounded-lg bg-white shadow p-8 flex flex-col items-center">
          <h3 className="font-bold text-lg mb-4">Mobile Application Market Size</h3>
          <img
            src="/path/to/bar-chart.png"
            alt="Mobile Application Market Size"
            className="w-full max-w-lg mb-2"
          />
          {/* Chart legend can be added below if needed */}
        </div>
        {/* Market Stats */}
        <div className="flex-1 rounded-lg bg-white shadow p-8 flex flex-col justify-between">
          <h3 className="text-2xl font-bold mb-4">Mobile App Market Stats</h3>
          <p className="text-gray-700 mb-6">
            The global mobile application market size was valued at nearly <strong>USD 250.75 billion</strong> in 2023 and is projected to grow at a CAGR of 15% from 2024 to 2030.
          </p>
          <a href="#contact" className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-lg transition">
            Connect With An Expert &rarr;
          </a>
        </div>
      </div>

      {/* Bottom row: Market Size Info and Yearly Users Chart */}
      <div className="flex flex-col md:flex-row md:space-x-8">
        {/* Market Size Info */}
        <div className="flex-1 rounded-lg bg-white shadow p-8 mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-3">The Mobile Application Development Market Size</h2>
          <p className="text-gray-700 mb-6">
            According to one study, there will be <strong>4.74 billion smartphone users</strong> by the end of 2024, growing at a rate of 2.2% each year.
            When examining the rise in smartphone users between 2020 to 2025, we find that the average yearly growth rate is 6.2%.
          </p>
          <a href="#contact" className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-lg transition">
            Connect With An Expert &rarr;
          </a>
        </div>
        {/* Pie/Donut Chart */}
        <div className="flex-1 rounded-lg bg-white shadow p-8 flex flex-col items-center">
          <h3 className="font-bold text-lg mb-4">Number of Global Smartphone Users From 2020 To 2025</h3>
          <img
            src="/path/to/pie-chart.png"
            alt="Global Smartphone Users 2020-2025"
            className="w-full max-w-xs"
          />
          {/* Yearwise figures can be added here if desired */}
        </div>
      </div>
    </div>
      </section>
     
       <section className="bg-white py-10 px-4">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10">
        Creating Excellent Mobile Apps for Every Business
      </h2>
      {/* Two-column content */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-start">
        {/* Left column: Quote/card */}
        <div className="md:w-1/3 w-full bg-blue-50 rounded-lg p-8 flex items-center justify-center min-h-[300px]">
          <div className="h-[22rem]">
            <span className="text-5xl text-blue-700 font-bold">“</span>
            <p className="text-2xl font-semibold text-blue-700 leading-tight">Smart and Reliable Apps</p>
          </div>
        </div>
        {/* Right column: Description */}
        <div className="md:w-2/3 w-full">
          <p className="text-gray-700 mb-4">
            Discover the potential of entirely customizable mobile app development services with reliable mobile app development company. Custom mobile apps for your company and needs are our speciality. We concentrate on flexibility and scalability to guarantee your app matches your brand identity and user expectations. As a custom mobile app development company, we collaborate with you to understand your vision and create a unique mobile app that stands out in the app market, from user interface design to backend functions. With our advanced Mobile app builder, you can turn ideas into powerful digital solutions efficiently while reducing development time and cost.
          </p>
          <p className="text-gray-700">
            Innovation and cooperation drive our development approach, with frequent feedback loops to adapt your app to your requirements and market trends. You can <span className="font-semibold text-blue-700">hire mobile app developers</span> to design consumer-facing apps, corporate solutions, and more. From concept and prototyping to development, testing, and deployment, our rigorous development process ensures your app exceeds expectations. When considering the development of a mobile app, understanding the mobile app development cost is essential. Costs vary depending on factors such as app complexity, platform (iOS vs. Android), and features. As a Mobile App Design Agency, our high-quality, scalable, and feature-rich mobile solutions help your business thrive in today’s competitive digital market.
          </p>
        </div>
      </div>
      </section>
      

      <section>
      <TechnologiesSlider />
      <PremiumServices />
        <TechnologiesSlider />
        <AboutUs />
        <SectorsSlider />
        <ExpertiseSlider />
        <ProcessWeFollow />
        <TestimonialSlider />
        <Brands />
        <SuccessMatrix />
        <ClientReview />
        <CaseStudySlider />
        <FAQSection />
        <Upper />
        <CTAWorkTogether />
        <CTASubscribe />
      </section>

    </>
  ),

  "watch app development": (
    <p>Details about Watch App Development will be added here.</p>
  ),

  "cross platform app development": (
    <p>Cross platform apps allow you to develop once and deploy on multiple platforms efficiently.</p>
  ),

  // Add other submenu keys and content similarly...
};

function SubMenuContent({ subItemName }) {
  const key = subItemName.toLowerCase();
  const content = contentMap[key];
  return (
    <div className="text">
      {content ?? <p>Details and information about <strong>{subItemName}</strong> will be shown here.</p>}
    </div>
  );
}

export default function SubMenuPage() {
  const { service, subItem } = useParams();

  const serviceEntry = services.find(
    s => s.label.toLowerCase().replace(/\s+/g, "-") === service
  );

  const normalizedSubItem = subItem?.toLowerCase().replace(/-/g, " ");

  const subItemName = serviceEntry?.sub.find(
    sub => sub.toLowerCase() === normalizedSubItem
  );

  if (!serviceEntry) {
    return <div className="p-10 text-center">Service not found</div>;
  }

  if (!subItemName) {
    return <div className="p-10 text-center">Sub-service not found</div>;
  }

  return (
    <div className="max-w-full mx-auto">
      <SubMenuContent subItemName={subItemName} />
    </div>
  );
}
