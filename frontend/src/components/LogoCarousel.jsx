import L1 from "../public/L1.png";
import L2 from "../public/L2.png";
import L3 from "../public/L3.png";
import L4 from "../public/L4.png";
import L5 from "../public/L5.png";
import L6 from "../public/L6.png";
import L7 from "../public/L7.png";
import L8 from "../public/L8.png";
import L9 from "../public/L9.png";
import L10 from "../public/L10.png";
import L11 from "../public/L11.png";
import L12 from "../public/L12.png";
import L13 from "../public/Seal_of_Gujarat.svg.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const logos = [L1, L2, L3, L4, L5, L6, L7, L8, L9, L10, L11, L12,L13];

const settings = {
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: "linear"
};

export default function LogoCarousel() {
  return (

    <div className="xl:w-[90rem] md:w-[45rem] sm:w-[10rem] mx-0.5 ml-auto mr-auto mt-[2rem] mb-[2rem]">
      <Slider {...settings}>
        {logos.map((logo, i) => (
          <div key={i} className="container mx-0.5 px-0">
            <img
              src={logo}
              alt="logo"
              className="h-20 w-auto object-contain"
            />
          </div>
        ))}
      </Slider>
    </div>

  );
}
