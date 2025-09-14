import { lazy } from "react"
import PrivacyImg from "../public/privacy.png";

const CTASubscribe = lazy(() => import("../components/FeaturedLogos").then(module => ({ default: module.CTASubscribe })));
const CTAWorkTogether = lazy(() => import("../components/FeaturedLogos").then(module => ({ default: module.CTAWorkTogether })));

function Privacy() {
  return (
    <>
      <section className="bg-blue-50 mt-31 md:mt-30">
        <div className="max-w-6xl mx-auto px-4 flex flex-col-reverse md:flex-row justify-between items-center gap-8">
          <div className="w-full md:w-1/2 py-30">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Privacy policy</h2>
            <p className="text-gray-700 mb-6 text-justify text-[1.245rem]">
              Kryzen is not only a globally recognized IT company but also a family filled with talented experts that help global brands, enterprises, mid-size businesses or even startups with innovative solutions.
            </p>
            <button className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-3 rounded-md font-semibold flex items-center gap-2 transition">
              Get In Touch <span className="ml-2">&#8594;</span>
            </button>
          </div>

          <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
            <div className="relative flex flex-col items-center">
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-200 rounded-full -z-10" />
              <img
                src={PrivacyImg}
                alt="Privacy"
                className="w-76 h-76 rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="bg-white p-8 max-w-6xl mx-auto text-gray-900 text-[1.125rem]">
        <div className="mb-4">
          <p className="font-semibold">Effective Date:{" "}<span className='font-bold'>07/09/2025</span> </p>
          <p className="font-semibold">Last Updated:{" "}<span className='font-bold'>07/09/2025</span></p>
        </div>
        <p className="mb-6">
          <span className="font-semibold">Kryzen Software Solutions</span> (“we,” “our,” “us”) respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you interact with our website, services, and communication tools.
        </p>

        <h2 className="font-bold text-xl mb-3">1. Information We Collect</h2>
        <p className="mb-2">We may collect the following types of information:</p>
        <div className="mb-4 space-y-3">
          <div>
            <span className="font-semibold">1.1 Personal information you provide voluntarily</span><br />
            Name, email address, phone number, company name, job title. Message content sent via contact forms, proposals, or messaging services. Any other information you choose to provide.
          </div>
          <div>
            <span className="font-semibold">1.2 Automatically collected information</span><br />
            When you visit our site, we may automatically collect IP address, browser type, operating system, pages viewed, time spent on the site, referring website, device identifiers and other technical data.
          </div>
          <div>
            <span className="font-semibold">1.3 Cookies & tracking technologies</span><br />
            We use cookies and similar technologies to improve functionality, analyze traffic, and personalize your experience. You can manage or disable cookies through your browser settings.
          </div>
        </div>

        <h2 className="font-bold text-xl mb-3">2. How We Use Your Information</h2>
        <p className="mb-2">We use your information to:</p>
        <ul className="list-disc list-inside mb-6 space-y-1">
          <li>Deliver and improve our products, services, and website.</li>
          <li>Respond to inquiries, provide quotes, and process requests.</li>
          <li>Communicate with you about updates, promotions, and service changes.</li>
          <li>Maintain the security and integrity of our systems.</li>
          <li>Comply with legal obligations.</li>
        </ul>

        <h2 className="font-bold text-xl mb-3">3. How We Share Your Information</h2>
        <p className="mb-2">We do not sell your personal data. We may share your information with:</p>
        <ul className="list-disc list-inside mb-6 space-y-1">
          <li>Service providers who help us operate our business (e.g., hosting providers, analytics services, customer support tools).</li>
          <li>Business partners when you request joint services.</li>
          <li>Legal authorities when required by law or to protect our rights.</li>
        </ul>

        <h2 className="font-bold text-xl mb-3">4. Data Security & Retention</h2>
        <p className="mb-4">
          We implement industry-standard security measures to protect your data against unauthorized access, alteration, disclosure, or destruction.<br />
          We retain your information only for as long as necessary to fulfil the purposes outlined in this policy or as required by law.
        </p>

        <h2 className="font-bold text-xl mb-3">5. Your Privacy Rights</h2>
        <p className="mb-2">Depending on your location, you may have the right to:</p>
        <ul className="list-disc list-inside mb-6 space-y-1">
          <li>Access, correct, or delete your personal data.</li>
          <li>Object to or restrict processing.</li>
          <li>Withdraw consent for communications.</li>
          <li>Request a copy of your data.</li>
        </ul>

        <h2 className="font-bold text-xl mb-3">6. Third-Party Links & Services</h2>
        <p className="mb-6">
          Our site may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. Please review their policies before providing personal data.
        </p>

        <h2 className="font-bold text-xl mb-3">7. International Data Transfers</h2>
        <p className="mb-6">
          If you access our services from outside India, your data may be transferred to and processed in countries that may have different data protection laws.
        </p>

        <h2 className="font-bold text-xl mb-3">8. Updates to This Policy</h2>
        <p className="mb-6">
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised “Last Updated” date.
        </p>

        <h2 className="font-bold text-xl mb-3">9. Contact Us</h2>
        <address className="not-italic mb-1">
          Kryzen Software Solutions<br />
          Email:{" "}
          <a href="mailto:contact@kryzensoftwaresolutions.com" className="text-blue-600 underline">
            contact@kryzensoftwaresolutions.com
          </a><br />
          Address: C-11 Monark Appartment Nidhi Park Society near Ratnba School Thakkarnager, Ahmedabad, 382350<br />
          Phone: <a href="tel:+917041252829" className="text-blue-600 underline">7041252829</a>, <a href="tel:+916353576084" className="text-blue-600 underline">6353576084</a>
        </address>
      </div>
      <CTAWorkTogether />
      <CTASubscribe />
    </>
  )
}

export default Privacy
