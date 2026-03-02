import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const PRIMARY = "#B59D55";

const Financial = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<"annual" | "quarterly">("annual");

  return (
    <section className="py-14 scroll-mt-28">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: PRIMARY }}>
            {t("financial.title")}
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl leading-relaxed">
            {t("financial.description")}
          </p>
        </div>

        {/* Highlight Latest */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-2xl shadow-sm p-8 mb-10 border border-gray-200"
        >
          <h3 className="text-sm uppercase tracking-wide text-gray-500">
            {t("financial.latest")}
          </h3>

          <p className="text-3xl font-bold mt-2" style={{ color: PRIMARY }}>
            FY 2024
          </p>

          <button
            className="mt-5 inline-flex items-center gap-2 px-5 py-2 rounded-xl text-white transition hover:opacity-90"
            style={{ backgroundColor: PRIMARY }}
          >
            <Download size={16} />
            {t("financial.downloadReport")}
          </button>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-8 mb-8 border-b border-gray-200">
          <button
            onClick={() => setActiveTab("annual")}
            className={`pb-3 font-semibold transition ${
              activeTab === "annual"
                ? "border-b-2"
                : "text-gray-500"
            }`}
            style={
              activeTab === "annual"
                ? { color: PRIMARY, borderColor: PRIMARY }
                : {}
            }
          >
            {t("financial.annual")}
          </button>

          <button
            onClick={() => setActiveTab("quarterly")}
            className={`pb-3 font-semibold transition ${
              activeTab === "quarterly"
                ? "border-b-2"
                : "text-gray-500"
            }`}
            style={
              activeTab === "quarterly"
                ? { color: PRIMARY, borderColor: PRIMARY }
                : {}
            }
          >
            {t("financial.quarterly")}
          </button>
        </div>

      </div>
    </section>
  );
};

export default Financial;