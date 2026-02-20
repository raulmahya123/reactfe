import Hero from "./components/Hero";
import CompanyOverview from "../src/components/CompanyOverview";
import KeyHighlights from "../src/components/KeyHighlights";
import NewsSection from "../src/components/NewsSection";
import InvestorNewsSection from "../src/components/InvestorNewsSection";
import AnnualReportsPage from "../src/components/AnnualReportsPage";

const Home = () => {
  return (
    <>
      <Hero />
      <CompanyOverview />
      <InvestorNewsSection />
      <KeyHighlights />
      <NewsSection />
      <AnnualReportsPage />
    </>
  );
};

export default Home;