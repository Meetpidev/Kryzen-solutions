import { useState, useEffect, useRef } from "react";
import {
  ChevronDown,
  Eye,
  Zap,
  CheckCircle,
  Lightbulb,
  Shield,
  Users,
} from "lucide-react";
import logo from "./logo2.png";
import Digital from "../public/about_us_banner.jpg";
import Brands from "../components/Brands";
import TestimonialSlider from "../components/TestimonialSlider";
import { CTASubscribe, CTAWorkTogether } from "../components/FeaturedLogos";


function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const elementRef = useRef(null);


  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting && !hasIntersected) {
          setHasIntersected(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [hasIntersected, options]);

  return { elementRef, isIntersecting, hasIntersected };
}

// Number counter hook for animating stats
function useCountUp(end, duration = 2000, startOn = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!startOn) return;

    let start = 0;
    const stepTime = Math.max(Math.floor(duration / end), 20);
    const interval = setInterval(() => {
      start++;
      setCount(start);
      if (start >= end) clearInterval(interval);
    }, stepTime);
    return () => clearInterval(interval);
  }, [end, duration, startOn]);
  return count;
}

export default function About() {
  const { elementRef: heroRef } = useIntersectionObserver();
  const { elementRef: aboutRef, hasIntersected: aboutIntersected } =
    useIntersectionObserver();
  const { elementRef: visionRef, hasIntersected: visionIntersected } =
    useIntersectionObserver();
  const { elementRef: missionRef, hasIntersected: missionIntersected } =
    useIntersectionObserver();
  const { elementRef: statsRef, hasIntersected: statsIntersected } =
    useIntersectionObserver();
  const { elementRef: ctaRef, hasIntersected: ctaIntersected } =
    useIntersectionObserver();

  // Animate numbers on stats section intersect
  const experience = useCountUp(2, 1500, statsIntersected);
  const clients = useCountUp(20, 1500, statsIntersected);
  const projects = useCountUp(15, 1500, statsIntersected);
  const professionals = useCountUp(10, 1500, statsIntersected);
  const retention = useCountUp(99, 1500, statsIntersected);
  const industries = useCountUp(2, 1500, statsIntersected);

  return (
    <div className="min-h-[80vh] bg-background text-foreground font-sans antialiased">
      {/* Hero Section */}
      <section
        id="home"
        ref={heroRef}
        className="relative min-h-screen flex flex-col md:flex-row items-center justify-center overflow-hidden"
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center py-40 px-4 sm:px-6 md:px-8">
          <div className="max-w-xl mb-10 md:mb-0 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              We Shape Digital Solutions
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-8">
              Kryzen Software Solutions provides the solutions you need to
              innovate & accelerate business. We are a leading software
              development company with decade-long expertise in creating
              innovative solutions.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-lg transition duration-150"
            >
              Connect Now
              <span className="ml-2 font-normal text-xl">&rarr;</span>
            </a>
          </div>
          <div className="w-full md:w-auto flex justify-center px-20">
            <img
              src={Digital}
              alt="Digital Solutions illustration"
              className="w-full max-w-lg h-auto object-contain"
            />
          </div>
        </div>
      </section>


      {/* About Section */}
      <section id="about" ref={aboutRef} className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div
              className={`transition-all duration-800 delay-200 ${aboutIntersected
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
                }`}
            >
              <div className="relative rounded-xl overflow-hidden shadow-1xl">
                <img
                  src={logo}
                  alt="Professional software development environment"
                  className="w-full rounded-xl object-cover"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-xl opacity-20"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent rounded-xl opacity-30"></div>
              </div>
            </div>
            <div
              className={`transition-all duration-800 delay-100 ${aboutIntersected
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
                }`}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-8">
                About Kryzen Software Solutions
              </h2>
              <div className="space-y-6 text-muted-foreground text-base sm:text-lg leading-relaxed text-justify">
                <p data-testid="about-paragraph-1">
                  Kryzen Software Solutions is a certified Web & Mobile App
                  Development Company established in 2024. We offer a wide
                  range of IT services and domain-specific solutions to
                  Enterprises, ISVs, Digital Agencies, and Startups.
                </p>
                <p data-testid="about-paragraph-2">
                  Our devoted and passionate team delivers best industry
                  practices combined with technology expertise and business
                  domain knowledge to drive digital transformation.
                </p>
                <p data-testid="about-paragraph-3">
                  Our team, having diverse skills with more than 2+ years of
                  technology experience, engages with customers at a deeper
                  level to provide high-end technology solutions and
                  innovations.
                </p>
              </div>
              <div className="flex justify-center sm:justify-start gap-4 mt-7">
                <a
                  href="#contact"
                  className="bg-blue-100 text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition transform hover:scale-105"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      <h1 className="text-center mt-14 font-bold text-[2rem]">
        We Create, We Enhance, We Deliver <br /> More Than Expected –
        That’s Kryzen
      </h1>
      <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto my-8 px-2">
        {/* Vision Card */}
        <section id="vision" ref={visionRef} className="py-1 bg-muted">
          <div className="flex-1 bg-white rounded-xl shadow-lg p-8 transition-all duration-800"
            style={{
              opacity: missionIntersected ? 1 : 0,
              transform: missionIntersected ? 'translateY(0)' : 'translateY(32px)'
            }}>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 flex items-center justify-center mr-4">
                {/* Replace with icon as needed */}
                <Eye className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-black m-0">Our Vision</h2>
            </div>
            <div>
              <p className="text-base text-gray-700 text-left">
                It’s our goal to empower our customers to achieve more and to be one of the best customer-centric company.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Card */}
        <section id="mission" ref={missionRef} className="py-1 bg-background">
          <div className="flex-1 bg-white rounded-xl shadow-lg p-8 transition-all duration-800"
            style={{
              opacity: missionIntersected ? 1 : 0,
              transform: missionIntersected ? 'translateY(0)' : 'translateY(32px)'
            }}>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 flex items-center justify-center mr-4">
                {/* Replace with icon as needed */}
                <Zap className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-black m-0">Our Mission</h2>
            </div>
            <div>
              <p className="text-base text-gray-700 text-left whitespace-nowrap">
                To provide our customers with the precise services and solutions <br />
                at the lowest possible cost.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Stats Section with animated numbers */}
      <section
        ref={statsRef}
        className="bg-[#086CC4] mt-18 mb-10 py-16 text-white"
      >
        <h1 className="font-bold text-center text-[2rem]">
          Glance through our creations and presence
        </h1>
        <p className="text-center text-muted-foreground mb-10">
          We are a team of qualified Salesforce Development Professionals adept at expanding your current system’s capabilities via the development and integration of Salesforce CRM.
        </p>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 text-center">
          <div>
            <div className="text-4xl font-extrabold text-primary">
              {experience}+
            </div>
            <div className="mt-1 text-sm font-semibold text-muted-foreground">
              Years Experience
            </div>
          </div>
          <div>
            <div className="text-4xl font-extrabold text-primary">{clients}+</div>
            <div className="mt-1 text-sm font-semibold text-muted-foreground">
              Satisfied Clients
            </div>
          </div>
          <div>
            <div className="text-4xl font-extrabold text-primary">{projects}+</div>
            <div className="mt-1 text-sm font-semibold text-muted-foreground">
              Projects Completed
            </div>
          </div>
          <div>
            <div className="text-4xl font-extrabold text-primary">{professionals}+</div>
            <div className="mt-1 text-sm font-semibold text-muted-foreground">
              IT Professionals
            </div>
          </div>
          <div>
            <div className="text-4xl font-extrabold text-primary">{retention}%</div>
            <div className="mt-1 text-sm font-semibold text-muted-foreground">
              Client Retention
            </div>
          </div>
          <div>
            <div className="text-4xl font-extrabold text-primary">{industries}+</div>
            <div className="mt-1 text-sm font-semibold text-muted-foreground">
              Industries Served
            </div>
          </div>
        </div>
      </section>
      <Brands />
      <TestimonialSlider />
      <CTAWorkTogether />
      <CTASubscribe />
    </div>
  );
}

function MissionCard({
  icon,
  title,
  description,
  intersected,
  delay,
}) {
  return (
    <div
      className={`bg-card rounded-xl p-8 shadow-lg border border-border h-full transition-all duration-800`}
      style={{
        opacity: intersected ? 1 : 0,
        transform: intersected ? "translateY(0)" : "translateY(32px)",
        transitionDelay: `${delay}ms`,
      }}
      data-testid={"mission-card-" + title.toLowerCase().replace(/\s/g, "-")}
    >
      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-card-foreground mb-4">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}
