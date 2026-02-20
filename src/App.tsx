import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./Home";
import About from "./pages/about/About";
import Contact from "./pages/kontak/ContactSection"; // ← tambahkan ini

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> {/* ← tambahkan ini */}
      </Routes>

      <Footer />
    </>
  );
}