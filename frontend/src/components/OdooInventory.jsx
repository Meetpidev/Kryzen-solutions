import { useState } from "react";
import {
  Boxes,
  ClipboardList,
  Monitor,
  Trash2,
  Warehouse,
  ScanLine,
  Settings,
  BarChart3,
} from "lucide-react";

export default function OdooInventory() {
  const tabs = [
    {
      label: "Core Operations",
      items: [
        {
          icon: <Boxes size={20} />,
          title: "Double Entry Inventory",
          desc: "Track stock movement with full traceability from supplier to customer using Odoo's double-entry system.",
        },
        {
          icon: <ClipboardList size={20} />,
          title: "Inventory Adjustments",
          desc: "Easily perform stock corrections and maintain accurate inventory levels.",
        },
        {
          icon: <Monitor size={20} />,
          title: "Modern User Interface",
          desc: "User-friendly dashboard for quick navigation and real-time stock visibility.",
        },
        {
          icon: <Trash2 size={20} />,
          title: "Scrap Products",
          desc: "Manage damaged or expired products efficiently with proper stock updates.",
        },
      ],
    },
    {
      label: "Warehouse Management",
      items: [
        {
          icon: <Warehouse size={20} />,
          title: "Multi-Warehouse Support",
          desc: "Manage multiple warehouses with internal transfers and route management.",
        },
        {
          icon: <Boxes size={20} />,
          title: "Putaway Rules",
          desc: "Automatically assign storage locations based on predefined rules.",
        },
        {
          icon: <ClipboardList size={20} />,
          title: "Batch Picking",
          desc: "Process multiple orders simultaneously to increase warehouse efficiency.",
        },
        {
          icon: <Settings size={20} />,
          title: "Reordering Rules",
          desc: "Automate stock replenishment based on minimum stock levels.",
        },
      ],
    },
    {
      label: "Tracking & Traceability",
      items: [
        {
          icon: <ScanLine size={20} />,
          title: "Barcode Scanning",
          desc: "Use barcode scanners for faster and error-free stock operations.",
        },
        {
          icon: <Boxes size={20} />,
          title: "Lot & Serial Numbers",
          desc: "Track products using lot and serial numbers for complete traceability.",
        },
        {
          icon: <ClipboardList size={20} />,
          title: "Product Expiry Tracking",
          desc: "Monitor expiry dates and manage perishable goods effectively.",
        },
        {
          icon: <Settings size={20} />,
          title: "Traceability Reports",
          desc: "Generate detailed traceability reports for compliance and audits.",
        },
      ],
    },
    {
      label: "Automation & Planning",
      items: [
        {
          icon: <Settings size={20} />,
          title: "Automated Replenishment",
          desc: "Automatically create RFQs or manufacturing orders when stock runs low.",
        },
        {
          icon: <ClipboardList size={20} />,
          title: "Demand Forecasting",
          desc: "Plan procurement based on sales history and predicted demand.",
        },
        {
          icon: <Boxes size={20} />,
          title: "Dropshipping",
          desc: "Ship products directly from vendor to customer without stocking.",
        },
        {
          icon: <Warehouse size={20} />,
          title: "Cross Docking",
          desc: "Move goods directly from receiving to shipping with minimal storage time.",
        },
      ],
    },
    {
      label: "Analytics & Insights",
      items: [
        {
          icon: <BarChart3 size={20} />,
          title: "Inventory Valuation",
          desc: "Track real-time stock valuation using FIFO, LIFO, or AVCO methods.",
        },
        {
          icon: <ClipboardList size={20} />,
          title: "Stock Aging Analysis",
          desc: "Identify slow-moving or dead stock with aging reports.",
        },
        {
          icon: <Boxes size={20} />,
          title: "Performance Metrics",
          desc: "Monitor warehouse productivity and operational efficiency.",
        },
        {
          icon: <BarChart3 size={20} />,
          title: "Custom Reports",
          desc: "Generate tailored inventory reports for better decision-making.",
        },
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState(0);
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <section className="w-full py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Odoo Inventory Core Features
          </h2>
          <div className="mt-4 w-24 h-1 bg-red-500 mx-auto"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveTab(index);
                setActiveCard(null);
              }}
              className={`px-6 py-3 rounded-full border transition-all duration-300 text-sm md:text-base font-medium ${
                activeTab === index
                  ? "bg-indigo-900 text-white border-indigo-900 shadow-md"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="rounded-3xl p-10 border border-indigo-200 shadow-lg">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tabs[activeTab].items.map((item, index) => {
              const isActive = activeCard === index;

              return (
                <div
                  key={index}
                  onClick={() => handleCardClick(index)}
                  className={`cursor-pointer rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
                    isActive
                      ? "bg-indigo-900 text-white border-indigo-900 shadow-lg"
                      : "bg-white border-indigo-200"
                  }`}
                >
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-lg mb-4 ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-indigo-100 text-indigo-900"
                    }`}
                  >
                    {item.icon}
                  </div>

                  <h3 className="font-semibold text-lg mb-2">
                    {item.title}
                  </h3>

                  {isActive && (
                    <p className="text-sm leading-relaxed mt-2 text-white/80">
                      {item.desc}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}