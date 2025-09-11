import { useRef, useEffect } from "react";

const dummyData = [
  { title: "Quality Analyzer", desc: "AI-Powered Document...", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdnpT7fGp9UW4UaXtCTh-wGpV8admcfogoOA&s" },
  { title: "Hide App", desc: "Best Mobile App...", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdnpT7fGp9UW4UaXtCTh-wGpV8admcfogoOA&s" },
  { title: "Team Communication", desc: "Innovative Team...", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdnpT7fGp9UW4UaXtCTh-wGpV8admcfogoOA&s" },
  { title: "Real Estate App", desc: "Leading Real Estate...", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdnpT7fGp9UW4UaXtCTh-wGpV8admcfogoOA&s" },
  { title: "Sapphire Software", desc: "Software Development...", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdnpT7fGp9UW4UaXtCTh-wGpV8admcfogoOA&s" },
  { title: "Sapphire Software", desc: "Software Development...", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdnpT7fGp9UW4UaXtCTh-wGpV8admcfogoOA&s" },
  { title: "Sapphire Software", desc: "Software Development...", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdnpT7fGp9UW4UaXtCTh-wGpV8admcfogoOA&s" },
];

export default function InnovativeSlider() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let childWidth = 0;
    if (slider && slider.children[0]) {
      childWidth = slider.children[0].offsetWidth + 24; // card width + gap
    }
    let idx = 0;
    const interval = setInterval(() => {
      idx += 1;
      if (idx > dummyData.length - 1) idx = 0;
      if (slider) slider.scrollTo({ left: idx * childWidth, behavior: "smooth" });
    }, 2300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-cyan-900 py-8 pb-16">
      <h2 className="text-3xl font-bold text-white text-center mb-2">Unveiling Our Innovative Solution</h2>
      <p className="text-cyan-100 text-center mb-8 max-w-2xl mx-auto">
        From cutting-edge technology to revolutionary concepts, get ready to be inspired and intrigued.<br />
        This is more than just a video – it's a glimpse into the future.
      </p>
      
      <div className="relative mx-auto max-w-16xl px-6">
        <div
          className="flex overflow-x-hidden scrollbar-hide gap-6 px-4"
          ref={sliderRef}
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {dummyData.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md min-w-[350px] max-w-[350px] flex-shrink-0 pb-4 scrollSnapAlign-start"
              style={{ scrollSnapAlign: 'start' }}
            >
              <img src={item.img} alt={item.title} className="w-full h-48 object-cover rounded-t-2xl" />
              <div className="p-4">
                <h3 className="font-bold text-lg text-cyan-900">{item.title}</h3>
                <p className="text-cyan-800 mt-2 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 flex justify-center">
        <button className="bg-white text-cyan-900 rounded px-4 py-2 font-semibold hover:bg-cyan-200 transition">
          View Insightful Videos
        </button>
      </div>
    </div>
  );
}

