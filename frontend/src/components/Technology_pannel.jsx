import { Link } from "react-router-dom";

// Note: techCards prop is assumed to be an array of objects like:
// [{ category: "Frontend", items: ["React", "Vue", "Angular"] }, ...]

export default function Technology_pannel({ techCards = [] }) {
  // Define color constants for clarity
  const PRIMARY_BLUE = "bg-[#065a89]";
  const LIGHT_BLUE_BG = "bg-[#eaf2f8]";
  const TEXT_PRIMARY = "text-[#065a89]";
  const TEXT_WHITE = "text-white";

  // The ROW_HEIGHT variable is removed as Tailwind handles flexible height better,
  // letting the content dictate the height, especially on mobile.

  return (
    <div className="w-full max-w-7xl mx-auto my-10 px-4 md:px-6 font-sans">
      {/* Title */}
      <h1 className="text-center text-2xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12">
        Technology Stack That Krayzen Mobile Developers Use Proficiently
      </h1>
      
      {/* Technology Cards Container */}
      <div>
        {techCards.map((section, idx) => (
          <div
            key={section.category + idx}
            className="flex flex-col md:flex-row items-stretch mb-4 tech-row"
          >
            {/* Category Panel (Left/Top) */}
            <div
              className={`
                ${PRIMARY_BLUE} ${TEXT_WHITE} font-bold 
                text-lg 
                p-4 md:p-8 
                md:w-[300px] // CATEGORY_WIDTH equivalent for desktop
                flex items-center justify-start 
                rounded-t-xl md:rounded-tr-none md:rounded-l-xl 
                min-h-[54px] // ROW_HEIGHT equivalent min height
                break-words normal-case // wordBreak and whiteSpace fixes
              `}
            >
              {section.category}
            </div>

            {/* Items Panel (Right/Bottom) */}
            <div
              className={`
                flex-1 flex flex-wrap items-center 
                ${LIGHT_BLUE_BG} 
                rounded-b-xl md:rounded-bl-none md:rounded-r-xl 
                p-2 md:p-3
                min-w-0
              `}
            >
              {section.items.map((item, itemIdx) => (
                <span
                  key={item + itemIdx}
                  className={`
                    bg-white ${TEXT_PRIMARY} font-medium 
                    text-sm md:text-base 
                    m-1.5 md:m-2 
                    px-4 md:px-5 py-2 
                    rounded-xl 
                    shadow-sm
                    max-w-[210px] // To prevent overly wide chips
                    truncate // Added truncate for text overflow (if needed)
                    inline-block // Ensures margin and padding work consistently
                  `}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Contact Link */}
      <div className="flex justify-center mt-9 md:mt-12">
        <Link 
          to="/contact-us" 
          className={`
            ${PRIMARY_BLUE} ${TEXT_WHITE} 
            px-8 py-4 
            rounded-lg 
            text-lg font-semibold 
            cursor-pointer 
            transition duration-300 ease-in-out 
            hover:shadow-lg hover:brightness-110
            inline-block
          `}
        >
          Share Your Requirement
        </Link>
      </div>
    </div>
  );
}