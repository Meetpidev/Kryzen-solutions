import { useState } from "react";
import Career from "../public/career_bannner.svg";
import Who1 from "../public/career_and_culture_1.svg";
import Who2 from "../public/career_and_culture_2.svg";
import Impact from "../public/impact.svg";
import Dev from "../public/development.svg";
import Support from "../public/support.svg";
import Progress from "../public/progress.svg";
import Fortune from "../public/ic_fortune_100_clientle.png";
import Client from "../public/ic_client_presence.png";
import Since from "../public/ic_since.png";
import Cost from "../public/ic_no_hidden_cost.png";
import Guiends from "../public/ic_free_guidence.png";
import Trust from "../public/ic_trust.png";
import Domain from "../public/ic_domain_expertise.png";
import Secured from "../public/ic_secure_safe.png";
import Handover from "../public/ic_evolving_ideas.png";
import Enterprise from "../public/ic_enterprise_app.png";
import Problem from "../public/ic_problem_solving.png";
import Strategy from "../public/ic_strategy_dev.png";
import Cummunity from "../public/community.svg";
import Diversity from "../public/diversity.svg";
import Health from "../public/health_and_wellbeing.svg";
import Inspiring from "../public/inspiring_workspaces.svg";
import Learn from "../public/learn_to_grow.svg";

import HeroSection from "../components/HeroSection";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { CTASubscribe } from "../components/FeaturedLogos";

function Careers() {
  const [activeTab, setActiveTab] = useState("who");
  const [showForm, setShowForm] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");

  const openForm = (role) => {
    setSelectedRole(role);
    setShowForm(true);
  };

  const closeForm = () => setShowForm(false);

  const tabs = [
    { id: "who", label: "Who we are" },
    { id: "why", label: "Why Kryzen" },
    { id: "benefits", label: "Benefits / What we offer" },
    { id: "life", label: "Life at Kryzen" },
    { id: "hiring", label: "Hiring Process" },
    { id: "openings", label: "Current Openings" },
  ];

  const features = [
    {
      title: "Collaborative Culture",
      icon: Fortune,
    },
    {
      title: "Opportunities for Growth",
      icon: Client,
    },
    {
      title: "Innovative Projects",
      icon: Since,
    },
    {
      title: "Work Life Balance",
      icon: Cost
    },
    {
      title: "Celebrations & Outing",
      icon: Guiends,
    },
    {
      title: "Rewards & Recognition",
      icon: Trust,
    },
    {
      title: "5 Days work week",
      icon: Domain,
    },
    {
      title: "Continuous learning",
      icon: Secured,
    },
    {
      title: "CSR Activities",
      icon: Handover,
    },
    {
      title: "Professional Development",
      icon: Enterprise,
    },
    {
      title: "Competency Building",
      icon: Problem,
    },
    {
      title: "Health Insurance",
      icon: Strategy,
    },
  ];

  const steps = [
    {
      title: "1. Application",
      description:
        "Our intuitive career portal provides a seamless application experience, allowing you to explore and apply for opportunities that align with your expertise. Submit your updated resume and provide detailed insights into your professional experience to enhance your candidacy for the desired role.",
    },
    {
      title: "2. Screening & Shortlisting",
      description:
        "Our recruitment team, including our technical panel, will carefully review your application. If your qualifications and skills align with our requirements, we will reach out to you for further discussion.",
    },
    {
      title: "3. Technical Interview",
      description:
        "The technical interview presents a valuable opportunity to showcase your expertise and problem-solving abilities. The questions may cover analytical challenges, critical situations, and unconventional problem-solving scenarios to assess your technical proficiency.",
    },
    {
      title: "4. HR Interview",
      description:
        "This is a great opportunity for us to get to know each other better. We aim to understand your career aspirations, skills, strengths, and passions. You can ask any questions about the role or Sapphire Software Solutions during this stage.",
    },
    {
      title: "5. Decision & Onboarding",
      description:
        "Upon successfully completing the selection process, we will call you for joining formalities, including details of compensation, structure, and employment terms at Sapphire Software Solutions.",
    },
    {
      title: "6. Welcome Aboard 🎉",
      description:
        "Congratulations and welcome to the team! You’ll begin with an orientation program designed to help you integrate seamlessly into our culture, meet your team, and start working on exciting projects.",
    },
  ];

  const jobs = [
    { title: "BDE", experience: "1 – 4 Years", openings: 4 },
    { title: "Technical Support", experience: "Fresher", openings: 3 },
    { title: "PHP Lead", experience: "7 – 8 Years", openings: 1 },
    { title: "HR Executive", experience: "Fresher", openings: 1 },
    { title: "Full Stack Developer", experience: "5 – 6 Years", openings: 1 },
  ];

  const slides = [
  {
    title: "Community",
    description:
      "We are deeply committed to creating a positive and lasting impact in the communities we serve. Over 200+ of our team members have contributed volunteer hours, driving meaningful change and fostering growth and well-being across diverse communities.",
    image: Cummunity,
  },
  {
    title: "Innovation",
    description:
      "Innovation is at the heart of everything we do. We continuously explore new technologies and creative ideas to deliver solutions that redefine possibilities and empower businesses globally.",
    image: Diversity,
  },
  {
    title: "Sustainability",
    description:
      "We believe in responsible innovation and sustainable growth. Our initiatives are designed to reduce our environmental footprint while maximizing positive social impact.",
    image: Health,
  },
  {
    title: "Team Growth",
    description:
      "We foster a culture of continuous learning and collaboration. Every team member is encouraged to grow, experiment, and lead with creativity and confidence.",
    image: Inspiring,
    },
  {
    title: "Team Growth",
    description:
      "We foster a culture of continuous learning and collaboration. Every team member is encouraged to grow, experiment, and lead with creativity and confidence.",
    image: Learn,
  },
  ];

  return (
    <>
      <HeroSection
        title="Build your Future with us"
        description="Our team is the heart of everything we do. We are dedicated to empowering them to drive meaningful change and shape a brighter future for all. We believe in fostering fulfilling careers by offering inspiring opportunities, continuous development, and the encouragement to unlock their full potential and thrive both personally and professionally."
        buttonText="Apply Now"
        buttonLink="#contact"
        imageSrc={Career}
        imageAlt="Digital Solutions illustration"
      />

      <div className="max-w-6xl mx-auto mt-10">

        <div className="flex flex-wrap border-b border-gray-300">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 text-sm font-semibold transition-all duration-200 
              ${activeTab === tab.id
                  ? "bg-blue-100 text-blue-600 border-b-4 border-blue-600"
                  : "text-gray-600 hover:text-blue-600"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="bg-gray-50 p-6 rounded-b-lg">
          {activeTab === "who" && (
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <img
                  src={Who1}
                  alt="team"
                  className="w-64"
                />
                <p className="text-gray-700 leading-relaxed">
                  <strong>Kryzen Solutions,</strong> a Web and Mobile App Development Company, has been delivering cutting-edge IT solutions since 2025. We provide a comprehensive suite of IT services and domain-specific solutions tailored for enterprises, ISVs, digital agencies, and startups.
                  <br />
                  <br />
                  Driven by innovation and excellence, our highly skilled team combines industry best practices, deep technological expertise, and extensive business domain knowledge to accelerate digital transformation. With over 23+ years of experience, our diverse team engages closely with clients, offering high-end technology solutions and pioneering innovations that drive business success.
                </p>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-6">
                <p className="text-gray-700 leading-relaxed">
                  We are an award-winning, end-to-end software solutions provider and IT consulting firm with a proven track record of excellence. We have built strong, long-term partnerships with a diverse clientele, serving 2,500+ satisfied customers, from start-ups to large enterprises.
                  <br />
                  <br />
                  Our team comprises highly skilled professionals, including web designers, developers, mobile app specialists, network engineers, and QA testers, all dedicated to delivering cutting-edge solutions. With an average experience of 4+ years, our experts bring deep technical expertise and industry best practices to every project, ensuring innovation, efficiency, and success.
                </p>
                <img
                  src={Who2}
                  alt="office"
                  className="w-64"
                />
              </div>
            </div>
          )}

          {activeTab === "why" && (
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <img
                  src={Impact}
                  alt="Impact"
                  className="w-64"
                />
                <p className="text-gray-700 leading-relaxed">
                  <strong className="text-3xl">Impact</strong>
                  <br />
                  <br />
                  Driving success through innovation - 'By harnessing creativity and strategic insight, we enable our teams to develop transformative solutions that foster meaningful progress and prove that with the right support, limitless possibilities can be realized.'
                </p>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-6">
                <p className="text-gray-700 leading-relaxed">
                  <strong className="text-3xl">Development</strong>
                  <br />
                  <br />
                  Lifelong growth - 'We equip our associates with extensive knowledge and learning opportunities, fostering innovation and adaptability. This empowers them to stay at the forefront of industry trends and drive impactful transformation.'
                </p>
                <img
                  src={Dev}
                  alt="Development"
                  className="w-64"
                />
              </div>

              <div className="flex flex-col md:flex-row items-center gap-6">
                <img
                  src={Support}
                  alt="Support"
                  className="w-64"
                />
                <p className="text-gray-700 leading-relaxed">
                  <strong className="text-3xl">Support</strong>
                  <br />
                  <br />
                  'By fostering a culture of continuous upskilling and reskilling, along with diverse career opportunities across the organization, we enable our people—at every stage of their journey—to unlock their potential and evolve into the professionals they strive to become.'
                </p>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-6">
                <p className="text-gray-700 leading-relaxed">
                  <strong className="text-3xl">Progress</strong>
                  <br />
                  <br />
                  'We see our people as lifelong partners in success, fostering relationships that grow and evolve. By continuously investing in their development, we cultivate a culture of continuous growth, empowering them to strive for new achievements at every stage of their careers.'
                </p>
                <img
                  src={Progress}
                  alt="Progress"
                  className="w-64"
                />
              </div>
            </div>
          )}

          {activeTab === "benefits" && (
            <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="bg-white rounded-2xl shadow-sm border border-blue-50 px-6 py-8 flex flex-col justify-between min-h-[170px]">
                  <img src={feature.icon} alt="ICON" className="h-10 w-10" />
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "life" && (
            <p className="text-gray-700">
              Life at Kryzen is all about collaboration, creativity, and
              continuous learning in a positive, growth-driven environment.
            </p>
          )}

          {activeTab === "hiring" && (
            <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        How We Hire?
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-blue-50 hover:bg-blue-100 transition-all duration-200 shadow-sm p-6 rounded-md border border-blue-100"
          >
            <h3 className="font-bold text-lg text-gray-800 mb-3">
              {step.title}
            </h3>
            <p className="text-gray-700 leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
          )}

          {activeTab === "openings" && (
            <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-8">Current Job Openings</h1>

      <div className="w-full max-w-3xl space-y-4">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-5 bg-blue-50 rounded-md shadow-sm"
          >
            <div>
              <h2 className="font-semibold text-lg">{job.title}</h2>
              <p className="text-sm">
                <span className="font-semibold text-blue-700">Experience:</span>{" "}
                {job.experience} &nbsp; | &nbsp;
                <span className="font-semibold text-blue-700">
                  No. of Openings:
                </span>{" "}
                {job.openings}
              </p>
            </div>
            <button
              onClick={() => openForm(job.title)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 w-full max-w-3xl bg-blue-800 text-center text-white p-6 rounded-md">
        <p className="font-semibold text-lg mb-2">
          Not finding the right opening as per your profile & skillset?
        </p>
        <p className="text-sm mb-4">
          Submit your profile and we will reach out to you when we find a suitable opportunity!
        </p>
        <button
          onClick={() => openForm("")}
          className="bg-white text-blue-800 px-6 py-2 rounded font-semibold"
        >
          Apply Here
        </button>
      </div>

      
      {showForm && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-2xl shadow-lg relative">
            <button
              onClick={closeForm}
              className="absolute top-2 right-3 text-gray-500 text-xl hover:text-black"
            >
              ✖
            </button>

            <h2 className="text-xl font-semibold mb-4">Apply for {selectedRole || "a Position"}</h2>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="border p-2 rounded" type="text" placeholder="Name *" required />
              <input className="border p-2 rounded" type="text" placeholder="Mobile Number *" required />
              <input className="border p-2 rounded" type="email" placeholder="Email ID *" required />
              <select className="border p-2 rounded" required>
                <option>Select Experience *</option>
                <option>Fresher</option>
                <option>1 - 2 Years</option>
                <option>3 - 5 Years</option>
                <option>5+ Years</option>
              </select>
              <input className="border p-2 rounded" type="text" placeholder="Qualification *" required />
              <input className="border p-2 rounded" type="text" placeholder="Degree Result *" required />
              <input className="border p-2 rounded" type="text" placeholder="10th Result *" required />
              <input className="border p-2 rounded" type="text" placeholder="12th/Diploma Result *" required />
              
              <select
                className="border p-2 rounded col-span-2"
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                required
              >
                <option value="">Select Role *</option>
                {jobs.map((job, i) => (
                  <option key={i} value={job.title}>
                    {job.title}
                  </option>
                ))}
              </select>

              <input
                className="border p-2 rounded col-span-2"
                type="file"
                accept=".pdf,.doc,.docx"
                required
              />

              <div className="col-span-2 flex justify-center mt-4">
                <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
                  Submit
                </button>
              </div>
            </form>

            <p className="text-xs text-gray-500 mt-2 text-center">
              Attachment with Word or PDF format only
            </p>
          </div>
        </div>
      )}
    </div>
          )}
        </div>
      </div>

      <div className="bg-blue-50 py-12 w-full mt-9">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
        Crafting a Vision, Shaping the Future
      </h2>

      <div className="w-full max-w-7xl mx-auto px-4">
  <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    navigation
    pagination={{ clickable: true }}
    autoplay={{ delay: 5000 }}
    loop={true}
    className="w-full rounded-2xl shadow-lg bg-white p-6"
  >
    {slides.map((slide, index) => (
      <SwiperSlide key={index}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full md:w-1/2 max-h-72 md:max-h-96 object-contain p-4"
          />
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3">
              {slide.title}
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
              "{slide.description}"
            </p>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

        
            <section
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
              2+
            </div>
            <div className="mt-1 text-sm font-semibold text-muted-foreground">
              Years Experience
            </div>
          </div>
          <div>
            <div className="text-4xl font-extrabold text-primary">20+</div>
            <div className="mt-1 text-sm font-semibold text-muted-foreground">
              Satisfied Clients
            </div>
          </div>
          <div>
            <div className="text-4xl font-extrabold text-primary">15+</div>
            <div className="mt-1 text-sm font-semibold text-muted-foreground">
              Projects Completed
            </div>
          </div>
          <div>
            <div className="text-4xl font-extrabold text-primary">10+</div>
            <div className="mt-1 text-sm font-semibold text-muted-foreground">
              IT Professionals
            </div>
          </div>
          <div>
            <div className="text-4xl font-extrabold text-primary">99%</div>
            <div className="mt-1 text-sm font-semibold text-muted-foreground">
              Client Retention
            </div>
          </div>
          <div>
            <div className="text-4xl font-extrabold text-primary">2+</div>
            <div className="mt-1 text-sm font-semibold text-muted-foreground">
              Industries Served
            </div>
          </div>
        </div>
        </section>
        
        <CTASubscribe />
    </div>
    </>
  )
}

export default Careers