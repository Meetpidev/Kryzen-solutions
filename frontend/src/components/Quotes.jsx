const Quotes = ({
  title,
  highlightedText,
  paragraphs,
  emphasizeTextIndex = [],
  emphasizePhrases = [],
}) => {
  return (
    <section className="bg-white py-10 px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10">{title}</h2>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-start">
        <div className="md:w-1/3 w-full bg-blue-50 rounded-lg p-8 flex items-center justify-center min-h-[300px]">
          <div className="h-[22rem]">
            <span className="text-5xl text-blue-700 font-bold">“</span>
            <p className="text-2xl font-semibold text-blue-700 leading-tight">{highlightedText}</p>
          </div>
        </div>

        <div className="md:w-2/3 w-full text-gray-700">
          {paragraphs.map((para, idx) => {
            if (emphasizeTextIndex.includes(idx)) {
              const phrase = emphasizePhrases[idx];
              if (phrase && para.includes(phrase)) {
                const parts = para.split(phrase);
                return (
                  <p key={idx} className="mb-4">
                    {parts[0]}
                    <span className="font-semibold text-blue-700">{phrase}</span>
                    {parts[1]}
                  </p>
                );
              }
              return (
                <p key={idx} className="mb-4">
                  {para}
                </p>
              );
            } else {
              return (
                <p key={idx} className={idx === paragraphs.length - 1 ? "" : "mb-4"}>
                  {para}
                </p>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default Quotes;
