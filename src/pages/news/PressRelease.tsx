import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays, ArrowUpRight, X } from "lucide-react";

const PressRelease = () => {
  const { t } = useTranslation();
  const [selectedKey, setSelectedKey] = useState<string | null>(null);

  // Ambil semua items dari i18n
  const pressItems = t("press.items", { returnObjects: true }) as any;

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Header */}
        <div>
          <h2 className="text-4xl font-bold text-[#B59D55]">
            {t("press.title")}
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl">
            {t("press.subtitle")}
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.keys(pressItems).map((key) => {
            const item = pressItems[key];

            return (
              <motion.div
                key={key}
                whileHover={{ y: -8 }}
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

                {/* Category */}
                <span className="inline-block text-xs font-semibold bg-[#B59D55]/10 text-[#B59D55] px-3 py-1 rounded-full mb-4">
                  {item.category}
                </span>

                {/* Title */}
                <h3 className="text-xl font-semibold text-[#4A0404] mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-6">
                  {item.description}
                </p>

                {/* Button */}
                <div className="flex justify-end">
                  <button
                    onClick={() => setSelectedKey(key)}
                    className="flex items-center text-[#B59D55] text-sm font-medium hover:underline"
                  >
                    {t("press.readMore")}
                    <ArrowUpRight size={16} className="ml-1" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedKey && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-6 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white max-w-2xl w-full rounded-2xl p-8 relative"
            >
              <button
                onClick={() => setSelectedKey(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-black"
              >
                <X size={20} />
              </button>

              <h3 className="text-2xl font-bold text-[#4A0404] mb-4">
                {pressItems[selectedKey].title}
              </h3>

              <p className="text-gray-600 whitespace-pre-line leading-relaxed">
                {pressItems[selectedKey].content}
              </p>

              <div className="mt-6 text-right">
                <button
                  onClick={() => setSelectedKey(null)}
                  className="text-sm text-[#B59D55] font-medium hover:underline"
                >
                  {t("press.close")}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PressRelease;