import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TABS = [
  { label: "Cloud & Devops", key: "cloud" },
  { label: "Frontend", key: "frontend" },
  { label: "Backend", key: "backend" },
  { label: "Mobile", key: "mobile" },
  { label: "Database", key: "database" },
];

const TAB_CONTENT = {
  cloud: {
    title: "Cloud & Devops",
    description: `Both cloud and DevOps engineers are essential and complementary components of contemporary
infrastructure management and software development. To enhance your cloud experience and help you create more quickly, we provide dependable cloud and DevOps services on cloud platforms. DevOps enables almost instantaneous cloud product and service deployment, going beyond continuous integration and delivery (CI/CD).`,
    tools: [
      { name: "AWS", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoy2tVx2wxmi3eKsYkuaxWa-hlY-4NhDdtaw&s" },
      { name: "Google Cloud", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5-6FO0d6dcNiXCNWfir0r20dV9g4wnEqKTA&s" },
      { name: "Docker", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzUuylVvTEj0VFID0lk7iFpD2NOarBbnX60g&s" },
      { name: "Kubernetes", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuAUkLhdckLDiZaEgz1nxE7tvCxDbIYz5H7g&s" },
      { name: "Jenkins", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_S6Pj6tPYg3UrirWqCoN01x1xGUU97FFIHg&s" },
      { name: "Azure", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png" },
    ],
  },
  frontend: {
    title: "Frontend",
    description: "We use front-end technologies like HTML, CSS, and JavaScript because they are flexible, user-friendly, and provide a wealth of tools and support. Our team of experts will assist you at every level of front-end development. Our Certified Front-end developers can provide beautiful user-centric solutions by utilizing the newest front-end frameworks and technological developments.",
    tools: [
      { name: "Angular Js", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv0zU4ogT34koY9NaOok1UCky1gL5kJt-ZGA&s" },
      { name: "React Js", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPCMS5dKOhb5ku0srvEaKlFhxDU51SIpW_Xg&s" },
      { name: "Vue Js", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png" },
      { name: "Express Js", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSqvipngGcAC-YrGh2tfHLn9N3nImmq14Jyg&s" },
      { name: "Knockout Js", icon: "https://cdn.prod.website-files.com/62865614b39c464b76d339aa/683f1b2987a7298d7434d17d_Knockoutjs.svg" },
      { name: "JavaScript", icon: "https://static.vecteezy.com/system/resources/thumbnails/027/127/463/small_2x/javascript-logo-javascript-icon-transparent-free-png.png" },
    ],
  },
  backend: {
    title: "Backend",
    description: "We strengthen the app landscape using tried-and-true back-end development options. Our extraordinary expertise as a backend app development firm creates strong, scalable, and high-performing backend layers specifically suited to your project's needs. Our skilled backend development services in .NET, PHP, Python, Java, and other languages transform your company.",
    tools: [
      { name: ".Net", icon: "https://www.clipartmax.com/png/middle/218-2180127_net-training-indore-dot-net-logo-png.png" },
      { name: "Java", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkBkpAn_WwWrYS08ErIEfXMWU_HAlE8LBUPA&s" },
      { name: "Node.js", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6mkk0TKy0Hww7V1J9JkVUaHoF35GhtJN1Tw&s" },
      { name: "PHP", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/711px-PHP-logo.svg.png?20180502235434" },
      { name: "Python", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkBKGzgKHQA42GTo40DCQUnNVkUWd3FMzFJA&s" },
      { name: "Ruby", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-SkDlYjdnsr0wxW4QCUlVKpB0XnHiOubQmA&s" },
    ],
  },
  mobile: {
    title: "Mobile",
    description: "We use key technologies to create expressive and feature-rich native iOS / Android, cross-platform that will wow your users. For example, Kotlin and Java are the primary programming languages for Android apps, whereas Swift and Objective-C are frequently used for iOS development. The UI/UX design, prototyping, and collaboration are commonly done with tools like Adobe XD, Sketch, and Figma.",
    tools: [
      { name: "Android", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLIBpPNNm0N6Apru0vRGz-T6FYvyiWJ5ie8Q&s" },
    { name: "IOS", icon: "https://cdn-icons-png.flaticon.com/512/0/747.png" },
      { name: "React Native", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPCMS5dKOhb5ku0srvEaKlFhxDU51SIpW_Xg&s" },
      { name: "Flutter", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flutter_logo.svg/1024px-Flutter_logo.svg.png" },
      { name: "Swift", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyvxiKZRQnt32woh9rIjdG1y-9NJiaXkVX6A&s" },
    ],
  },
  database: {
    title: "Database",
    description: "Azure SQL Database is a fully managed, scalable cloud database solution that effortlessly connects with other Azure services. MongoDB is a popular choice for NoSQL database systems, especially for applications needing scalability and flexibility. We utilize MongoDB because of its document-oriented data model, which enables data to be stored in a format similar to JSON.",
    tools: [
      { name: "MongoDB", icon: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
      { name: "MySQL", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFPLXqRyw5PEl4ETnuzYuP5XhUI51sUdQzcg&s" },
      { name: "PostgreSQL", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/250px-Postgresql_elephant.svg.png" },
    ],
  },
};

export default function TechnologiesTabs() {
  const [activeTab, setActiveTab] = useState("cloud");
  const [mobileTabStart, setMobileTabStart] = useState(0);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 640 : false
  );

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 640;
      setIsMobile(mobile);
      setMobileTabStart(0);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleTabs = isMobile
    ? TABS.slice(mobileTabStart, mobileTabStart + 2)
    : TABS;

  const leftDisabled = mobileTabStart === 0;
  const rightDisabled = mobileTabStart + 2 >= TABS.length;

  const tabContent = TAB_CONTENT[activeTab];

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-4">
        Technologies We Work With
      </h1>
      <p className="text-center text-lg text-gray-600 mb-8">
        We work on wide range of tools and technologies to cater client business
        requirement for existing project or new application.
      </p>

      {/* Tab Navigation */}
      <div className="mb-8 flex items-center justify-center">
        {isMobile ? (
          <div className="flex items-center gap-2">
            <button
              onClick={() => setMobileTabStart((i) => Math.max(0, i - 1))}
              disabled={leftDisabled}
              aria-label="Show previous tabs"
              className={`rounded-full p-2 bg-blue-100 transition ${
                leftDisabled ? "opacity-30 cursor-not-allowed" : "hover:bg-blue-200"
              }`}
            >
              <ChevronLeft className="w-5 h-5 text-blue-900" />
            </button>
            {visibleTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-2 text-lg font-semibold rounded transition whitespace-nowrap ${
                  activeTab === tab.key
                    ? "bg-blue-900 text-white"
                    : "bg-[#005D89]-200 hover:bg-blue-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
            <button
              onClick={() =>
                setMobileTabStart((i) => Math.min(i + 1, TABS.length - 2))
              }
              disabled={rightDisabled}
              aria-label="Show next tabs"
              className={`rounded-full p-2 bg-blue-100 transition ${
                rightDisabled ? "opacity-30 cursor-not-allowed" : "hover:bg-blue-200"
              }`}
            >
              <ChevronRight className="w-5 h-5 text-blue-900" />
            </button>
          </div>
        ) : (
          <div className="flex gap-3 justify-center">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-2 text-lg font-semibold rounded transition whitespace-nowrap ${
                  activeTab === tab.key
                    ? "bg-blue-900 text-white"
                    : "bg-[#005D89]-200 hover:bg-blue-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Tab Content */}
      <div className="flex flex-col md:flex-row md:items-start gap-8">
        <div className="md:w-2/5">
          <h2 className="text-3xl font-bold mb-4">{tabContent.title}</h2>
          <p className="text-gray-700">{tabContent.description}</p>
        </div>
        <div className="md:w-3/5 grid grid-cols-2 sm:grid-cols-3 gap-6">
         {tabContent.tools.map((tool, idx) => (
  <div
    key={`${tool.name}-${idx}`} 
    className="bg-white rounded-lg shadow p-6 flex flex-col items-center"
  >
    <img src={tool.icon} alt={tool.name} className="h-12 w-12 mb-3" />
    <span className="font-semibold text-lg">{tool.name}</span>
  </div>
))}
        </div>
      </div>
    </div>
  );
}
