import { useTranslation } from "react-i18next";
import { Briefcase, Truck, BarChart3, Zap } from "lucide-react";

const SegmentCard = ({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) => (
  <div className="group bg-white p-10 rounded-2xl shadow-md hover:shadow-2xl transition duration-500 border border-gray-100 hover:-translate-y-2">
    <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#B2AC88]/10 text-[#BEC5A4] mb-6 group-hover:bg-[#BEC5A4] group-hover:text-white transition">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-[#B2AC88] mb-4">
      {title}
    </h3>
    <p className="text-gray-600 leading-relaxed">
      {desc}
    </p>
  </div>
);

const BusinessActivities = () => {
  const { t } = useTranslation();

  return (
    <section
      id="business"
      className="py-24 bg-gradient-to-b from-gray-50 to-white scroll-mt-32"
    >
      <div className="max-w-[1200px] mx-auto px-6 text-center mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-[#BEC5A4]">
          {t("businessActivities")}
        </h2>
        <div className="w-24 h-1 bg-[#C6A75E] mx-auto mt-6"></div>
        <p className="mt-8 text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
          {t("businessOverviewText")}
        </p>
      </div>

      <div className="max-w-[1300px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">

          <SegmentCard
            icon={<Briefcase size={26} />}
            title={t("businessSegment1Title")}
            desc={t("businessSegment1Desc")}
          />

          <SegmentCard
            icon={<BarChart3 size={26} />}
            title={t("businessSegment2Title")}
            desc={t("businessSegment2Desc")}
          />

          <SegmentCard
            icon={<Truck size={26} />}
            title={t("businessSegment3Title")}
            desc={t("businessSegment3Desc")}
          />

          <SegmentCard
            icon={<Zap size={26} />}
            title={t("businessSegment4Title")}
            desc={t("businessSegment4Desc")}
          />

        </div>
      </div>

      {/* Operational Excellence */}
      <div className="mt-28 bg-[#BEC5A4] text-white py-20">
        <div className="max-w-[1000px] mx-auto px-6 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold mb-6">
            {t("operationalExcellence")}
          </h3>
          <p className="text-white/80 leading-relaxed text-lg">
            {t("operationalExcellenceDesc")}
          </p>
          <div className="mt-10 w-24 h-1 bg-[#C6A75E] mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default BusinessActivities;