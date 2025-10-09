import { useMemo, isValidElement, lazy } from "react";
import { useParams, Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import LogoCarousel from "../components/LogoCarousel";
import Quotes from "../components/Quotes";
import PremiumServices from "../components/PremiumServices";
import Benefits from "../components/Benefits";
import AboutUs from "../components/AboutUs";
const ImpactCards = lazy(() => import("../components/ImpactCards").then(module => ({ default: module.ImpactCards })));
const SectorsSlider = lazy(() => import("../components/SectorsSlider").then(module => ({ default: module.SectorsSlider })));
const ExpertiseSlider = lazy(() => import("../components/ExpertiseSlider").then(module => ({ default: module.ExpertiseSlider })));
const CTASubscribe = lazy(() => import("../components/FeaturedLogos").then(module => ({ default: module.CTASubscribe })));
const CTAWorkTogether = lazy(() => import("../components/FeaturedLogos").then(module => ({ default: module.CTAWorkTogether })));
import MobileApp from "../public/mobile_app_development1.webp";
import Chart from "../public/mobile_market_stats.webp";
import PieChart from "../public/pie_chart.webp";
import android from "../public/android.png";
import TechnologyStack from "../components/TechnologyStack";
import Technology_pannel from "../components/Technology_pannel";
import IOS from "../public/ios1.svg";
import Img_1 from "../public/Explore_1.png";
import Img_2 from "../public/Explore_2.png";
import Img_3 from "../public/Explore_3.png";
import Flutter from "../public/flutter_banner.svg";
import FlutterDev from "../public/flutterdev.png";
import Flutter2 from "../public/flutterdev2.svg";
import ProcessWeFollow from "../components/ProcessWeFollow";
import FAQSection from "../components/FAQSection";
import Upper from "../components/Upper";
import ReactNative from "../public/reactnative_banner.svg";
import ReactNativeDev from "../public/reactnativedev.png";

const Common = () => null;

const Charts = ({ img, img2, h1, p1, h2, p2 }) => {
  
  if (!img && !img2 && !h1 && !p1 && !h2) {
    return null;
  }

  return (
    <section className="py-10 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-12">

        {/* First Block */}
        {(img || h1 || p1) && (
          <div className="flex flex-col md:flex-row md:space-x-8 mb-12">
            {img && (
              <div className="flex-1 rounded-lg bg-white p-6 flex justify-center items-center mb-6 md:mb-0">
                <img
                  src={img}
                  alt="Mobile Application Market Size"
                  className="w-full max-w-sm object-contain"
                />
              </div>
            )}

            {(h1 || p1) && (
              <div className="flex-1 rounded-lg bg-white p-6 flex flex-col justify-between">
                {h1 && <h3 className="text-2xl font-bold mb-4 text-center md:text-left">{h1}</h3>}
                {p1 && (
                  <p className="text-gray-700 mb-6 text-center md:text-left">
                    {p1} <strong>USD 250.75 billion</strong> in 2023 and is projected to grow at a CAGR of 15% from 2024 to 2030.
                  </p>
                )}
                <a
                  href="#contact"
                  className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-lg transition self-center md:self-start"
                >
                  Connect With An Expert &rarr;
                </a>
              </div>
            )}
          </div>
        )}

        {/* Second Block */}
        {(img2 || h2) && (
          <div className="flex flex-col md:flex-row md:space-x-8">
            {h2 && (
              <div className="flex-1 rounded-lg bg-white p-6 mb-6 md:mb-0">
                <h2 className="text-2xl font-bold mb-3 text-center md:text-left">{h2}</h2>
                <div className="text-gray-700 mb-6 text-center md:text-left">
                  {p2}
                </div>
                <a
                  href="#contact"
                  className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-lg transition self-center md:self-start"
                >
                  Connect With An Expert &rarr;
                </a>
              </div>
            )}

            {img2 && (
              <div className="flex-1 rounded-lg bg-white p-6 flex justify-center items-center">
                <img
                  src={img2}
                  alt="Global Smartphone Users 2020-2025"
                  className="w-full max-w-lg h-auto object-contain"
                />
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

const expertiseCards = [];
const benefitsData = [];
const mobileTech = [
   {
    category: "iOS",
    items: ["Swift", "Objective-C", "X-Code", "SwiftUI"]
  },
  {
    category: "Android",
    items: ["Java", "Kotlin", "Android Studio", "Version control tools (Git, GitLab, Bit Bucket)"]
  },
  {
    category: "Cross Platform",
    items: ["Flutter", "React Native", "Ionic", "NativeScript"]
  },
  {
    category: "Database",
    items: ["Firebase", "Redis", "PostgreSQL", "MongoDB", "MySQL", "DynamoDB", "SQLite"]
  },
  {
    category: "Design Tool",
    items: ["Figma", "Sketch", "Adobe XD", "Zeplin", "Photoshop", "Illustrator", "After Effects", "InVision"]
  }
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

const TECHNOLOGY_CONTENT = {
  android:
    <>
    <HeroSection
      title="Best Android App Development Company"
      description=" As a top Android app development company, we design Android apps by implementing your original ideas! We build high-quality, user-friendly Android apps to match your demands as a leading bespoke app developer. We specialize in Android mobile app development to help businesses scale efficiently across devices and markets. Contact us for a quote! "
      buttonText="Let's Talk"
      buttonLink="#contact"
      imageSrc={android}
      imageAlt="Digital Solutions illustration"
    />

    <LogoCarousel />
    <Charts
      img={Chart}
      img2={PieChart}
      h1="Mobile App Market Stats"
      p1="The global mobile application market size was valued at nearly"
      h2="The Mobile Application Development Market Size"
      p2={
        <>
          According to one study, there will be <strong>4.74 billion smartphone users</strong> by the end of 2024, growing at a rate of 2.2% each year.
          When examining the rise in smartphone users between 2020 to 2025, we find that the average yearly growth rate is 6.2%.
        </>
      }
    />
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
      <PremiumServices />
      <SectorsSlider />
    <Benefits
      benifits={benefitsData}
      sectionTitle="Benefits of Hiring our Mobile App Development Company"
      sectionDescription="As the top mobile app development company, we have the required expertise and skills to create out of the ox apps."
    />
      <AboutUs />
      <Technology_pannel techCards={mobileTech} />
      <CTAWorkTogether />
      <CTASubscribe />
    <Common />
  </>,
  ios: 
    <>
    <HeroSection
      title="Top iOS App Development Company"
      description="We specialize in iOS app development services, bringing your app ideas to life on the lively iOS platform. As a highly experienced ios app development company, we have the skills and ability to assist startups and existing businesses in making an impact or extending their digital services with custom iOS app development. If you are looking for a reliable iOS app development company USA that delivers top-notch solutions, you’re in the right place! "
      buttonText="Let's Talk"
      buttonLink="#contact"
      imageSrc={IOS}
      imageAlt="Digital Solutions illustration"
    />

    <LogoCarousel />
    <Charts
      img={Chart}
      img2={PieChart}
      h1="Mobile App Market Stats"
      p1="The global mobile application market size was valued at nearly"
      h2="The Mobile Application Development Market Size"
      p2={
        <>
          According to one study, there will be <strong>4.74 billion smartphone users</strong> by the end of 2024, growing at a rate of 2.2% each year.
          When examining the rise in smartphone users between 2020 to 2025, we find that the average yearly growth rate is 6.2%.
        </>
      }
    />
    <Quotes
      title="Get 100% Customizable iOS App Development Services "
      highlightedText="Not Just Another iOS App Development Company"
      paragraphs={[
        "As an iOS app development agency, our organization prides itself on providing customized solutions that match your vision and objectives. Our experienced iOS developers offer years of experience and skill. From ideation to coding, every stage of the iOS mobile application development services process is tailored to your needs.",
        "As a Top-Rated iOS app development company, we collaborate with you to understand your goals and design an innovative app or improve an existing one. We want to turn your ideas into a fully working iOS app that surpasses your expectations. We make your app stand out in the crowded market with creativity and excellence. From user interface design to backend operations, your app is meticulously created through expert iOS mobile app design and development processes. Utilize our custom iOS application development services for full customization and innovative solutions. Contact us immediately to discuss your app concept and start realizing it.",
      ]}
      emphasizeTextIndex={[1]}
      emphasizePhrases={["hire mobile app developers"]}
    />
      <PremiumServices />
      <SectorsSlider />
    <Benefits
      benifits={benefitsData}
      sectionTitle="Benefits of Hiring our Mobile App Development Company"
      sectionDescription="As the top mobile app development company, we have the required expertise and skills to create out of the ox apps."
    />
      <AboutUs />
      <ImpactCards
        sectionTitle="Explore The Transformative Impact Of Mobile App On Your Business Success"
        benefitCards={benefitCards}
        autoInterval={3500}
      />
    <Common />
  </>,
  flutter:
    <>
    <HeroSection
      title="Top Flutter App Development Company "
      description="We help businesses create native apps on a smaller budget and launch them on Android and iOS operating systems. Our team delivers Affordable flutter app development services to build high-quality Android and IOS apps. As a Highly Experienced Flutter app development company, we offer scalable and high-performance app solutions for every business need."
      buttonText="Let's Talk"
      buttonLink="#contact"
      imageSrc={Flutter}
      imageAlt="Digital Solutions illustration"
    />

    <LogoCarousel />
    <Charts
      img={FlutterDev}
      img2={Flutter2}
      h1="Meet the Reputable Flutter App Development Company"
      p1="With Flutter, we assist contemporary businesses in creating dynamic, feature-rich apps for the web, desktop, and mobile platforms all from a single codebase. Sapphire has a long history of generating Flutter apps, and our developers are skilled at making unique apps. When developing apps, we focus on getting things done quickly and are dedicated to meeting deadlines. Being a Reliable Flutter app development company, we are experts at providing creative and superior Flutter app development services. As a Flutter app development agency, we streamline development workflows to ensure fast, flexible, and feature-rich app delivery."
      h2="Result-Oriented Flutter App Development Services"
      p2={"With a single codebase, our Flutter app development services let businesses build high-quality, cross-platform mobile apps. We use the comprehensive widget library, hot reload capability, and robust performance of Flutter for designing visually beautiful, responsive, and speedy apps. We use the versatile, scalable, and efficient Flutter platform to build or improve apps. Our Flutter backend development services ensure robust server-side performance to support seamless functionality. Our Flutter app development services let organizations reach more customers with uniform user experience. Your app gets the latest features and security updates thanks to the expanding community and Google support. We also integrate advanced Flutter API integration techniques to extend app functionality with third-party services and internal systems. Startups and large companies can quickly and efficiently implement ideas with Flutter." }
    />
    <Quotes
      title="Count On Us for Reliable Flutter App Development Services "
      highlightedText="Get Natively Compiled And Beautifully Designed Flutter Applications."
      paragraphs={[
        "We deliver Flutter app development services to build highly interactive and functional applications with native performance and flexible UI designs. As a top flutter app development company, we know how to turn your idea into a profitable and full-fledged application using Flutter. As a flutter app development company with rich experience and global footprints, our ",
        "Our app developers code Dart and use Flutter’s widgets to ensure cross-platform compatibility of applications on both iOS and Android platforms. We have been delivering flutter cross-platform development services for mobile, web, and desktop. Our development team consists of highly skilled Flutter developers, testing & QA specialists, and UI/UX design experts with rich knowledge of Dart language who can deliver flutter mobile app development services for various platforms. We follow industry-best practices for Flutter app deployment to ensure smooth publishing across Google Play Store and Apple App Store. Additionally, we provide next-gen Flutter app development using AI to enhance performance, personalize user experience, and automate complex functions.",
      ]}
      emphasizeTextIndex={[1]}
      emphasizePhrases={["hire mobile app developers"]}
    />
      <PremiumServices />
      <SectorsSlider />
    <Benefits
      benifits={benefitsData}
      sectionTitle="Benefits of Hiring our Mobile App Development Company"
      sectionDescription="As the top mobile app development company, we have the required expertise and skills to create out of the ox apps."
    />
      <AboutUs />
    <ProcessWeFollow />
    <Technology_pannel techCards={mobileTech} />
    <FAQSection />
    <Upper />
    <CTAWorkTogether />
    <CTASubscribe />
    <Common />
  </>,
  "react-native": 
    <>
    <HeroSection
      title="Top React Native App Development Company in INDIA"
      description="We are the #1 Reactive Native App Development company; we use React Native to build highly interactive, versatile React native applications for Android and iOS platforms. We are an established React native mobile app development company with decade-long experience and follow us  to deliver the best-in-quality services. With decade-long experience, we follow agile methodologies and strive to provide the best-in-class React Native Development services to our clients. Are you looking for developers or exploring React Native app development cost, we ensure transparency and cost-effectiveness in our approach."
      buttonText="Let's Talk"
      buttonLink="#contact"
      imageSrc={ReactNative}
      imageAlt="Digital Solutions illustration"
    />

    <LogoCarousel />
    <Charts
      img={ReactNativeDev}
      h1="Quality React Native Application Development Services"
      p1="We provide a variety of React Native mobile application development services tailored to your unique development goals and challenges, whether you're a startup, SMB, or corporate enterprise. As a best React Native app development Agency, we help businesses across industries grow by leveraging the power of React Native to create dynamic, scalable web products that meet their unique needs. We deliver seamless cross-platform applications using a single codebase, cutting development time and costs significantly. Our services include everything from UI/UX design to backend integrations, ensuring that each project is custom-tailored to your requirements."
    />
    <Quotes
      title="Get Top-Notch React Native Development Services"
      highlightedText="React Native Development Services Tailored For Your Needs"
      paragraphs={[
        "We are the #1 react native development company; we use React Native to build highly interactive, versatile React Native applications for Android and iOS platforms. As an established react native development agency with decade-long experience, we follow an agile system to deliver the best-in-quality services.",
        "We take a step-by-step approach to ensure smooth and on-time delivery of React native app development services. Once we start working together, our React Native Web Development will work closely with you and keep you updated on each development process step. We are a top React Native app development company that offers end-to-end React Native app development services, including consulting, UI/UX design, development, testing, deployment, and post-launch support. Whether you need a simple app or a complex enterprise solution, our React Native developers have the expertise to deliver high-quality results that exceed your expectations.",
      ]}
      emphasizeTextIndex={[1]}
      emphasizePhrases={["hire mobile app developers"]}
    />
      <PremiumServices />
      <SectorsSlider />
   
      <AboutUs />
    <ProcessWeFollow />
    <Technology_pannel techCards={mobileTech} />
    <FAQSection />
    <Upper />
    <CTAWorkTogether />
    <CTASubscribe />
    <Common />
  </>,
  angular: {
    title: "Angular Development",
    description:
      "Enterprise-grade SPAs using Angular with scalable architecture, strong typing, and best-in-class tooling.",
  },
  react: {
    title: "React Development",
    description:
      "Modern React apps with performance, accessibility, and developer experience at the core.",
  },
  vuejs: {
    title: "Vue.js Development",
    description:
      "Lightweight, flexible frontends crafted with Vue.js to deliver fast, elegant user experiences.",
  },
  dotnet: {
    title: ".NET Development",
    description:
      "Secure, performant backends and services using .NET for cloud-native and enterprise applications.",
  },
  php: {
    title: "PHP Development",
    description:
      "Reliable web applications and APIs using modern PHP frameworks and best practices.",
  },
  java: {
    title: "Java Development",
    description:
      "Scalable, resilient Java applications for complex business domains and workloads.",
  },
  nodejs: {
    title: "Node.js Development",
    description:
      "Real-time, event-driven services and APIs built with Node.js and TypeScript.",
  },
  "generative-ai": {
    title: "Generative AI",
    description:
      "Solutions powered by LLMs and diffusion models: content automation, assistants, and intelligent workflows.",
  },
  "ai-ml": {
    title: "AI & ML",
    description:
      "Machine learning pipelines, predictive models, and MLOps that turn data into outcomes.",
  },
  blockchain: {
    title: "Blockchain",
    description:
      "DApps, smart contracts, and integrations focused on security, scalability, and real-world utility.",
  },
  "full-stack": {
    title: "Full Stack Development",
    description:
      "End-to-end product development across frontend, backend, databases, and cloud infrastructure.",
  },
  wordpress: {
    title: "WordPress Development",
    description:
      "High-performance WordPress sites with custom themes, plugins, and headless architectures.",
  },
  shopify: {
    title: "Shopify Development",
    description:
      "Custom Shopify storefronts, apps, and integrations to scale your e-commerce.",
  },
};

function toTitleCase(slug) {
  return slug
    .replace(/-/g, " ")
    .replace(/^\w|\s\w/g, (m) => m.toUpperCase());
}

export default function TechnologyPage() {
  const { tech = "" } = useParams();

  const content = useMemo(() => {
    const key = tech.toLowerCase();
    return (
      TECHNOLOGY_CONTENT[key] || {
        title: toTitleCase(key || "Technology"),
        description:
          "Explore how we use this technology to deliver secure, scalable, and user-centric solutions.",
      }
    );
  }, [tech]);

  if (isValidElement(content)) {
    return content;
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <nav className="text-sm text-gray-600 mb-6">
        <Link to="/" className="hover:underline">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/" className="hover:underline">Technology</Link>
        <span className="mx-2">/</span>
        <span className="font-semibold text-gray-900">{content.title}</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">{content.title}</h1>
      <p className="text-lg text-gray-700 max-w-3xl mb-8">{content.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-lg border bg-white">
          <h2 className="text-xl font-semibold mb-2">What we offer</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Solution architecture and consulting</li>
            <li>End-to-end development and QA</li>
            <li>Cloud, CI/CD and observability</li>
          </ul>
        </div>
        <div className="p-6 rounded-lg border bg-white">
          <h2 className="text-xl font-semibold mb-2">Why us</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Proven delivery with modern best practices</li>
            <li>Security-first, performance-focused</li>
            <li>Transparent communication</li>
          </ul>
        </div>
        <div className="p-6 rounded-lg border bg-white">
          <h2 className="text-xl font-semibold mb-2">Get started</h2>
          <p className="text-gray-700 mb-3">Share your goals and we’ll propose a roadmap.</p>
          <Link to="/contact-us" className="inline-block bg-[#005D89] text-white px-4 py-2 rounded">Contact Us</Link>
        </div>
      </div>
    </div>
  );
}


