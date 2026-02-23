import { useTranslation } from "react-i18next";
import Navbar from "../../components/Navbar";
import VisionMission from "./VisionMission";
import Milestones from "./Milestones";
import Management from "./Management";
import BusinessActivities from "./BusinessActivities";

const   About = () => {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />

      <main>

        {/* HERO SECTION */}
        <section className="relative pt-40 pb-28 bg-[#BEC5A4] text-black overflow-hidden">
          
          {/* Gold Overlay Accent */}
          <div className="absolute inset-0 bg-[#FFFFFF] opacity-95"></div>

          {/* Decorative Gold Line */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#F1EAD8] via-[#D4B76A] to-[#C6A75E]"></div>

          <div className="relative max-w-6xl mx-auto px-6 text-center">
            
            {/* Breadcrumb */}
            <p className="text-sm text-black/70 tracking-widest uppercase mb-6">
              Home / {t("companyProfile")}
            </p>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wider">
              {t("companyProfile")}
            </h1>

            {/* Gold Divider */}
            <div className="w-24 h-1 bg-[#C6A75E] mx-auto mt-8"></div>

          </div>
        </section>

        {/* CONTENT SECTIONS */}
        <VisionMission />
        <Milestones />
        <Management />
        <BusinessActivities />

      </main>
    </>
  );
};

export default About;