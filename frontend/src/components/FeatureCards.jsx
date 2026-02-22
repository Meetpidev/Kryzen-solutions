export default function FeatureCards({ icon, title, description }) {
  return (
    <div className="border border-indigo-200 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-900 text-white">
          {icon}
        </div>

        <div>
          <h3 className="text-xl font-semibold text-indigo-900 mb-3">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed text-sm">
            {description}
          </p>
        </div>
      </div>

    </div>
  );
}