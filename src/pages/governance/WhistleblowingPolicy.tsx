import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { AlertTriangle, Mail, ShieldCheck } from "lucide-react";

const PRIMARY = "#B7A15A"; // gold seperti gambar
const CREAM = "#FFFFFF";

const WhistleblowingPolicy = () => {
  const { t } = useTranslation();

  const steps = [
    t("wbsStep1"),
    t("wbsStep2"),
    t("wbsStep3"),
    t("wbsStep4"),
  ];

  return (
    <section
      id="whistleblowing"
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
            {t("whistleblowingTitle")}
          </h2>
          <div
            className="w-24 h-1 mt-4 rounded-full"
            style={{ backgroundColor: PRIMARY }}
          />
          <p className="text-gray-600 mt-6 max-w-3xl leading-relaxed">
            {t("whistleblowingDesc")}
          </p>
        </div>

        {/* REPORT CHANNEL */}
        <motion.div
          whileHover={{ y: -4 }}
          className="bg-white shadow-md rounded-2xl p-10 mb-16"
          style={{ border: `1px solid ${PRIMARY}30` }}
        >
          <div className="flex items-center mb-6">
            <ShieldCheck size={26} style={{ color: PRIMARY }} />
            <h3
              className="text-xl font-semibold ml-3"
              style={{ color: PRIMARY }}
            >
              {t("reportChannel")}
            </h3>
          </div>

          <div className="space-y-4 text-gray-700 text-sm">
            <div className="flex items-center gap-3">
              <Mail size={18} style={{ color: PRIMARY }} />
              whistleblowing@company.com
            </div>

            <div className="flex items-center gap-3">
              <AlertTriangle size={18} style={{ color: PRIMARY }} />
              {t("reportConfidential")}
            </div>
          </div>
        </motion.div>

        {/* REPORT FLOW */}
        <div>
          <h3
            className="text-2xl font-semibold mb-8"
            style={{ color: PRIMARY }}
          >
            {t("reportProcedure")}
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                className="bg-white shadow-sm rounded-xl p-8"
                style={{ border: `1px solid ${PRIMARY}20` }}
              >
                <div
                  className="w-10 h-10 flex items-center justify-center rounded-full mb-4 text-sm font-bold"
                  style={{
                    backgroundColor: `${PRIMARY}20`,
                    color: PRIMARY,
                  }}
                >
                  {index + 1}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhistleblowingPolicy;