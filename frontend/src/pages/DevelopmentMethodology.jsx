import Model from "../public/development_methodology_1.svg";
import Dia from "../public/development_methodology_2.svg";
import Dia2 from "../public/development_methodology_3.svg";
import Dia3 from "../public/development_methodology_4.svg";
import Dia5 from "../public/development_methodology_5.svg";
import Dia6 from "../public/development_methodology_6.svg";
import Dia7 from "../public/development_methodology_7.svg";
import Dia8 from "../public/development_methodology_8.svg";


import HeroSection from "../components/HeroSection";
import LogoCarousel from "../components/LogoCarousel";
import Charts from "../components/Charts";
import PremiumServices from "../components/PremiumServices";
import Brands from "../components/Brands";
import { CTASubscribe, CTAWorkTogether } from "../components/FeaturedLogos";
import { CheckCircle } from "lucide-react";

const features = [
  {
    title: "High-quality outputs in small iterations"
  },
  {
    title: "Adaptive approach"
  },
  {
    title: "Open for creative improvements & modifications"
  },
  {
    title: "Well planned costing & budget before each iteration"
  },
  {
    title: "Regular interaction between the client and the development team"
  },
  {
    title: "Superior quality product and customer satisfaction"
  }
];

const Scrumfeatures = [
  {
    title: "Development in a series of sprints"
  },
  {
    title: "Fast discovery of problems"
  },
  {
    title: "Client participation in the production cycle"
  },
  {
    title: "Fast feedback cycle"
  },
  {
    title: "Daily team meeting"
  },
  {
    title: "Business engagement"
  }
];

const Devopsfeatures = [
  {
    title: "Increased team flexibility and agility"
  },
  {
    title: "Collaborative working"
  },
  {
    title: "More exposure to automation"
  },
  {
    title: "Faster delivery cycle"
  },
  {
    title: "Improved operational support and quick fixes"
  },
  {
    title: "Quality and Reliability"
  }
];

const Waterfallfeatures = [
 {
    title: "Effective model for small-scale projects with well-defined requirements."
  },
  {
    title: "Fixeed deadline"
  },
  {
    title: "Great Quality control"
  }
]

const Iterativefeatures = [
  {
    title: "Flexibility to change requirements"
  },
  {
    title: "Early detection of issues"
  },
  {
    title: "Customer feedback incorporated"
  }
]


function DevelopmentMethodology() {
  return (
    <>
      <HeroSection
        title="Development Methodology"
        description="Every Project Starts With Deciding The Perfect Development Methodology For It"
        buttonText="Get Started"
        buttonLink="#contact"
        imageSrc={Model}
        imageAlt="Digital Solutions illustration"
      />
      <LogoCarousel />
      <Charts
        img={Dia}
        h1="What is development methodology?"
        p1="'Kryzenn Solutions make sure that the best development methodology is applied to meet business goals and only success is delivered.' Every project goes through a strategic process to achieve the ultimate goals like timely project completion, cost- effectiveness, optimum quality. The development methodology is the process or sequence of the processes that are used in software development. Every development methodology works in the following phases:"
      />
      <Charts
        img={Dia2}
        h1="Criteria For Choosing Best Development Methodology"
        p1="Let us define the various criteria for choosing the best development methodology for the project. We have a customer-centric approach in the entire development process so we focus on understanding the customer requirement and offering the best solutions."
      />

      <Charts
        img={Dia3}
        h1="Agile Methodology"
        p1="As the name suggests itself, the agile methodology works perfectly for rapid and flexible response."
      />
      <section className="p-16 translate-y-[-9rem]">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            
      <h3 className="text-lg font-semibold mb-2 text-black flex"><span className="mr-3"><CheckCircle /></span>{item.title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
    </div>
        ))}
      </div>
      </section>

      <Charts
        img={Dia5}
        h1="Scrum Methodology"
        p1="Best for high or small-scale projects with frequently changing project requirements."
      />
      <section className="p-16 translate-y-[-9rem]">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Scrumfeatures.map((item, index) => (
           <div key={index} className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2 text-black flex"><span className="mr-3"><CheckCircle /></span>{item.title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
    </div>
        ))}
      </div>
      </section>

      <Charts
        img={Dia6}
        h1="DevOps Methodology"
        p1="Best suitable for faster and rapid delivery of applications. DevOps Manifesto"
      />
      <section className="p-16 translate-y-[-9rem]">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Devopsfeatures.map((item, index) => (
           <div key={index} className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2 text-black flex"><span className="mr-3"><CheckCircle /></span>{item.title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
    </div>
        ))}
      </div>
      </section>

      <PremiumServices />

      <Charts
        img={Dia7}
        h1="Waterfall Methodology"
        p1="The traditional methodology best suited for projects with fixed requirements."
      />
      <section className="p-16 translate-y-[-9rem]">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Waterfallfeatures.map((item, index) => (
           <div key={index} className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2 text-black flex"><span className="mr-3"><CheckCircle /></span>{item.title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
    </div>
        ))}
      </div>
      </section>

       <Charts
        img={Dia8}
        h1="Iterative Methodology"
        p1="The iterative model works best with the project is big scale but requirements are clearly defined."
      />
      <section className="p-16 translate-y-[-9rem]">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Iterativefeatures.map((item, index) => (
           <div key={index} className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2 text-black flex"><span className="mr-3"><CheckCircle /></span>{item.title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
    </div>
        ))}
      </div>
      </section>

      <Brands />
      <CTAWorkTogether />
      <CTASubscribe />
    </>
  )
}

export default DevelopmentMethodology