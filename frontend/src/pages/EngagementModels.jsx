import Model from "../public/engagement_model_1.svg";
import Dia from "../public/engagement_model_3.svg";
import Dia2 from "../public/engagement_model_4.svg";
import Dia3 from "../public/engagement_model_5.svg";
import Dia4 from "../public/engagement_model_6.svg";


import HeroSection from "../components/HeroSection";
import LogoCarousel from "../components/LogoCarousel";
import Charts from "../components/Charts";
import ProcessWeFollow from "../components/ProcessWeFollow";
import PremiumServices from "../components/PremiumServices";
import Brands from "../components/Brands";
import { CTASubscribe, CTAWorkTogether } from "../components/FeaturedLogos";
import { CheckCircle } from "lucide-react";

const points = [
    "Best for long-run big projects that need to develop from scratch.",
    "Dedicated team of developers is assigned.",
    "Economical as billing on an hourly basis or fixed rates.",
    "Flexible in terms of adding or improving new functionality.",
    "Mostly used in fintech and blockchain technology projects."
  ];

  const points2 = [
    "Best for long-run big projects that need to develop from scratch.",
    "Dedicated team of developers is assigned.",
    "Economical as billing on an hourly basis or fixed rates.",
    "Flexible in terms of adding or improving new functionality.",
    "Mostly used in fintech and blockchain technology projects."
  ];

   const points3 = [
    "It gives an exact figure for the budget planning.",
    "Timelines, scope are well-defined.",
    "Pay the bills as per milestone completion ensuring minimum loss.",
    "Client approval in case of change in scope ensuring no extension in budget.",
    "As all parameters are well-defined in the initial stage, minimum or zero client involvement."
  ];


function EngagementModels() {
  return (
    <>
      <HeroSection
        title="Kryzen’s Engagement models for customer success "
        description="Our Engagement Models Connect The Dots And Ensures Price And Quality Relationship Is Maintained"
        buttonText="Get Started"
        buttonLink="#contact"
        imageSrc={Model}
        imageAlt="Digital Solutions illustration"
      />
      <LogoCarousel />
      <Charts
        img={Dia}
        h1="Kryzen’s Engagement models for customer success "
        p1="Our efficient engagement model is designed by considering all relative aspects such that it will help us to shape the engagement with customer and the relationship between us and our prestigious client. Things before you ask before deciding the engagement model"
      />
      <section className="text-center">
        <h1 className="font-bold text-4xl">Our Engagement Model</h1>
        <div className="mt-4">
          <p>Sapphire works with these four engagement models ensuring the success is delivered to the client!</p>
        </div>
      </section>
      
<section className="bg-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">Dedicated Team</h2>
        <p className="text-gray-600 leading-relaxed">
          A dedicated team engagement model offers substantial control over the project
          along with significant flexibility. The best suitable model for vast and complex
          projects requires effective communication and collaboration.
        </p>

        <ul className="space-y-4">
          {points.map((item, index) => (
            <li key={index} className="flex items-start space-x-3">
              <CheckCircle className="text-blue-500 w-6 h-6 flex-shrink-0 mt-1" />
              <span className="text-gray-800 font-medium">{item}</span>
            </li>
          ))}
        </ul>

        <button className="mt-6 bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-all">
          Get Free Quote
        </button>
      </div>
      
      <div className="md:w-1/2 flex justify-center">
        <img
          src={Dia2}
          alt="Dedicated Team Model"
          className="max-w-md w-full"
        />
      </div>
    </section>
      
<section className="bg-blue-50 py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
      <div className="md:w-1/2 flex justify-center">
        <img
          src={Dia3}
          alt="Time and Materials Model"
          className="max-w-md w-full"
        />
      </div>
      
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">The Time & Materials</h2>
        <p className="text-gray-600 leading-relaxed">
          The time and materials model provides great suitability for agile-based frameworks
          like Scrum. This model offers flexibility and pay-for-work nature that ensures a
          faster ROI and effective project progress.
        </p>

        <ul className="space-y-4">
          {points2.map((item, index) => (
            <li key={index} className="flex items-start space-x-3">
              <CheckCircle className="text-blue-500 w-6 h-6 flex-shrink-0 mt-1" />
              <span className="text-gray-800 font-medium">{item}</span>
            </li>
          ))}
        </ul>

        <button className="mt-6 bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-all">
          Get Free Quote
        </button>
      </div>
      </section>
      
      <section className="bg-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">Dedicated Team</h2>
        <p className="text-gray-600 leading-relaxed">
          A dedicated team engagement model offers substantial control over the project
          along with significant flexibility. The best suitable model for vast and complex
          projects requires effective communication and collaboration.
        </p>

        <ul className="space-y-4">
          {points3.map((item, index) => (
            <li key={index} className="flex items-start space-x-3">
              <CheckCircle className="text-blue-500 w-6 h-6 flex-shrink-0 mt-1" />
              <span className="text-gray-800 font-medium">{item}</span>
            </li>
          ))}
        </ul>

        <button className="mt-6 bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-all">
          Get Free Quote
        </button>
      </div>
      
      <div className="md:w-1/2 flex justify-center">
        <img
          src={Dia4}
          alt="Dedicated Team Model"
          className="max-w-md w-full"
        />
      </div>
      </section>
      
      <ProcessWeFollow />
      <PremiumServices />
      <Brands />
      <CTAWorkTogether />
      <CTASubscribe />
    </>
  )
}

export default EngagementModels