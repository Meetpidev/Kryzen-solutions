import {
  Users,
  Award,
  Settings,
  Building2,
} from "lucide-react";

export default function OdooImplement() {
  const stats = [
    {
      icon: <Users size={36} />,
      number: "60+",
      title: "Odoo Professionals",
    },
    {
      icon: <Award size={36} />,
      number: "Certified",
      title: "Odoo Consultants",
    },
    {
      icon: <Settings size={36} />,
      number: "500+",
      title: "Odoo Implementations",
    },
    {
      icon: <Building2 size={36} />,
      number: "15+",
      title: "Industries Served",
    },
  ];

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          How Will Aktiv Help You With Odoo Accounting Implementation?
        </h2>

        <div className="mt-4 w-24 h-1 bg-red-500 mx-auto"></div>

        <p className="mt-8 text-gray-600 max-w-4xl mx-auto leading-relaxed">
          We have helped customers like you in Odoo Accounting ERP software
          implementation to manage daily accounting activities with proper
          configuration across the system.
        </p>

        <p className="mt-4 text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Be it managing Chart of Accounts, Journals, Assets, Taxes, Fiscal
          Position, Fiscal Year, Bank & Payment Configuration, Report
          Configuration, or any customizations — we manage it all for your
          business on Odoo.
        </p>

        <p className="mt-6 font-semibold text-gray-800">
          Contact our Certified Odoo Consultants to talk about your Accounting needs.
        </p>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-10">

          {stats.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center group transition-all duration-300"
            >
              <div className="w-32 h-32 flex items-center justify-center rounded-full border-2 border-indigo-900 text-indigo-900 transition-all duration-300 group-hover:bg-indigo-900 group-hover:text-white">
                {item.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-indigo-900">
                {item.number}
              </h3>

              <p className="mt-2 text-gray-600 text-sm">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}