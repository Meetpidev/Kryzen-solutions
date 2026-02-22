
export default function Overview({ title, des1, des2, cards }) {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <div className="animate-fadeUp">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            {title}
          </h2>

          <div className="mt-4 w-20 h-1 bg-red-500 mx-auto"></div>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {des1}
          </p>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {des2}
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10 mt-16">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white border border-blue-300 rounded-2xl shadow-md p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl animate-fadeUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-blue-800 text-white mb-6">
                {card.icon}
              </div>

              <h3 className="text-xl font-semibold text-blue-900 mb-4">
                {card.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}