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

const ipadExpertise = [
  {
    title: "iPad App Design",
    description:
      "We specialize in crafting intuitive and engaging iPad app designs, ensuring a seamless user experience tailored to your brand's identity."
  },
  {
    title: "Enterprise iPad App Development",
    description:
      "Our team develops robust enterprise-grade iPad applications, focusing on scalability, security, and performance to meet business needs."
  },
  {
    title: "iPad Tech Support and Preventative Maintenance",
    description:
      "We offer comprehensive technical support and maintenance services, ensuring your iPad applications remain up-to-date and perform optimally."
  },
  {
    title: "iPad App Development in Native Language",
    description:
      "Leveraging native iOS technologies, we build high-performance iPad applications that fully utilize device capabilities and deliver superior user experiences."
  },
  {
    title: "Augmented Reality (AR) App Solutions",
    description:
      "We develop interactive AR applications for iPad, enhancing user engagement by integrating real-world elements with digital content."
  },
  {
    title: "Integration with Third-Party Services",
    description:
      "Our expertise includes integrating iPad apps with various third-party services like WebRTC, Twilio, Stripe, PayPal, and more, to extend functionality."
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
  },
  {
    title: "Enhanced Security",
    description:
      "By utilizing Django's built-in security features, Sapphire ensures that applications are protected against common threats like SQL injection, cross-site scripting, and cross-site request forgery, safeguarding sensitive data.",
    bg: "bg-teal-100",
  },
  {
    title: "Scalability and Flexibility",
    description:
      "Django's modular architecture allows for the development of scalable applications that can grow with your business needs, ensuring long-term adaptability and performance.",
    bg: "bg-blue-100",
  },
  {
    title: "Cost Efficiency",
    description:
      "The use of reusable components and rapid development capabilities of Django leads to reduced development costs, providing businesses with high-quality solutions within budget.",
    bg: "bg-blue-100",
  },
  {
    title: "Customizable Solutions",
    description:
      "Sapphire's expertise in Django allows for the creation of tailor-made applications that align with specific business requirements, offering personalized solutions that drive business success.",
    bg: "bg-teal-100",
  }
];

const Django_benifits = [
  {
    title: "Fast growth",
    description:
      "We can create web apps using Django's batteries-included approach, which includes many built-in capabilities and tools. Developers can concentrate on crucial application functionalities using Django’s admin interface, authentication system, and ORM."
  },
  {
    title: "Versatility",
    description:
      "Django is a flexible framework for building CMS, e-commerce, social network, and other online applications. Its large ecosystem of third-party packages and extensions allow developers to adapt it to their applications."
  },
  {
    title: "Scalability and performance",
    description:
      "Its easy scaling makes Django suited for startups and big companies. Django apps can withstand substantial traffic loads and remain responsive because of their scalable design and performance optimization methods like caching and database query optimization."
  },
  {
    title: "Community and Help",
    description:
      "To help developers at every level, the Django community includes documentation, tutorials, forums, and online tools. Due to Django’s open-source nature, developers may use many free and open-source tools and libraries to speed up development."
  },
  {
    title: "Security",
    description:
      "Web developers prioritize security, and Django has several built-in security measures. Django prevents SQL injection, XSS, CSRF, and clickjacking. User login and permission are built into Django, making safe user authentication."
  },
  {
    title: "Flexibility",
    description:
      "Its modular architecture and simple code refactoring let developers adapt to changing needs and iterate fast. Data manipulation and dynamic content generation are simplified by Django’s template system and ORM."
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
  },
  {
    title: "Extreme Security Encryption",
    description: "Laravel's encryption, authentication, and password protection all top-notches. To prevent data breaches, it gives CSRF tokens.",
  },
  {
    title: "Built-in Project Environment",
    description: "The integrated PHP environment of Laravel simplifies difficult site development by organizing scripts. Artisan, its built-in tool, allows command-line Laravel interaction.",
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
    title: "TypeScript App Development",
    description:
      "We have assembled a skilled group capable of developing an enterprise-grade mobile application that is resilient, scalable, and engaging. Our professionals guarantee the flawless and high-quality delivery of mobile app solutions with a user interface unparalleled in depth and breadth.",
    btn: "View More",
  },
  {
    title: "Endeavor App Development And APIs",
    description:
      "When you work with us, you essentially agree to a prosperous future for your company. When planning an endeavor, we consider some factors: adaptability, user interface, speed, energy, and liquid usage. Get in touch with us right now!",
    btn: "View More",
  },
  {
    title: "TypeScript Consultation",
    description:
      "Have a conversation with one of our TypeScript specialists if you have questions regarding TypeScript, including whether it has any benefits or drawbacks. Finding exact solutions for your company that is based on TypeScript is something our brightest brains can help you with.",
    btn: "View More",
  },
  {
    title: "Web App Development",
    description:
      "Our experience as a typescript development company helps firms achieve resounding levels of success. We write our code in TypeScript and construct the structure using JavaScript, which ultimately leads to developing cutting-edge solutions in the form of web applications.",
    btn: "View More",
  },
  {
    title: "JS To TS Migration",
    description:
      "If you wish to switch from your current platforms that use JavaScript to TypeScript, we can achieve this in as little as one, two, or three simple steps. Our TypeScript engineers use a straightforward method that does not include any potential risks to migrate from JS to TS successfully.",
    btn: "View More",
  },
  {
    title: "Maintenance & Support",
    description:
      "We provide the most excellent support and maintenance services available, and we will assist you in keeping up the work, whether it is an update in the version being used or maintenance services. The reliable operation of your digital product is ensured by our use of various strategies and procedures.",
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
        imageSrc={MobileApp}
        imageAlt="Digital Solutions illustration"
      />
      <LogoCarousel />
      <Charts
        img={Chart}
        img2={PieChart}
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
      <ExpertiseSlider expertiseCards={ipadExpertise} sectionTitle="The Expertise Of Our iPad App Developers" sectionDescription="You may maximize the value of your company's operations by using our cutting-edge Salesforce Application Development services to run your business more efficiently and effectively."/>
      <PremiumServices />
      <Benefits
        benifits={ipadAppBenefits}
        sectionTitle="Benefits of iPad Development Service"
        sectionDescription="iPad app Development may boost corporate operations and client engagement."
      />
      <AboutUs />
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
        imageSrc={MobileApp}
        imageAlt="Digital Solutions illustration"
      />
      <LogoCarousel />
        <Charts
        img={Chart}
        img2={PieChart}
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
      <ExpertiseSlider
        expertiseCards={expertiseCards}
        sectionTitle="Our Expertise in Custom App Development Services"
        sectionDescription="We specialize in top custom app development services for every industry type and size. Our expertise includes:"
      />
      <TechnologyStack data={Custom_Technology} />
      <Benefits
        benifits={Custom_benefits}
        sectionTitle="Benefits of Custom Mobile App Development"
        sectionDescription="Custom Mobile App Development Service lets firmsdesign custom apps for thire purposes."
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
        title="Django Development Company in INDIA"
        description="Django is a free, open-source, high-level web development framework based on Python programming."
        buttonText="Get Started"
        buttonLink="#contact"
        imageSrc={MobileApp}
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
        description="We are a leading Laravel development company with a high degree of skill in Laravel, one of the most popular PHP-based frameworks available today."
        buttonText="Get Started"
        buttonLink="#contact"
        imageSrc={MobileApp}
        imageAlt="Digital Solutions illustration"
      />
      <LogoCarousel />
        <Charts
        img={Chart}
        img2={PieChart}
        h1="Brief About Laravel Development for Businesses"
        p1="As a custom Laravel application development company, our in-house developers are solution-oriented, highly skilled, and capable of delivering industry-leading solutions that will set you apart from other businesses in your field and help you achieve a speedy return on investment."
        h2="Affordable Laravel Development Services for Best Solutions"
        p2={
          <>
            Our enterprise-grade Laravel development solutions experts create strong, user-friendly web apps and custom solutions for your business and provide advice, design, development, testing, and deployment. We build secure, scalable, and fast apps using Laravel's rich capabilities to improve your business and offer API integration, e-commerce solutions, CRM development, and more for new and current projects. We also provide full maintenance and support to keep your application running properly and keeping up with advances.
          </>
        }
      />
      <Quotes
        title="Get 100% Customizable Laravel Development Services By Experts"
        highlightedText="Feature`~Packed Web And Mobile Apps"
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
        title="Artificial Intelligence Development Company"
        description="Build intelligent solutions with machine learning, vision, and NLP that automate decisions, uncover insights, and accelerate innovation across your business."
        buttonText="Get Started"
        buttonLink="#contact"
        imageSrc={MobileApp}
        imageAlt="Digital Solutions illustration"
      />
      <LogoCarousel />
      <Charts />
      <Quotes
        title="AI solutions that deliver measurable impact"
        highlightedText="From strategy to production AI"
        paragraphs={[
          "We design AI roadmaps, select the right models, and build secure pipelines so you can move from proof of concept to real business outcomes.",
          "Our team ships ML services for prediction, personalization, and automation with MLOps, monitoring, and ongoing model improvement.",
        ]}
        emphasizeTextIndex={[1]}
        emphasizePhrases={["MLOps", "personalization"]}
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
        title="AI Chatbot Development Company"
        description="Launch intelligent chat and voice bots that understand context, automate support, and boost conversions across web, mobile, and messaging."
        buttonText="Get Started"
        buttonLink="#contact"
        imageSrc={MobileApp}
        imageAlt="Digital Solutions illustration"
      />
      <LogoCarousel />
      <Charts />
      <Quotes
        title="Conversational AI that feels human"
        highlightedText="Smarter support and guided sales"
        paragraphs={[
          "We build chatbots with NLP, retrieval, and integrations to answer questions, resolve tickets, and collect leads 24/7.",
          "Custom flows and analytics help you deflect routine queries, speed up response times, and personalize every interaction.",
        ]}
        emphasizeTextIndex={[1]}
        emphasizePhrases={["NLP", "24/7"]}
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
        title="TypeScript Development Services"
        description="Ship maintainable web apps faster with strong typing, modern tooling, and frameworks like React, Angular, and Vue."
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
        title="Type-safe code, fewer bugs"
        highlightedText="Better DX and reliable releases"
        paragraphs={[
          "We add types, refactor to modern patterns, and improve build pipelines for speed and quality.",
          "Migrations from JavaScript to TypeScript include strict mode, shared types, and test coverage.",
        ]}
        emphasizeTextIndex={[1]}
        emphasizePhrases={["strict mode", "refactor"]}
      />
      <TechnologiesSlider />
      <PremiumServices />
      <Benefits
        benifits={TypeScript_benifits}
        sectionTitle="Benefits of Type Script Development Service"
        sectionDescription="TypeScript Development Services helps organizations construct contemporary web apps with reliability and scalability"
      />
      <AboutUs />
      <ExpertiseSlider
        expertiseCards={typescriptExpertise}
        sectionTitle="Expertise In Our Typescript Development Services"
        sectionDescription="Our typescript development services cater to all your development needs."
      />
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
        title="Product Development"
        description="We help you plan, design, build, and scale products with predictable delivery and strong ROI."
        buttonText="Get Started"
        buttonLink="#contact"
        imageSrc={MobileApp}
        imageAlt="Digital Solutions illustration"
      />
      <LogoCarousel />
      <Charts />
      <Quotes
        title="End-to-End Product Engineering"
        highlightedText="Discovery to Launch and Beyond"
        paragraphs={[
          "From discovery and prototyping to iterative delivery, QA, and DevOps, our team partners with you to build market-ready products that delight users and scale reliably.",
          "We embed feedback loops, analytics, and A/B testing to continuously refine the product, reduce risk, and accelerate time-to-value.",
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
      <Common />
    </>
  ),

  "software development": (
    <>
      <HeroSection
        title="Software Development"
        description="Custom software solutions tailored to your workflows, users, and growth plans."
        buttonText="Get Started"
        buttonLink="#contact"
        imageSrc={MobileApp}
        imageAlt="Digital Solutions illustration"
      />
      <LogoCarousel />
      <Charts />
      <Quotes
        title="Reliable, Maintainable, and Secure Software"
        highlightedText="Built for Scale and Longevity"
        paragraphs={[
          "We design modular architectures with strong testing, CI/CD, and observability to keep your software fast, secure, and easy to evolve.",
          "Our agile approach and transparent communication ensure predictable delivery and measurable business impact.",
        ]}
        emphasizeTextIndex={[1]}
        emphasizePhrases={["predictable delivery", "measurable impact"]}
      />
      <PremiumServices />
      <Benefits
        benifits={benefits}
        sectionTitle="Why Choose Our Software Development"
        sectionDescription="Scalable code, robust QA, and thoughtful UX for high adoption."
      />
      <AboutUs />
      <ExpertiseSlider
        expertiseCards={expertiseCards}
        sectionTitle="Technology Expertise"
        sectionDescription="Frontend, backend, cloud-native, and data engineering skills in one team."
      />
      <Common />
    </>
  ),

  "application services": (
    <>
      <HeroSection
        title="Application Services"
        description="Modernize, maintain, and optimize applications to reduce costs and improve reliability."
        buttonText="Get Started"
        buttonLink="#contact"
        imageSrc={MobileApp}
        imageAlt="Digital Solutions illustration"
      />
      <LogoCarousel />
      <Charts />
      <Quotes
        title="Modernization and Managed Services"
        highlightedText="Enhance Performance and Stability"
        paragraphs={[
          "We upgrade legacy stacks, migrate to cloud-native platforms, and improve resilience with monitoring and alerting.",
          "Our managed services cover incident response, performance tuning, and continuous improvement.",
        ]}
        emphasizeTextIndex={[1]}
        emphasizePhrases={["cloud-native", "continuous improvement"]}
      />
      <PremiumServices />
      <Benefits
        benifits={benefits}
        sectionTitle="Benefits of Application Services"
        sectionDescription="Lower TCO, improved uptime, and faster change delivery."
      />
      <AboutUs />
      <ExpertiseSlider
        expertiseCards={expertiseCards}
        sectionTitle="Capabilities"
        sectionDescription="Refactoring, replatforming, SRE, and DevOps automation."
      />
      <Common />
    </>
  ),

  "startup consulting": (
    <>
      <HeroSection
        title="Startup Consulting Services"
        description="Validate your idea, scope an MVP, and craft a go-to-market plan that wins early users and investor trust."
        buttonText="Get Started"
        buttonLink="#contact"
        imageSrc={MobileApp}
        imageAlt="Digital Solutions illustration"
      />
      <LogoCarousel />
      <Charts />
      <Quotes
        title="Move from idea to traction"
        highlightedText="Prototype, validate, iterate"
        paragraphs={[
          "Workshops, prototypes, and user testing help you prove demand before you scale.",
          "We align product, engineering, and fundraising milestones so you can launch with clarity.",
        ]}
        emphasizeTextIndex={[1]}
        emphasizePhrases={["user testing", "milestones"]}
      />
      <PremiumServices />
      <Benefits
        benifits={benefits}
        sectionTitle="Benefits for Startups"
        sectionDescription="Clarity, speed to market, and investor-ready documentation."
      />
      <AboutUs />
      <ExpertiseSlider
        expertiseCards={expertiseCards}
        sectionTitle="What We Bring"
        sectionDescription="Product strategy, UX, engineering, analytics, and GTM support."
      />
      <Common />
    </>
  ),

  "crm": (
    <>
      <HeroSection
        title="CRM"
        description="Design and implement CRM solutions that unify data and boost conversions."
        buttonText="Get Started"
        buttonLink="#contact"
        imageSrc={MobileApp}
        imageAlt="Digital Solutions illustration"
      />
      <LogoCarousel />
      <Charts />
      <Quotes
        title="Data-Driven Customer Journeys"
        highlightedText="Personalization and Automation"
        paragraphs={[
          "We integrate CRMs with marketing, support, and billing to create a single customer view.",
          "Automation and analytics improve pipeline visibility and customer lifetime value.",
        ]}
        emphasizeTextIndex={[1]}
        emphasizePhrases={["automation", "lifetime value"]}
      />
      <PremiumServices />
      <Benefits
        benifits={benefits}
        sectionTitle="Benefits of CRM"
        sectionDescription="Higher conversion rates and better retention via insights and workflows."
      />
      <AboutUs />
      <ExpertiseSlider
        expertiseCards={expertiseCards}
        sectionTitle="CRM Expertise"
        sectionDescription="Custom integrations, dashboards, and workflow automation."
      />
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
        title="UI/UX Design"
        description="Create accessible, consistent experiences with research-driven UX and scalable design systems."
        buttonText="Get Started"
        buttonLink="#contact"
        imageSrc={MobileApp}
        imageAlt="Digital Solutions illustration"
      />
      <LogoCarousel />
      <Charts />
      <Quotes
        title="Design that drives outcomes"
        highlightedText="From research to design systems"
        paragraphs={[
          "We interview users, map journeys, and prototype flows to reduce friction and improve task success.",
          "Design systems and component libraries speed delivery while keeping the product cohesive.",
        ]}
        emphasizeTextIndex={[1]}
        emphasizePhrases={["journeys", "component libraries"]}
      />
      <PremiumServices />
      <Benefits
        benifits={benefits}
        sectionTitle="Benefits of Great UX"
        sectionDescription="Higher engagement, conversions, and retention."
      />
      <AboutUs />
      <ExpertiseSlider
        expertiseCards={expertiseCards}
        sectionTitle="UX Capabilities"
        sectionDescription="Research, IA, prototyping, testing, and design systems."
      />
      <Common />
    </>
  ),

  "digital marketing": (
    <>
      <HeroSection
        title="Top Digital Marketing Services in USA"
        description="Grow traffic and revenue with SEO, paid media, and content strategies tied to clear KPIs."
        buttonText="Get Started"
        buttonLink="#contact"
        imageSrc={MobileApp}
        imageAlt="Digital Solutions illustration"
      />
      <LogoCarousel />
      <Charts />
      <Quotes
        title="Performance marketing without the guesswork"
        highlightedText="Full-funnel strategy and reporting"
        paragraphs={[
          "We combine technical SEO, SEM, and CRO to attract qualified visitors and convert them efficiently.",
          "Dashboards and experiments make progress visible and campaigns continually better.",
        ]}
        emphasizeTextIndex={[1]}
        emphasizePhrases={["CRO", "experiments"]}
      />
      <PremiumServices />
      <Benefits
        benifits={benefits}
        sectionTitle="Marketing Benefits"
        sectionDescription="More qualified leads and better ROI from campaigns."
      />
      <AboutUs />
      <ExpertiseSlider
        expertiseCards={expertiseCards}
        sectionTitle="Channels"
        sectionDescription="SEO, SEM, social, email, and analytics."
      />
      <Common />
    </>
  ),

  "mobile application development": (
    <>
      <HeroSection
        title="Mobile Application Development"
        description="Design and build mobile apps that users love and businesses trust."
        buttonText="Get Started"
        buttonLink="#contact"
        imageSrc={MobileApp}
        imageAlt="Digital Solutions illustration"
      />
      <LogoCarousel />
      <Charts />
      <Quotes
        title="High-Quality Mobile Experiences"
        highlightedText="Performance, Security, and UX"
        paragraphs={[
          "We deliver native and cross-platform apps with seamless UX and robust performance.",
          "Our tooling and processes reduce time-to-market and improve reliability.",
        ]}
        emphasizeTextIndex={[1]}
        emphasizePhrases={["native", "cross-platform"]}
      />
      <PremiumServices />
      <Benefits
        benifits={benefits}
        sectionTitle="Benefits of Our Mobile Apps"
        sectionDescription="Scalable, secure, and easy to maintain applications."
      />
      <AboutUs />
      <ExpertiseSlider
        expertiseCards={expertiseCards}
        sectionTitle="Mobile Expertise"
        sectionDescription="iOS, Android, Flutter, React Native, and more."
      />
      <Common />
    </>
  ),

  "it consulting": (
    <>
      <HeroSection
        title="IT Consulting Services"
        description="Align technology with business goals through architecture reviews, security hardening, and cloud strategy."
        buttonText="Get Started"
        buttonLink="#contact"
        imageSrc={MobileApp}
        imageAlt="Digital Solutions illustration"
      />
      <LogoCarousel />
      <Charts />
      <Quotes
        title="Practical guidance, real results"
        highlightedText="Assess, prioritize, execute"
        paragraphs={[
          "We evaluate your stack and processes, then outline a prioritized plan to reduce risk and increase velocity.",
          "Engagements cover cloud, data, security, and DevOps with measurable milestones and ownership.",
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
      <Common />
    </>
  ),

  "app development": (
    <>
      <HeroSection
        title="App Development"
        description="Plan and build high-quality apps with the right tech and process."
        buttonText="Get Started"
        buttonLink="#contact"
        imageSrc={MobileApp}
        imageAlt="Digital Solutions illustration"
      />
      <LogoCarousel />
      <Charts />
      <Quotes
        title="From Plan to Production"
        highlightedText="Design, Build, Launch"
        paragraphs={[
          "We guide you through architecture, UX, and implementation choices to ship faster with confidence.",
          "Delivery includes CI/CD, testing strategy, and observability to ensure long-term reliability.",
        ]}
        emphasizeTextIndex={[1]}
        emphasizePhrases={["CI/CD", "observability"]}
      />
      <PremiumServices />
      <Benefits
        benifits={benefits}
        sectionTitle="Benefits of Our App Development"
        sectionDescription="Predictable delivery, maintainable code, and great user experience."
      />
      <AboutUs />
      <ExpertiseSlider
        expertiseCards={expertiseCards}
        sectionTitle="Capabilities"
        sectionDescription="Mobile, web, backend, cloud, and data in one team."
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