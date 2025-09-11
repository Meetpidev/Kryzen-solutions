
function TechnologyStack({ data = [] }) {
  return (
    <section className="py-10 px-3 md:px-12">
      <h1 className="text-4xl font-bold mb-3 text-center">Technology Stack</h1>
      <p className="text-center text-lg text-gray-600 mb-8">
        We use the latest Smart contracts development technology and process to make sure we deliver the best. <br />
        Have a look at our technology stack:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.map((block) => (
          <div key={block.title} className="bg-blue-50 rounded-lg p-7 flex flex-col items-start shadow">
            <div className="flex items-center mb-3">
              {block.icon && <block.icon className="w-7 h-7 text-blue-400 mr-2" />}
              <span className="text-xl font-bold">{block.title}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-1 pl-2 mt-2">
              {block.items.map((itm, idx) => (
                <span key={idx} className="text-gray-700">- {itm}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechnologyStack;
