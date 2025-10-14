import { useState, useEffect, lazy } from "react";
import Bg from "../public/why_us_bg.45bce6d4.png";
import axios from "axios";

const CTAWorkTogether = lazy(() => import("../components/FeaturedLogos").then(module => ({ default: module.CTAWorkTogether })));
const CTASubscribe = lazy(() => import("../components/FeaturedLogos").then(module => ({ default: module.CTASubscribe })));
const InnovativeSlider = lazy(() => import("../components/InnovativeSlider"));
const SuccessMatrix = lazy(() => import("../components/SuccessMatrix"));
const LogoCarousel = lazy(() => import("../components/LogoCarousel"));
const Brands = lazy(() => import("../components/Brands"));

const processes = [
  {
    title: "Discover",
    items: [
      "Brainstorming",
      "Hypothesis",
      "Conceptualization",
      "Assumptions",
      "Constraints",
      "NDA"
    ],
    bgColor: "rgba(243, 232, 255, 0.8)"
  },
  {
    title: "Define",
    items: [
      "Req. Definition",
      "SRS Document",
      "Project Planning",
      "Dev. Planning",
      "Milestones"
    ],
    bgColor: "rgba(224, 242, 254, 0.8)"
  },
  {
    title: "Design",
    items: [
      "Brainstorming",
      "Hypothesis",
      "Conceptualization",
      "Assumptions",
      "Constraints"
    ],
    bgColor: "rgba(209, 250, 229, 0.8)"
  },
  {
    title: "Develop",
    items: [
      "Coding",
      "APIs",
      "Testing / QA",
      "Debug",
      "Change Mgmt"
    ],
    bgColor: "rgba(254, 215, 170, 0.8)"
  },
  {
    title: "Deliver",
    items: [
      "Environment",
      "Deployment",
      "Migration",
      "Support",
      "Review"
    ],
    bgColor: "rgba(252, 231, 243, 0.8)"
  }
];


const features = [
  {
    icon: "🌐",
    text: "Years of Experience"
  },
  {
    icon: "💬",
    text: "Projects Completed"
  },
  {
    icon: "🤝",
    text: "Fortunes 500 Companies"
  },
  {
    icon: "🏆",
    text: "IT Professionals"
  },
];

export default function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    service: "",
    budget: "",
    type: "",
    details: "",
    newsletter: false,
    notRobot: false,
  });

  const [file, setFile] = useState(null);
  const onFileChange = (e) => setFile(e.target.files);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('name', form.name);
    formDataToSend.append('email', form.email);
    formDataToSend.append('mobile', form.mobile);
    formDataToSend.append('service', form.service);
    formDataToSend.append('budget', form.budget);
    formDataToSend.append('type', form.type);
    formDataToSend.append('details', form.details);
    formDataToSend.append('newsletter', form.newsletter);
    formDataToSend.append('notRobot', form.notRobot);

    // Append the file
    const fileInput = document.querySelector('input[type="file"]');
    if (fileInput.files.length > 0) {
      formDataToSend.append('attachment', file[0]);
    }

    try {
      const response = await axios.post('https://kryzen-solutions.onrender.com/api/schedule-meeting', formDataToSend, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      if (response.status === 200) {
        alert('Meeting scheduled successfully!');
        setForm({
          name: "",
          email: "",
          mobile: "",
          service: "",
          budget: "",
          type: "",
          details: "",
          newsletter: false,
          notRobot: false,
        });
      } else {
        alert('Failed to schedule meeting.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while scheduling the meeting.');
    }
  };

  const stats = [
    { number: 20, suffix: '+', label: 'Years Experience' },
    { number: 2800, suffix: '+', label: 'Satisfied Clients' },
    { number: 1500, suffix: '+', label: 'Completed Projects' },
    { number: 200, suffix: '+', label: 'IT Professional' },
    { number: 95, suffix: '%', label: 'Client Retention' },
    { number: 18, suffix: '+', label: 'Industry Served' }
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    stats.forEach((stat, i) => {
      let start = 0;
      const end = stat.number;
      const duration = 1500; // ms
      const stepTime = 16; // ~60fps
      const increment = end / (duration / stepTime);

      const interval = setInterval(() => {
        start += increment;
        if (start < end) {
          setCounts(prev =>
            prev.map((val, idx) => (idx === i ? Math.floor(start) : val))
          );
        } else {
          setCounts(prev => prev.map((val, idx) => (idx === i ? end : val)));
          clearInterval(interval);
        }
      }, stepTime);
    });
  }, []);


  return (
    <section className="bg-[#F0F8FF] w-full mx-auto px-4 py-20 mt-27">
      <div className="mx-auto">
        <h1 className="max-w-8xl text-xl text-center md:text-3xl font-extrabold text-black-600 mb-8 leading-tight">
          Let's Navigate Digital Transformation Together!!!
        </h1>
        <p className="text-l md:text-l text-gray-600 font-bold leading-relaxed max-w-2xl mx-auto">
          Every day, Sapphire experts help businesses around the globe accelerate digital transformation and
          build a more resilient, sustainable, and inclusive future Together.
        </p>
      </div>
      <LogoCarousel />
      <div className="flex items-center justify-center p-4">
        <div className="max-w-6xl w-full overflow-hidden">
          <div className="flex flex-col lg:flex-row">

            <div className="lg:w-2/5 bg-[#F0F8FF] p-8">

              <div className="grid grid-cols-2 gap-8 mb-12 md:ml-20">
                {stats.map((stat, index) => (
                  <div key={index} className="text-left">
                    <div className="text-4xl font-bold text-[#005D89] mb-1">
                      {counts[index]}{stat.suffix}
                    </div>
                    <div className="text-black-700 font-bold text-sm leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>


              <hr className="border-gray-300 mb-8" />
              
            </div>

            {/* Right Panel - Contact Form (unchanged) */}
            <div className="lg:w-3/5 p-4">
              <div className="shadow-[0_6px_12px_2px_rgba(0,0,0,0.2)] bg-white">


                <div className="bg-[#005D89] text-white p-2 px-4">
                  <h2 className="text-lg font-semibold">
                    Questions? Contact us for Sales Enquiry!
                  </h2>
                </div>

                {/* Form */}
                <form className="p-8" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Name */}
                    <div>
                      <label className="block text-sm text-gray-600 mb-2">
                        Your name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm text-gray-600 mb-2">
                        Email ID <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                    </div>

                    {/* Mobile */}
                    <div>
                      <label className="block text-sm text-gray-600 mb-2">
                        Mobile Number <span className="text-red-500">*</span>
                      </label>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                          +91
                        </span>
                        <input
                          type="tel"
                          name="mobile"
                          value={form.mobile}
                          onChange={handleChange}
                          className="flex-1 p-3 border border-gray-300 rounded-r-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    {/* Service */}
                    <div>
                      <label className="block text-sm text-gray-600 mb-2">
                        Interested Service <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <select
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent appearance-none"
                        >
                          <option value="">Select Service</option>
                          <option value="web-development">Web Development</option>
                          <option value="mobile-app">Mobile App</option>
                          <option value="software">Software Development</option>
                        </select>
                        {/* <ChevronDownIcon className="absolute right-3 top-3 w-5 h-5 text-gray-400 pointer-events-none" />
                   */}
                      </div>
                    </div>
                    {/* Budget */}
                    <div>
                      <label className="block text-sm text-gray-600 mb-2">
                        Project Budget
                      </label>
                      <div className="relative">
                        <select
                          name="budget"
                          value={form.budget}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent appearance-none"
                        >
                          <option value="">Select Budget</option>
                          <option value="under-10k">Under $10,000</option>
                          <option value="10k-50k">$10,000 - $50,000</option>
                          <option value="50k-plus">$50,000+</option>
                        </select>

                      </div>
                    </div>

                    {/* Project Type */}
                    <div>
                      <label className="block text-sm text-gray-600 mb-2">
                        Project Type <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <select
                          name="type"
                          value={form.type}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent appearance-none"
                        >
                          <option value="">Select Type</option>
                          <option value="new">New Project</option>
                          <option value="existing">Existing Project</option>
                          <option value="maintenance">Maintenance</option>
                        </select>

                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <label className="block text-sm text-gray-600 mb-2">
                      Tell us more about your project <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="details"
                      rows={4}
                      value={form.details}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>

                  {/* File Upload */}
                  <div className="mb-6">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <label className="block text-xs mb-1" htmlFor="custom-file">
                            Select or Drag your file here
                          </label>
                          <input
                            type="file"
                            id="custom-file"
                            style={{ display: "none" }}
                            onChange={onFileChange}
                          />

                          {file && <p>{file.name} is selected</p>}
                        </div>
                        <button className="bg-[#005D89] text-white px-6 py-2 rounded-md hover:shadow-[0_0_12px_rgba(0,0,0,0.5)] hover:bg-[#005D89]">
                          Upload
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Section */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    {/* Newsletter Checkbox */}
                    <div className="mb-4 lg:mb-0">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          checked={form.newsletter}
                          onChange={handleChange}
                          name="newsletter"
                          className="mr-3 h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                        />
                        <span className="text-sm text-black-600">Subscribe to our Newsletter</span>
                      </label>
                    </div>

                    {/* NDA Notice */}
                    <p className="text-sm text-black-400 font-bold">
                      All Projects are protected by NDA and IPs
                    </p>
                  </div>

                  {/* reCAPTCHA */}
                  <div className="mb-6">
                    <div className="flex items-center p-3 border border-gray-300 rounded-md bg-gray-50">
                      <input
                        type="checkbox"
                        name="notRobot"
                        checked={form.notRobot}
                        onChange={handleChange}
                        className="mr-3 h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                      />
                      <span className="text-sm text-gray-700 mr-auto">I'm not a robot</span>
                      <div className="text-xs text-gray-500">
                        <div>reCAPTCHA</div>
                        <div className="text-xs">Privacy - Terms</div>
                      </div>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-[#005D89] w-full text-white px-8 py-3 rounded-md hover:shadow-[0_0_12px_rgba(0,0,0,0.5)] hover:bg-[#005D89]">
                      Submit
                    </button>
                  </div>
                </form>

                <div className="bg-[#005D89] text-white p-2 px-4">
                  <h2 className="text-lg font-semibold"></h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-lg font-bold text-center mt-8 mb-3">
        You Can Also Contact Us By
      </h3>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3 text-center">
        <div className="bg-white rounded shadow p-4">
          <p className="font-bold mb-1">Sales</p>
          <p className="text-xs mb-1">IN: +91-942-070-8662<br />US: +1-754-236-7870</p>
          <p className="text-xs mb-1">contact@sapphiresolutions.net</p>
        </div>
        <div className="bg-white rounded shadow p-4">
          <p className="font-bold mb-1">Careers (Jobs)</p>
          <p className="text-xs mb-1">IN: +91-903-607-8054<br />US: +1-754-236-7870</p>
          <p className="text-xs mb-1">careers@sapphiresolutions.net</p>
        </div>
        <div className="bg-white rounded shadow p-4">
          <p className="font-bold mb-1">Product</p>
          <p className="text-xs mb-1">www.vidayalayachodaksoftware.com<br />www.eaccounts.co.in</p>
        </div>
      </div>
      <div>
        <SuccessMatrix />
        {/* <InnovativeSlider /> */}
        <div className="w-full py-16 px-4 bg-gray-50">
          <h1 className="text-5xl font-bold text-center mb-16 text-gray-900">
            Process We Follow
          </h1>

          <div className="flex justify-center items-center max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:-space-x-8 space-y-4 md:space-y-0 relative px-4 md:px-0">
              {processes.map((process, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-start px-10 py-12 w-full md:w-[250px] h-[240px] rounded-[20%] relative"
                  style={{
                    backgroundColor: process.bgColor,
                    mixBlendMode: 'multiply',
                    zIndex: index
                  }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">
                    {process.title}
                  </h3>
                  <ul className="text-center space-y-1">
                    {process.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-sm text-gray-700">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${Bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}

        >
          <div className="absolute inset-0 bg-blue-700/20"></div>

          <div className="relative z-10 px-8 py-4 mx-auto max-w-5xl">
            <div className="text-center mb-4">
              <h1 className="text-4xl md:text-3xl font-bold text-white mb-4">
                Glance through our creations and presence
              </h1>
              <p className="text-lg text-white/90 max-w-4xl mx-auto">
                We are a team of qualified Salesforce Development Professionals adept at expanding your current system's capabilities via the
                development and integration of Salesforce CRM.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-2xl p-4 text-center shadow-lg">
                  <h2 className="text-4xl font-bold text-blue-700 mb-2">{stat.number}<span>{stat.suffix}</span></h2>
                  <p className="text-blue-700 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-2xl p-4 text-center shadow-lg">
                  <div className="text-5xl ">{feature.icon}</div>
                  <p className="text-blue-700 font-medium">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Brands />
        <CTAWorkTogether />
        <CTASubscribe />
      </div>
    </section>
  );
}
