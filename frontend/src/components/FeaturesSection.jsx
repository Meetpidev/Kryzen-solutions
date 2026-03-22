import { useState } from "react";
import FeaturesSidebar from "./FeaturesSidebar";
import FeatureContent from "./FeatureContent";
import OdooCrmFeature from "../public/odoo-crm-features.jpg";
import OdooPlan from "../public/Flexible-Master-Data.png";
import OdooMaintance from "../public/Maintenance.png";
import OdooQuality from "../public/Quality.png";
import OdooPlm from "../public/PLM.png";
import OdooReport from "../public/Reporting.png";
import OdooControl from "../public/Workcenter-Control-Panel.png";

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
      image: OdooCrmFeature,
    },
    {
      title: "Schedule and Plan Manufacturing",
      points: [
        "Automated production planning",
        "Smart scheduling tools",
        "Capacity management system",
      ],
      image: OdooPlan,
    },
    {
      title: "Flexible Master Data",
      points: [
        "Custom BOM creation",
        "Version control",
        "Product lifecycle tracking",
      ],
      image: OdooPlan,
    },
    {
      title: "PLM",
      points: ["ECO management", "Approval workflows", "Document control"],
      image: OdooPlm,
    },
    {
      title: "Quality",
      points: ["Quality checks", "Root cause analysis", "Control panels"],
      image: OdooQuality,
    },
    {
      title: "Maintenance",
      points: ["Preventive maintenance", "Equipment tracking", "Repair logs"],
      image: OdooMaintance,
    },
    {
      title: "Workcenter Control Panel",
      points: ["Live shop floor view", "Operator interface", "Time tracking"],
      image: OdooControl,
    },
    {
      title: "Reporting",
      points: ["Custom dashboards", "KPI tracking", "Export reports"],
      image: OdooReport,
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