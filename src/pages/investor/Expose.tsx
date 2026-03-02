import { motion } from "framer-motion";
import { Download, Eye } from "lucide-react";
import { useTranslation } from "react-i18next";

const PRIMARY = "#B59D55";

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
    <section className="py-14 scroll-mt-28">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: PRIMARY }}>
            {t("expose.title")}
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl leading-relaxed">
            {t("expose.description")}
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {exposeData.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <span
                  className="text-sm font-semibold"
                  style={{ color: PRIMARY }}
                >
                  {item.year}
                </span>

                <h3 className="text-lg md:text-xl font-bold mt-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500 mt-2">
                  {item.date}
                </p>

                <p className="text-gray-600 mt-4 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-white text-sm transition hover:opacity-90"
                  style={{ backgroundColor: PRIMARY }}
                >
                  <Download size={16} />
                  {t("expose.download")}
                </button>

                <button
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm transition"
                  style={{
                    border: `1px solid ${PRIMARY}`,
                    color: PRIMARY,
                  }}
                >
                  <Eye size={16} />
                  {t("expose.view")}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Expose;