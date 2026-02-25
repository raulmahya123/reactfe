import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { CalendarDays, ArrowUpRight } from "lucide-react";

const CorporateActions = () => {
  const { t } = useTranslation();

  const actions = t("corporateActionsSection.items", {
    returnObjects: true,
  }) as any;

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Header */}
        <div>
          <h2 className="text-4xl font-bold text-[#B59D55]">
            {t("corporateActionsSection.title")}
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl">
            {t("corporateActionsSection.subtitle")}
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.keys(actions).map((key) => {
            const item = actions[key];

            const statusLabel = t(
              `corporateActionsSection.status.${item.status}`
            );

            return (
              <motion.div
                key={key}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl border border-gray-100 transition-all"
              >
                {/* Date */}
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <CalendarDays
                    size={16}
                    className="mr-2 text-[#B59D55]"
                  />
                  {item.date}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-[#4A0404] mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      item.status === "approved"
                        ? "bg-green-100 text-green-600"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {statusLabel}
                  </span>

                  <button className="flex items-center text-[#B59D55] text-sm font-medium hover:underline">
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