import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { useTranslation } from "react-i18next";

const Quarterly = () => {
  const { t } = useTranslation();

  const quarterlyData = [
    { period: "Q3 2025", title: t("quarterly.q3Title") },
    { period: "Q2 2025", title: t("quarterly.q2Title") },
    { period: "Q1 2025", title: t("quarterly.q1Title") },
    { period: "Q4 2024", title: t("quarterly.q4Title") },
  ];

  return (
    <section className="py-16 px-6 md:px-12  min-h-screen">
      
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-[#B59D55]">
          {t("quarterly.title")}
        </h2>

        <p className="text-gray-600 mt-3 max-w-2xl">
          {t("quarterly.description")}
        </p>
      </div>

      {/* Highlight Latest */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-gray-100"
      >
        <span className="text-sm font-semibold text-[#B59D55]">
          {t("quarterly.latest")}
        </span>

        <h3 className="text-2xl font-bold mt-3">
          Q3 2025
        </h3>

        <p className="text-gray-500 mt-2">
          {t("quarterly.interim")}
        </p>

        <button className="mt-6 inline-flex items-center gap-2 px-5 py-2 bg-[#B59D55] text-white rounded-xl hover:opacity-90 transition">
          <Download size={16} />
          {t("quarterly.downloadReport")}
        </button>
      </motion.div>

      {/* Grid Reports */}
      <div className="grid md:grid-cols-2 gap-8">
        {quarterlyData.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -6 }}
            className="bg-white p-8 rounded-2xl shadow border border-gray-100 hover:shadow-xl transition"
          >
            <span className="text-sm font-semibold text-[#B59D55]">
              {item.period}
            </span>

            <h3 className="text-lg font-bold mt-2">
              {item.title}
            </h3>

            <button className="mt-5 inline-flex items-center gap-2 px-4 py-2 border border-[#B59D55] text-[#B59D55] rounded-xl hover:bg-[#B59D55] hover:text-white transition text-sm">
              <Download size={14} />
              {t("quarterly.download")}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Quarterly;