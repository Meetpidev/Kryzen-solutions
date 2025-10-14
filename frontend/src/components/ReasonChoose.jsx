
const ReasonChoose = ({title,des,benifits}) => {
  return (
    <section className="bg-[#0B4E78] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">
          {title}
        </h2>
        <p className="text-base leading-relaxed max-w-4xl mx-auto">
                  {des}
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {benifits.map((item, index) => (
           <div key={index} className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2 text-black">{item.title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
    </div>
        ))}
      </div>
    </section>
  );
};

export default ReasonChoose;
