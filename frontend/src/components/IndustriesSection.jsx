
import { Leaf, Car, Plane, Wrench, Armchair, FlaskConical } from "lucide-react";

export default function IndustriesSection() {
  const industries = [
    { icon: <Leaf size={40} />, title: "Food & Beverages" },
    { icon: <Car size={40} />, title: "Automotive" },
    { icon: <Plane size={40} />, title: "Aviation" },
    { icon: <Wrench size={40} />, title: "Supplies & Equipment" },
    { icon: <Armchair size={40} />, title: "Furniture" },
    { icon: <FlaskConical size={40} />, title: "Pharmaceutical & Laboratory" },
  ];

  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

   
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900">
            Types Of Manufacturing Industries Supported By Odoo
          </h2>
          <div className="mt-4 w-16 h-1 bg-red-500 mx-auto"></div>
        </div>

      
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 text-center">

          {industries.map((item, index) => (
            <div key={index} className="group cursor-pointer">

              <div className="relative w-40 h-40 mx-auto flex items-center justify-center">

               
                <div className="absolute w-40 h-40 rounded-full bg-red-700 opacity-0 scale-90 
                                group-hover:opacity-100 group-hover:scale-100 
                                transition-all duration-300 ease-out">
                </div>

               
                <div className="relative z-10 w-40 h-40 rounded-full border-2 border-blue-900 
                                flex items-center justify-center bg-white 
                                transition-all duration-300 group-hover:-translate-y-2">

                  <div className="text-blue-900">
                    {item.icon}
                  </div>

                </div>

              </div>

             
              <h3 className="mt-6 text-lg font-semibold text-gray-800">
                {item.title}
              </h3>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}