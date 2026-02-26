import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { useTranslation } from "react-i18next";

const Annual = () => {
  const { t } = useTranslation();

  const reports = [
    {
      year: "2024",
      title: t("annual.report2024Title"),
      description: t("annual.report2024Desc"),
    },
    {
      year: "2023",
      title: t("annual.report2023Title"),
      description: t("annual.report2023Desc"),
    },
    {
      year: "2022",
      title: t("annual.report2022Title"),
      description: t("annual.report2022Desc"),
    },
  ];

  return (
    <section className="py-16 px-6 md:px-12 bg-[#f9f9f9] min-h-screen">
      
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-[#B59D55]">
          {t("annual.title")}
        </h2>

        <p className="text-gray-600 mt-3 max-w-2xl">
          {t("annual.description")}
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {reports.map((report, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition"
          >
            <span className="text-sm font-semibold text-[#B59D55]">
              {report.year}
            </span>

            <h3 className="text-xl font-bold mt-2">
              {report.title}
            </h3>

            <p className="text-gray-600 mt-3 text-sm">
              {report.description}
            </p>

            <button className="mt-6 inline-flex items-center gap-2 px-5 py-2 bg-[#B59D55] text-white rounded-xl hover:opacity-90 transition">
              <Download size={16} />
              {t("annual.download")}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Annual;