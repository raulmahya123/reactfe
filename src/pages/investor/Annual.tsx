import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { useTranslation } from "react-i18next";

const PRIMARY = "#B59D55";

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
  ];

  return (
    <section className="py-14 scroll-mt-28">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: PRIMARY }}>
            {t("annual.title")}
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl leading-relaxed">
            {t("annual.description")}
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 gap-8">
          {reports.map((report, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition"
            >
              <span
                className="text-sm font-semibold"
                style={{ color: PRIMARY }}
              >
                {report.year}
              </span>

              <h3 className="text-lg md:text-xl font-bold mt-2">
                {report.title}
              </h3>

              <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                {report.description}
              </p>

              <button
                className="mt-6 inline-flex items-center gap-2 px-5 py-2 rounded-xl text-white transition hover:opacity-90"
                style={{ backgroundColor: PRIMARY }}
              >
                <Download size={16} />
                {t("annual.download")}
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Annual;