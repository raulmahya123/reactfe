import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Financial = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<"annual" | "quarterly">("annual");


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
    </section>
  );
};

export default Financial;