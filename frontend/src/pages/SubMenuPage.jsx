import { lazy } from "react";
import { useParams } from "react-router-dom";
import { FaCube, FaDesktop, FaDatabase, FaCogs, FaAward, FaTasks } from "react-icons/fa";
import MobileApp from "../public/mobile_app_development1.webp";
import Maintain from "../public/ic_easy_maintain_mobile_app_development.png";
import Crm from "../public/ic_crm_mobile_app_development.png";
import Accountibility from "../public/ic_accountibility_mobile_app_development.png";
import Scalability from "../public/ic_improve_scalability_mobile_app_development.png";
import CostomApp from "../public/custom_app_banner.png";
import CustomDes from "../public/custom_app_section_1.png";
import CustomAbout from "../public/custom_app_about.png";
import CrossDes from "../public/cross_platform.png";
import Chart from "../public/mobile_market_stats.webp";
import PieChart from "../public/pie_chart.webp";
import Img_1 from "../public/Explore_1.png";
import Img_2 from "../public/Explore_2.png";
import Img_3 from "../public/Explore_3.png";
import Img_4 from "../public/Explore_4.png";
import Img_5 from "../public/Explore_5.png";
import cuttingEdge_1 from "../public/cuttingEdge.png";
import cuttingEdge_2 from "../public/cuttingEdge_2.png";
import cuttingEdge_3 from "../public/cuttingEdge_4.png";
import cuttingEdge_4 from "../public/cuttingEdge_5.png";
import cuttingEdge_5 from "../public/cuttingEdge_6.png";
import cuttingEdge_6 from "../public/cuttingEdge_7.png";
import cuttingEdge_7 from "../public/cuttingEdge_8.png";
import cuttingEdge_8 from "../public/cuttingEdge_9.png";
import TechnologyStack from "../components/TechnologyStack";
import CrossDev from "../public/crossplatformdev.png";
import TypeScript from "../public/typescript_development_banner.svg";
import Types1 from "../public/typescript_development_section_1.svg";
import Types_about from "../public/typescript_development_about.svg";
import Type_1 from "../public/typescript_development_ic_1.svg";
import Type_2 from "../public/typescript_development_ic_2.svg";
import Type_3 from "../public/typescript_development_ic_3.svg";
import Type_4 from "../public/typescript_development_ic_4.svg";
import Type_5 from "../public/typescript_development_ic_5.svg";
import Type_6 from "../public/typescript_development_ic_6.svg";
import IT_Consulting from "../public/it_consulting_banner.svg";
import IT_ConsultAbout from "../public/it_consulting_about.svg";
import IT_ConsultingSection from "../public/it_consulting_section_1.svg";
import ReasonChoose from "../components/ReasonChoose"
import AppDevelopment from "../public/app_development_banner.svg";
import AppDev from "../public/app_development_section_1.svg";
import AppSection from "../public/app_development_about.svg";
import Mobile from "../public/mobile_app_porting_banner.svg";
import MobleDev from "../public/mobile_app_porting_about.svg";
import MobileSection from "../public/mobile_app_porting_section_1.svg";
import UIUXDev from "../public/ui_ux_design_vector.svg";
import DJango from "../public/django_development_banner.svg"
import Iped from "../public/ipad_app_services_banner.svg";
import IpedDev from "../public/ipad_app_services_about.svg";
import IpedSection from "../public/ipad_app_services_section_1.svg";
import Hybrid from "../public/hybrid_app_banner.svg";
import HybridDev from "../public/hybrid_app_about.svg";
import HybridSection from "../public/hybrid_app_section_1.svg";
import Progressive from "../public/progressive_web_app_banner.svg";
import ProgressiveDev from "../public/progressive_web_app_about.svg";
import ProgressiveSection from "../public/progressive_web_app_section_1.svg";
import B2B from "../public/b2b_mobile_app_banner.png";
import B2BDev from "../public/b2b_mobile_app_about.svg";
import B2BSection from "../public/blockchain_development_section_1.svg";
import Laravel from "../public/laravel_development_banner.svg";
import LaravelDev from "../public/laravel_development_section_1.svg";
import LaravelSection from "../public/laravel_development_sectiontwo.svg";
import Python from "../public/python_app_banner.svg";
import PythonDev from "../public/python_app_about2.svg";
import PythonSection from "../public/python_app_section_1.svg";
import BigCommerce from "../public/big_commerce_banner.svg";
import BigCommerceDev from "../public/big_commerce_about.svg";
import BigCommerceSection from "../public/bigcommercedec.png";
import AI from "../public/artificial_intelligence_banner.svg";
import AIDev from "../public/ai_vector.svg";
import AISection from "../public/artificial_intelligence_section_1.svg";
import AI1 from "../public/billion.svg";
import AI2 from "../public/companies.svg";
import AI3 from "../public/dollarlock.svg";
import AI4 from "../public/rateofnlp.svg";
import AI5 from "../public/star.svg";
import AI6 from "../public/trillion.svg";
import Chatbot from "../public/chatbot_development_banner.svg";
import ChatbotDev from "../public/chatbot_development_about.svg";
import ChatbotSection from "../public/chatbot_development_section_1.svg";
import Product from "../public/productdevelopment1.svg";
import ProductDev from "../public/productdev.png";
import Startup from "../public/startup_consulting_banner.svg";
import StartupDev from "../public/startup_consulting_about.svg";
import StartupSection from "../public/startup_consulting_section_1.svg";
import UI from "../public/ui.png";
import UISection from "../public/img_graphic.svg"
import DigitalDev from "../public/2.svg";
import DigitalSection from "../public/3.svg";
import Softwaredevelopment from "../public/software_dev_service_banner.svg";
import SoftwareDev from "../public/bestsoftwaredev.png";
import Application from "../public/application_services1.svg";
import ApplicationDev from "../public/appliacationservice.png";
import CRM from "../public/crm_development_banner.svg";
import CRMDev from "../public/crm_development_about.svg";
import CRMSection from "../public/crm_development_section_1.svg";


const TechnologiesSlider = lazy(() => import("../components/TechnologiesSlider").then(module => ({ default: module.TechnologiesSlider })));
const SectorsSlider = lazy(() => import("../components/SectorsSlider").then(module => ({ default: module.SectorsSlider })));
const ExpertiseSlider = lazy(() => import("../components/ExpertiseSlider").then(module => ({ default: module.ExpertiseSlider })));
const ImpactCards = lazy(() => import("../components/ImpactCards").then(module => ({ default: module.ImpactCards })));
const LogoCarousel = lazy(() => import("../components/LogoCarousel"));
const PremiumServices = lazy(() => import("../components/PremiumServices"));
const AboutUs = lazy(() => import("../components/AboutUs"));
const ProcessWeFollow = lazy(() => import("../components/ProcessWeFollow"));
const Brands = lazy(() => import("../components/Brands"));
const SuccessMatrix = lazy(() => import("../components/SuccessMatrix"));
const ClientReview = lazy(() => import("../components/ClientReview"));
const Upper = lazy(() => import("../components/Upper"));
const FAQSection = lazy(() => import("../components/FAQSection"));
const Benefits = lazy(() => import("../components/Benefits"));
const HeroSection = lazy(() => import("../components/HeroSection"));
const Quotes = lazy(() => import("../components/Quotes"));
const CTASubscribe = lazy(() => import("../components/FeaturedLogos").then(module => ({ default: module.CTASubscribe })));
const CTAWorkTogether = lazy(() => import("../components/FeaturedLogos").then(module => ({ default: module.CTAWorkTogether })));
const Technology_pannel = lazy(() => import("../components/Technology_pannel"));

// import Img_4 from "../public/Explore_4.png";
// import Img_5 from "../public/Explore_5.png";
// import Img_6 from "../public/Explore_6.png";
// import Img_7 from "../public/Explore_7.png";

const techCards = [
  {
    title: "Voice Search and Voice Assistants",
    description: "We use Voice search technology that enables users to search the Internet, a website, or an application using voice commands.",
    icon: <img src={cuttingEdge_1} alt="Icons" />,
  },
  {
    title: "Wearable App Integration",
    description: "Our skilled developers are masters in integrating wearable apps, guaranteeing compatibility across many devices, and providing outstanding user experiences.",
    icon: <img src={cuttingEdge_2} alt="Icons" />,
  },
  {
    title: "Beacons and Location-Based Services",
    description: "We use Beacons and location-based services to offer a wide range of features, including check-ins, location-based alerts, real-time mapping and navigation, and customized suggestions.",
    icon: <img src={cuttingEdge_3} alt="Icons" />,
  },
  {
    title: "Cross-Platform Development",
    description: "With a few single codebases, we enable us to develop for multiple platforms, including iOS, Android, and more.",
    icon: <img src={cuttingEdge_4} alt="Icons" />,
  },
  {
    title: "Cross-Platform Development",
    description: "With a few single codebases, we enable us to develop for multiple platforms, including iOS, Android, and more.",
    icon: <img src={cuttingEdge_5} alt="Icons" />,
  },
  {
    title: "Cross-Platform Development",
    description: "With a few single codebases, we enable us to develop for multiple platforms, including iOS, Android, and more.",
    icon: <img src={cuttingEdge_6} alt="Icons" />,
  },
  {
    title: "Cross-Platform Development",
    description: "With a few single codebases, we enable us to develop for multiple platforms, including iOS, Android, and more.",
    icon: <img src={cuttingEdge_7} alt="Icons" />,
  },
  {
    title: "Cross-Platform Development",
    description: "With a few single codebases, we enable us to develop for multiple platforms, including iOS, Android, and more.",
    icon: <img src={cuttingEdge_8} alt="Icons" />,
  },

];

const services = [
  {
    label: "Mobile App Development",
    sub: [
      "Mobile App Development",
      "Cross Platform App Development",
      "IPad App Development Services",
      "Hybrid App Development",
      "Progressive Web App Development",
      "IBeacon App Development",
      "Wearable App Development",
      "Native App Development",
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
      "Typscript Development",
      "Angular Development",
      "React Development",
    ]
  },
  {
    label: "Software Development",
    sub: [
      "product Development", "Software Development", "Application services",
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
    icon: Type_1,
  },
  {
    title: "Flutter App Development",
    description:
      "Our team can develop Flutter App Development Company for your business that will help you save money, time while providing you with visually appealing native apps to boost ROI.",
    icon: Type_2,
  },
  {
    title: "Cross-Platform Mobile Apps",
    description:
      "Our team combines transparency, features, and sensitive interfaces by leveraging the best cross-platform development such as Ionic, Xamarin, and others.",
    icon: Type_3,
  },
];

const ipadExpertise = [
  {
    title: "iPad App Design",
    description:
      "We specialize in crafting intuitive and engaging iPad app designs, ensuring a seamless user experience tailored to your brand's identity.",
    icon: Type_1,
  },
  {
    title: "Enterprise iPad App Development",
    description:
      "Our team develops robust enterprise-grade iPad applications, focusing on scalability, security, and performance to meet business needs.",
    icon: Type_2,
    },
  {
    title: "iPad Tech Support and Preventative Maintenance",
    description:
      "We offer comprehensive technical support and maintenance services, ensuring your iPad applications remain up-to-date and perform optimally.",
    icon: Type_3,
  },
  {
    title: "iPad App Development in Native Language",
    description:
      "Leveraging native iOS technologies, we build high-performance iPad applications that fully utilize device capabilities and deliver superior user experiences.",
    icon: Type_4,
  },
  {
    title: "Augmented Reality (AR) App Solutions",
    description:
      "We develop interactive AR applications for iPad, enhancing user engagement by integrating real-world elements with digital content.",
    icon: Type_5,
  },
  {
    title: "Integration with Third-Party Services",
    description:
      "Our expertise includes integrating iPad apps with various third-party services like WebRTC, Twilio, Stripe, PayPal, and more, to extend functionality.",
    icon: Type_6,
    }
];

const ipadAppBenefits = [
  {
    title: "Customized User Experiences",
    description:
      "iPad app development services create apps for iPad’s giant screens and additional features. Simple and easy to use, these applications boost engagement and enjoyment. Customizing the iPad’s multitouch gestures and high-resolution display improves user experience.",
    icon: Maintain,
  },
  {
    title: "Increased productivity and efficiency",
    description:
      "iPad applications improve productivity and efficiency by automating mundane operations and making crucial data accessible. Employees can work better in the office or on the road, enhancing corporate effectiveness.",
    icon: Scalability,
  },
  {
    title: "Better Customer Engagement and Loyalty",
    description:
      "User engagement is maintained using push alerts, in-app messaging, and personalized content. Customer satisfaction and loyalty increase with better engagement, driving repeat business.",
    icon: Crm,
  },
  {
    title: "Smooth Apple Ecosystem Integration",
    description:
      "Users can seamlessly transition between their iPhone, Mac, and iPad thanks to this compatibility. Apple ecosystem integration improves app functionality and customer ease, increasing engagement.",
    icon: Accountibility,
  },
  {
    title: "Get Advanced Features and Technologies",
    description:
      "Your iPad app will use the newest iOS features and technologies like ARKit for augmented reality, Core ML for machine learning. Adding these enhanced features helps produce new and competitive apps that suit user and market needs.",
    icon: Scalability,
  },
  {
    title: "Constant Care",
    description:
      "Post-launch support and upgrades are essential for iPad app performance and security. Maintenance includes bug repairs, feature additions, and compatibility updates from professional development services.",
    icon: Maintain,
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


const Cross_AppBenifits = [
  {
    title: "Optimum Audience Exposure",
    description:
      "Since cross-platform applications benefit both the Android and iOS platforms, you get the most audience attention and target several OS markets, your chances of reaching a global audience grow.",
    icon: Maintain,
  },
  {
    title: "Decreased Development Overheads",
    description:
      "When you create a cross-platform app, you gain the advantage of re-usability. From the code to the deployment strategy, you can reuse anything and save a significant amount of money.",
    icon: Scalability,  
  },
  {
    title: "Simple Handling And Deployment",
    description:
      "Maintenance is simplified because you only need to handle one app that runs through several platforms. Furthermore, the deployment phase is simplified.",
    icon: Crm,  
  },
  {
    title: "Easy To Integrate",
    description:
      "Since Cross-Platform apps support several plugins that aid in cloud integration, they are easy to integrate. It significantly increases efficiency and scalability.",
    icon: Accountibility,
  },
  {
    title: "Quick Marketing And Modification",
    description:
      "Since your production time gets reduced, your marketing time gets reduced as well. Furthermore, its scalability allows you to make as many changes as possible.",
    icon: Maintain,
  },
  {
    title: "Uniformity",
    description:
      "Cross-Platform apps promote uniformity like nothing else. You get to highlight your brand values through all of your products and offer uniformity in design on any device your customers use.",
    icon: Crm,
  },
];

const Custom_benefits = [
  {
    title: "Customized Options",
    description:
      "Custom mobile applications are tailored to your company. Custom Mobile App Development Services collaborates with you to understand your goals, processes, and difficulties and ensure the result meets your company goals.",
    icon: Maintain,
  },
  {
    title: "Improved UX",
    description:
      "Custom mobile applications provide your target audience with a smooth, straightforward experience and create applications that are simple to use, engaging, and optimized for different devices and screen sizes by concentrating on usability and user interface design.",
    icon: Crm,
  },
  {
    title: "Scalability, Flexibility",
    description:
      "Custom mobile applications may grow with your company. Custom Mobile App Development Services utilize flexible structures and scalable technology to meet changing user needs, new features, and market trends.",
    icon: Accountibility,
  },
  {
    title: "Integration",
    description:
      "Custom mobile applications can effortlessly interact with databases, CRMs, ERPs, and third-party APIs. Custom Mobile App Development Services connect your app to other systems, improving processes and efficiency.",
    icon: Scalability,
  },
  {
    title: "Branding",
    description:
      "Custom mobile applications display your brand and set you apart from the competition. Custom Mobile App Development Services blend your logos, colors, and messages into the app design to build brand loyalty.",
    icon: Crm,
  },
  {
    title: "Support",
    description:
      "To keep your app updated, safe, and functioning, Custom Mobile App Development Services provides extensive support and maintenance. It keeps your app operating smoothly with bug patches, performance optimization, feature additions, and platform updates.",
    icon: Maintain
  },
];

const Django_Impact = [
  {
    title: "Accelerated Time-to-Market",
    description:
      "Leveraging agile methodologies and the Django framework, Sapphire Software Solutions enables businesses to launch web applications swiftly, reducing development timelines and accelerating time-to-market.",
    bg: "bg-yellow-100",
    img: Img_1,
  },
  {
    title: "Enhanced Security",
    description:
      "By utilizing Django's built-in security features, Sapphire ensures that applications are protected against common threats like SQL injection, cross-site scripting, and cross-site request forgery, safeguarding sensitive data.",
    bg: "bg-teal-100",
    img: Img_2,
  },
  {
    title: "Scalability and Flexibility",
    description:
      "Django's modular architecture allows for the development of scalable applications that can grow with your business needs, ensuring long-term adaptability and performance.",
    bg: "bg-blue-100",
    img: Img_3,
  },
  {
    title: "Cost Efficiency",
    description:
      "The use of reusable components and rapid development capabilities of Django leads to reduced development costs, providing businesses with high-quality solutions within budget.",
    bg: "bg-blue-100",
    img: Img_4,
  },
  {
    title: "Customizable Solutions",
    description:
      "Sapphire's expertise in Django allows for the creation of tailor-made applications that align with specific business requirements, offering personalized solutions that drive business success.",
    bg: "bg-teal-100",
    img: Img_5,
  }
];

const Django_benifits = [
  {
    title: "Fast growth",
    description:
      "We can create web apps using Django's batteries-included approach, which includes many built-in capabilities and tools. Developers can concentrate on crucial application functionalities using Django’s admin interface, authentication system, and ORM.",
    icon: Maintain,
  },
  {
    title: "Versatility",
    description:
      "Django is a flexible framework for building CMS, e-commerce, social network, and other online applications. Its large ecosystem of third-party packages and extensions allow developers to adapt it to their applications.",
    icon: Crm,
  },
  {
    title: "Scalability and performance",
    description:
      "Its easy scaling makes Django suited for startups and big companies. Django apps can withstand substantial traffic loads and remain responsive because of their scalable design and performance optimization methods like caching and database query optimization.",
    icon: Accountibility,
  },
  {
    title: "Community and Help",
    description:
      "To help developers at every level, the Django community includes documentation, tutorials, forums, and online tools. Due to Django’s open-source nature, developers may use many free and open-source tools and libraries to speed up development.",
    icon: Scalability,
  },
  {
    title: "Security",
    description:
      "Web developers prioritize security, and Django has several built-in security measures. Django prevents SQL injection, XSS, CSRF, and clickjacking. User login and permission are built into Django, making safe user authentication.",
    icon: Maintain,
  },
  {
    title: "Flexibility",
    description:
      "Its modular architecture and simple code refactoring let developers adapt to changing needs and iterate fast. Data manipulation and dynamic content generation are simplified by Django’s template system and ORM.",
    icon: Crm,
  }
];

const IT_benifits = [
  {
    "title": "Software Development for Startups",
    "description": "Are you going to develop software for your company that will set you apart from the competition? We can deliver you an innovative startup software development solution that puts your brand front and center if we bring a team of knowledgeable business analysts, project managers, and tech leaders on board."
  },
  {
    "title": "Web App Development",
    "description": "Our web development services span a wide range of options focused on helping you establish high-quality, responsive, and user-friendly web apps adapted to your company’s needs. From sophisticated web app development to developing brand websites, we can help you achieve this goal."
  },
  {
    "title": "Enterprise Software Development",
    "description": "Being a leading corporate software development firm, we provide complex software solutions that assist clients in increasing productivity, streamlining processes, and expanding their businesses. Our corporate software solutions are built with the newest technology and work smoothly with current systems."
  },
  {
    "title": "Mobile App Development",
    "description": "We provide complete mobile app development services to build unique, captivating, and performance-optimized mobile apps for the iOS and Android platforms using native and cross-platform technologies."
  },
  {
    "title": "Software Product Development",
    "description": "Have an original software concept? We help you design market-ready solutions that contemporary people desire, from conception to validation, with MVP development, testing, and deployment."
  },
  {
    "title": "Legacy Software Modernization",
    "description": "We are renowned for providing inventive and meticulous services for modernizing legacy software, which involve evaluating the software as it is today, pinpointing places in need of development, and reviving outdated programs with the help of contemporary technology."
  }
];

const Mobile_benifits = [
  {
    "title": "Reaching New Audiences",
    "description": "Porting your mobile app to other platforms opens new markets. By making your software accessible on iOS, Android, and other platforms, you may reach more users and boost adoption.",
    icon: Maintain,
  },
  {
    "title": "ROI Maximization",
    "description": "Porting your software to numerous platforms maximizes ROI. Utilizing existing code and assets lets you increase your app's reach without high development expenditures. This strategy boosts income and app value.",
    icon: Accountibility,
  },
  {
    "title": "Increasing User Engagement",
    "description": "Offering your software on several platforms boosts user engagement and happiness. Users have varied operating system preferences, thus offering a similar experience across platforms, which promotes a smooth user experience and builds loyalty.",
    icon: Scalability,
  },
  {
    "title": "Being Competitive",
    "description": "Reaching people wherever they are is crucial in today's competitive app industry. By making your software accessible on your rivals' platforms, porting it helps you remain industry-relevant and competitive.",
    icon: Crm,
  },
  {
    "title": "Gaining Market Share",
    "description": "Porting your software to various platforms lets you reach new markets and demographics that your rivals may overlook. This market reach extension may boost downloads, user engagement, and income.",
    icon: Maintain,
  },
  {
    "title": "Future-proofing your app",
    "description": "You future-proof and preserve your software by transferring it to numerous platforms. This flexibility lets you adjust to market and technological developments, keeping your app current and accessible for years.",
    icon: Accountibility,
  }
];

const DigitalMarketing_benifits = [
  {
    "title": "Increased Online Visibility",
    "description": "Customized, integrated digital marketing plans may continuously improve returns and help businesses boost conversion rates.",
    icon: Maintain,
  },
  {
    "title": "Enhanced Brand Recognition",
    "description": "Develop trust with the audience via tailored messaging; this will improve interactions and your company's online visibility while increasing brand awareness.",
    icon: Accountibility,
  },
  {
    "title": "Cost Effectiveness",
    "description": "Cost-effective digital marketing services help you save money and obtain more leads. It is a reasonably priced method of promoting your company to potential customers.",
    icon: Scalability,
  },
  {
    "title": "Drives Targeted Traffic",
    "description": "Using digital marketing services, which target more precise leads and provide a consistent flow of qualified leads, can result in increased sales and improved conversion rates.",
    icon: Crm,
  },
  {
    "title": "Increased Marketing ROI",
    "description": "Effective digital marketing strategies give a significant return on investment while also lowering the total cost of attracting and keeping consumers.",
    icon: Maintain,
  },
  {
    "title": "Easily Measurable",
    "description": "Digital marketing techniques allow you to monitor the campaign's outcomes precisely. This will help you understand your campaign and determine areas for improvement.",
    icon: Accountibility,
  }
];

const Application_benifits =  [
  {
    title: "Mobile App UI/UX Design",
    description:
      "By considering market trends and creating best practices that provide an enhanced app user experience, we can help you create a unique, sophisticated, and user-friendly mobile app user interface."
  },
  {
    title: "MVP Development",
    description:
      "By creating an MVP with the necessary functionality, we increase your trust in the app idea. This enables you to swiftly release a test app onto the market and attract early users before moving on to complete app development."
  },
  {
    title: "Custom App Development",
    description:
      "Whether you’re developing a mobile app for a business or a community, we can help you realize your unique idea by incorporating cutting-edge features that will make it stand out from the crowd."
  },
  {
    title: "Startup App Development",
    description:
      "Our world-class app development solutions will help your startup take off by helping startups get the best app solution possible with the use of leading app development frameworks."
  },
  {
    title: "Enterprise App Development",
    description:
      "Enhance your business operations through mobility by integrating third-party integrations and industry-leading technologies into your mobile app solutions to increase revenue and business operations."
  },
  {
    title: "Embedded IoT App Development",
    description:
      "To control and fully exploit your IoT-enabled environment, get a highly customized embedded software solution built with cloud and AI/ML technology."
  }
];


const Python_benifits = [
  {
    "title": "Versatility and Flexibility",
    "description": "From web development to data science, machine learning, automation, and more, Python is a quite flexible language fit for many fields. Its large libraries and systems let developers work on a variety of projects, from straightforward scripts to sophisticated corporate programs."
  },
  {
    "title": "Rapid Development and Prototyping",
    "description": "Python's comprehensive set of libraries and clear, understandable syntax let programmers create code quickly and effectively. This allows for faster development cycles, which makes rapid prototyping and quicker time-to-market for new goods possible."
  },
  {
    "title": "Strong Community Support",
    "description": "Python is among the world's most active and sizable developer communities. Because of this strong community support, developers have access to an abundance of resources like documentation, tutorials, and outside tools."
  },
  {
    "title": "Extensive Libraries and Frameworks",
    "description": "Python provides a great range of tools and packages meant to speed up and simplify progress. From Django and Flask to Pandas and NumPy to TensorFlow and PyTorch, Python's ecosystem offers tools for practically every application."
  },
  {
    "title": "Scalability",
    "description": "Python can scale to suit the needs of big, sophisticated systems as well as for little tasks. Python apps can manage rising loads and expand as corporate needs develop using frameworks like Django and solutions like Kubernetes."
  },
  {
    "title": "Security",
    "description": "Python is a reliable tool for creating safe apps since it boasts strong security elements. Built-in security systems included in frameworks such as Django assist in guarding against shared vulnerabilities, including cross-site scripting (XSS) and SQL injection."
  }
];

const BigCommerce_benifits = [
  {
    "title": "BigCommerce Store Design & Setup",
    icon: Maintain,
    "description": "The first step of your BigCommerce business journey is to develop a store theme. To begin designing a store theme on BigCommerce, you must take various preparatory actions. They choose a relevant article, upload third-party store themes, install theme pages, and then tweak the store's theme."
  },
  {
    "title": "BigCommerce Store Integration",
    icon: Accountibility,
    "description": "The first step of your BigCommerce business journey is to develop a store theme. To begin designing a store theme on BigCommerce, you must take various preparatory actions. They choose a relevant article, upload third-party store themes, install theme pages, and then tweak the store's theme."
  },
  {
    "title": "BigCommerce Payment Gateway Integration",
    icon: Scalability,
    "description": "You may pick from over 65 online payment gateway connections when configuring your store to take payments. BigCommerce also integrates with the most popular digital and mobile wallets, including Apple Pay, Amazon Pay, and others. Your store's nation and currency will decide the accessible payment channels."
  },
  {
    "title": "BigCommerce Store Development",
    icon: Crm,
    "description": "BigCommerce's flexible design gives mobile customization flexibility and a sophisticated eCommerce platform that connects with most eCommerce-related third-party applications and plugins."
  },
  {
    "title": "BigCommerce Theme Customization",
    icon: Maintain,
    "description": "A well-designed BigCommerce theme may help you establish and market a strong brand image; that is the truth. Customizing a BigCommerce theme is a clever approach to being creative and original with your BigCommerce store."
  },
  {
    "title": "BigCommerce Secure Shopping Cart",
    icon: Accountibility,
    "description": "BigCommerce Shopping Cart is a very effective tool for enhancing your online company. While searching for methods to increase firm profit, many merchants overlook the checkout procedure and fail to optimize it."
  },
  {
    "title": "BigCommerce Smart Search Integration",
    icon: Scalability,
    "description": "Scan your whole website in less than one second and offer relevant results across all pages. BigCommerce's facet search with Autocomplete, Suggestions, and Synonyms will simplify the route to items."
  },
  {
    "title": "BigCommerce Migration",
    icon: Crm,
    "description": "We provide a variety of methods to migrate your data, ranging from self-service catalog transfer applications to fully managed transfers via BigCommerce's Data Migration Services team."
  },
  {
    "title": "BigCommerce Support & Maintenance",
    icon: Accountibility,
    "description": "The upkeep of a digital platform is just as necessary as the platform's initial construction, and maybe even more so. It is essential to do so consistently. Even after the completion of the project, we will continue to provide uninterrupted support and maintenance for your eCommerce platform."
  }
];

const SoftwareBenifits = [
  {
    title: "Software Development for Startups",
    description:
      "Are you going to develop software for your company that will set you apart from the competition? We can deliver you an innovative startup software development solution that puts your brand front and center if we bring a team of knowledgeable business analysts, project managers, and tech leaders on board."
  },
  {
    title: "Web App Development",
    description:
      "Our web development services span a wide range of options focused on helping you establish high-quality, responsive, and user-friendly web apps adapted to your company's needs. From sophisticated web app development to developing brand websites, we can help you achieve this goal."
  },
  {
    title: "Enterprise Software Development",
    description:
      "Being a leading corporate software development firm, we provide complex software solutions that assist clients in increasing productivity, streamlining processes, and expanding their businesses. Our corporate software solutions are built with the newest technology and work smoothly with current systems."
  },
  {
    title: "Mobile App Development",
    description:
      "We provide complete mobile app development services to build unique, captivating, and performance-optimized mobile apps for the iOS and Android platforms using native and cross-platform technologies."
  },
  {
    title: "Software Product Development",
    description:
      "Have an original software concept? Hire a dedicated development team that helps you design market-ready solutions that contemporary people desire, from conception to validation, with MVP development, testing, and deployment."
  },
  {
    title: "Legacy Software Modernization",
    description:
      "We are renowned for providing inventive and meticulous services for modernizing legacy software, which involve evaluating the software as it is today, pinpointing places in need of development, and reviving outdated programs with the help of contemporary technology."
  }
];


const AppDev_experties = [
  {
    "title": "MVP",
    "description": "Consult with our industry professionals on the viability of your Mobile App Development Services in light of the most recent market and technological developments so that you may create a feature-rich minimum viable product version.",
    icon: Maintain,
  },
  {
    "title": "Competitor Analysis",
    "description": "To establish a product design and development strategy that is pertinent and realistic, we do a parameterized investigation of all of the essential traits shared by your primary rivals.",
    icon: Accountibility,
  },
  {
    "title": "Technology Stack",
    "description": "After we have gathered all of the criteria for the project, our app development specialists will assist you in selecting the technological stack that is both the most suitable and resourceful, ensuring the highest possible level of product effectiveness.",
    icon: Scalability,
  },
  {
    "title": "Ecosystem Integration",
    "description": "We assist companies in the incorporation of safe and reliable ecosystems that are powered by cutting-edge technological resources. Our software development and consulting services range from managing data flow to monitoring all simultaneous operations inside the application environment.",
    icon: Crm,
  },
  {
    "title": "Post-Delivery Support",
    "description": "Your post-delivery project needs will be visualized by an innovative team of mobile app development experts, who will carve out a one-of-a-kind, thorough, practical, and pragmatic product maintenance plan.",
    icon: Maintain,
  },
  {
    "title": "Testing",
    "description": "Using a testing strategy that is more focused on experience, our app development consultant will walk you through the process of scrutinizing your application’s functionality, usability, and performance.",
    icon: Accountibility,
  }
];

const BigCommerece_benifits = [
  {
    "title": "Scale and Flex",
    icon: Maintain,
    "description": "The versatile and adaptable BigCommerce e-commerce platform can expand with your company. BigCommerce lets online shops grow without infrastructure or performance difficulties."
  },
  {
    "title": "Management and Usability",
    icon: Accountibility,
    "description": "Businesses with no technical knowledge can establish sophisticated storefronts using its drag-and-drop editor and configurable layouts. BigCommerce's inventory, order, and customer support tools improve business administration."
  },
  {
    "title": "Practical Marketing and Conversion Tools",
    icon: Scalability,
    "description": "BigCommerce offers powerful SEO, configurable discounts, abandoned cart recovery, and email marketing connectors. Businesses may reach their target audience and boost online sales with these built-in marketing options."
  },
  {
    "title": "E-Payment Solutions",
    icon: Crm,
    "description": "BigCommerce interfaces with top payment gateways, enabling companies to provide many payment alternatives. Credit cards, digital wallets, and other payment options are safe and dependable with BigCommerce."
  },
  {
    "title": "Mobile-Friendly Design",
    icon: Maintain,
    "description": "For a smooth shopping experience across devices, BigCommerce provides adaptable and mobile-friendly design templates. Mobile buying is growing; thus, online retailers must have a mobile-friendly interface."
  },
  {
    "title": "Powerful Analytics and Reports",
    icon: Accountibility,
    "description": "Businesses can measure important indicators, monitor performance, and obtain valuable insights into their online store using BigCommerce's analytics and reporting capabilities. It helps companies enhance their e-commerce strategy by analyzing sales patterns and marketing ROI."
  }
];

const Growing_AI = [
  {
    "value": "$30 Billion",
    icon: AI5,
    "description": "The expected expansion of the AI-powered automation market by 2030."
  },
  {
    "value": "60%",
    icon: AI2,
    "description": "The percentage of global enterprises implementing AI technologies by 2024, showing its widespread adoption."
  },
  {
    "value": "$3 Trillion",
    icon: AI6,
    "description": "Projected economic value AI will bring to industries like healthcare, finance, and manufacturing by 2025."
  },
  {
    "value": "$350 Billion",
    icon: AI3,
    "description": "The anticipated value of the European AI market by 2027, reflecting increasing investment across regions."
  },
  {
    "value": "12% – 18%",
    icon: AI1,
    "description": "The forecasted growth rate of the AI-driven cybersecurity market, underlining AI's impact in safeguarding digital spaces."
  },
  {
    "value": "$500 Billion",
    icon: AI4,
    "description": "The estimated value of the global AI-driven fraud detection market by 2030, demonstrating its growing importance in financial security."
  }
];

const AI_benifits = [
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

const Chatbot_benifits = [
  {
    "title": "Constantly Available",
    "description": "Chatbots provide 24/7 customer assistance for organizations. Chatbot Development Services help organizations boost client satisfaction and loyalty by giving fast service regardless of time zone or operation hours.",
    icon: Maintain,
  },
  {
    "title": "Personalization of Service",
    "description": "Businesses provide tailored and contextually relevant experiences using chatbots. Chatbots employ data and machine learning algorithms to customize replies and suggestions based on user preferences, offering a rewarding customer experience.",
    icon: Accountibility,
  },
  {
    "title": "Efficiency, scalability",
    "description": "Chatbots allow human agents to work on more challenging activities and strategic projects by managing routine queries, order processing, appointment scheduling, and more, improving productivity and cost savings.",
    icon: Scalability,
  },
  {
    "title": "The Multichannel Integration",
    "description": "Chatbots fit effortlessly into websites, smartphone applications, chat systems, and social media which help increase omnichannel engagement and brand loyalty by using Chatbots across several touchpoints to provide consumers with a consistent experience.",
    icon: Crm,
  },
  {
    "title": "Analyses of Data",
    "description": "Businesses can use chatbot data to enhance operations and decision-making. Through user interactions, sentiment analysis, and conversion data, organizations can learn about client preferences and behavior patterns to customize their offers and marketing tactics.",
    icon: Maintain,
  },
  {
    "title": "Creativeness and Difference",
    "description": "Advanced Chatbots with NLP, sentiment analysis, and predictive analytics can provide cutting-edge customer experiences that differentiate enterprises, build brand awareness, and attract new consumers.",
    icon: Accountibility,
  }
];

const UIUX_benifits = [
  {
    "title": "Improved User Satisfaction",
    "description": "Well-designed interfaces improve customer happiness by improving product engagement. UI design emphasizes aesthetics and layout to provide pleasant and intuitive visuals. UX design guarantees that the product efficiently satisfies consumers' demands.",
    icon: Maintain,
  },
  {
    "title": "Increased User Engagement",
    "description": "Our UI/UX design draws consumers in and promotes further exploration. An intuitive design simplifies product usage and the increased engagement can boost session length and interaction rates by keeping users on the app or website longer.",
    icon: Accountibility,
  },
  {
    "title": "Higher Conversion Rates",
    "description": "User-friendly interfaces and easy user journeys reduce friction when trying to convince consumers to join up, buy, or do other things. Eliminating barriers and streamlining procedures increases conversion rates by encouraging users to take business-driven activities.",
    icon: Scalability,
  },
  {
    "title": "Reduced Development Costs",
    "description": "Avoid costly product launch changes by identifying and fixing usability concerns during design. Testing and feedback throughout design help create a product that matches customer expectations, eliminating expensive post-launch changes.",
    icon: Crm,
  },
  {
    "title": "Strengthened Brand Loyalty",
    "description": "Positive product experiences boost brand perceptions. Customer satisfaction increases repeat purchases. They are also more inclined to recommend the product, increasing word-of-mouth.",
    icon: Maintain,
  },
  {
    "title": "Competitive Advantage",
    "description": "Functional and exciting goods are preferred. Well-designed websites retain more consumers than competitors. By increasing user experience, UI/UX design benefits businesses in several ways.",
    icon: Accountibility,
  }
];

const Mobile_experties = [
  {
    "title": "Android To IOS",
    "description": "We will Convert Android App to iPhone App so that it has high-level functionality on both platforms so that you can attract premium customers and increase your income.",
    icon: Type_1,
  },
  {
    "title": "IOS To Android",
    "description": "Over seventy-five percent of people worldwide use Android, while the remaining use iOS. Therefore, we can Convert iPhone App to Android App to help you to reach a larger audience overall with",
    icon: Type_2,
  },
  {
    "title": "Hybrid To Native App",
    "description": "There is no need for you to be concerned if you are unsatisfied with your hybrid app's performance since we can transfer to a native app with the highest level of functionality and the most native functionalities of any app in its category.",
    icon: Type_3,
  },
  {
    "title": "Website To Mobile App",
    "description": "We ensure that the mobile application migration will result in a sizable user base and provide you with a whole new digital platform on which to run your company.",
    icon: Type_4,
  },
  {
    "title": "Native To Hybrid App",
    "description": "We can develop cost-effective mobile applications for you that we code just once without compromising the app's functionality, UI/UX design, or device selection. We construct these applications so that they can be used on any platform.",
    icon: Type_5,
  },
  {
    "title": "Intraporting",
    "description": "We customize the enhancements to the code features based on the client's requirements using an intraportal that can convert iOS Objective-C to iOS Swift or Android Java to Android Kotlin.",
    icon: Type_6,
  }
];

const ProgressiveWeb_experties = [
  {
    "title": "Progressive Web App Consultation",
    "description": "As a PWA development company, we have experienced consultants working dedicated to help you create your progressive web application. Get in touch with us to receive our end-to-end progressive web application.",
    icon: Type_1,
  },
  {
    "title": "Custom PWA Development Solutions",
    "description": "Because the top progressive web app developers we employ have been active in the field for over a decade, we have a comprehensive understanding of progressive web application development.",
    icon: Type_2,
  },
  {
    "title": "Fluid Progressive Web App Design",
    "description": "Our progressive web app developers are skilled in creating intuitive and catchy progressive web apps. Try it out for yourself and discover how our designs can inadvertently interact with your users to raise engagement and conversion rates.",
    icon: Type_3,
  },
  {
    "title": "Progressive Web App Migration",
    "description": "Hire a Dedicated PWA developer who works on our progressive web apps and has the experience necessary to migrate your entire company from its current system to a progressive web app without endangering any of your sensitive data",
    icon: Type_4,
  },
  {
    "title": "PWA Quality Assurance Services",
    "description": "To provide higher quality and a more exciting user experience, we will analyze your progressive web app, locate and eliminate any bugs or glitches that we find, and guarantee that its performance is faultless and seamless.",
    icon: Type_5,
  },
  {
    "title": "PWA Maintenance & Support",
    "description": "Integration of PWA, migration, regular checks, web app audits, and even upgrades, among many other services, are all available. We create progressive web apps of better quality while assuring faultless performance and a wealth of features.",
    icon: Type_6,
  }
];

const Chatbot_experties = [
  {
    "title": "Structure Of A Conversation",
    "description": "To a large extent, UI/UX 2.0. Natural Language Interfaces (NLIs) will be used with more conventional user interface components such as buttons, menus, and pictures to make our interfaces conversational.",
    icon: Type_1,
  },
  {
    "title": "The Chatbot Architectural Framework",
    "description": "Our chatbot software developers have created bots for usage both internally and by consumers. As a result, we are familiar with the specific combinations of frameworks, APIs, and chatbot development processes that will be most effective in various use scenarios.",
    icon: Type_2,
  },
  {
    "title": "Natural Language Processing",
    "description": "We use natural language understanding and processing to recognize different categories, such as intentions, actions, entities, and context, around which replies may be structured.",
    icon: Type_3,
  },
  {
    "title": "Processing Pipeline",
    "description": "Our chatbot developers use a pre-processing pipeline to handle typical issues with dependency parsing, lemmatization, POS-checking, and other tasks, which helps limit the number of false negatives and false positives.",
    icon: Type_4,
  },
  {
    "title": "Deployment & Integration",
    "description": "The Chatbot will be available for deployment as soon as the chatbot development life cycle has been completed. Our chatbot developers are capable of on-premise or cloud deployment, as well as microservices and REST-based design, for as little downtime as possible.",
    icon: Type_5,
  },
  {
    "title": "Chatbot Consulting Company",
    "description": "Please don't hesitate to contact us if you have questions about creating chatbots. Our expert will provide you with no-cost guidance and recommendations about the design and development of a Chatbot.",
    icon: Type_6,
  }
];

const StartupConsulting_eexperties = [
  {
    "title": "Research",
    "description": "We will help you prioritize the items that your startup should concentrate on, both in the early stages and for the long term, by providing you with up-to-date market research as well as a comprehensive industry overview that we will give you.",
    icon: Type_1,
  },
  {
    "title": "Startup Formation",
    "description": "We may provide you with the assistance of a startup consultant who will assist you in formulating a business plan that is tailored to your services and goals.",
    icon: Type_2,
  },
  {
    "title": "Startup Branding",
    "description": "Our business startup consulting firm will collaborate with you and your team to establish a unified brand identity that accurately expresses your company startup's overall vision and ethos.",
    icon: Type_3,
  },
  {
    "title": "Scaling",
    "description": "You will be able to establish a roadmap to expanding your startup and increasing overall revenue with the assistance of our engineers and management consulting professionals.",
    icon: Type_4,
  },
  {
    "title": "Monetization",
    "description": "We apply the consulting business experience to your venture to build a marketing plan that will capitalize on profitable ways of monetizing in a manner that is consistent with the goal of the founders of your startup company.",
    icon: Type_5,
  },
  {
    "title": "Unprecedented Challenges",
    "description": "Because we concentrate on new ventures and young companies, we have the practical expertise necessary to overcome challenges that demand urgent attention from an expert.",
    icon: Type_6,
  }
];

const AppDev_benifits = [
  {
    "title": "Strategy and Roadmap",
    "description": "We collaborate with you to create an app development strategy that meets your company goals. Our consultants utilize industry trends, customer demands, and competitor offers to design a roadmap for development from idea to launch and beyond.",
     icon: Maintain,
  },
  {
    "title": "Tech Choice and Architecture Design",
    "description": "Choosing the correct technology stack and architecture is critical for app success. Our App Development Consulting Services help you choose the best technologies and create a scalable and efficient architecture for your app's needs and growth.",
    icon: Accountibility,
  },
  {
    "title": "Designing User Experience and Interface",
    "description": "App success depends on UX and interface design. Our experts design intuitive, engaging, and usable interfaces that please users. We study users, produce wireframes and prototypes, and refine designs to make your app great.",
    icon: Scalability,
  },
  {
    "title": "Agile Development Methodologies",
    "description": "Agile development approaches provide flexibility, cooperation, and quick iteration. App Development Consulting Services use Agile methods to help your team adapt to changing needs, deliver features progressively, and react to feedback in real-time.",
    icon: Crm,
  },
  {
    "title": "Testing and QA",
    "description": "To find and fix bugs before launch, our experts create functional, usability, performance, and security testing plans. We provide a high-quality product that satisfies user expectations using industry best practices and testing frameworks.",
    icon: Maintain,
  },
  {
    "title": "Optimization and Launch Strategy for App Store",
    "description": "We can improve your app store appearance, build interesting app listings, and execute successful marketing methods to increase user engagement. We advise on app store optimization (ASO) and continuous marketing to boost app exposure.",
    icon: Accountibility,
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

const Iped_Tech = [
  {
    "category": "Backend",
    icon: FaCube,
    "items": [
      ".NET",
      "Node",
      "JAVA",
      "Ruby on Rails",
      "PHP"
    ]
  },
  {
    "category": "Frontend",
    icon: FaDesktop,
    "items": [
      "Java",
      "Kotlin",
      "RxJava",
      "RxKotlin",
      "Coroutines Kotlin"
    ]
  },
  {
    "category": "Database",
    icon: FaDatabase,
    "items": [
      "SQLite",
      "CoreData",
      "Realm",
      "Firebase"
    ]
  },
  {
    "category": "Devops",
    icon: FaCogs,
    "items": [
      "CI/CD",
      "GitHub Actions"
    ]
  },
  {
    "category": "Testing",
    icon: FaAward,
    "items": [
      "Appium",
      "BrowserStack",
      "Katalon Test Studio"
    ]
  },
  {
    "category": "Project Management Tools",
    icon: FaTasks,
    "items": [
      "Jira",
      "Slack",
      "Microsoft Teams",
      "Trello"
    ]
  }
];

const Hybrid_Tech = [
  {
    "category": "iOS",
    "items": [
      "Swift",
      "Objective-C",
      "X-Code",
      "SwiftUI"
    ]
  },
  {
    "category": "Android",
    "items": [
      "Java",
      "Kotlin",
      "Android Studio",
      "Version control tools (Git, GitLab, Bit Bucket)"
    ]
  },
  {
    "category": "Cross Platform",
    "items": [
      "Flutter",
      "React Native",
      "Ionic",
      "NativeScript"
    ]
  },
  {
    "category": "Database",
    "items": [
      "Firebase",
      "Redis",
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "DynamoDB",
      "SQLite"
    ]
  },
  {
    "category": "Design Tool",
    "items": [
      "Figma",
      "Sketch",
      "Adobe XD",
      "Zeplin",
      "Photoshop",
      "Illustrator",
      "After Effects",
      "InVision"
    ]
  }
];

const Laravel_Tech = [
  {
    title: "Livewire",
    description: "Livewire enables our developers to control front-end interactions directly in PHP, simplifying responsive, interactive user interfaces while keeping Laravel's simplicity and resilience.",
    icon: <img src={cuttingEdge_1} alt="Icons" />,
  },
  {
    title: "Inertia.js",
    description: "We use Laravel's routing and controllers with Vue.js or React to create rich, interactive front-end components, simplifying SPA development.",
    icon: <img src={cuttingEdge_2} alt="Icons" />,
  },
  {
    title: "Laravel Octane",
    description: "Keeping apps in memory between requests saves boot times and improves request handling, improving response times, scalability, and server resource efficiency.",
    icon: <img src={cuttingEdge_3} alt="Icons" />,
  },
  {
    title: "Laravel Nova",
    description: "With Laravel Nova, we manage resources, execute CRUD operations, and create custom tools in a beautiful, intuitive interface that boosts productivity and streamlines administrative work.",
    icon: <img src={cuttingEdge_4} alt="Icons" />,
  },
  {
    title: "Docker",
    description: "Containerizing Laravel applications using Docker simplifies development and deployment by replicating the same environment from development to production, assuring stability and scalability.",
    icon: <img src={cuttingEdge_5} alt="Icons" />,
  },
  {
    title: "Tailwind CSS",
    description: "Tailwind CSS's utility-first CSS framework and extensive set of low-level classes allow complex, responsive designs to be created directly in HTML, speeding up front-end development.",
    icon: <img src={cuttingEdge_6} alt="Icons" />,
  },
];

const crmServices = [
  {
    title: "CRM Implementation",
    description:
      "We enhance the universal CRM experience using Robotic Process Automation (RPA) by utilizing many platforms, such as automatic data input and reporting.",
    icon: <img src={cuttingEdge_1} alt="Icons" />,
  },
  {
    title: "CRM Migration",
    description:
      "With CRM Migration, we seek to ensure the integrity of your data throughout its move from old to new CRM systems. Our CRM dynamics developer converts data from one system to another based on requirements."
  },
  {
    title: "CRM Customization",
    description:
      "We provide CRM for software development with typical business CRM capabilities that assist entrepreneurs in achieving their sales and customer retention objectives."
  },
  {
    title: "CRM Integration",
    description:
      "We provide a CRM system for business development accessible in real-time through many global communication channels to all CRM users. We integrate AI to analyze customer inputs and provide intelligent suggestions."
  },
  {
    title: "Custom Module",
    description:
      "We provide a choice of modules based on the requirements of our customers if you are looking for outsourcing CRM development. Our modules work together to provide smooth sales and marketing operations for your company's clients. Our modules generate impressive processes, which our customers and detractors acknowledge."
  },
  {
    title: "Custom Dashboard",
    description:
      "We provide CRM web development with analytical and user-friendly dashboards that provide your team with robust statistics and calculative tables. Hire CRM website developers to create unique dashboards that offer reports in a few seconds. Your service, marketing, and sales data are integrated into your CRM credentials and complex queries."
  }
];

const crm_benifits = [
  {
    title: "Centralized Data",
    description:
      "CRM development lets companies concentrate customer data from several sources. Our complete perspective of consumer interactions, preferences, and history empowers organizations to customize and improve customer experiences.",
    icon: Maintain,
  },
  {
    title: "Customer Engagement",
    description:
      "CRMs enable customer contact via email, phone, social media, and chat. CRM creation services link different channels into a single platform, helping companies react quickly to consumer questions, nurture prospects, and strengthen relationships.",
    icon: Scalability
  },
  {
    title: "Automating Sales",
    description:
      "CRMs automate lead generation, scoring, email campaigns, and follow-up reminders. CRM developers optimize workflows, triggers, and automation rules to boost productivity and income.",
    icon: Crm
  },
  {
    title: "Data Insights",
    description:
      "CRM systems analyze customer data, provide reports, and reveal sales performance, customer behavior, and market trends. CRM development helps firms enhance strategy and make data-driven choices via dashboards, analytics, and predictive models.",
    icon: Accountibility
  },
  {
    title: "Scalability, Customization",
    description:
      "CRM developers customize CRM systems for corporate needs and scalability. CRM developers guarantee that the CRM system meets corporate operations and growth goals by customizing fields, workflows, and connectors.",
    icon: Maintain
  },
  {
    title: "Improved Efficiency",
    description:
      "CRMs let sales, marketing, and customer support teams share information. CRM development services design role-based access restrictions, collaboration tools, and mobile access to let teams collaborate on client interactions and exchange information.",
    icon: Scalability
  }
];



const IT_Tech = [
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
    "category": "Monitoring and Logging Tools",
    "items": [
      "Prometheus",
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
    "category": "Database",
    "items": [
      "Firebase",
      "Redis",
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "DynamoDB",
      "SQLite"
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

const AppDev_Tech = [
  {
    "title": "Backend",
    icon: FaCube,
    "items": [
      ".NET",
      "Node",
      "Java",
      "Ruby on Rails",
      "PHP"
    ]
  },
  {
    "title": "Front End",
    icon: FaDesktop,
    "items": [
      "Java",
      "Kotlin",
      "RxJava",
      "RxKotlin",
      "Coroutines Kotlin"
    ]
  },
  {
    "title": "Database",
    icon: FaDatabase,
    "items": [
      "SQLite",
      "Realm",
      "CoreData",
      "Firebase"
    ]
  },
  {
    "title": "DevOps",
    icon: FaTasks,
    "items": [
      "CI/CD",
      "GitHub Actions"
    ]
  },
  {
    "title": "Testing",
    icon: FaAward,
    "items": [
      "Appium",
      "BrowserStack",
      "Katalon Test Studio"
    ]
  },
  {
    "title": "Project Management Tools",
    icon: FaTasks,
    "items": [
      "Jira",
      "Microsoft Teams",
      "Slack",
      "Trello"
    ]
  }
];

const Mobile_Tech = [
  {
    "title": "Backend",
    icon: FaCube,
    "items": [
      ".NET",
      "Node",
      "Java",
      "Ruby on Rails",
      "PHP"
    ]
  },
  {
    "title": "Front End",
    icon: FaDesktop,
    "items": [
      "Java",
      "Kotlin",
      "RxJava",
      "RxKotlin",
      "Coroutines Kotlin"
    ]
  },
  {
    "title": "Database",
    icon: FaDatabase,
    "items": [
      "SQLite",
      "Realm",
      "CoreData",
      "Firebase"
    ]
  },
  {
    "title": "DevOps",
    icon: FaTasks,
    "items": [
      "CI/CD",
      "GitHub Actions"
    ]
  },
  {
    "title": "Testing",
    icon: FaAward,
    "items": [
      "Appium",
      "BrowserStack",
      "Katalon Test Studio"
    ]
  },
  {
    "title": "Project Management Tools",
    icon: FaTasks,
    "items": [
      "Jira",
      "Microsoft Teams",
      "Slack",
      "Trello"
    ]
  }
];

const Digital_Tech = [
  {
    "title": "Language & Technologies",
    icon: FaCube,
    "items": [
      "Bootstrap",
      "HTML 5",
      "JQuery",
      "Less",
      "CSS 3"
    ]
  },
  {
    "title": "Wireframe & Prototype",
    icon: FaDesktop,
    "items": [
      "InVision",
      "Adobe XD",
      "Balsamiq",
      "Google Web Designer",
      "Marvel",
      "Figma"
    ]
  },
  {
    "title": "Visual Design",
    icon: FaDatabase,
    "items": [
      "Photoshop",
      "XD",
      "Illustrator",
      "Sketch",
      "InDesign",
      "Figma"
    ]
  },
  {
    "title": "Design Assets",
    icon: FaTasks,
    "items": [
      "Zeplin",
      "Marvel",
      "InVision",
      "Sketch",
      "Figma",
      "Avocode"
    ]
  },
  {
    "title": "Testing",
    icon: FaCube,
    "items": [
      "Selenium",
      "Apache JMeter",
      "Test Rail",
      "BrowserStack",
      "Postman",
      "OWASP ZAP"
    ]
  },
  {
    "title": "Communication Tools",
    icon: FaDesktop,
    "items": [
      "Skype",
      "JIRA",
      "Slack",
      "Trello",
      "ASANA"
    ]
  }
];

const AI_Tech = [
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
      "Power Bi",
      "Microsoft SQL Server",
      "Microsoft Excel",
      "Grafana"
    ]
  }
];

const UI_UX_Tech = [
  {
    "title": "Language & Technologies",
    icon: FaCube,
    "items": [
      "Bootstrap",
      "HTML 5",
      "JQuery",
      "Less",
      "CSS 3"
    ]
  },
  {
    "title": "Wireframe & Prototype",
    icon: FaDesktop,
    "items": [
      "InVision",
      "Adobe XD",
      "Balsamiq",
      "Google Web Designer",
      "Marvel",
      "Figma"
    ]
  },
  {
    "title": "Visual Design",
    icon: FaTasks,
    "items": [
      "Photoshop",
      "XD",
      "Illustrator",
      "Sketch",
      "InDesign",
      "Figma"
    ]
  },
  {
    "title": "Design Assets",
    icon: FaDatabase,
    "items": [
      "Zeplin",
      "Marvel",
      "InVision",
      "Sketch",
      "Figma",
      "Avocode"
    ]
  },
  {
    "title": "Testing",
    icon: FaAward,
    "items": [
      "Selenium",
      "Apache JMeter",
      "Test Rail",
      "BrowserStack",
      "Postman",
      "OWASP ZAP"
    ]
  },
  {
    "title": "Communication Tools",
    icon: FaAward,
    "items": [
      "Skype",
      "JIRA",
      "Slack",
      "Trello",
      "ASANA"
    ]
  }
];

const TypeScript_Tech = [
  {
    "title": "Backend",
    icon: FaCube,
    "items": [
      ".NET",
      "Node",
      "JAVA",
      "Ruby on Rails",
      "PHP"
    ]
  },
  {
    "title": "Frontend",
    icon: FaDesktop,
    "items": [
      "Java",
      "Kotlin",
      "RxJava",
      "RxKotlin",
      "Coroutines Kotlin"
    ]
  },
  {
    "title": "Database",
    icon: FaDatabase,
    "items": [
      "SQLite",
      "Realm",
      "CoreData",
      "Firebase"
    ]
  },
  {
    "title": "Devops",
    icon: FaTasks,
    "items": [
      "CI/CD",
      "GitHub Actions"
    ]
  },
  {
    "title": "Testing",
    icon: FaAward,
    "items": [
      "Appium",
      "BrowserStack",
      "Katalon Test Studio"
    ]
  },
  {
    "title": "Project Management Tools",
    icon: FaTasks,
    "items": [
      "Jira",
      "Microsoft Teams",
      "Slack",
      "Trello"
    ]
  }
];

const Python_Tech = [
  {
    "category": "Python development frameworks",
    "items": [
      "Django",
      "Flask",
      "Pyramid",
      "TurboGears",
      "Tornado",
      "Masonite",
      "CherryPy",
      "Redis",
      "nginx",
      "LightGBM",
      "PyTorch",
      "Twisted",
      "Falcon"
    ]
  },
  {
    "category": "ML libraries",
    "items": [
      "Asyncio",
      "Matplotlib",
      "SpaCy",
      "Gensim",
      "Scikit Learn",
      "pandas",
      "OpenCV",
      "SciPy",
      "TensorFlow",
      "NumPy"
    ]
  },
  {
    "category": "IoT",
    "items": [
      "Raspberry Pi",
      "AWS IoT Services",
      "Azure IoT Hub",
      "EVE"
    ]
  },
  {
    "category": "Open-source enterprise solutions",
    "items": [
      "Odoo"
    ]
  },
  {
    "category": "Content management systems (CMS)",
    "items": [
      "Open edX",
      "Django-Oscar",
      "Django-SHOP",
      "Mezzanine"
    ]
  },
  {
    "category": "Clouds",
    "items": [
      "Amazon Web Services",
      "Microsoft Azure",
      "Google Cloud Platform",
      "DigitalOcean",
      "Rackspace Technology"
    ]
  },
  {
    "category": "Databases / data storages",
    "items": [
      "Microsoft SQL Server",
      "MySQL",
      "Oracle",
      "PostgreSQL",
      "Apache Cassandra",
      "Apache NiFi",
      "MongoDB"
    ]
  },
  {
    "category": "Cloud services",
    "items": [
      "Amazon S3",
      "Amazon DocumentDB",
      "Azure Blob Storage",
      "Azure SQL Database",
      "Azure Synapse Analytics",
      "Google Cloud SQL"
    ]
  },
  {
    "category": "Big data",
    "items": [
      "Apache Kafka",
      "MongoDB",
      "Amazon Redshift",
      "Amazon DynamoDB",
      "Amazon ElastiCache",
      "Azure Cosmos DB",
      "Azure Data Lake",
      "Google Cloud Datastore",
      "InfluxDB"
    ]
  }
];

const Product_Tech = [
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
      "Nest.js",
      "Koajs",
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
    "category": "Monitoring and Logging Tools",
    "items": [
      "Prometheus",
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
    "category": "Database",
    "items": [
      "Firebase",
      "Redis",
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "DynamoDB",
      "SQLite"
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

const Software_Tech = [
  {
    category: "Frontend",
    items: [
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
    category: "Full-stack Frameworks",
    items: ["NestJS", "Koa.js", "Nuxt.js", "MeteorJS", "Next.js"]
  },
  {
    category: "Backend Frameworks",
    items: [
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
    category: "Monitoring and Logging Tools",
    items: ["Prometheus", "Grafana", "Elasticsearch", "Logstash", "Kibana"]
  },
  {
    category: "Code Management",
    items: ["Bitbucket", "GitHub", "GitLab", "SonarQube", "Maven", "Gradle"]
  },
  {
    category: "Database",
    items: ["Firebase", "Redis", "PostgreSQL", "MongoDB", "MySQL", "DynamoDB", "SQLite"]
  },
  {
    category: "Cloud",
    items: [
      "Amazon Web Services (AWS)",
      "Microsoft Azure",
      "Google Cloud Platform (GCP)"
    ]
  }
];

const Application_Tech = [
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
    items: [
      "Figma",
      "Sketch",
      "Adobe XD",
      "Zeplin",
      "Photoshop",
      "Illustrator",
      "After Effects",
      "InVision"
    ]
  }
];


const Laravel_combo = [
  {
    title: "Laravel + ReactJS",
    description: "Our developers employ ReactJS and Laravel to build dynamic, interactive user interfaces that react instantly to user input.",
    icon: <img src={cuttingEdge_1} alt="Icons" />,
  },
  {
    title: "Laravel + Angular",
    description: "Using Angular with Laravel helps improve seamless integration, dynamic data binding, and component-based architecture.",
    icon: <img src={cuttingEdge_1} alt="Icons" />,
  },
  {
    title: "Laravel + Vue.js",
    description: "Combining Laravel with Vue.js allows for building modern, single-page applications with reactive components and efficient state management.",
    icon: <img src={cuttingEdge_1} alt="Icons" />,
  },
];

const Laravel_benifits = [
  {
    title: "Easy Documentation Process",
    description: "As a developer-friendly framework, Laravel makes release documentation straightforward. The Laravel API uses relatively consistent coding styles and concisely defined methods and classes.",
    icon: Maintain,
  },
  {
    title: "Extreme Security Encryption",
    description: "Laravel's encryption, authentication, and password protection all top-notches. To prevent data breaches, it gives CSRF tokens.",
    icon: Crm,
  },
  {
    title: "Built-in Project Environment",
    description: "The integrated PHP environment of Laravel simplifies difficult site development by organizing scripts. Artisan, its built-in tool, allows command-line Laravel interaction.",
    icon: Scalability,
  },
];

const TypeScript_benifits = [
  {
    title: "Type Safety, Error Prevention",
    description: "TypeScript uses static typing to identify development problems and improve code description and uses these characteristics to enhance the quality of code, minimize defects, and make applications more resilient and maintainable.",
    icon: Maintain,
  },
  {
    title: "Increased Efficiency",
    description: "TypeScript's type inference and code refactoring capabilities let developers produce clearer, more expressive, and error-free code. It help companies use these capabilities efficiently, speeding up development.",
    icon: Crm,
  },
  {
    title: "Ability to scale and maintain",
    description: "TypeScript is ideal for large-scale applications because of its static typing and modular design and assists organizations in building scalable, stable codebases that can scale with their demands, eliminating technical debt and assuring sustainability.",
    icon: Scalability,
  },
  {
    title: "Better Cooperation",
    description: "TypeScript's robust typing and explicit code structure simplify developer collaboration and guarantees your development team maintains uniform code standards and best practices, enhancing team communication and project productivity.",
    icon: Accountibility,
  },
  {
    title: "JavaScript Ecosystem compatibility",
    description: "JavaScript code can be smoothly incorporated into TypeScript applications. TypeScript Development Services lets organizations use their JavaScript libraries and frameworks with static typing and other TypeScript capabilities.",
    icon: Scalability,
  },
  {
    title: "Future-proof options",
    description: "TypeScript Development Services assist organizations in keeping current with TypeScript ecosystem developments and best practices to ensure their projects are future-proof and adaptable to new technologies and trends.",
    icon: Crm,
  },
];

const typescriptExpertise = [
  {
    "title": "TypeScript App Development",
    "description": "We have assembled a skilled group capable of developing an enterprise-grade mobile application that is resilient, scalable, and engaging. Our professionals guarantee the flawless and high-quality delivery of mobile app solutions with a user interface unparalleled in depth and breadth.",
    icon: Type_1,
  },
  {
    "title": "Endeavor App Development And APIs",
    "description": "When you work with us, you essentially agree to a prosperous future for your company. When planning an endeavor, we consider some factors: adaptability, user interface, speed, energy, and liquid usage. Get in touch with us right now!",
    icon: Type_2,
  },
  {
    "title": "TypeScript Consultation",
    "description": "Have a conversation with one of our TypeScript specialists if you have questions regarding TypeScript, including whether it has any benefits or drawbacks. Finding exact solutions for your company that is based on TypeScript is something our brightest brains can help you with.",
    icon: Type_3,
  },
  {
    "title": "Web App Development",
    "description": "Our experience as a typescript development company helps firms achieve resounding levels of success. We write our code in TypeScript and construct the structure using JavaScript, which ultimately leads to developing cutting-edge solutions in the form of web applications.",
    icon: Type_4,
  },
  {
    "title": "JS To TS Migration",
    "description": "If you wish to switch from your current platforms that use JavaScript to TypeScript, we can achieve this in as little as one, two, or three simple steps. Our TypeScript engineers use a straightforward method that does not include any potential risks to migrate from JS to TS successfully.",
    icon: Type_5,
  },
  {
    "title": "Maintenance & Support",
    "description": "We provide the most excellent support and maintenance services available, and we will assist you in keeping up the work, whether it is an update in the version being used or maintenance services. The reliable operation of your digital product is ensured by our use of various strategies and procedures.",
    icon: Type_6,
  }
];




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


const Common = () => {
  return (
    <>
      <ProcessWeFollow />
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
       <Technology_pannel
        techCards={mobileTech}
      />
      <Common />
    </>
  ),

  "cross platform app development": (
    <>
      <HeroSection
        title="Best Cross-Platform App Development Company in INDIA"
        description="At Kryzen Solutions, we provide cross-platform app development services for multiple platforms and devices using programming languages like HTML5, CSS3, and JavaScript."
        buttonText="Get Started"
        buttonLink="#contact"
        imageSrc={CrossDes}
        imageAlt="Digital Solutions illustration"
      />
      <LogoCarousel />
      <Charts img={CrossDev}
        h1="Hire Cross-Platform App Developers for Project"
        p1="Regardless of the platform, device, sector, or user base, our affordable cross-platform app development specializes in developing robust cross-platform applications that stand out and produce outcomes. By utilizing universal code, developing a common user interface, and testing cross-platform mobile apps to make sure all essential functions work with both iOS and Android, we guarantee the same user experience. With their expertise in cross-platform development, Sapphire's developers can design a multi-platform experience that fits your needs as a user, business, sector, or vertical."
      />
      <Quotes
        title="Build High-Quality Hybrid Applications Using Latest Technologies"
        highlightedText="Robust, Scalable, Innovative And Hybrid Applications"
        paragraphs={[
          "The cross-platform app is the future of mobile application development because it is a viable technology that reduces development time and expense while creating truly native applications. We are the leader in providing cross-platform app development services. Custom cross-platform application development companies have a well-versed team of cross-platform app developers capable of delivering a superior experience to our customers.",
          "In the cross-platform industry, our products get recognized for their high quality. By using the power of cross-platform technology, we realize unique business needs and design strategies to develop the best solutions. To deliver best-in-class cross-platform applications, top cross-platform development agencies use cutting-edge technology and specialize in a wide range of cross-platform development languages like Cordova/Ionic/PhoneGap, Sencha, Cocos 2DX, etc. Our skills, experience, and dedication distinguish us as a mobile app development company that stands out from the crowd.",
        ]}
        emphasizeTextIndex={[1]}
        emphasizePhrases={["hire mobile app developers"]}
      />
      <PremiumServices />
       <TechnologiesSlider
        title="Our Range Of Cross-Platform App Development Services Include"
        techCards={techCards}
      />
      <Benefits
        benifits={Cross_AppBenifits}
        sectionTitle="Benefits of Hiring Cross pPlateform App Development"
        sectionDescription="As the top mobile app development company, we have the required expertise and skills to create out of the ox apps."
      />
      <AboutUs />
      <TechnologyStack data={Custom_Technology} />
      <Common />
    </>
  ),

  "ipad app development services": (
    <>
      <HeroSection
        title="iPad App Development Services in INDIA"
        description="Our iPad App Development firm is well-known for its ability to build and design individualized iPad applications while adhering to the standards set by the Apple App Store."
        buttonText="Get Started"
        buttonLink="#contact"
        imageSrc={Iped}
        imageAlt="Digital Solutions illustration"
      />
      <LogoCarousel />
      <Charts
        img={IpedSection}
        img2={IpedDev}
        h1="Best iPad App Development Company"
        p1="Do you want a no-cost consultation with our app's foremost authority on iPad applications? Our iPad app development company employs a team of seasoned iPad app developers familiar with the most recent iPad app frameworks and the iPad Mobile Application development process, which spans from the validation of a concept to the introduction of a product. You can hire iPad Developers from us to develop the project of your dreams on schedule and within your financial constraints."
        h2="Brief About Our iPad App Development"
        p2={
          <>
           Our company is well-versed in developing highly interactive augmented reality app solutions, both those based on markers and those that do not need features. We see these apps as an extension of the actual world. We adhere to the most acceptable standards in the industry, which are related to Apple's Human Interface Guidelines and the stringent use policy for the iOS SDK.
           We provide audio and video call solutions using the WebRTC framework and other third-party calling solutions such as TokBox, Twilio, and others. Our iPad developers have expertise with several payment gateways, including Stripe, Authorize.Net, PayPal, and 2Checkout. They can assist you with making the most appropriate choice for your project.
          </>
        }
      />
      <Quotes
        title="Get A 100% Customizable iPad App Development By Experts"
        highlightedText="Building Scalable Secure IOS & Ipad Apps "
        paragraphs={[
          "We are a leading iPad app development company, and as such, we are supported by a team of experienced and knowledgeable iPad developers. Our iPad app development consultants have solid expertise in delivering robust iPad App Development Services, regardless of whether the iPad in question is part of the iPad Mini-Series or the original iPad. To improve the overall experience and bring your iPad app development project to an entirely new level, we use the most advanced capabilities, including Touch ID, Photokit, Manual Camera Controls, and Handoff.",
          "The applications we design not only fulfill your company's needs but are up to the required quality and safety levels, all without sacrificing the many aesthetic elements and functionality required.",
        ]}
        emphasizeTextIndex={[1]}
        emphasizePhrases={["hire mobile app developers"]}
      />
      <Benefits
        benifits={ipadExpertise}
        sectionTitle="The Expertise Of Our IPad App Developers"
        sectionDescription="You may maximize the value of your company's operations by using our cutting-edge Salesforce Application Development services to run your business more efficiently and effectively."
      />
      <PremiumServices />
      <Benefits
        benifits={ipadAppBenefits}
        sectionTitle="Benefits of iPad Development Service"
        sectionDescription="iPad app Development may boost corporate operations and client engagement."
      />
      <AboutUs />
      <TechnologyStack data={Iped_Tech} />
      <Common />
    </>
  ),

  "hybrid app development": (
    <>
      <HeroSection
        title="Hybrid App Development Company in INDIA"
        description="We are your one-stop shop for affordable Hybrid App Development services. We incorporate the best features of native programs to create robust cross-platform mobile applications that function identically to native applications on Android, iOS, and Windows."
        buttonText="Get Started"
        buttonLink="#contact"
        imageSrc={Hybrid}
        imageAlt="Digital Solutions illustration"
      />
      <LogoCarousel />
        <Charts
        img={HybridSection}
        img2={HybridDev}
        h1="The Reliable Hybrid App Development Company"
        p1="Our revolutionary hybrid app development services are equipped to handle all of your cross-platform app development challenges. We provide custom hybrid app development solutions that are compatible with numerous devices. With our hybrid mobile app development services, you can rapidly construct a high-quality hybrid app that suits your business's particular needs."
        h2="Brief About Hybrid App Development Services"
        p2={
          <>
           We offer Hybrid app development services to help you create hybrid apps with the latest features. Our design specialists ensure the ergonomic development of a hybrid application's user interface to enhance the user experience. Hiring a dedicated Hybrid App Developers team of highly qualified and experienced developers with unmatched competency and originality makes us a reliable partner for developing exceptional hybrid applications for your company.
          </>
        }
      />
      <Quotes
        title="Get 100% Customizable Hybrid App Development Services By Experts"
        highlightedText="Easy To Use And Customized Hybrid Apps"
        paragraphs={[
          "There are several cross-platform mobile app development businesses in India, but you must choose one that can accommodate your needs and finances. As the top Hybrid Mobile app Development Company, we adhere to the correct development technique. We continue to test the product utilizing app development so that the app will function properly after its release. We have a staff of highly-skilled and knowledgeable Hybrid app developers that can deal with various technologies and hybrid mobile app frameworks. We strive to serve you with a successful Customized Hybrid app Development in this manner.",
        ]}
        emphasizeTextIndex={[1]}
        emphasizePhrases={["hire mobile app developers"]}
      />
       <TechnologiesSlider
        title="Cutting Edge Technologies Kryzen Use For Hybrid App Development"
        techCards={techCards}
      />
      <PremiumServices />
      <Benefits
        benifits={benefits}
        sectionTitle="Benefits of Hiring our Mobile App Development Company"
        sectionDescription="As the top mobile app development company, we have the required expertise and skills to create out of the ox apps."
      />
      <AboutUs />
      <ImpactCards
        sectionTitle="Explore The Transformative Impact Of Hybrid App On Your Business Success"
        benefitCards={benefitCards}
        autoInterval={3500}
      />
      <SectorsSlider />
      <ExpertiseSlider
        expertiseCards={expertiseCards}
        sectionTitle="Our Expertise in Mobile App Development Services"
        sectionDescription="We specialize in top mobile app development services for every industry type and size. Our expertise includes:"
      />
      <Technology_pannel techCards={Hybrid_Tech} />
      <Common />
    </>
  ),

  "progressive web app development": (
    <>
      <HeroSection
        title="Progressive Web App Development Company in INDIA"
        description="Our PWA developers encourage small and medium-sized organizations and new companies to use progressive web apps for their operations."
        buttonText="Get Started"
        buttonLink="#contact"
        imageSrc={Progressive}
        imageAlt="Digital Solutions illustration"
      />
      <LogoCarousel />
      <Charts
        img={ProgressiveSection}
        img2={ProgressiveDev}
        h1="Leading Progressive Web App Development Company"
        p1="PWAs, which have specific properties inherent to native apps and websites, need less time and effort to create, resulting in less time to bring the product to market. In addition, Top PWA Development Services for Businesses may have their home screens added to a smartphone, desktop computer, or tablet and immediately begin functioning as native apps. This can be done without sacrificing the functionality or speed of the app. As a progressive web application development company, Affordable PWA Development Company PROMISE that when you use our progressive web application development services, you will only encounter progressive apps of the highest possible quality."
        h2="Brief About Progressive Web App Development Services "
        p2={
          <>
           We have a staff with imagination, invention, and years of industry expertise. Because of this, we can develop a Custom Progressive Web App Solutions that is lightning-fast, leaner, and more responsive than its competitors, and it rips the industry apart with its next-generation capabilities. Fast and Secure PWA Development Agency provide safe navigation in the same way that native mobile apps do for mobile devices. Best Progressive Web App Development Company makes the app practically indistinguishable from a typical app and easier to use. 
          </>
        }
      />
      <Quotes
        title="Get 100% Customizable Progressive Web App Development Services"
        highlightedText="Web Apps Featuring Full-Fledged Security"
        paragraphs={[
          "Hire Progressive Web App Developers to construct web apps that include full-fledged security and faster-loading web pages. Progressive web app development Services ensure smooth performance in a manner that is comparable to that of a native application. We place a significant emphasis on boosting user engagement with progressive app development. As a result, we develop progressive web apps and web application development service  whose functionality fulfils any image quality requirements and which are capable of operating on a variety of different platforms.",
          "Data analysis, push alerts, offline surfing, and seamless integration of distribution channels are some of the other distinctive features that have been included in our web applications. Our  web development company in INDIA  features revolve around the principal goal of increasing your engagement rates, maximizing conversions and providing a great user experience as necessary preconditions for your company's success in the digital market.",
        ]}
        emphasizeTextIndex={[1]}
        emphasizePhrases={["hire mobile app developers"]}
      />
      <Benefits
        benifits={ProgressiveWeb_experties}
        sectionTitle="The Expertise In Our Progressive Web App Development Services"
        sectionDescription="Our PWA app development company has years of experience in creating PWA."
      />
      <PremiumServices />
      <Benefits
        benifits={benefits}
        sectionTitle="Benefits of Progressive Web App Development Services"
        sectionDescription="Innovative Progressive Web App (PWA) Development Services lets organizations create web apps that work like apps on any device."
      />
      <AboutUs />
      <Technology_pannel techCards={Hybrid_Tech} />
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
  
  "custom mobile app development": (
    <>
      <HeroSection
        title="Custom Mobile App Development Company In India"
        description="We have a team of skilled custom app developers who are well-versed in creating custom applications. Connect with us today to get your free quote!"
        buttonText="Get Started"
        buttonLink="#contact"
        imageSrc={CostomApp}
        imageAlt="Digital Solutions illustration"
      />
      <LogoCarousel />
      <Charts
        img={CustomDes}
        img2={CustomAbout}
        h1="Affordable Custom Mobile Application Development Services"
        p1="It would help if you had a team of mobile app developers that would immerse themselves in your company environment and market. After all, this is the essence of custom mobile app development. Custom iOS and Android app development company in USA with UX/UI designers and engineers adapt custom app development services to customer’s specific needs and objectives, including Oracle, Printique, and Takeda, for over a decade, delivering award-winning apps for millions of mobile users. And now, you can use this knowledge to expedite your mobile app development. Whether you want Android or iOS app development services or augmented reality integration, our experts can help you bring your mobile concept to life."
        h2="Brief About Custom App Development Services"
        p2={<>INDIA-based Mobile App Development Agency provide enterprise-specific mobile apps with robust connectivity to optimize your operations. You can transform record-keeping systems into engagement systems and create user interactions that are more complex, intuitive, and simple.

          Our intelligent applications, you can create next-generation user experiences that fit today's digital requirements.</>}
      />
      <Quotes
        title="Get 100% Customizable Custom App Development Services"
        highlightedText="Sophisticated And Easily-Adapted Solutions"
        paragraphs={[
          "Since mobile devices have taken the globe by storm, demand for custom mobile app development services has skyrocketed. Each Best custom Mobile App Developers in INDIA, from startups to large corporations, felt compelled to develop an innovative app for its customers. It became apparent that it might promote consumer involvement, aid in promoting goods and services, improve customer service, and much more. However, Hire Custom Mobile App Developers in INDIA to get all of these advantages, it became clear that you could not rely on Enterprise Custom App Development Company in INDIA.",
          "Get Custom Mobile App Development Services in India from us that are compatible with the Android and iOS stores. You can avail our Custom Mobile App Development Services to develop solutions for smartphones and tablets and more. We are well known among people for developing customized applications that are intuitive, reliable and scalable.",
        ]}
        emphasizeTextIndex={[1]}
        emphasizePhrases={["hire mobile app developers"]}
      />
      <TechnologiesSlider />
      <PremiumServices />
      <Benefits
        benifits={expertiseCards}
        sectionTitle="Our Expertise in Custom App Development Services"
        sectionDescription="We specialize in top custom app development services for every industry type and size."
      />
      <Benefits
        benifits={Custom_benefits}
        sectionTitle="Benefits of Custom Mobile App Development"
        sectionDescription="Custom Mobile App Development Service lets firmsdesign custom apps for thire purposes."
      />
      <TechnologyStack data={Custom_Technology} />
      <Common />
    </>
  ),

  "b2b mobile app development": (
    <>
      <HeroSection
        title="B2B Mobile App Development Company in INDIA"
        description="Our best B2B app development services will provide your company with a new gateway to exciting growth prospects, allowing you to dominate your industry and gain an advantage over your rivals."
        buttonText="Get Started"
        buttonLink="#contact"
        imageSrc={B2B}
        imageAlt="Digital Solutions illustration"
      />
      <LogoCarousel />
      <Charts
        img={B2BSection}
        img2={B2BDev}
        h1="Delivering Business Mobile Application Development Services"
        p1="You'll be able to maximize your return on investment (ROI) and carve out a separate nook within the B2B mobile ecosystem with the help of our specialized and individualized solutions, which are tailored to specific business models and processes. As a top B2B app development company, we can fulfill any request for an app or digital marketing ,  including one that can manage business-to-business (B2B) relations for your company or directly serve business-to-consumer (B2C) customers. Our Custom B2B Mobile Application Development in USA is not specific to any industry, enabling us to make inroads into a growing number of new markets with each passing second."
        h2="Brief About B2B Mobile App Development Services "
        p2={<>Our Enterprise B2B mobile app developers and Business Mobile Application Development team has hands-on expertise in producing advanced quality business-to-business mobile applications. As a B2B App Development Company in USA, we develop these apps according to standards that need clean and efficient coding to provide the highest quality. 

          When developing mobile applications for businesses of any kind, Hire Developers for B2B App Solutions use an iterative and agile app development methodology. </>}
      />
      <Quotes
        title="Get 100% Customizable B2B Mobile App Development From Experts"
        highlightedText="Future-Proof Business Mobile Apps"
        paragraphs={[
          "If you are the CEO, CTO, or owner of a B2B company, then attracting new business, managing money, tracking leads, and monitoring sales and sales activities must be challenging work for you. It is hard to keep track of everything going on with your company if you have daily meetings as a businessperson does. However,  custom mobile app development company in INDIA  is the best b2b mobile apps optimal answer for effectively operating your business. Our corporate mobile app development team is skilled and qualified, and they can grasp your business-to-business needs to design and construct the most acceptable B2B mobile app solution",
          "It is simple to monitor other ongoing business-related responsibilities and to keep tabs on sales by the hour, the day, the week, or the month when using web- and mobile-based b2b solutions. There is no substitute for a B2B mobile app for managing the day-to-day operations of a business-to-business (b2b) organization and tasks such as monitoring workers' arrival and departure times, task assignment and completion, and unexpected absences.",
        ]}
        emphasizeTextIndex={[1]}
        emphasizePhrases={["hire mobile app developers"]}
      />
      <Benefits
        benifits={ProgressiveWeb_experties}
        sectionTitle="Expertise In Our B2B Mobile App Development Services"
        sectionDescription="Get native, hybrid, and customized mobile applications created by our experts."
      />
      <PremiumServices />
      <Benefits
        benifits={benefits}
        sectionTitle="Benefits of Hiring our Mobile App Development Company"
        sectionDescription="As the top mobile app development company, we have the required expertise and skills to create out of the ox apps."
      />
      <AboutUs />
      <Technology_pannel techCards={Hybrid_Tech} />
      <Common />
    </>
  ),

  "django development": (
    <>
      <HeroSection
        title="Django Development Company in INDIA"
        description="Django Is A Free, Open-Source, High-Level Django Web Development Framework Based On Python Programming"
        buttonText="Get Started"
        buttonLink="#contact"
        imageSrc={DJango}
        imageAlt="Digital Solutions illustration"
      />
      <LogoCarousel />
      <Charts
        img={Chart}
        img2={PieChart}
        h1="Bespoke Best Django Development Services"
        p1="Django makes it easy to quickly build programs that are clean, efficient, and highly functional. It is fast, secure, and extremely scalable, which is why it has become one of the leading choices in web application development. As an affordable Django development company, we have skilled developers with years of experience delivering complete Django solutions. From working with Django 1.x using Python 2 to Django 2 with Python 3, our team is well-versed in the entire framework. With our custom Django web development company, you can focus more on growing your business while we create powerful, reliable web solutions. Our goal is to help you bring your product to market faster and achieve the best possible return on investment."
        h2="Brief About Django Development Services"
        p2={
          <>
            The Django web development method is quite solid and practical, which immediately translates into considerable savings in terms of time and money. The development of Django is structured so that the development team only has to concentrate on the most significant components that call for customization.
            When it comes to online and mobile app development and the software development process in general, using Django enables the introduction of an unparalleled degree of cybersecurity. Hire Django developers; we have many alternatives to lessen the app's susceptibility to vulnerabilities.
          </>
        }
      />
      <Quotes
        title="Get 100% Customizable Django Development Services by Experts"
        highlightedText="Faster, Lighter, and Secure Apps"
        paragraphs={[
          "Our custom Django development services let you grow and retain value. We start by analyzing your company to identify potential weaknesses and openings. We then use the analysis's findings to develop transformation roadmaps that are reassuringly secure, growth-driven, and inventive. As a Django web development services company, we strongly emphasize picking the appropriate technological stack that works in conjunction with Django, the most effective components of design thinking, and the most reliable development tools to provide solutions that improve both the growth and the experience of the client.",
          "As a Django app development company, our seasoned professionals use agile approaches to cut down on time-to-market and provide your company with Django API development that is future-proof far sooner than you could anticipate. Together with us, you can unlock the full potential of the Django framework within the realm of website and Django app development. Top Django development agency uses the best IDE for Django development to develop superior web applications while requiring less coding.",
        ]}
        emphasizeTextIndex={[1]}
        emphasizePhrases={["hire mobile app developers"]}
      />
      <TechnologiesSlider />
      <Benefits
        benifits={Django_benifits}
        sectionTitle="Benefits of Django Devemlopment Service"
        sectionDescription="Bild dynamic web apps using Django Development Services' robust efficient framework. Here are six benefits of Django for development servvice."
      />
      <AboutUs />
      <ImpactCards
        sectionTitle="Explore The Transformative Impact Of Django Development On Your Business Success"
        benefitCards={Django_Impact}
        autoInterval={3500}
      />
      <ExpertiseSlider
        expertiseCards={expertiseCards}
        sectionTitle="The Expertise Of Our Django Development Service."
        sectionDescription="our Django developers Have years of expertise in developing Django solutions for you."
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
        title="Top Laravel Development Company"
        description="We are best Laravel development company that has achieved a high degree of skill in Laravel, which is now one of the most popular PHP-based frameworks that can be purchased on the market today. "
        buttonText="Get Started"
        buttonLink="#contact"
        imageSrc={Laravel}
        imageAlt="Digital Solutions illustration"
      />
      <LogoCarousel />
       <Charts
        img={LaravelSection}
        img2={LaravelDev}
        h1="Wide Range of Laravel Development Experts "
        p1="Our Top Laravel web development services for startups can you in developing everything from simple applications to intricate content management systems for online stores in a short amount of time and at a low cost. With Custom Laravel development services, you may anticipate receiving extraordinarily professional and innovative web and mobile apps. We have a team with a great deal of expertise and a successful track record. "
        h2="Affordable Laravel Development Services for Best Solutions"
        p2={
          <>
            Our enterprise-grade Laravel development solutions experts create strong, user-friendly web apps and custom solutions for your business and provide advice, design, development, testing, and deployment. We build secure, scalable, and fast apps using Laravel's rich capabilities to improve your business and offer API integration, e-commerce solutions, CRM development, and more for new and current projects. We also provide full maintenance and support to keep your application running properly and keeping up with advances.
          </>
        }
      />
      <Quotes
        title="Get 100% Customizable Laravel Development Services By Experts"
        highlightedText="Feature-Packed Web And Mobile Apps"
        paragraphs={[
          "When it comes to designing and executing projects of any scale built on Laravel technology, we have an advantage thanks to our world-class infrastructure, which provides us with a competitive edge. Since our company's start, we have offered our clients all-encompassing PHP web development services. As a top Laravel Development Company in the INDIA, we are the best in creating, testing, and maintaining user-friendly online applications. Whether you want to build a simple website or an advanced e-commerce platform with the help of Laravel App Development Services or Laravel technology, we have the resources and the employees to work hard to ensure your goals are met.",
          "Our Laravel Application Development Services provide extensive customization options, which allow for modifying the pre-existing features and functions of templates intended for a certain kind of commercial application. Whether it is a requirement analysis, website design, Laravel web development services, or testing, Hire Laravel Developers in the USA provides 100% attention to every aspect to construct an error-free website on a timely and on a budget that is fair to your pocketbook."
        ]}
        emphasizeTextIndex={[1]}
        emphasizePhrases={["hire mobile app developers"]}
      />
      <TechnologiesSlider title="Cutting Edge Technology Kryzen Use For Laravel Development" techCards={Laravel_Tech} />
      <PremiumServices />
      <TechnologiesSlider title="Combinations of Technologies Kryzen Use For Laravel Development" techCards={Laravel_combo}/>
      <Benefits
        benifits={Laravel_benifits}
        sectionTitle="Benefits of Using Laravel Development Service"
        sectionDescription="Laravel provides a number of securities features and reduces valnerabilities in the application."
      />
      <AboutUs />
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
        title="Best Python App Development in INDIA"
        description="Python is a wonderful time saver due to its many time-saving advantages, such as its simple programming interface and its rapid application development."
        buttonText="Get Started"
        buttonLink="#contact"
        imageSrc={Python}
        imageAlt="Digital Solutions illustration"
      />
      <LogoCarousel />
      <Charts
        img={PythonSection}
        img2={PythonDev}
        h1="Affordable Python App Development Services"
        p1="Many small and medium-sized enterprises (SMEs) choose top-rated Python Development Services for a wide range of web development projects—from simple websites to complex enterprise applications. Python excels in building RESTful APIs, making it ideal for integrating with existing systems or creating new, efficient interfaces. As a reliable Python backend development company, we offer a team of dedicated Python developers with over a decade of experience in delivering high-quality, scalable solutions. "
        h2="Top-Notch Python Develpoment Services"
        p2={
          <>
            Strong, scalable, and effective solutions catered to your company's requirements abound from our Python development services. Expert in Python frameworks, including Django, Flask, and FastAPI, we build data-driven solutions, custom web applications, and process automation. Our staff guarantees strong coding standards, flawless integration, and great performance. We provide solutions from basic scripts to sophisticated corporate systems, catering to many different sectors. Whether you want to improve an existing application or require a new one, our Python professionals offer end-to-end programming to guarantee a seamless and successful project deployment that propels your company ahead.
          </>
        }
      />
      <Quotes
        title="Get A 100% Customizable Python App Development By Experts"
        highlightedText="Embeddable, Extensible, And Portable Python App"
        paragraphs={[
          "We are a top Python Web Development Company with the best-in-class websites and online and mobile apps using the most cutting-edge technologies, Python development web framework, and programming language. Our cutting-edge python mobile app development solutions showcase one of Python's most prominent features, readability, and guarantee that the final output will be of the highest possible standard. We are a prominent Python web development firm in India, and we have considerable expertise in creating Python applications, including everything from the initial development, data interchange, and improvement processes to transitioning old programs to Python applications.",
          "Through cutting-edge and community-driven python application development methods, our group of highly skilled, accomplished, and informed individuals can provide the best possible level of client support. Our developers have an extensive background in dealing with scientific Python and supervised/unsupervised machine learning techniques with Scikit-learn. Our Python web development experts are well-versed in.NET, CORE, Asp.Net, Jinja2, Mako, and Vue.js, in addition to understanding the core design ideas.",
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
      <ReasonChoose title="Key Reasons to Choose Python Development Services" des="Because of its adaptability, simplicity, and broad capabilities, Python has evolved into the preferred programming language for many companies and professionals. These six factors help one decide on Python development services" benifits={Python_benifits}/>
      <ImpactCards
        sectionTitle="Explore The Transformative Impact Of Mobile App On Your Business Success"
        benefitCards={benefitCards}
        autoInterval={3500}
      />
      
      <ExpertiseSlider
        expertiseCards={expertiseCards}
        sectionTitle="Our Expertise in Mobile App Development Services"
        sectionDescription="We specialize in top mobile app development services for every industry type and size. Our expertise includes:"
      />
      <Technology_pannel techCards={Python_Tech} />
      <Common />
    </>
  ),

  "big commerce development": (
    <>
      <HeroSection
        title="Big Commerce Development Services in INDIA"
        description="Dealing with e-commerce in an industry with a lot of competition is challenging. Best BigCommerce development company provide endless chances to build, innovate, and grow as part of our commitment to our core value of 'Ignite Growth and Avoid Complexity'. "
        buttonText="Get Started"
        buttonLink="#contact"
        imageSrc={BigCommerce}
        imageAlt="Digital Solutions illustration"
      />
      <LogoCarousel />
      <Charts
        img={BigCommerceSection}
        img2={BigCommerceDev}
        h1="Big commerce Store Design and Development Services"
        p1="Utilize Affordable BigCommerce migration services and Custom BigCommerce solutions to build a scalable, fully customized eCommerce store that will allow you to sell across every touchpoint and manage all business activities with ease. We serve many businesses in the eCommerce sector and help them attain operational excellence. Our group of enthusiastic and highly qualified BigCommerce web developers is up to date on the newest trends in technology and industry best practices, so every project we work on is carried out with accuracy and creativity. "
        h2="Brief About Our Big Commerce Development"
        p2={
          <>
            You are already aware of the ease with which Bigcommerce can facilitate the quick expansion of your company. Top-rated BigCommerce development agency has a team of Bigcommerce developers will try to develop a solution to Bigcommerce Development that is both cost-effective and efficient. They will make sure that you receive the greatest ones available in each aspect of Bigcommerce, It is uncommon to acquire the top masterminds in the industry to work with  shopify development. We are committed to adhering to a timely strategy to complete your project's milestones successfully. We will not abandon you once the Bigcommerce web development is finished; instead, we will ensure that you meet all of the objectives and provide help whenever necessary.
          </>
        }
      />
      <Quotes
        title="Get A 100% Customizable Big Commerce Development By Experts"
        highlightedText="Enterprise to Consumer App, Native or Cross Platform"
        paragraphs={[
          "BigCommerce is an e-commerce platform that provides several advantages for online shops. Take advantage and Hire BigCommerce developers to establish your eCommerce business rapidly. The intuitive platform can be scaled up with little effort. It is simple to include your e-commerce website in various markets. There is no question that ecommerce mobile app development company  assist you in driving more visitors to your website with our BigCommerce Backend Development Services. Your online store's profitability may unquestionably benefit from implementing BigCommerce, an inexpensive and favorable solution to SEO. ",
          "We promise to use the most effective strategy currently available on the market for your company's needs. We want to improve our previous performance in delivering bigcommerce web design services. After successfully designing and developing more than 250 eCommerce shops, we just completed work on number 264. As a BigCommerce Web Design Company, we maintain this practice every other day. So we keep shattering our records with unmatched bigcommerce e-commerce development.",
        ]}
        emphasizeTextIndex={[1]}
        emphasizePhrases={["hire mobile app developers"]}
      />
      <Benefits
        benifits={BigCommerce_benifits}
        sectionTitle="The Expertise Of Our Big Commerce Developers"
        sectionDescription="As the top mobile app development company, we have the required expertise and skills to create out of the ox apps."
      />
      <PremiumServices />
      <Benefits
        benifits={BigCommerece_benifits}
        sectionTitle="Benefits Of BigCommerce Development"
        sectionDescription="In BigCommerce development, online shops are built and customized utilizing the top e-commerce platform. Six significant BigCommerce development benefits"
      />
      <AboutUs />
      <TechnologyStack data={TypeScript_Tech} />
      <Common />
    </>
  ),

  "ai/ml development": (
    <>
      <HeroSection
        title="Artificial Intelligence Development Company"
        description="Are you looking to Mold the future of your company ability to thrive with Artificial Intelligence Solutions for Business? We are the industry leader as a Custom AI Software Development Company in Artificial intelligence development services that are more intelligent. "
        buttonText="Get Started"
        buttonLink="#contact"
        imageSrc={AI}
        imageAlt="Digital Solutions illustration"
      />
      <LogoCarousel />
      <Charts
        img={AISection}
        img2={AIDev}
        h1=" Delivering Top Rated AI Development Services Globally "
        p1="We guarantee Affordable AI development services and innovative AI Software Development Services, online apps, and mobile software by combining the efforts of our skilled professionals. Our best artificial intelligence development company will aid decision-makers in obtaining a better understanding of their respective business ecosystems, whether those decision-makers work for tech startups, retail companies, hospitals, or corporations. Top Rated AI app development company guarantee additional digital possibilities are made available to Best AI Development Company by minimizing the associated risks using our cutting-edge artificial intelligence software development.  "
        h2=" AI Driven Solutions for Enterprise"
        p2={
          <>
            We assist companies in their revolutionary AI journey by bringing a group of AI specialists on board. With the aid of our AI development services, companies can investigate opportunities driven by AI and building your ai app with complete AI models that are tailored to their goals. We create AI-powered apps tailored to your business requirements. Our products provide ai application development platform, cognitive insights, process automation, and increased operational efficiency. We offer end-to-end services that integrate cutting-edge AI capabilities into your operations from conception to implementation.
          </>
        }
      />
      <Benefits
        benifits={Growing_AI}
        sectionTitle="The Growing Influence of AI "
        sectionDescription="AI is revolutionizing industries worldwide. It’s time to harness its potential and stay ahead in the competitive landscape."
      />
      <Quotes
        title="Get A 100% Customizable Artificial Intelligence Development By Experts."
        highlightedText="Scale your business with our AI solutions"
        paragraphs={[
          "We have a large pool of committed deep learning engineers working hard to reduce operating expenses, optimize efficiency, increase customer happiness, and drive company development. We will enable your company to adopt a strategy for wiser decision-making by integrating our AI technology into your mainstream business processes. This will simplify your company's resolve unforeseen business mistakes and increase customer demand.",
          "Our specialists provide artificial intelligence development tools that do not replace human talents; instead, they should be regarded as a potent business enhancement. We put in a lot of effort to modernize your company situation quicker by making it possible for you to take advantage of our artificial intelligence web development.",
        ]}
        emphasizeTextIndex={[1]}
        emphasizePhrases={["MLOps", "personalization"]}
      />
      <TechnologiesSlider />
      <PremiumServices />
      <ReasonChoose title="Key benefits of choosing AI Development Services" dis="As pioneers in the field of artificial intelligence software development, we advise companies to take advantage of the potential of data and AI to open up a multitude of doors. Here are the key benefits" benifits={AI_benifits} />
      <Benefits
        benifits={benefits}
        sectionTitle="Benefits of Hiring our Mobile App Development Company"
        sectionDescription="As the top mobile app development company, we have the required expertise and skills to create out of the ox apps."
      />
      <AboutUs />
      <ImpactCards
        sectionTitle="Explore The Transformative Impact Of AI On Your Business Success"
        benefitCards={benefitCards}
        autoInterval={3500}
      />
      <ExpertiseSlider
        expertiseCards={expertiseCards}
        sectionTitle="Our Expertise in AI Development Services"
        sectionDescription="We specialize in top AI development services for every industry type and size. Our expertise includes:"
      />
      <Technology_pannel techCards={AI_Tech} />
      <Common />
    </>
  ),

  "chatboat development": (
    <>
      <HeroSection
        title=" AI Chatbot Development Company in INDIA"
        description="Are you interested in Custom AI Chatbot development services? As a leading AI chatbot development company in USA, we specialize in developing ai chatbots, AI-powered chatbots, chatbot integration services, Open-source chatbot customization services and conversational AI Chatbot Solutions tailored to your business needs. "
        buttonText="Get Started"
        buttonLink="#contact"
        imageSrc={Chatbot}
        imageAlt="Digital Solutions illustration"
      />
      <LogoCarousel />
      <Charts
        img={ChatbotSection}
        img2={ChatbotDev}
        h1="Hire Chatbot Developers for Business Automation  "
        p1="We provide individualized enterprise Chatbot development solutions that use cutting-edge technology to take the amount of interaction and engagement with your customers to the next level. In addition, Enterprise AI chatbot solutions provider procedures are well-defined and easily controllable, and they strike a healthy balance between cost, time, and quality while maintaining open lines of communication. Chatbot development company for customer service automation offer voice-activated chatbots and chat bot service perfectly designed to fit your demands, whether you want to develop your conversation bots, IVR bots, online chatbots, text bots, transactional chatbots or messaging bots."
        h2="Brief About Chatbot Development Services"
        p2={
          <>
            With our AI-based chatbot development services, you can use a chatbot to deliver proper replies, respond to questions, and even escalate requests. In addition, it may provide answers to commonly asked queries or information that is up to date. It is very capable of taking the role of live chat operator. As an Top chatbot development company in USA, our team off chatbot developers creates a machine learning chatbots and builds automated assistants to transform how companies communicate with consumers, providing automated customer assistance and engaging experiences through the chatbot platform. 
          </>
        }
      />
      <Quotes
        title="Get 100% Customizable Chatbot Development Services "
        highlightedText="AI-Based Chatbot Applications"
        paragraphs={[
          "You can improve communication with your consumers and simplify company interactions by using social media chatbots. Dialog Flow, IBM Watson, Amazon Lex, fastText, Rasa NLU, and the Microsoft Bot Framework are the platforms we use to develop speech bots and chatbots. Chatbot development for startups and enterprises enhance customer engagement with ai chatbot development company let's innovate together! ",
          "Chatbots can be used across various industry verticals because they can manage multiple services, including complaints, customer care, feedback, booking, searching, and the management of payment processes, amongst others.",
        ]}
        emphasizeTextIndex={[1]}
        emphasizePhrases={["NLP", "24/7"]}
      />
      <Benefits
        benifits={Chatbot_experties}
        sectionTitle="The Expertise In Our Chatbot Development"
        sectionDescription="Our chatbot development service is all you need to deliver an exceptional customer experience."
      />
      <PremiumServices />
      <Benefits
        benifits={Chatbot_benifits}
        sectionTitle="Benefits of Chatbot Development Services"
        sectionDescription="Chatbot Development Services may transform customer engagement, operations, and growth."
      />
      <AboutUs />
      <TechnologyStack data={TypeScript_Tech} />
      <Common />
    </>
  ),

  "data analysis": (
    <>
      <HeroSection
        title="Data Analytics Services Provider"
        description="Turn raw data into clear dashboards and actionable insights so teams can move faster with confidence."
        buttonText="Get Started"
        buttonLink="#contact"
        imageSrc={MobileApp}
        imageAlt="Digital Solutions illustration"
      />
      <LogoCarousel />
      <Charts />
      <Quotes
        title="From data to decisions"
        highlightedText="BI, reporting, and predictive analytics"
        paragraphs={[
          "We consolidate sources, model your data, and ship trusted metrics so stakeholders can self-serve answers.",
          "Advanced analytics and forecasting reveal trends, risks, and opportunities to guide strategy.",
        ]}
        emphasizeTextIndex={[1]}
        emphasizePhrases={["forecasting", "self-serve"]}
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
        title="Data Migration Services"
        description="Move data between systems and clouds safely with validation, minimal downtime, and full auditability."
        buttonText="Get Started"
        buttonLink="#contact"
        imageSrc={MobileApp}
        imageAlt="Digital Solutions illustration"
      />
      <LogoCarousel />
      <Charts />
      <Quotes
        title="Reliable migrations without surprises"
        highlightedText="Plan, test, validate, cutover"
        paragraphs={[
          "We map sources and targets, reconcile schemas, and run dry runs to de-risk your migration.",
          "Automated checks, rollbacks, and monitoring ensure integrity and confidence at every step.",
        ]}
        emphasizeTextIndex={[1]}
        emphasizePhrases={["rollbacks", "integrity"]}
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
        title="Business Intelligence Company"
        description="Define KPIs, model your data, and create interactive dashboards that turn complex operations into clear, trackable outcomes."
        buttonText="Get Started"
        buttonLink="#contact"
        imageSrc={MobileApp}
        imageAlt="Digital Solutions illustration"
      />
      <LogoCarousel />
      <Charts />
      <Quotes
        title="Analytics that everyone can use"
        highlightedText="Executive views to team-level reporting"
        paragraphs={[
          "We connect your tools, standardize metrics, and ship dashboards that answer the questions teams ask every day.",
          "Drilldowns, alerts, and storytelling help leaders spot trends early and act with confidence.",
        ]}
        emphasizeTextIndex={[1]}
        emphasizePhrases={["dashboards", "alerts"]}
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

  "typscript development": (
    <>
      <HeroSection
        title="Typescript Development Services in INDIA"
        description="As a leading full-stack TypeScript development company, we have a decade of experience in TypeScript with frameworks like Angular, React, and Vue.js. Contact us now to get your free quote!"
        buttonText="Get Started"
        buttonLink="#contact"
        imageSrc={TypeScript}
        imageAlt="Digital Solutions illustration"
      />
      <LogoCarousel />
       <Charts
        img={Types1}
        img2={Types_about}
        h1="Get Custom TypeScript Development Services"
        p1="TypeScript is a highly effective programming language that provides Tailored Solutions for Every TypeScript Project on the client or the server. The technology is very dependable, as well as offering Custom TypeScript App Development service with rapid and high levels of predictability. We make the process of developing your FinTech product smooth and pleasurable by using Typescript app development and JavaScript development. By using TypeScript Web App Development scale your Typescript development to the next level. Our Enterprise App Development team can also efficiently rewrite any old code you have. This is true regardless of whether you start from zero or make a pivot along the road."
        h2="Brief About Typescript Development Services"
        p2={<>We tailor our interactions with our clients to the specific requirements of their companies. The size and scope of your business will determine which of our engagement models is most suited to meet your needs. 
          We have assembled a group of highly skilled server-side applications specialists who are at the forefront of their field and possess cutting-edge expertise.</>}
      />
      <Quotes
        title="Get 100% Customizable Typescript Development Services "
        highlightedText="Scalable, Reliable, And Secure Applications"
        paragraphs={[
          "We are a reliable TypeScript Web Development Company and have assisted several business owners in capitalizing on the scalability and outstanding digital solutions produced using TypeScript. The object-oriented programming characteristic of this programming language is what contributes to the language's modularity. Because of this, our Dedicated TypeScript Developers can construct things in TypeScript that are impossible to create in JavaScript.",
          "We provide specialized TypeScript development solutions and JavaScript to TypeScript Migration that focus on the needs of businesses. Overall, makes it possible to create scalable apps; it is a valuable tool for substantial development teams and boasts SOLID design principles. Because we have more than seven years of expertise in Typescript development services, you are welcome to Hire TypeScript Developers from our company.",
        ]}
        emphasizeTextIndex={[1]}
        emphasizePhrases={["strict mode", "refactor"]}
      />
      <Benefits
        benifits={typescriptExpertise}
        sectionTitle="Expertise In Our Typescript Development Services"
        sectionDescription="Our typescript development services cater to all your development needs."
      />
      <PremiumServices />
      <Benefits
        benifits={TypeScript_benifits}
        sectionTitle="Benefits of Type Script Development Service"
        sectionDescription="TypeScript Development Services helps organizations construct contemporary web apps with reliability and scalability"
      />
      <AboutUs />
      <TechnologyStack data={TypeScript_Tech} />
      <Common />
    </>
  ),

  "angular development": (
    <>
      <HeroSection
        title="Angular Development"
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

  "react development": (
    <>
      <HeroSection
        title="React Development"
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

  "product development": (
    <>
      <HeroSection
        title="Product Development Company in INDIA"
        description="We develop superior, data-backed software products fuelled by our affordable product development services and innovative design thinking. We have a team of experienced product developers ready to partner closely with clients to quickly and successfully build products."
        buttonText="Get Started"
        buttonLink="#contact"
        imageSrc={Product}
        imageAlt="Digital Solutions illustration"
      />
      <LogoCarousel />
      <Charts
        img={ProductDev}
        h1="Hire Top-Rated Product Design and Development Company "
        p1="Allow Best product development company to handle product management, monitoring, and support while you concentrate on user acquisition. You may scale your product as needed using our on-demand app hosting infrastructure, which is powered by AWS, Google Cloud, and Azure. As a trusted End-to-end product development agency and software product development company, we work with cutting-edge technologies to deliver a flawless product development experience for you and an excellent user experience for your customers, whether it be for product design, development, or testing. With Sapphire's Product Development Services, businesses can create innovative products quickly and affordably."
      />
      <Quotes
        title="Flexible Product Development Company"
        highlightedText="Flexible Product Development Company"
        paragraphs={[
          "We go beyond software product development to help clients identify emerging trends, understand market requirements,Product Engineering services  and product development services that delivers and bring real value to their customers. We help corporations capitalize on cutting-edge innovations and employ robust frameworks and effective workflows to produce a scalable and powerful creation, accelerate the product life cycle, and improve release management with the world's best product development firm.",
          "Our main strength is our ability to respond to our customers' evolving business needs while maintaining high quality. If you are looking for reliable product finder app development  service or product development services, our software product development services will be ideal for you, utilizing the best product development software available. We offer on-demand scalable resource availability in both onsite and offsite development centers. As a trusted software development agency, we guarantee time-to-market with tried-and-true processes and agile product development services methodologies.",
        ]}
        emphasizeTextIndex={[1]}
        emphasizePhrases={["reduce risk", "accelerate time-to-value"]}
      />
      <PremiumServices />
      <Benefits
        benifits={benefits}
        sectionTitle="Benefits of Product Development with Us"
        sectionDescription="Outcome-focused execution, predictable delivery, and scalable architecture."
      />
      <AboutUs />
      <ExpertiseSlider
        expertiseCards={expertiseCards}
        sectionTitle="Our Product Engineering Expertise"
        sectionDescription="We specialize across mobile, web, backend, cloud, and data."
      />
      <Technology_pannel techCards={Product_Tech} />
      <Common />
    </>
  ),

  "software development": (
    <>
      <HeroSection
        title="Best Software Development Company"
        description="Our Top-Rated Software Development Firms for Business delivers innovative and tailored digital solutions designed to help your business thrive in the online world. Backed by a skilled team of developers, designers, and project managers, Software Development Company with High Ratings, Affordable Pricing ensure quality, scalability, and performance. Known for our high client ratings and affordable pricing, we’re committed to turning your ideas into powerful, result-driven software solutions. "
        buttonText="Get Started"
        buttonLink="#contact"
        imageSrc={Softwaredevelopment}
        imageAlt="Digital Solutions illustration"
      />
      <LogoCarousel />
      <Charts
        img={Chart}
        img2={SoftwareDev}
        h1="Software Development Market Stats"
        p1="Estimates Revenue in the Software market is projected to reach US$695.20bn in 2024. Revenue is expected to show an annual growth rate (CAGR 2024-2028) of 6.23%, resulting in a market volume of US$851.10bn by 2028."
        h2=" Best Software Development Services Provider"
        p2={
          <>
            Our skilled team of software development outsourcing services creates custom solutions that are tailored to each client's specific business requirements, translating intricate concepts into reality. Award Winning Software Development Company quality assurance offers real advantages that your software development outsourcing company needs to expand, whether you're revamping your consumer interactions or increasing operational effectiveness. We strive to always deliver the BEST in class, and our special approach combines the best practices of the business with the latest technological advancements. Contact us now to get started with a free quote! 
          </>
        }
      />
      <Quotes
        title="Get 100% Software Development Solutions "
        highlightedText="Software Development Company"
        paragraphs={[
          "Our Reliable Software Development Company with customized solutions unleash the potential of 100% customizable software creation. Our Software Development Comapny  understands that every organization has distinct issues and needs. Our software development agency can build unique software and collaborate with you from design to implementation to guarantee the product fulfills your expectations",
          "With our flexible development strategy, you control every element of your software solution. Our 100% bespoke Top Software Development Comapny In INDIA  gives you a solution that solves your problems and grows your company. Stop using off-the-shelf software development solutions and start using software that works for you. Partner with our Offshore Software Development Company immediately to maximize bespoke software development to greater hight.",
        ]}
        emphasizeTextIndex={[1]}
        emphasizePhrases={["predictable delivery", "measurable impact"]}
      />
      <PremiumServices />
      <ImpactCards
        sectionTitle="Explore The Transformative Impact Of Mobile App On Your Business Success"
        benefitCards={benefitCards}
        autoInterval={3500}
      />
      <Benefits
        benifits={benefits}
        sectionTitle="Why Choose Our Software Development"
        sectionDescription="Scalable code, robust QA, and thoughtful UX for high adoption."
      />
      <AboutUs />
      <SectorsSlider />
      <ReasonChoose 
        title="Kryzen Custom Software Development Services"
        des="Kryzen developers thrive at developing compelling mobile applications by utilizing our knowledge of the latest app development frameworks. Sapphire provides full-service mobile app development customized to meet your requirements."
        benifits={SoftwareBenifits}
      />
      <Technology_pannel techCards={Software_Tech}/>
      <Common />
    </>
  ),

  "application services": (
    <>
      <HeroSection
        title="Application Services in INDIA"
        description="As a DOT NET application development company, our .NET developers create web applications by using ASP.NET, .NET Core, C#, VB. Contact us now to get your DOT Net apps developed quickly by professionals."
        buttonText="Get Started"
        buttonLink="#contact"
        imageSrc={Application}
        imageAlt="Digital Solutions illustration"
      />
      <LogoCarousel />
      <Charts
        img={ApplicationDev}
        h1="Custom Business Application Development Services"
        p1="With the speed and agility of Top-rated application service providers, you can quickly and easily reinvent your application environment while consistently innovating to gain commercial value. With the speed and agility of our application services, you can quickly and easily reinvent your application environment while consistently innovating to gain commercial value. Best application development services company successfully assist in refactoring, modernization, upgrading, and scalability of their business applications with our custom application development and migration services. Whether you need on-premises, hybrid, or cloud application services, we provide the finest. "
      />
      <Quotes
        title="We Deliver Innovation-Led Applications Services To Businesses"
        highlightedText="End-To-End Application, Intelligent Platforms"
        paragraphs={[
          "Your organization's lifeline is its applications. However, if your IT environment is complex and has high maintenance costs, you may be unable to keep up with market trends, new delivery models, and technological advances. Sapphire Solutions, an Cross-platform application development company provide streamlined, standardized, and future-proof business application development . We will help you achieve a new level of resilience to meet tomorrow's challenges by leveraging our expertise and a wide variety of technology solutions and applications.",
          "We are a trusted leader in business applications, providing a wide array of services ranging from planning and evaluating to design, develop, run, and optimize. Our  App development consultance  can help direct you from idea to transition. With our assistance, you can create, incorporate, or modernize your application infrastructure to keep your company running efficiently, effectively, and affordably.",
        ]}
        emphasizeTextIndex={[1]}
        emphasizePhrases={["cloud-native", "continuous improvement"]}
      />
      <PremiumServices />
      <ImpactCards
        sectionTitle="Explore The Transformative Impact Of Mobile App On Your Business Success"
        benefitCards={benefitCards}
        autoInterval={3500}
      />
      <ReasonChoose 
        title="Kryzen’s Comprehensive Suite of Mobile App Development Services"
        des="Kryzen developers thrive at developing compelling mobile applications by utilizing our knowledge of the latest app development frameworks. Sapphire provides full-service mobile app development customized to meet your requirements. "
        benifits={Application_benifits}
      />
      <SectorsSlider />
      <Benefits
        benifits={benefits}
        sectionTitle="Benefits of Application Services"
        sectionDescription="Lower TCO, improved uptime, and faster change delivery."
      />
      <AboutUs />
      <Technology_pannel techCards={Application_Tech}/>
      <Common />
    </>
  ),

  "startup consulting": (
    <>
      <HeroSection
        title="The best Startup Consulting Services"
        description="New enterprises get aid from Business consulting for startups services. Our startup management consulting firm may considerably increase the likelihood of success."
        buttonText="Get Started"
        buttonLink="#contact"
        imageSrc={Startup}
        imageAlt="Digital Solutions illustration"
      />
      <LogoCarousel />
      <Charts
        img={StartupSection}
        img2={StartupDev}
        h1="Get 360-Degree Business Startup Consulting Services"
        p1="It may save time and drastically decrease expenditure. As the Best startup consulting company, our Business Startup Consulting Services provides essential advantages. When launching a new firm, most entrepreneurs lack competence in all business sectors. Even if it were true, it would not be advantageous. Startups face a difficult challenge. After the formal corporate structure has been established, business owners must successfully manage various areas. Our Business Startup and Management Consulting Services assist in these aspects. Startup Consulting Services Company provides entrepreneurs, startups, and partners with the often-required help. "
        h2="Brief About Startup Consulting Services for New Business "
        p2={
          <>
            Gain rapid access to skills and knowledge as a company founder and entrepreneur. Eliminate guesswork and learning curves by using expertise from the outset. By using startup consulting services, a new firm immediately decreases its inherent risk. 
            With professional assistance, make more intelligent business choices from the outset. Through business expertise, consulting services swiftly bring demonstrable value to customers. 
          </>
        }
      />
      <Quotes
        title="Get 100% Customizable Startup Consulting Services"
        highlightedText="Business Planning, Brand Development, IPR"
        paragraphs={[
          "Our Startup strategy consulting firm offer an extensive array of startup company assistance services. Startup business plan consulting services help entrepreneurs and startups launch, flourish, and expand. From IT consulting service  to design and development to marketing campaigns, we provide a wide range of services. As a full-service startup management consulting firm, our organization offers various services to startup businesses. With us, you can work with expert Business Consultants for Startups who have expertise in launching businesses in multiple sectors. ",
          "A client may depend on a professional to handle a crucial step in a startup's early stages while focusing on other activities. This is made possible by a seasoned startup consulting Company familiar with the required tasks. The actions needed to launch a firm are significant challenges when seen as a whole. Our Startup business advisory services divides the specific activities and responsibilities, procures suppliers as required, and ensures correct implementation. An investor and a startup firm might swiftly eliminate their uncertainty with the assistance of seasoned advisors. ",
        ]}
        emphasizeTextIndex={[1]}
        emphasizePhrases={["user testing", "milestones"]}
      />
      <Benefits
        benifits={StartupConsulting_eexperties}
        sectionTitle="Expertise Of Our Startup Consultants"
        sectionDescription="We have years of experience in providing Startup Consultation Services."
      />
      <PremiumServices />
      <Benefits
        benifits={benefits}
        sectionTitle="Benefits for Startups"
        sectionDescription="Clarity, speed to market, and investor-ready documentation."
      />
      <AboutUs />
      <Common />
    </>
  ),

  "crm": (
    <>
      <HeroSection
        title="CRM Development Services in INDIA"
        description="We are experts in the design, deployment, migration, and maintenance of customer relationship management (CRM) and CRM for economic development that is both scalable and unique to each client. "
        buttonText="Get Started"
        buttonLink="#contact"
        imageSrc={CRM}
        imageAlt="Digital Solutions illustration"
      />
      <LogoCarousel />
      <Charts
        img={CRMSection}
        img2={CRMDev}
        h1="Cost-Effective CRM Software Development for Businesses "
        p1="Our affordable CRM development for startups handle customer data and interactions, enjoy a solid workflow within a complicated organizational structure, use the possibilities of scalable automation, and monitor staff and resource performance by employing CRM integration and automation services. As one of the End-to-end CRM development solutions, we provide Custom CRM Development Services for several sectors. From on-premises to cloud implementations, we are adept at generating comprehensive customer reports. Our CRM Platform Development for Small Businesses ensures scalable and efficient solutions tailored to unique organizational needs. "
        h2="Brief About CRM Development "
        p2={
          <>
            When implementing a CRM development strategy, one of the most important things to do is to ensure that you have the correct goals in mind and that you have mapped out your target objectives into a proper step-by-step plan. As a trusted CRM Software Development Company, your company may develop the quality of its customer connection with the assistance of customized CRM software. Utilizing CRM software through professional CRM System Development for Businesses can significantly improve the efficiency of your workflow and allow it to be scaled across all your digital activities. Hire CRM developers for custom solution our Enterprise CRM Development Services ensure seamless integration and long-term scalability for growing organizations.
          </>
        }
      />
      <Quotes
        title="Get A 100% Customizable CRM Development By Experts"
        highlightedText="Improve lead generation, automate tasks"
        paragraphs={[
          "Our CRM Development Company can tailor a customer relationship development (CRM) solution to meet your organization's unique requirements to assist you in achieving even the most ambitious of your organization's strategic goals. As an Affordable CRM Development Services provider and a Top-rated CRM Development Agency, we want to be able to assist you in achieving measurable business outcomes with CRM development and implementation services. We are constantly working on expanding our knowledge and skill set in the area of CRM app development for a wide variety of industries and sectors, such as the pharmaceutical industry, the financial industry, and the healthcare appdevelopment industry. We build bespoke solutions using the most recent technology on the market and can provide rapid results. "
        ]}
        emphasizeTextIndex={[1]}
        emphasizePhrases={["automation", "lifetime value"]}
      />
      <PremiumServices />
      <Benefits
        benifits={crmServices}
        sectionTitle="The Expertise Of Our CRM Development Services"
        sectionDescription="To enhance customer relationship management procedures, we offer end-to-end bespoke development services"
      />
      <Benefits
        benifits={crm_benifits}
        sectionTitle="Benefits of CRM"
        sectionDescription="Higher conversion rates and better retention via insights and workflows."
      />
      <AboutUs />
      <Common />
    </>
  ),

  "web application": (
    <>
      <HeroSection
        title="Web Application"
        description="Responsive, secure, and fast web apps tailored to your business goals."
        buttonText="Get Started"
        buttonLink="#contact"
        imageSrc={MobileApp}
        imageAlt="Digital Solutions illustration"
      />
      <LogoCarousel />
      <Charts />
      <Quotes
        title="Modern Web Engineering"
        highlightedText="Performance and Accessibility"
        paragraphs={[
          "We build accessible, SEO-friendly web apps with modern tooling, strong testing, and observability.",
          "Our architectures support scale, localization, and progressive enhancement.",
        ]}
        emphasizeTextIndex={[1]}
        emphasizePhrases={["accessibility", "SEO-friendly"]}
      />
      <PremiumServices />
      <Benefits
        benifits={benefits}
        sectionTitle="Benefits of Modern Web Apps"
        sectionDescription="Better UX, faster load times, and improved conversion."
      />
      <AboutUs />
      <ExpertiseSlider
        expertiseCards={expertiseCards}
        sectionTitle="Web Expertise"
        sectionDescription="SPAs, SSR, PWAs, and headless CMS integrations."
      />
      <Common />
    </>
  ),

  "app development consulting": (
    <>
      <HeroSection
        title="App Development Consulting"
        description="Architecture reviews, audits, and roadmaps to unblock delivery and scale."
        buttonText="Get Started"
        buttonLink="#contact"
        imageSrc={MobileApp}
        imageAlt="Digital Solutions illustration"
      />
      <LogoCarousel />
      <Charts />
      <Quotes
        title="Expert Guidance, Practical Outcomes"
        highlightedText="Actionable, Prioritized Plans"
        paragraphs={[
          "We assess code quality, infrastructure, and processes to recommend focused improvements.",
          "Engagements include quick wins, risk mitigation, and measurable milestones.",
        ]}
        emphasizeTextIndex={[1]}
        emphasizePhrases={["quick wins", "risk mitigation"]}
      />
      <PremiumServices />
      <Benefits
        benifits={benefits}
        sectionTitle="Consulting Benefits"
        sectionDescription="Clarity, speed, and reduced technical debt."
      />
      <AboutUs />
      <ExpertiseSlider
        expertiseCards={expertiseCards}
        sectionTitle="Consulting Expertise"
        sectionDescription="Architecture, DevOps, performance, and security."
      />
      <Common />
    </>
  ),

  "business application consulting": (
    <>
      <HeroSection
        title="Business Application Consulting"
        description="Optimize processes and systems to improve efficiency and visibility."
        buttonText="Get Started"
        buttonLink="#contact"
        imageSrc={MobileApp}
        imageAlt="Digital Solutions illustration"
      />
      <LogoCarousel />
      <Charts />
      <Quotes
        title="Process and Platform Alignment"
        highlightedText="From Audit to Execution"
        paragraphs={[
          "We map workflows, remove bottlenecks, and align technology with business goals.",
          "Deliverables include implementation plans, KPIs, and change management support.",
        ]}
        emphasizeTextIndex={[1]}
        emphasizePhrases={["bottlenecks", "change management"]}
      />
      <PremiumServices />
      <Benefits
        benifits={benefits}
        sectionTitle="Benefits"
        sectionDescription="Streamlined operations and better decision-making."
      />
      <AboutUs />
      <ExpertiseSlider
        expertiseCards={expertiseCards}
        sectionTitle="Domains"
        sectionDescription="ERP, CRM, finance, HR, and data integrations."
      />
      <Common />
    </>
  ),

  "full stack development": (
    <>
      <HeroSection
        title="Full Stack Development"
        description="End-to-end engineering across frontend, backend, databases, and cloud."
        buttonText="Get Started"
        buttonLink="#contact"
        imageSrc={MobileApp}
        imageAlt="Digital Solutions illustration"
      />
      <LogoCarousel />
      <Charts />
      <Quotes
        title="One Team, Full Lifecycle"
        highlightedText="From UI to Infrastructure"
        paragraphs={[
          "We deliver cohesive solutions with shared context across the stack, reducing handoffs and delays.",
          "Our practices include code reviews, automation, and observability for long-term reliability.",
        ]}
        emphasizeTextIndex={[1]}
        emphasizePhrases={["automation", "observability"]}
      />
      <PremiumServices />
      <Benefits
        benifits={benefits}
        sectionTitle="Benefits of Full Stack"
        sectionDescription="Faster delivery, fewer dependencies, and consistent quality."
      />
      <AboutUs />
      <ExpertiseSlider
        expertiseCards={expertiseCards}
        sectionTitle="Stack Expertise"
        sectionDescription="React, Angular, Node, Python, Django, cloud-native, and more."
      />
      <Common />
    </>
  ),

  "ui/ux designing": (
    <>
      <HeroSection
        title="Best UI/UX Design Company in INDIA"
        description="Our UI/UX design services are aimed at creating visually appealing, brand strengthening digital interfaces to attract and retain users. We offer the best UI/UX design and graphic designing services for your web and mobile apps."
        buttonText="Get Started"
        buttonLink="#contact"
        imageSrc={UI}
        imageAlt="Digital Solutions illustration"
      />
      <LogoCarousel />
      <Charts
        img={UIUXDev}
        img2={UISection}
        h1="Affordable UI/UX Design Services "
        p1="We consider user requirements and UI/UX Design Experts for Product Development at the center of our efforts focusing on designing usable, pleasant, effective, and pleasurable experiences. From user onboarding to feedback and review, our products consist of an integrated set of experiences working together seamlessly. We follow industry standards and design principals for UI/UX design."
        h2="Graphic Design"
        p2={
          <>Your business and website are too much depend on what you show. We create engaging graphics designs and web application development service   to target audience.</>
        }
      />
      <Quotes
        title="Creating Human-Centric, And Elegant UI/UX Design Solutions"
        highlightedText="We Have A Well-Versed Team Of UI/UX Designers To Serve You"
        paragraphs={[
          "Our seasoned design team has over a decade of experience in responsive web design, UI/UX Design Page , brand identity, and maintenance, all with a comprehensive emphasis on user-friendliness and value addition. As a Top Rated UI/UX Design Agency, we help customers prosper with inexpensive, interactive, and eye-catching contemporary designs, from start-ups to established businesses and from a simple logo design to complete brand maintenance. We Create mock-up designs with UI/UX Design solutions that simulate actions and anticipate responses.",
          "We use cutting-edge web design and development software such as Adobe Photoshop, Illustrator, AfterEffects, InVision, Adobe XD, and others. HTML5, JavaScript, CSS3, WordPress, PHP, and jQuery for mobile UI/UX design. Our team of highly skilled certified IT outsources service  deliver all IT solutions and provide well versed UI/UX design in contemporary frameworks such as Bootstrap, Vue, Angular, and React. Hire Experienced UI/UX Designers that assist plugin development and UI/UX design services, which help streamline specific activities further.",
        ]}
        emphasizeTextIndex={[1]}
        emphasizePhrases={["journeys", "component libraries"]}
      />
      <PremiumServices />
      <Benefits
        benifits={UIUX_benifits}
        sectionTitle="Benefits Of UI/UX Design Services"
        sectionDescription="The user interface (UI) and user experience (UX) must be well-designed for digital goods to succeed."
      />
      <AboutUs />
      <TechnologyStack data={UI_UX_Tech} />
      <Common />
    </>
  ),

  "digital marketing": (
    <>
      <HeroSection
        title="Digital Marketing Services in INDIA"
        description="Digital marketing is a type of marketing where digital platforms are used to connect with potential customers. AI-powered digital marketing company to increase leads and sales and promoting a purchase is the ultimate purpose of digital marketing for a buyer or customer. Methods like email, social media, and web-based advertising are used to connect with potential customers and increase brand visibility online. Contact us now to know how to achieve success through our digital marketing services."
        buttonText="Get Started"
        buttonLink="#contact"
        imageSrc={Mobile}
        imageAlt="Digital Solutions illustration"
      />
      <LogoCarousel />
      <Charts
        img={DigitalDev}
        img2={DigitalSection}
        h1="Get 360-Degree Ecommerce Digital Marketing Services"
        p1="Best digital marketing agency in USA for business growth provide 360-degree digital marketing services to help you put your company online and enhance your online visibility. We increase lead creation and business with a high customer acquisition rate and quality and focused lead creation. As an affordable digital marketing company, we use keyword research, competitive analysis, sponsored listings, and other search engine services to increase website traffic. Construct pay-per-click (PPC) search engine advertising campaigns to target a particular audience seeking products or services. Our Full-Service Digital Marketing Agency helps you reach new customers and improve visibility."
        h2="Hire Custom Digital Marketing Solutions for Best Results"
        p2={
          <>
            "Our digital marketing company in USA can assist in increasing organic reach and organic website traffic, which fosters active consumer interaction. To market their goods and services and establish a more direct line of communication with their customers, our clients use websites, Facebook, Instagram, Snapchat, LinkedIn, Twitter, and other social media platforms, along with social media app development services. Our knowledgeable team of marketers identifies the interests of our target audience and creates affordable digital marketing services in USA. Looking for digital marketing experts in USA, our team of knowledgeable digital marketers use cutting-edge strategies to keep your brand in the good graces of your consumers.",
          </>
        }
      />
      <Quotes
        title="Digital Marketing Agency for Guaranteed Results"
        highlightedText="Customer Satisfaction Is Our Ultimate Goal and that Makes us Best"
        paragraphs={[
          "As a Best Performance Marketing Agency, we have many satisfied customers. We put much effort into maintaining an increasing clientele because we think that happy clients are our most significant asset. We are one of the select few digital marketing firms that guarantee adjustments to your internet visibility. For businesses of all sizes, from startups to multinationals, our digital marketing expert provides scalable and excellent digital marketing services.",
          "From website design and development to search engine marketing and online brand reputation management, we are the top digital marketing agency that provides top-notch services. We have competent and diligent teams for digital transformation services. As a leading digital marketing agency, we take care of almost all client-related matters, including social media, PPC, and SEO.",
        ]}
        emphasizeTextIndex={[1]}
        emphasizePhrases={["CRO", "experiments"]}
      />
      <PremiumServices />
      <Benefits
        benifits={DigitalMarketing_benifits}
        sectionTitle="Key Benefits of Digital Marketing Services"
        sectionDescription="To guarantee that every one of our digital marketing initiatives yields successful outcomes, our digital marketing business employs a methodical technique."
      />
      <AboutUs />
      <TechnologyStack data={Digital_Tech} />
      <Common />
    </>
  ),

  "mobile application development": (
    <>
      <HeroSection
        title="Mobile App Porting in INDIA"
        description="Obtain the highest quality mobile app porting services from the app migration business with the most years of expertise."
        buttonText="Get Started"
        buttonLink="#contact"
        imageSrc={Mobile}
        imageAlt="Digital Solutions illustration"
      />
      <LogoCarousel />
      <Charts
        img={MobileSection}
        img2={MobleDev}
        h1="Trusted And Reliable Mobile App Porting Service"
        p1="Convert your current app to work on your chosen platform, whether it be iOS, Android, a hybrid platform, the web, or even intelligent wearables or alternative displays. By porting your app to various platforms, you can directly reach a larger audience of potential customers and improve the app's functionality. All your app porting needs will be met by the highly experienced developers at cross-platform app porting company whether you want to convert your website into a mobile app to reach a broader audience, explore the capabilities of new high-end devices, or expand your presence across different platforms. Hire experts for mobile app porting an Affordable App Porting Services for Businesses."
        h2="Brief About App Migration and Porting Experts"
        p2={
          <>
            "Higher total revenue. If you go with our iOS to Android mobile application porting services, you will notice more clients from new platforms, ultimately increasing your company's income. This is the primary benefit of using our services. With our Mobile App Porting Service in USA, you may now reach a larger audience and add better app features.",
            "We provide a customized Mobile App Porting Service in UK to help you stay current with the evolving mobile ecosystem. We provide your company with the Mobile App Porting Service In UAE while maintaining the integrity and security of your data."
          </>
        }
      />
      <Quotes
        title="Get 100% Customizable Mobile App Porting Services"
        highlightedText="Safe, Reliable, And Trusted Porting Service"
        paragraphs={[
          "The ever-evolving mobile environment might be challenging to keep up with, but our unique mobile app porting services will help you do just that. As a Mobile App Porting Company, we provide the most current mobile porting process while maintaining your data's safety, integrity, and security. Regarding Mobile application porting services, we offer information that addresses every one of your concerns. Whether you're porting app functionality to a new device or system, we will assist you in getting the most out of app portability for a new platform, language, or operating system, whether it be a conventional OS porting such as iOS to Android or Cross Platform Mobile App Porting.",
          "When you extend your app to new platforms, you have the opportunity to include more app features, and with our Android to iOS porting skills, you may significantly enhance the app's speed. If your app platform does not support your desire to constantly supply your clients with a beautiful app UI/UX design, but you still want to deliver it to them, our Mobile App Porting Service In India can make that happen. Customers trust our mobile application migration service across the globe.",
        ]}
        emphasizeTextIndex={[1]}
        emphasizePhrases={["native", "cross-platform"]}
      />
      <PremiumServices />
      <Benefits
        benifits={Mobile_experties}
        sectionTitle="The Expertise Of Our Mobile App Porting Services"
        sectionDescription="We have a broad range of experiences in Mobile application porting services"
      />
      <AboutUs />
      <Benefits
        benifits={Mobile_benifits}
        sectionTitle="Benefits of Mobile App Porting Services"
        sectionDescription="Mobile App Porting Services is an intelligent way to publish your app on many platforms."
      />
      <TechnologyStack data={Mobile_Tech} />
      <Common />
    </>
  ),

  "it consulting": (
    <>
      <HeroSection
        title="IT Consulting Services in INDIA"
        description="Many firms depend on IT consulting services to stay up with today's rapidly changing IT world. Whether it's infrastructure, security, cloud, or digital transformation, having the right IT partner is critical for business success."
        buttonText="Get Started"
        buttonLink="#contact"
        imageSrc={IT_Consulting}
        imageAlt="Digital Solutions illustration"
      />
      <LogoCarousel />
      <Charts
        img={IT_ConsultingSection}
        img2={IT_ConsultAbout}
        h1="Top-Notch IT Services and Consulting Company"
        p1="If you cannot respond fast and appropriately, you run the danger of being passed by your rivals, who are making the most of the opportunities presented by technology. Best IT consulting firms for Startups play a significant role in the strategic planning process for many businesses. Engaging the services of an IT services and consulting company, whether for a one-time project or ongoing strategic advice, such as that provided by our global IT consulting services, could be the missing piece of the puzzle if you feel your organization lacks internal expertise. Get in touch with us and set up an exploratory conversation so that we can demonstrate how our IT service company can assist you in meeting the requirements of your business."
        h2="Brief About Our IT Consulting Services"
        p2={<>Our IT experts help discover and eliminate network and system security risks. They collaborate with your team to build procedures and policies that improve ongoing security. The Best Tech Consulting Company will provide an exact estimate of the cost of the IT Consulting Services In USA in advance. Once the project is complete, you are not required to retain the expert on staff.

          Engaging IT consulting services in the UK for specialized projects allows your staff to concentrate on essential business processes and goals while leveraging the expertise of a Affordable IT Consultant for App or Web Development.</>}
      />
      <Quotes
        title="Get 100% Customizable IT Consulting Services From Experts"
        highlightedText="Build Resilience, And Create New Efficiencies"
        paragraphs={[
          "As a leading IT Consulting Firm, our endeavor assists customers in selecting both cost- and time-efficient IT business solutions and avoiding the pitfalls associated with current technological trends. Because we base every solution and advice we provide on our understanding of the market, you can focus on running your company confidently, knowing that our Business Consultant Services will guide you in making the appropriate IT choices. Additionally, we offer expert digital transformation consulting services that help businesses optimize their digital investments for maximum ROI.",
          "Our Information Technology (IT) Consulting Services team keeps current on developing the newest frameworks and platforms by continually monitoring industry advancements. Because our Technology Consultants have certifications in a variety of platforms, you can be confident that the quality of our Top IT consulting Company for Development business will meet your expectations. Have a conversation with our IT consulting company to learn more about how our Business Consultant Services may assist you with your IT Strategy and Roadmap. We also specialize in enterprise IT consulting for businesses aiming to scale operations, improve security, and modernize IT environments.",
        ]}
        emphasizeTextIndex={[1]}
        emphasizePhrases={["DevOps", "prioritized plan"]}
      />
      <PremiumServices />
      <Benefits
        benifits={benefits}
        sectionTitle="Benefits of IT Consulting"
        sectionDescription="Reduced risk, better performance, and faster delivery cycles."
      />
      <AboutUs />
      <ExpertiseSlider
        expertiseCards={expertiseCards}
        sectionTitle="Consulting Expertise"
        sectionDescription="Architecture, security, cloud, DevOps, and data engineering."
      />
      <ReasonChoose 
        title="Kryzen Custom IT Service"
        des="Sapphire developers thrive at developing compelling mobile applications by utilizing our knowledge of the latest app development frameworks. Sapphire provides complete customized It Services to meet your requirements."
        benifits={IT_benifits}
      />
      <Technology_pannel techCards={IT_Tech} />
      <Common />
    </>
  ),

  "app development": (
    <>
      <HeroSection
        title="App Development Consulting Services in INDIA"
        description="Our app development consulting is geared toward the business needs of startups, small and medium-sized businesses, and large, well-established Best app consultants for startups companies."
        buttonText="Get Started"
        buttonLink="#contact"
        imageSrc={AppDevelopment}
        imageAlt="Digital Solutions illustration"
      />
      <LogoCarousel />
      <Charts
        img={AppSection}
        img2={AppDev}
        h1="Leading Mobile App Development Consulting Company"
        p1="Our App strategy and consulting firm use their knowledge of the latest industry trends and technology to provide recommendations for app solutions that are likely to result in the most favorable outcomes for the best android development comapny   in the context of competitive growth. All industry practices are included in the finished items that we create. To provide Enterprise App Development Consulting Services with a primary emphasis on conversion and success, we go the additional mile while analyzing your target market, company competitors, user personas, and a great deal more should you choose to use our consulting services. "
        h2="Brief About Best App Consultants for Startups"
        p2={
          <>
            "Our mobile app development consultants use the appropriate technologies to analyze the audience in-depth, taking into account their routines, geographic location, preferences, age, employment, and other factors.",
            "As an Affordable App Development and Consulting Agency, we plan a user-first interface and user experience (UI and UX) for your solution optimized for increased user engagement."
          </>
        }
      />
      <Quotes
        title="Get 100% Customizable App Development Consulting Experts"
        highlightedText="Research, Suggest, And Implement Improvements"
        paragraphs={[
          "Even if you have an excellent concept for an app, it alone will not guarantee that the app will be successful unless you also have a solid digital strategy and a roadmap. When assessing ios app development  concepts and deciding on revenue models, you need the direction and assistance of an expert Best App Development Consulting Company to avoid potential traps. Our Mobile App Consulting Services assist customers in determining whether or not their proposal is viable, developing a plan, and outlining the likely compliances, in addition to selecting the appropriate technology stacks, processes, and trends to achieve the desired outcomes.",
          "Utilize the software development and consulting services we provide for the web, Android, or iOS to identify potential problems, discover solutions to those problems, and formulate a mobile strategy to ensure the success of your app. If you want the most benefits from your concept, you should hire app development consultant for business through our Mobile Application Development Consulting Services, regardless of whether you run a startup or an enterprise firm. Our Mobile App Development Consulting Company will assist you in determining your target audience, budget, and various strategies for developing your mobile app.",
        ]}
        emphasizeTextIndex={[1]}
        emphasizePhrases={["CI/CD", "observability"]}
      />
      <PremiumServices />
      <Benefits
        benifits={AppDev_experties}
        sectionTitle="Expertise In Our App Development Consulting"
        sectionDescription="As a Leading Mobile App Consulting Company, we have years of experience in this field."
      />
      <AboutUs />
       <Benefits
        benifits={AppDev_benifits}
        sectionTitle="Benefits of App Development Consulting Services"
        sectionDescription="Our App Development Consulting Services help companies develop their app concepts and succeed in the digital age."
      />
      <TechnologyStack data={AppDev_Tech} />
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

  const toSlug = (text) =>
    (text || "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const serviceEntry = services.find((s) => toSlug(s.label) === toSlug(service));

  const subItemSlug = toSlug(subItem);

  const subItemName = serviceEntry?.sub.find((sub) => toSlug(sub) === subItemSlug);

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