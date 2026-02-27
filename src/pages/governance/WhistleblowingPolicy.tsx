import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { AlertTriangle, Mail, ShieldCheck } from "lucide-react";

const PRIMARY = "#C6A75E";

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
      className="scroll-mt-24 py-20"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-[#2F3E34]">
            {t("whistleblowingTitle")}
          </h2>

          <div className="w-20 h-[3px] bg-[#C6A75E] mx-auto mt-6"></div>

          <p className="text-gray-700 mt-6 max-w-3xl mx-auto leading-relaxed">
            {t("whistleblowingDesc")}
          </p>
        </div>

        {/* REPORT CHANNEL */}
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.25 }}
          className="bg-[#F4F6F3] border border-gray-200 rounded-lg p-8 mb-14 hover:shadow-md transition"
        >
          <div className="flex items-center mb-6">
            <ShieldCheck size={22} color={PRIMARY} />
            <h3 className="text-lg font-semibold text-[#2F3E34] ml-3">
              {t("reportChannel")}
            </h3>
          </div>

          <div className="space-y-4 text-gray-700 text-sm">
            <div className="flex items-center gap-3">
              <Mail size={16} color={PRIMARY} />
              whistleblowing@company.com
            </div>

            <div className="flex items-center gap-3">
              <AlertTriangle size={16} color={PRIMARY} />
              {t("reportConfidential")}
            </div>
          </div>
        </motion.div>

        {/* REPORT FLOW */}
        <div>
          <h3 className="text-xl font-semibold text-[#2F3E34] mb-8 text-center">
            {t("reportProcedure")}
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition"
              >
                <div className="w-8 h-8 flex items-center justify-center rounded-full mb-4 text-sm font-bold bg-[#C6A75E]/15 text-[#C6A75E]">
                  {index + 1}
                </div>

                <p className="text-gray-700 text-sm leading-relaxed">
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