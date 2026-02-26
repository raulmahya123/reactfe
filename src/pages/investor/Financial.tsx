import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Financial = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<"annual" | "quarterly">("annual");

  const annualReports = [
    {
      year: "2024",
      title: t("financial.annual2024Title"),
      description: t("financial.annual2024Desc"),
    },
    {
      year: "2023",
      title: t("financial.annual2023Title"),
      description: t("financial.annual2023Desc"),
    },
  ];

  const quarterlyReports = [
    {
      period: "Q3 2025",
      title: t("financial.q3Title"),
    },
    {
      period: "Q2 2025",
      title: t("financial.q2Title"),
    },
    {
      period: "Q1 2025",
      title: t("financial.q1Title"),
    },
  ];

  return (
    <section className="py-16 px-6 md:px-12 bg-[#f9f9f9] min-h-screen">
      
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-[#B59D55]">
          {t("financial.title")}
        </h2>

        <p className="text-gray-600 mt-3 max-w-2xl">
          {t("financial.description")}
        </p>
      </div>

      {/* Highlight Latest */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-gray-100"
      >
        <h3 className="text-lg font-semibold text-gray-700">
          {t("financial.latest")}
        </h3>

        <p className="text-3xl font-bold text-[#B59D55] mt-2">
          FY 2024
        </p>

        <button className="mt-5 inline-flex items-center gap-2 px-5 py-2 bg-[#B59D55] text-white rounded-xl hover:opacity-90 transition">
          <Download size={16} />
          {t("financial.downloadReport")}
        </button>
      </motion.div>

      {/* Tabs */}
      <div className="flex gap-6 mb-10 border-b">
        <button
          onClick={() => setActiveTab("annual")}
          className={`pb-3 font-semibold ${
            activeTab === "annual"
              ? "text-[#B59D55] border-b-2 border-[#B59D55]"
              : "text-gray-500"
          }`}
        >
          {t("financial.annual")}
        </button>

        <button
          onClick={() => setActiveTab("quarterly")}
          className={`pb-3 font-semibold ${
            activeTab === "quarterly"
              ? "text-[#B59D55] border-b-2 border-[#B59D55]"
              : "text-gray-500"
          }`}
        >
          {t("financial.quarterly")}
        </button>
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-8">
        {activeTab === "annual" &&
          annualReports.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              className="bg-white p-8 rounded-2xl shadow border border-gray-100 hover:shadow-xl transition"
            >
              <span className="text-sm font-semibold text-[#B59D55]">
                {item.year}
              </span>

              <h3 className="text-lg font-bold mt-2">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm mt-3">
                {item.description}
              </p>

              <button className="mt-5 inline-flex items-center gap-2 px-4 py-2 border border-[#B59D55] text-[#B59D55] rounded-xl hover:bg-[#B59D55] hover:text-white transition text-sm">
                <Download size={14} />
                {t("financial.download")}
              </button>
            </motion.div>
          ))}

        {activeTab === "quarterly" &&
          quarterlyReports.map((item, index) => (
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
                {t("financial.download")}
              </button>
            </motion.div>
          ))}
      </div>
    </section>
  );
};

export default Financial;