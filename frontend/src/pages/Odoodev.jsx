import React from 'react';
import { useState, useEffect } from 'react';
import { CTASubscribe, CTAWorkTogether } from '../components/FeaturedLogos';
import { MessageSquare, Zap, TrendingUp, Layers, Smile, DollarSign, Link2, Code2, Globe, Lightbulb, Factory, Puzzle, Handshake, Store, Warehouse, ArrowRight, Code, Settings, Database, Share2, GraduationCap, LifeBuoy, Server } from "lucide-react";
import LogoCarousel from '../components/LogoCarousel';
import odoo_1 from "../public/odoo1.svg";
import odoo_2 from "../public/odoo_accounting.svg";
import odoo_3 from "../public/odoo_crm.svg";
import odoo_4 from "../public/odoo_sales.svg";
import odoo_5 from "../public/odoo_project.svg";
import odoo_6 from "../public/odoo_inventory.svg";
import odoo_7 from "../public/odoo_manu.svg";
import odoo_8 from "../public/odoo_maintance.svg";
import odoo_9 from "../public/odoo_invoice.svg";

function Odoodev() {
     const words = ["SCALE", "BUILD", "OPTIMIZE"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

    const IconBox = ({ img, label }) => (
  <div
    className="bg-white rounded-2xl h-32 flex flex-col items-center justify-center shadow-sm border-2 transition border-black" 
  >
    <img
      src={img}
      alt={label}
      className="w-14 h-14 object-contain mb-2"
    />
    {label && (
      <span className="text-gray-800 text-sm font-medium">{label}</span>
    )}
  </div>
);

const odooServices = [
  {
    title: "Odoo Consulting",
    description:
      "Identify inefficiencies, bottlenecks, and growth opportunities, creating a tailored roadmap to utilizing Odoo’s potential.",
    icon: <MessageSquare className="w-6 h-6 text-red-700" />,
  },
  {
    title: "Odoo Development",
    description:
      "Tailoring Odoo to your needs by optimizing core code without modification, ensuring software integrity.",
    icon: <Code className="w-6 h-6 text-red-700" />,
  },
  {
    title: "Odoo Customization",
    description:
      "Developing custom Odoo solutions, including objects and workflows, when out-of-the-box features don’t suffice.",
    icon: <Settings className="w-6 h-6 text-red-700" />,
  },
  {
    title: "Odoo Migration",
    description:
      "Hassle-free transition to Odoo, be it migration or upgrade, ensuring accurate data transfer and minimal downtime.",
    icon: <Database className="w-6 h-6 text-red-700" />,
  },
  {
    title: "Odoo Integration",
    description:
      "Integrating Odoo with third-party systems for a unified view and comprehensive insights into your operations.",
    icon: <Share2 className="w-6 h-6 text-red-700" />,
  },
  {
    title: "Odoo Training",
    description:
      "Empowering your team through comprehensive Odoo training, maximizing feature utilization, and instilling confidence.",
    icon: <GraduationCap className="w-6 h-6 text-red-700" />,
  },
  {
    title: "Odoo Support",
    description:
      "Readily available for resolving technical issues, providing guidance, and ensuring continued success with Odoo.",
    icon: <LifeBuoy className="w-6 h-6 text-red-700" />,
  },
  {
    title: "Server Maintenance",
    description:
      "With years of experience we help you diagnose server problems and minimize any impact on your operations.",
    icon: <Server className="w-6 h-6 text-red-700" />,
  },
];

  const odooCards = [
    {
      icon: <Layers className="w-10 h-10 text-red-700" />,
      title: "Modular",
      content:
        "“SMEs use, on average, 16 SaaS applications (<50 employees), or 24 SaaS applications (50–100 employees)”.\n\nWith Odoo you can start small and scale as you grow, adding apps and features necessary to meet your business needs.",
    },
    {
      icon: <Smile className="w-10 h-10 text-red-700" />,
      title: "User Friendly",
      content:
        "Unlike traditional ERPs, Odoo is designed in a way that empowers everyone, from CEOs to interns, to accomplish tasks.",
    },
    {
      icon: <DollarSign className="w-10 h-10 text-red-700" />,
      title: "Affordable",
      content:
        "Unlike the cost of licensing multiple software, Odoo doesn’t come with app-based pricing, feature upselling, long-term contracts, hosting limits, or surprises.\n\nJust a single price per user, including 30+ essential business apps.",
    },
    {
      icon: <Link2 className="w-10 h-10 text-red-700" />,
      title: "Integrated Ecosystem",
      content:
        "An Aberdeen Group study revealed that companies using integrated ERP systems experience a 21% lower total cost of ownership.\n\nUnlike siloed systems, in Odoo everything from sales to inventory, and accounting works together.",
    },
    {
      icon: <Code2 className="w-10 h-10 text-red-700" />,
      title: "Open-Source & Customizable",
      content:
        "A study by Gartner revealed that businesses locked into proprietary software with limited customization scope experience an average 30% price increase over 3 years.\n\nCustomize default Odoo as per your needs, or craft new apps to tailor-fit unique business processes.",
    },
    {
      icon: <Globe className="w-10 h-10 text-red-700" />,
      title: "Global Community",
      content:
        "A massive community and partner network backs you up. Get support and leverage constant innovation from a vast resource pool of official Odoo partners like us.\n\nGain access to a wealth of expertise, smooth implementation, ongoing support, and the ability to leverage the latest advancements in the Odoo ecosystem.",
    },
  ];


  return (
      <>
          <section className="relative w-full min-h-screen flex items-center justify-center bg-[#f7f7f9] overflow-hidden px-6">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]" />
          
                <div className="relative z-10 text-center max-w-4xl">
                  <div className="mb-8">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/5/50/Odoo_logo.svg"
                      alt="Odoo Logo"
                      className="h-10 mx-auto"
                    />
                  </div>
          
                  <div className="absolute top-20 left-[-10rem] rotate-[-8deg] border border-red-500 text-red-600 px-4 py-1 rounded-md text-sm font-medium">
                    Manufacturing
                  </div>
          
                  <div className="absolute top-20 right-[-11rem] rotate-[8deg] border border-blue-500 text-blue-600 px-4 py-1 rounded-md text-sm font-medium">
                    Accounting
                  </div>
          
                  <div className="absolute bottom-28 left-[-10rem] rotate-[6deg] border border-blue-500 text-blue-600 px-4 py-1 rounded-md text-sm font-medium">
                    CRM
                  </div>
          
                  <div className="absolute bottom-28 right-[-11rem] rotate-[-6deg] border border-red-500 text-red-600 px-4 py-1 rounded-md text-sm font-medium">
                    Inventory
                  </div>
        
                  <DollarSign className="absolute left-[-4rem] top-1/2 text-red-600 w-8 h-8" />
                  <Zap className="absolute right-[-7rem] top-1/2 text-red-600 w-8 h-8" />
                  <TrendingUp className="absolute bottom-16 left-[-4rem] text-blue-600 w-8 h-8" />
                  <Settings className="absolute bottom-16 right-[-7rem] text-blue-600 w-8 h-8" />
               
                  <h2 className="text-2xl md:text-3xl text-gray-700 mb-4">
                    We help you
                  </h2>
          
                  <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-red-600 to-blue-900 bg-clip-text text-transparent transition-all duration-500">
                    {words[currentIndex]}
                  </h1>
          
                  <h3 className="text-2xl md:text-3xl text-gray-700 mt-4">
                    your Business with Odoo
                  </h3>
          
                  <div className="mt-10">
                    <button className="px-8 py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-red-600 to-blue-900 hover:opacity-90 transition">
                      Let's Discuss!
                    </button>
                  </div>
                </div>
                </section>
                
            <section className="w-full mt-[7rem] py-16 px-6 lg:px-20">
                <div className="max-w-7xl mx-auto  grid lg:grid-cols-2 gap-12 items-center">
                 
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">
                      ABOUT KRYZEN
                    </p>
          
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-6">
                      A Smooth ERP Implementation.<br />
                      It's Not Fiction, It's Kryzen.
                    </h2>
          
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Many companies fall prey to the "tech-centric" syndrome. They invest
                      heavily in the ERP implementation, only to see it gather dust on the
                      shelf as employees struggle to adapt and utilize it.
                    </p>
          
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Why? Because the blame often lies not with the technology itself, but
                      with the broken implementation process and lack of a “human-centric”
                      approach.
                    </p>
          
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      At Kryzen Software, we aim to “Make Digitalization More Human”.
                    </p>
          
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      We don't just implement ERP, we bridge the gap between technology and
                      your workforce, ensuring smooth adoption, empowered employees, and
                      maximized ROI.
                    </p>
          
                    <p className="font-semibold text-gray-800 mb-2">
                      Ready to experience digital transformation?
                    </p>
          
                    <p className="text-gray-500 mb-6">
                      Let's discuss how we can help you build success, not frustration!
                    </p>
          
                    <button className="bg-gradient-to-r from-red-600 to-indigo-900 text-white px-6 py-3 rounded-md font-semibold shadow-md hover:opacity-90 transition">
                      Get In Touch
                    </button>
                  </div>
          
                  <div className="relative flex justify-center items-center">
                    
                    
                    <img
                      src="https://via.placeholder.com/400x450"
                      alt="Team"
                      className="rounded-xl shadow-xl w-80 md:w-96 relative z-10"
                    />
                
          
                    <div className="absolute top-4 right-10 bg-white shadow-md rounded-lg px-4 py-3 text-center">
                      <p className="text-sm font-semibold text-gray-700">Est. 2022</p>
                    </div>
          
                    <div className="absolute top-24 right-0 bg-white shadow-md rounded-lg px-4 py-3 text-center w-40">
                      <p className="text-sm font-semibold text-gray-700">
                        Top ERP Consultants on Clutch
                      </p>
                    </div>
          
                    <div className="absolute bottom-16 right-0 bg-white shadow-md rounded-lg px-4 py-3 text-center w-44">
                      <p className="text-sm font-semibold text-gray-700">
                        500+ Successful ERP Implementation
                      </p>
                    </div>
          
                    <div className="absolute bottom-4 left-10 bg-white shadow-md rounded-lg px-4 py-3 text-center">
                      <p className="text-sm font-semibold text-gray-700">
                        100+ Team Members
                      </p>
                    </div>
          
                  </div>
                </div>
                </section>
                
                 <LogoCarousel />
          
                <section className="relative w-full  py-20 px-6 lg:px-20 overflow-hidden">
                
               
                <div className="hidden lg:block absolute right-0 top-0 h-full w-[420px] bg-gray-200 rounded-l-full opacity-60"></div>
          
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
                  
                
                  <div className="grid grid-cols-3 gap-8">
          
                 
                    <IconBox 
                      img={odoo_1}
                      label=""
                    />
          
                    <IconBox 
                      img={odoo_2}
                      label=""
                    />
          
                    <IconBox 
                      img={odoo_3}
                      label=""
                    />
          
                 
                    <IconBox 
                      img={odoo_4}
                      label="Accounting"
                    />
          
                    <IconBox 
                      img={odoo_5}
                      label="Invoicing"
                    />
          
                    <IconBox 
                      img={odoo_6}
                      label="Purchase"
                    />
          
                    <IconBox 
                      img={odoo_7}
                      label=""
                    />
          
                    <IconBox 
                      img={odoo_8}
                      label=""
                    />
          
                    <IconBox 
                      img={odoo_9}
                      label=""
                    />
          
                  </div>
                
                  <div>
                    <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-3">
                      WHY ODOO SOFTWARE?
                    </p>
          
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-4">
                      Meet, Odoo,<br />
                      The Open-Source Hero!
                    </h2>
          
                    <p className="text-gray-600 mb-8">
                      Simple, Efficient, yet Affordable.
                    </p>
                   
                    <div className="bg-red-100 border-t-4 border-red-500 rounded-xl shadow-md p-5 mb-6 flex items-center gap-3">
                        <span className="text-red-600 text-xl">🚩</span>
                        <p className="text-gray-700 font-medium">
                        If you're surrounded by these red flags, then only green flag at your rescue is Odoo!
                      </p>
                    </div>
                  
                    <div className="bg-green-100 border-b-4 border-green-500 rounded-xl shadow-md p-5 mb-8 flex items-center gap-3">
                      <span className="text-green-600 text-xl">🚩</span>
                      <p className="text-gray-700 font-medium">
                        If you're surrounded by these red flags, then only green flag at your rescue is Odoo!
                      </p>
                    </div>
          
                    <button className="bg-gradient-to-r from-red-600 to-indigo-900 text-white px-8 py-3 rounded-md font-semibold shadow-md hover:opacity-90 transition">
                      Learn more about Odoo
                    </button>
                  </div>
          
                </div>
              </section>
          
                 <section className="w-full py-24 px-6 lg:px-20">
                <div className="max-w-7xl mx-auto text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0b1533] leading-snug">
                    The Unique Value <br />
                    Proposition of Odoo
                  </h2>
                  <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
                    A family of apps working seamlessly together offering top-notch user
                    experience.
                  </p>
                </div>
          
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {odooCards.map((card, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition duration-300"
                    >
                      <div className="mb-6">{card.icon}</div>
                      <h3 className="text-xl font-semibold text-[#0b1533] mb-4">
                        {card.title}
                      </h3>
                      <p className="text-gray-600 whitespace-pre-line leading-relaxed">
                        {card.content}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
          
                 <section className="w-full  py-16 px-6 lg:px-20">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                  
                  <div>
                    <h2 className="text-2xl md:text-3xl font-semibold leading-snug mb-6">
                      <span className="text-red-700 italic">
                        If Odoo's the Open source Hero,
                      </span>{" "}
                      <span className="text-gray-900 italic">
                        then remember, even heroes needs a trusty sidekick.
                      </span>
                    </h2>
          
                    <p className="text-gray-600 text-lg leading-relaxed">
                      That's where we, Kryzen, your Odoo implementation partner, come in.
                    </p>
                  </div>
          
                  <div className="flex items-start gap-8">
                    <div className="w-1 bg-gradient-to-b from-red-700 to-indigo-900 h-full"></div>
          
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-red-800 mb-4">
                        ODOO + KRYZEN
                      </h3>
          
                      <p className="text-gray-600 text-lg leading-relaxed">
                        With over 10+ years of experience implementing Odoo for SME and Enterprise clients, we know how to assist you in your digital transformation journey. It’s what we do the best!
                      </p>
                    </div>
                  </div>
          
                </div>
              </section>
          
                <section className="w-full py-16 px-6 lg:px-20">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                  
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-8">
                      <span className="text-[#0b1533]">WE HELP YOU </span>
                      <span className="text-red-700">BUILD </span>
                      <span className="text-[#0b1533]">YOUR BUSINESS ON ODOO</span>
                    </h2>
          
                    <ul className="space-y-4 mb-10">
                      {[
                        "Wasting time on repetitive and manual tasks??",
                        "Stuck in spreadsheets or legacy systems?",
                        "Your business is cluttered with multiple systems/software.",
                        "Your existing software systems do not talk to each other.",
                        "Your IT budget couldn't accommodate hefty ERP software and implementation costs."
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-700 text-lg">
                         
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
          
                    <h3 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-8">
                      Ready to Ditch the Spreadsheet & Legacy Drama.
                    </h3>
          
                    <button className="bg-gradient-to-r from-red-700 to-[#0b1533] text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:opacity-90 transition">
                      Request a Free Demo
                    </button>
                  </div>
          
                  <div className="flex justify-center mt-10 lg:mt-0">
                    <img
                      src="https://via.placeholder.com/450x450"
                      alt="Build Optimize Scale"
                      className="w-72 md:w-96 lg:w-[420px] object-contain"
                    />
                  </div>
          
                </div>
              </section>
          
                 <section className="w-full py-16 px-6 lg:px-20">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                  
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-8">
                      <span className="text-[#0b1533]">WE HELP YOU </span>
                      <span className="text-red-700">OPTIMIZE </span>
                      <span className="text-[#0b1533]">YOUR BUSINESS ON ODOO</span>
                    </h2>
          
                    <ul className="space-y-4 mb-10">
                      {[
                        "Your current setup is struggling to manage increased workload",
                        "Want to overcome challenges of diverse regulatory requirements and currencies for global expansion.",
                        "Need to implement additional modules from the Odoo ecosystem to address growing business needs.",
                        "Want to reduce efforts and costs associated with managing multiple fragmented systems and bring everything on single system."
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-700 text-lg">
                          
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
          
                    <h3 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-8">
                      Want to rescue my current Odoo setup from the inefficiencies.
                    </h3>
          
                    <button className="bg-gradient-to-r from-red-700 to-[#0b1533] text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:opacity-90 transition">
                      Connect me with an Expert!
                    </button>
                  </div>
          
                  <div className="flex justify-center mt-10 lg:mt-0">
                    <img
                      src="https://via.placeholder.com/450x450"
                      alt="Build Optimize Scale"
                      className="w-72 md:w-96 lg:w-[420px] object-contain"
                    />
                  </div>
          
                </div>
                </section>
                
                 <section className="w-full py-16 px-6 lg:px-20">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                  
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-8">
                      <span className="text-[#0b1533]">WE HELP YOU </span>
                      <span className="text-red-700">SCALE </span>
                      <span className="text-[#0b1533]">YOUR BUSINESS ON ODOO</span>
                    </h2>
          
                    <ul className="space-y-4 mb-10">
                      {[
                        "You're experiencing inefficiencies like duplicate data entry and manual workflows.",
                        "Youre not fully utilizing the features and functionalities of Odoo.",
                        "Existing customizations are incompatible hindering desired operations.",
                        "Integration with other systems is malfunctioning.",
                        "Users find the current Odoo setup difficult to use, affecting productivity and efficiency."
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-700 text-lg">
                         
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
          
                    <h3 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-8">
                      My Odoo is feeling stuffed. Help me scale it up!
                    </h3>
          
                    <button className="bg-gradient-to-r from-red-700 to-[#0b1533] text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:opacity-90 transition">
                      Schedule Free 2-hour Consultation
                    </button>
                  </div>
          
                  <div className="flex justify-center mt-10 lg:mt-0">
                    <img
                      src="https://via.placeholder.com/450x450"
                      alt="Build Optimize Scale"
                      className="w-72 md:w-96 lg:w-[420px] object-contain"
                    />
                  </div>
          
                </div>
                </section>
                
                 <section className="w-full py-16 px-6 lg:px-20">
                <div className="max-w-7xl mx-auto">
                  <div className="grid lg:grid-cols-2 gap-10 mb-16">
                    <div>
                      <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-3">
                        SERVICES
                      </p>
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
                        End-To-End <br /> Odoo Implementation
                      </h2>
                    </div>
                    <div className="flex items-center">
                      <p className="text-gray-600 text-lg leading-relaxed">
                        Whatever might be the goal; to build, scale, or optimize business
                        operations, we offer end-to-end Odoo Services to meet all your
                        requirements.
                      </p>
                    </div>
                  </div>
          
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {odooServices.map((service, index) => (
                      <div
                        key={index}
                        className="p-8 rounded-2xl shadow-sm hover:shadow-md transition"
                      >
                        <div className="flex justify-between items-start mb-6">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {service.title}
                          </h3>
                          {service.icon}
                        </div>
          
                        <p className="text-gray-600 text-sm leading-relaxed mb-6">
                          {service.description}
                        </p>
          
                        <a
                          href="#"
                          className="text-[#0b1533] font-semibold text-sm flex items-center gap-2 hover:underline"
                        >
                          Know more <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
          
                 <section className="w-full py-20 px-6 lg:px-20">
                <div className="max-w-7xl mx-auto text-center mb-14">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#1f2937]">
                    Who Do We Serve?
                  </h2>
                  <p className="text-gray-500 mt-3 text-lg">
                    Industries we love to cater
                  </p>
                </div>
          
                <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
                  
                  
                  <div className="bg-white rounded-2xl p-10 text-center shadow-sm hover:shadow-md transition">
                    <div className="flex justify-center mb-6">
                      <Settings className="w-10 h-10 text-gray-700" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">
                      <span className="text-red-700">Manufacturing</span>
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Helping manufacturers make the transition to digital businesses
                      without hurting productivity
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-[#0b1533] font-medium hover:gap-3 transition-all"
                    >
                      Know More <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
          
                  <div className="bg-white rounded-2xl p-10 text-center shadow-sm hover:shadow-md transition">
                    <div className="flex justify-center mb-6">
                      <Store className="w-10 h-10 text-gray-700" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">
                      <span className="text-red-700">Online Retail</span>
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Streamline your online retail journey with Odoo's powerful
                      features and our proven implementation methodology.
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-[#0b1533] font-medium hover:gap-3 transition-all"
                    >
                      Know More <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
          
                
                  <div className="bg-white rounded-2xl p-10 text-center shadow-sm hover:shadow-md transition">
                    <div className="flex justify-center mb-6">
                      <Warehouse className="w-10 h-10 text-gray-700" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">
                      <span className="text-red-700">Wholesale & Distribution</span>
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Using Odoo to help B2Bs generate efficiency across all aspects of
                      their operations.
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-[#0b1533] font-medium hover:gap-3 transition-all"
                    >
                      Know More <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
          
                </div>
                </section>
                
                 <section className="relative w-full bg-[#0f1e5a] py-24 px-6 lg:px-20 overflow-hidden">
              
                <div className="absolute -top-40 -right-40 w-[400px] h-[400px] bg-[#2d3f8f] rounded-full opacity-40"></div>
          
                <div className="max-w-7xl mx-auto text-center text-white relative z-10">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Why Kryzen Software?
                  </h2>
                  <p className="text-lg text-gray-200 mb-16">
                    Kryzen as your Trusty Sidekick for Odoo Implementation
                  </p>
          
                  <div className="grid md:grid-cols-4 gap-12">
                    
                    
                    <div className="flex flex-col items-center text-center">
                      <div className="w-32 h-32 flex items-center justify-center rounded-full bg-white shadow-[0_0_40px_rgba(255,255,255,0.4)] mb-6">
                        <Lightbulb className="w-12 h-12 text-red-700" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">10+</h3>
                      <p className="text-gray-200">
                        years in ERP <br /> Implementation
                      </p>
                    </div>
          
                    <div className="flex flex-col items-center text-center">
                      <div className="w-32 h-32 flex items-center justify-center rounded-full bg-white shadow-[0_0_40px_rgba(255,255,255,0.4)] mb-6">
                        <Factory className="w-12 h-12 text-red-700" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">500+</h3>
                      <p className="text-gray-200">
                        Successful Implementation across Industries
                      </p>
                    </div>
          
                    <div className="flex flex-col items-center text-center">
                      <div className="w-32 h-32 flex items-center justify-center rounded-full bg-white shadow-[0_0_40px_rgba(255,255,255,0.4)] mb-6">
                        <Puzzle className="w-12 h-12 text-red-700" />
                      </div>
                      <p className="text-gray-200 max-w-xs">
                        Hands-on expertise in delivering out-of-the-box, custom, and
                        hybrid Odoo solutions
                      </p>
                    </div>
          
                  
                    <div className="flex flex-col items-center text-center">
                      <div className="w-32 h-32 flex items-center justify-center rounded-full bg-white shadow-[0_0_40px_rgba(255,255,255,0.4)] mb-6">
                        <Handshake className="w-12 h-12 text-red-700" />
                      </div>
                      <p className="text-gray-200">
                        Official <br /> Odoo Partner
                      </p>
                    </div>
          
                  </div>
                </div>
                </section>
                
                <CTAWorkTogether />
                <CTASubscribe />
    </>
  )
}

export default Odoodev