import { useState, useEffect, useRef } from "react";
export default function Benefits({benifits, sectionTitle, sectionDescription}) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    startAutoAdvance();
    return () => stopAutoAdvance();
  }, []);

  const startAutoAdvance = () => {
    stopAutoAdvance(); // Clear existing timer if any
    intervalRef.current = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % benifits.length);
    }, 5000);
  };

  const stopAutoAdvance = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const goPrev = () => {
    stopAutoAdvance();
    setCurrentIdx((prev) => (prev === 0 ? benifits.length - 1 : prev - 1));
    startAutoAdvance();
  };

  const goNext = () => {
    stopAutoAdvance();
    setCurrentIdx((prev) => (prev + 1) % benifits.length);
    startAutoAdvance();
  };

  
  return (
    <section className="bg-white py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-black">
          {sectionTitle}
        </h2>
        <p className="text-center text-gray-700 mb-8 text-lg">
          {sectionDescription}
        </p>

       
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {benifits?.map((item) => (
            <Card key={item.title} title={item.title} description={item.description} />
          ))}
        </div>

        {benifits && benifits.length > 0 && (
          <div className="lg:hidden flex flex-col items-center">
          <Card title={benifits[currentIdx].title} description={benifits[currentIdx].description} />
          
          <div className="mt-6 flex space-x-6">
            <button
              onClick={goPrev}
              className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 focus:outline-none"
              aria-label="Previous benefit"
            >
              &#8592;
            </button>
            <button
              onClick={goNext}
              className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 focus:outline-none"
              aria-label="Next benefit"
            >
              &#8594;
            </button>
          </div>
        </div>
        )}
        
        
      </div>
    </section>
  );
}

function Card({ title, description }) {
  return (
    <div className="bg-white rounded-xl shadow p-7 flex flex-col max-w-md mx-auto">
      <div className="mb-5 flex items-center justify-start">
        <span className="text-lg font-semibold text-blue-500">icon</span>
      </div>
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="text-gray-600 text-base">{description}</p>
    </div>
  );
}
