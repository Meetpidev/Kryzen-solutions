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
import Technology_pannel from "../components/Technology_pannel";
import MobileApp from "../public/mobile_app_development1.webp";
import Chart from "../public/mobile_market_stats.webp";
import PieChart from "../public/pie_chart.webp";
import mobileTech from "../components/Technology_pannel";


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

const benefitCards = [];
const expertiseCards = [];
const benefitsData = [];

const TECHNOLOGY_CONTENT = {
  android:
    <>
    <HeroSection
      title="Best Android App Development Company"
      description=" As a top Android app development company, we design Android apps by implementing your original ideas! We build high-quality, user-friendly Android apps to match your demands as a leading bespoke app developer. We specialize in Android mobile app development to help businesses scale efficiently across devices and markets. Contact us for a quote! "
      buttonText="Let's Talk"
      buttonLink="#contact"
      imageSrc={MobileApp}
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
    
    
    <Common />
  </>,
  ios: {
    title: "iOS Development",
    description:
      "Native iOS apps with Swift/SwiftUI, seamless performance, and delightful UX that meet Apple's guidelines and user expectations.",
  },
  flutter: {
    title: "Flutter Development",
    description:
      "High-quality cross-platform apps from a single codebase using Flutter, delivering native performance on Android and iOS.",
  },
  "react-native": {
    title: "React Native Development",
    description:
      "Fast, maintainable cross-platform mobile apps powered by React Native, with shared code and near-native performance.",
  },
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


