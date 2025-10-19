import { Phone } from "lucide-react";
import {
    SiFacebook,
    SiX,
    SiLinkedin,
    SiInstagram,
    SiYoutube,
} from "react-icons/si";
import logo from "../public/logo.png";
import Google from "../public/google.webp";
import Left from "../public/left-leaf.jpg";
import Right from "../public/right-leaf.jpg";
import India from "../public/india_iamge.png";
import Email from "../public/icon_email_blue.jpg";
import MadeinIndia from "../public/Make_in_india-removebg-preview.png";


function ContactCard({ title, email, phones }) {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 px-6 w-full max-w-xs sm:max-w-sm">
            <h1 className="text-blue-800 font-semibold text-[1.1rem] mb-3">{title}</h1>
            <div className="space-y-2">
                <div className="flex items-center gap-2">
                    <img src={Email} alt="Email Icon" className="text-gray-600 w-4 h-4" />
                    <a
                        href={`mailto:${email}`}
                        className="text-gray-700 text-[1rem] hover:text-blue-600 transition-colors"
                        data-testid={`email-${email.split('@')[0]}`}
                    >
                        {email}
                    </a>
                </div>
                <div className="flex items-center gap-2">
                    <Phone className="text-gray-600 w-4 h-4" />
                    <div className="text-[1rem]">
                        {phones.map((phone, index) => (
                            <div key={index} className="text-gray-700">
                                {phone}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function OfficeCard({ country, flag, address, highlight }) {
    return (
        <div className={`bg-white rounded-lg shadow-md p-4 sm:p-[1rem] min-h-32 ${highlight
            ? "border-2 border-blue-500 ring-2 ring-blue-100 md:p-8"
            : ""
            }`}>

            <div className="flex items-center gap-3 mb-3">
                {flag}
                <h4 className="font-semibold text-gray-800 text-sm md:text-base">{country}</h4>
            </div>


            <div className="flex justify-between items-start text-xs md:text-sm text-gray-600">

                <div className="flex-1 pr-4 space-y-1">
                    {address.map((line, index) => (
                        <p key={index}>{line}</p>
                    ))}
                </div>


                <div className="flex-shrink-1">
                    <img src={India} alt="India" className="h-[10rem] w-[10rem] translate-y-[-2rem] object-contain" />
                </div>
            </div>
        </div>

    );
}

function ReviewBadge({ icon }) {
    return (
        <>
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 px-3 py-2 text-center sm:text-left">
            {icon}
            
            </div>
            <div className="sm:ml-2 translate-x-12">
                <p className="text-[1.125rem] text-gray-600 font-bold">50+ REVIEWS</p>
            </div>
            </>
    );
}

function SocialLink({ href, icon, label }) {
    return (
        <a
            href={href}
            className="w-8 h-8 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors"
            data-testid={`social-${label.toLowerCase()}`}
            aria-label={`Visit our ${label} page`}
        >
            {icon}
        </a>
    );
}

function IndiaFlag() {
    return (
        <div className="w-8 h-6 rounded-sm overflow-hidden flex flex-col border border-gray-300">
            <div className="h-2 bg-orange-500"></div>
            <div className="h-2 bg-white flex items-center justify-center relative">
                <div className="w-4 h-4 border border-blue-800 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-blue-800 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 border border-orange-500 rounded-full"></div>
                    </div>
                </div>
            </div>
            <div className="h-2 bg-green-600"></div>
        </div>
    );
}

export default function AppFooter() {
    const offices = [
        {
            country: "India(HQ)",
            flag: <IndiaFlag />,
            address: [
                "C-11 Monark Appartment Nidhi Park Society",
                "near Ratnba School Thakkarnager,",
                "Ahmedabad - 382350, Gujarat,",
                "INDIA"
            ]
        },
    ];

    return (
        <footer className="bg-gradient-to-br from-blue-50 to-blue-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
                <div className="flex flex-col lg:flex-row gap-8 mb-8">
                    <div className="flex-1 flex flex-col justify-between">
                        <div className="flex flex-col">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-26 h-26 rounded-lg flex items-center justify-center">
                                    <img src={logo} alt="Logo" />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold text-blue-900">Kryzen</h2>
                                    <p className="text-[1rem] text-gray-600">Software Solutions</p>
                                </div>
                            </div>


                            <div className="flex flex-col sm:flex-row gap-4 mb-6">
                                <ContactCard
                                    title="Contact For Sales"
                                    email="contact@kryzensoftwaresolutions.com"
                                    phones={["IN: +91 7041252829", "IN: +91 6353576084"]}
                                />
                                <ContactCard
                                    title="Contact for Career"
                                    email="career@kryzensoftwaresolutions.com"
                                    phones={["+91 7041252829"]}
                                />
                            </div>


                            <div className="lg:flex-row items-center justify-between gap-6 pt-6 border-t border-blue-200 flex flex-col">
                                <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start">
                                    <ReviewBadge
                                        platform="Google"
                                        icon={
                                            <>
                                                <div className="flex items-center gap-4">
                                                    <div className="flex items-center gap-4 flex-shrink-0">
                                                        <img src={Left} alt="Left" className="pr-1" />
                                                        <img src={Google} alt="Google" />
                                                        <img src={Right} alt="Right" className="pl-1" />
                                                    </div>
                                                    <div className="flex items-center justify-center flex-shrink-0">
                                                        <img src={MadeinIndia} alt="Made In India" className="h-8 sm:h-10 md:h-20 object-contain" />
                                                    </div>
                                                </div>

                                            </>
                                        }
                                    />
                                </div>


                                <div className="flex items-center gap-3 mt-9">
                                    <SocialLink
                                        href="#"
                                        icon={<SiFacebook className="text-white text-sm" />}
                                        label="Facebook"
                                    />
                                    <SocialLink
                                        href="#"
                                        icon={<SiX className="text-white text-sm" />}
                                        label="Twitter"
                                    />
                                    <SocialLink
                                        href="#"
                                        icon={<SiLinkedin className="text-white text-sm" />}
                                        label="LinkedIn"
                                    />
                                    <SocialLink
                                        href="#"
                                        icon={<SiInstagram className="text-white text-sm" />}
                                        label="Instagram"
                                    />
                                    <SocialLink
                                        href="#"
                                        icon={<SiYoutube className="text-white text-sm" />}
                                        label="YouTube"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 flex flex-col justify-center">
                        <OfficeCard
                            country={offices[0].country}
                            flag={offices[0].flag}
                            address={offices[0].address}
                            highlight={true}
                        />
                    </div>
                </div>
            </div>
            <div className="w-full bg-[#0582b3] py-3 text-white max-w-8xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0 text-sm sm:text-base md:text-[1.225rem]">
                <p className="font-medium text-center md:text-left">
                    © 2025 Kryzen Software Solutions. All rights reserved.
                </p>
                <div className="flex items-center justify-center space-x-4">
                    <a
                        href="/privacy-policy"
                        className="font-medium hover:underline"
                        data-testid="link-privacy"
                    >
                        Privacy Policy
                    </a>
                    <span className="mx-2 font-medium hidden sm:inline">|</span>
                    <a
                        href="/term-of-use"
                        className="font-medium hover:underline"
                        data-testid="link-terms"
                    >
                        Terms of Use
                    </a>
                </div>
            </div>
        </footer>
    );
}
