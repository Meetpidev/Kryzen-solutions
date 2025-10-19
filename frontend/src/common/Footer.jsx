import { useState } from "react";
import { Link } from "react-router-dom";

const footerLinks = {
  Company: [
    "About Sapphire",
    "Events & Activities",
    "Careers",
    "Contact-Us",
    "Portfolio",
    "Awards & Recognition",
    "Why Choose Us",
  ],
  Services: [
    "Web Development",
    "Mobile App Development",
    "Custom Software Development",
    "Graphics & UI/UX Design",
    "Digital Marketing",
    "ERP & CRM Solutions",
    "Domain & Hosting",
    "AI Animations & Automation",
  ],
  Technology: [
    ".NET",
    "PHP",
    "Android",
    "iOS",
    "Flutter",
  ]
};

const solutions = {
  "Solutions Column 1": [
    "Taxi Booking App",
    "Covid Tracker App",
    "E-Commerce App",
    "Product Finder App",
    "Eyelash Booking App",
    "Language Learning App",
    "Barber shop Booking App",
    "On Demand App Development",
  ],
  "Solutions Column 2": [
    "Fitness App",
    "Dating App",
    "Salon App",
    "Car Wash App",
    "E-Learning App",
    "Car Rental App",
    "Bike Rental App",
    "Food Delivery App",
  ],
  "Solutions Column 3": [
    "E-Commerce Solution",
    "Car Rental App",
    "Medicine Delivery App",
    "Chat App Development",
    "Pet Management App",
    "Emergency Alert App",
    "Payment Service App",
    "Sports App Development",
  ]
};

const getLinks = (category, links) => {
  // Map label to correct path
  const linkMap = {
    "Careers": "/careers",
    "Contact-Us": "/contact-us",
    "Web Development": "/service/mobile-app-development/progressive-web-app-development",
    "Mobile App Development": "/service/mobile-app-development/mobile-app-development",
    "Custom Software Development": "/service/mobile-app-development/custom-mobile-app-development",
    "Graphics & UI/UX Design": "/service/other-services/ui/ux-designing",
    "Digital Marketing": "/service/other-services/digital-marketing",
    "ERP & CRM Solutions": "/service/software-development/crm",
    "Domain & Hosting": "/service/software-development/web-application",
    "AI Animations & Automation": "/service/ai-%26-ml-development/ai%2Fml-development",
    ".NET": "/technology/dotnet",
    "PHP": "/technology/php",
    "Android": "/technology/android",
    "iOS": "/technology/ios",
    "Flutter": "/technology/flutter",
    "About Sapphire": "/about-Kryzen-Software-Solutions",
    "Why Choose Us": "/choose",
  };

  return (
    <ul className="space-y-2 mt-3 list-none ">
      {links.map((link, index) => (
        <li key={index} className="flex items-center space-x-1 text-gray-600 text-sm hover:text-blue-600">
          <span>•</span>
          <Link to={linkMap[link] || "#"} className="block">
            {link}
          </Link>
        </li>
      ))}
    </ul>
  );
};


// const getLinks = (category, links) => (
//   <ul className="space-y-2 mt-3 list-none ">
//     {links.map((link, index) => (
//       <li key={index} className="flex items-center space-x-1 text-gray-600 text-sm hover:text-blue-600">
//         <span>•</span>
//         {link === "About Sapphire" ? (
//           <Link to="/about-Kryzen-Software-Solutions" className="block">
//             {link}
//           </Link>
//         ) : link === "Why Choose Us" ? (
//           <Link to="/choose" className="block">
//             {link}
//           </Link>
//         ) : link === "Events & Activities" ? (
//           <Link to="/events-activity" className="block">
//             {link}
//           </Link>
//         ) : (
//           <Link to="#" className="block">
//             {link}
//           </Link>
//         )}
//       </li>
//     ))}
//   </ul>
// );

const getSolutionsLinks = links => (
  <ul className="space-y-2 mt-3">
    {links.map((link, index) => (
      <li key={index}>
        <a href="#" className="text-gray-600 hover:text-blue-600 text-sm block">
          • {link}
        </a>
      </li>
    ))}
  </ul>
);

export default function Footer() {
  const [open, setOpen] = useState("");

  const solutionsArray = Object.values(solutions).flat();

  const sections = [
    { key: "Company", label: "Company", links: getLinks("Company", footerLinks.Company) },
    { key: "Services", label: "Services", links: getLinks("Services", footerLinks.Services) },
    { key: "Technology", label: "Technology", links: getLinks("Technology", footerLinks.Technology) },
    { key: "Solutions", label: "Solutions", links: getSolutionsLinks(solutionsArray) },
  ];

  return (
    <footer className="bg-white">

      <div className="hidden lg:block max-w-8xl px-4 py-5 rounded-lg border border-gray-300 mx-4 my-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="lg:col-span-1">
              <h3 className="text-lg font-bold text-blue-600 mb-4">{category}</h3>
              {getLinks(category, links)}
            </div>
          ))}

          <div className="lg:col-span-3">
            <h3 className="text-lg font-bold text-blue-600 mb-4">Solutions</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.entries(solutions).map(([colTitle, links]) => (
                <div key={colTitle}>
                  {getSolutionsLinks(links)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="block lg:hidden max-w-[42rem] mx-auto px-3 pt-8 pb-8">
        <div className="rounded-xl border border-gray-200 p-3 bg-white">
          {sections.map(({ key, label, links }) => (
            <div key={key}>
              <button
                onClick={() => setOpen(open === key ? "" : key)}
                className="w-full flex items-center justify-between text-left py-4"
                aria-expanded={open === key}
                aria-controls={`footer-sec-${key}`}
              >
                <span className="font-bold text-blue-700 text-lg">{label}</span>
                <span className="text-blue-700 text-2xl font-extrabold select-none">
                  {open === key ? "−" : "+"}
                </span>
              </button>
              <div
                id={`footer-sec-${key}`}
                className={`overflow-auto transition-max-height duration-300 ${open === key ? "max-h-96" : "max-h-0"}`}
                style={{
                  transition: "max-height 0.3s ease",
                }}
              >
                {open === key && links}
              </div>
              <hr className="border-t border-gray-100 my-0" />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
