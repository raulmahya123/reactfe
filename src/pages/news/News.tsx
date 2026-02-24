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
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <main>

      {/* HERO */}
      <section className="relative pt-40 pb-28 bg-white text-black">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wider">
            News
          </h1>
          <div className="w-24 h-1 bg-[#C6A75E] mx-auto mt-8"></div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24 space-y-32">

        <div id="press" className="max-w-6xl mx-auto px-6 scroll-mt-32">
          <PressRelease />
        </div>

        <div id="media" className="max-w-6xl mx-auto px-6 scroll-mt-32">
          <MediaCoverage />
        </div>

        <div id="actions" className="max-w-6xl mx-auto px-6 scroll-mt-32">
          <CorporateActions />
        </div>

      </section>

    </main>
  );
};

export default News;