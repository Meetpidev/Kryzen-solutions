import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import google from "../public/google.webp";
import India from "../public/Make_in_india-removebg-preview.png";
import L1 from "../public/L1.png";
import L2 from "../public/L2.png";
import L3 from "../public/L3.png";
import L4 from "../public/L4.png";
import L5 from "../public/L5.png";
import L6 from "../public/L6.png";
import L7 from "../public/L7.png";
import L8 from "../public/L8.png";
import axios from "axios";

const STORAGE_KEYS = {
  impressions: "dtp_impressions", 
  lastShownAt: "dtp_last_shown_at", 
};

const FIVE_MIN_MS = 5 * 60 * 1000;

function readNumberFromStorage(key, defaultValue) {
  try {
    const raw = localStorage.getItem(key);
    const parsed = raw == null ? NaN : Number(raw);
    return Number.isFinite(parsed) ? parsed : defaultValue;
  } catch {
    return defaultValue;
  }
}

function writeNumberToStorage(key, value) {
  try {
    localStorage.setItem(key, String(value));
  } catch {
    // ignore
  }
}

export default function DigitalTransformationPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const timerRef = useRef(null);


 const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
   message: "",
    countryCode: "+91",
  });
  const [touched, setTouched] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");

  const impressions = useMemo(
    () => readNumberFromStorage(STORAGE_KEYS.impressions, 0),
    []
  );
  const lastShownAt = useMemo(
    () => readNumberFromStorage(STORAGE_KEYS.lastShownAt, 0),
    []
  );

  useEffect(() => {
    if (impressions >= 2) return;

    const now = Date.now();

    if (impressions === 0) {
      openAndRecord();
      return;
    }

    const elapsed = now - lastShownAt;
    const remaining = Math.max(FIVE_MIN_MS - elapsed, 0);

    if (remaining === 0) {
      openAndRecord();
    } else {
      timerRef.current = setTimeout(() => {
        openAndRecord();
      }, remaining);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };

  }, []);

  function openAndRecord() {
    setIsOpen(true);
    const newImpressions = Math.min(impressions + 1, 2);
    writeNumberToStorage(STORAGE_KEYS.impressions, newImpressions);
    writeNumberToStorage(STORAGE_KEYS.lastShownAt, Date.now());
  }

  function close() {
    setIsOpen(false);
  }

  function handleChange(field, value) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  function handleBlur(field) {
    setTouched((prev) => ({ ...prev, [field]: true }));
  }

  useEffect(() => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    if (!formData.phone.trim() || !/^\d{10,}$/.test(formData.phone.trim())) {
      errors.phone = "Please enter valid mobile number";
    }
    if (!formData.message.trim()) errors.message = "Message is required";
    setFormErrors(errors);
  }, [formData]);

  async function handleSubmit(e) {
    e.preventDefault();
    setTouched({ name: true, email: true, phone: true, message: true });
    setStatusMsg("");

    if (Object.keys(formErrors).length !== 0) return;

    setLoading(true);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
      countryCode: e.target.countryCode.value,
    };

    try {
      await axios.post("https://kryzen-solutions.onrender.com/api/send-email", formData);
      setStatusMsg("✅ Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "", countryCode: "+91" });
      setTimeout(() => close(), 1500);
    } catch (err) {
      console.error("Email send error:", err);
      setStatusMsg("❌ Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-[1000] flex items-center justify-center p-3 sm:p-4" role="dialog" aria-modal="true">
      <div className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-xl">
        <button
          aria-label="Close"
          onClick={close}
          className="absolute right-3 top-3 text-[#1a273b] hover:text-black bg-transparent rounded-full w-11 h-11 flex items-center justify-center z-20 cursor-pointer"
        >
          ×
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 bg-white rounded-xl overflow-hidden shadow-2xl">
          <div className="bg-[#eaf3ff] p-4 sm:p-6 md:p-8">
            <h2 className="text-xl sm:text-2xl md:text-[28px] font-extrabold text-[#1a273b]">Let's Navigate Digital Transformation Together!!!</h2>
            <hr className="w-12 border-[#1a273b] my-2 sm:my-3" />
            <p className="text-[#1a273b] text-sm sm:text-base">Like a Caterpillar turning in to a Butterfly.</p>


            <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-4 sm:mt-6 mb-4 sm:mb-6">
              <div className="flex flex-col items-center justify-center bg-white rounded p-2 shadow min-w-0">
                <img src={google} alt="Google" className="w-16 sm:w-20" />
                <span className="text-[#1a273b] font-semibold text-[10px] sm:text-[12px] mt-1">50+ REVIEWS</span>
              </div>
              <div className="flex flex-col items-center justify-center bg-white rounded p-2 shadow min-w-0">
                <img src={India} alt="make in india" className="w-17 sm:w-16" />
                <span className="text-[#1a273b] font-semibold text-[10px] sm:text-[12px] mt-1">MADE IN INDIA</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 text-[#1a273b] mb-6 md:mb-8">
              <div>
                <h3 className="font-extrabold text-2xl sm:text-[34px] leading-none">2+</h3>
                <p>Years Experience</p>
              </div>
              <div>
                <h3 className="font-extrabold text-2xl sm:text-[34px] leading-none">20+</h3>
                <p>Satisfied Clients</p>
              </div>
              <div>
                <h3 className="font-extrabold text-2xl sm:text-[34px] leading-none">15+</h3>
                <p>Projects Completed</p>
              </div>
            </div>

            {/* Logos row */}
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-3 items-center">
              {[L1,L2,L3,L4,L5,L6,L7,L8].map((src) => (
                <img key={src} src={src} alt="Company logo" className="h-15 sm:h-10 object-contain w-full" />
              ))}
            </div>
          </div>
        
          <div className="bg-white p-4 sm:p-6 md:p-8">
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#1a273b] mb-4 sm:mb-6">Contact With Our Experts</h3>

            <form onSubmit={handleSubmit} noValidate className="space-y-3">
              <div>
                <input
                  type="text"
                  placeholder="Your name *"
                  name="name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  onBlur={() => handleBlur("name")}
                  className={`w-full rounded border p-3 text-sm sm:text-base focus:outline-none ${touched.name && formErrors.name ? "border-red-500" : "border-gray-300"}`}
                  required
                />
                {touched.name && formErrors.name && (
                  <p className="text-red-600 text-xs mt-1">{formErrors.name}</p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email ID *"
                  name="email"
                  value={formData.email}
      onChange={(e) => handleChange("email", e.target.value)}
                  onBlur={() => handleBlur("email")}
                  className={`w-full rounded border p-3 text-sm sm:text-base focus:outline-none ${touched.email && formErrors.email ? "border-red-500" : "border-gray-300"}`}
                  required
                />
                {touched.email && formErrors.email && (
                  <p className="text-red-600 text-xs mt-1">{formErrors.email}</p>
                )}
              </div>

              <div>
                <div className="flex gap-2">
                  <select name="countryCode" className="w-[70px] sm:w-[90px] rounded border p-3 focus:outline-none border-gray-300 text-sm sm:text-base" defaultValue={"+91"}>
                    <option value="+91">+91</option>
                  </select>
                  <input
                    type="tel"
                    placeholder="Mobile Number *"
                    name="phone"
                    value={formData.phone}
        onChange={(e) => handleChange("phone", e.target.value)}
                    onBlur={() => handleBlur("phone")}
                    className={`flex-1 rounded border p-3 text-sm sm:text-base focus:outline-none ${touched.mobile && formErrors.mobile ? "border-red-500" : "border-gray-300"}`}
                    required
                  />
                </div>
                {touched.mobile && formErrors.mobile && (
                  <p className="text-red-600 text-xs mt-1">{formErrors.mobile}</p>
                )}
              </div>

              <div className="mb-2">
                <textarea
                  placeholder="Tell us more about your project*"
                  rows={4}
                  name="message"
                  value={formData.message}
      onChange={(e) => handleChange("message", e.target.value)}
                  onBlur={() => handleBlur("message")}
                  className={`w-full resize-none rounded border p-3 text-sm sm:text-base focus:outline-none ${touched.project && formErrors.project ? "border-red-500" : "border-gray-300"}`}
                  required
                />
                {touched.project && formErrors.project && (
                  <p className="text-red-600 text-xs mt-1">{formErrors.project}</p>
                )}
              </div>

              <Link to="/">
              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-[#034078] hover:bg-[#04315f] text-white font-bold py-3 rounded text-sm sm:text-base flex items-center justify-center ${
                  loading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-t-transparent border-white rounded-full animate-spin"></span>
                    Sending...
                  </div>
                ) : (
                  "Submit"
                )}
              </button>
              </Link>
              
              {statusMsg && (
                <p
                  className={`mt-2 text-center text-sm font-semibold ${
                    statusMsg.startsWith("✅")
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {statusMsg}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
