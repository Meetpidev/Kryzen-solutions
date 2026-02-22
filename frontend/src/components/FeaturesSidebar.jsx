
export default function FeaturesSidebar({ features, activeTab, setActiveTab }) {
  return (
    <div className="space-y-4">

      {features.map((item, index) => (
        <button
          key={index}
          onClick={() => setActiveTab(index)}
          className={`relative w-full flex items-center gap-4 px-6 py-4 rounded-xl border transition-all duration-300
          ${
            activeTab === index
              ? "bg-[#283C86] text-white shadow-lg"
              : "bg-white text-gray-800 hover:border-[#283C86]"
          }`}
        >
          <span
            className={`w-8 h-8 flex items-center justify-center rounded-md font-semibold
            ${
              activeTab === index
                ? "bg-white text-[#283C86]"
                : "bg-[#283C86] text-white"
            }`}
          >
            {index + 1}
          </span>

          <span className="text-sm font-medium text-left">
            {item.title}
          </span>

         
          {activeTab === index && (
            <div className="absolute -right-3 w-6 h-6 bg-[#283C86] rotate-45"></div>
          )}
        </button>
      ))}

    </div>
  );
}