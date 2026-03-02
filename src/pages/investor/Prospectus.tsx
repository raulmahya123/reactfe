import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const PRIMARY = "#B7A15A";

const Prospectus = () => {
  const { t } = useTranslation();

  return (
    <section
      id="prospectus"
      className="scroll-mt-28 py-14 border-b border-gray-200"
    >
      <div className="max-w-5xl mx-auto px-6">

        {/* TITLE */}
        <div className="mb-10">
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ color: PRIMARY }}
          >
            {t("prospectusTitle")}
          </h2>

          <div
            className="w-20 h-1 mt-4 rounded-full"
            style={{ backgroundColor: PRIMARY }}
          />

          <p className="text-gray-600 mt-5 max-w-2xl leading-relaxed">
            {t("prospectusDesc")}
          </p>
        </div>

        {/* DOWNLOAD SECTION */}
        <motion.div
          whileHover={{ scale: 1.015 }}
          transition={{ duration: 0.2 }}
          className="bg-white rounded-2xl shadow-sm p-8 md:p-10 text-center"
          style={{ border: `1px solid ${PRIMARY}25` }}
        >
          <h3
            className="text-xl md:text-2xl font-semibold mb-6"
            style={{ color: PRIMARY }}
          >
            {t("prospectusDownloadTitle")}
          </h3>

          <a
            href="/documents/prospectus.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all hover:opacity-90"
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