import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Shield, Scale, Users } from "lucide-react";

const PRIMARY = "#C6A75E";

const CodeOfEthics = () => {
  const { t } = useTranslation();

  const principles = [
    {
      icon: <Shield size={24} style={{ color: PRIMARY }} />,
      title: t("integrityTitle"),
      desc: t("integrityDesc"),
    },
    {
      icon: <Scale size={24} style={{ color: PRIMARY }} />,
      title: t("complianceTitle"),
      desc: t("complianceDesc"),
    },
    {
      icon: <Users size={24} style={{ color: PRIMARY }} />,
      title: t("professionalismTitle"),
      desc: t("professionalismDesc"),
    },
  ];

  return (
    <section
      id="codeetik"
      className="scroll-mt-24 py-20"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-[#2F3E34]">
            {t("codeOfEthics")}
          </h2>

          <div className="w-20 h-[3px] bg-[#C6A75E] mx-auto mt-6"></div>

          <p className="text-gray-700 mt-6 max-w-3xl mx-auto leading-relaxed">
            {t("codeOfEthicsDesc")}
          </p>
        </div>

        {/* PRINCIPLES */}
        <div className="grid md:grid-cols-3 gap-10">
          {principles.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="bg-[#F4F6F3] rounded-lg border border-gray-200 p-8 hover:shadow-md transition"
            >
              <div
                className="w-12 h-12 flex items-center justify-center rounded-md mb-6"
                style={{ backgroundColor: `${PRIMARY}15` }}
              >
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold text-[#2F3E34] mb-3">
                {item.title}
              </h3>

              <p className="text-gray-700 leading-relaxed text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CodeOfEthics;