import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function OdooFaq({ data }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto px-6">
      {data.map((item, index) => {
        const isOpen = index === activeIndex;

        return (
          <div
            key={index}
            className="mb-6 border border-indigo-200 rounded-xl overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className={`w-full flex justify-between items-center px-6 py-5 text-left font-semibold text-lg transition-all duration-300 ${
                isOpen
                  ? "bg-indigo-900 text-white"
                  : "bg-gray-50 text-gray-900"
              }`}
            >
              {item.question}
              {isOpen ? <Minus size={20} /> : <Plus size={20} />}
            </button>

            <div
              className={`transition-all duration-300 overflow-hidden ${
                isOpen ? "max-h-96 p-6 bg-indigo-900 text-white" : "max-h-0"
              }`}
            >
              {isOpen && (
                <div className="text-sm leading-relaxed">
                  {item.answer}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}