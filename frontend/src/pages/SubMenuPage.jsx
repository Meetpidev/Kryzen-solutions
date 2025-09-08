import React from "react";
import { useParams } from "react-router-dom";

const services = [
  {
    label: "Mobile App Development",
    sub: [
      "Watch App Development",
      "Mobile App Development",
      "Cross Platform App Development",
      "IPad App Development Services",
      "Kotlin App Development",
      "Hybrid App Development",
      "Progressive Web App Development",
      "Swift App Development",
      "IBeacon App Development",
      "Wearable App Development",
      "Native App Development",
      "Windows App Development",
      "Custom Mobile App Development",
      "B2B Mobile App Development"
    ]
  },
  { label: "Back End Development", sub: [] },
  { label: "AI & ML Development", sub: [] }
];

export default function SubMenuPage() {
  const { service, subItem } = useParams();

  // Find the service by matching lowercase, dash-to-space normalized labels
  const serviceEntry = services.find(
    s => s.label.toLowerCase().replace(/\s+/g, "-") === service
  );

  // Normalize subItem param to lowercase with dashes replaced to spaces for matching
  const normalizedSubItem = subItem?.toLowerCase().replace(/-/g, " ");

  // Find the sub item exactly from the service sub array (case insensitive)
  const subItemName = serviceEntry?.sub.find(
    sub => sub.toLowerCase() === normalizedSubItem
  );

  if (!serviceEntry) {
    return <div className="p-10 text-center">Service not found</div>;
  }

  if (!subItemName) {
    return <div className="p-10 text-center">Sub-service not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{serviceEntry.label}</h1>
      <h2 className="text-xl mb-6 text-blue-700">{subItemName}</h2>

      <p>
        {/* You can add dynamic description/content for each subItem here */}
        Details and information about <strong>{subItemName}</strong> will be shown here.
      </p>
    </div>
  );
}
