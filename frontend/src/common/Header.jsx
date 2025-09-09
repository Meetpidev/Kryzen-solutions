import { useState, useEffect } from "react";
import { ChevronDown, Menu, X, Mail, Calendar, MapPin, Briefcase } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "./logo.png";

const services = [
  {
    label: "Mobile App Development",
    sub: [
      "Mobile App Development", "Cross Platform App Development", "IPad App Development Services",
       "Hybrid App Development", "Progressive Web App Development", "Swift App Development",
      "Native App Development", "Windows App Development","Custom Mobile App Development", "B2B Mobile App Development"
    ]
  },
  {
    label: "Back End Development",
    sub: [
    "Django Development","Laravel Development","Python Development","NodeJs Development","Big Commerce Development"
  ] },
  {
    label: "AI & ML Development",
    sub: [
    "AI/ML Development","chatboat Development","data analytics","data migration","Business analytics"
  ]
  },
  {
    label: "Frontend Development",
    sub: [
    "Frontend Development","Typscript Development","Angular Development","React Development"
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

const solutions = [
  "Health Care App Development", "Education App Development", "Uber Like App Development", "Spotify Like App Development",
  "Zomato Like App Development", "Amazon Like App Development", "Visitor Management System", "Warehouse Management System",
  "Clover App Development"
];

const navigationItems = [
  {
    label: "Company",
    items: [
      { label: "About", to: "/about-Kryzen-Software-Solutions" },
      { label: "Why Choose Us", to: "/choose" },
      { label: "Careers", to: "/careers" },
      { label: "Contact Us", to: "/contact" }
    ],
  },
  {
    label: "Service",
    items: [{ label: "Mobile App", to: "/mobile-app" }],
  },
  {
    label: "Technology",
    items: [{ label: "React", to: "/technology/react" }],
  },
  {
    label: "Our Work",
    items: [{ label: "Cases", to: "/our-work/cases" }],
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setisMobile] = useState(false);
  const [Dropdown, setDropdown] = useState(null);
  const [megaMenu, setmegaMenu] = useState(null);
  const [active, setactive] = useState("Mobile App Development");
  const [openDropdown, setOpenDropdown] = useState(null);

  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setisMobile(!isMobile);
    if (!isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      setDropdown(null);
    }
  };
  // const closeMobileMenu = () => {
  //   setisMobile(false);
  //   document.body.style.overflow = "auto";
  //   setDropdown(null);
  // };

  const toggleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <div className="relative">
      <div
        className={`contact-bar-transition bg-contact-bg text-black px-4 py-2 text-sm overflow-hidden fixed top-0 left-0 right-0 z-40
    ${isScrolled ? "hidden" : ""} hidden md:flex`}
        data-testid="contact-bar"
      >
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-blue-300" />
                <a href="mailto:career@kryzensoftwaresolutions.com" className={`text-xs lg:text-[1.110rem] ${(!isHome || isScrolled) ? "text-black hover:text-blue-700" : "text-white hover:text-blue-300"
                  }`}>
                  For Career: career@kryzensoftwaresolutions.com
                </a>

              </div>

              <div className="flex items-center gap-2">
                <img
                  src="https://flagcdn.com/w20/in.png"
                  alt="India Flag"
                  className="w-4 h-3"
                />
                <span className={`text-xs lg:text-[1.110rem] ${(!isHome || isScrolled) ? "text-black hover:text-blue-700" : "text-white hover:text-blue-300"
                  }`}>For Sales: +91 704-125-2829</span>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-300" />
                <a href="https://maps.app.goo.gl/tXoapvH3Ky1MhVqz5" target="_blank" rel="noopener noreferrer" className={`text-xs lg:text-[1.110rem] ${(!isHome || isScrolled) ? "text-black hover:text-blue-700" : "text-white hover:text-blue-300"
                  }`}>Kryzen Software Solutions</a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-300" />
                <a href="mailto:contact@kryzensoftwaresolutions.com" className={`text-xs lg:text-[1.110rem] ${(!isHome || isScrolled) ? "text-black hover:text-blue-700" : "text-white hover:text-blue-300"
                  }`}>contact@kryzensoftwaresolutions.com</a>
              </div>

              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-blue-300" />
                <Link
                  to="/contact-us"
                  className={`text-xs lg:text-[1.110rem] cursor-pointer hover:text-blue-200 transition-colors"
                  data-testid="button-schedule-meeting ${(!isHome || isScrolled) ? "text-black hover:text-blue-700" : "text-white hover:text-blue-300"
                    }`}
                >
                  Schedule a Meeting
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav className={`fixed left-0 right-0 z-50 shadow-lg transition-all duration-300 ${isScrolled ? "top-0 bg-white text-gray-900" : "top-12 bg-navbar-bg text-navbar-text"}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center h-16 w-full">
            <div className="flex items-center whitespace-nowrap gap-3 mr-8 flex-shrink-0">
              <Link to='/' className="rounded p-2 flex-shrink-0">
                <img src={logo} alt="Logo" className="h-40 w-25 object-contain" />
              </Link>
              <Link to='/' style={{ transform: 'transLateX(-1rem)' }}><span className={`text-2xl font-bold ${(!isHome || isScrolled) ? "text-black " : "text-white "}`}>Kryzen</span><p className={`${(!isHome || isScrolled) ? "text-black" : "text-white"}`}>Software solutions</p></Link>
            </div>
            <div className="hidden lg:flex flex-1 flex-wrap items-center space-x-3">
              {[
                { label: "Company", menu: "company" },
                { label: "Service", menu: "service" },
                { label: "Technology", menu: "technology" },
                { label: "Our Work", menu: "ourwork" }
              ].map(({ label, menu }) => (
                <div key={label} className="relative"
                  onMouseEnter={() => setmegaMenu(menu)}
                  style={{ zIndex: 1000 }}
                >
                  <button className={`flex items-center font-semibold px-4 py-2 transition ${(!isHome || isScrolled) ? "text-black hover:text-blue-700" : "text-white hover:text-blue-300"
                    }`}>
                    {label}
                    <ChevronDown className="w-4 h-4 ml-1" />
                  </button>

                  {/* -------- BIG MENUS -------- */}
                  {megaMenu === menu && (
                    <div onMouseLeave={() => setmegaMenu(null)}>
                      {menu === 'company' && (
                        <div className="absolute left-[28rem] top-full mt-3 w-[100vw] max-w-[1750px] -translate-x-1/2 bg-white z-50 py-0 px-0 overflow-x-auto">
                          <div className="flex">
                            <div className="bg-[#005D89] text-white flex flex-col items-start p-10 min-w-[330px] max-w-[390px]">
                              <div className="text-3xl font-bold mb-5">Company</div>
                              <div className="mb-7 text-lg">
                                We Partner You To Deliver A Innovative Solution To Your Needs With Our 20+ Year Of Technical Experience With Fortune 500 Organizations.
                              </div>
                              <Link to="/about-Kryzen-Software-Solutions" className="bg-white border-0 text-blue-900 text-xl font-bold px-10 py-3 rounded shadow hover:bg-slate-50 transition mb-6 whitespace-nowrap">
                                About Company
                              </Link>
                            </div>
                            <div className="flex-1 px-6 py-8 w-full">
                              <div className="grid grid-cols-4 gap-10 pb-7">
                                {/* ABOUT US */}
                                <div>
                                  <div className="font-bold text-blue-800 text-lg mb-4">ABOUT US</div>
                                  <div className="space-y-2 text-gray-800">
                                    <div className="flex gap-15 whitespace-nowrap">
                                      <div className="w-full">
                                        <Link to='/about-Kryzen-Software-Solutions' onClick={() => setmegaMenu(null)} className="block w-full hover:bg-blue-600 hover:text-white cursor-pointer py-1 rounded">
                                          About Kryzen
                                        </Link>
                                        <Link to="/ceo-message" onClick={() => setmegaMenu(null)} className="block w-full hover:bg-blue-600 hover:text-white cursor-pointer py-1 rounded">
                                          CEO Message
                                        </Link>
                                        <Link to='/events-activity' className="hover:bg-blue-600 hover:text-white cursor-pointer py-1 rounded">Events & Activities</Link>
                                        <div className="hover:bg-blue-600 hover:text-white cursor-pointer py-1 rounded">Brochure</div>

                                      </div>
                                      <div>
                                        <Link to='/choose' onMouseLeave={() => setmegaMenu(null)} className="hover:bg-blue-600 hover:text-white cursor-pointer py-1 rounded">Why Choose Us</Link>
                                        <div className="py-3" onMouseLeave={() => setmegaMenu(null)}><Link to="/insightful-videos" className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">Insightful videos</Link></div>
                                      </div>

                                      <div>
                                        <div className="hover:bg-blue-600 hover:text-white cursor-pointer py-1 rounded">Blog</div>
                                        <div className="hover:bg-blue-600 hover:text-white cursor-pointer py-1 rounded">Careers</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* MODELS */}
                                <div className="ml-[17rem] whitespace-nowrap group">
                                  <div className="font-bold text-blue-800 text-lg mb-4">MODELS</div>
                                  <div className="space-y-2 text-gray-800">
                                    <div  className="hover:text-blue-600  cursor-pointer rounded">Delivery Models</div>
                                    <div  className="hover:text-blue-600  cursor-pointer rounded">Engagement Models</div>
                                    <div  className="hover:text-blue-600  cursor-pointer py-1 rounded">Development Methodology</div>
                                  </div>
                                </div>

                                {/* TESTIMONIAL */}
                                <div className="ml-[17rem] whitespace-nowrap">
                                  <div className="font-bold text-blue-800 text-lg mb-4">TESTIMONIAL</div>
                                  <div className="space-y-2 text-gray-800">
                                    <div className="hover:bg-white hover:p-1 hover:text-blue-800 cursor-pointer py-1 rounded">Client Testimonials</div>
                                  </div>
                                </div>


                              </div>
                              <div className="mt-4 flex gap-7 items-center pt-5 border-t">
                                <div className="font-bold text-blue-800 text-lg mr-4">REVIEWS AND RATING</div>
                                <div className="flex gap-6 pt-4" style={{ transform: 'transLateX(-15rem)' }}>
                                  <div className="flex flex-col"><img src="/google-logo.png" alt="" className="h-8" /><span className="text-black font-bold text-xs">1012 REVIEWS</span></div>
                                  <div className="flex flex-col"><img src="/clutch-logo.png" alt="" className="h-8" /><span className="text-black font-bold text-xs">301 REVIEWS</span></div>
                                  <div className="flex flex-col"><img src="/goodfirms-logo.png" alt="" className="h-8" /><span className="text-black font-bold text-xs">201 REVIEWS</span></div>
                                  <div className="flex flex-col"><img src="/designrush-logo.png" alt="" className="h-8" /><span className="text-black font-bold text-xs">55 REVIEWS</span></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {menu === 'service' && (
                        <div className="absolute left-[20rem] w-[100vw] mt-3 max-w-[1750px] -translate-x-1/2 bg-white z-50 shadow-xl flex rounded">
                          <div className="bg-[#0178a8] text-white flex flex-col justify-between p-10 min-w-[330px] max-w-[390px]">
                            <div>
                              <div className="text-3xl font-bold mb-5">Service</div>
                              <div className="mb-7 text-xl">
                                Our Portfolio Of Services Range From Designing Strategy To Delivering Impact.
                              </div>
                            </div>
                            <button className="bg-white text-[#0178a8] px-8 py-3 rounded font-bold mt-5">Hire Now</button>
                          </div>
                          <div className="flex-1 flex">
                            <div className="bg-gray-50 min-w-[320px] max-w-[320px] divide-y">
                              {services.map((svc) => (
                                <div
                                  key={svc.label}
                                  className={`px-8 py-3 flex items-center justify-between cursor-pointer font-semibold text-lg ${active === svc.label
                                    ? "bg-white text-[#0178a8]"
                                    : "hover:bg-gray-100"
                                    }`}
                                  onMouseEnter={() => setactive(svc.label)}
                                >
                                  {svc.label}
                                  {svc.sub?.length > 0 && (
                                    <span className="ml-auto text-[#0178a8]">&gt;</span>
                                  )}
                                </div>
                              ))}
                            </div>
                            {services.find((s) => s.label === active)?.sub?.length > 0 && (
                              <div className="bg-white flex-1 flex flex-wrap p-8">
                                {[
                                  services
                                    .find((s) => s.label === active)
                                    .sub.slice(0, 7),
                                  services
                                    .find((s) => s.label === active)
                                    .sub.slice(7),
                                ].map((col, i) => (
                                  <div key={i} className="w-1/2">
                                    {col.map((item) => (
                                      <Link
            key={item}
            to={`/service/${encodeURIComponent(active.toLowerCase().replace(/\s+/g, "-"))}/${encodeURIComponent(item.toLowerCase().replace(/\s+/g, "-"))}`}
            className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded block"
            onClick={() => setmegaMenu(null)}
          >
            {item}
          </Link>
                                    ))}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                      {menu === 'technology' && (
                        <div className="absolute left-[13rem] top-full mt-3 w-[100vw] max-w-[1800px] -translate-x-1/2 bg-white z-50 shadow-xl rounded transition-all duration-200 py-0 px-0 overflow-x-auto">
                          <div className="flex">
                            <div className="bg-[#005D89] text-white flex flex-col items-start p-10 min-w-[330px] max-w-[390px]">
                              <div className="text-3xl font-bold mb-5">Technology</div>
                              <div className="mb-7 text-xl">
                                Technology Is Best When It Brings People Together.
                              </div>
                              <Link
                                to="/about-company"
                                className="bg-white mt-22 border-0 text-blue-900 text-lg font-bold px-8 py-3 rounded shadow hover:bg-blue-50 transition mb-6 whitespace-nowrap"
                              >
                                About Company
                              </Link>
                            </div>

                            <div className="flex-1 px-8 py-10 w-full">
                              <div className="grid grid-cols-4 gap-16 pb-2">
                                {/* MOBILE */}
                                <div>
                                  <div className="font-bold text-blue-800 text-lg mb-4">MOBILE</div>
                                  <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">Android</div>
                                  <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">IOS</div>
                                  <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">Flutter</div>
                                  <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">React Native</div>

                                  <div className="font-bold text-blue-800 text-lg mb-4 mt-6">FRONTEND</div>
                                  <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">Angular</div>
                                  <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">React</div>
                                  <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">Vuejs</div>
                                </div>
                                {/* BACKEND & FRONTEND */}
                                <div>
                                  <div className="font-bold text-blue-800 text-lg mb-4">BACKEND</div>
                                  <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">.NET</div>
                                  <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">PHP</div>
                                  <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">Java</div>
                                  <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">Nodejs</div>
                                </div>
                                {/* TRENDING */}
                                <div>
                                  <div className="font-bold text-blue-800 text-lg mb-4">TRENDING</div>
                                  <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">Generative AI</div>
                                  <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">AI & ML</div>
                                  <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">Blockchain</div>
                                  <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">Full Stack</div>
                                </div>
                                {/* OTHERS */}
                                <div>
                                  <div className="font-bold text-blue-800 text-lg mb-4">OTHERS</div>
                                  <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">Wordpress</div>
                                  <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">Shopify</div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-blue-50 flex flex-col items-center justify-center min-w-[350px] max-w-[400px] px-12 py-6">
                              <div className="text-2xl font-bold text-gray-900 mb-3 text-center">
                                Let's grow together <br /> <span className="text-black">Partner with us</span>
                              </div>
                              <button className="bg-blue-800 text-white font-semibold px-8 py-3 rounded mt-4 mb-8 hover:bg-blue-900 transition">
                                Get A Quote
                              </button>
                              <img src="https://www.shutterstock.com/shutterstock/photos/1549501607/display_1500/stock-vector-two-people-shake-hands-as-a-result-of-agreement-successful-cooperation-happy-businessman-1549501607.jpg" className="h-55" alt="" />
                              {/* or use an <img> with a network URL as in your screenshot */}
                            </div>
                          </div>
                        </div>
                      )}
                      {menu === 'ourwork' && (
                        <div className="absolute left-[4rem] mt-3 w-[100vw] max-w-[1800px] -translate-x-1/2 bg-white z-50 shadow-xl rounded transition-all duration-200 py-0 px-0 overflow-x-auto">
                          <div className="w-full flex bg-white text-gray-900 rounded shadow-xl pb-7 overflow-hidden" style={{ minHeight: 390 }}>
                            <div className="bg-[#0178a8] flex flex-col justify-between text-white p-10 min-w-[350px] max-w-[390px]">
                              <div>
                                <div className="text-3xl font-bold mb-5">Our Work</div>
                                <div className="mb-7 text-xl leading-snug">
                                  Insights From Sapphire Experts Who Help The World's Most Successful Fortune 500 Companies Solve Key Challenges. Lets Shape Happier Tomorrow.
                                </div>
                              </div>
                              <button className="bg-white text-[#0178a8] px-8 py-3 rounded font-bold mt-5 hover:bg-blue-50 transition">
                                Request A Quote
                              </button>
                            </div>


                            <div className="flex-1 flex px-6 py-8 items-start gap-9">
                              <div className="w-1/3">
                                <div className="font-bold text-blue-800 text-xl mb-3 uppercase">SOLUTIONS</div>
                                {solutions.map((sol) => (
                                  <div key={sol} className="py-2 font-medium hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer rounded">{sol}</div>
                                ))}
                              </div>
                              <div className="w-1/3 flex flex-col items-center justify-start">
                                <div className="font-bold text-blue-800 text-xl mb-3 uppercase text-center">CASE STUDY</div>
                                <div className="bg-[#f5fafc] rounded-xl flex items-center justify-center w-full py-4 px-0 h-48">
                                  <img src='https://www.shutterstock.com/shutterstock/photos/1549501607/display_1500/stock-vector-two-people-shake-hands-as-a-result-of-agreement-successful-cooperation-happy-businessman-1549501607.jpg' alt="Case Study" className="object-contain h-36" />
                                </div>
                              </div>
                              <div className="w-1/3 flex flex-col items-center justify-start">
                                <div className="font-bold text-blue-800 text-xl mb-3 uppercase text-center">PORTFOLIO</div>
                                <div className="bg-[#f5fafc] rounded-xl flex items-center justify-center w-full py-4 px-0 h-48">
                                  <img src='https://www.shutterstock.com/shutterstock/photos/1549501607/display_1500/stock-vector-two-people-shake-hands-as-a-result-of-agreement-successful-cooperation-happy-businessman-1549501607.jpg' alt="Portfolio" className="object-contain h-36" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                  )}
                </div>
              ))}
            </div>

            {/* Desktop-only buttons */}
            <div className="hidden lg:flex items-center ml-auto space-x-4">
              <button
                className="bg-[#D2497E] hover:bg-cyan-600 text-white px-6 py-2 font-bold rounded-lg transition"
                data-testid="button-lets-talk-ai"
                style={{ minWidth: 120 }}
                onMouseEnter={() => setmegaMenu(true)}
                onMouseLeave={()=>setmegaMenu(null)}
              >
                Let's Talk AI
              </button>
              <Link to="/contact-us">
              <button

                className="bg-cyan-500 hover:bg-cyan-600 text-black py-2 font-bold rounded-lg transition"
                data-testid="button-contact-us"
                style={{ minWidth: 120 }}
              >
                Contact Us
                </button>
              </Link>
            </div>

            <div className="ml-auto flex lg:hidden">
              <button onClick={toggleMobileMenu} className={`hover:cursor-pointer transition-colors p-2 ${isScrolled ? "text-black" : "text-white"}`} aria-label="Toggle mobile menu">
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 right-0 h-full w-4/5 max-w-xs bg-white shadow-2xl z-50 transform transition-transform duration-300 
    ${isMobile ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between w-full p-4 border-b border-gray-200">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 w-10 object-contain" />
            <span className="text-black-900 ml-4" style={{ fontWeight: 'bold' }}>Kryzenm Software solutions</span>
          </Link>
          <button
            className="text-blue-700 p-2"
            onClick={() => {
              setisMobile(false);
              setOpenDropdown(null);
              document.body.style.overflow = "auto";
            }}
            aria-label="Close mobile menu"
          >
            <X className="w-7 h-7" />
          </button>
        </div>

        <nav className="px-4 py-6 space-y-6 overflow-y-auto h-full">
          {navigationItems.map(({ label, items }) => (
            <div key={label}>
              <button
                className="flex justify-between items-center w-full font-semibold text-blue-700 text-lg mb-2"
                onClick={() => toggleDropdown(label)}
                aria-expanded={openDropdown === label}
              >
                {label}
                <ChevronDown
                  className={`transition-transform duration-300 ${openDropdown === label ? "rotate-180" : ""}`}
                />
              </button>
              {openDropdown === label && (
                <ul className="pl-4 space-y-1 border-l border-blue-200">
                  {items.map(({ label: itemLabel, to }) => (
                    <li key={itemLabel}>
                      <Link
                        to={to}
                        className="block py-1 text-gray-700 hover:text-blue-700"
                        onClick={() => {
                          setisMobile(false);
                          setOpenDropdown(null);
                          document.body.style.overflow = "auto";
                        }}
                      >
                        {itemLabel}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div className="flex items-center justify-between w-full p-4 border-t border-gray-200">
            <button
              className="bg-[#D2497E] mr-4 whitespace-nowrap hover:bg-cyan-600 text-white px-4 py-2 font-bold rounded-lg transition"
              data-testid="button-lets-talk-ai"
              style={{ minWidth: 120 }}
            >
              Let's Talk AI
            </button>
            <Link to="/contact-us">
            <button
              className="bg-cyan-500 hover:bg-cyan-600 text-black py-2 font-bold rounded-lg transition"
              data-testid="button-contact-us"
              style={{ minWidth: 120 }}
            >
              Contact Us
              </button>
            </Link>
          </div>
        </nav>
      </div>

      {isMobile && (
        <div
          className="fixed inset-0 bg-white bg-opacity-50 z-40 lg:hidden"
          onClick={() => {
            setisMobile(false);
            setOpenDropdown(null);
            document.body.style.overflow = "auto";
          }}
        />
      )}
    </div>
  );
}


