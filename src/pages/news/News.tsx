import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import PressRelease from "./PressRelease";
import MediaCoverage from "./MediaCoverage";
import CorporateActions from "./CorporateActions";

const News = () => {
  const location = useLocation();

  useEffect(() => {
    const section = location.pathname.split("/")[2];

    if (section) {
      const element = document.getElementById(section);

      if (element) {
        const navbarHeight = 120; // sesuaikan dengan tinggi navbar kamu
        const y =
          element.getBoundingClientRect().top +
          window.pageYOffset -
          navbarHeight;

        window.scrollTo({
          top: y,
          behavior: "smooth",
        });
      }
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [location]);

  return (
    <main className="bg-white text-gray-800">

      {/* HERO */}
      <section className="pt-36 pb-24 bg-[#F4F6F3]">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-[#2F3E34]">
            News
          </h1>

          <div className="w-20 h-[3px] bg-[#C6A75E] mx-auto mt-6"></div>

        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24 space-y-24">
        <PressRelease />
        <MediaCoverage />
        <CorporateActions />
      </section>

    </main>
  );
};

export default News;