import { useTranslation } from "react-i18next";
import ReportImg1 from "../assets/hero1.png";
import ReportImg2 from "../assets/hero1.png";
import ReportImg3 from "../assets/hero1.png";
import ReportImg4 from "../assets/hero1.png";

const AnnualReportsPage = () => {
  const { t } = useTranslation();

  const reports = [
    { year: "2024", image: ReportImg1 },
    { year: "2023", image: ReportImg2 },
    { year: "2022", image: ReportImg3 },
    { year: "2021", image: ReportImg4 },
  ];

  return (
    <section className="bg-[#4A0404] min-h-screen py-24">
      <div className="max-w-[1500px] mx-auto px-10">

        {/* HEADER */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[2px] bg-[#FACC15]"></div>
            <p className="text-[#FACC15] uppercase tracking-widest text-sm font-semibold">
              {t("investorRelations")}
            </p>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            {t("annualReportsTitle")}
          </h1>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-4 gap-8">
          {reports.map((report, index) => (
            <div
              key={index}
              className="group border border-[#FACC15]/30 bg-[#3a0000] p-5 rounded-md"
            >
              
              {/* IMAGE */}
              <div className="overflow-hidden rounded-sm">
                <img
                  src={report.image}
                  alt={t(`annualReports.${report.year}`)}
                  className="w-full h-[420px] object-cover"
                />
              </div>

              {/* INFO */}
              <div className="mt-6 text-white">
                <p className="text-sm text-white/60">
                  {t("annualReportLabel")} {report.year}
                </p>

                <h3 className="mt-2 font-semibold text-lg">
                  {t(`annualReports.${report.year}`)}
                </h3>

                <button className="mt-4 text-[#FACC15] font-semibold">
                  {t("download")} →
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AnnualReportsPage;