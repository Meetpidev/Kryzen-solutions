import Carousel from "../components/Carousel.jsx";
import LogoCarousel from "../components/LogoCarousel.jsx";
import Brands from "../components/Brands.jsx";
import Servie from "../components/Service"
import Services from "../components/Service";
import Banner from "../components/Banner.jsx";
import RecentProjects from "../components/RecentProjects.jsx";
import ProcessWeFollow from "../components/ProcessWeFollow.jsx";
import EngagementModels from "../components/EngagementModels.jsx";
import TechnologiesTabs from "../components/TechnologiesTabs.jsx";
import PremiumServices from "../components/PremiumServices.jsx";
import SuccessMatrix from "../components/SuccessMatrix.jsx";
import InnovativeSlider from "../components/InnovativeSlider.jsx"
import PodcastsSection from "../components/PodcastsSection.jsx";
import CaseStudySlider from "../components/CaseStudySlider.jsx";
import TestimonialSlider from "../components/TestimonialSlider.jsx";
import BlogCards from "../components/BlogCards.jsx";
import FeaturedLogos, { CTASubscribe, CTAWorkTogether } from "../components/FeaturedLogos.jsx";
import Demo from "../components/Demo.jsx";
import AboutUs from "../components/AboutUs.jsx";


function Home() {
  return (
    <div>
      <Demo />
        <LogoCarousel />
        <AboutUs />
        <Brands />
        <Services />
        <Banner />
        <RecentProjects />
        <ProcessWeFollow />
        <EngagementModels />
        <TechnologiesTabs />
        <PremiumServices />
        <SuccessMatrix />
        <TestimonialSlider />
        <BlogCards />
      <CTAWorkTogether />
      <CTASubscribe />
    </div>
  )
}

export default Home
