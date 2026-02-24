import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./Home";
import About from "./pages/about/About";
import Contact from "./pages/kontak/ContactSection";

// GOVERNANCE
import Governance from "./pages/governance/Governance";
// CSR
import CSR from "./pages/csr/Csr";

// NEWS
import News from "./pages/news/News";

import Investor from "./pages/investor/Investor";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* MAIN */}
        <Route path="/" element={<Home />} />
        <Route path="/about/*" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* GOVERNANCE */}
        <Route path="/governance/*" element={<Governance />} />
        {/* ================= CSR ================= */}
        <Route path="/csr/*" element={<CSR />} />

        {/* ================= NEWS ================= */}
        <Route path="/news/*" element={<News />} />
        {/* ================= INVESTOR ================= */}
        <Route path="/investor/*" element={<Investor />} />
      </Routes>

      <Footer />
    </>
  );
}