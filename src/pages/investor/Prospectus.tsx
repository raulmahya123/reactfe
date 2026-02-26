import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FileText, Download, TrendingUp } from "lucide-react";

const PRIMARY = "#B7A15A";
const CREAM = "#FFFFFF";

const Prospectus = () => {
  const { t } = useTranslation();

  const highlights = [
    {
      icon: <FileText size={26} style={{ color: PRIMARY }} />,
      title: t("prospectusOverviewTitle"),
      desc: t("prospectusOverviewDesc"),
    },
    {
      icon: <TrendingUp size={26} style={{ color: PRIMARY }} />,
      title: t("prospectusUseOfFundsTitle"),
      desc: t("prospectusUseOfFundsDesc"),
    },
  ];

  return (
    <section
      id="prospectus"
      className="scroll-mt-32 py-24 border-b"
      style={{ backgroundColor: CREAM }}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <div className="mb-14">
          <h2
            className="text-4xl font-bold"
            style={{ color: PRIMARY }}
          >
            {t("prospectusTitle")}
          </h2>

          <div
            className="w-24 h-1 mt-4 rounded-full"
            style={{ backgroundColor: PRIMARY }}
          />

          <p className="text-gray-600 mt-6 max-w-3xl leading-relaxed">
            {t("prospectusDesc")}
          </p>
        </div>

        {/* HIGHLIGHTS */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl p-10 transition-all"
              style={{ border: `1px solid ${PRIMARY}25` }}
            >
              <div
                className="w-14 h-14 flex items-center justify-center rounded-xl mb-6"
                style={{ backgroundColor: `${PRIMARY}20` }}
              >
                {item.icon}
              </div>

              <h3
                className="text-xl font-semibold mb-4"
                style={{ color: PRIMARY }}
              >
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* DOWNLOAD SECTION */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-2xl shadow-md p-10 text-center"
          style={{ border: `1px solid ${PRIMARY}30` }}
        >
          <h3
            className="text-2xl font-semibold mb-6"
            style={{ color: PRIMARY }}
          >
            {t("prospectusDownloadTitle")}
          </h3>

          <a
            href="/documents/prospectus.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all"
            style={{
              backgroundColor: PRIMARY,
              color: "white",
            }}
          >
            <Download size={18} />
            {t("downloadProspectus")}
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Prospectus;