import { motion } from "framer-motion";
import { Download, Eye } from "lucide-react";
import { useTranslation } from "react-i18next";

const Expose = () => {
  const { t } = useTranslation();

  const exposeData = [
    {
      year: "2025",
      title: t("expose.title2025"),
      date: "15 Januari 2026",
      description: t("expose.desc2025"),
    },
    {
      year: "2024",
      title: t("expose.title2024"),
      date: "10 Januari 2025",
      description: t("expose.desc2024"),
    },
    {
      year: "2023",
      title: t("expose.title2023"),
      date: "12 Januari 2024",
      description: t("expose.desc2023"),
    },
  ];

  return (
    <section className="py-16 px-6 md:px-12 bg-[#f9f9f9] min-h-screen">

      {/* Header */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-[#B59D55]">
          {t("expose.title")}
        </h2>

        <p className="text-gray-600 mt-3 max-w-2xl">
          {t("expose.description")}
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {exposeData.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition flex flex-col justify-between"
          >
            <div>
              <span className="text-sm font-semibold text-[#B59D55]">
                {item.year}
              </span>

              <h3 className="text-xl font-bold mt-2">
                {item.title}
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                {item.date}
              </p>

              <p className="text-gray-600 mt-4 text-sm">
                {item.description}
              </p>
            </div>

            <div className="flex gap-3 mt-6">
              <button className="flex items-center gap-2 px-4 py-2 bg-[#B59D55] text-white rounded-xl hover:opacity-90 transition text-sm">
                <Download size={16} />
                {t("expose.download")}
              </button>

              <button className="flex items-center gap-2 px-4 py-2 border border-[#B59D55] text-[#B59D55] rounded-xl hover:bg-[#B59D55] hover:text-white transition text-sm">
                <Eye size={16} />
                {t("expose.view")}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Expose;