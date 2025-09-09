import { useState, useEffect } from "react";
import L1 from "../public/L1.png";
import L2 from "../public/L2.png";
import L3 from "../public/L3.png";
import L4 from "../public/L4.png";
import L5 from "../public/L5.png";
import L6 from "../public/L6.png";
import L7 from "../public/L7.png";
import L8 from "../public/L8.png";
import L9 from "../public/L9.png";
import L10 from "../public/L10.png";
import L11 from "../public/L11.png";
import L12 from "../public/L12.png";

const logos = [L1, L2, L3, L4, L5, L6, L7, L8, L9, L10, L11, L12];

function Brands() {

  const [startIndex, setStartIndex] = useState(0);
  const logosPerPage = 4;


  const prev = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? logos.length - logosPerPage : prevIndex - logosPerPage
    );
  };

  const next = () => {
    setStartIndex((prevIndex) =>
      prevIndex + logosPerPage >= logos.length ? 0 : prevIndex + logosPerPage
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 4000);
    return () => clearInterval(interval);
  }, []);


  const currentLogos = logos.slice(startIndex, startIndex + logosPerPage);


  if (currentLogos.length < logosPerPage) {
    currentLogos.push(
      ...logos.slice(0, logosPerPage - currentLogos.length)
    );
  }

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          Trusted By The World’s Leading Brands
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          We are glad to be a digital technology and innovation partner with world’s leading brands.
          Building greater futures through innovation and collective knowledge.
        </p>


        <div className="hidden md:grid md:grid-cols-6 gap-6">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl flex items-center justify-center p-6 hover:shadow-lg transition"
            >
              <img src={logo} alt="brand logo" className="max-h-25 object-contain" />
            </div>
          ))}
        </div>


        <div className="md:hidden">
          <div className="grid grid-cols-2 grid-rows-2 gap-6 mb-6">
            {currentLogos.map((logo, index) => (
              <div
                key={`${startIndex}-${index}`}
                className="bg-white shadow-md rounded-xl flex items-center justify-center p-6 hover:shadow-lg transition"
              >
                <img src={logo} alt="brand logo" className="max-h-12 object-contain" />
              </div>
            ))}
          </div>


          <div className="flex justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous logos"
              className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition"
            >

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={next}
              aria-label="Next logos"
              className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition"
            >

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Brands;
