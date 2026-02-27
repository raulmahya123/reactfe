import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { CalendarDays, ArrowUpRight } from "lucide-react";

const CorporateActions = () => {
  const { t } = useTranslation();

  const actions = t("corporateActionsSection.items", {
    returnObjects: true,
  }) as any;

  return (
    <section id="actions" className="scroll-mt-24 py-20">
      <div className="max-w-7xl mx-auto px-6 space-y-12">

        {/* HEADER */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-[#2F3E34]">
            {t("corporateActionsSection.title")}
          </h2>
          <div className="w-20 h-[3px] bg-[#C6A75E] mx-auto mt-6"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            {t("corporateActionsSection.subtitle")}
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.keys(actions).map((key) => {
            const item = actions[key];
            const statusLabel = t(
              `corporateActionsSection.status.${item.status}`
            );

            return (
              <motion.div
                key={key}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg p-8 shadow-md border border-gray-200 hover:shadow-lg transition"
              >
                {/* DATE */}
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <CalendarDays
                    size={16}
                    className="mr-2 text-[#C6A75E]"
                  />
                  {item.date}
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-semibold text-[#2F3E34] mb-3">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* FOOTER */}
                <div className="flex items-center justify-between">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-md ${
                      item.status === "approved"
                        ? "bg-[#C6A75E]/15 text-[#C6A75E]"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {statusLabel}
                  </span>

                  <button className="flex items-center text-[#C6A75E] text-sm font-semibold hover:underline">
                    {t("corporateActionsSection.viewDetails")}
                    <ArrowUpRight size={16} className="ml-1" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default CorporateActions;