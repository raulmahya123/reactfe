import { motion } from "framer-motion";
import { Users, Truck, Cpu } from "lucide-react";
import { useTranslation } from "react-i18next";

const PRIMARY = "#C6A75E";

const ResourcesSection = () => {
  const { t } = useTranslation();

  const resources = [
    {
      icon: <Users size={26} style={{ color: PRIMARY }} />,
      title: t("resources.humanTitle"),
      desc: t("resources.humanDesc"),
    },
    {
      icon: <Truck size={26} style={{ color: PRIMARY }} />,
      title: t("resources.equipmentTitle"),
      desc: t("resources.equipmentDesc"),
    },
    {
      icon: <Cpu size={26} style={{ color: PRIMARY }} />,
      title: t("resources.systemTitle"),
      desc: t("resources.systemDesc"),
    },
  ];

  const stats = [
    { value: "500+", label: t("resources.stat1") },
    { value: "120+", label: t("resources.stat2") },
    { value: "0", label: t("resources.stat3") },
  ];

  return (
    <section
      id="resources"
      className="py-20 bg-white scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-[#2F3E34]"
        >
          {t("resources.title")}
        </motion.h2>

        <div className="w-20 h-[3px] bg-[#C6A75E] mx-auto mt-6"></div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-6 text-gray-700 max-w-3xl mx-auto leading-relaxed"
        >
          {t("resources.description")}
        </motion.p>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-10 mt-14">
          {resources.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="bg-[#F4F6F3] rounded-lg p-8 border border-gray-200 hover:shadow-md transition"
            >
              <div
                className="w-14 h-14 flex items-center justify-center rounded-md mx-auto mb-6"
                style={{ backgroundColor: `${PRIMARY}20` }}
              >
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold text-[#2F3E34] mb-3">
                {item.title}
              </h3>

              <p className="text-gray-700 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* STATISTICS */}
        <div className="grid md:grid-cols-3 gap-10 mt-16">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-[#C6A75E] mb-2">
                {item.value}
              </div>
              <div className="text-gray-700 text-sm">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ResourcesSection;