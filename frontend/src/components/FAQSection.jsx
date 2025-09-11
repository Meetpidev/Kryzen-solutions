import { useState } from "react";
import Img_1 from "../public/About_1.webp";
import Img_2 from "../public/About_2.webp";
import Img_3 from "../public/fortune.webp";
import Img_4 from "../public/About_4.webp";
import Img_5 from "../public/About_5.webp";
import Img_6 from "../public/About_6.webp";
import Img_8 from "../public/About_7.webp";

const stats = [
  { label: "2+", desc: "Years of Experience", img: Img_1 },
  { label: "15+", desc: "Projects Completed", img: Img_2 },
  { label: "20+", desc: "Fortunes 500 Companies", img: Img_3 },
  { label: "10+", desc: "IT Professional", img: Img_4 },
  { label: "99%", desc: "Client Retention", img: Img_5 },
  { label: "2+", desc: "Industry Served", img: Img_6 },
  { label: "20+", desc: "Satisfied Clients", img: Img_8 },
  { label: "20+", desc: "Google Reviews", img: Img_4 },
];

const reviews = [
  {
    logo: <span className="text-2xl">s</span>,
    platform: "Google",
    stars: 5,
    count: 1012,
  },
  {
    logo: <span className="text-2xl">s</span>,
    platform: "Clutch",
    stars: 5,
    count: 301,
  },
  {
    logo: <span className="text-2xl">s</span>,
    platform: "GoodFirms",
    stars: 5,
    count: 201,
  },
];

const faqs = [
  "Is Kryzen the Top-Rated Mobile App Development Company for my business?",
  "What industries do you specialize in for app development?",
  "Why should I choose your company over other mobile app developers?",
  "Do you have client testimonials or case studies?",
  "What is the difference between native and hybrid mobile app development?",
  {
    question: "How do you ensure the mobile app design aligns with the latest user experience (UX) trends?",
    answer:
      "We follow a user-centered design approach, keeping up with the latest UX trends such as intuitive navigation, minimalistic design, and responsive layouts to enhance user engagement and satisfaction.",
  },
  "Why choose Kryzen Software Solutions for mobile app development services?",
];

function StatCard({ label, desc, img }) {
  return (
    <div className="flex items-center gap-3 mb-2">
      <img
        src={img.src || img}
        alt={desc}
        className="w-12 h-12 object-cover rounded-xl bg-gray-200 p-2"
        loading="lazy"
      />
      <div>
        <div className="font-bold text-xl leading-tight">{label}</div>
        <div className="text-gray-700 text-sm">{desc}</div>
      </div>
    </div>
  );
}

function ReviewLogo({ logo, platform, stars, count }) {
  return (
    <div className="flex flex-col items-center mr-6">
      {logo}
      <span className="flex gap-1 text-blue-600 font-bold">
        {Array.from({ length: stars }, (_, i) => (
          <span key={i}>s</span>
        ))}
      </span>
      <div className="font-semibold text-sm">{platform}</div>
      <div className="text-xs text-gray-500">{count} REVIEWS</div>
    </div>
  );
}

export default function FAQSection() {
  const [openedIndex, setOpenedIndex] = useState(null);

  function toggleFaq(index) {
    setOpenedIndex(openedIndex === index ? null : index);
  }

  return (
    <section className="min-h-screen bg-[#0471C6] py-12 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-xl p-6 md:p-12 flex flex-col max-w-5xl mx-auto w-full">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-2 text-[#0471C6]">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-600 mb-8">
          We provide tailored, robust, scalable and secure Android mobile app solutions that delight users and deliver engagement.
        </p>
        <div className="flex flex-col md:flex-row gap-10 mb-8">
          <div className="flex-1 grid grid-cols-2 gap-6">
            {stats.map((props, i) => (
              <StatCard key={props.label + i} {...props} />
            ))}
          </div>
          <div className="flex-1 max-w-full">
            <ol className="list-decimal ml-6 text-gray-800 text-base space-y-4">
              {faqs.map((item, idx) =>
                typeof item === "string" ? (
                  <li
                    key={idx}
                    onClick={() => toggleFaq(idx)}
                    className="cursor-pointer"
                  >
                    {item}
                    {openedIndex === idx && (
                      <p className="mt-2 text-gray-700 text-sm">
                        No detailed answer available.
                      </p>
                    )}
                  </li>
                ) : (
                  <li
                    key={idx}
                    onClick={() => toggleFaq(idx)}
                    className="cursor-pointer"
                  >
                    <span className="font-semibold text-blue-700">{item.question}</span>
                    {openedIndex === idx && (
                      <p className="mt-2 text-gray-700 text-sm">{item.answer}</p>
                    )}
                  </li>
                )
              )}
            </ol>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-6 mt-2 pt-4 border-t border-gray-200">
          {reviews.map((props, i) => (
            <ReviewLogo key={props.platform + i} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
