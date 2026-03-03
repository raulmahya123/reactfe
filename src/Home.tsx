import Hero from "./components/Hero";
import CompanyOverview from "../src/components/CompanyOverview";
import KeyHighlights from "../src/components/KeyHighlights";
import InvestorNewsSection from "../src/components/InvestorNewsSection";

const Home = () => {
  return (
    <>
      <Hero />
      <CompanyOverview />
      <InvestorNewsSection />
      <KeyHighlights />
    </>
  );
};

export default Home;