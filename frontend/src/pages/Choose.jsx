import { useState, useEffect, lazy } from "react";
import { Link } from "react-router-dom";
import Whyus from "../public/why_banner.png";
import Fortune from "../public/ic_fortune_100_clientle.png";
import Client from "../public/ic_client_presence.png";
import Since from "../public/ic_since.png";
import Cost from "../public/ic_no_hidden_cost.png";
import Guiends from "../public/ic_free_guidence.png";
import Trust from "../public/ic_trust.png";
import Domain from "../public/ic_domain_expertise.png";
import Secured from "../public/ic_secure_safe.png";
import Handover from "../public/ic_evolving_ideas.png";
import Enterprise from "../public/ic_enterprise_app.png";
import Problem from "../public/ic_problem_solving.png";
import Strategy from "../public/ic_strategy_dev.png";
import Flexibility from "../public/ic_flexibile.png";
import CostOpt from "../public/ic_cost_optimization.png";
import Deliver from "../public/ic_timely_delivery.png";
import Testing from "../public/ic_testing_prototype.png";
import Eng from "../public/ic_english_proficiency.png";
import Touch from '../public/ic_keep_in_touch.png';
import Innovation from "../public/ic_inovation.png";
import Support from "../public/ic_support_help.png";
import SupportM from "../public/ic_support_maintenance.png";
import OwnerShip from "../public/ic_app_ownership.png"
import Communication from "../public/ic_clear_communication.png";
import Quality from "../public/ic_quality_assurance.png";


const CTASubscribe = lazy(() => import("../components/FeaturedLogos").then(module => ({ default: module.CTASubscribe })));
const CTAWorkTogether = lazy(() => import("../components/FeaturedLogos").then(module => ({ default: module.CTAWorkTogether })));

export default function Choose() {
  const features = [
    {
      title: "Fortune 15 clientele",
      description: "Effective solutions with delivering satisfactory outcomes has enabled us to add fortune 10-15 clients to our list.",
      icon: Fortune,
    },
    {
      title: "Clients Presence",
      description: "Clients in more than 15 countries across the globe are advocates of Kryzen's deliverability, quality, and production.",
      icon: Client,
    },
    {
      title: "Since 2024!",
      description: "Having presence in market for more than 2 years and still counting. Choosing us benefits you by getting your product deployed under expert technicians as per your expectations.",
      icon: Since,
    },
    {
      title: "No Hidden Costs",
      description: "Pay for the service you get and nothing else. Kryzen has a strict policy of avoiding any additional charges and takes payment once the work is completely done.",
      icon: Cost
    },
    {
      title: "Free Guidance",
      description: "New to web or app development? Please feel free to ask for any guidance or consultation—Kryzen provides it completely free of charge.",
      icon: Guiends,
    },
    {
      title: "Trust",
      description: "Hire Kryzen and get secured. Hand over your worries to a 2+ years.",
      icon: Trust,
    },
    {
      title: "Domain Expertise",
      description: "Continuously evolving—offering technologies such as Flutter, React Native, ML, React JS, Node JS, etc.",
      icon: Domain,
    },
    {
      title: "Secured & Safe",
      description: "We sign NDAs and implement essential steps to protect sensitive project data on high-security systems.",
      icon: Secured,
    },
    {
      title: "Easy Handover",
      description: "Honest enough to say “Not a good fit for you”? We provide complete KT (Knowledge Transfer) for a smooth exit process.",
      icon: Handover,
    },
    {
      title: "Enterprise Apps",
      description: "Expertise not only in on-demand apps, but also ERP, CRM, SaaS products.",
      icon: Enterprise,
    },
    {
      title: "Problem Solving",
      description: "We help not just with code but with roadmaps, providing client-centric solutions.",
      icon: Problem,
    },
    {
      title: "Strategy Development",
      description: "Agile methodology with precise development and post-launch client retention strategies—helping us maintain 100% client retention.",
      icon: Strategy,
    },
    {
      title: "Flexible Availability",
      description: "40 hours per week, 8 hours per day. Available on weekends for urgent deliveries (with advance notice). Dedicated updates and daily progress reporting.",
      icon: Flexibility,
    },
    {
      title: "Cost Optimization",
      description: "Hire a team at the cost of a single individual. Hourly rates vary depending on developer complexity.",
      icon: CostOpt,
    },
    {
      title: "Timely Delivery",
      description: "Proven track record of on-time delivery. Deadline established early, including buffer for debugging and training—offering a clear roadmap before you award the project.",
      icon: Deliver,
    },
    {
      title: "Testing Prototypes",
      description: "Multiple testing layers: unit testing, prototype testing, UI/UX testing, and deployment testing.",
      icon: Testing,
    },
    {
      title: "English Proficiency",
      description: "No language barrier. Our team—from Sales to Support—is trained in proficient English for seamless communication.",
      icon: Eng,
    },
    {
      title: "Always In Touch",
      description: "We believe in staying connected with clients, partners, and prospects to build strong relationships.",
      icon: Touch,
    },
    {
      title: "Innovation",
      description: "Innovation is the birth of new invention. We incorporate modern and precise touches into your project/product.",
      icon: Innovation,
    },
    {
      title: "Support Help",
      description: "Relationships extend beyond development—long-term support and maintenance included.",
      icon: Support,
    },
    {
      title: "Support & Maintenance",
      description: "Written commitments to provide configuration, orientation, customization, maintenance, and backup services.",
      icon: SupportM,
    },
    {
      title: "Application Ownership",
      description: "We are white-label providers. All graphics, source code, and related content belong to you for future scaling or upgrades.",
      icon: OwnerShip,
    },
    {
      title: "Clear Communication",
      description: "Our developers are proactive communicators—offering suggestions, problem-solving, and transparent updates.",
      icon: Communication,
    },
    {
      title: "Quality Assurance",
      description: "QA begins as soon as code is ready—not just at the end of the project.",
      icon: Quality,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [features.length]);


  const prevFeature = () => {
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  const nextFeature = () => {
    setCurrentIndex((prev) => (prev + 1) % features.length);
  };

  return (
    <>
      <section className="bg-blue-50 md:py-17 md:mt-30 px-2 md:px-7 mt-30 py-10">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 mb-14">

          <div className="max-w-xl">
            <h2 className="text-3xl font-bold mb-3 text-gray-900">Why Choose Us?</h2>
            <p className="mb-3 text-gray-600">
              We understand the seriousness of your project, and here are the few reasons that why should you join the Kryzen club and get added to the list of 15+ clients who have been trusting us since 2 decades.
            </p>
            <Link to="/contact-us" className="inline-block mt-4 bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-900 transition-all">
              Connect Now <span className="ml-2">&#8594;</span>
            </Link>
          </div>

          <div className="max-w-md md:max-w-lg w-full mx-auto flex-shrink-0 flex justify-center">
            <img
              src={Whyus}
              alt="Why Choose Us"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      <section className="mt-13 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-900">Why Kryzen?</h2>
        <p className="text-center text-gray-500 mb-10">Reasons why our clients keep coming back to us:</p>


        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-sm border border-blue-50 px-6 py-8 flex flex-col justify-between min-h-[170px]">
              <img src={feature.icon} alt="ICON" className="h-10 w-10"/>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>


        <div className="lg:hidden bg-white rounded-2xl shadow-sm border border-blue-50 px-6 py-8 flex flex-col justify-between min-h-[170px] max-w-md mx-auto">
          <h3 className="font-semibold text-lg text-gray-900 mb-2 text-center">{features[currentIndex].title}</h3>
          <p className="text-gray-600 text-sm text-center mb-6">{features[currentIndex].description}</p>
          <div className="flex justify-center gap-6">
            <button
              onClick={prevFeature}
              aria-label="Previous feature"
              className="bg-blue-700 text-white rounded-full p-2 hover:bg-blue-900 transition"
            >
              &#8592;
            </button>
            <button
              onClick={nextFeature}
              aria-label="Next feature"
              className="bg-blue-700 text-white rounded-full p-2 hover:bg-blue-900 transition"
            >
              &#8594;
            </button>
          </div>
        </div>
      </section>

      <section>
        <CTAWorkTogether />
        <CTASubscribe />
      </section>
    </>
  );
}
