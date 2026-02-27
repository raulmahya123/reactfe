import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Users, CalendarCheck, FileText } from "lucide-react";

const PRIMARY = "#B7A15A";
const CREAM = "#FFFFFF";

const GeneralMeeting = () => {
  const { t } = useTranslation();

  const sections = [
    {
      icon: <Users size={26} style={{ color: PRIMARY }} />,
      title: t("gmsTypesTitle"),
      desc: t("gmsTypesDesc"),
    },
    {
      icon: <CalendarCheck size={26} style={{ color: PRIMARY }} />,
      title: t("gmsImplementationTitle"),
      desc: t("gmsImplementationDesc"),
    },
    {
      icon: <FileText size={26} style={{ color: PRIMARY }} />,
      title: t("gmsAuthorityTitle"),
      desc: t("gmsAuthorityDesc"),
    },
  ];

  return (
    <section
      id="rups"
      className="scroll-mt-32 py-24 border-b"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <div className="mb-14">
          <h2
            className="text-4xl font-bold"
            style={{ color: PRIMARY }}
          >
            {t("gmsTitle")}
          </h2>

          <div
            className="w-24 h-1 mt-4 rounded-full"
            style={{ backgroundColor: PRIMARY }}
          />

          <p className="text-gray-600 mt-6 max-w-3xl leading-relaxed">
            {t("gmsDesc")}
          </p>
        </div>

        {/* CONTENT GRID */}
        <div className="grid md:grid-cols-3 gap-10">
          {sections.map((item, index) => (
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

      </div>
    </section>
  );
};

export default GeneralMeeting;