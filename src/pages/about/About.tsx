import Navbar from "../../components/Navbar";
import VisionMission from "./VisionMission";
import Milestones from "./Milestones";
import Management from "./Management";

const About = () => {
  return (
    <>
      <Navbar />

      <main>

        {/* HERO */}
        <section className="pt-40 pb-24 bg-[#4A0404] text-white text-center">
          <div className="max-w-6xl mx-auto px-6">
            <h1 className="text-5xl font-bold uppercase tracking-wide">
              Company Profile
            </h1>
          </div>
        </section>

        {/* CONTENT SECTIONS */}
        <VisionMission />
        <Milestones />
        <Management />

      </main>

    </>
  );
};

export default About;