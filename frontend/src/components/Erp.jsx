
import {  ShieldCheck, FileText, Wrench } from "lucide-react";

export default function Erp() {
  const modules = [
    {
      icon: <ShieldCheck size={22} />,
      title: "MRP",
      module: "Module 1 of 4",
      steps: ["Plan", "Manufacture", "Check Quality"],
    },
    {
      icon: <ShieldCheck size={22} />,
      title: "Quality",
      module: "Module 2 of 4",
      steps: ["Alerts", "Analyze Root Cause", "Define Quality Control Panel"],
    },
    {
      icon: <FileText size={22} />,
      title: "PLM",
      module: "Module 3 of 4",
      steps: [
        "Define Engineering Change Order (ECO)",
        "Approve ECO",
        "Manage BOM Versions",
      ],
    },
    {
      icon: <Wrench size={22} />,
      title: "Maintenance",
      module: "Module 4 of 4",
      steps: [
        "Equipment Management",
        "Maintenance Requests",
        "Preventive Maintenance",
      ],
    },
  ];

  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

       
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900">
            A Complete ERP Suite For Manufacturers
          </h2>
          <div className="mt-4 w-16 h-1 bg-red-500 mx-auto"></div>
        </div>

       
        <div className="space-y-16">
          {modules.map((item, index) => (
            <div key={index} className="flex flex-col lg:flex-row gap-10 items-center">

              
              <div className="bg-blue-900 text-white rounded-xl px-8 py-6 w-full lg:w-64 shadow-lg">
                <div className="flex items-center gap-3 mb-2">
                  {item.icon}
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
                <p className="text-sm opacity-80">{item.module}</p>
              </div>

              <div className="flex-1 w-full">

                
                <div className="relative mb-6">
                  <div className="absolute top-4 left-0 right-0 h-[2px] bg-gray-300"></div>

                  <div className="relative flex justify-between">
                    {[1, 2, 3].map((num) => (
                      <div
                        key={num}
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-900 text-white text-sm font-semibold"
                      >
                        {num}
                      </div>
                    ))}
                  </div>
                </div>

               
                <div className="grid md:grid-cols-3 gap-6">
                  {item.steps.map((step, i) => (
                    <div
                      key={i}
                      className="border border-blue-400 text-blue-900 rounded-lg px-6 py-3 text-center text-sm font-medium hover:bg-blue-50 transition"
                    >
                      {step}
                    </div>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}