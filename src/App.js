import Footer from "./Footer";
import HeroSection from "./Hero-section";
import Navbar from "./Navbar";
import ProPricing from "./Pro-pricing";
import ScrollingCards from "./Scrolling-cards";
import ShadowCard from "./Shadow-card";
import TakeQuiz from "./Take-quiz";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <TakeQuiz />
      <ShadowCard />
      <ProPricing />
      <ScrollingCards />
      <Footer />
    </div>
  );
}

export default App;
