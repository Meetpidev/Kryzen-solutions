// import Flexible from "../public/flexible.png";
// import Experience from "../public/experencied developers.png";
// import Time from "../public/timiley deliverd.png";

const features = [
  {
    icon: <span className="bg-gray-100 text-black rounded-lg p-3 mr-3 text-3xl">🔄</span>,
    title: "Flexible-Engagement-Models",
    description: "Total customized and customer-centric engagement models facilitating hourly or fixed rate hiring of developers.",
  },
  {
    icon: <span className="bg-gray-100 text-black rounded-lg p-3 mr-3 text-3xl">🔎</span>,
    title: "100% Transparency",
    description: "100% transparency policy to keep our client and our team on the same page.",
  },
  {
    icon: <span className="bg-gray-100 text-black rounded-lg p-3 mr-3 text-3xl">👨‍💻</span>,
    title: "Experienced Developers",
    description: "Our team of capable and experienced developers handle your unique business needs efficiently and have working experience in versatile domains.",
  },
  {
    icon: <span className="bg-gray-100 text-black rounded-lg p-3 mr-3 text-3xl">⏰</span>,
    title: "Timely Delivery",
    description: "We value the time and are particular about timely deliveries by following the highest quality standards.",
  },
  {
    icon: <span className="bg-gray-100 text-black rounded-lg p-3 mr-3 text-3xl">🛠️</span>,
    title: "Technical Support",
    description: "Ask any technical query and get it solved by our expert technical support staff! With fruitful interaction, get the best possible solutions for your problems from our consultation and support team.",
  },
];

function FeatureItem({ icon, title, description }) {
  return (
    <div className="flex items-start mb-6">
      {icon}
      <div>
        <div className="font-bold text-lg">{title}</div>
        <div className="text-gray-700">{description}</div>
      </div>
    </div>
  );
}

export default function Upper() {
  return (
    <section className="bg-[#F2F7FC] py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-3">
          What Sets Us Apart As Mobile App Development Company?
        </h2>
        <p className="text-gray-700 text-center mb-8 max-w-5xl mx-auto">
          Being unique is our quality! Sapphire Solutions believe in the things that give us an edge over our competitors. We are renowned software and mobile application development organization serving customers with end-to-end support. Our Idealization, feasibility assessment of the entire software development process stands us one level up the competitors.
        </p>
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Left Features List */}
          <div className="flex-1 bg-blue-50 p-2">
            {features.map((item, idx) => (
              <FeatureItem key={item.title + idx} {...item} />
            ))}
          </div>

          <div className="flex-1 bg-white rounded-lg shadow p-8 min-w-[300px] border-2">
            <h3 className="text-xl font-bold text-center mb-6">Let's Discuss</h3>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your name *"
                className="border rounded px-4 py-2"
                required
              />
              <input
                type="email"
                placeholder="Email ID *"
                className="border rounded px-4 py-2"
                required
              />
              <div className="flex gap-2">
                <select className="border rounded px-3 py-2">
                  <option value="+91">+91</option>
                  
                </select>
                <input
                  type="tel"
                  placeholder="Mobile Number *"
                  className="border rounded px-4 py-2 flex-1"
                  required
                />
              </div>
              <textarea
                placeholder="Tell us more about your project*"
                className="border rounded px-4 py-2"
                rows={3}
                required
              />
              
              <div className="bg-gray-100 rounded p-3 flex items-center gap-2">
                <input type="checkbox" />
                <span>I'm not a robot</span>
                
              </div>
              <button
                type="submit"
                className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 rounded mt-4"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
