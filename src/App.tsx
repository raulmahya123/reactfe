import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./Home";
import About from "./pages/about/About";
import Contact from "./pages/kontak/ContactSection";

// ⬇ IMPORT TAMBAHAN
import Committees from "./pages/governance/Committees";
import CorporateSecretary from "./pages/governance/CorporateSecretary";
import GovernanceInformation from "./pages/governance/GovernanceInformation";
import BudgetDocument from "./pages/governance/budgetDocument"; // ← TAMBAHAN
export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* GOVERNANCE ROUTES */}
        <Route path="/governance/committees" element={<Committees />} />
        <Route path="/governance/secretary" element={<CorporateSecretary />} />
        <Route path="/governance/information" element={<GovernanceInformation />} />

        {/* CSR ROUTE */}
        <Route path="/governance/budget" element={<BudgetDocument />} /> {/* ← TAMBAHAN */}

      </Routes>

      <Footer />
    </>
  );
}