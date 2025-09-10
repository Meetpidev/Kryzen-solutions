import { lazy } from "react";
import { useParams } from "react-router-dom";
import MobileApp from "../public/mobile_app_development1.webp";
import CostomApp from "../public/custom_app_banner.png";
import CustomDes from "../public/custom_app_section_1.png";
import CustomAbout from "../public/custom_app_about.png";
import CrossDes from "../public/cross_platform.png";
import Windows from "../public/windows_app_banner.png";
import WindowSection from "../public/windows_app_section_1.png";
import WindowAbout from "../public/windows_app_about.png";
import Chart from "../public/mobile_market_stats.webp";
import PieChart from "../public/pie_chart.webp";
import Img_1 from "../public/Explore_1.png";
import Img_2 from "../public/Explore_2.png";
import Img_3 from "../public/Explore_3.png";

const TechnologiesSlider = lazy(() => import("../components/TechnologiesSlider").then(module => ({ default: module.TechnologiesSlider })));
const SectorsSlider = lazy(() => import("../components/SectorsSlider").then(module => ({ default: module.SectorsSlider })));
const ExpertiseSlider = lazy(() => import("../components/ExpertiseSlider").then(module => ({ default: module.ExpertiseSlider })));
const ImpactCards = lazy(() => import("../components/ImpactCards").then(module => ({ default: module.ImpactCards })));
const LogoCarousel = lazy(() => import("../components/LogoCarousel"));
const PremiumServices = lazy(() => import("../components/PremiumServices"));
const AboutUs = lazy(() => import("../components/AboutUs"));
const ProcessWeFollow = lazy(() => import("../components/ProcessWeFollow"));
const TestimonialSlider = lazy(() => import("../components/TestimonialSlider"));
const Brands = lazy(() => import("../components/Brands"));
const SuccessMatrix = lazy(() => import("../components/SuccessMatrix"));
const ClientReview = lazy(() => import("../components/ClientReview"));
const Upper = lazy(() => import("../components/Upper"));
const FAQSection = lazy(() => import("../components/FAQSection"));
const HiringModels = lazy(() => import("../components/HiringModels"));
const Benefits = lazy(() => import("../components/Benefits"));
const HeroSection = lazy(() => import("../components/HeroSection"));
const Quotes = lazy(() => import("../components/Quotes"));
const CTASubscribe = lazy(() => import("../components/FeaturedLogos").then(module => ({ default: module.CTASubscribe })));
const CTAWorkTogether = lazy(() => import("../components/FeaturedLogos").then(module => ({ default: module.CTAWorkTogether })));

// import Img_4 from "../public/Explore_4.png";
// import Img_5 from "../public/Explore_5.png";
// import Img_6 from "../public/Explore_6.png";
// import Img_7 from "../public/Explore_7.png";

const services = [
  {
    label: "Mobile App Development",
    sub: [
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
  {
    label: "Back End Development",
    sub: [
      "Django Development",
      "Laravel Development",
      "Python Development",
      "NodeJs Development",
      "Big Commerce Development",
    ]
  },
  {
    label: "AI & ML Development",
    sub: [
      "AI/ML Development",
      "Chatboat Development",
      "Data Analysis",
      "Data Migration",
      "Business Analysis",
    ]
  },
  {
    label: "Frontend Development",
    sub: [
      "Typescript Development",
      "Angular Development",
      "ReactJs Development",
    ]
  },
  {
    label: "Software Development",
    sub: [
      "product Development", "Software Development", "Application services", "Startup consulting",
      "CRM", "Web application", "App development consulting", "Business Application consulting",
      "Full stack development",
    ]
  },
  {
    label: "Other services",
    sub: [
      "UI/UX Designing", "Digital marketing", "Mobile application Development"
    ]
  },
  {
    label: "Tech Consulting",
    sub: [
      "It consulting", "App development", "Startup Consulting"
    ]
  },

];

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
];

const benefitCards = [
  {
    img: Img_1,
    title: "Enhanced Customer Engagement",
    description:
      "Mobile application give businesses the ability to give their users a more immersive and engaging experience by giving them a direct and personalized communication channel.",
    bg: "bg-yellow-100",
  },
  {
    img: Img_2,
    title: "Increased Brand Visibility",
    description:
      "By actively interacting with your audience across many channels, you can use social media platforms to raise brand awareness for your mobile application.",
    bg: "bg-teal-100",
  },
  {
    img: Img_3,
    title: "Improve Customer Loyalty and Retention",
    description:
      "Mobile apps aid in customer understanding and the creation of pleasurable shopping experiences. Customers are more loyal when they receive personalized recommendations and early access to promotions.",
    bg: "bg-blue-100",
  },
];

const benefits = [
  {
    title: "Tech-savvy",
    description:
      "Our team knows many programming languages, frameworks, and tools for iOS, Android, and cross-platform app development. As a Mobile Application Development Company, Swift, Kotlin, Java, JavaScript, React Native, Flutter, and Xamarin are our expertise.",
  },
  {
    title: "Knowledge and Skill",
    description:
      "Our team includes experienced mobile app developers from many sectors. They've completed everything from consumer applications to business solutions, and their varied skills allow them to solve problems quickly and creatively for customers.",
  },
  {
    title: "Design sense",
    description:
      "Our mobile app developers are design and UX experts. They value attractive, intuitive, and easy-to-use interfaces. Using UI/UX best practices, our developers ensure that every component of the app improves user engagement and pleasure, creating a good experience.",
  },
  {
    title: "Agile Methodologies",
    description:
      "To guarantee flexibility, transparency, and cooperation, our engineers use Scrum or Kanban. We divide the project into sprints for feedback and iteration. Iterative development allows our developers to adapt to changing needs and provide high-quality outcomes on time and within budget.",
  },
  {
    title: "Transparency",
    description:
      "We work with you from planning to implementation and support. With clear communication and frequent updates, our developers turn your idea into a successful mobile app that matches your company goals.",
  },
  {
    title: "Quality Control",
    description:
      "Quality is our priority. Our services satisfy the highest performance, reliability, and security requirements since our developers undergo rigorous quality assurance methods. Before the app is published, it undergoes functional, usability, performance, and security testing to find and fix any flaws.",
  },
];

const Charts = ({img,img2}) => {
  return (
    <section className="py-10 px-24">
      <div className="bg-gray-50 py-12 px-6">

        <div className="flex flex-col md:flex-row md:space-x-8 mb-12">

          <div className="flex-1 rounded-lg bg-white shadow p-8 flex flex-col items-center">
            <img
              src={img}
              alt="Mobile Application Market Size"
              className="w-full max-w-lg mb-2"
            />

          </div>

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


        <div className="flex flex-col md:flex-row md:space-x-8">

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

          <div className="flex-1 rounded-lg bg-white shadow p-8 flex flex-col items-center">
            <img
              src={img2}
              alt="Global Smartphone Users 2020-2025"
              className="w-[434rem] h-[18rem]"
            />

          </div>
        </div>
      </div>
    </section>
  )
}

const Common = () => {
  return (
    <>
      <HiringModels />
      <ProcessWeFollow />
      <TestimonialSlider />
      <Brands />
      <SuccessMatrix />
      <ClientReview />
      <FAQSection />
      <Upper />
      <CTAWorkTogether />
      <CTASubscribe />
    </>
  )
}

const contentMap = {
  "mobile app development": (
    <>
      <HeroSection
        title="Best Mobile App Development Company"
        description="As a leading mobile app development company with Good Review and High Rating,
                             we strive to offer cutting-edge solutions tailored to our clients' needs. Let's design an app
                             that surpasses your expectations and makes you an industry leader. Contact us now!"
        buttonText="Get Started"
        buttonLink="#contact"
        imageSrc={MobileApp}
        imageAlt="Digital Solutions illustration"
      />

      <LogoCarousel />
      <Charts img={Chart} img2={PieChart} />
      <Quotes
        title="Creating Excellent Mobile Apps for Every Business"
        highlightedText="Smart and Reliable Apps"
        paragraphs={[
          "Discover the potential of entirely customizable mobile app development services with reliable mobile app development company. Custom mobile apps for your company and needs are our speciality. We concentrate on flexibility and scalability to guarantee your app matches your brand identity and user expectations. As a custom mobile app development company, we collaborate with you to understand your vision and create a unique mobile app that stands out in the app market, from user interface design to backend functions. With our advanced Mobile app builder, you can turn ideas into powerful digital solutions efficiently while reducing development time and cost.",
          "Innovation and cooperation drive our development approach, with frequent feedback loops to adapt your app to your requirements and market trends. You can hire mobile app developers to design consumer-facing apps, corporate solutions, and more. From concept and prototyping to development, testing, and deployment, our rigorous development process ensures your app exceeds expectations. When considering the development of a mobile app, understanding the mobile app development cost is essential. Costs vary depending on factors such as app complexity, platform (iOS vs. Android), and features. As a Mobile App Design Agency, our high-quality, scalable, and feature-rich mobile solutions help your business thrive in today’s competitive digital market.",
        ]}
        emphasizeTextIndex={[1]}
        emphasizePhrases={["hire mobile app developers"]}
      />
      <TechnologiesSlider />
      <PremiumServices />
      <Benefits
        benifits={benefits}
        sectionTitle="Benefits of Hiring our Mobile App Development Company"
        sectionDescription="As the top mobile app development company, we have the required expertise and skills to create out of the ox apps."
      />
      <AboutUs />
      <ImpactCards
        sectionTitle="Explore The Transformative Impact Of Mobile App On Your Business Success"
        benefitCards={benefitCards}
        autoInterval={3500}
      />
      <SectorsSlider />
      <ExpertiseSlider
        expertiseCards={expertiseCards}
        sectionTitle="Our Expertise in Mobile App Development Services"
        sectionDescription="We specialize in top mobile app development services for every industry type and size. Our expertise includes:"
      />
      <Common />
    </>
  ),

  "cross platform app development": (
    <>
      <HeroSection
        title="Best Cross Platform App Development Company"
        description="As a leading mobile app development company with Good Review and High Rating,
                             we strive to offer cutting-edge solutions tailored to our clients' needs. Let's design an app
                             that surpasses your expectations and makes you an industry leader. Contact us now!"
        buttonText="Get Started"
        buttonLink="#contact"
        imageSrc={CrossDes}
        imageAlt="Digital Solutions illustration"
      />
      <LogoCarousel />
      <Charts />
      <Quotes
        title="Creating Excellent Mobile Apps for Every Business"
        highlightedText="Smart and Reliable Apps"
        paragraphs={[
          "Discover the potential of entirely customizable mobile app development services with reliable mobile app development company. Custom mobile apps for your company and needs are our speciality. We concentrate on flexibility and scalability to guarantee your app matches your brand identity and user expectations. As a custom mobile app development company, we collaborate with you to understand your vision and create a unique mobile app that stands out in the app market, from user interface design to backend functions. With our advanced Mobile app builder, you can turn ideas into powerful digital solutions efficiently while reducing development time and cost.",
          "Innovation and cooperation drive our development approach, with frequent feedback loops to adapt your app to your requirements and market trends. You can hire mobile app developers to design consumer-facing apps, corporate solutions, and more. From concept and prototyping to development, testing, and deployment, our rigorous development process ensures your app exceeds expectations. When considering the development of a mobile app, understanding the mobile app development cost is essential. Costs vary depending on factors such as app complexity, platform (iOS vs. Android), and features. As a Mobile App Design Agency, our high-quality, scalable, and feature-rich mobile solutions help your business thrive in today’s competitive digital market.",
        ]}
        emphasizeTextIndex={[1]}
        emphasizePhrases={["hire mobile app developers"]}
      />
      <TechnologiesSlider />
      <PremiumServices />
      <Benefits
        benifits={benefits}
        sectionTitle="Benefits of Hiring our Mobile App Development Company"
        sectionDescription="As the top mobile app development company, we have the required expertise and skills to create out of the ox apps."
      />
      <AboutUs />
      <ImpactCards
        sectionTitle="Explore The Transformative Impact Of Mobile App On Your Business Success"
        benefitCards={benefitCards}
        autoInterval={3500}
      />
      <SectorsSlider />
      <ExpertiseSlider
        expertiseCards={expertiseCards}
        sectionTitle="Our Expertise in Mobile App Development Services"
        sectionDescription="We specialize in top mobile app development services for every industry type and size. Our expertise includes:"
      />
      <Common />
    </>
  ),

  "ipad app development services": (
    <>
      <HeroSection
        title="Best Ipad App Development Company"
        description="As a leading mobile app development company with Good Review and High Rating,
                             we strive to offer cutting-edge solutions tailored to our clients' needs. Let's design an app
                             that surpasses your expectations and makes you an industry leader. Contact us now!"
        buttonText="Get Started"
        buttonLink="#contact"
        imageSrc={MobileApp}
        imageAlt="Digital Solutions illustration"
      />
      <LogoCarousel />
      <Charts />
      <Quotes
        title="Creating Excellent Mobile Apps for Every Business"
        highlightedText="Smart and Reliable Apps"
        paragraphs={[
          "Discover the potential of entirely customizable mobile app development services with reliable mobile app development company. Custom mobile apps for your company and needs are our speciality. We concentrate on flexibility and scalability to guarantee your app matches your brand identity and user expectations. As a custom mobile app development company, we collaborate with you to understand your vision and create a unique mobile app that stands out in the app market, from user interface design to backend functions. With our advanced Mobile app builder, you can turn ideas into powerful digital solutions efficiently while reducing development time and cost.",
          "Innovation and cooperation drive our development approach, with frequent feedback loops to adapt your app to your requirements and market trends. You can hire mobile app developers to design consumer-facing apps, corporate solutions, and more. From concept and prototyping to development, testing, and deployment, our rigorous development process ensures your app exceeds expectations. When considering the development of a mobile app, understanding the mobile app development cost is essential. Costs vary depending on factors such as app complexity, platform (iOS vs. Android), and features. As a Mobile App Design Agency, our high-quality, scalable, and feature-rich mobile solutions help your business thrive in today’s competitive digital market.",
        ]}
        emphasizeTextIndex={[1]}
        emphasizePhrases={["hire mobile app developers"]}
      />
      <TechnologiesSlider />
      <PremiumServices />
      <Benefits
        benifits={benefits}
        sectionTitle="Benefits of Hiring our Mobile App Development Company"
        sectionDescription="As the top mobile app development company, we have the required expertise and skills to create out of the ox apps."
      />
      <AboutUs />
      <ImpactCards
        sectionTitle="Explore The Transformative Impact Of Mobile App On Your Business Success"
        benefitCards={benefitCards}
        autoInterval={3500}
      />
      <SectorsSlider />
      <ExpertiseSlider
        expertiseCards={expertiseCards}
        sectionTitle="Our Expertise in Mobile App Development Services"
        sectionDescription="We specialize in top mobile app development services for every industry type and size. Our expertise includes:"
      />
      <Common />
    </>
  ),

  "kotlin app development": (
    <>
      <HeroSection
        title="Best Kotlin App Development Company"
        description="As a leading mobile app development company with Good Review and High Rating,
                             we strive to offer cutting-edge solutions tailored to our clients' needs. Let's design an app
                             that surpasses your expectations and makes you an industry leader. Contact us now!"
        buttonText="Get Started"
        buttonLink="#contact"
        imageSrc={MobileApp}
        imageAlt="Digital Solutions illustration"
      />
      <LogoCarousel />
      <Charts />
      <Quotes
        title="Creating Excellent Mobile Apps for Every Business"
        highlightedText="Smart and Reliable Apps"
        paragraphs={[
          "Discover the potential of entirely customizable mobile app development services with reliable mobile app development company. Custom mobile apps for your company and needs are our speciality. We concentrate on flexibility and scalability to guarantee your app matches your brand identity and user expectations. As a custom mobile app development company, we collaborate with you to understand your vision and create a unique mobile app that stands out in the app market, from user interface design to backend functions. With our advanced Mobile app builder, you can turn ideas into powerful digital solutions efficiently while reducing development time and cost.",
          "Innovation and cooperation drive our development approach, with frequent feedback loops to adapt your app to your requirements and market trends. You can hire mobile app developers to design consumer-facing apps, corporate solutions, and more. From concept and prototyping to development, testing, and deployment, our rigorous development process ensures your app exceeds expectations. When considering the development of a mobile app, understanding the mobile app development cost is essential. Costs vary depending on factors such as app complexity, platform (iOS vs. Android), and features. As a Mobile App Design Agency, our high-quality, scalable, and feature-rich mobile solutions help your business thrive in today’s competitive digital market.",
        ]}
        emphasizeTextIndex={[1]}
        emphasizePhrases={["hire mobile app developers"]}
      />
      <TechnologiesSlider />
      <PremiumServices />
      <Benefits
        benifits={benefits}
        sectionTitle="Benefits of Hiring our Mobile App Development Company"
        sectionDescription="As the top mobile app development company, we have the required expertise and skills to create out of the ox apps."
      />
      <AboutUs />
      <ImpactCards
        sectionTitle="Explore The Transformative Impact Of Mobile App On Your Business Success"
        benefitCards={benefitCards}
        autoInterval={3500}
      />
      <SectorsSlider />
      <ExpertiseSlider
        expertiseCards={expertiseCards}
        sectionTitle="Our Expertise in Mobile App Development Services"
        sectionDescription="We specialize in top mobile app development services for every industry type and size. Our expertise includes:"
      />
      <Common />
    </>
  ),

  "hybrid app development": (
    <>
      <HeroSection
        title="Best Hybrid App Development Company"
        description="As a leading mobile app development company with Good Review and High Rating,
                             we strive to offer cutting-edge solutions tailored to our clients' needs. Let's design an app
                             that surpasses your expectations and makes you an industry leader. Contact us now!"
        buttonText="Get Started"
        buttonLink="#contact"
        imageSrc={MobileApp}
        imageAlt="Digital Solutions illustration"
      />
      <LogoCarousel />
      <Charts />
      <Quotes
        title="Creating Excellent Mobile Apps for Every Business"
        highlightedText="Smart and Reliable Apps"
        paragraphs={[
          "Discover the potential of entirely customizable mobile app development services with reliable mobile app development company. Custom mobile apps for your company and needs are our speciality. We concentrate on flexibility and scalability to guarantee your app matches your brand identity and user expectations. As a custom mobile app development company, we collaborate with you to understand your vision and create a unique mobile app that stands out in the app market, from user interface design to backend functions. With our advanced Mobile app builder, you can turn ideas into powerful digital solutions efficiently while reducing development time and cost.",
          "Innovation and cooperation drive our development approach, with frequent feedback loops to adapt your app to your requirements and market trends. You can hire mobile app developers to design consumer-facing apps, corporate solutions, and more. From concept and prototyping to development, testing, and deployment, our rigorous development process ensures your app exceeds expectations. When considering the development of a mobile app, understanding the mobile app development cost is essential. Costs vary depending on factors such as app complexity, platform (iOS vs. Android), and features. As a Mobile App Design Agency, our high-quality, scalable, and feature-rich mobile solutions help your business thrive in today’s competitive digital market.",
        ]}
        emphasizeTextIndex={[1]}
        emphasizePhrases={["hire mobile app developers"]}
      />
      <TechnologiesSlider />
      <PremiumServices />
      <Benefits
        benifits={benefits}
        sectionTitle="Benefits of Hiring our Mobile App Development Company"
        sectionDescription="As the top mobile app development company, we have the required expertise and skills to create out of the ox apps."
      />
      <AboutUs />
      <ImpactCards
        sectionTitle="Explore The Transformative Impact Of Mobile App On Your Business Success"
        benefitCards={benefitCards}
        autoInterval={3500}
      />
      <SectorsSlider />
      <ExpertiseSlider
        expertiseCards={expertiseCards}
        sectionTitle="Our Expertise in Mobile App Development Services"
        sectionDescription="We specialize in top mobile app development services for every industry type and size. Our expertise includes:"
      />
      <Common />
    </>
  ),

  "progressive web app development": (
    <>
      <HeroSection
        title="Best Progressive Web App Development Company"
        description="As a leading mobile app development company with Good Review and High Rating,
                             we strive to offer cutting-edge solutions tailored to our clients' needs. Let's design an app
                             that surpasses your expectations and makes you an industry leader. Contact us now!"
        buttonText="Get Started"
        buttonLink="#contact"
        imageSrc={MobileApp}
        imageAlt="Digital Solutions illustration"
      />
      <LogoCarousel />
      <Charts />
      <Quotes
        title="Creating Excellent Mobile Apps for Every Business"
        highlightedText="Smart and Reliable Apps"
        paragraphs={[
          "Discover the potential of entirely customizable mobile app development services with reliable mobile app development company. Custom mobile apps for your company and needs are our speciality. We concentrate on flexibility and scalability to guarantee your app matches your brand identity and user expectations. As a custom mobile app development company, we collaborate with you to understand your vision and create a unique mobile app that stands out in the app market, from user interface design to backend functions. With our advanced Mobile app builder, you can turn ideas into powerful digital solutions efficiently while reducing development time and cost.",
          "Innovation and cooperation drive our development approach, with frequent feedback loops to adapt your app to your requirements and market trends. You can hire mobile app developers to design consumer-facing apps, corporate solutions, and more. From concept and prototyping to development, testing, and deployment, our rigorous development process ensures your app exceeds expectations. When considering the development of a mobile app, understanding the mobile app development cost is essential. Costs vary depending on factors such as app complexity, platform (iOS vs. Android), and features. As a Mobile App Design Agency, our high-quality, scalable, and feature-rich mobile solutions help your business thrive in today’s competitive digital market.",
        ]}
        emphasizeTextIndex={[1]}
        emphasizePhrases={["hire mobile app developers"]}
      />
      <TechnologiesSlider />
      <PremiumServices />
      <Benefits
        benifits={benefits}
        sectionTitle="Benefits of Hiring our Mobile App Development Company"
        sectionDescription="As the top mobile app development company, we have the required expertise and skills to create out of the ox apps."
      />
      <AboutUs />
      <ImpactCards
        sectionTitle="Explore The Transformative Impact Of Mobile App On Your Business Success"
        benefitCards={benefitCards}
        autoInterval={3500}
      />
      <SectorsSlider />
      <ExpertiseSlider
        expertiseCards={expertiseCards}
        sectionTitle="Our Expertise in Mobile App Development Services"
        sectionDescription="We specialize in top mobile app development services for every industry type and size. Our expertise includes:"
      />
      <Common />
    </>
  ),

  "swift app development": (
    <>
      <HeroSection
        title="Best Swift App Development Company"
        description="As a leading mobile app development company with Good Review and High Rating,
                             we strive to offer cutting-edge solutions tailored to our clients' needs. Let's design an app
                             that surpasses your expectations and makes you an industry leader. Contact us now!"
        buttonText="Get Started"
        buttonLink="#contact"
        imageSrc={MobileApp}
        imageAlt="Digital Solutions illustration"
      />
      <LogoCarousel />
      <Charts />
      <Quotes
        title="Creating Excellent Mobile Apps for Every Business"
        highlightedText="Smart and Reliable Apps"
        paragraphs={[
          "Discover the potential of entirely customizable mobile app development services with reliable mobile app development company. Custom mobile apps for your company and needs are our speciality. We concentrate on flexibility and scalability to guarantee your app matches your brand identity and user expectations. As a custom mobile app development company, we collaborate with you to understand your vision and create a unique mobile app that stands out in the app market, from user interface design to backend functions. With our advanced Mobile app builder, you can turn ideas into powerful digital solutions efficiently while reducing development time and cost.",
          "Innovation and cooperation drive our development approach, with frequent feedback loops to adapt your app to your requirements and market trends. You can hire mobile app developers to design consumer-facing apps, corporate solutions, and more. From concept and prototyping to development, testing, and deployment, our rigorous development process ensures your app exceeds expectations. When considering the development of a mobile app, understanding the mobile app development cost is essential. Costs vary depending on factors such as app complexity, platform (iOS vs. Android), and features. As a Mobile App Design Agency, our high-quality, scalable, and feature-rich mobile solutions help your business thrive in today’s competitive digital market.",
        ]}
        emphasizeTextIndex={[1]}
        emphasizePhrases={["hire mobile app developers"]}
      />
      <TechnologiesSlider />
      <PremiumServices />
      <Benefits
        benifits={benefits}
        sectionTitle="Benefits of Hiring our Mobile App Development Company"
        sectionDescription="As the top mobile app development company, we have the required expertise and skills to create out of the ox apps."
      />
      <AboutUs />
      <ImpactCards
        sectionTitle="Explore The Transformative Impact Of Mobile App On Your Business Success"
        benefitCards={benefitCards}
        autoInterval={3500}
      />
      <SectorsSlider />
      <ExpertiseSlider
        expertiseCards={expertiseCards}
        sectionTitle="Our Expertise in Mobile App Development Services"
        sectionDescription="We specialize in top mobile app development services for every industry type and size. Our expertise includes:"
      />
      <Common />
    </>
  ),

  "ibeacon app development": (
    <>
      <HeroSection
        title="Best Ibeacon App Development Company"
        description="As a leading mobile app development company with Good Review and High Rating,
                             we strive to offer cutting-edge solutions tailored to our clients' needs. Let's design an app
                             that surpasses your expectations and makes you an industry leader. Contact us now!"
        buttonText="Get Started"
        buttonLink="#contact"
        imageSrc={MobileApp}
        imageAlt="Digital Solutions illustration"
      />
      <LogoCarousel />
      <Charts />
      <Quotes
        title="Creating Excellent Mobile Apps for Every Business"
        highlightedText="Smart and Reliable Apps"
        paragraphs={[
          "Discover the potential of entirely customizable mobile app development services with reliable mobile app development company. Custom mobile apps for your company and needs are our speciality. We concentrate on flexibility and scalability to guarantee your app matches your brand identity and user expectations. As a custom mobile app development company, we collaborate with you to understand your vision and create a unique mobile app that stands out in the app market, from user interface design to backend functions. With our advanced Mobile app builder, you can turn ideas into powerful digital solutions efficiently while reducing development time and cost.",
          "Innovation and cooperation drive our development approach, with frequent feedback loops to adapt your app to your requirements and market trends. You can hire mobile app developers to design consumer-facing apps, corporate solutions, and more. From concept and prototyping to development, testing, and deployment, our rigorous development process ensures your app exceeds expectations. When considering the development of a mobile app, understanding the mobile app development cost is essential. Costs vary depending on factors such as app complexity, platform (iOS vs. Android), and features. As a Mobile App Design Agency, our high-quality, scalable, and feature-rich mobile solutions help your business thrive in today’s competitive digital market.",
        ]}
        emphasizeTextIndex={[1]}
        emphasizePhrases={["hire mobile app developers"]}
      />
      <TechnologiesSlider />
      <PremiumServices />
      <Benefits
        benifits={benefits}
        sectionTitle="Benefits of Hiring our Mobile App Development Company"
        sectionDescription="As the top mobile app development company, we have the required expertise and skills to create out of the ox apps."
      />
      <AboutUs />
      <ImpactCards
        sectionTitle="Explore The Transformative Impact Of Mobile App On Your Business Success"
        benefitCards={benefitCards}
        autoInterval={3500}
      />
      <SectorsSlider />
      <ExpertiseSlider
        expertiseCards={expertiseCards}
        sectionTitle="Our Expertise in Mobile App Development Services"
        sectionDescription="We specialize in top mobile app development services for every industry type and size. Our expertise includes:"
      />
      <Common />
    </>
  ),

  "wearable app development": (
    <>
      <HeroSection
        title="Best Wearable App Development Company"
        description="As a leading mobile app development company with Good Review and High Rating,
                             we strive to offer cutting-edge solutions tailored to our clients' needs. Let's design an app
                             that surpasses your expectations and makes you an industry leader. Contact us now!"
        buttonText="Get Started"
        buttonLink="#contact"
        imageSrc={MobileApp}
        imageAlt="Digital Solutions illustration"
      />
      <LogoCarousel />
      <Charts />
      <Quotes
        title="Creating Excellent Mobile Apps for Every Business"
        highlightedText="Smart and Reliable Apps"
        paragraphs={[
          "Discover the potential of entirely customizable mobile app development services with reliable mobile app development company. Custom mobile apps for your company and needs are our speciality. We concentrate on flexibility and scalability to guarantee your app matches your brand identity and user expectations. As a custom mobile app development company, we collaborate with you to understand your vision and create a unique mobile app that stands out in the app market, from user interface design to backend functions. With our advanced Mobile app builder, you can turn ideas into powerful digital solutions efficiently while reducing development time and cost.",
          "Innovation and cooperation drive our development approach, with frequent feedback loops to adapt your app to your requirements and market trends. You can hire mobile app developers to design consumer-facing apps, corporate solutions, and more. From concept and prototyping to development, testing, and deployment, our rigorous development process ensures your app exceeds expectations. When considering the development of a mobile app, understanding the mobile app development cost is essential. Costs vary depending on factors such as app complexity, platform (iOS vs. Android), and features. As a Mobile App Design Agency, our high-quality, scalable, and feature-rich mobile solutions help your business thrive in today’s competitive digital market.",
        ]}
        emphasizeTextIndex={[1]}
        emphasizePhrases={["hire mobile app developers"]}
      />
      <TechnologiesSlider />
      <PremiumServices />
      <Benefits
        benifits={benefits}
        sectionTitle="Benefits of Hiring our Mobile App Development Company"
        sectionDescription="As the top mobile app development company, we have the required expertise and skills to create out of the ox apps."
      />
      <AboutUs />
      <ImpactCards
        sectionTitle="Explore The Transformative Impact Of Mobile App On Your Business Success"
        benefitCards={benefitCards}
        autoInterval={3500}
      />
      <SectorsSlider />
      <ExpertiseSlider
        expertiseCards={expertiseCards}
        sectionTitle="Our Expertise in Mobile App Development Services"
        sectionDescription="We specialize in top mobile app development services for every industry type and size. Our expertise includes:"
      />
      <Common />
    </>
  ),

  "native app development": (
    <>
      <HeroSection
        title="Best Native App Development Company"
        description="As a leading mobile app development company with Good Review and High Rating,
                             we strive to offer cutting-edge solutions tailored to our clients' needs. Let's design an app
                             that surpasses your expectations and makes you an industry leader. Contact us now!"
        buttonText="Get Started"
        buttonLink="#contact"
        imageSrc={MobileApp}
        imageAlt="Digital Solutions illustration"
      />
      <LogoCarousel />
      <Charts />
      <Quotes
        title="Creating Excellent Mobile Apps for Every Business"
        highlightedText="Smart and Reliable Apps"
        paragraphs={[
          "Discover the potential of entirely customizable mobile app development services with reliable mobile app development company. Custom mobile apps for your company and needs are our speciality. We concentrate on flexibility and scalability to guarantee your app matches your brand identity and user expectations. As a custom mobile app development company, we collaborate with you to understand your vision and create a unique mobile app that stands out in the app market, from user interface design to backend functions. With our advanced Mobile app builder, you can turn ideas into powerful digital solutions efficiently while reducing development time and cost.",
          "Innovation and cooperation drive our development approach, with frequent feedback loops to adapt your app to your requirements and market trends. You can hire mobile app developers to design consumer-facing apps, corporate solutions, and more. From concept and prototyping to development, testing, and deployment, our rigorous development process ensures your app exceeds expectations. When considering the development of a mobile app, understanding the mobile app development cost is essential. Costs vary depending on factors such as app complexity, platform (iOS vs. Android), and features. As a Mobile App Design Agency, our high-quality, scalable, and feature-rich mobile solutions help your business thrive in today’s competitive digital market.",
        ]}
        emphasizeTextIndex={[1]}
        emphasizePhrases={["hire mobile app developers"]}
      />
      <TechnologiesSlider />
      <PremiumServices />
      <Benefits
        benifits={benefits}
        sectionTitle="Benefits of Hiring our Mobile App Development Company"
        sectionDescription="As the top mobile app development company, we have the required expertise and skills to create out of the ox apps."
      />
      <AboutUs />
      <ImpactCards
        sectionTitle="Explore The Transformative Impact Of Mobile App On Your Business Success"
        benefitCards={benefitCards}
        autoInterval={3500}
      />
      <SectorsSlider />
      <ExpertiseSlider
        expertiseCards={expertiseCards}
        sectionTitle="Our Expertise in Mobile App Development Services"
        sectionDescription="We specialize in top mobile app development services for every industry type and size. Our expertise includes:"
      />
      <Common />
    </>
  ),

  "windows app development": (
    <>
      <HeroSection
        title="Windows App Development Services In India"
        description="As a leading mobile app development company with Good Review and High Rating,
                             we strive to offer cutting-edge solutions tailored to our clients' needs. Let's design an app
                             that surpasses your expectations and makes you an industry leader. Contact us now!"
        buttonText="Get Started"
        buttonLink="#contact"
        imageSrc={Windows}
        imageAlt="Digital Solutions illustration"
      />
      <LogoCarousel />
      <Charts img={WindowSection} img2={WindowAbout} />
      <Quotes
        title="Creating Excellent Mobile Apps for Every Business"
        highlightedText="Smart and Reliable Apps"
        paragraphs={[
          "Discover the potential of entirely customizable mobile app development services with reliable mobile app development company. Custom mobile apps for your company and needs are our speciality. We concentrate on flexibility and scalability to guarantee your app matches your brand identity and user expectations. As a custom mobile app development company, we collaborate with you to understand your vision and create a unique mobile app that stands out in the app market, from user interface design to backend functions. With our advanced Mobile app builder, you can turn ideas into powerful digital solutions efficiently while reducing development time and cost.",
          "Innovation and cooperation drive our development approach, with frequent feedback loops to adapt your app to your requirements and market trends. You can hire mobile app developers to design consumer-facing apps, corporate solutions, and more. From concept and prototyping to development, testing, and deployment, our rigorous development process ensures your app exceeds expectations. When considering the development of a mobile app, understanding the mobile app development cost is essential. Costs vary depending on factors such as app complexity, platform (iOS vs. Android), and features. As a Mobile App Design Agency, our high-quality, scalable, and feature-rich mobile solutions help your business thrive in today’s competitive digital market.",
        ]}
        emphasizeTextIndex={[1]}
        emphasizePhrases={["hire mobile app developers"]}
      />
      <TechnologiesSlider />
      <PremiumServices />
      <Benefits
        benifits={benefits}
        sectionTitle="Benefits of Hiring our Mobile App Development Company"
        sectionDescription="As the top mobile app development company, we have the required expertise and skills to create out of the ox apps."
      />
      <AboutUs />
      <ImpactCards
        sectionTitle="Explore The Transformative Impact Of Mobile App On Your Business Success"
        benefitCards={benefitCards}
        autoInterval={3500}
      />
      <SectorsSlider />
      <ExpertiseSlider
        expertiseCards={expertiseCards}
        sectionTitle="Our Expertise in Mobile App Development Services"
        sectionDescription="We specialize in top mobile app development services for every industry type and size. Our expertise includes:"
      />
      <Common />
    </>
  ),

  "custom mobile app development": (
    <>
      <HeroSection
        title="Custom Mobile App Development Company In India"
        description="As a leading mobile app development company with Good Review and High Rating,
                             we strive to offer cutting-edge solutions tailored to our clients' needs. Let's design an app
                             that surpasses your expectations and makes you an industry leader. Contact us now!"
        buttonText="Get Started"
        buttonLink="#contact"
        imageSrc={CostomApp}
        imageAlt="Digital Solutions illustration"
      />
      <LogoCarousel />
      <Charts img={CustomDes} img2={CustomAbout} />
      <Quotes
        title="Creating Excellent Mobile Apps for Every Business"
        highlightedText="Smart and Reliable Apps"
        paragraphs={[
          "Discover the potential of entirely customizable mobile app development services with reliable mobile app development company. Custom mobile apps for your company and needs are our speciality. We concentrate on flexibility and scalability to guarantee your app matches your brand identity and user expectations. As a custom mobile app development company, we collaborate with you to understand your vision and create a unique mobile app that stands out in the app market, from user interface design to backend functions. With our advanced Mobile app builder, you can turn ideas into powerful digital solutions efficiently while reducing development time and cost.",
          "Innovation and cooperation drive our development approach, with frequent feedback loops to adapt your app to your requirements and market trends. You can hire mobile app developers to design consumer-facing apps, corporate solutions, and more. From concept and prototyping to development, testing, and deployment, our rigorous development process ensures your app exceeds expectations. When considering the development of a mobile app, understanding the mobile app development cost is essential. Costs vary depending on factors such as app complexity, platform (iOS vs. Android), and features. As a Mobile App Design Agency, our high-quality, scalable, and feature-rich mobile solutions help your business thrive in today’s competitive digital market.",
        ]}
        emphasizeTextIndex={[1]}
        emphasizePhrases={["hire mobile app developers"]}
      />
      <TechnologiesSlider />
      <PremiumServices />
      <Benefits
        benifits={benefits}
        sectionTitle="Benefits of Hiring our Mobile App Development Company"
        sectionDescription="As the top mobile app development company, we have the required expertise and skills to create out of the ox apps."
      />
      <AboutUs />
      <ImpactCards
        sectionTitle="Explore The Transformative Impact Of Mobile App On Your Business Success"
        benefitCards={benefitCards}
        autoInterval={3500}
      />
      <SectorsSlider />
      <ExpertiseSlider
        expertiseCards={expertiseCards}
        sectionTitle="Our Expertise in Mobile App Development Services"
        sectionDescription="We specialize in top mobile app development services for every industry type and size. Our expertise includes:"
      />
      <Common />
    </>
  ),

  "b2b mobile app development": (
    <>
      <HeroSection
        title="Best b2b mobile app development Company"
        description="As a leading mobile app development company with Good Review and High Rating,
                             we strive to offer cutting-edge solutions tailored to our clients' needs. Let's design an app
                             that surpasses your expectations and makes you an industry leader. Contact us now!"
        buttonText="Get Started"
        buttonLink="#contact"
        imageSrc={MobileApp}
        imageAlt="Digital Solutions illustration"
      />
      <LogoCarousel />
      <Charts />
      <Quotes
        title="Creating Excellent Mobile Apps for Every Business"
        highlightedText="Smart and Reliable Apps"
        paragraphs={[
          "Discover the potential of entirely customizable mobile app development services with reliable mobile app development company. Custom mobile apps for your company and needs are our speciality. We concentrate on flexibility and scalability to guarantee your app matches your brand identity and user expectations. As a custom mobile app development company, we collaborate with you to understand your vision and create a unique mobile app that stands out in the app market, from user interface design to backend functions. With our advanced Mobile app builder, you can turn ideas into powerful digital solutions efficiently while reducing development time and cost.",
          "Innovation and cooperation drive our development approach, with frequent feedback loops to adapt your app to your requirements and market trends. You can hire mobile app developers to design consumer-facing apps, corporate solutions, and more. From concept and prototyping to development, testing, and deployment, our rigorous development process ensures your app exceeds expectations. When considering the development of a mobile app, understanding the mobile app development cost is essential. Costs vary depending on factors such as app complexity, platform (iOS vs. Android), and features. As a Mobile App Design Agency, our high-quality, scalable, and feature-rich mobile solutions help your business thrive in today’s competitive digital market.",
        ]}
        emphasizeTextIndex={[1]}
        emphasizePhrases={["hire mobile app developers"]}
      />
      <TechnologiesSlider />
      <PremiumServices />
      <Benefits
        benifits={benefits}
        sectionTitle="Benefits of Hiring our Mobile App Development Company"
        sectionDescription="As the top mobile app development company, we have the required expertise and skills to create out of the ox apps."
      />
      <AboutUs />
      <ImpactCards
        sectionTitle="Explore The Transformative Impact Of Mobile App On Your Business Success"
        benefitCards={benefitCards}
        autoInterval={3500}
      />
      <SectorsSlider />
      <ExpertiseSlider
        expertiseCards={expertiseCards}
        sectionTitle="Our Expertise in Mobile App Development Services"
        sectionDescription="We specialize in top mobile app development services for every industry type and size. Our expertise includes:"
      />
      <Common />
    </>
  ),

  "django development": (
    <>
      <HeroSection
        title="Django Development"
        description="As a leading mobile app development company with Good Review and High Rating,
                             we strive to offer cutting-edge solutions tailored to our clients' needs. Let's design an app
                             that surpasses your expectations and makes you an industry leader. Contact us now!"
        buttonText="Get Started"
        buttonLink="#contact"
        imageSrc={MobileApp}
        imageAlt="Digital Solutions illustration"
      />
      <LogoCarousel />
      <Charts />
      <Quotes
        title="Creating Excellent Mobile Apps for Every Business"
        highlightedText="Smart and Reliable Apps"
        paragraphs={[
          "Discover the potential of entirely customizable mobile app development services with reliable mobile app development company. Custom mobile apps for your company and needs are our speciality. We concentrate on flexibility and scalability to guarantee your app matches your brand identity and user expectations. As a custom mobile app development company, we collaborate with you to understand your vision and create a unique mobile app that stands out in the app market, from user interface design to backend functions. With our advanced Mobile app builder, you can turn ideas into powerful digital solutions efficiently while reducing development time and cost.",
          "Innovation and cooperation drive our development approach, with frequent feedback loops to adapt your app to your requirements and market trends. You can hire mobile app developers to design consumer-facing apps, corporate solutions, and more. From concept and prototyping to development, testing, and deployment, our rigorous development process ensures your app exceeds expectations. When considering the development of a mobile app, understanding the mobile app development cost is essential. Costs vary depending on factors such as app complexity, platform (iOS vs. Android), and features. As a Mobile App Design Agency, our high-quality, scalable, and feature-rich mobile solutions help your business thrive in today’s competitive digital market.",
        ]}
        emphasizeTextIndex={[1]}
        emphasizePhrases={["hire mobile app developers"]}
      />
      <TechnologiesSlider />
      <PremiumServices />
      <Benefits
        benifits={benefits}
        sectionTitle="Benefits of Hiring our Mobile App Development Company"
        sectionDescription="As the top mobile app development company, we have the required expertise and skills to create out of the ox apps."
      />
      <AboutUs />
      <ImpactCards
        sectionTitle="Explore The Transformative Impact Of Mobile App On Your Business Success"
        benefitCards={benefitCards}
        autoInterval={3500}
      />
      <SectorsSlider />
      <ExpertiseSlider
        expertiseCards={expertiseCards}
        sectionTitle="Our Expertise in Mobile App Development Services"
        sectionDescription="We specialize in top mobile app development services for every industry type and size. Our expertise includes:"
      />
      <Common />
    </>
  ),

  "nodejs development": (
    <>
      <HeroSection
        title="NodeJs Development"
        description="As a leading mobile app development company with Good Review and High Rating,
                             we strive to offer cutting-edge solutions tailored to our clients' needs. Let's design an app
                             that surpasses your expectations and makes you an industry leader. Contact us now!"
        buttonText="Get Started"
        buttonLink="#contact"
        imageSrc={MobileApp}
        imageAlt="Digital Solutions illustration"
      />
      <LogoCarousel />
      <Charts />
      <Quotes
        title="Creating Excellent Mobile Apps for Every Business"
        highlightedText="Smart and Reliable Apps"
        paragraphs={[
          "Discover the potential of entirely customizable mobile app development services with reliable mobile app development company. Custom mobile apps for your company and needs are our speciality. We concentrate on flexibility and scalability to guarantee your app matches your brand identity and user expectations. As a custom mobile app development company, we collaborate with you to understand your vision and create a unique mobile app that stands out in the app market, from user interface design to backend functions. With our advanced Mobile app builder, you can turn ideas into powerful digital solutions efficiently while reducing development time and cost.",
          "Innovation and cooperation drive our development approach, with frequent feedback loops to adapt your app to your requirements and market trends. You can hire mobile app developers to design consumer-facing apps, corporate solutions, and more. From concept and prototyping to development, testing, and deployment, our rigorous development process ensures your app exceeds expectations. When considering the development of a mobile app, understanding the mobile app development cost is essential. Costs vary depending on factors such as app complexity, platform (iOS vs. Android), and features. As a Mobile App Design Agency, our high-quality, scalable, and feature-rich mobile solutions help your business thrive in today’s competitive digital market.",
        ]}
        emphasizeTextIndex={[1]}
        emphasizePhrases={["hire mobile app developers"]}
      />
      <TechnologiesSlider />
      <PremiumServices />
      <Benefits
        benifits={benefits}
        sectionTitle="Benefits of Hiring our Mobile App Development Company"
        sectionDescription="As the top mobile app development company, we have the required expertise and skills to create out of the ox apps."
      />
      <AboutUs />
      <ImpactCards
        sectionTitle="Explore The Transformative Impact Of Mobile App On Your Business Success"
        benefitCards={benefitCards}
        autoInterval={3500}
      />
      <SectorsSlider />
      <ExpertiseSlider
        expertiseCards={expertiseCards}
        sectionTitle="Our Expertise in Mobile App Development Services"
        sectionDescription="We specialize in top mobile app development services for every industry type and size. Our expertise includes:"
      />
      <Common />
    </>
  ),

  "laravel development": (
    <>
      <HeroSection
        title="Laravel Development"
        description="As a leading mobile app development company with Good Review and High Rating,
                             we strive to offer cutting-edge solutions tailored to our clients' needs. Let's design an app
                             that surpasses your expectations and makes you an industry leader. Contact us now!"
        buttonText="Get Started"
        buttonLink="#contact"
        imageSrc={MobileApp}
        imageAlt="Digital Solutions illustration"
      />
      <LogoCarousel />
      <Charts />
      <Quotes
        title="Creating Excellent Mobile Apps for Every Business"
        highlightedText="Smart and Reliable Apps"
        paragraphs={[
          "Discover the potential of entirely customizable mobile app development services with reliable mobile app development company. Custom mobile apps for your company and needs are our speciality. We concentrate on flexibility and scalability to guarantee your app matches your brand identity and user expectations. As a custom mobile app development company, we collaborate with you to understand your vision and create a unique mobile app that stands out in the app market, from user interface design to backend functions. With our advanced Mobile app builder, you can turn ideas into powerful digital solutions efficiently while reducing development time and cost.",
          "Innovation and cooperation drive our development approach, with frequent feedback loops to adapt your app to your requirements and market trends. You can hire mobile app developers to design consumer-facing apps, corporate solutions, and more. From concept and prototyping to development, testing, and deployment, our rigorous development process ensures your app exceeds expectations. When considering the development of a mobile app, understanding the mobile app development cost is essential. Costs vary depending on factors such as app complexity, platform (iOS vs. Android), and features. As a Mobile App Design Agency, our high-quality, scalable, and feature-rich mobile solutions help your business thrive in today’s competitive digital market.",
        ]}
        emphasizeTextIndex={[1]}
        emphasizePhrases={["hire mobile app developers"]}
      />
      <TechnologiesSlider />
      <PremiumServices />
      <Benefits
        benifits={benefits}
        sectionTitle="Benefits of Hiring our Mobile App Development Company"
        sectionDescription="As the top mobile app development company, we have the required expertise and skills to create out of the ox apps."
      />
      <AboutUs />
      <ImpactCards
        sectionTitle="Explore The Transformative Impact Of Mobile App On Your Business Success"
        benefitCards={benefitCards}
        autoInterval={3500}
      />
      <SectorsSlider />
      <ExpertiseSlider
        expertiseCards={expertiseCards}
        sectionTitle="Our Expertise in Mobile App Development Services"
        sectionDescription="We specialize in top mobile app development services for every industry type and size. Our expertise includes:"
      />
      <Common />
    </>
  ),

  "python development": (
    <>
      <HeroSection
        title="Python Development"
        description="As a leading mobile app development company with Good Review and High Rating,
                             we strive to offer cutting-edge solutions tailored to our clients' needs. Let's design an app
                             that surpasses your expectations and makes you an industry leader. Contact us now!"
        buttonText="Get Started"
        buttonLink="#contact"
        imageSrc={MobileApp}
        imageAlt="Digital Solutions illustration"
      />
      <LogoCarousel />
      <Charts />
      <Quotes
        title="Creating Excellent Mobile Apps for Every Business"
        highlightedText="Smart and Reliable Apps"
        paragraphs={[
          "Discover the potential of entirely customizable mobile app development services with reliable mobile app development company. Custom mobile apps for your company and needs are our speciality. We concentrate on flexibility and scalability to guarantee your app matches your brand identity and user expectations. As a custom mobile app development company, we collaborate with you to understand your vision and create a unique mobile app that stands out in the app market, from user interface design to backend functions. With our advanced Mobile app builder, you can turn ideas into powerful digital solutions efficiently while reducing development time and cost.",
          "Innovation and cooperation drive our development approach, with frequent feedback loops to adapt your app to your requirements and market trends. You can hire mobile app developers to design consumer-facing apps, corporate solutions, and more. From concept and prototyping to development, testing, and deployment, our rigorous development process ensures your app exceeds expectations. When considering the development of a mobile app, understanding the mobile app development cost is essential. Costs vary depending on factors such as app complexity, platform (iOS vs. Android), and features. As a Mobile App Design Agency, our high-quality, scalable, and feature-rich mobile solutions help your business thrive in today’s competitive digital market.",
        ]}
        emphasizeTextIndex={[1]}
        emphasizePhrases={["hire mobile app developers"]}
      />
      <TechnologiesSlider />
      <PremiumServices />
      <Benefits
        benifits={benefits}
        sectionTitle="Benefits of Hiring our Mobile App Development Company"
        sectionDescription="As the top mobile app development company, we have the required expertise and skills to create out of the ox apps."
      />
      <AboutUs />
      <ImpactCards
        sectionTitle="Explore The Transformative Impact Of Mobile App On Your Business Success"
        benefitCards={benefitCards}
        autoInterval={3500}
      />
      <SectorsSlider />
      <ExpertiseSlider
        expertiseCards={expertiseCards}
        sectionTitle="Our Expertise in Mobile App Development Services"
        sectionDescription="We specialize in top mobile app development services for every industry type and size. Our expertise includes:"
      />
      <Common />
    </>
  ),

  "big commerce development": (
    <>
      <HeroSection
        title="Big Commerce Development"
        description="As a leading mobile app development company with Good Review and High Rating,
                             we strive to offer cutting-edge solutions tailored to our clients' needs. Let's design an app
                             that surpasses your expectations and makes you an industry leader. Contact us now!"
        buttonText="Get Started"
        buttonLink="#contact"
        imageSrc={MobileApp}
        imageAlt="Digital Solutions illustration"
      />
      <LogoCarousel />
      <Charts />
      <Quotes
        title="Creating Excellent Mobile Apps for Every Business"
        highlightedText="Smart and Reliable Apps"
        paragraphs={[
          "Discover the potential of entirely customizable mobile app development services with reliable mobile app development company. Custom mobile apps for your company and needs are our speciality. We concentrate on flexibility and scalability to guarantee your app matches your brand identity and user expectations. As a custom mobile app development company, we collaborate with you to understand your vision and create a unique mobile app that stands out in the app market, from user interface design to backend functions. With our advanced Mobile app builder, you can turn ideas into powerful digital solutions efficiently while reducing development time and cost.",
          "Innovation and cooperation drive our development approach, with frequent feedback loops to adapt your app to your requirements and market trends. You can hire mobile app developers to design consumer-facing apps, corporate solutions, and more. From concept and prototyping to development, testing, and deployment, our rigorous development process ensures your app exceeds expectations. When considering the development of a mobile app, understanding the mobile app development cost is essential. Costs vary depending on factors such as app complexity, platform (iOS vs. Android), and features. As a Mobile App Design Agency, our high-quality, scalable, and feature-rich mobile solutions help your business thrive in today’s competitive digital market.",
        ]}
        emphasizeTextIndex={[1]}
        emphasizePhrases={["hire mobile app developers"]}
      />
      <TechnologiesSlider />
      <PremiumServices />
      <Benefits
        benifits={benefits}
        sectionTitle="Benefits of Hiring our Mobile App Development Company"
        sectionDescription="As the top mobile app development company, we have the required expertise and skills to create out of the ox apps."
      />
      <AboutUs />
      <ImpactCards
        sectionTitle="Explore The Transformative Impact Of Mobile App On Your Business Success"
        benefitCards={benefitCards}
        autoInterval={3500}
      />
      <SectorsSlider />
      <ExpertiseSlider
        expertiseCards={expertiseCards}
        sectionTitle="Our Expertise in Mobile App Development Services"
        sectionDescription="We specialize in top mobile app development services for every industry type and size. Our expertise includes:"
      />
      <Common />
    </>
  ),

  "ai/ml development": (
    <>
      <HeroSection
        title="Ai & ML Development"
        description="As a leading mobile app development company with Good Review and High Rating,
                             we strive to offer cutting-edge solutions tailored to our clients' needs. Let's design an app
                             that surpasses your expectations and makes you an industry leader. Contact us now!"
        buttonText="Get Started"
        buttonLink="#contact"
        imageSrc={MobileApp}
        imageAlt="Digital Solutions illustration"
      />
      <LogoCarousel />
      <Charts />
      <Quotes
        title="Creating Excellent Mobile Apps for Every Business"
        highlightedText="Smart and Reliable Apps"
        paragraphs={[
          "Discover the potential of entirely customizable mobile app development services with reliable mobile app development company. Custom mobile apps for your company and needs are our speciality. We concentrate on flexibility and scalability to guarantee your app matches your brand identity and user expectations. As a custom mobile app development company, we collaborate with you to understand your vision and create a unique mobile app that stands out in the app market, from user interface design to backend functions. With our advanced Mobile app builder, you can turn ideas into powerful digital solutions efficiently while reducing development time and cost.",
          "Innovation and cooperation drive our development approach, with frequent feedback loops to adapt your app to your requirements and market trends. You can hire mobile app developers to design consumer-facing apps, corporate solutions, and more. From concept and prototyping to development, testing, and deployment, our rigorous development process ensures your app exceeds expectations. When considering the development of a mobile app, understanding the mobile app development cost is essential. Costs vary depending on factors such as app complexity, platform (iOS vs. Android), and features. As a Mobile App Design Agency, our high-quality, scalable, and feature-rich mobile solutions help your business thrive in today’s competitive digital market.",
        ]}
        emphasizeTextIndex={[1]}
        emphasizePhrases={["hire mobile app developers"]}
      />
      <TechnologiesSlider />
      <PremiumServices />
      <Benefits
        benifits={benefits}
        sectionTitle="Benefits of Hiring our Mobile App Development Company"
        sectionDescription="As the top mobile app development company, we have the required expertise and skills to create out of the ox apps."
      />
      <AboutUs />
      <ImpactCards
        sectionTitle="Explore The Transformative Impact Of Mobile App On Your Business Success"
        benefitCards={benefitCards}
        autoInterval={3500}
      />
      <SectorsSlider />
      <ExpertiseSlider
        expertiseCards={expertiseCards}
        sectionTitle="Our Expertise in Mobile App Development Services"
        sectionDescription="We specialize in top mobile app development services for every industry type and size. Our expertise includes:"
      />
      <Common />
    </>
  ),

  "chatboat development": (
    <>
      <HeroSection
        title="Chatboat Development"
        description="As a leading mobile app development company with Good Review and High Rating,
                             we strive to offer cutting-edge solutions tailored to our clients' needs. Let's design an app
                             that surpasses your expectations and makes you an industry leader. Contact us now!"
        buttonText="Get Started"
        buttonLink="#contact"
        imageSrc={MobileApp}
        imageAlt="Digital Solutions illustration"
      />
      <LogoCarousel />
      <Charts />
      <Quotes
        title="Creating Excellent Mobile Apps for Every Business"
        highlightedText="Smart and Reliable Apps"
        paragraphs={[
          "Discover the potential of entirely customizable mobile app development services with reliable mobile app development company. Custom mobile apps for your company and needs are our speciality. We concentrate on flexibility and scalability to guarantee your app matches your brand identity and user expectations. As a custom mobile app development company, we collaborate with you to understand your vision and create a unique mobile app that stands out in the app market, from user interface design to backend functions. With our advanced Mobile app builder, you can turn ideas into powerful digital solutions efficiently while reducing development time and cost.",
          "Innovation and cooperation drive our development approach, with frequent feedback loops to adapt your app to your requirements and market trends. You can hire mobile app developers to design consumer-facing apps, corporate solutions, and more. From concept and prototyping to development, testing, and deployment, our rigorous development process ensures your app exceeds expectations. When considering the development of a mobile app, understanding the mobile app development cost is essential. Costs vary depending on factors such as app complexity, platform (iOS vs. Android), and features. As a Mobile App Design Agency, our high-quality, scalable, and feature-rich mobile solutions help your business thrive in today’s competitive digital market.",
        ]}
        emphasizeTextIndex={[1]}
        emphasizePhrases={["hire mobile app developers"]}
      />
      <TechnologiesSlider />
      <PremiumServices />
      <Benefits
        benifits={benefits}
        sectionTitle="Benefits of Hiring our Mobile App Development Company"
        sectionDescription="As the top mobile app development company, we have the required expertise and skills to create out of the ox apps."
      />
      <AboutUs />
      <ImpactCards
        sectionTitle="Explore The Transformative Impact Of Mobile App On Your Business Success"
        benefitCards={benefitCards}
        autoInterval={3500}
      />
      <SectorsSlider />
      <ExpertiseSlider
        expertiseCards={expertiseCards}
        sectionTitle="Our Expertise in Mobile App Development Services"
        sectionDescription="We specialize in top mobile app development services for every industry type and size. Our expertise includes:"
      />
      <Common />
    </>
  ),

  "data analysis": (
    <>
      <HeroSection
        title="Data Analytics"
        description="As a leading mobile app development company with Good Review and High Rating,
                             we strive to offer cutting-edge solutions tailored to our clients' needs. Let's design an app
                             that surpasses your expectations and makes you an industry leader. Contact us now!"
        buttonText="Get Started"
        buttonLink="#contact"
        imageSrc={MobileApp}
        imageAlt="Digital Solutions illustration"
      />
      <LogoCarousel />
      <Charts />
      <Quotes
        title="Creating Excellent Mobile Apps for Every Business"
        highlightedText="Smart and Reliable Apps"
        paragraphs={[
          "Discover the potential of entirely customizable mobile app development services with reliable mobile app development company. Custom mobile apps for your company and needs are our speciality. We concentrate on flexibility and scalability to guarantee your app matches your brand identity and user expectations. As a custom mobile app development company, we collaborate with you to understand your vision and create a unique mobile app that stands out in the app market, from user interface design to backend functions. With our advanced Mobile app builder, you can turn ideas into powerful digital solutions efficiently while reducing development time and cost.",
          "Innovation and cooperation drive our development approach, with frequent feedback loops to adapt your app to your requirements and market trends. You can hire mobile app developers to design consumer-facing apps, corporate solutions, and more. From concept and prototyping to development, testing, and deployment, our rigorous development process ensures your app exceeds expectations. When considering the development of a mobile app, understanding the mobile app development cost is essential. Costs vary depending on factors such as app complexity, platform (iOS vs. Android), and features. As a Mobile App Design Agency, our high-quality, scalable, and feature-rich mobile solutions help your business thrive in today’s competitive digital market.",
        ]}
        emphasizeTextIndex={[1]}
        emphasizePhrases={["hire mobile app developers"]}
      />
      <TechnologiesSlider />
      <PremiumServices />
      <Benefits
        benifits={benefits}
        sectionTitle="Benefits of Hiring our Mobile App Development Company"
        sectionDescription="As the top mobile app development company, we have the required expertise and skills to create out of the ox apps."
      />
      <AboutUs />
      <ImpactCards
        sectionTitle="Explore The Transformative Impact Of Mobile App On Your Business Success"
        benefitCards={benefitCards}
        autoInterval={3500}
      />
      <SectorsSlider />
      <ExpertiseSlider
        expertiseCards={expertiseCards}
        sectionTitle="Our Expertise in Mobile App Development Services"
        sectionDescription="We specialize in top mobile app development services for every industry type and size. Our expertise includes:"
      />
      <Common />
    </>
  ),

  "data migration": (
    <>
      <HeroSection
        title="Data Migration"
        description="As a leading mobile app development company with Good Review and High Rating,
                             we strive to offer cutting-edge solutions tailored to our clients' needs. Let's design an app
                             that surpasses your expectations and makes you an industry leader. Contact us now!"
        buttonText="Get Started"
        buttonLink="#contact"
        imageSrc={MobileApp}
        imageAlt="Digital Solutions illustration"
      />
      <LogoCarousel />
      <Charts />
      <Quotes
        title="Creating Excellent Mobile Apps for Every Business"
        highlightedText="Smart and Reliable Apps"
        paragraphs={[
          "Discover the potential of entirely customizable mobile app development services with reliable mobile app development company. Custom mobile apps for your company and needs are our speciality. We concentrate on flexibility and scalability to guarantee your app matches your brand identity and user expectations. As a custom mobile app development company, we collaborate with you to understand your vision and create a unique mobile app that stands out in the app market, from user interface design to backend functions. With our advanced Mobile app builder, you can turn ideas into powerful digital solutions efficiently while reducing development time and cost.",
          "Innovation and cooperation drive our development approach, with frequent feedback loops to adapt your app to your requirements and market trends. You can hire mobile app developers to design consumer-facing apps, corporate solutions, and more. From concept and prototyping to development, testing, and deployment, our rigorous development process ensures your app exceeds expectations. When considering the development of a mobile app, understanding the mobile app development cost is essential. Costs vary depending on factors such as app complexity, platform (iOS vs. Android), and features. As a Mobile App Design Agency, our high-quality, scalable, and feature-rich mobile solutions help your business thrive in today’s competitive digital market.",
        ]}
        emphasizeTextIndex={[1]}
        emphasizePhrases={["hire mobile app developers"]}
      />
      <TechnologiesSlider />
      <PremiumServices />
      <Benefits
        benifits={benefits}
        sectionTitle="Benefits of Hiring our Mobile App Development Company"
        sectionDescription="As the top mobile app development company, we have the required expertise and skills to create out of the ox apps."
      />
      <AboutUs />
      <ImpactCards
        sectionTitle="Explore The Transformative Impact Of Mobile App On Your Business Success"
        benefitCards={benefitCards}
        autoInterval={3500}
      />
      <SectorsSlider />
      <ExpertiseSlider
        expertiseCards={expertiseCards}
        sectionTitle="Our Expertise in Mobile App Development Services"
        sectionDescription="We specialize in top mobile app development services for every industry type and size. Our expertise includes:"
      />
      <Common />
    </>
  ),

  "business analysis": (
    <>
      <HeroSection
        title="Business Analytics"
        description="As a leading mobile app development company with Good Review and High Rating,
                             we strive to offer cutting-edge solutions tailored to our clients' needs. Let's design an app
                             that surpasses your expectations and makes you an industry leader. Contact us now!"
        buttonText="Get Started"
        buttonLink="#contact"
        imageSrc={MobileApp}
        imageAlt="Digital Solutions illustration"
      />
      <LogoCarousel />
      <Charts />
      <Quotes
        title="Creating Excellent Mobile Apps for Every Business"
        highlightedText="Smart and Reliable Apps"
        paragraphs={[
          "Discover the potential of entirely customizable mobile app development services with reliable mobile app development company. Custom mobile apps for your company and needs are our speciality. We concentrate on flexibility and scalability to guarantee your app matches your brand identity and user expectations. As a custom mobile app development company, we collaborate with you to understand your vision and create a unique mobile app that stands out in the app market, from user interface design to backend functions. With our advanced Mobile app builder, you can turn ideas into powerful digital solutions efficiently while reducing development time and cost.",
          "Innovation and cooperation drive our development approach, with frequent feedback loops to adapt your app to your requirements and market trends. You can hire mobile app developers to design consumer-facing apps, corporate solutions, and more. From concept and prototyping to development, testing, and deployment, our rigorous development process ensures your app exceeds expectations. When considering the development of a mobile app, understanding the mobile app development cost is essential. Costs vary depending on factors such as app complexity, platform (iOS vs. Android), and features. As a Mobile App Design Agency, our high-quality, scalable, and feature-rich mobile solutions help your business thrive in today’s competitive digital market.",
        ]}
        emphasizeTextIndex={[1]}
        emphasizePhrases={["hire mobile app developers"]}
      />
      <TechnologiesSlider />
      <PremiumServices />
      <Benefits
        benifits={benefits}
        sectionTitle="Benefits of Hiring our Mobile App Development Company"
        sectionDescription="As the top mobile app development company, we have the required expertise and skills to create out of the ox apps."
      />
      <AboutUs />
      <ImpactCards
        sectionTitle="Explore The Transformative Impact Of Mobile App On Your Business Success"
        benefitCards={benefitCards}
        autoInterval={3500}
      />
      <SectorsSlider />
      <ExpertiseSlider
        expertiseCards={expertiseCards}
        sectionTitle="Our Expertise in Mobile App Development Services"
        sectionDescription="We specialize in top mobile app development services for every industry type and size. Our expertise includes:"
      />
      <Common />
    </>
  ),

  "typescript development": (
    <>
      <HeroSection
        title="Typescript Development"
        description="As a leading mobile app development company with Good Review and High Rating,
                             we strive to offer cutting-edge solutions tailored to our clients' needs. Let's design an app
                             that surpasses your expectations and makes you an industry leader. Contact us now!"
        buttonText="Get Started"
        buttonLink="#contact"
        imageSrc={MobileApp}
        imageAlt="Digital Solutions illustration"
      />
      <LogoCarousel />
      <Charts />
      <Quotes
        title="Creating Excellent Mobile Apps for Every Business"
        highlightedText="Smart and Reliable Apps"
        paragraphs={[
          "Discover the potential of entirely customizable mobile app development services with reliable mobile app development company. Custom mobile apps for your company and needs are our speciality. We concentrate on flexibility and scalability to guarantee your app matches your brand identity and user expectations. As a custom mobile app development company, we collaborate with you to understand your vision and create a unique mobile app that stands out in the app market, from user interface design to backend functions. With our advanced Mobile app builder, you can turn ideas into powerful digital solutions efficiently while reducing development time and cost.",
          "Innovation and cooperation drive our development approach, with frequent feedback loops to adapt your app to your requirements and market trends. You can hire mobile app developers to design consumer-facing apps, corporate solutions, and more. From concept and prototyping to development, testing, and deployment, our rigorous development process ensures your app exceeds expectations. When considering the development of a mobile app, understanding the mobile app development cost is essential. Costs vary depending on factors such as app complexity, platform (iOS vs. Android), and features. As a Mobile App Design Agency, our high-quality, scalable, and feature-rich mobile solutions help your business thrive in today’s competitive digital market.",
        ]}
        emphasizeTextIndex={[1]}
        emphasizePhrases={["hire mobile app developers"]}
      />
      <TechnologiesSlider />
      <PremiumServices />
      <Benefits
        benifits={benefits}
        sectionTitle="Benefits of Hiring our Mobile App Development Company"
        sectionDescription="As the top mobile app development company, we have the required expertise and skills to create out of the ox apps."
      />
      <AboutUs />
      <ImpactCards
        sectionTitle="Explore The Transformative Impact Of Mobile App On Your Business Success"
        benefitCards={benefitCards}
        autoInterval={3500}
      />
      <SectorsSlider />
      <ExpertiseSlider
        expertiseCards={expertiseCards}
        sectionTitle="Our Expertise in Mobile App Development Services"
        sectionDescription="We specialize in top mobile app development services for every industry type and size. Our expertise includes:"
      />
      <Common />
    </>
  ),
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
