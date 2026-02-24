import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./Home";
import About from "./pages/about/About";
import Contact from "./pages/kontak/ContactSection";

// GOVERNANCE
import Committees from "./pages/governance/Committees";
import CorporateSecretary from "./pages/governance/CorporateSecretary";
import GovernanceInformation from "./pages/governance/GovernanceInformation";
import BudgetDocument from "./pages/governance/budgetDocument";

import CSR from "./pages/csr/Csr";
export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* MAIN */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* GOVERNANCE */}
        <Route path="/governance/committees" element={<Committees />} />
        <Route path="/governance/secretary" element={<CorporateSecretary />} />
        <Route path="/governance/information" element={<GovernanceInformation />} />
        <Route path="/governance/budget" element={<BudgetDocument />} />

        {/* ================= CSR ================= */}

{/* ================= CSR ================= */}
<Route path="/csr" element={<CSR />}>
  <Route path="policy" element={<CSR />} />
  <Route path="community" element={<CSR />} />
  <Route path="environment" element={<CSR />} />
  <Route path="sustainability" element={<CSR />} />
  <Route path="esg" element={<CSR />} />
</Route>

      </Routes>

      <Footer />
    </>
  );
}