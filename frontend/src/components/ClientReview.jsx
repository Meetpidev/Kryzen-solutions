import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Sandip Shah, HOD",
    location: "Raghuvir School of Science",
    avatar: "https://www.pngall.com/wp-content/uploads/12/Avatar-PNG-Image-File.png",
    rating: 5,
    platform: "Google Review",
    text:
      "Kryzen Software Solutions has delivered outstanding services with complete professionalism and expertise. Their solutions have added great value to our institution by streamlining processes and enhancing efficiency. We highly recommend their services for their dedication, reliability, and timely support.",
  },
  {
    name: "Hemant Joshi, Founder",
    location: "Everneu Skin’s Wellness",
    avatar: "https://www.pngall.com/wp-content/uploads/12/Avatar-PNG-Image-File.png",
    rating: 5,
    platform: "Google Review",
    text:
      "Kryzen Software Solutions has provided us with an exceptional E-commerce platform and innovative digital solutions that perfectly support our business goals. Their professionalism, technical expertise, and commitment to delivering on time have greatly enhanced our online presence and customer experience. We truly value their partnership and highly recommend their services.",
  },
  {
    name: "Hemant Joshi, Co-Founder",
    location: "Shiv Wellness",
    avatar: "https://www.pngall.com/wp-content/uploads/12/Avatar-PNG-Image-File.png",
    rating: 5,
    platform: "Google Review",
    text:
      "Kryzen Software Solutions has been instrumental in providing us with a robust digital platform tailored to our needs. Their expertise in delivering seamless solutions and their professional approach have significantly strengthened our brand’s digital presence. We appreciate their dedication, timely support, and innovative ideas.",
  },
  {
    name: "Katha Developers",
    location: "Katha Developers (Real Estate)",
    avatar: "https://www.pngall.com/wp-content/uploads/12/Avatar-PNG-Image-File.png",
    rating: 5,
    platform: "Google Review",
    text:
      "Kryzen Software Solutions has provided us with exceptional digital marketing, website development, and consulting services tailored to the real estate industry. Their professional approach, innovative strategies, and reliable execution have helped us strengthen our brand presence and engage effectively with our clients. We truly value their expertise and commitment to excellence.",
  },
  {
    name: "Riverdale Real Estate",
    location: "Riverdale Real Estate",
    avatar: "https://www.pngall.com/wp-content/uploads/12/Avatar-PNG-Image-File.png",
    rating: 5,
    platform: "Google Review",
    text:
      "Kryzen Software Solutions has been a valuable partner in enhancing our marketing strategies through effective digital marketing and consulting services. Their expertise has helped us reach the right clients, improve engagement, and strengthen our brand presence in the competitive real estate market. We truly appreciate their professionalism and results-driven approach",
  },
    {
    name: "Sales Manager",
    location: "Petpooja",
    avatar: "https://www.pngall.com/wp-content/uploads/12/Avatar-PNG-Image-File.png",
    rating: 5,
    platform: "Google Review",
    text:
      "Kryzen Software Solutions has been an excellent technology partner, providing us with reliable digital solutions and continuous support. Their professional approach and commitment to delivering quality have streamlined our processes and helped us serve our clients more efficiently. We truly appreciate their expertise and dedication.",
  },

      {
    name: "Shiv Shakti Travels",
    location: "Shiv Shakti Travels",
    avatar: "https://www.pngall.com/wp-content/uploads/12/Avatar-PNG-Image-File.png",
    rating: 5,
    platform: "Google Review",
    text:
      "Kryzen Software Solutions has developed an excellent website for our business and provided impactful digital marketing services that have helped us reach a wider audience. Their professionalism, creativity, and timely execution have greatly enhanced our online presence and strengthened our brand visibility. We truly value their expertise and dedication.",
  },

        {
    name: "Infosoft",
    location: "Infosoft",
    avatar: "https://www.pngall.com/wp-content/uploads/12/Avatar-PNG-Image-File.png",
    rating: 5,
    platform: "Google Review",
    text:
      "Kryzen Software Solutions has provided us with exceptional consulting services that have significantly improved our performance and efficiency. Their expertise, strategic approach, and commitment to delivering quality solutions have made a real difference for our business. We highly value their professionalism and reliable support.",
  },

          {
    name: "TransStadia University",
    location: "TransStadia University",
    avatar: "https://www.pngall.com/wp-content/uploads/12/Avatar-PNG-Image-File.png",
    rating: 5,
    platform: "Google Review",
    text:
      "Kryzen Software Solutions delivered an outstanding AI-based animation video for our School of Computer Science. Their creativity, technical expertise, and professional execution brought our vision to life in a highly engaging and impactful way. We truly appreciate their dedication and innovative approach, which added great value to our academic initiatives.",
  },

            {
    name: "Principal Government Arts College",
    location: "Government Arts College",
    avatar: "https://www.pngall.com/wp-content/uploads/12/Avatar-PNG-Image-File.png",
    rating: 5,
    platform: "Google Review",
    text:
      "Kryzen Software Solutions has been an excellent technology partner for our institution. Their consulting services, digital solutions, and consistent website maintenance have greatly improved our online presence and operational efficiency. We truly value their professionalism, expertise, and timely support.",
  },
              {
    name: "HOD & Dean School of Engineering, Indrashil Universit",
    location: "Indrashil University (School of Engineering)",
    avatar: "https://www.pngall.com/wp-content/uploads/12/Avatar-PNG-Image-File.png",
    rating: 5,
    platform: "Google Review",
    text:
      "Kryzen Software Solutions has provided exceptional support in maintaining and redesigning our website with new features and digital solutions. Their professionalism, technical expertise, and innovative approach have enhanced our online presence and improved the overall digital experience for our students and faculty. We greatly appreciate their dedication and reliable service",
  },


];

function TestimonialCard({ name, location, avatar, rating, platform, text }) {
  return (
    <div className="bg-white rounded-lg shadow p-8 w-full max-w-md min-h-[250px] flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-center mb-2">
          <div className="flex gap-1">
            {[...Array(rating)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-xl">★</span>
            ))}
          </div>
          <span className="font-bold text-lg text-slate-700">{platform}</span>
        </div>
        <p className="text-gray-700 mb-6">{text}</p>
      </div>
      <div className="flex items-center mt-auto">
        <img src={avatar} alt={name} className="w-10 h-10 rounded-full mr-3 object-cover" />
        <div>
          <div className="font-bold text-base">{name}</div>
          <div className="text-gray-500 text-sm">{location}</div>
        </div>
      </div>
    </div>
  );
}

export default function ClientReview() {
  const [current, setCurrent] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    function updateCardsPerView() {
      setCardsPerView(window.innerWidth >= 1024 ? 3 : 1);
    }
    window.addEventListener("resize", updateCardsPerView);
    updateCardsPerView();
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  useEffect(() => {
    if (cardsPerView !== 3) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + cardsPerView) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [cardsPerView]);

  function prev() {
    setCurrent((prev) =>
      prev - cardsPerView < 0
        ? testimonials.length - cardsPerView
        : prev - cardsPerView
    );
  }
  function next() {
    setCurrent((prev) =>
      (prev + cardsPerView) % testimonials.length
    );
  }

  const visibleCards = Array(cardsPerView)
    .fill(0)
    .map((_, i) => testimonials[(current + i) % testimonials.length]);

  return (
    <section className="bg-[#005D89] py-12 px-4">
      <h2 className="text-2xl md:text-3xl font-extrabold text-center text-white mb-10">
        What Our Clients Say
      </h2>
      <div className="flex justify-center gap-8 mb-4">
        {visibleCards.map((props, idx) => (
          <TestimonialCard key={props.name + idx} {...props} />
        ))}
      </div>
      <div className="flex justify-center items-center gap-6 mt-2">
        <button
          className="px-4 py-2 rounded-full bg-white text-cyan-900 hover:bg-cyan-100 font-bold text-xl"
          onClick={prev}
          aria-label="Previous"
        >
          ←
        </button>
        <button
          className="px-4 py-2 rounded-full bg-white text-cyan-900 hover:bg-cyan-100 font-bold text-xl"
          onClick={next}
          aria-label="Next"
        >
          →
        </button>
      </div>
    </section>
  );
}
