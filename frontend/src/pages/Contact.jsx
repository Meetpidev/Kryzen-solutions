import { useState } from "react";
import { CTASubscribe } from "../components/FeaturedLogos";
import InnovativeSlider from "../components/InnovativeSlider";
import SuccessMatrix from "../components/SuccessMatrix";
import axios from "axios";

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
    formDataToSend.append('attachment', fileInput.files[0]);
  }

  try {
    const response = await axios.post('http://localhost:3000/api/schedule-meeting', formDataToSend, {
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
  return (
    <section className="bg-[#F0F8FF] w-full mx-auto px-4 py-20 mt-27">
      <h1 className="font-bold text-2xl md:text-3xl text-center mb-2">
        Let's Navigate Digital Transformation Together!!!
      </h1>
      <p className="text-center text-gray-600 mb-6">
        Every day, Kryzen experts help businesses around the globe accelerate digital transformation and build a more resilient, sustainable, and inclusive future Together.
      </p>

      <div className="flex flex-col lg:flex-row gap-6 m-7">
        <div className="flex flex-col flex-1 gap-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center mb-2">
            <div>
              <div className="text-blue-800 font-bold text-xl md:text-2xl">20+</div>
              <div className="text-gray-600 text-xs">Years Experience</div>
            </div>
            <div>
              <div className="text-blue-800 font-bold text-xl md:text-2xl">2800+</div>
              <div className="text-gray-600 text-xs">Satisfied Clients</div>
            </div>
            <div>
              <div className="text-blue-800 font-bold text-xl md:text-2xl">1500+</div>
              <div className="text-gray-600 text-xs">Completed Projects</div>
            </div>
            <div>
              <div className="text-blue-800 font-bold text-xl md:text-2xl">200+</div>
              <div className="text-gray-600 text-xs">IT Professional</div>
            </div>
            <div>
              <div className="text-blue-800 font-bold text-xl md:text-2xl">95%</div>
              <div className="text-gray-600 text-xs">Client Retention</div>
            </div>
            <div>
              <div className="text-blue-800 font-bold text-xl md:text-2xl">18+</div>
              <div className="text-gray-600 text-xs">Industry Served</div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow border p-3 flex items-center gap-3">
            <div className="flex-shrink-0 flex flex-col items-center justify-center">
              <div className="text-yellow-400 text-lg mb-1">★★★★★</div>
              <img src="reviewer_avatar.jpg" alt="Reviewer avatar" className="rounded-full w-10 h-10 mb-1" />
            </div>
            <div>
              <p className="text-xs md:text-sm mb-1 font-medium">While the project is ongoing, the results so far have met the expectations of the internal team. Sapphire Software Solutions has been prepared to accommodate requests and changes if the project development. They’ve been ...</p>
              <p className="font-semibold text-xs">Hesham Abdelfattah</p>
              <p className="text-xs text-gray-500">London, United Kingdom</p>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="shadow-2xl bg-white">
            <div className="bg-blue-800 text-white px-4 py-2 font-semibold mb-3">
              Questions? Contact us for Sales Enquiry!
            </div>
            <form className="space-y-3 p-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input type="text" name="name" placeholder="Your name*" className="border p-2 rounded w-full" required
                  value={form.name}
                  onChange={handleChange}
                />
                <input type="email" name="email" placeholder="Email*" className="border p-2 rounded w-full" required
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input type="tel" name="mobile" placeholder="+91 Mobile Number*" className="border p-2 rounded w-full" required
                  value={form.mobile}
                  onChange={handleChange}
                />
                <input type="text" name="service" placeholder="Interested Service*" className="border p-2 rounded w-full" required
                  value={form.service}
                  onChange={handleChange}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <select className="border p-2 rounded w-full"
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                >
                  <option>Project Budget</option>
                  <option>Below $10k</option>
                  <option>$10k-$50k</option>
                  <option>Above $50k</option>
                </select>
                <select className="border p-2 rounded w-full"
                  name="type"
                  value={form.type}
                  onChange={handleChange}
                >
                  <option>Project Type</option>
                  <option>Web Development</option>
                  <option>Mobile App</option>
                  <option>Other</option>
                </select>
              </div>
              <textarea rows={3} placeholder="Tell us more about your project*" className="border p-2 rounded w-full" required
                name="details"
                value={form.details}
                onChange={handleChange}
              ></textarea>
              <div className="flex flex-col sm:flex-row gap-2 items-center">
                <div className="flex-1 w-full">
                  <label className="block text-xs mb-1">Select or Drag your file here</label>
                  <input type="file" className="w-full border px-2 py-1 rounded" />
                </div>
                <button type="button" className="bg-blue-600 text-white rounded px-4 py-2 text-xs">Upload</button>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <input type="checkbox" id="newsletter"
                  name="newsletter"
                  checked={form.newsletter}
                  onChange={handleChange}
                />
                <label htmlFor="newsletter">Subscribe to our Newsletter</label>
                <span className="ml-auto flex items-center">All Projects are protected by NDA and IPs</span>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="notRobot" required
                  name="notRobot"
                  checked={form.notRobot}
                  onChange={handleChange}
                />
                <label htmlFor="notRobot" className="text-xs">I'm not a robot</label>
              </div>
              <div className="flex gap-2">
                <button type="button" className="flex-1 bg-blue-600 text-white rounded px-4 py-2">Schedule a meeting</button>
                <button type="submit" className="flex-1 bg-blue-800 text-white rounded px-4 py-2">Submit</button>
              </div>
            </form>

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
        <InnovativeSlider />
        <CTASubscribe />
      </div>
    </section>
  );
}
