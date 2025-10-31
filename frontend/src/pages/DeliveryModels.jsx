import DeliveryModel from "../public/delivery_model_images_1.svg";
import DeliveryDia from "../public/delivery_model_images_2.svg";
import Delivery3 from "../public/delivery_model_images_3.svg";
import Delivery4 from "../public/delivery_model_images_4.svg";
import Delivery5 from "../public/delivery_model_images_5.svg";


import HeroSection from "../components/HeroSection";
import LogoCarousel from "../components/LogoCarousel";
import Charts from "../components/Charts";
import PremiumServices from "../components/PremiumServices";
import Brands from "../components/Brands";
import { CTASubscribe, CTAWorkTogether } from "../components/FeaturedLogos";

const benifits = [
  {
    title: "Low Cost",
    description: "Low labor cost reduces the overall project budget significantly."
  },
  {
    title: "Faster Response",
    description: "Responsiveness to changes in client’s needs is faster in the offshore delivery model."
  },
  {
    title: "Perfect Outcomes",
    description: "The client will get the almost same outcome as that delivered by in-house staff."
  },
  {
    title: "Round The Clock Support",
    description: "We offer 24*7 support that stops the client from being tangled in timeline differences."
  },
  {
    title: "Exact Estimated Cost Of The Project",
    description: "Sapphire estimation of the project is near to accurate providing economic stability."
  },
  {
    title: "No Extra Expenses",
    description: "Forget the expenses of infrastructure expansion to accommodate onsite."
  }
];

const onsiteBenefits = [
  {
    title: "Effective Communication",
    description: "As clients can approach the development team members easily, regular face-to-face communication is possible. This avoids miscommunication chances because of the time and distance gap."
  },
  {
    title: "On-Hand Information",
    description: "Both client and vendor development teams are on the same page so both participants get first-hand information from their employees and can learn about the progress of the project."
  },
  {
    title: "Rapid Development",
    description: "Time, energy, and cost is saved as both our development team and the client’s in-house team are present in the same location that leads to the rapid development."
  },
  {
    title: "Minimal Project Changes",
    description: "Fewer possibilities of miscommunication lead to negligible changes required at later stages of the project."
  },
  {
    title: "Protect IP",
    description: "When there are major security concerns, this model works best as all development happens at the client so the client’s IP is secure."
  }
];

const hybridModelBenefits = [
  {
    title: "Optimum Productivity",
    description: "As resources at both ends are used at optimum scale, the result is heightened productivity."
  },
  {
    title: "Direct Communication",
    description: "Client can have one-to-one communication with the onsite team and this communication is propagated to the offshore team."
  },
  {
    title: "Best For Long Term Projects",
    description: "This model works for long-term projects and in which the client doesn’t want a large onsite team reducing the cost."
  },
  {
    title: "Best Resources",
    description: "The hybrid model implements the best resources, latest technologies and can avail the offshore infrastructure within the project budget."
  },
  {
    title: "Economically Fit",
    description: "Most of the development work is performed at our offshore center so it will help to reduce the cost significantly."
  },
  {
    title: "Protect IP",
    description: "Collaborate with us and feel the empowerment of digitalization by maximizing your business."
  }
];



function DeliveryModels() {
  return (
    <>
      <HeroSection
        title="Explore Our Delivery Model"
        description="The Delivery Model Defines The Way Of Project Delivery Depending On The Location Of Manpower Resources. Sapphire Offers Flexible And Efficient Delivery Models That Ensure Only The Success Of The Project."
        buttonText="Get Started"
        buttonLink="#contact"
        imageSrc={DeliveryModel}
        imageAlt="Digital Solutions illustration"
      />
      <LogoCarousel />
      <Charts
        img={DeliveryDia}
        h1="To Maximize Your Business Potential And Drive Profitability!"
        p1="'Start the success journey with our best-fit delivery model and be sure only the best product is delivered' Sapphire works on three delivery models, each of the models is the best for the dedicated criteria. With our efficient models, we understand our client’s diversified requirements, their fast delivery needs. Our delivery models are scalable, secure solutions for onsite, offshore, and hybrid project requirements ensuring a good return on investments. Our consistent high- end performance assures the rest! Every project has its own requirements and they or the support require for it changes over time. Sapphire solution provides a rational approach for all types of project requirements and fulfills the dynamic business needs."
      />
      <Charts
        img={Delivery3}
        h1="Offshore Delivery Model"
        p1="As the name suggests, project developments and milestones are achieved are occurred at our offshore development location. As this model requires less engagement of the client, all major activities like UI design, programming, testing, deployment, and support are managed from our development center in Ahmedabad, Gujrat. It is the best option for projects with a well-defined scope, from inception to completion."
      />
      <section className="p-16 translate-y-[-9rem]">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {benifits.map((item, index) => (
           <div key={index} className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2 text-black">{item.title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
    </div>
        ))}
      </div>
      </section>

      <Charts
        img={Delivery4}
        h1="Onsite Delivery Model"
        p1="In this delivery model, our expert development engineers are employed at the client’s location. They interact with the client’s in-house team to accomplish various software development activities. This model is best for short-term projects or the projects that need re-engineering as the client need to bear various cost overheads."
      />
      <section className="p-16 translate-y-[-9rem]">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {onsiteBenefits.map((item, index) => (
           <div key={index} className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2 text-black">{item.title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
    </div>
        ))}
      </div>
      </section>

      <Charts
        img={Delivery5}
        h1="Hybrid Delivery Model"
        p1="The hybrid delivery model offers benefits of both onsite and offshore delivery models. This model ensures the application’s efficient optimization and cost-effectiveness. The most popular model divides the work between offshore and onsite teams. The onsite team offers required support and solutions for business strategy-related issues and the offshore team looks into the development. Our onsite members are proficient in requirement analysis, testing and deployment whereas offshore team members handle all types of development issues."
      />
      <section className="p-16 translate-y-[-9rem]">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {hybridModelBenefits.map((item, index) => (
           <div key={index} className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2 text-black">{item.title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
    </div>
        ))}
      </div>
      </section>

      <PremiumServices />
      <Brands />
      <CTAWorkTogether />
      <CTASubscribe />
    </>
  )
}

export default DeliveryModels