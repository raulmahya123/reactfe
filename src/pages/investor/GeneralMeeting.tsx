import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Users, CalendarCheck, FileText } from "lucide-react";

const PRIMARY = "#B7A15A";

const GeneralMeeting = () => {
  const { t } = useTranslation();

  const sections = [
    {
      icon: <Users size={24} style={{ color: PRIMARY }} />,
      title: t("gmsTypesTitle"),
      desc: t("gmsTypesDesc"),
    },
    {
      icon: <CalendarCheck size={24} style={{ color: PRIMARY }} />,
      title: t("gmsImplementationTitle"),
      desc: t("gmsImplementationDesc"),
    },
    {
      icon: <FileText size={24} style={{ color: PRIMARY }} />,
      title: t("gmsAuthorityTitle"),
      desc: t("gmsAuthorityDesc"),
    },
  ];

  return (
    <section
      id="rups"
      className="scroll-mt-28 py-14 border-b border-gray-200"
    >
      <div className="max-w-5xl mx-auto px-6">

        {/* TITLE */}
        <div className="mb-10">
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ color: PRIMARY }}
          >
            {t("gmsTitle")}
          </h2>

          <div
            className="w-20 h-1 mt-4 rounded-full"
            style={{ backgroundColor: PRIMARY }}
          />

          <p className="text-gray-600 mt-5 max-w-2xl leading-relaxed">
            {t("gmsDesc")}
          </p>
        </div>

        {/* CONTENT GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md p-8 transition-all"
              style={{ border: `1px solid ${PRIMARY}20` }}
            >
              <div
                className="w-12 h-12 flex items-center justify-center rounded-xl mb-5"
                style={{ backgroundColor: `${PRIMARY}15` }}
              >
                {item.icon}
              </div>

              <h3
                className="text-lg font-semibold mb-3"
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

      </div>
    </section>
  );
};

export default GeneralMeeting;