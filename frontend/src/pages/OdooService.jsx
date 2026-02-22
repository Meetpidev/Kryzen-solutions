import React from "react";
import { useParams } from "react-router-dom";
import {Clock,LineChart,Target,Handshake, Users, Award, Cog, Warehouse,Settings,CalendarDays,Monitor,ListChecks, GaugeCircle,ShieldCheck,Wifi, Factory, SlidersHorizontal,MapPin, RefreshCcw, Puzzle, CheckCircle, Play,ArrowRight, ArrowUpRight, Link,Zap,TrendingUp,Globe,FileText, Sparkles} from 'lucide-react';
import LogoCarousel from "../components/LogoCarousel";
import { CTASubscribe } from "../components/FeaturedLogos";
import AboutUs from "../components/AboutUs";
import OdooAccounting from "../components/OdooAccounting";
import InvoiceCTA from "../components/InvoiceCTA";
import FeatureCards from "../components/FeatureCards";
import OdooImplement from "../components/OdooImplement";
import OdooFaq from "../components/OdooFaq";
import OdooInventory from "../components/OdooInventory";
import Overview from "../components/OverView";
import Erp from "../components/Erp";
import IndustriesSection from "../components/IndustriesSection";
import FeaturesSection from "../components/FeaturesSection";



const OdooServices = [
  { label: "Odoo Accounting", to: "/odoo-accounting" },
  { label: "Odoo Inventory", to: "/odoo-inventory" },
  { label: "Odoo Manufacturing", to: "/odoo-manufacturing" },
  { label: "Odoo CRM", to: "/odoo-crm" },
];

const CrmFaqs = [
  {
    question: "Is Odoo CRM suitable for my business?",
    answer:
      "No business is too small or big for Odoo CRM, and it will fit just about any business size and budget.",
  },
  {
    question: "What are the top benefits of Odoo CRM?",
    answer:
      "Odoo CRM offers pipeline management, automated lead tracking, AI-powered lead scoring, activity scheduling, seamless integration with other Odoo apps, real-time reporting, and improved team collaboration — helping businesses close deals faster and stay organized.",
  },
  {
    question: "On what factors Odoo CRM Pricing depends?",
    answer:
      "Odoo CRM pricing depends on the number of users, selected apps or modules, hosting type (Odoo Online, Odoo.sh, or On-Premise), customization requirements, third-party integrations, and implementation or support services needed.",
  },
];

const OdooCrm = [
  {
    icon: Puzzle,
    title: "Tightly Integrated with other Odoo Apps",
    description:
      "Odoo CRM module is tightly integrated with Sales, Inventory, and marketing apps. You can easily convert opportunities into quotes, fetch product information right into the quotation, integrate all your online and in-store POS sales, and boost leads acquisition with email marketing apps.",
  },
  {
    icon: LineChart,
    title: "Accurate Forecasts",
    description:
      "Based on a particular campaign, region, conversion duration, or closing date user can generate real-time reports and flow charts to analyze the lead quality, new opportunities, and closed/won opportunities.",
  },
  {
    icon: Zap,
    title: "Automation of routine tasks",
    description:
      "Odoo's CRM automates the lead assignment, lead import, lead scoring, scheduling next action after the call, lead fetching from emails, and alerts on key opportunities allowing salespeople to be more efficient with their sales efforts.",
  },
  {
    icon: Clock,
    title: "Fasten your Sales Cycle",
    description:
      "CRM software lets you schedule activities based on your sales scripts, calls, meetings, mailing, and quotations allowing access to all the information you need on the opportunity to get more done in less time.",
  },
];

const CrmFeatures = [
  { icon: Target, title: "Find more Opportunities" },
  { icon: TrendingUp, title: "Get accurate Forecasts" },
  { icon: Zap, title: "Shorten your Sales cycle" },
  { icon: Handshake, title: "Drive deals to Closure faster" },
  { icon: Users, title: "Real-time customer Collaboration" },
];

const manufacturingFaqs = [
  {
    question: "Which Odoo App should I install for my Manufacturing Business?",
    answer:
      "The apps you should install depend on your specific needs. But if you are majorly into Manufacturing, Odoo MRP suite consisting of Purchase, PLM, Quality, and Maintenance is enough.",
  },
  {
    question: "What if I want to integrate Odoo MRP with my current software?",
    answer:
      "Odoo MRP can be seamlessly integrated with your existing software through APIs, third-party connectors, or custom integrations. Whether you are using accounting tools, CRM systems, or legacy ERP solutions, Odoo’s flexible architecture allows smooth data synchronization and process automation.",
  },
  {
    question: "How to get a demo of Odoo Manufacturing?",
    answer:
      "You can request a personalized demo from an official Odoo Partner or implementation expert. The demo typically includes a walkthrough of manufacturing workflows, MRP planning, quality checks, and maintenance modules tailored to your business requirements.",
  },
]; 

const stats = [
    {
      icon: <Users size={38} />,
      number: "60+",
      label: "Odoo Professionals",
    },
    {
      icon: <Award size={38} />,
      number: "Certified",
      label: "Odoo Consultants",
    },
    {
      icon: <Cog size={38} />,
      number: "500+",
      label: "Odoo Implementations",
    },
    {
      icon: <Warehouse size={38} />,
      number: "15+",
      label: "Industries Served",
    },
  ];

const Manufecturefeatures = [
    {
      icon: <Settings size={22} />,
      title: "Automation",
      desc: "76% of manufacturers use automation to improve their factory floor's productivity to increase growth. Using Odoo for Manufacturing lets you automate procurement, order processing, supply chain, customer service, and production, improving your workflow, manufacturing lead time, and product quality.",
    },
    {
      icon: <CalendarDays size={22} />,
      title: "Real-time Master Planning",
      desc: "Odoo lets you manage production, scheduling, and resource management in one place, offering you real-time visibility to optimize all your critical processes.",
    },
    {
      icon: <Monitor size={22} />,
      title: "Total Shop Floor Control",
      desc: "Whether tracking time, displaying worksheets, integrating quality checks or alerts, manage everything from scheduling to task prioritization from Odoo’s Workcenter Control Panel.",
    },
    {
      icon: <ListChecks size={22} />,
      title: "BOM Management",
      desc: "Odoo MRP ensures that you can easily manage your bill of materials for a variety of products with ease and add layers of detail, making managing complex types of BOMs much easier.",
    },
    {
      icon: <GaugeCircle size={22} />,
      title: "Ensure Equipment Effectiveness",
      desc: "Based on the submitted data, the system calculates the OEE rate for each manufacturing process and displays it in the Work Centers while reporting common issues or causes of low OEE.",
    },
    {
      icon: <ShieldCheck size={22} />,
      title: "Consistent product quality",
      desc: "Odoo offers a user-friendly interface for users to report quality defects from the production floor or a warehouse.",
    },
    {
      icon: <Wifi size={22} />,
      title: "Odoo IoT Integrations",
      desc: "By default, Odoo IoT Box is compatible with USB cameras, webcams, HID devices, printers, weighing scales, and measurement tools for seamless data transmission.",
    },
  ];

 const cardsData = [
    {
      icon: <Factory size={26} />,
      title: "Built for Manufactures",
      description:
        "Manage procurement, plan production and direct discrete manufacturing processes in one, unified platform.",
    },
    {
      icon: <SlidersHorizontal size={26} />,
      title: "Flexible",
      description:
        "No two businesses are the same; Odoo lets you customize and adapt to your exact processes as they change over time.",
    },
    {
      icon: <Globe size={26} />,
      title: "Global",
      description:
        "Odoo’s multi-language and multi-currency capabilities support your processes and supply chain no matter where you operate from.",
    },
  ];


const OdooInventoryFaq = [
  {
    question: "What platforms does Odoo Inventory support?",
    answer: "Windows, Android, and Cloud-Based."
  },
  {
    question: "Is Odoo Inventory a standalone application or a Supply chain management suite?",
    answer: "Odoo Inventory can function as a standalone application, but it is also part of Odoo’s fully integrated supply chain management suite. It seamlessly connects with Sales, Purchase, Manufacturing, and Accounting modules to provide complete operational control."
  },
  {
    question: "What are the advantages of using Odoo for Inventory?",
    answer: "Odoo Inventory offers real-time tracking, multi-location management, automated replenishment, barcode scanning, demand forecasting, and seamless integration with other Odoo apps, helping businesses improve accuracy, reduce stock-outs, and optimize operations."
  },
  {
    question: "How can I get Odoo Inventory Demo?",
    answer: "You can request a demo directly from Odoo’s official website or through an Odoo partner. A demo typically includes a walkthrough of features, use-case discussions, and guidance on how the system fits your business requirements."
  }
];


 const AccountingfaqData = [
    {
      question: "How can Odoo Accounting App help you?",
      answer: (
        <ul className="list-decimal pl-5 space-y-2">
          <li>Creating and sending invoices.</li>
          <li>Forming quotes and estimates.</li>
          <li>Recording expenses.</li>
          <li>Completing tax returns.</li>
          <li>Keeping a check on the cash flow or profit and loss.</li>
          <li>Automating manual data entries.</li>
          <li>Creating budgets and forecasts.</li>
        </ul>
      ),
    },
    {
      question: "Does Odoo Accounting meet US GAAP standards?",
      answer:
        "Yes. Odoo Accounting complies with US GAAP standards and supports accrual accounting, financial reporting, and complete audit trails for transparency.",
    },
    {
      question: "Does Odoo Accounting support multi-currency?",
      answer:
        "Yes. Odoo allows transactions in multiple currencies with automatic exchange rate updates and consolidated financial reporting.",
    },
    {
      question:
        "Which Payment Providers are supported by Odoo Accounting?",
      answer:
        "Odoo integrates with Stripe, PayPal, Razorpay, Authorize.net, and several regional payment gateways along with manual bank payments.",
    },
    {
      question:
        "Can I import/export data to and from Odoo Accounting?",
      answer:
        "Yes. Odoo supports importing and exporting data through CSV/Excel files including customers, vendors, invoices, and journal entries.",
    },
    {
      question:
        "Does Odoo Accounting provide an Asset Management tool?",
      answer:
        "Yes. Odoo includes an Asset Management feature with automated depreciation entries and full asset lifecycle tracking.",
    },
];
  
const serviceContent = {
    "odoo-accounting": (
         <>
    <section id="hero">
      <div className="mt-[4rem] w-full bg-white py-28 flex items-center justify-center">
        <div className="max-w-4xl w-full text-center px-6 animate-fadeIn">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide text-gray-900 animate-slideDown">
            ODOO ACCOUNTING
          </h1>
  
          <div className="mt-6 mb-8 flex justify-center animate-fadeIn delay-150">
            <div className="w-2/3 h-[1px] bg-gray-400"></div>
          </div>
  
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto animate-fadeIn delay-300">
            Move To The Fastest Online Accounting App And Keep Your
            <br className="hidden md:block" /> Books Organized!
          </p>
  
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 animate-fadeIn delay-500">
            <button className="flex items-center gap-4 px-6 py-3 rounded-full border border-gray-400 bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <span className="text-gray-800 font-medium">Video of Odoo Accounting</span>
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-900 text-white">
                <Play size={16} />
              </span>
            </button>
  
            <button className="flex items-center gap-3 px-6 py-3 rounded-full bg-blue-900 text-white font-medium shadow-md hover:bg-blue-800 hover:-translate-y-1 transition-all duration-300">
              <span>Schedule Demo</span>
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-blue-900">
                <ArrowUpRight size={16} />
              </span>
            </button>
          </div>
        </div>
  
        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slideDown {
            from { opacity: 0; transform: translateY(-30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.8s ease forwards;
          }
          .animate-slideDown {
            animation: slideDown 0.8s ease forwards;
          }
          .delay-150 { animation-delay: 0.15s; }
          .delay-300 { animation-delay: 0.3s; }
          .delay-500 { animation-delay: 0.5s; }
        `}</style>
      </div>
    </section>
  
    <LogoCarousel />
    <section className="w-full py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Overview: Odoo Accounting App
            </h2>
            <div className="mt-3 w-20 h-1 bg-red-500"></div>
          </div>
  
          <p className="text-gray-700 text-lg leading-relaxed">
            Manage, Monitor, and Analyze your figures to grow your business
            Odoo didn’t trade intuitiveness for versatility; its accounting
            software covers all the accounting essentials offering ease of use.
          </p>
  
          <p className="text-gray-700 text-lg leading-relaxed">
            The <span className="text-blue-700 font-medium">Odoo Accounting app</span> enables financial efficiency for your business
            providing you access to the most flexible dashboards, reports,
            analytics, high-level overviews, or specific business activity.
          </p>
  
          <p className="text-gray-700 text-lg leading-relaxed">
            Accounting in Odoo supports multi-language, multi-currency, and
            multi-company, so users can easily manage international or
            distributed business units/subsidiaries with real-time knowledge
            and visibility.
          </p>
  
          <p className="text-gray-700 text-lg leading-relaxed">
            Moreover, Odoo’s cloud-based platform enables your staff to access
            everything from anywhere on the go, offering fine-grained controls,
            robust authentication, and encryption.
          </p>
  
          <button className="inline-flex items-center gap-2 mt-4 text-blue-700 font-medium hover:gap-3 transition-all duration-300">
            Learn More <ArrowRight size={18} />
          </button>
        </div>
  
        <div className="relative flex justify-center">
          <div className="w-[420px] h-[420px] bg-white rounded-full shadow-xl flex items-center justify-center">
            <div className="w-80 h-80 bg-gray-200 rounded-2xl shadow-inner"></div>
          </div>
        </div>
      </div>
    </section>
    <OdooAccounting />
    <InvoiceCTA />
  
    <section className="w-full py-24">
      <div className="max-w-7xl mx-auto px-6">
  
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Why Choose Odoo For Accounting?
          </h2>
          <div className="mt-4 w-24 h-1 bg-red-500 mx-auto"></div>
        </div>
  
        <div className="grid md:grid-cols-2 gap-10">
  
          <FeatureCards
            icon={<Link size={22} />}
            title="Fully Integrated with other Odoo App"
            description="Stop recording transactions manually; Odoo Accounting system is fully integrated with Inventory, Sales, Purchases, Projects, and Documents to increase financial efficiency."
          />
  
          <FeatureCards
            icon={<Zap size={22} />}
            title="Get Paid Faster"
            description="With a convenient customer portal, automated follow-ups for payment, multi-currency support, and multiple payment providers, Odoo ensures you get paid in less time."
          />
  
          <FeatureCards
            icon={<TrendingUp size={22} />}
            title="Analyze your figures to grow Your business"
            description="Odoo offers instant, generic, dynamic reports to allow you to manage your financial and legal statements accurately."
          />
  
          <FeatureCards
            icon={<Globe size={22} />}
            title="Fiscal Localization Packages"
            description="Odoo Accounting supports 70+ localization packages, explicitly pre-configured for your country’s charts of accounts, taxes, electronic invoicing, and fiscal positions."
          />
  
          <FeatureCards
            icon={<FileText size={22} />}
            title="Accounting for Fiduciaries"
            description="Odoo integrates the Documents app to deliver information thoroughly and effectively with effortless document management and collaborative dashboards."
          />
  
          <FeatureCards
            icon={<Sparkles size={22} />}
            title="AI-powered Invoice Automation"
            description="Odoo's AI system recognizes document layouts and extracts appropriate data to process vendor bills through advanced OCR and metadata recognition."
          />
  
        </div>
  
      </div>
    </section>
  
    <OdooImplement />
    <section className="w-full bg-white py-20">
      <h1 className="text-3xl font-bold text-center mb-10">FAQ's</h1>
      <OdooFaq data={AccountingfaqData} />
    </section>
  
    <AboutUs />
    <CTASubscribe />
       
  </>
  ),
    "odoo-inventory": (
       <>
             <section id="hero">
                <div className="mt-[4rem] w-full bg-white py-28 flex items-center justify-center">
            <div className="max-w-4xl w-full text-center px-6 animate-fadeIn">
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide text-gray-900 animate-slideDown">
                Odoo Inventory
              </h1>
      
              <div className="mt-6 mb-8 flex justify-center animate-fadeIn delay-150">
                <div className="w-2/3 h-[1px] bg-gray-400"></div>
              </div>
      
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto animate-fadeIn delay-300">
                Manage orders. Track inventory. Oversee warehouses. One
                <br className="hidden md:block" /> Software to run all your Inventory Operations.
              </p>
      
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 animate-fadeIn delay-500">
                <button className="flex items-center gap-4 px-6 py-3 rounded-full border border-gray-400 bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  <span className="text-gray-800 font-medium">Video of Odoo Accounting</span>
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-900 text-white">
                    <Play size={16} />
                  </span>
                </button>
      
                <button className="flex items-center gap-3 px-6 py-3 rounded-full bg-blue-900 text-white font-medium shadow-md hover:bg-blue-800 hover:-translate-y-1 transition-all duration-300">
                  <span>Schedule Demo</span>
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-blue-900">
                    <ArrowUpRight size={16} />
                  </span>
                </button>
              </div>
            </div>
      
            <style>{`
              @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
              }
              @keyframes slideDown {
                from { opacity: 0; transform: translateY(-30px); }
                to { opacity: 1; transform: translateY(0); }
              }
              .animate-fadeIn {
                animation: fadeIn 0.8s ease forwards;
              }
              .animate-slideDown {
                animation: slideDown 0.8s ease forwards;
              }
              .delay-150 { animation-delay: 0.15s; }
              .delay-300 { animation-delay: 0.3s; }
              .delay-500 { animation-delay: 0.5s; }
            `}</style>
          </div> 
            </section>
      
            <LogoCarousel />
             <section className="w-full py-24">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                    Overview: Odoo Inventory App
                  </h2>
                  <div className="mt-3 w-20 h-1 bg-red-500"></div>
                </div>
      
                <p className="text-gray-700 text-lg leading-relaxed">
                 Track, Organize, and Manage everything from purchase to warehouse bin to sales order.
                </p>
      
                <p className="text-gray-700 text-lg leading-relaxed">
                 Odoo Inventory module works as an inventory application and a warehouse management system letting businesses track stock moves, automate replenishments, and configure advanced routes like drop-shipping, cross-docks, etc.
                </p>
      
                <p className="text-gray-700 text-lg leading-relaxed">
                 With Odoo’s most efficient double-entry inventory system that tracks stock moves between locations, warehouse managers can easily control their warehouses.
                </p>
      
                <p className="text-gray-700 text-lg leading-relaxed">
                  Odoo Inventory has fully automated replenishment that fetches your historical sales data to manage the optimum inventory levels effectively, so you don’t have to worry about less stock and stock outs.
                </p>
      
                     <p className="text-gray-700 text-lg leading-relaxed">
                 With cutting-edge automation and advanced routes, Odoo lets you manage Dropshipping, cross-docking, and multi-warehouse transfers.
                  </p>
                     <p className="text-gray-700 text-lg leading-relaxed">
                 With real-time customizable reports, Odoo Inventory keeps all your key information at your fingertips.
                </p>
      
                <button className="inline-flex items-center gap-2 mt-4 text-blue-700 font-medium hover:gap-3 transition-all duration-300">
                  Learn More <ArrowRight size={18} />
                </button>
              </div>
      
              <div className="relative flex justify-center">
                <div className="w-[420px] h-[420px] bg-white rounded-full shadow-xl flex items-center justify-center">
                  <div className="w-80 h-80 bg-gray-200 rounded-2xl shadow-inner"></div>
                </div>
              </div>
            </div>
            </section>
            
            <OdooInventory />
      
          <section className="w-full py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
      
          <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
            
           
            <div>
              <h2 className="text-4xl md:text-4xl font-bold text-gray-900 leading-tight">
                Why Choose Odoo Inventory <br />
                Management Software?
              </h2>
              <div className="mt-4 w-16 h-1 bg-red-500"></div>
            </div>
      
           
            <FeatureCards
              icon={<TrendingUp size={22} />}
              title="Accurate Forecasting"
              description="Countless variables are involved when you want to predict demand for efficient inventory management accurately, but Odoo gets you closer to projecting future sales."
            />
      
          </div>
      
          
          <div className="grid md:grid-cols-2 gap-10">
      
            <FeatureCards
              icon={<MapPin size={22} />}
              title="Multi-location Inventory Management"
              description="Odoo goes beyond the basics of all your inventory management at the location level to ensure you have enough stock everywhere that you sell."
            />
      
            <FeatureCards
              icon={<RefreshCcw size={22} />}
              title="Perpetual Inventory System"
              description="Odoo has a perpetual inventory management system to provide the most accurate data by continuously tracking inventory in real-time."
            />
      
            <FeatureCards
              icon={<FileText size={22} />}
              title="Efficient Stocking Method"
              description="Besides saving you time and complexity, Odoo Inventory’s double-entry inventory method makes tracking your stock moves between locations easier."
            />
      
            <FeatureCards
              icon={<Puzzle size={22} />}
              title="Integrated with other Odoo Apps"
              description="Odoo’s modular structure allows a business to scale as per their need. Integrate your Inventory app with Sales, Purchase, or Accounting based on business needs and manage everything on a single system."
            />
      
          </div>
      
        </div>
      </section>
      
            <OdooImplement />
            <section className="w-full bg-white py-20">
              <h1 className="text-3xl font-bold text-center mb-10">FAQ's</h1>
              <OdooFaq data={OdooInventoryFaq} />
            </section>
      
            <AboutUs />
            <CTASubscribe />
            
            </>
  ),
    "odoo-manufacturing": (
       <>
            <section id="hero">
                <div className="mt-[4rem] w-full bg-white py-28 flex items-center justify-center">
            <div className="max-w-4xl w-full text-center px-6 animate-fadeIn">
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide text-gray-900 animate-slideDown">
                Odoo Manufacturing
              </h1>
      
              <div className="mt-6 mb-8 flex justify-center animate-fadeIn delay-150">
                <div className="w-2/3 h-[1px] bg-gray-400"></div>
              </div>
      
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto animate-fadeIn delay-300">
                One App for all your Production, Engineering,Material
                <br className="hidden md:block" /> Planning, and Scheduling needs.
              </p>
      
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 animate-fadeIn delay-500">
                <button className="flex items-center gap-4 px-6 py-3 rounded-full border border-gray-400 bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  <span className="text-gray-800 font-medium">Video of Odoo Accounting</span>
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-900 text-white">
                    <Play size={16} />
                  </span>
                </button>
      
                <button className="flex items-center gap-3 px-6 py-3 rounded-full bg-blue-900 text-white font-medium shadow-md hover:bg-blue-800 hover:-translate-y-1 transition-all duration-300">
                  <span>Schedule Demo</span>
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-blue-900">
                    <ArrowUpRight size={16} />
                  </span>
                </button>
              </div>
            </div>
      
            <style>{`
              @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
              }
              @keyframes slideDown {
                from { opacity: 0; transform: translateY(-30px); }
                to { opacity: 1; transform: translateY(0); }
              }
              .animate-fadeIn {
                animation: fadeIn 0.8s ease forwards;
              }
              .animate-slideDown {
                animation: slideDown 0.8s ease forwards;
              }
              .delay-150 { animation-delay: 0.15s; }
              .delay-300 { animation-delay: 0.3s; }
              .delay-500 { animation-delay: 0.5s; }
            `}</style>
          </div> 
            </section>
      
            <LogoCarousel />
          <Overview
            title="Overview: Odoo Manufacturing App"
            des1="Odoo offers a modern solution to an old problem; you don’t need to manage your manufacturing operations on 10 different systems or software."
            des2="Odoo Manufacturing offers a complete, out-of-the-box, integrated solution wherein you can manage MRP, PLM, Quality, Maintenance, Inventory, and Purchasing."
            cards={cardsData}
          />
            <Erp />
            <IndustriesSection />
      
             <section className="w-full py-10 px-6">
            <div className="relative max-w-7xl mx-auto bg-[#283C86] rounded-[40px] py-24 px-6 text-center overflow-hidden">
      
             
              <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-white/5 rounded-full"></div>
              <div className="absolute -bottom-24 -left-24 w-[350px] h-[350px] bg-white/5 rounded-full"></div>
      
              <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-white/5 rounded-full"></div>
              <div className="absolute -top-24 -right-24 w-[350px] h-[350px] bg-white/5 rounded-full"></div>
      
             
              <div className="relative z-10">
      
              
                <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
                  MRP + MES + PLM + Quality + Shop Floor + Maintenance
                </h1>
      
                <p className="mt-6 text-white/90 text-2xl md:text-3xl font-medium">
                  Everything You Need On One Platform.
                </p>
      
                
                <div className="mt-10">
                  <button className="group inline-flex items-center gap-4 bg-white text-gray-800 font-medium 
                                     px-8 py-4 rounded-full shadow-md transition hover:shadow-xl">
      
                    Schedule a Demo
      
                    <span className="flex items-center justify-center w-10 h-10 rounded-full 
                                     bg-[#283C86] text-white transition group-hover:rotate-45">
      
                      <ArrowUpRight size={18} />
      
                    </span>
                  </button>
                </div>
      
              </div>
            </div>
            </section>
             
            <FeaturesSection />
      
              <section className="py-20 px-6">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-14">
      
              
              <div>
                <h2 className="text-3xl font-bold text-gray-900 leading-snug">
                  Why Choose Odoo For Manufacturing?
                </h2>
      
                <div className="w-12 h-[3px] bg-red-500 mt-4 mb-6"></div>
      
                <p className="text-gray-600 text-sm leading-relaxed">
                  Odoo Manufacturing App doesn’t just support the production process
                  but also encourages practices such as procurement of new materials
                  and the selling of finished goods, covering all the facets of the
                  production industry. Odoo ERP meets the digital era’s usability
                  standards, giving you powerful and user-friendly software.
                </p>
              </div>
      
      
              <div className="lg:col-span-2 space-y-8">
      
              
                <FeatureCards
                  icon={<Settings size={20} />}
                  title="Automation"
                  description="76% of manufacturers use automation to improve their factory floor's productivity to increase growth. Using Odoo for Manufacturing lets you automate procurement, order processing, supply chain, customer service, and production."
                />
      
                <div className="grid sm:grid-cols-2 gap-8">
                  <FeatureCards
                    icon={<CalendarDays size={20} />}
                    title="Real-time Master Planning"
                    description="Manage production, scheduling, and resources with real-time visibility."
                  />
                  <FeatureCards
                    icon={<Monitor size={20} />}
                    title="Total Shop Floor Control"
                    description="Track time, integrate quality checks, and manage everything from one control panel."
                  />
                </div>
      
               
                <div className="grid sm:grid-cols-2 gap-8">
                  <FeatureCards
                    icon={<ListChecks size={20} />}
                    title="BOM Management"
                    description="Easily manage complex bill of materials with layered detail."
                  />
                  <FeatureCards
                    icon={<GaugeCircle size={20} />}
                    title="Ensure Equipment Effectiveness"
                    description="Track OEE rates and identify manufacturing performance issues."
                  />
                </div>
      
              
                <div className="grid sm:grid-cols-2 gap-8">
                  <FeatureCards
                    icon={<ShieldCheck size={20} />}
                    title="Consistent product quality"
                    description="Report quality defects easily from production or warehouse."
                  />
                  <FeatureCards
                    icon={<Wifi size={20} />}
                    title="Odoo IoT Integrations"
                    description="Connect cameras, printers, scales, and measurement tools seamlessly."
                  />
                </div>
      
              </div>
            </div>
          </section>
      
           <section className="py-20 px-6 text-center">
            <div className="max-w-7xl mx-auto">
      
              <h2 className="text-4xl font-bold text-gray-900 leading-snug">
                Why Choose Aktiv For Odoo Manufacturing Implementation?
              </h2>
      
              <div className="w-16 h-[3px] bg-red-500 mx-auto mt-4 mb-8"></div>
      
              <p className="text-gray-700 max-w-5xl mx-auto leading-relaxed mb-4">
                Owing to subject-matter expertise for every Odoo application, we have catered to many manufacturing industries with Odoo ERP implementation from Construction to Aviation to Automotive and more.
              </p>
      
              <p className="text-gray-700 max-w-5xl mx-auto leading-relaxed">
                As a Certified Odoo Partner, we offer comprehensive configuration, customization, integration, and migration services to meet your business requirements. So be it customizing existing Manufacturing flows or migrating from legacy systems to Odoo Manufacturing, we are up to the challenge.
              </p>
      
      
              <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-12">
      
                {stats.map((item, index) => (
                  <div key={index} className="group">
      
                    <div className="relative w-40 h-40 mx-auto flex items-center justify-center">
      
                    
                      <div className="absolute w-40 h-40 rounded-full bg-red-700 
                                      opacity-0 scale-90 
                                      group-hover:opacity-100 
                                      group-hover:scale-100 
                                      transition-all duration-300">
                      </div>
      
                      <div className="relative z-10 w-40 h-40 rounded-full border-2 border-[#1e3a8a] 
                                      bg-white flex items-center justify-center 
                                      text-[#1e3a8a] 
                                      transition-all duration-300 
                                      group-hover:-translate-y-2">
                        {item.icon}
                      </div>
      
                    </div>
      
                    <h3 className="mt-8 text-3xl font-bold text-[#1e3a8a]">
                      {item.number}
                    </h3>
      
                    <p className="mt-2 text-gray-700">
                      {item.label}
                    </p>
      
                  </div>
                ))}
      
              </div>
      
            </div>
            </section>
            
            <section className="w-full bg-white py-20">
              <h1 className="text-3xl font-bold text-center mb-10">FAQ's</h1>
              <OdooFaq data={manufacturingFaqs} />
            </section>
      
             <AboutUs />
            <CTASubscribe />
          </>
  ),
    "odoo-crm": <>
       <>
            <section id="hero">
                <div className="mt-[4rem] w-full bg-white py-28 flex items-center justify-center">
            <div className="max-w-4xl w-full text-center px-6 animate-fadeIn">
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide text-gray-900 animate-slideDown">
                ODOO CRM
              </h1>
      
              <div className="mt-6 mb-8 flex justify-center animate-fadeIn delay-150">
                <div className="w-2/3 h-[1px] bg-gray-400"></div>
              </div>
      
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto animate-fadeIn delay-300">
                Transform the Sales experience with a fully-featured CRM
                <br className="hidden md:block" /> 
              </p>
      
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 animate-fadeIn delay-500">
                <button className="flex items-center gap-4 px-6 py-3 rounded-full border border-gray-400 bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  <span className="text-gray-800 font-medium">Video of Odoo Crm</span>
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-900 text-white">
                    <Play size={16} />
                  </span>
                </button>
      
                <button className="flex items-center gap-3 px-6 py-3 rounded-full bg-blue-900 text-white font-medium shadow-md hover:bg-blue-800 hover:-translate-y-1 transition-all duration-300">
                  <span>Schedule Demo</span>
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-blue-900">
                    <ArrowUpRight size={16} />
                  </span>
                </button>
              </div>
            </div>
      
            <style>{`
              @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
              }
              @keyframes slideDown {
                from { opacity: 0; transform: translateY(-30px); }
                to { opacity: 1; transform: translateY(0); }
              }
              .animate-fadeIn {
                animation: fadeIn 0.8s ease forwards;
              }
              .animate-slideDown {
                animation: slideDown 0.8s ease forwards;
              }
              .delay-150 { animation-delay: 0.15s; }
              .delay-300 { animation-delay: 0.3s; }
              .delay-500 { animation-delay: 0.5s; }
            `}</style>
          </div> 
            </section>
      
            <LogoCarousel />
              <section className="w-full py-24">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                    Overview: Odoo CRM App
                  </h2>
                  <div className="mt-3 w-20 h-1 bg-red-500"></div>
                </div>
      
                <p className="text-gray-700 text-lg leading-relaxed">
                  Odoo CRM isn’t just handy for maintaining customer relations; it also automates tedious or error-prone sales, marketing, and support tasks. As a result, your staff can focus more on what matters the most—attracting, nurturing, and delighting customers.
                </p>
      
                <p className="text-gray-700 text-lg leading-relaxed">
                 With a few clicks and a unique Kanban visual experience, sales representatives can obtain accurate forecasts of current and future sales and plan sales activities like calls, meetings, and emails.
                </p>
      
                <p className="text-gray-700 text-lg leading-relaxed">
                  The Odoo CRM directly integrates with the Sales module; the interconnectivity and direct interactions enable you to pursue the opportunities based on the lead operations, differentiating it from other CRM software.
                </p>
      
                <p className="text-gray-700 text-lg leading-relaxed">
                  Moreover, Odoo’s cloud-based platform enables your staff to access
                  everything from anywhere on the go, offering fine-grained controls,
                  robust authentication, and encryption.
                </p>
      
                <button className="inline-flex items-center gap-2 mt-4 text-blue-700 font-medium hover:gap-3 transition-all duration-300">
                  Learn More <ArrowRight size={18} />
                </button>
              </div>
      
              <div className="relative flex justify-center">
                <div className="w-[420px] h-[420px] bg-white rounded-full shadow-xl flex items-center justify-center">
                  <div className="w-80 h-80 bg-gray-200 rounded-2xl shadow-inner"></div>
                </div>
              </div>
            </div>
          </section>
      
          <div className="w-fullpy-16 px-6">
            <div className="max-w-7xl mx-auto">
             
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 text-center mb-20">
                {CrmFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      className="flex flex-col items-center space-y-4"
                    >
                      <div className="w-24 h-24 rounded-full border border-blue-600 flex items-center justify-center">
                        <Icon className="w-10 h-10 text-blue-700" />
                      </div>
                      <p className="text-gray-800 text-base font-medium leading-snug max-w-[150px]">
                        {feature.title}
                      </p>
                    </div>
                  );
                })}
              </div>
      
      
              <div className="relative bg-blue-900 text-white rounded-3xl px-8 py-16 md:px-16 overflow-hidden shadow-xl">
             
                <div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-800 rounded-full opacity-40" />
                <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-800 rounded-full opacity-40" />
      
                <div className="relative z-10 text-center space-y-6">
                  <p className="text-lg md:text-xl font-medium tracking-wide">
                    Pipeline At A Glance | AI Lead Scoring | Automated Follow-Ups | Effective Communication
                  </p>
      
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Get A 360° View Of Your Sales
                  </h2>
      
                  <div className="pt-4">
                    <button className="inline-flex items-center gap-3 bg-white text-blue-900 font-medium px-6 py-3 rounded-full shadow-md hover:shadow-lg transition">
                      Schedule a Demo
                      <span className="w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center">
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            </div>
            
             <section className="w-full py-20 px-6">
            <div className="max-w-7xl mx-auto">
      
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-semibold text-gray-800">
                  Why Choose Odoo For CRM?
                </h2>
                <div className="w-16 h-1 bg-red-500 mx-auto mt-4 rounded-full" />
              </div>
      
              <div className="grid md:grid-cols-2 gap-10">
                {OdooCrm.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl border border-blue-700/70 shadow-md hover:shadow-xl transition p-8"
                    >
                      <div className="flex items-start gap-5">
                        <div className="w-14 h-14 rounded-xl bg-blue-900 flex items-center justify-center shrink-0">
                          <Icon className="w-7 h-7 text-white" />
                        </div>
      
                        <div>
                          <h3 className="text-xl font-semibold text-blue-900 mb-3">
                            {feature.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
      
          <section className="py-20 px-6 text-center">
            <div className="max-w-7xl mx-auto">
      
              <h2 className="text-4xl font-bold text-gray-900 leading-snug">
                Why Choose Kryzen For Odoo Crm Implementation?
              </h2>
      
              <div className="w-16 h-[3px] bg-red-500 mx-auto mt-4 mb-8"></div>
      
              <p className="text-gray-700 max-w-5xl mx-auto leading-relaxed mb-4">
                Owing to subject-matter expertise for every Odoo application, we have catered to many manufacturing industries with Odoo ERP implementation from Construction to Aviation to Automotive and more.
              </p>
      
              <p className="text-gray-700 max-w-5xl mx-auto leading-relaxed">
                As a Certified Odoo Partner, we offer comprehensive configuration, customization, integration, and migration services to meet your business requirements. So be it customizing existing Manufacturing flows or migrating from legacy systems to Odoo Manufacturing, we are up to the challenge.
              </p>
      
      
              <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-12">
      
                {stats.map((item, index) => (
                  <div key={index} className="group">
      
                    <div className="relative w-40 h-40 mx-auto flex items-center justify-center">
      
                    
                      <div className="absolute w-40 h-40 rounded-full bg-red-700 
                                      opacity-0 scale-90 
                                      group-hover:opacity-100 
                                      group-hover:scale-100 
                                      transition-all duration-300">
                      </div>
      
                      <div className="relative z-10 w-40 h-40 rounded-full border-2 border-[#1e3a8a] 
                                      bg-white flex items-center justify-center 
                                      text-[#1e3a8a] 
                                      transition-all duration-300 
                                      group-hover:-translate-y-2">
                        {item.icon}
                      </div>
      
                    </div>
      
                    <h3 className="mt-8 text-3xl font-bold text-[#1e3a8a]">
                      {item.number}
                    </h3>
      
                    <p className="mt-2 text-gray-700">
                      {item.label}
                    </p>
      
                  </div>
                ))}
      
              </div>
      
            </div>
            </section>
      
               <section className="w-full bg-white py-20">
              <h1 className="text-3xl font-bold text-center mb-10">FAQ's</h1>
              <OdooFaq data={CrmFaqs} />
            </section>
      
             <AboutUs />
            <CTASubscribe />
           </>
  </>,
};

export default function OdooService() {
  const { service } = useParams(); 


  const toSlug = (text) =>
    (text || "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");


  const serviceEntry =
    OdooServices.find((s) => toSlug(s.label) === toSlug(service)) || null;

  if (!serviceEntry) {
    return (
      <div className="p-10 text-center text-red-600 font-semibold">
        Service not found
      </div>
    );
  }


  const content = serviceContent[toSlug(serviceEntry.label)] || "No content available.";

  return (
    <div className="max-w-full mx-auto">
      
      <p className="text-gray-600 text-lg leading-relaxed">{content}</p>
    </div>
  );
}