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
import AiGen from "../public/image copy.png";
import Type_1 from "../public/typescript_development_ic_1.svg";
import Type_2 from "../public/typescript_development_ic_2.svg";
import Type_3 from "../public/typescript_development_ic_3.svg";

const Common = () => null;

const Charts = ({ img, img2, h1, p1, h2, p2 }) => {
  
  if (!img && !img2 && !h1 && !p1 && !h2) {
    return null;
  }

  return (
    <section className="py-10 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-12">

        
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

const Iso_TechCards = [
  {
    "title": "Xamarin + C#",
    "description": "By allowing codebases to be shared between the iOS and Android platforms, this combination can expedite deployment and maintenance while streamlining the development process.",
  },
  {
    "title": "Swift + Xcode",
    "description": "Swift is a contemporary, user-friendly language that helps developers save time with its clear syntax and automated management mechanisms.",
  },
  {
    "title": "Swift/SwiftUI + Node JS",
    "description": "Our developers use this combination to create iOS apps for real-time communication and e-commerce platforms, among other applications that need server-side functionality.",
  },
  {
    "title": "Swift/SwiftUI + Python",
    "description": "Make use of Python's prowess in automation, machine learning, data processing, and backend programming to improve the features and performance of your iOS apps.",
  }
];

const Flutter_TechCards = [
  {
    "title": "Flutter + Python",
    "description": "Because of this synergy, our developers combine the expressive UI capabilities of Flutter with the flexibility and strength of Python to create cross-platform applications.",
  },
  {
    "title": "Flutter + Dart",
    "description": "The ability to create high-performance applications with a single codebase is made possible by the smooth integration of Flutter’s UI toolkit with Dart’s language capabilities.",
  },
  {
    "title": "Flutter + Firebase",
    "description": "The ideal combo for developing applications that will enable you to launch your MVP more quickly and create feature-rich, scalable, performant, and easily maintainable apps is a comprehensive toolset.",
  },
   {
    "title": "Flutter + Node.js",
    "description": "The best backend to utilize with Flutter is Node.js for creating backend applications that are fully written in JavaScript and RESTful APIs, which makes app development easier and promotes coherence in architecture.",
  },
  {
    "title": "Flutter + MongoDB",
    "description": "Our developers create robust, scalable, feature-rich apps that provide a flawless user experience across all platforms by combining Flutter with MongoDB.",
  },
];

const Angular_TechCards = [
  {
    "title": "Angular + Golang",
    "description": "Applications created with Golang are quick, dependable, and scalable because of its concurrency model and performance enhancements, which enhance AngularJS's frontend features.",
  },
  {
    "title": "Angular + PHP",
    "description": "Through the combination of Angular and PHP, developers may create applications with a wealth of features and smooth front-end and back-end connections.",
  },
  {
    "title": "Angular + Django",
    "description": "Django's sophisticated features, such as its admin interface, built-in security methods, and ORM system, can be utilized by developers in conjunction with AngularJS on the frontend.",
  },
   {
    "title": "Angular + FastAPI",
    "description": "The current, high-performance web framework FastAPI and AngularJS together provide a potent combo for online application development. FastAPI is used to build APIs with Python.",
  },
  {
    "title": "Angular + Node",
    "description": "Our developers can use JavaScript on the client and server sides to create full-stack web apps that are highly scalable and performant by combining AngularJS with Node.js.",
  },
  {
    "title": "Angular + Laravel",
    "description": "An amazing user experience may be achieved by combining Angular and Laravel while developing an enterprise application, e-commerce platform, or content management system.",
  }
];

const ReactNative_techCards = [
  {
      "title": "Wearable App Integration Service",
    "description": "Our skilled developers are masters in integrating wearable apps, guaranteeing compatibility across many devices, and providing outstanding user experiences.",
    icon: <img src={cuttingEdge_1} alt="Icons" />,
  },
  {
   "title": "Beacons and Location-Based Services",
    "description": "We use Beacons and location-based services to offer a wide range of features, including check-ins, location-based alerts, real-time mapping and navigation, and customized suggestions.",
    icon: <img src={cuttingEdge_2} alt="Icons" />,
  },
  {
    "title": "AI Development Service",
    "description": "Unlock the power of artificial intelligence with AI Development Services that helps businesses integrate AI into applications to automate processes, enhance decision-making, and deliver personalized user experiences.",
    icon: <img src={cuttingEdge_3} alt="Icons" />,
  },
  {
    "title": "Augmented Reality Development Service",
    "description": "Engage your audience with Augmented Reality Development Services overlay digital content into real world, creating interactive experiences that boost engagement and learning enhancing customer engagement.",
    icon: <img src={cuttingEdge_5} alt="Icons" />,
  },
  {
    "title": "Low-Code No-Code Development Service",
    "description": "Accelerate app development with Low-Code No-Code Development Services a platform that empowers businesses to create scalable, robust applications quickly without extensive coding.",
    icon: <img src={cuttingEdge_6} alt="Icons" />,
  },
  {
    "title": "Super Apps Development Service",
    "description": "Redefine digital experiences with Super Apps Development Services, Design for seamless user experience, these super apps increase engagement, enhance convenience, and drive revenue growth.",
    icon: <img src={cuttingEdge_7} alt="Icons" />,
  },
];

const React_TechCards = [
  {
    "title": "MERN Stack App Development",
    "description": "Select our first-rate development services using the MERN Stack (Node.js, MongoDB, Express, and React). Our expertise is in developing intuitive web apps that meet user demands while delivering exceptional performance.",
    icon: <img src={cuttingEdge_1} alt="Icons" />,
  },
  {
    "title": "MEAN Stack App Development",
    "description": "When it comes to MEAN Stack development services, we are a reliable partner. Our team is skilled in using frameworks like AngularJS and Mongoose to create web apps that have several features and perform very well.",
    icon: <img src={cuttingEdge_2} alt="Icons" />,
  },
  {
    "title": "Fast API Development",
    "description": "Our group specializes in creating dynamic, high-performing online apps by using the FastAPI framework. Utilizing the newest Python frameworks, we guarantee that your project shines in terms of functionality, user experience, and smooth integration thanks to our knowledge of tools like Pydantic and Starlette.",
    icon: <img src={cuttingEdge_3} alt="Icons" />,
  },
  {
    "title": "Django App Development",
    "description": "View our Django development services, where we create robust, effective online applications using the Django framework. Our services are made to improve your online solutions, making them more dependable and speedier from the ground up.",
    icon: <img src={cuttingEdge_7} alt="Icons" />,
  },
  {
    "title": "Laravel Development",
    "description": "With Laravel development expertise dating back to 2011, we use Composer and Blade, among other technologies, to build scalable, effective, and powerful online apps. Together, we can use our Laravel knowledge to turn your concept into a high-performing product.",
    icon: <img src={cuttingEdge_5} alt="Icons" />,
  },
  {
    "title": "Node Js Development",
    "description": "For the purpose of developing scalable and quick online apps, we provide Node.js development services. We can handle complicated jobs and heavy traffic quickly by using JavaScript's event-driven nature for efficient real-time applications and a single JavaScript codebase for both the server and client sides.",
    icon: <img src={cuttingEdge_6} alt="Icons" />,
  }

];

const Php_Tech = [
  {
    "title": "PHP Core + AngularJS",
    "description": "When combined with PHP, AngularJS allows for the creation of interactive user interfaces and real-time data changes while developing dynamic web applications.",
    icon: <img src={cuttingEdge_1} alt="Icons" />,
  },
  {
    "title": "Vue.js + Core PHP",
    "description": "We guarantee improved responsiveness, interactivity, and overall user engagement with Vue.js running the UI and PHP powering the server.",
    icon: <img src={cuttingEdge_2} alt="Icons" />,
  },
  {
    "title": "React JS + Core PHP",
    "description": "We guarantee a smooth and dynamic user experience that enthralls and engages users by effortlessly integrating React JS components within PHP-driven apps.",
    icon: <img src={cuttingEdge_3} alt="Icons" />,
  },
  {
    "title": "Lumen + Laravel",
    "description": "Lumen's speed and ease of use combined with Laravel's adaptability allows us to build high-performance API backends or fully functional web applications.",
    icon: <img src={cuttingEdge_3} alt="Icons" />,
  },
   {
    "title": "Angular + Laravel",
    "description": "Laravel powering the server-side functionality, we can create dynamic and interactive user interfaces that improve user experiences and increase engagement.",
    icon: <img src={cuttingEdge_3} alt="Icons" />,
  },
];

const Aiml_Tech = [
  {
    "title": "Scikit-learn + Python",
    "description": "This combination works especially well for applications that don't need the deep learning capabilities of frameworks like TensorFlow, as well as educational reasons and data science projects.",
  },
  {
    "title": "MLlib + Apache Spark",
    "description": "This combination is ideal for big data analytics, which involves processing and analyzing large amounts of data effectively, like in fraud detection and recommendation systems.",
  },  
  {
    "title": "Edge Devices + TensorFlow Lite",
    "description": "This combination is ideal for applications like autonomous drones and smart home devices, where offline capabilities and low latency are critical.",
  },
  {
    "title": "Power BI + Azure AI",
    "description": "This combination is appropriate for business applications like customer behavior research and sales forecasting that require scalable AI systems with potent data visualization capabilities.",
  },
  {
    "title": "Kubernetes + Docker ",
    "description": "Applications can be containerized with Docker, guaranteeing consistency between various development and deployment environments. An effective orchestration tool for scaling containerized systems is Kubernetes.",
  }
];

const BlockChanin_Tech = [
  {
    "title": "Blockchain + Artificial Intelligence (AI)",
    "description": "Integrating AI with blockchain can improve data processing and decision-making in decentralized networks. AI algorithms may analyze vast volumes of data on the blockchain, enhancing automation, fraud detection, and predictive analysis.",
  },
  {
    "title": "Blockchain + Internet of Things (IoT)",
    "description": "For supply chain management, smart homes, and industrial applications, blockchain offers a decentralized framework for controlling data and interactions between IoT devices, guaranteeing security and trust.",
      },
  {
    "title": "Blockchain + Cloud Computing",
    "description": "Blockchain gives an additional layer of decentralized security, while cloud computing offers scalable infrastructure. We use this combination to implement decentralized apps (dApps) globally while preserving effective data processing and storage capacities.",
  },
   {
    "title": "Blockchain + Decentralized Finance (DeFi)",
    "description": "DeFi platforms—decentralized substitutes for conventional financial services—are built on top of blockchain technology. Asset management, trading, and lending are all made possible by combining blockchain technologies with DeFi applications.",
  },
  {
    "title": "Blockchain + Smart Contracts",
    "description": "With the conditions of agreements encoded into code, smart contracts are self-executing contracts. Smart contract integration with blockchain minimizes the need for middlemen and ensures trustless execution by automating and securing complicated transactions.",
  },
  {
    "title": "Blockchain + Interoperability Protocols",
    "description": "Multiple blockchain networks may easily communicate and share data because of interoperability protocols like Polkadot and Cosmos. Developers can design more scalable and diverse applications that take advantage of cross-chain features.",
  }
];

const Fullstack_Tech = [
  {
    "title": "Express.js + Node.js",
    "description": "Express.js is a lightweight web application framework for Node.js that offers powerful functionality for developing web applications and APIs. Node.js is a runtime environment that lets you run JavaScript on the server side.",
  },
  {
    "title": "JavaScript + HTML/CSS/PHP",
    "description": "PHP is a server-side scripting language that is frequently used to construct dynamic webpages; client-side presentation and interaction are handled by HTML, CSS, and JavaScript.",
  },
  {
    "title": "MEAN Stack",
    "description": "Our full-stack developers create scalable, interactive, and effective online apps that rock in terms of responsiveness and performance by combining Node.js and Angular.js's dynamic front-end capabilities with Express.js for the backend.",
  }
];

const isoBenefits = [
  {
    "title": "High-Quality User Experience",
    "description": "iOS apps are guaranteed to have flawless user interfaces, excellent performance, and simple designs according to Apple's strict quality criteria. The goal of iOS development services is to provide a superior user experience that increases user engagement and pleasure."
  },
  {
    "title": "Enhanced Security Features",
    "description": "The integration of advanced security procedures, such as data encryption, secure app distribution, and biometric identification, into iOS development services, guarantees the safety of your app against security breaches."
  },
  {
    "title": "Loyal User Base",
    "description": "Apple customers are renowned for their devotion to the brand and their readiness to spend money on premium services and apps."
  },
  {
    "title": "Global Market Reach",
    "description": "iOS has a significant global presence, especially in North America and Europe, while having a larger market share in premium markets. By focusing on iOS development, you can reach a market that appreciates high quality and is prepared to pay for exceptional products."
  },
  {
    "title": "Swift and Scalable Development",
    "description": "Apple’s programming language, Swift, provides a more dependable and rapid development process. iOS development services enable companies to create high-performing, scalable apps with less time-to-market and maintenance expenses when paired with potent frameworks like ARKit and SwiftUI."
  },
  {
    "title": "Seamless Ecosystem Integration",
    "description": "iOS apps’ seamless integration with other Apple goods and services, such as the iPad, macOS, Apple Watch, and iPad, can further improve the user experience. Thanks to this connectivity, businesses can now develop apps with greater functionality and reach across all Apple devices."
  }
];

const flutterBenefits = [
  {
    "title": "Cross-Platform Development",
    "description": "With Flutter, developers can use a single codebase to build applications for both iOS and Android. For companies trying to create a cohesive presence, the user experience's uniformity across several platforms is a big plus."
  },
  {
    "title": "Fast Development with Hot Reload",
    "description": "Its ability to hot reload code in real-time without requiring the user to restart the application is one of Flutter's best advantages. Hot reload speeds up and improves the efficiency of the development process."
  },
  {
    "title": "Rich and Customizable UI",
    "description": "Easily customizable to meet any design need, Flutter has a large library of pre-designed widgets. For user retention and engagement, it is essential to have a UI that is both aesthetically pleasing and consistent."
  },
  {
    "title": "Exceptional Work",
    "description": "Flutter excels in performance, which is a crucial component of an app's success. Fast loading times and fluid animations are guaranteed by the powerful rendering engine upon which it is based."
  },
  {
    "title": "Strong Community and Support",
    "description": "Developer support for Flutter is rising quickly, and it has the backing of Google. A plethora of tools, plugins, and libraries are available thanks to this robust support network, which facilitates problem-solving throughout development."
  },
  {
    "title": "Seamless Integration with Firebase",
    "description": "Flutter integrates well with Firebase, Google's all-inclusive platform for online and mobile development, which is another benefit of adopting it. This integration makes creating, managing, and growing apps more effective."
  }
];

const reactNativeBenefits = [
  {
    "title": "Mobile App UI/UX Design",
    "description": "By considering market trends and creating best practices that provide an enhanced app user experience, we can help you create a unique, sophisticated, and user-friendly mobile app user interface."
  },
  {
    "title": "MVP Development",
    "description": "By creating an MVP with the necessary functionality, we increase your trust in the app idea. This enables you to swiftly release a test app onto the market and attract early users before moving on to complete app development."
  },
  {
    "title": "Custom App Development",
    "description": "Whether you're developing a mobile app for a business or a community, we can help you realize your unique idea by incorporating cutting-edge features that will make it stand out from the crowd."
  },
  {
    "title": "Startup App Development",
    "description": "Our world-class app development solutions will help your startup take off by helping startups get the best app solution possible with the use of leading app development frameworks."
  },
  {
    "title": "Enterprise App Development",
    "description": "Enhance your business operations through mobility by integrating third-party integrations and industry-leading technologies into your mobile app solutions to increase revenue and business operations."
  },
  {
    "title": "Embedded IoT App Development",
    "description": "To control and fully exploit your IoT-enabled environment, get a highly customized embedded software solution built with cloud and AI/ML technology."
  }
];

const reactBenifits = [
  {
    "title": "AI/ML",
    "description": "With AI/ML integration in web apps, we develop smarter, more efficient, and user-friendly online applications, ranging from simple chatbots for immediate assistance to dynamic content suggestions and predictive analytics."
  },
  {
    "title": "Big Data Analytics",
    "description": "Through Big Data analytics, we help businesses take advantage of their actionable insights to improve decision-making and provide measurable business results."
  },
  {
    "title": "Internet of Things (IoT)",
    "description": "We can give web application development solutions with smooth access to IoT-enabled devices for monitoring real-time data and automating operations for more comfort and efficiency, thanks to our experience with IoT web development."
  }
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

const vueBenefits = [
  {
    "title": "Light Weight",
    "description": "Vue.js is one of the most lightweight front-end frameworks out there. Due to its small size, Vue.js framework takes lesser time to download on client side.",
    icon: Maintain,
  },
  {
    "title": "Simplicity And Ease of Use",
    "description": "Team with a basic understanding of HTML and JS, can get started with Vue.js, and understand it.",
    icon: Accountibility,
  },
  {
    "title": "Flexible",
    "description": "Vue.js is best known because of its highly stable components-based flow.",
    icon: Crm,
  },
  {
    "title": "Fast & Secure",
    "description": "Minimum Viable Product can be made a lot faster due to easy setup of Vue.js application.",
    icon: Maintain,
  },
  {
    "title": "Integration",
    "description": "Vue.js can be easily integrated with other existing applications",
    icon: Accountibility,
  },
  {
    "title": "Performance",
    "description": "With the help of the Virtual DOM, it always delivers high performance.",
    icon: Crm,
  },
  {
    "title": "Easy Handling",
    "description": "Vue.js MVVM architecture handles HTML blocks easily and effectively.",
    icon: Maintain,
  },
  {
    "title": "Speed",
    "description": "For fast development and less time to market Vue.js is the preferred choice for developers",
    icon: Crm,
  },
  {
    "title": "Significant Support",
    "description": "Get support from a Vue.js community of developers and consultants with ease.",
    icon: Accountibility,
  }
];

const netBenefits = [
  {
    "title": "Core ASP.NET",
    "description": "We assist you in developing cutting-edge online applications, mobile backends, and cloud-based Internet of Things applications using the open-source, cross-platform ASP.NET Core framework."
  },
  {
    "title": "ASP.NET",
    "description": "You can create dynamic websites, apps, and services with this open-source, server-side web application framework if you have a strong understanding of ASP.NET."
  },
  {
    "title": "ASP.NET MVC",
    "description": "We assist you in creating a lightweight development model by combining ASP.NET features and master pages with an ASP.NET MVC web application framework."
  },
  {
    "title": "SharePoint",
    "description": "To categorize, locate, and distribute the appropriate information needed for the creation of your business application, make the most of the SharePoint platform."
  },
  {
    "title": "SQL Server",
    "description": "Microsoft SQL database server is what we use to store and retrieve data when other software asks for it. This software can run on a different network or an already-existing machine."
  },
  {
    "title": "Visual Studio",
    "description": "We create feature-rich C# or .NET apps utilizing the IDE with the assistance of Visual Studio. It enables the editing of code, interface design, performance analysis, and other tasks."
  }
];

const phpBenefits = [
  {
    "title": "Adaptable",
    "description": "PHP is very scalable and can manage big traffic levels without experiencing performance issues. A PHP application can easily scale up or down based on the number of servers added."
  },
  {
    "title": "Safety",
    "description": "PHP is protected against typical online vulnerabilities like SQL injection and cross-site scripting (XSS) by built-in security mechanisms. Furthermore, there is a sizable PHP development community that consistently releases security fixes and other upgrades for the language."
  },
  {
    "title": "Easy Integration",
    "description": "Many databases and third-party apps, such as MySQL, PostgreSQL, and MongoDB, can be integrated with PHP. This facilitates the process for developers to create apps that interface with current systems."
  },
  {
    "title": "Open-source",
    "description": "Hypertext Preprocessor, or PHP, is an open-source technology with freely accessible source code. Anyone can use it without needing to pay for a license or incur any costs because it is free."
  },
  {
    "title": "PHP CMSs",
    "description": "PHP is a great choice for web development because it is used in leading CMSs (Content Management Systems). It is the primary programming language used by WordPress, Drupal, Joomla, Magento etc."
  },
  {
    "title": "Program",
    "description": "Since PHP is an open-source program, it provides developers with a great deal of flexibility in creating solutions that are tailored to the specific demands of their clients."
  }
];

const nodejsBenefits = [
  {
    "title": "Cross-platform",
    "description": "It is a cross-platform language for designing web apps that work on several devices and operating systems. Without platform-specific coding, JavaScript Application allows organizations to access a large audience on desktops, laptops, tablets, and mobile devices.",
    "icon": Maintain
  },
  {
    "title": "Interfaces rich",
    "description": "JavaScript allows Rich and Interactive User Interfaces to improve user experience. We create real-time UI components, animations, and transitions using React, Angular, and Vue.js, delivering a more immersive and intuitive user experience.",
    "icon": Maintain
  },
  {
    "title": "Development of Server and Client",
    "description": "JavaScript-based server-side applications may be built using frameworks like Node.js, employing the same language and tools across the development stack. Unity simplifies development, speeding time-to-market and simplifying maintenance.",
    "icon": Maintain
  },
  {
    "title": "Large Ecosystem",
    "description": "JavaScript provides several frameworks for developing applications of varying sizes and complexity, from front-end to back-end. We offer hundreds of open-source packages and modules to speed development and improve functionality.",
    "icon": Maintain
  },
  {
    "title": "Fast Growth",
    "description": "Web application developers can experiment, iterate, and deploy new features quickly. Arrow functions, template literals, and restructuring in JavaScript speed up development and decrease boilerplate code.",
    "icon": Maintain
  },
  {
    "title": "Community Support",
    "description": "From online forums and communities to conferences and meetings, it helps organizations keep up with web development trends and best practices. Community support encourages JavaScript ecosystem cooperation, innovation, and progress.",
    "icon": Maintain
  }
];

const javaServices = [
  {
    "title": "Java Web Development",
    "description": "Our Java development team builds scalable, secure and reliable Java application for various business across globe.",
    icon: Maintain,
  },
  {
    "title": "Java/J2EE Development",
    "description": "Our development team provides robust, scalable & secure application by using the advanced framework J2EE for your enterprise.",
    icon: Accountibility,
  },
  {
    "title": "Enterprise Java Development",
    "description": "Our programmers develop enterprise-centric Java development services for your mission critical business applications.",
    icon: Crm,
  },
  {
    "title": "API Development & Integration",
    "description": "We securely integrate third-party APIs to extend functionality of your web applications as per your business needs.",
    "icon": Maintain,
  },
  {
    "title": "Java Mobile Development",
    "description": "Our Java experts helps the enterprises to bring their develop business in the mobile marketplace through elegantly designed mobile application.",
    icon: Accountibility,
  },
  {
    "title": "Java Software Development",
    "description": "We build with advanced Java framework automate complex business workflow of your organization.",
    icon: Crm,
  },
  {
    "title": "Java Migration Service",
    "description": "Our team has great expertise in migrating the business platform to Java-based framework that ensures a better prospect in the future.",
    "icon": Maintain,
  },
  {
    "title": "Maintenance & Support",
    "description": "Complete support and maintenance services to ensure smooth workflow of the application of Java web portals and applications.",
    icon: Accountibility,
  },
  {
    "title": "Dedicated Java Developer Team",
    "description": "Expand your Java development capabilities with our highly experienced in-house Java team for your business.",
    icon: Crm,
  }
];

const javaBenefits = [
  {
    "title": "Skills and Experience",
    "description": "Professional Java developers know its features, libraries, and frameworks well. With their expertise, your application is designed utilizing industry best practices for high-quality, efficient, and dependable results.",
    icon: Maintain,
  },
  {
    "title": "Independent Platform",
    "description": "The write once, run anywhere functionality of Java allows programs to operate on any platform that supports the Java Virtual Machine. Businesses deploying apps across varied settings without rewriting code benefit from platform independence.",
    icon: Accountibility,
  },
  {
    "title": "Performance & Scalability",
    "description": "Java can scale to accommodate huge loads and sophisticated applications and scale with your company, whether you're building a tiny app or an enterprise solution. High-performance applications also benefit from Java's memory management and multithreading.",
    icon: Crm,
  },
  {
    "title": "Strong security",
    "description": "Java developers can use encryption, authentication, and access control. Java's built-in security features and experienced developers' best practices secure your application and sensitive data from attacks and vulnerabilities.",
    icon: Crm,
  },
  {
    "title": "Community Support",
    "description": "The Java ecosystem of libraries, frameworks, and tools speeds development and improves functionality. Developers may also use Java's huge community assistance to find tools, documentation, and forums for troubleshooting and innovation.",
    icon: Accountibility,
  },
  {
    "title": "Secure",
    "description": "While inheritance permits the creation of new classes from pre existing ones, encapsulation entails hiding a class's implementation details from other objects. These characteristics make Java a secure language for a range of applications, especially when paired with its strict security regulations.",
    "icon": Maintain
  }
];

const aimiBenefits = [
  {
    "title": "Enhanced Efficiency and Productivity",
    "description": "Using advanced AI solutions, businesses may increase overall efficiency and production by streamlining procedures, automating repetitive jobs, and completing complicated computations quickly and accurately."
  },
  {
    "title": "Data-oriented Decision-making",
    "description": "Businesses with a strong online presence can benefit greatly from the accurate, fast, and large-scale data analysis and actionable insights provided by AI-powered systems, which support data-driven strategy and success."
  },
  {
    "title": "Custom Experience Enhancement",
    "description": "Artificial intelligence (AI)-driven technologies such as chatbots, personalization algorithms, and predictive analytics increase customer expectations for your platform services by improving customer experience."
  },
  {
    "title": "Market Competitiveness",
    "description": "The integration of AI in commercial applications delights clients with individualized services by efficiently utilizing data. Additionally, it automates time-consuming procedures, giving you more time to focus on original business ideas."
  },
  {
    "title": "AI Integration Services",
    "description": "Our AI integration services guarantee seamless adoption by integrating AI-driven tools and models with your existing applications. We assist you in maximizing operations by smoothly integrating AI into your enterprise environment."
  },
  {
    "title": "Data Engineering",
    "description": "We create and put into place reliable data pipelines that provide clear, accessible, and well-organized data. We offer the framework required for AI and machine learning projects to be successful, from data warehousing to ETL procedures."
  }
];

const blockChainBenefits = [
  {
    "title": "Improved data integrity and security",
    "description": "The distributed nature of blockchain and cryptographic techniques guarantees that data is tamper-proof and unchangeable. For sectors such as banking, healthcare, and supply chains—where data security and integrity are paramount—this makes it perfect."
  },
  {
    "title": "Transparency and Confidence",
    "description": "Blockchain records events in an open and verifiable way, therefore facilitating the tracking of data and transactions from their source. Lowering the chances of manipulation and fraud helps stakeholders to develop trust."
  },
  {
    "title": "Efficiency of Cost",
    "description": "Blockchain lowers running expenses by removing middlemen and automating smart contract procedures. Faster and more effective transactions help to reduce third-party fees and manual procedure-associated costs."
  },
  {
    "title": "Control and Decentralization",
    "description": "By allowing consumers more autonomy over their data and assets, blockchain eliminates the need for centralized authority. This decentralization enables companies to control and safeguard their activities on their own, hence producing more strong and autonomous systems."
  },
  {
    "title": "Interoperability and Scale",
    "description": "Blockchain networks are becoming more scalable and compatible as technologies such as Polkadot, Cosmos, and layer-2 solutions evolve. This allows flawless cross-chain transactions, therefore offering flexibility and new business model capability."
  },
  {
    "title": "Future-Proof Creation",
    "description": "Blockchain provides fresh chances for development and innovation, whether that means using DeFi, implementing distributed applications (dApps), or embracing self-sovereign identification solutions."
  }
];

const fullStachBenefits = [
  {
    "title": "Comprehensive Expertise",
    "description": "Because we are proficient in front-end and back-end technologies, our full-stack engineers can manage every facet of development. They manage databases, create strong server-side logic, and create responsive user interfaces, all without compromising on functionality."
  },
  {
    "title": "Cost-Efficient",
    "description": "Development cycles are accelerated through speedier decision-making and more efficient processes made possible by the ability to manage the complete project stack. Our full-stack development services are quite budget friendly."
  },
  {
    "title": "Faster Time to Market",
    "description": "Quicker changes between development phases are possible because our full-stack developers can manage various project aspects. Project schedules are accelerated, and this all-encompassing strategy ensures speedy deployment."
  },
  {
    "title": "Enhanced Flexibility",
    "description": "Our Full-stack developers possess flexibility and are adept at switching between jobs. Whether you need help with database query optimization, front-end experience improvement, or application deployment, they can help."
  },
  {
    "title": "Better Problem-Solving",
    "description": "The ability to comprehend both client-side and server-side operations gives full-stack engineers an advantage in identifying and resolving problems throughout the application stack. Their thorough comprehension leads to improved performance and fewer bottlenecks."
  },
  {
    "title": "End-to-End Project Ownership",
    "description": "The entire development process, from conception to deployment and beyond, can be fully owned by full-stack developers. We ensure responsibility, consistency, and a clear vision throughout the project."
  }
];

const wordpressBenefits = [
  {
    "title": "Ease Of Use",
    "description": "WordPress is easy to use technology and with an intuitive interface. This means anyone can easily add new pages, content, images, etc.",
    icon: Maintain,
  },
  {
    "title": "SEO-Friendly",
    "description": "The programming language behind WordPress is immaculate and simple, making it easy for you to rank your pages on search engines to read and index.",
    icon: Scalability,
  },
  {
    "title": "Customizable",
    "description": "You can totally customize the site's look and feel to make your brand stand away from competitors and a unique experience for your visitors.",
    icon: Crm,
  },
  {
    "title": "Plugins",
    "description": "You can easily add any new feature like calendar, contact form, etc., to your site as WordPress makes this possible with its plugins, most of which are free.",
    icon: Accountibility,
  },
  {
    "title": "Scalable",
    "description": "WordPress grows with your business, and you can add several pages or blog posts on your site without compromising upon the performance and speed.",
    icon: Maintain,
  },
  {
    "title": "Multi-User Site",
    "description": "In WordPress CMS, you can set up several users for the website and provide access levels and capabilities to each user as per your choice.",
    icon: Crm,
  }
];

const sopifyBenefits = [
  {
    "title": "Shopify store development",
    "description": "Our Shopify Store Development Services ensure your business is prepared for smooth operation, from picking the appropriate theme to setting up payment gateways and delivery choices.",
    icon: cuttingEdge_1,
  },
  {
    "title": "Shopify theme development",
    "description": "Custom Shopify themes our designers and developers make are tailored to match your brand’s identity. Our Shopify Custom Theme Development ensures the design is aesthetically pleasing and user-friendly.",
    icon: cuttingEdge_2,
  },
  {
    "title": "Shopify store optimization",
    "description": "We guarantee that your Shopify Store Setup looks and performs smoothly across all platforms and screen sizes, emphasizing mobile-first design and delivering a consistent and enjoyable experience for all visitors.",
    icon: cuttingEdge_3,
  },
  {
    "title": "Shopify store Integration",
    "description": "We are skilled in adding third-party applications and creating original ones to increase the functionality of your shop. We use the best applications to maximize the functioning of your shop, from marketing and analytics to inventory control.",
    icon: cuttingEdge_7,
  },
  {
    "title": "Shopify Marketing and SEO",
    "description": "Our team uses industry best practices to optimize your shop for search engines, resulting in increased exposure and organic traffic. Additionally, we provide pointers on efficient marketing techniques that can improve your internet visibility and promote sales.",
    icon: cuttingEdge_5,
  },
  {
    "title": "Custom Website Development",
    "description": "We are experts in enhancing the functionality of your shop to provide Shopify Custom Website Development Services for seamless customer experiences.",
    icon: cuttingEdge_6,
  }
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

const isoTech = [
   {
    category: "Programming Languages",
    items: ["Swift", "flutter", "React-Native"]
  },
  {
    category: "Frameworks",
    items: ["Uikit", "AVfoundation", "ARKit", "Corebluetooth","AVKit","Quartzcore"]
  },
  {
    category: "Libraries",
    items: ["Alamofire", "Firebase", "Swiftyjson", "MbprogresshUD","Kingfisher"]
  },
  {
    category: "Database",
    items: ["Firebase", "SQLite", "Core Data", "Realm"]
  },
  {
    category: "Tools & Utilities",
    items: ["Swift UI", "Xcode"]
  },
   {
    category: "Others",
     items: ["Chart", "Map", "Chat", "Audio/video call", "Audio/video Player", "Localization"]
  },
];

const flutterTech = [
  {
    "category": "Frameworks",
    "items": ["Flutter", "Dart plugins", "Flutter SDK", "Dart SDK"]
  },
  {
    "category": "Tools & Utilities",
    "items": ["Android Studio", "Visual Studio Code", "IntelliJ", "Version control tools (Git, GitLab, Bit Bucket)"]
  },
  {
    "category": "Database",
    "items": ["Hive", "ObjectBox", "SQLite", "Firebase realtime database", "Firestore", "Sembast", "StorageMoor"]
  },
  {
    "category": "Plugins & Integrations",
    "items": [
      "Firebase (All service)",
      "Provider",
      "Payment Gateways (Stripe, Braintree, Google Pay, Razorpay)",
      "Social Sign-In (Facebook, Google, Apple)",
      "Shared preferences",
      "Image_picker",
      "In-app Purchase",
      "Map flutter_ffmpeg",
      "AWS Amplify",
      "AWS datastore",
      "Freezed",
      "JSON serializable",
      "flutter_local_notifications",
      "BLoC"
    ]
  },
  {
    "category": "CI/CD Tools",
    "items": ["Travis", "Cirrus", "Codemagic", "Bitrise", "Fastlane"]
  }
];

const reactNativeTech = [
  {
    "category": "iOS",
    "items": ["Swift", "Objective-C", "X-Code", "SwiftUI"]
  },
  {
    "category": "Android",
    "items": ["Java", "Kotlin", "Android Studio", "Version control tools (Git, GitLab, Bit Bucket)"]
  },
  {
    "category": "Cross Platform",
    "items": ["Flutter", "React Native", "Ionic", "NativeScript"]
  },
  {
    "category": "Database",
    "items": ["Firebase", "Redis", "PostgreSQL", "MongoDB", "MySQL", "DynamoDB", "SQLite"]
  },
  {
    "category": "Design Tool",
    "items": ["Figma", "Sketch", "Adobe XD", "Zeplin", "Photoshop", "Illustrator", "After Effects", "InVision"]
  }
];

const angularTech = [
  {
    "category": "Frameworks",
    "items": ["AngularJS", "Angular 2+", "NGRX (Angular + Redux)"],
    icon: FaCube,
  },
  {
    "category": "Libraries",
    "items": [
      "Angular Google Maps",
      "Bootstrap 3+",
      "Angular Material",
      "PrimeNG",
      "NG-Bootstrap",
      "RxJs",
      "Syncfusion",
      "KendoUI",
      "FullCalendar",
      "@Types/Fabric (For Canvas)",
      "@Types/Cropperjs (For Cropping)"
    ],
    icon: FaDesktop,
  },
  {
    "category": "Databases",
    "items": ["PostgreSQL", "RethinkDB", "MongoDB", "Firebase", "CouchDB", "MySQL"],
    icon: FaDatabase,
  },
  {
    "category": "Tools & Utilities",
    "items": ["Sublime", "VS Code", "Webstorm"],
    icon: FaTasks,
  }
];

const reactTech = [
  {
    "category": "Frontend",
    "items": ["HTML5", "CSS3", "JavaScript", "Angular", "React", "Vue.js", "Bootstrap", "Typescript", "Backbone.js"]
  },
  {
    "category": "Full-stack Frameworks",
    "items": ["NestJS", "Koa.js", "Nuxt.js", "MeteorJS", "Next.js"]
  },
  {
    "category": "Backend Frameworks",
    "items": ["Node.js", "Express.js", "PHP", "Laravel", "Python", "Django", "Flask", "FastAPI"]
  },
  {
    "category": "Database Management",
    "items": ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "GraphQL"]
  },
  {
    "category": "Monitoring and Logging Tools",
    "items": ["Prometheus", "Grafana", "Elasticsearch", "Logstash", "Kibana"]
  },
  {
    "category": "Code Management",
    "items": ["Bitbucket", "GitHub", "GitLab", "SonarQube", "Maven", "Gradle"]
  },
  {
    "category": "CI/CD",
    "items": ["Jenkins", "CircleCI", "CHEF", "ANSIBLE", "Puppet", "Terraform"]
  },
  {
    "category": "Microservices architecture",
    "items": ["Docker", "Kubernetes", "Amazon ECS", "Apache Kafka"]
  },
  {
    "category": "Cloud",
    "items": ["Amazon Web Services (AWS)", "Microsoft Azure", "Google Cloud Platform (GCP)"]
  }
];

const netTech = [
  {
    "category": "Components, Libraries & APIs",
    "items": [
      "AutoMapper",
      "ASP.NET Core Web API",
      "SignalR",
      "JSON.NET",
      "ASP.NET Web API",
      "REST API",
      "Entity Framework"
    ]
  },
  {
    "category": "Frameworks & Platforms",
    "items": [
      "Azure Cloud Development",
      "ASP.NET Core",
      "Windows Presentation Foundation",
      "ASP.NET",
      "SharpLang",
      ".NET Core",
      "Ooui",
      ".NET Framework",
      "Xamarin"
    ]
  },
  {
    "category": "Cloud & DevOps",
    "items": [
      "Docker",
      "OpenStack",
      "Kubernetes",
      "Amazon Web Services (AWS)",
      "Google Cloud",
      "Microsoft Azure"
    ]
  },
  {
    "category": "Testing, Monitoring, QA & Reporting",
    "items": [
      "NUnit",
      "MSTest",
      "SpecFlow",
      "Power BI"
    ]
  },
  {
    "category": "Integrated Development Environments",
    "items": [
      "JetBrains Rider",
      "Syncfusion",
      "Visual Studio",
      "Visual Studio Core"
    ]
  }
];

const phpTech = [
  {
    "category": "Frameworks",
    "items": [
      "CodeIgniter",
      "Laravel"
    ]
  },
  {
    "category": "Libraries",
    "items": [
      "Requests",
      "Carbon",
      "Faker",
      "Validation",
      "Upload",
      "Doctrine",
      "jQuery UI",
      "DataTables",
      "FusionCharts"
    ]
  },
  {
    "category": "CMS",
    "items": [
      "WordPress",
      "Magento",
      "Drupal"
    ]
  },
  {
    "category": "Web Services",
    "items": [
      "Ajax",
      "JSON-hpd",
      "SOAP",
      "XML"
    ]
  },
  {
    "category": "Database",
    "items": [
      "MySQL",
      "Maria DB",
      "SQLite",
      "MongoDB",
      "PostgreSQL",
      "MS SQL"
    ]
  },
  {
    "category": "3rd Party API Integrations",
    "items": [
      "Stripe",
      "PayPal API",
      "WooCommerce API",
      "YouTube API",
      "Amazon API",
      "Google Maps API",
      "Google Chart API",
      "FedEx API",
      "Facebook APIs",
      "WordPress API",
      "WordPress REST API"
    ]
  }
];

const javaTech = [
  {
    "title": "Back End",
    icon: FaCube,
    "items": [
      "Spring MVC",
      "JSF",
      "Hibernate",
      "C#",
      "Spring Security"
    ]
  },
  {
    "title": "Frontend",
    icon: FaDesktop,
    "items": [
      "React",
      "Angular",
      "Vue",
      "jQuery",
      "Bootstrap"
    ]
  },
  {
    "title": "Database",
    icon: FaDatabase,
    "items": [
      "MS-SQL",
      "MySQL",
      "MariaDB",
      "PostgreSQL",
      "MongoDB",
      "Oracle"
    ]
  },
  {
    "title": "Deployment",
    icon: FaTasks,
    "items": [
      "AWS",
      "Google Cloud",
      "Azure",
      "Docker",
      "Kubernetes"
    ]
  },
  {
    "title": "Testing",
    icon: FaAward,
    "items": [
      "Selenium",
      "Postman",
      "Test Rail",
      "OWASP ZAP",
      "Apache JMeter",
      "BrowserStack"
    ]
  },
  {
    "title": "Architecture",
    icon: FaCogs,
    "items": [
      "MVC",
      "MVP",
      "MVVM",
      "Microservices"
    ]
  }
];

const nodeJsTech = [
  {
    "category": "Frontend",
    "items": [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Angular",
      "React",
      "Vue.js",
      "Bootstrap",
      "Typescript",
      "Backbone.js"
    ]
  },
  {
    "category": "Full-stack Frameworks",
    "items": [
      "NestJS",
      "Koa.js",
      "Nuxt.js",
      "MeteorJS",
      "Next.js"
    ]
  },
  {
    "category": "Backend Frameworks",
    "items": [
      "Node.js",
      "Express.js",
      "PHP",
      "Laravel",
      "Python",
      "Django",
      "Flask",
      "FastAPI"
    ]
  },
  {
    "category": "Database Management",
    "items": [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Firebase",
      "GraphQL"
    ]
  },
  {
    "category": "Monitoring and Logging Tools",
    "items": [
      "prometheus",
      "Grafana",
      "Elasticsearch",
      "Logstash",
      "Kibana"
    ]
  },
  {
    "category": "Code Management",
    "items": [
      "Bitbucket",
      "GitHub",
      "GitLab",
      "SonarQube",
      "maven",
      "Gradle"
    ]
  },
  {
    "category": "CI/CD",
    "items": [
      "Jenkins",
      "CircleCI",
      "CHEF",
      "ANSIBLE",
      "Puppet",
      "Terraform"
    ]
  },
  {
    "category": "Microservices architecture",
    "items": [
      "Docker",
      "Kubernetes",
      "Amazon ECS",
      "Apache Kafka"
    ]
  },
  {
    "category": "Cloud",
    "items": [
      "Amazon Web Services (AWS)",
      "Microsoft Azure",
      "Google Cloud Platform (GCP)"
    ]
  }
];

const aimlTech = [
  {
    "category": "Machine learning platforms and services",
    "items": [
      "Azure Machine Learning",
      "Azure Cognitive Services",
      "Bot framework",
      "Amazon Sagemaker",
      "Amazon Transcribe",
      "Amazon Lex",
      "Amazon Polly",
      "Google Cloud AI Platform"
    ]
  },
  {
    "category": "Machine learning frameworks and libraries",
    "items": [
      "Mahout",
      "Mxnet",
      "Caffe",
      "TensorFlow",
      "Keras",
      "torch",
      "Open CV"
    ]
  },
  {
    "category": "Libraries",
    "items": [
      "Apache Spark Mllib",
      "Theano",
      "Scikit Learn",
      "Gensim",
      "SpaCy"
    ]
  },
  {
    "category": "Programming languages",
    "items": [
      "Scala",
      "Python",
      "Java",
      "C++",
      "R"
    ]
  },
  {
    "category": "Big data",
    "items": [
      "Hadoop",
      "apache spark Tm",
      "Cassandra",
      "Apache Kafka"
    ]
  },
  {
    "category": "Data visualization",
    "items": [
      "Power BI",
      "Microsoft SQL Server",
      "Microsoft Excel",
      "Grafana"
    ]
  }
];

const blockchainTech = [
  {
    "category": "Blockchain Frameworks and Networks",
    "items": [
      "Ethereum",
      "Hyperledger Fabric",
      "Graphene",
      "Bitcoin",
      "Solana",
      "EOS",
      "Tezos",
      "Stellar",
      "POA Network",
      "Avalanche",
      "NEAR",
      "Terra (LUNA)",
      "Polkadot",
      "Fantom Opera"
    ]
  },
  {
    "category": "Blockchain Cloud Services",
    "items": [
      "Amazon Managed Blockchain",
      "Oracle Blockchain",
      "IBM Blockchain"
    ]
  },
  {
    "category": "Smart contract programming languages",
    "items": [
      "Solidity",
      "Rust",
      "Vyper",
      "Wasm"
    ]
  },
  {
    "category": "Smart contract development and testing frameworks",
    "items": [
      "Truffle",
      "Hardhat",
      "Brownie",
      "Embark",
      "Waffle",
      "OpenZeppelin",
      "Solidity-Coverage",
      "Whiteblock Genesis"
    ]
  },
  {
    "category": "Front-end programming languages",
    "items": [
      "HTML",
      "CSS",
      "Javascript",
      "Angular JS",
      "React JS",
      "Meteor.JS",
      "Vue.js",
      "Next.js",
      "Ember.js"
    ]
  },
  {
    "category": "Back-end programming languages",
    "items": [
      "Golang",
      "C++",
      "Java",
      "Microsoft .NET",
      "Python",
      "Node JS",
      "php"
    ]
  },
  {
    "category": "DevOps",
    "items": [
      "Docker",
      "Kubernetes",
      "Red Hat OpenShift",
      "Apache Mesos",
      "Ansible",
      "Puppet",
      "Saltstack",
      "HashiCorp Terraform",
      "HashiCorp Packer"
    ]
  }
];

const fullStackTech = [
  {
    "category": "Front-end",
    "items": [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Angular",
      "React",
      "Vue",
      "Bootstrap",
      "Typescript",
      "Backbone.js"
    ]
  },
  {
    "category": "Backend Frameworks",
    "items": [
      "Node.js",
      "Express.js",
      "PHP",
      "Laravel",
      "Python",
      "Django",
      "Flask",
      "FastAPI"
    ]
  },
  {
    "category": "Full-stack Frameworks or Middlewares",
    "items": [
      "NestJS",
      "Koa.js",
      "Nuxt.js",
      "MeteorJS",
      "Next.js"
    ]
  },
  {
    "category": "Database Management",
    "items": [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Firebase",
      "GraphQL"
    ]
  },
  {
    "category": "Cloud",
    "items": [
      "Amazon Web Services (AWS)",
      "Microsoft Azure",
      "Google Cloud Platform (GCP)"
    ]
  },
  {
    "category": "Microservices architecture",
    "items": [
      "Docker",
      "Kubernetes",
      "Amazon ECS",
      "Apache Kafka"
    ]
  },
  {
    "category": "CI/CD",
    "items": [
      "Jenkins",
      "CircleCI",
      "CHEF",
      "ANSIBLE",
      "Puppet",
      "Terraform"
    ]
  },
  {
    "category": "Code Management",
    "items": [
      "Bitbucket",
      "GitHub",
      "GitLab",
      "SonarQube",
      "Maven",
      "Gradle"
    ]
  },
  {
    "category": "Monitoring and Logging Tools",
    "items": [
      "Prometheus",
      "Grafana",
      "Elasticsearch",
      "Logstash",
      "Kibana"
    ]
  }
];

const wordpressTech = [
  {
    "title": "Back End",
    icon: FaCube,
    "items": [
      "Spring MVC",
      "JSF",
      "Hibernate",
      "C#",
      "Spring Security"
    ]
  },
  {
    "title": "Front End",
    icon: FaDesktop,
    "items": [
      "React",
      "Angular",
      "Vue",
      "JQuery",
      "Bootstrap",
      "WPF"
    ]
  },
  {
    "title": "Database",
    icon: FaDatabase,
    "items": [
      "MS-SQL",
      "MySQL",
      "MariaDB",
      "PostgreSQL",
      "MongoDB",
      "Oracle"
    ]
  },
  {
    "title": "Deployment",
    icon: FaTasks,
    "items": [
      "AWS",
      "Google Cloud",
      "Azure",
      "Docker",
      "Kubernetes"
    ]
  },
  {
    "title": "Testing",
    icon: FaAward,
    "items": [
      "Selenium",
      "Postman",
      "Test Rail",
      "OWASP ZAP",
      "Apache JMeter",
      "BrowserStack"
    ]
  },
  {
    "title": "Architecture",
    icon: FaCogs,
    "items": [
      "MVC",
      "MVP",
      "MVVM",
      "Microservices"
    ]
  }
];

const sopifyTech = [
  {
    "title": "Frameworks",
    icon: FaCube,
    "items": [
      "Drupal",
      "Shopify",
      "WordPress",
      "Magento"
    ]
  },
  {
    "title": "Front End",
    icon: FaDesktop,
    "items": [
      "React",
      "Angular",
      "Vue",
      "JQuery",
      "Bootstrap",
      "WPF"
    ]
  },
  {
    "title": "Database",
    icon: FaDatabase,
    "items": [
      "MS-SQL",
      "Realm",
      "MariaDB",
      "PostgreSQL",
      "MongoDB",
      "Oracle"
    ]
  },
  {
    "title": "Deployment",
    icon: FaTasks,
    "items": [
      "AWS",
      "Kubernetes",
      "Azure",
      "Google Cloud",
      "Docker"
    ]
  },
  {
    "title": "Testing",
    icon: FaAward,
    "items": [
      "Selenium",
      "Postman",
      "Test Rail",
      "OWASP ZAP",
      "Apache JMeter",
      "BrowserStack"
    ]
  },
  {
    "title": "Architecture",
    icon: FaCogs,
    "items": [
      "MVC",
      "MVP",
      "MVVM",
      "Microservices"
    ]
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

const AiGen_benifits = [
  {
    title: "Enhanced Creativity",
    description: "Generative AI enables authors to create unique and diversified material independently. Generators allow artists, designers, authors, and musicians to experiment with new styles, ideas, and expressions, pushing creativity beyond human limits.",
    icon: Type_1,
  },
  {
    title: "Personalization",
    description: "Generative AI creates customized information that meets individual interests and demands. Through Generative AI Development Solutions, generative models improve user experiences by providing valuable information.",
    icon: Type_2,
  },
  {
    title: "Cost Savings",
    description: "Generative AI automates content development and streamlines procedures, reducing operating costs and resources needed. Marketing, advertising, and content creation, where producing high-quality content at scale is costly and time-consuming, benefit from this.",
    icon: Type_3,
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
        title="Technology Combinations Used By Kryzen For iOS App Development" 
        techCards={Iso_TechCards}
        />
      <PremiumServices />
      <SectorsSlider />
      <ReasonChoose 
        title="Benefits of Choosing iOS for App Development Services"
        des="For companies seeking to produce secure, aesthetically pleasing, and high-performing applications, using iOS development services has many benefits. Here are the top six reasons for investing in iOS for app development"
        benifits={isoBenefits}
      />
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
      <Technology_pannel techCards={isoTech} />
      <FAQSection />
    <Upper />
    <CTAWorkTogether />
    <CTASubscribe />
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
    <TechnologiesSlider
        title="Technology Combinations Used By Kryzen For Flutter App Development" 
        techCards={Flutter_TechCards}
    />
      <PremiumServices />
      <SectorsSlider />
      <ReasonChoose 
        title="Key Reasons to Choose Flutter for App Development Services"
        des="With its full solution for creating natively built apps for desktop, web, and mobile devices from a single codebase, Google's Flutter UI toolkit has become a game-changer."
        benifits={flutterBenefits}
      />
    <Benefits
      benifits={benefits}
      sectionTitle="Benefits of Hiring our Mobile App Development Company"
      sectionDescription="As the top mobile app development company, we have the required expertise and skills to create out of the ox apps."
    />
      <AboutUs />
    <ProcessWeFollow />
    <Technology_pannel techCards={flutterTech} />
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
      <TechnologiesSlider
        title="Cutting Edge Technologies Sapphire Use For Mobile App Development" 
        techCards={ReactNative_techCards}
    />
      <PremiumServices />
      <SectorsSlider />
       <ReasonChoose 
        title=" The Expertise of Our Mobile App Development Services"
        des="Our cross-platform development process combines transparency, features, and sensitive interfaces by leveraging the best cross-platform development technologies such as Ionic, Xamarin, and others."
        benifits={reactNativeBenefits}
      />
        <Benefits
      benifits={benefits}
      sectionTitle="Reasons To Choose React Native"
      sectionDescription="As the top mobile app development company, we have the required expertise and skills to create out of the ox apps."
    />
      <AboutUs />
    <ProcessWeFollow />
    <Technology_pannel techCards={reactNativeTech} />
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
    <TechnologiesSlider
        title="Technology Combinations Kryzen Use For Angular Development" 
        techCards={Angular_TechCards}
    />
      <PremiumServices />
      <AboutUs />
    <ProcessWeFollow />
    <TechnologyStack data={angularTech} />
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
    <TechnologiesSlider
        title="Kryzen Use These Cutting Edge Technologies For React Js Development" 
        techCards={React_TechCards}
    />
      <PremiumServices />
      <ReasonChoose 
        title="Pioneering Technologies Fueling kryzen Web Development"
        des="As a top web development company in USA, we use the most up-to-date technological stack to provide unmatched bespoke website development services that cater to specific needs."
        benifits={reactBenifits}
      />
    <Benefits
      benifits={benefits}
      sectionTitle="The Key Benefits Of Using ReactJs"
      sectionDescription="Here are the reasons that make ReactJS our preferable framework"
    />
      <AboutUs />
    <ProcessWeFollow />
    <Technology_pannel techCards={reactTech} />
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
      title="Cost-Effective And Reliable Vue.Js Services For You"
      highlightedText="Delivering Vue.js Development Services For Businesses"
      paragraphs={[
        "We assist businesses in designing real-time and complex applications using the Vue.js framework, which is adaptable in stages due to its integration capability with other JavaScript libraries. We are a leading Vue.js development company that builds flawless and high-performing applications by using front-end technologies and functionality such as advanced tooling, supporting libraries, server-side rendering, streaming, and component-level caching.",
        "We use reusable, component-based UI for Vue.js front-end app creation to quickly scale the apps in the future. As a Vue.js development company, we specialize in Vue.js, a JavaScript architecture for designing user interfaces and single-page apps that is progressive and incrementally adoptable. Get personalized Vue.js web development services focused on your company's needs from the initial planning stage through development. We understand the business problems and strive to overcome them using a Vue.js framework compatible with your business priorities and pain points.",
      ]}
      emphasizeTextIndex={[1]}
      emphasizePhrases={["hire mobile app developers"]}
    />
      <PremiumServices />
      
    <Benefits
      benifits={vueBenefits}
      sectionTitle="The Key Benefits Of Using VueJs"
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
    <TechnologiesSlider
        title="Technology Combinations Kryzen Use For .NET Development" 
        techCards={Angular_TechCards}
    />
      <PremiumServices />
      <SectorsSlider />
      <ReasonChoose 
        title=".NET Technologies Sapphire Use for .NET Development Services"
        des="We use the most up-to-date .NET technology stack to provide unmatched bespoke .NET development services that cater to specific needs."
        benifits={netBenefits}
      />
      <AboutUs />
    <ProcessWeFollow />
    <Technology_pannel techCards={netTech} />
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
      <TechnologiesSlider
        title="Technology for Cross-Platform PHP Development" 
        techCards={Php_Tech}
    />
      <PremiumServices />
      <SectorsSlider />
      <ReasonChoose 
        title="Why Choose PHP for Web Development?"
        des="As one of the best server-side scripting languages, we use PHP to create robust and scalable web applications"
        benifits={phpBenefits}
      />
    <Benefits
      benifits={benefits}
      sectionTitle="Benefits of Hiring our Mobile App Development Company"
      sectionDescription="As the top mobile app development company, we have the required expertise and skills to create out of the ox apps."
    />
      <AboutUs />
    <ProcessWeFollow />
    <Technology_pannel techCards={phpTech} />
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
      benifits={javaServices}
      sectionTitle="Java Development Services"
      sectionDescription="We provide wide range of Java technology services for distributed business infrastructure and extended capability to meet your technological needs."
    />
    <Benefits
      benifits={javaBenefits}
      sectionTitle="Benefits of Hiring Java Development Company"
      sectionDescription="For durable, scalable, and secure software solutions, hiring a Java development firm has several benefits. Here are the major advantages of Java development"
    />
      <AboutUs />
    <ProcessWeFollow />
    <TechnologyStack data={javaTech} />
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
      <ReasonChoose 
        title="Pioneering Technologies Fueling Kryzen Web Development"
        des="As a top web development company in USA, we use the most up-to-date technological stack to provide unmatched bespoke website development services that cater to specific needs."
        benifits={reactBenifits}
      />
    <Benefits
      benifits={nodejsBenefits}
      sectionTitle="Benefits of NodeJs Application Development Services"
      sectionDescription="NodeJs Application Development Services allows for flexible and dynamic web application development"
    />
      <AboutUs />
    <ProcessWeFollow />
    <Technology_pannel techCards={nodeJsTech} />
    <Brands />
    <FAQSection />
    <Upper />
    <CTAWorkTogether />
    <CTASubscribe />
    <Common />
  </>,
  "generative-ai":<>
           <div className="max-w-7xl mx-auto my-[10rem]">
            <h1 className="text-xl sm:text-3xl font-extrabold text-center text-gray-800 mb-12">
              No. 1 Generative AI Development Company
            </h1>
    
            
            <div className=" overflow-hidden mb-16 p-6 sm:p-10 ">
              <div className="relative h-[350px] sm:h-[450px] flex flex-col items-center justify-center text-center">
                <img src={AiGen} alt="Genarative Ai"  className="fit-content w-fit rounded-2xl"/>
              </div>
            </div>
    
            
            <div className="bg-white p-6 sm:p-8 mb-12 ">
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                Generative AI research is crucial for several reasons, including its revolutionary potential across sectors and applications. hire generative ai developers, which lets robots create information, visuals, and storylines, might boost creativity, efficiency, and problem-solving. Top generative AI development services enhance creativity by making it possible to produce unique and varied material. Enterprise generative ai solutions provider lets artists push limits in art, music, literature, and design. Generative models may create unique compositions from large datasets, inspiring creativity. As generative AI technologies advance, they become more accessible to a broader audience. Open-source frameworks, pre-trained models, and user-friendly interfaces make generative application creation and deployment accessible to amateurs, small enterprises, and enthusiasts for creative expression, experimentation, and innovation. Hiring the best generative AI development companies is vital because it might transform creativity, efficiency, and problem-solving across fields. Using artificial intelligence to produce material, simulate situations, and boost creativity, generative AI opens up new technical and social possibilities. 
              </p>
            </div>
             
             <div>
              <h1 className="text-xl sm:text-3xl font-extrabold text-center text-gray-800 mb-12">
              Why hire Kryzen for Generative AI Development Services?
            </h1>
             <p className="text-gray-700 leading-relaxed text-base sm:text-lg">Kryzen specializes in Generative AI Development Solutions, focusing solely on this specific field. Affordable generative ai application development expertise helps to provide deeper insights, unique solutions, and better results than generic development businesses. Sapphire indeed maintains current knowledge of Ai Development Services  research and technology. We use cutting-edge algorithms, frameworks, and tools to create solutions using the latest approaches and capabilities. Our Generative AI Development Services for Enterprise can meet project scopes and timetables with resources and capabilities for modest proof-of-concept prototypes or significant deployments. We test, validate, and optimize to provide high-quality goods that surpass customer expectations. Sapphire Software Solutions offers knowledge, specialty, bespoke solutions, cutting-edge technology, scalability, flexibility, collaborative collaboration, quality assurance, confidentiality, and security for Generative AI development. As a Top Generative AI Development Company, Sapphire uses extensive quality assurance systems to verify the dependability, accuracy, and robustness of its Generative AI products.  </p>
            </div>
            </div>
          <LogoCarousel />
          <Charts
            img={Chart}
            h1="Web Development  Market Stats"
            p1="The global web development market size was roughly USD 55500.0 million in 2021. As per our research, the market is expected to reach USD 89015.19 million by 2027, exhibiting a CAGR of 8.03% during the forecast period."
          />
          <PremiumServices />
          <Benefits
            benifits={AiGen_benifits}
            sectionTitle="Benefits of Generative AI Services for Businesses"
            sectionDescription="Here's how our Generative AI solutions benefit customers with concrete results and competitive advantage"
          />
          <AboutUs />
          <Common />
        </>,
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
      <TechnologiesSlider
        title="Technology We Use For Artificial Intelligence Development" 
        techCards={Aiml_Tech}
    />
      <ReasonChoose 
        title="Key benefits of choosing AI Development Services"
        des="As pioneers in the field of artificial intelligence software development, we advise companies to take advantage of the potential of data and AI to open up a multitude of doors"
        benifits={aimiBenefits}
      />
      <AboutUs />
    <ProcessWeFollow />
    <Technology_pannel techCards={aimlTech} />
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
      <TechnologiesSlider
        title="Technology We Use For Block Chain Development" 
        techCards={BlockChanin_Tech}
    />
      <ReasonChoose 
        title="Why Choose Blockchain Development Services?"
        des="As pioneers in the field of blockchain development, we advise companies to take advantage of the potential of blockchain to open up a multitude of doors"
        benifits={blockChainBenefits}
      />
      <AboutUs />
      <ImpactCards
        sectionTitle="Explore The Transformative Impact Of Block Chain On Your Business Success"
        benefitCards={benefitCards}
        autoInterval={3500}
      />
    <ProcessWeFollow />
    <Technology_pannel techCards={blockchainTech} />
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
      <ReasonChoose 
        title="Key Benefits of Our Full Stack Development Services"
        des="Full-stack development offers the know-how required to see your project through to completion, regardless of your need for reduced development time or economic alternatives."
        benifits={fullStachBenefits}
      />
      <TechnologiesSlider
        title="Technology Combinations Used By Kryzen For Full Stack Development" 
        techCards={Fullstack_Tech}
    />
      <AboutUs />
    <ProcessWeFollow />
    <Technology_pannel techCards={fullStackTech} />
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
      benifits={wordpressBenefits}
      sectionTitle="Some Of The Key Benefits Of Using WordPress"
      sectionDescription="WordPress offers a number of advantages over another platform"
    />
      <AboutUs />
    <ProcessWeFollow />
    <TechnologyStack data={wordpressTech} />
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
      benifits={sopifyBenefits}
      sectionTitle="The Expertise of Our Shopify Development Services"
      sectionDescription="Our Shopify Development Service Company can set up your online shop quickly since we thoroughly grasp the setup and Shopify Revamping."
    />
      <AboutUs />
     <Benefits
      benifits={benefits}
      sectionTitle="Some Of The Key Benefits Of Using Shopify"
      sectionDescription="With a vast library of extensions and developer-friendliness, Shopify can easily set up your online store and sell products. "
    />
    <ProcessWeFollow />
    <TechnologyStack data={sopifyTech} />
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


