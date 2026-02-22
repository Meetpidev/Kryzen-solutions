import { useState } from "react";
import FeaturesSidebar from "./FeaturesSidebar";
import FeatureContent from "./FeatureContent";

export default function FeaturesSection() {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      title: "Manage Manufacturing Orders",
      points: [
        "Manage products into assembly lines or manual assembly",
        "Use barcodes to scan lot/serial numbers and trigger maintenance",
        "Disassemble finished products and recover components",
      ],
      image: "/images/feature1.png",
    },
    {
      title: "Schedule and Plan Manufacturing",
      points: [
        "Automated production planning",
        "Smart scheduling tools",
        "Capacity management system",
      ],
      image: "/images/feature2.png",
    },
    {
      title: "Flexible Master Data",
      points: [
        "Custom BOM creation",
        "Version control",
        "Product lifecycle tracking",
      ],
      image: "/images/feature3.png",
    },
    {
      title: "PLM",
      points: ["ECO management", "Approval workflows", "Document control"],
      image: "/images/feature4.png",
    },
    {
      title: "Quality",
      points: ["Quality checks", "Root cause analysis", "Control panels"],
      image: "/images/feature5.png",
    },
    {
      title: "Maintenance",
      points: ["Preventive maintenance", "Equipment tracking", "Repair logs"],
      image: "/images/feature6.png",
    },
    {
      title: "Workcenter Control Panel",
      points: ["Live shop floor view", "Operator interface", "Time tracking"],
      image: "/images/feature7.png",
    },
    {
      title: "Reporting",
      points: ["Custom dashboards", "KPI tracking", "Export reports"],
      image: "/images/feature8.png",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          Odoo Manufacturing Features
        </h2>

        <div className="grid lg:grid-cols-3 gap-10">

          <FeaturesSidebar
            features={features}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

      <FeatureContent
  feature={features[activeTab]}
  activeTab={activeTab}
  total={features.length}
  setActiveTab={setActiveTab}
/>

        </div>
      </div>
    </section>
  );
}