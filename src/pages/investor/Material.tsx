import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { useTranslation } from "react-i18next";

const Material = () => {
  const { t } = useTranslation();

  const materials = [
    {
      date: "12 Februari 2026",
      title: t("material.item1Title"),
      category: t("material.disclosure"),
    },
    {
      date: "05 Januari 2026",
      title: t("material.item2Title"),
      category: t("material.corporateAction"),
    },
    {
      date: "18 Desember 2025",
      title: t("material.item3Title"),
      category: t("material.report"),
    },
  ];

  return (
    <section className="py-16 px-6 md:px-12 bg-[#f9f9f9] min-h-screen">
      
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-[#B59D55]">
          {t("material.title")}
        </h2>

        <p className="text-gray-600 mt-3 max-w-2xl">
          {t("material.description")}
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
          {t("material.latest")}
        </span>

        <h3 className="text-2xl font-bold mt-3">
          {t("material.item1Title")}
        </h3>

        <p className="text-gray-500 mt-2">
          12 Februari 2026
        </p>

        <button className="mt-6 inline-flex items-center gap-2 px-5 py-2 bg-[#B59D55] text-white rounded-xl hover:opacity-90 transition">
          <Download size={16} />
          {t("material.downloadDocument")}
        </button>
      </motion.div>

      {/* Timeline List */}
      <div className="space-y-6">
        {materials.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-2xl shadow border border-gray-100 hover:shadow-xl transition flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div>
              <span className="text-sm text-[#B59D55] font-semibold">
                {item.category}
              </span>

              <h4 className="font-bold text-lg mt-1">
                {item.title}
              </h4>

              <p className="text-gray-500 text-sm mt-1">
                {item.date}
              </p>
            </div>

            <button className="inline-flex items-center gap-2 px-4 py-2 border border-[#B59D55] text-[#B59D55] rounded-xl hover:bg-[#B59D55] hover:text-white transition text-sm">
              <Download size={14} />
              {t("material.download")}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Material;