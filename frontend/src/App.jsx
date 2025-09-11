import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";

const Header = lazy(() => import("./common/Header.jsx"));
const Home = lazy(() => import("./pages/Home.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Choose = lazy(() => import("./pages/Choose.jsx"));
const Events = lazy(() => import("./pages/Events.jsx"));
const CeoMsg = lazy(() => import("./pages/CeoMsg.jsx"));
const SubMenuPage = lazy(() => import("./pages/SubMenuPage.jsx"));
const Footer = lazy(() => import("./common/Footer.jsx"));
const AppFooter = lazy(() => import("./common/AppFooter.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const InsightFulVideos = lazy(() => import("./pages/InsightFulVideos.jsx"));
const Privacy = lazy(() => import("./pages/Privacy.jsx"));
const Terms = lazy(() => import("./pages/Terms.jsx"));
const Protect = lazy(() => import("./common/Protect.jsx"));
import "./App.css";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <>
      <Suspense fallback={
        <div className="loader-container">
          <div className="loader">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      }>
        <Protect />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-Kryzen-Software-Solutions" element={<About />} />
          <Route path="/choose" element={<Choose />} />
          <Route path="/ceo-message" element={<CeoMsg />} />
          <Route path="/events-activity" element={<Events />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/insightful-videos" element={<InsightFulVideos />} />
          <Route path="/service/:service/:subItem" element={<SubMenuPage />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/term-of-use" element={<Terms />} />
        </Routes>
        <Footer />
        <AppFooter />
      </Suspense>
    </>
  )
}

export default App
