import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import {
    SiFacebook,
    SiX,
    SiLinkedin,
    SiInstagram,
    SiYoutube,
} from "react-icons/si";
import logo from "../public/logo.png";
import Google from "../public/google.webp";
import Left from "../public/left-leaf.svg";
import Right from "../public/right-leaf.svg";
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


function ReviewBadge({ platform, icon }) {

    const MADE_IN_INDIA_SIZE_CLASSES = "h-16 sm:h-20 md:h-24 lg:h-28 w-auto object-contain";

    return (
        <div className="flex flex-col items-center justify-center text-center">

            <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
                
               
                <div className="flex flex-col items-center justify-center">
                    
                    
                    <div className="flex items-center justify-center gap-1 sm:gap-2 mb-2">
                        
                        <img src={Left} alt="Left Leaf" className="h-6 sm:h-8" /> 
                        
                        <div className="flex flex-col items-center">
                            
                            <img src={Google} alt="Google" className="h-6 sm:h-8 md:h-10" /> 
                            
                            <div className="flex text-yellow-400 text-lg sm:text-xl md:text-2xl mt-1">
                                
                                <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.642 7.36L24 9.387l-6 5.856 1.42 8.28L12 18.887l-7.42 3.593L6 15.243l-6-5.856 8.358-1.44z"/></svg>
                                <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.642 7.36L24 9.387l-6 5.856 1.42 8.28L12 18.887l-7.42 3.593L6 15.243l-6-5.856 8.358-1.44z"/></svg>
                                <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.642 7.36L24 9.387l-6 5.856 1.42 8.28L12 18.887l-7.42 3.593L6 15.243l-6-5.856 8.358-1.44z"/></svg>
                                <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.642 7.36L24 9.387l-6 5.856 1.42 8.28L12 18.887l-7.42 3.593L6 15.243l-6-5.856 8.358-1.44z"/></svg>
                                <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 fill-current text-yellow-300" viewBox="0 0 24 24"><path d="M12 2.587l2.832 5.727L21.464 9.387l-5.728 5.58 1.352 7.95L12 18.887l-7.088 3.427 1.352-7.95-5.728-5.58 7.332-1.073L12 2.587z"/></svg>
                            </div>
                        </div>
                        <img src={Right} alt="Right Leaf" className="h-6 sm:h-8" />
                    </div>

                    
                    <p className="text-base sm:text-lg md:text-xl text-gray-700 font-bold mt-2">
                        50+ REVIEWS
                    </p>
                </div>

                
                <div className="hidden lg:block lg:ml-4">
                    <img src={MadeinIndia} alt="Made In India" className={MADE_IN_INDIA_SIZE_CLASSES} />
                </div>
            </div>
            
            
            <div className="lg:hidden mt-4 sm:mt-6">
                <img src={MadeinIndia} alt="Make In India" className={MADE_IN_INDIA_SIZE_CLASSES} />
            </div>
        </div>
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
                        // The 'icon' prop can be used if you have a custom star component or other dynamic icon
                        // For now, the stars are directly within ReviewBadge as per the image
                        icon={null} // Or pass your star component here if it's dynamic
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
                    <Link
                        to="/privacy-policy"
                        className="font-medium hover:underline"
                        data-testid="link-privacy"
                    >
                        Privacy Policy
                    </Link>
                    <span className="mx-2 font-medium hidden sm:inline">|</span>
                    <Link
                        to="/term-of-use"
                        className="font-medium hover:underline"
                        data-testid="link-terms"
                    >
                        Terms of Use
                    </Link>
                </div>
            </div>
        </footer>
    );
}
