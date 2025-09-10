import { lazy } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import CEO from "../public/sujal_Pass.png";

const CTASubscribe = lazy(() => import("../components/FeaturedLogos").then(module => ({ default: module.CTASubscribe })));
const CTAWorkTogether = lazy(() => import("../components/FeaturedLogos").then(module => ({ default: module.CTAWorkTogether })));

export default function CeoMsg() {
  return (
    <>
      <section className="bg-blue-50 mt-31 md:mt-30">
        <div className="max-w-6xl mx-auto px-4 flex flex-col-reverse md:flex-row justify-between items-center gap-8">
          <div className="w-full md:w-1/2 py-30">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Message From CEO</h2>
            <p className="text-gray-700 mb-6 text-justify text-[1.245rem]">
              In this message, our CEO shares insights on our mission, vision, and commitment to innovation. We are excited to continue growing with you, and we hope you find inspiration in the path we’re forging together.
            </p>
            <button className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-3 rounded-md font-semibold flex items-center gap-2 transition">
              Get In Touch <span className="ml-2">&#8594;</span>
            </button>
          </div>

          <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
            <div className="relative flex flex-col items-center">
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-200 rounded-full -z-10" />
              <img
                src={CEO}
                alt="CEO"
                className="w-76 h-76 rounded-xl object-cover border-4 border-white shadow-lg"
              />
              <div className="mt-3 px-5 py-2 bg-white rounded-xl shadow font-bold text-lg text-gray-900">
                Sujal Chotaliya
              </div>
              <div className="text-sm px-4 py-1 bg-blue-700 text-white rounded-b-xl font-semibold tracking-wide mt-1">
                ~ CEO
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white mt-10 py-8">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

            <div className="flex flex-col justify-center ml-4 md:ml-6 text-3xl md:text-[2rem]">
              <span className="text-blue-700 font-bold italic leading-relaxed md:leading-loose">
                Integrity
              </span>
              <span
                className="font-bold leading-relaxed md:leading-loose"
                style={{ transform: 'translateX(0.5rem)' }}
              >
                Excellence
              </span>
              <span
                className="text-blue-700 font-bold italic leading-relaxed md:leading-loose"
                style={{ transform: 'translateX(1rem)' }}
              >
                Innovation
              </span>
              <span
                className="font-bold leading-relaxed md:leading-loose"
                style={{ transform: 'translateX(1.8rem)' }}
              >
                Leadership
              </span>
            </div>


            <div className="bg-blue-50 rounded-xl p-6 shadow max-w-full md:max-w-[43rem]">
              <div className="text-blue-700 text-7xl md:text-[4rem] font-bold leading-none">“</div>
              <p
                className="text-gray-700 text-lg md:text-[1.5rem] -mt-6 md:-mt-8 leading-relaxed md:leading-loose"
              >
                True leadership is not about holding power but igniting potential—in yourself, in your team, and in the world. Dream boldly, act fearlessly, and leave a legacy that inspires transformation.
              </p>
              <div className="flex items-center gap-4 mt-6">
                <span className="font-bold text-blue-700 text-lg">Sujal Chotaliya</span>
                <Link to='https://www.linkedin.com/in/sujal-chotaliya-b5760b258/' className="bg-blue-500 text-white rounded-full p-2 flex items-center justify-center">
                  <FaLinkedinIn className="w-4 h-4" />
                </Link>
              </div>
              <div className="font-semibold mt-2 text-black text-base">CEO</div>
            </div>
          </div>
        </div>
      </section>


      <div className="max-w-5xl mx-auto p-4 flex flex-col gap-12">

        <div className="bg-white rounded-xl shadow-lg p-6 mb-10">
          <h2 className="text-2xl font-bold mb-4">Message from CEO</h2>
          <div className="text-gray-800 space-y-5 leading-relaxed text-[1.125rem]">
            <p>
              Welcome to Kryzen Software Solutions—a hub where ingenuity meets ambition. As the CEO, I firmly believe that leadership transcends the act of managing. It is about inspiring every individual within the organization to dream, innovate, and achieve greatness. Leadership is a responsibility to guide not just a company, but a movement—one driven by a relentless pursuit of excellence and a passion to redefine what is possible.
            </p>
            <p>
              At Kryzen, we are not mere participants in the ever-evolving tech landscape; we are architects of change. Our mission is to harness the transformative power of technology, crafting solutions that empower businesses, enrich lives, and shape the future. Every solution we build reflects a commitment to quality, creativity, and the unwavering belief that technology, when wielded wisely, can be a force for global progress.
            </p>
            <p>
              This company is more than a business—it is a beacon of possibility. Our team, fueled by curiosity and resilience, dares to envision a world where ideas are not limited by boundaries but ignited by boldness. Each challenge we face becomes an opportunity to grow, to innovate, and to lead. We don’t just adapt to change; we are the change.
            </p>
            <p>
              I firmly believe that one revolutionary idea, one brilliant invention, has the potential to illuminate billions of lives. Technology has the power to bridge divides, solve pressing challenges, and transform societies. At Kryzen, we are not just creators of software—we are creators of dreams, building tools that unlock the infinite potential within every individual and organization we serve.
            </p>
            <p>
              Nothing is impossible when you dare to dream, believe in your vision, and act with unwavering conviction. Together, we will embrace challenges, seize opportunities, and continue to push the boundaries of what technology can achieve. This is our journey—a journey fueled by bold ideas, limitless ambition, and an unyielding commitment to excellence.
            </p>
            <p>
              Thank you for trusting us to be your partner in progress. Together, we are not just building software, mobile app and websites; we are creating a legacy—a legacy of innovation, impact, and transformative power that will resonate for generations to come.
            </p>
          </div>
          <div className="mt-6 font-semibold text-lg">
            <div>Your’s Sincerely,</div>
            <div className="text-2xl font-bold text-blue-900">Sujal Chotaliya</div>
            <div className="font-bold text-lg mb-1">CEO</div>
            <div className="text-gray-800 text-base font-medium">Kryzen Software Solutions</div>
          </div>
        </div>

      </div>
      <div>
        <CTAWorkTogether />
        <CTASubscribe />
      </div>

    </>
  );
}
