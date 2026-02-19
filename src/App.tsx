import Navbar from "./components/Navbar";
import 'i18next';
import Hero from "./components/Hero";
import CompanyOverview from "./components/CompanyOverview";
import KeyHighlights from "./components/KeyHighlights";
import BusinessSegments from "./components/BusinessSegments";
import Sustainability from "./components/Sustainability";
import InvestorSection from "./components/InvestorSection";
import NewsSection from "./components/NewsSection";
import Footer from "./components/Footer";
export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar /> 
  <Hero />
  <CompanyOverview />
  <KeyHighlights />
  <BusinessSegments />
  <Sustainability />
  <InvestorSection />
  <NewsSection />
     <Footer />
    </div>
  );
}