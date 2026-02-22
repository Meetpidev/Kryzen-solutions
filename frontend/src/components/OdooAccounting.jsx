import { useState } from "react";
import {
  FileText,
  Bell,
  RefreshCcw,
  CreditCard,
  BarChart3,
  Settings,
  Plug,
  QrCode,
  AlertCircle,
} from "lucide-react";

export default function OdooAccounting() {
  const tabs = [
    {
      label: "Automation & AI",
      items: [
        { icon: <FileText size={20} />, title: "AI-powered Invoice Digitization", desc: "Upload scanned PDFs or images and let OCR + AI automatically extract invoice data instantly." },
        { icon: <Bell size={20} />, title: "Automated Payment Follow-ups", desc: "Automatically send reminders for due and overdue invoices." },
        { icon: <RefreshCcw size={20} />, title: "Smart Reconciliation Tool", desc: "Quickly match bank transactions with accounting entries." },
        { icon: <FileText size={20} />, title: "Reduce Data Entry", desc: "Minimize manual accounting work using automation." },
        { icon: <QrCode size={20} />, title: "QR Codes", desc: "Generate QR codes to enable faster payments." },
        { icon: <AlertCircle size={20} />, title: "Renewal Alerts", desc: "Get notified before contracts and subscriptions expire." },
      ],
    },
    {
      label: "Payments & Banking",
      items: [
        { icon: <CreditCard size={20} />, title: "Online Payment Gateways", desc: "Accept payments via Stripe, Razorpay, and more." },
        { icon: <RefreshCcw size={20} />, title: "Bank Synchronization", desc: "Securely sync your bank accounts in real-time." },
        { icon: <Bell size={20} />, title: "Auto Bank Reconciliation", desc: "Automated suggestions for matching transactions." },
        { icon: <FileText size={20} />, title: "Customer Statements", desc: "Generate detailed account statements instantly." },
        { icon: <QrCode size={20} />, title: "Batch Payments", desc: "Process multiple vendor payments at once." },
        { icon: <AlertCircle size={20} />, title: "Payment Reminders", desc: "Schedule automatic reminders for customers." },
      ],
    },
    {
      label: "Reports & Analytics",
      items: [
        { icon: <BarChart3 size={20} />, title: "Dynamic Financial Reports", desc: "Real-time Profit & Loss, Balance Sheet and Cash Flow reports." },
        { icon: <BarChart3 size={20} />, title: "Custom KPI Dashboards", desc: "Visualize key business metrics in one place." },
        { icon: <FileText size={20} />, title: "Tax Reports", desc: "Generate accurate tax summaries and filings." },
        { icon: <RefreshCcw size={20} />, title: "Forecasting Tools", desc: "Predict future cash flow and revenue trends." },
        { icon: <Bell size={20} />, title: "Budget Tracking", desc: "Track and control budgets efficiently." },
        { icon: <AlertCircle size={20} />, title: "Audit Trail", desc: "Maintain full transparency with detailed logs." },
      ],
    },
    {
      label: "Operations & Management",
      items: [
        { icon: <Settings size={20} />, title: "Multi-company Management", desc: "Manage multiple companies with consolidated reporting." },
        { icon: <RefreshCcw size={20} />, title: "Multi-currency Support", desc: "Handle global transactions with automatic currency conversion." },
        { icon: <FileText size={20} />, title: "Vendor Bill Management", desc: "Track and manage vendor invoices easily." },
        { icon: <Bell size={20} />, title: "Expense Tracking", desc: "Monitor employee and operational expenses." },
        { icon: <QrCode size={20} />, title: "Asset Management", desc: "Track depreciation and asset lifecycle." },
        { icon: <AlertCircle size={20} />, title: "Approval Workflows", desc: "Set up multi-level approval processes." },
      ],
    },
    {
      label: "Integration & Features",
      items: [
        { icon: <Plug size={20} />, title: "Third-party Integrations", desc: "Integrate CRM, Inventory, eCommerce and more." },
        { icon: <RefreshCcw size={20} />, title: "API Access", desc: "Use REST APIs to extend functionality." },
        { icon: <FileText size={20} />, title: "Cloud Access", desc: "Access your accounting data from anywhere." },
        { icon: <Bell size={20} />, title: "Mobile App", desc: "Manage finances on the go with mobile support." },
        { icon: <QrCode size={20} />, title: "Data Import/Export", desc: "Easily migrate or backup your data." },
        { icon: <AlertCircle size={20} />, title: "Security & Encryption", desc: "Enterprise-grade data protection and authentication." },
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
            Odoo Accounting Core Features
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
          <div className="grid md:grid-cols-3 gap-8">
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

                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>

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
