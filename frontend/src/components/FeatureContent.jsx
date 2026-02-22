
import { Check } from "lucide-react";

export default function FeatureContent({
  feature,
  activeTab,
  total,
  setActiveTab,
}) {

  const handlePrevious = () => {
    if (activeTab > 0) {
      setActiveTab(activeTab - 1);
    }
  };

  const handleNext = () => {
    if (activeTab < total - 1) {
      setActiveTab(activeTab + 1);
    }
  };

  return (
    <div className="lg:col-span-2 bg-white rounded-2xl border border-[#283C86] p-10 shadow-lg">

      <span className="inline-block bg-[#283C86] text-white text-sm px-4 py-1 rounded-full mb-6">
        Feature {activeTab + 1} of {total}
      </span>

      <h3 className="text-2xl font-bold mb-6">
        {feature.title}
      </h3>

      <ul className="space-y-4 mb-8">
        {feature.points.map((point, i) => (
          <li key={i} className="flex items-start gap-3">
            <Check className="text-green-500 mt-1" size={18} />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <div className="rounded-xl overflow-hidden shadow-md mb-8">
        <img src={feature.image} alt={feature.title} />
      </div>

      
      <div className="flex justify-between items-center border-t pt-6">

        <button
          onClick={handlePrevious}
          disabled={activeTab === 0}
          className={`px-5 py-2 border rounded-lg transition
            ${activeTab === 0
              ? "opacity-40 cursor-not-allowed"
              : "hover:bg-gray-100"
            }`}
        >
          Previous
        </button>

        <span className="text-sm text-gray-500">
          {activeTab + 1}/{total}
        </span>

        <button
          onClick={handleNext}
          disabled={activeTab === total - 1}
          className={`px-5 py-2 rounded-lg text-white transition
            ${activeTab === total - 1
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#283C86] hover:opacity-90"
            }`}
        >
          Next
        </button>

      </div>

    </div>
  );
}