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
import DotNet from "../public/dotnetbanner.svg";
import DotNetAbout from "../public/dotnetdevelopment1.svg";
import Brands from "../components/Brands.jsx";
import Laravel from "../public/phpaboutinfo.svg";
import JavaDev from "../public/javadev.png";
import { FaCube, FaDesktop, FaDatabase, FaCogs, FaAward, FaTasks } from "react-icons/fa";
import Maintain from "../public/ic_easy_maintain_mobile_app_development.png";
import Crm from "../public/ic_crm_mobile_app_development.png";
import Accountibility from "../public/ic_accountibility_mobile_app_development.png";
import Scalability from "../public/ic_improve_scalability_mobile_app_development.png";
import NodeJs from "../public/nodejsdevelopment.svg";
import AI from "../public/artificial_intelligence_banner.svg";
import AI_description from "../public/artificial_intelligence_section_1.svg";
import AI_Vector from "../public/ai_vector.svg";
import BlockChain from "../public/blockchain_development_banner.svg";
import BlockChain_1 from "../public/blockchain_development_section_1.svg";
import FullStack from "../public/full_stack_development_banner.svg";
import FullStack_1 from "../public/full_stack_development_section_1.svg";
import Shopify from "../public/shopify_banner.webp";
import ShopifyDev from "../public/shopifydev.webp";
import Angular from "../public/angular_banner.svg";
import AngularDev from "../public/angulardev.png";
import ReactJs from "../public/reactnative_banner.svg"
import ReactJsDev from "../public/reactjsdev.png"
import VueJs from "../public/vuejs_banner.svg";
import VueJsDev from "../public/vuejsdev.png";
import { TechnologiesSlider } from "../components/TechnologiesSlider.jsx";
import cuttingEdge_1 from "../public/cuttingEdge.png";
import cuttingEdge_2 from "../public/cuttingEdge_2.png";
import cuttingEdge_3 from "../public/cuttingEdge_4.png";
import cuttingEdge_5 from "../public/cuttingEdge_6.png";
import cuttingEdge_6 from "../public/cuttingEdge_7.png";
import cuttingEdge_7 from "../public/cuttingEdge_8.png";
import ReasonChoose from "../components/ReasonChoose.jsx";

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

const Android_techCards = [
  {
     title: "XML",
    description:
      "XML is needed to develop Android app layouts and UI components. Our team creates attractive, intuitive layouts that work across screen sizes and resolutions. We optimize XML files to make your app’s UI lightweight, quick, and user-friendly.",
    icon: <img src={cuttingEdge_1} alt="Icons" />,
  },
  {
    title: "Retrofit",
    description:
      "Our team optimizes Retrofit for data processing, error handling, and API call management to keep your app responsive under pressure. Optimizing network performance gives apps smooth data synchronization and real-time updates.",
    icon: <img src={cuttingEdge_2} alt="Icons" />,
  },
  {
     title: "Kotlin",
    description:
      "Modern features, succinct syntax, and Java interoperability make Kotlin the best programming language for Android app development. Our Kotlin-based solutions boost performance and developer productivity, speeding development.",
    icon: <img src={cuttingEdge_3} alt="Icons" />,
  },
  {
    title: "Firebase",
    description: "Firebase is a Google platform that provides backend services like real-time databases, authentication, cloud storage, and hosting. We use Firebase to build scalable, secure, and real-time apps with minimal backend code.",
    icon: <img src={cuttingEdge_5} alt="Icons" />,
  },
  {
    title: "Java",
    description: "Java is a versatile, platform-independent programming language widely used for Android app development. Our team uses Java to create robust, scalable, and high-performance apps that work on many devices and Android versions.",
    icon: <img src={cuttingEdge_6} alt="Icons" />,
  },
  {
    title: "Android Studio",
    description: "Android Studio is the official IDE for Android app development. We use its powerful tools, emulators, and debugging features to streamline development, test apps on various devices, and ensure high-quality code.",
    icon: <img src={cuttingEdge_7} alt="Icons" />,
  },
];

const androidBenefits = [
  {
    title: "Wider Audience Reach",
    description:
      "Android has unmatched reach and user diversity, powering the global mobile market. Android apps let businesses reach emerging markets and premium users. App downloads, user engagement, and business growth increase with this wide reach.",
  },
  {
    title: "Open-Source Platform",
    description:
      "Open-source Android lets developers use its entire ecosystem. The ability to customize apps and integrate advanced features without licensing fees encourages innovation and cost-effective development. Businesses can make customized solutions.",
  },
  {
    title: "Easy Customization",
    description:
      "Android's flexibility ensures your app meets your business needs, whether it's simple or complex, and has specific features. Rapidly adapting to market changes and user preferences helps businesses stay competitive.",
  },
  {
    title: "Multiple Distribution Channels",
    description:
      "Unlike other platforms, Android apps can be hosted on Google Play, Amazon Appstore, and even your website. Flexibility improves visibility and user acquisition strategies, maximizing app exposure and revenue.",
  },
  {
    title: "Seamless Integration with Google Services",
    description:
      "Integrating Google Maps, Firebase, and Analytics into Android apps improves functionality and performance. Seamless integration lets businesses use powerful tools for app monitoring and data-driven decision-making to enhance user experiences.",
  },
  {
    title: "Cost-Effective Development",
    description:
      "Free SDKs, libraries, and development tools make Android development affordable, and the developer community speeds up development and reduces costs. Businesses with different budgets can still use Android to develop high-quality apps.",
  },
];


const benefits = [
  {
    title: "Tech-savvy",
    description:
      "Our team knows many programming languages, frameworks, and tools for iOS, Android, and cross-platform app development. As a Mobile Application Development Company, Swift, Kotlin, Java, JavaScript, React Native, Flutter, and Xamarin are our expertise.",
    icon: Maintain,
  },
  {
    title: "Knowledge and Skill",
    description:
      "Our team includes experienced mobile app developers from many sectors. They've completed everything from consumer applications to business solutions, and their varied skills allow them to solve problems quickly and creatively for customers.",
    icon: Scalability,
  },
  {
    title: "Design sense",
    description:
      "Our mobile app developers are design and UX experts. They value attractive, intuitive, and easy-to-use interfaces. Using UI/UX best practices, our developers ensure that every component of the app improves user engagement and pleasure, creating a good experience.",
    icon: Crm,
  },
  {
    title: "Agile Methodologies",
    description:
      "To guarantee flexibility, transparency, and cooperation, our engineers use Scrum or Kanban. We divide the project into sprints for feedback and iteration. Iterative development allows our developers to adapt to changing needs and provide high-quality outcomes on time and within budget.",
    icon: Accountibility,
  },
  {
    title: "Transparency",
    description:
      "We work with you from planning to implementation and support. With clear communication and frequent updates, our developers turn your idea into a successful mobile app that matches your company goals.",
    icon: Maintain,
  },
  {
    title: "Quality Control",
    description:
      "Quality is our priority. Our services satisfy the highest performance, reliability, and security requirements since our developers undergo rigorous quality assurance methods. Before the app is published, it undergoes functional, usability, performance, and security testing to find and fix any flaws.",
    icon: Crm,
  },
];

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

const Custom_Technology = [
  {
    title: "Backend",
    icon: FaCube,
    items: [".NET", "Java", "PHP", "Node", "Ruby on Rails"],
  },
  {
    title: "Front End",
    icon: FaDesktop,
    items: ["Java", "RxJava", "Coroutines Kotlin", "Kotlin", "RxKotlin"],
  },
  {
    title: "Database",
    icon: FaDatabase,
    items: ["SQLite", "CoreData", "Realm", "Firebase"],
  },
  {
    title: "DevOps",
    icon: FaCogs,
    items: ["CI/CD", "GitHub Actions"],
  },
  {
    title: "Testing",
    icon: FaAward,
    items: ["Appium", "BrowserStack", "Katalon Test Studio"],
  },
  {
    title: "Project Management Tools",
    icon: FaTasks,
    items: ["Jira", "Slack", "Microsoft Teams", "Trello"],
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
      title="Leading Android App Development Agency"
      highlightedText="Not Just Another Android App Development Company"
      paragraphs={[
        "Discover the potential of entirely customizable mobile app development services with reliable mobile app development company. Custom mobile apps for your company and needs are our speciality. We concentrate on flexibility and scalability to guarantee your app matches your brand identity and user expectations. As a custom mobile app development company, we collaborate with you to understand your vision and create a unique mobile app that stands out in the app market, from user interface design to backend functions. With our advanced Mobile app builder, you can turn ideas into powerful digital solutions efficiently while reducing development time and cost.",
        "Innovation and cooperation drive our development approach, with frequent feedback loops to adapt your app to your requirements and market trends. You can hire mobile app developers to design consumer-facing apps, corporate solutions, and more. From concept and prototyping to development, testing, and deployment, our rigorous development process ensures your app exceeds expectations. When considering the development of a mobile app, understanding the mobile app development cost is essential. Costs vary depending on factors such as app complexity, platform (iOS vs. Android), and features. As a Mobile App Design Agency, our high-quality, scalable, and feature-rich mobile solutions help your business thrive in today’s competitive digital market.",
      ]}
      emphasizeTextIndex={[1]}
      emphasizePhrases={["hire mobile app developers"]}
      />
      <TechnologiesSlider
        title="Cutting Edge Technology Kryzen Use For Android App Development" 
        techCards={Android_techCards}
        />
      <PremiumServices />
      <SectorsSlider />
      <ReasonChoose 
        title="Key Reasons to Choose Android for Mobile App Development"
        des="Whether for startups or established businesses, Android apps can reach diverse audiences and integrate with Google services at a low cost. Companies can build engaging, high-performance apps that meet user needs and goals using the latest technologies and tools."
        benifits={androidBenefits}
      />
    <Benefits
      benifits={benefits}
      sectionTitle="Benefits of Hiring our Mobile App Development Company"
      sectionDescription="As the top mobile app development company, we have the required expertise and skills to create out of the ox apps."
    />
      <AboutUs />
      <Technology_pannel techCards={mobileTech} />
      <ProcessWeFollow />
      <FAQSection />
      <Upper />
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
      <TechnologiesSlider
        title="Technology Combinations Used By Sapphire For iOS App Development" 
        techCards={Android_techCards}
        />
      <PremiumServices />
      <SectorsSlider />
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
      benifits={benefits}
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
  angular: 
    <>
    <HeroSection
      title="Top Angular Development Company"
      description="As an experienced angular development company, we deliver highly interactive, robust and user-friendly angular web applications, services and solutions. Contact us now for web and mobile app development services."
      buttonText="Let's Talk"
      buttonLink="#contact"
      imageSrc={Angular}
      imageAlt="Digital Solutions illustration"
    />
    <LogoCarousel />
    <Charts
      img={Chart}
      img2={AngularDev}
      h1="Web Development Market Stats"
      p1="The global web development market size was roughly USD 55500.0 million in 2021. As per our research, the market is expected to reach USD 89015.19 million by 2027, exhibiting a CAGR of 8.03% during the forecast period."
      h2="Reliable and Affordable Angular Development Services"
      p2={"Kryzen, an award-winning angular development firm, offers end-to-end services that enable our clients to make use of a framework that enhances user experience and is quick, effective, and highly scalable. We use the most recent version of Angular and create unique widgets, Angular framework plugins, and APIs. Our organization uses Angular, frequently in conjunction with the MEAN stack, to create dynamic online and mobile applications—such as e-commerce, portals, dashboards, video streaming, and other well-liked app categories—much more quickly." }
    />
    <Quotes
      title="Best Angular Development Company for Startups "
      highlightedText="Build Lightweight, Scalable And Intuitive Applications"
      paragraphs={[
        "We are a reputable High-end Angular Development Agency with Good Reviews. We have provided Angular Website Development services worldwide and have a proven track record in delivering enterprise-level. One of the main points about using Angular is its out-of-the-box functionality and wide range of features, which help achieve a fast market time. Furthermore, Angular offers ready-made modules that assist in scaling the project, making it an excellent enterprise application option.",
        "We have an excellent team in Angular Mobile Development and committed Angular developers who have fantastic solutions for Angular ventures. They are also known for top rated angular agency on clutch. Our highly qualified engineers use tools for AngularJS development and have successfully provided several successful Angular development services to numerous clients worldwide in compliance with their market requirements. So, for what are you holding out to? Hire Top Angular Developers to create a high-quality application for your business.",
      ]}
      emphasizeTextIndex={[1]}
      emphasizePhrases={["hire mobile app developers"]}
    />
      <PremiumServices />
      
    <Benefits
      benifits={benefits}
      sectionTitle="Some Of The Key Benefits Of Using Shopify"
      sectionDescription="With a vast library of extensions and developer-friendliness, Shopify can easily set up your online store and sell products. "
    />
      <AboutUs />
    <ProcessWeFollow />
    <TechnologyStack data={Custom_Technology} />
    <Brands />
    <FAQSection />
    <Upper />
    <CTAWorkTogether />
    <CTASubscribe />
    <Common />
  </>,
  react: 
    <>
    <HeroSection
      title="Top React JS Development Company"
      description="We create robust, high performance, scalable and powerful ReactJS framework for React js web development and react js application development. As a reputable React Js Development Company, we offer a wide range of reliable ReactJS development services and solutions at affordable prices."
      buttonText="Let's Talk"
      buttonLink="#contact"
      imageSrc={ReactJs}
      imageAlt="Digital Solutions illustration"
    />
    <LogoCarousel />
    <Charts
      img={ReactJsDev}
      h1="Leading React Js Development Company with High Rating "
      p1="React JS development services from Sapphire, a well-known global company, enable developers to create complex, isomorphic apps with lightning-fast rendering. Our team specializing in React development can assist you in creating enterprise-class applications that comply with top coding standards like W3C and ECMAScript. Being an award winning React Js Development Company, we support its versatility in building frontends for mobile, web, and server-rendered applications that are highly scalable, lightweight, and user-friendly."
    />
    <Quotes
      title="Build Powerful React Apps with Our Experienced Team"
      highlightedText="Bring Your Product Vision to Life with React Development"
      paragraphs={[
        "React Web development services from Sapphire, a well-known global company, enable developers to create complex, isomorphic apps with lightning-fast rendering. Our team specializing in React development can assist you in creating enterprise-class applications that comply with top coding standards like W3C and ECMAScript. Being an experienced React Js Development Company, we support its versatility to build frontends for mobile, web, and server-rendered applications that are highly scalable, lightweight, and user-friendly.",
        "We have experience in developing websites using the react development framework and applications such as NextJS and GatsbyJS. These pages get pre-rendered hence forced to edge of CDN, as opposed to conventional equivalents such as WordPress, which enters the database every time anyone tries to access a blog. Our Top reactnative development comapny  work more efficiently when we use CD/CI software to design, analyze, and deploy our applications. We use Vercel and Netlify to automate our deployments and cross-check them against metrics like usability, SEO, performance, and PWA.",
      ]}
      emphasizeTextIndex={[1]}
      emphasizePhrases={["hire mobile app developers"]}
    />
      <PremiumServices />
      
    <Benefits
      benifits={benefits}
      sectionTitle="The Key Benefits Of Using ReactJs"
      sectionDescription="Here are the reasons that make ReactJS our preferable framework"
    />
      <AboutUs />
    <ProcessWeFollow />
    <TechnologyStack data={Custom_Technology} />
    <Brands />
    <FAQSection />
    <Upper />
    <CTAWorkTogether />
    <CTASubscribe />
    <Common />
  </>,
  vuejs: 
  <>
    <HeroSection
      title="Vue js Development Company in INDIA"
      description="We are a leading VueJS development company providing robust VueJS Development Services at the best price. Get in touch with us for customized Vue Js development services delivered by experts. Get your free quote today!"
      buttonText="Let's Talk"
      buttonLink="#contact"
      imageSrc={VueJs}
      imageAlt="Digital Solutions illustration"
    />
    <LogoCarousel />
    <Charts
      img={VueJsDev}
      h1="No. 1 Vue JS Development Company"
      p1="With extensive knowledge of the Vue .js Framework, our team of skilled Vue .js developers provides clients with the greatest UI solutions in the shortest amount of time. We can provide amazing digital experiences by combining best-in-class user-centric designs, usability techniques, and the flexibility of Vue.js with our efficient Vue.js development services. Our area of expertise is using Vue .js to build beautiful, high-performing online apps that engage users and produce tangible outcomes."
    />
    <Quotes
      title="Build Powerful React Apps with Our Experienced Team"
      highlightedText="Bring Your Product Vision to Life with React Development"
      paragraphs={[
        "React Web development services from Sapphire, a well-known global company, enable developers to create complex, isomorphic apps with lightning-fast rendering. Our team specializing in React development can assist you in creating enterprise-class applications that comply with top coding standards like W3C and ECMAScript. Being an experienced React Js Development Company, we support its versatility to build frontends for mobile, web, and server-rendered applications that are highly scalable, lightweight, and user-friendly.",
        "We have experience in developing websites using the react development framework and applications such as NextJS and GatsbyJS. These pages get pre-rendered hence forced to edge of CDN, as opposed to conventional equivalents such as WordPress, which enters the database every time anyone tries to access a blog. Our Top reactnative development comapny  work more efficiently when we use CD/CI software to design, analyze, and deploy our applications. We use Vercel and Netlify to automate our deployments and cross-check them against metrics like usability, SEO, performance, and PWA.",
      ]}
      emphasizeTextIndex={[1]}
      emphasizePhrases={["hire mobile app developers"]}
    />
      <PremiumServices />
      
    <Benefits
      benifits={benefits}
      sectionTitle="The Key Benefits Of Using ReactJs"
      sectionDescription="Here are the reasons that make ReactJS our preferable framework"
    />
      <AboutUs />
    <ProcessWeFollow />
    <TechnologyStack data={Custom_Technology} />
    <Brands />
    <FAQSection />
    <Upper />
    <CTAWorkTogether />
    <CTASubscribe />
    <Common />
  </>,
  dotnet: 
    <>
    <HeroSection
      title=".Net Application Development Company"
      description="We excel in delivering the best-suited DOT Net development solutions as per the custom needs of businesses. Our team of DOT Net developers is well-trained and holds rich expertise in developing such apps. Contact us now! As an experienced .NET Development Company we ensure you get tailored solutions for your specific requirements."
      buttonText="Let's Discuss Your Project"
      buttonLink="#contact"
      imageSrc={DotNet}
      imageAlt="Digital Solutions illustration"
    />

    <LogoCarousel />
    <Charts
      img={Chart}
      img2={DotNetAbout}
      h1="Web Development  Market Stats"
      p1="The global web development market size was roughly USD 55500.0 million in 2021. As per our research, the market is expected to reach USD 89015.19 million by 2027, exhibiting a CAGR of 8.03% during the forecast period."
      h2="Hire Highly Rated .NET Agency for Your Projects"
      p2={"As a part of .NET software development services, we offer design, implementation, testing, evolution, integration, and modernization of applications built on the .NET platform. We provide enterprise-grade apps with great performance for a range of platforms and technologies. With a team of extremely knowledgeable and experienced developers, we specialize in developing custom software solutions that are made to match each client's needs. From creating feature-rich mobile and desktop apps to designing prototypes, we provide Full-Stack dotnet development services at the best price. If you are planning to Hire .NET developers, our experts can fulfill your project requirements with utmost precision." }
    />
    <Quotes
      title="Leading Dot Net Development Company"
      highlightedText="Grow Your Business With Our Tailored .NET Development Services"
      paragraphs={[
        "We are an ASP.NET web development company with years of experience to build engaging and functional web solutions using a robust Framework and an extensive API set. If you need ASP dot net development services, then Sapphire Solutions can be the Best .NET development company for you. Our DOT NET development team has diverse skill sets and can handle any application development project you might need.",
        "Whether it is public and private cloud or client devices like desktops and smartphones, our custom .NET development services will suit your needs. We also offer specialized .NET cloud application development services to help businesses leverage the power of cloud technologies. We make sure that our services are provided at the most reasonable cost possible without compromising on quality. We know how to create the perfect mix of quality, reliability, and efficiency to make sure we surpass your expectations on the final delivery. Additionally, for scalable and modernized solutions, we deliver high-performing .NET Core development services tailored to your business needs.",
      ]}
      emphasizeTextIndex={[1]}
      emphasizePhrases={["hire mobile app developers"]}
    />
      <PremiumServices />
      <SectorsSlider />
    <Benefits
      benifits={benefits}
      sectionTitle="Benefits of Hiring our Mobile App Development Company"
      sectionDescription="As the top mobile app development company, we have the required expertise and skills to create out of the ox apps."
    />
      <AboutUs />
    <ProcessWeFollow />
    <Technology_pannel techCards={mobileTech} />
    <Brands />
    <FAQSection />
    <Upper />
    <CTAWorkTogether />
    <CTASubscribe />
    <Common />
  </>,
  php: 
    <>
    <HeroSection
      title="Leading PHP Development Company"
      description="We offer customized, robust, and complex PHP web application development services for your business needs. We have PHP development experts who have decade long expertise in this field. Call us now to get your quote today! Whether you're looking to Hire PHP developer for a short-term task or a long-term project, we've got the right talent for you"
      buttonText="Let's Discuss"
      buttonLink="#contact"
      imageSrc={DotNet}
      imageAlt="Digital Solutions illustration"
    />
    <LogoCarousel />
    <Charts
      img={Chart}
      img2={Laravel}
      h1="Web Development  Market Stats"
      p1="The global web development market size was roughly USD 55500.0 million in 2021. As per our research, the market is expected to reach USD 89015.19 million by 2027, exhibiting a CAGR of 8.03% during the forecast period."
      h2="Leverage Kryzen PHP Development expertise"
      p2={"As a top PHP development firm, we've used database management systems like MySQL and MongoDB together with PHP back-end and front-end JavaScript frameworks like Vue.js and React.js to create dozens of dynamic, user-friendly websites. As a top PHP development firm, we've used database management systems like MySQL and MongoDB together with PHP back-end and front-end JavaScript frameworks like Vue.js and React.js to create dozens of dynamic, user-friendly websites. We are recognized as Reliable PHP Development Company for Businesses with a Limited Budget for best outcome. Our portfolio also includes Laravel PHP development services tailored for performance and scalability." }
    />
    <Quotes
      title="Offering Unmatched PHP Development Services"
      highlightedText="We Have Extensive Expertise In Building Robust PHP Websites For Several Businesses"
      paragraphs={[
        "Kryzen Software Solutions is a leading PHP web development company that offers advanced, custom PHP development services to cater to your ever-changing business requirements. Our PHP software development team can develop dynamic and powerful PHP solutions to facilitate your business and lead in the market. If you are hunting for a PHP application development company, then your search ends at Sapphire Solutions. As a PHP app development company, we have expertise in creating attractive and scalable web and mobile solutions ranging from simple web pages to complex enterprise-level applications. Our Custom PHP web application development services are crafted to fit any business model.",
        "We are a team of expert PHP web developers and seasoned project managers, designers who work to deliver result-oriented PHP web development services. From simple PHP-based websites and apps to advanced domain-specific solutions, we have expertise in doing it all. We understand our clients' absolute needs and have a proven work record in delivering social networking sites, Web calendars, Payment gateways, and more. Sapphire Solutions is a reliable Enterprise PHP development company USA serving businesses across industries. Whether you're planning a complete overhaul or need PHP migration services from legacy systems, we ensure a smooth transition. Looking to build a scalable online store? Our PHP eCommerce website development expertise guarantees a seamless experience. Also, as a trusted WordPress PHP development company, we build flexible, content-rich websites that drive results.",
      ]}
      emphasizeTextIndex={[1]}
      emphasizePhrases={["hire mobile app developers"]}
    />
      <PremiumServices />
      <SectorsSlider />
    <Benefits
      benifits={benefits}
      sectionTitle="Benefits of Hiring our Mobile App Development Company"
      sectionDescription="As the top mobile app development company, we have the required expertise and skills to create out of the ox apps."
    />
      <AboutUs />
    <ProcessWeFollow />
    <Technology_pannel techCards={mobileTech} />
    <Brands />
    <FAQSection />
    <Upper />
    <CTAWorkTogether />
    <CTASubscribe />
    <Common />
  </>,
  java: 
   <>
    <HeroSection
      title="No.1 Java Development Company in INDIA"
      description="At Kryzen, our team has great expertise in Java application development. We apply the latest Java-related technologies to help clients build sustainable Java-based software fast and cost-effectively."
      buttonText="Let's Talk"
      buttonLink="#contact"
      imageSrc={DotNet}
      imageAlt="Digital Solutions illustration"
    />
    <LogoCarousel />
    <Charts
      img={JavaDev}
      h1="Offering Java Development Services"
      p1="We develop cross-platform, scalable apps for any server system that supports Java. Together, object-oriented programming, robust IDEs, and platform-independent development can help you expedite your Java projects. Our Java developers make use of libraries containing ready-to-integrate codes, reusable components, and frameworks. The industry-focused consultants at Sapphire assess your needs and provide all software requirements. Our project managers evaluate the risks and provide realistic project schedules and budgets."
    />
    <Quotes
      title="Get All-In-One Java Development Services"
      highlightedText="Leverage The Benefit Of Our Unique Java Development Approach"
      paragraphs={[
        "We are a well-known Java development company committed to building scalable and high-quality Java solutions using the most trusted architecture patterns. As a trusted Java web application development company , we have extensive expertise in creating robust and secure Java desktop and web-based applications for several industries and business verticals. Our Java web development team can turn your idea or vision into intelligent software using Java.",
        "While working with Sapphire solutions, you will get a complete cycle of Java software development services under a single roof. Our year-long expertise in this field and intensive knowledge of this field enable us to become a preferred Java development company. Be it MVPs for startups or complex enterprise business automation; our Java development services got you covered. Get in touch to get best-in-class Java applications handcrafted for you.",
      ]}
      emphasizeTextIndex={[1]}
      emphasizePhrases={["hire mobile app developers"]}
    />
      <PremiumServices />
      
    <Benefits
      benifits={benefits}
      sectionTitle="Benefits of Hiring Java Development Company"
      sectionDescription="For durable, scalable, and secure software solutions, hiring a Java development firm has several benefits. Here are the major advantages of Java development"
    />
      <AboutUs />
    <ProcessWeFollow />
    <TechnologyStack data={Custom_Technology} />
    <Brands />
    <FAQSection />
    <Upper />
    <CTAWorkTogether />
    <CTASubscribe />
    <Common />
  </>,
  nodejs: 
  <>
    <HeroSection
      title="Node JS Development Company"
      description="As a leading Node JS development company with good review, Sapphire Software Solutions create fast, scalable and real time applications. Hire our dedicated developers for Node JS web development needs."
      buttonText="Let's Talk"
      buttonLink="#contact"
      imageSrc={NodeJs}
      imageAlt="Digital Solutions illustration"
    />
    <LogoCarousel />
    <Charts
      img={NodeJs}
      h1="Acquire Node JS Development Services"
      p1="With dynamic and tailored Node JS development services, you can enhance your online apps and meet your business's specific requirements. Want to work with a top NodeJS development company in INDIA   for a comprehensive variety of node js mobile app development services? With Highly Experienced Node js Development Company, your digital initiatives will be elevated. Our professionals use Node js's capability to create scalable, high-performance solutions."
    />
    <Quotes
      title="Tailor-Made Node Js Application Development Services"
      highlightedText="Delivering A Wide Range Of Node .Js Development Services"
      paragraphs={["As a Top-Rated Node js Development Company, Sapphire solutions is the one-stop destination for building feature-rich, high-performance, and scalable web and mobile applications. With our up-to-date knowledge and advanced skill set in NodeJS development, we are always prepared to create NodeJS server-side applications and backend solutions. Whether you need to migrate your existing backend system to NodeJS or want a powerful Node .js API, we are the Award Winning Node js Development Company that crafts Node js application development services to enable efficiency in both server-side and client-side."]}
      emphasizeTextIndex={[1]}
      emphasizePhrases={["hire mobile app developers"]}
    />
      <PremiumServices />
      
    <Benefits
      benifits={benefits}
      sectionTitle="Benefits of NodeJs Application Development Company"
      sectionDescription="NodeJs Application Development Services allows for flexible and dynamic web application development. Benefits of NodeJs Application Development"
    />
      <AboutUs />
    <ProcessWeFollow />
    <TechnologyStack data={Custom_Technology} />
    <Brands />
    <FAQSection />
    <Upper />
    <CTAWorkTogether />
    <CTASubscribe />
    <Common />
  </>,
  "generative-ai": {
    title: "Generative AI",
    description:
      "Solutions powered by LLMs and diffusion models: content automation, assistants, and intelligent workflows.",
  },
  "ai-ml": 
    <>
    <HeroSection
      title="Artificial Intelligence Development Company"
      description="Are you looking to Mold the future of your company ability to thrive with Artificial Intelligence Solutions for Business? We are the industry leader as a Custom AI Software Development Company in Artificial intelligence development services that are more intelligent."
      buttonText="Let's Talk"
      buttonLink="#contact"
      imageSrc={AI}
      imageAlt="Digital Solutions illustration"
    />
    <LogoCarousel />
    <Charts
      img={AI_description}
      img2={AI_Vector}
      h1=" Delivering Top Rated AI Development Services Globally"
      p1="We guarantee Affordable AI development services and innovative AI Software Development Services, online apps, and mobile software by combining the efforts of our skilled professionals. Our best artificial intelligence development company will aid decision-makers in obtaining a better understanding of their respective business ecosystems, whether those decision-makers work for tech startups, retail companies, hospitals, or corporations. Top Rated AI app development company guarantee additional digital possibilities are made available to Best AI Development Company by minimizing the associated risks using our cutting-edge artificial intelligence software development."
      h2=" AI Driven Solutions for Enterprise"
      p2={"We assist companies in their revolutionary AI journey by bringing a group of AI specialists on board. With the aid of our AI development services, companies can investigate opportunities driven by AI and building your ai app with complete AI models that are tailored to their goals. We create AI-powered apps tailored to your business requirements. Our products provide ai application development platform, cognitive insights, process automation, and increased operational efficiency. We offer end-to-end services that integrate cutting-edge AI capabilities into your operations from conception to implementation." }
    />
    <Quotes
      title="Get A 100% Customizable Artificial Intelligence Development By Experts"
      highlightedText="Scale your business with our AI solutions"
      paragraphs={[
        "We have a large pool of committed deep learning engineers working hard to reduce operating expenses, optimize efficiency, increase customer happiness, and drive company development. We will enable your company to adopt a strategy for wiser decision-making by integrating our AI technology into your mainstream business processes. This will simplify your company's resolve unforeseen business mistakes and increase customer demand.",
        "Our specialists provide artificial intelligence development tools that do not replace human talents; instead, they should be regarded as a potent business enhancement. We put in a lot of effort to modernize your company situation quicker by making it possible for you to take advantage of our artificial intelligence web development.",
      ]}
      emphasizeTextIndex={[1]}
      emphasizePhrases={["hire mobile app developers"]}
    />
      <PremiumServices />
      
    <Benefits
      benifits={benefits}
      sectionTitle="Benefits of NodeJs Application Development Company"
      sectionDescription="NodeJs Application Development Services allows for flexible and dynamic web application development. Benefits of NodeJs Application Development"
    />
      <AboutUs />
    <ProcessWeFollow />
    <TechnologyStack data={Custom_Technology} />
    <Brands />
    <FAQSection />
    <Upper />
    <CTAWorkTogether />
    <CTASubscribe />
    <Common />
  </>,
  blockchain: 
    <>
    <HeroSection
      title="Trusted Blockchain Development Company"
      description="Our best blockchain development company creates quick, efficient, and safe apps for use cases such as micropayments, cryptocurrency exchanges and wallets, cryptocurrencies, crowdsourcing, payment reconciliation, and other use cases."
      buttonText="Let's Talk"
      buttonLink="#contact"
      imageSrc={BlockChain}
      imageAlt="Digital Solutions illustration"
    />
    <LogoCarousel />
    <Charts
      img={Chart}
      img2={BlockChain_1}
      h1="Web Development Market Stats"
      p1="The global web development market size was roughly USD 55500.0 million in 2021. As per our research, the market is expected to reach USD 89015.19 million by 2027, exhibiting a CAGR of 8.03% during the forecast period."
      h2="Affordable Blockchain Development Services"
      p2={"We provide regulatory-compliant Custom blockchain app development services that include various blockchain-powered features for businesses of all sizes, from large corporations to fledgling startups. As a leading Blockchain Development Company, we provide solutions tailored to your company's needs. First, our blockchain development agency determines what you need and chooses the appropriate instruments. You are more than welcome to attend meetings, you will be provided with frequent updates, and your input is precious." }
    />
    <Quotes
      title="Get 100% Customizable Blockchain Development By Experts"
      highlightedText="Simple, intuitive, affordable"
      paragraphs={[
        "We develop blockchain development solutions that identify and solve the essential features of a cross-industry standard for shared and distributed ledgers while simultaneously revolutionizing how organizations conduct transactions on a global scale. We create open, decentralized public blockchains and blockchain technology services that are accessible to the public and private blockchains customized for businesses that process hundreds or thousands of transactions per second.",
        "As a blockchain technology service provider, we also develop private blockchains for businesses that process hundreds or thousands of transactions per second. We build custom decentralized apps and integrate them into pre-existing enterprise systems so that companies may take advantage of a safe and secure environment for collaborating on various business activities and conducting commercial transactions. Our blockchain app development company provides the best-in-class solutions for codebases, blockchains, and libraries by using a team of specialist developers that provide expertise and experience.",
      ]}
      emphasizeTextIndex={[1]}
      emphasizePhrases={["hire mobile app developers"]}
    />
      <PremiumServices />
      
    <Benefits
      benifits={benefits}
      sectionTitle="Benefits of NodeJs Application Development Company"
      sectionDescription="NodeJs Application Development Services allows for flexible and dynamic web application development. Benefits of NodeJs Application Development"
    />
      <AboutUs />
    <ProcessWeFollow />
    <TechnologyStack data={Custom_Technology} />
    <Brands />
    <FAQSection />
    <Upper />
    <CTAWorkTogether />
    <CTASubscribe />
    <Common />
  </>,
  "full-stack": 
    <>
    <HeroSection
      title="Reliable Full Stack Development Services"
      description="Every business needs affordable full stack development services to thrive online and achieve better results. Our Full Stack Web Development Services ensure you stay ahead of the competition by leveraging the best technologies and practices."
      buttonText="Let's Talk"
      buttonLink="#contact"
      imageSrc={FullStack}
      imageAlt="Digital Solutions illustration"
    />
    <LogoCarousel />
    <Charts
      img={Chart}
      img2={FullStack_1}
      h1="Web Development Market Stats"
      p1="The global web development market size was roughly USD 55500.0 million in 2021. As per our research, the market is expected to reach USD 89015.19 million by 2027, exhibiting a CAGR of 8.03% during the forecast period."
      h2="Cost-Effectively Smarter Full Stack Developers for Entrepreneurs"
      p2={"Hire Full Stack Web Development Company to launch your web and mobile applications using a variety of frontend and backend technology stacks. Our best full stack development agency makes it even more affordable and dependable for entrepreneurs to hire a full-stack web developer company. You can achieve excellent results at friendly costs to your wallet if you use our end-to-end full stack development services." }
    />
    <Quotes
      title="Get 100% Customizable Full Stack Web Development from Experts"
      highlightedText="Reliable And Cost-Effective Applications"
      paragraphs={[
        "The tasks of the two other categories of developers are combined into one role by full-stack development. They are a massive benefit to your team because they can do the duties related to both of these developers. Our full stack development agency has experience creating mobile and web apps.",
        "The need for Full Stack Development with AI is increasing as businesses become more competitive. Engineers and developers gain knowledge of the stack that creates and manages comprehensive software from front to backend in our fully loaded development company. The easiest way to save time, eliminate mistakes, and get the most out of your investment is to work with a reputable Full Web Stack Development Company that can handle the process from conception to finished product.",
      ]}
      emphasizeTextIndex={[1]}
      emphasizePhrases={["hire mobile app developers"]}
    />
      <PremiumServices />
      
    <Benefits
      benifits={benefits}
      sectionTitle="Key Benefits of Our Full Stack Development Services"
      sectionDescription="Full-stack development offers the know-how required to see your project through to completion, regardless of your need for reduced development time or economic alternatives."
    />
      <AboutUs />
    <ProcessWeFollow />
    <TechnologyStack data={Custom_Technology} />
    <Brands />
    <FAQSection />
    <Upper />
    <CTAWorkTogether />
    <CTASubscribe />
    <Common />
  </>,
  wordpress: 
    <>
    <HeroSection
      title="Top WordPress Development Company in INDIA"
      description="Our skilled developers offer WordPress website development services for businesses worldwide. We offer all possible wordpress cms development services ranging from custom wordpress theme development, plugin customization, wordpress speed optimization and more."
      buttonText="Let's Talk"
      buttonLink="#contact"
      imageSrc={FullStack}
      imageAlt="Digital Solutions illustration"
    />
    <LogoCarousel />
    <Charts
      img={Chart}
      h1="Reliable Wordpress Development Company for Businesses"
      p1="As an affordable WordPress development company in USA, we have a skilled team of WordPress developers who have a decade long experience in creating WordPress sites, plugins and much more. We offer wordpress extension development, affordable, reliable and specialized WordPress development services to customers all over the world. We offer a wide range of WordPress development services including unique themes, websites, content management systems, and plugins. Contact us now for a quick quote!"
    />
    <Quotes
      title="Get WordPress Development Services by Experts"
      highlightedText="We Promise Reliability, Security And Originality"
      paragraphs={[
        "WordPress is a common CMS platform for developing visually pleasing, feature-rich, and fully functional websites. It is secure, self-hosted, and simple to install, deploy, and update. We are a best wordpress development company in USA with extensive knowledge. We deliver a range of WordPress services right from custom WordPress theme development to plugin customization to WordPress speed optimization and application like Facebook.",
        "Owing to our rich industrial experience, we can handle every kind of WordPress site with no hassle. Wordpress website development company uses its skills and experience to make the process as simple as possible. We have a dedicated team of seasoned WordPress developers who have hands-on experience and in-depth industry knowledge in WordPress development. Get in touch to discuss your next project!",
      ]}
      emphasizeTextIndex={[1]}
      emphasizePhrases={["hire mobile app developers"]}
    />
      <PremiumServices />
      
    <Benefits
      benifits={benefits}
      sectionTitle="Some Of The Key Benefits Of Using WordPress"
      sectionDescription="WordPress offers a number of advantages over another platform"
    />
      <AboutUs />
    <ProcessWeFollow />
    <TechnologyStack data={Custom_Technology} />
    <Brands />
    <FAQSection />
    <Upper />
    <CTAWorkTogether />
    <CTASubscribe />
    <Common />
  </>,
  shopify: 
   <>
    <HeroSection
      title="Shopify Development Services in INDIA"
      description="At Kryzen, we are dedicated to providing top-notch Shopify Website Development Services suited to your particular company's demands as an industry leader. Our team of knowledgeable Shopify specialists is here to support you to be successful in the ever-changing e-commerce industry."
      buttonText="Let's Talk"
      buttonLink="#contact"
      imageSrc={Shopify}
      imageAlt="Digital Solutions illustration"
    />
    <LogoCarousel />
    <Charts
      img={ShopifyDev}
      h1="Hire Certified Shopify Developers"
      p1="Being the only certified Shopify professionals in our team, we are the go-to Shopify website creation company. With our expert Shopify website building services, we completely revamp your Shopify store. With our expert Shopify website building services, we completely revamp your Shopify store. Explore and grow your online presence to new levels! With our expert Shopify website building services, we completely revamp your Shopify store. Looking to hire a professional Shopify developer? Contact us now!"
    />
    <Quotes
      title="Designing high-quality Shopify applications"
      highlightedText="Boost Your Sales With Our Expert Shopify Development Services"
      paragraphs={[
        "Integrate Shopify applications to improve the functionality of your shop. We can connect the appropriate applications to improve your shop's efficiency, from payment gateways and shipping options to marketing and analytics tools. Because more people use mobile devices to purchase online, we ensure your Shopify store is optimized for a responsive and fluid mobile experience.",
        "Websites that take a long load may lose sales and annoy visitors. We are the best  e-commerce mobile app development company that provides Best Shopify Development Services guarantee your shop loads fast and effectively. As a Best Shopify Development Company in USA, we use tried-and-true methods to raise your store's search engine ranks and attract qualified customers. Our Shopify Development Company provides seamless migration services if you're already using another platform and wish to switch to Shopify to guarantee a smooth transfer without any data loss.",
      ]}
      emphasizeTextIndex={[1]}
      emphasizePhrases={["hire mobile app developers"]}
    />
      <PremiumServices />
    <Benefits
      benifits={benefits}
      sectionTitle="Some Of The Key Benefits Of Using Shopify"
      sectionDescription="With a vast library of extensions and developer-friendliness, Shopify can easily set up your online store and sell products. "
    />
      <AboutUs />
    <ProcessWeFollow />
    <TechnologyStack data={Custom_Technology} />
    <Brands />
    <FAQSection />
    <Upper />
    <CTAWorkTogether />
    <CTASubscribe />
    <Common />
  </>,
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


