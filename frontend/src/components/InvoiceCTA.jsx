import { ArrowUpRight } from "lucide-react";

export default function InvoiceCTA() {
  return (
    <section className="w-full py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl bg-indigo-900 text-white px-10 py-16 text-center">
          
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full"></div>
          <div className="absolute -top-10 -right-10 w-60 h-60 bg-white/5 rounded-full"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/5 rounded-full"></div>
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-white/5 rounded-full"></div>

          <h2 className="relative text-3xl md:text-4xl font-semibold leading-snug max-w-3xl mx-auto">
            98% Accurate AI-Powered Invoice Recognition. 
            <br className="hidden md:block" />Ready To See It First-Hand?
          </h2>

          <div className="relative mt-10 flex justify-center">
            <button className="group flex items-center gap-3 bg-white text-gray-900 px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105">
              Schedule a Demo
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-900 text-white transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={16} />
              </span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}