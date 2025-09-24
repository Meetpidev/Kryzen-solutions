import Hero from "../components/Hero.jsx";
import LogoCarousel from "../components/LogoCarousel.jsx";
import AboutUs from "../components/AboutUs.jsx";
import Brands from "../components/Brands.jsx";
import Services from "../components/Service";
import Banner from "../components/Banner.jsx";
import RecentProjects from "../components/RecentProjects.jsx";
import ProcessWeFollow from "../components/ProcessWeFollow.jsx";
import EngagementModels from "../components/EngagementModels.jsx";
import TechnologiesTabs from "../components/TechnologiesTabs.jsx";
import PremiumServices from "../components/PremiumServices.jsx";
import SuccessMatrix from "../components/SuccessMatrix.jsx";
import TestimonialSlider from "../components/TestimonialSlider.jsx";
import BlogCards from "../components/BlogCards.jsx";
import { CTASubscribe, CTAWorkTogether } from "../components/FeaturedLogos.jsx";
import DigitalTransformationPopup from "../components/DigitalTransformationPopup.jsx";
import ClientReview from "../components/ClientReview.jsx";

function Home() {
  return (
    <div>
      <Hero />
      <LogoCarousel />
      <DigitalTransformationPopup />
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
      <ClientReview />
      <BlogCards />
      <CTAWorkTogether />
      <CTASubscribe />
    </div>
  )
}

export default Home
