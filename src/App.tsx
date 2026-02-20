import Navbar from "./components/Navbar";
import 'i18next';
import Hero from "./components/Hero";
import CompanyOverview from "./components/CompanyOverview";
import KeyHighlights from "./components/KeyHighlights";
import NewsSection from "./components/NewsSection";
import Footer from "./components/Footer";
import InvestorNewsSection from "./components/InvestorNewsSection";
import AnnualReportsPage from "./components/AnnualReportsPage";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar /> 
  <Hero />
  <CompanyOverview />
  <InvestorNewsSection />
  <KeyHighlights />
  <NewsSection />
  <AnnualReportsPage />
     <Footer />
    </div>
  );
}