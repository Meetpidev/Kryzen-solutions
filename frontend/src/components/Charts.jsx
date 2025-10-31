const Charts = ({ img, img2, h1, p1, h2, p2 }) => {
  
  if (!img && !img2 && !h1 && !p1 && !h2) {
    return null;
  }

  return (
    <section className="py-10 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-12">

        {/* First Block */}
        {(img || h1 || p1) && (
          <div className="flex flex-col md:flex-row md:space-x-8 mb-12">
            {img && (
              <div className="flex-1 rounded-lg bg-white p-6 flex justify-center items-center mb-6 md:mb-0">
                <img
                  src={img}
                  alt="Mobile Application Market Size"
                  className="w-full max-w-sm object-contain"
                />
              </div>
            )}

            {(h1 || p1) && (
              <div className="flex-1 rounded-lg bg-white p-6 flex flex-col justify-between">
                {h1 && <h3 className="text-2xl font-bold mb-4 text-center md:text-left">{h1}</h3>}
                {p1 && (
                  <p className="text-gray-700 mb-6 text-center md:text-left">
                    {p1} <strong>USD 250.75 billion</strong> in 2023 and is projected to grow at a CAGR of 15% from 2024 to 2030.
                  </p>
                )}
                <a
                  href="#contact"
                  className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-lg transition self-center md:self-start"
                >
                  Connect With An Expert &rarr;
                </a>
              </div>
            )}
          </div>
        )}

        {/* Second Block */}
        {(img2 || h2) && (
          <div className="flex flex-col md:flex-row md:space-x-8">
            {h2 && (
              <div className="flex-1 rounded-lg bg-white p-6 mb-6 md:mb-0">
                <h2 className="text-2xl font-bold mb-3 text-center md:text-left">{h2}</h2>
                <div className="text-gray-700 mb-6 text-center md:text-left">
                  {p2}
                </div>
                <a
                  href="#contact"
                  className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-lg transition self-center md:self-start"
                >
                  Connect With An Expert &rarr;
                </a>
              </div>
            )}

            {img2 && (
              <div className="flex-1 rounded-lg bg-white p-6 flex justify-center items-center">
                <img
                  src={img2}
                  alt="Global Smartphone Users 2020-2025"
                  className="w-full max-w-lg h-auto object-contain"
                />
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Charts;
