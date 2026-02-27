import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays, ArrowUpRight, X } from "lucide-react";

const PressRelease = () => {
  const { t } = useTranslation();
  const [selectedKey, setSelectedKey] = useState<string | null>(null);

  const pressItems = t("press.items", { returnObjects: true }) as any;

  return (
    <section id="press" className="scroll-mt-24 py-20">
      <div className="max-w-7xl mx-auto px-6 space-y-12">

        {/* HEADER */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-[#2F3E34]">
            {t("press.title")}
          </h2>
          <div className="w-20 h-[3px] bg-[#C6A75E] mx-auto mt-6"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            {t("press.subtitle")}
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.keys(pressItems).map((key) => {
            const item = pressItems[key];

            return (
              <motion.div
                key={key}
                whileHover={{ y: -6 }}
                className="bg-white rounded-lg p-8 shadow-md border border-gray-200 hover:shadow-lg transition"
              >
                {/* Date */}
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <CalendarDays size={16} className="mr-2 text-[#C6A75E]" />
                  {item.date}
                </div>

                {/* Category */}
                <span className="inline-block text-xs font-semibold bg-[#C6A75E]/10 text-[#C6A75E] px-3 py-1 rounded-md mb-4">
                  {item.category}
                </span>

                {/* Title */}
                <h3 className="text-lg font-semibold text-[#2F3E34] mb-3">
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
                    className="flex items-center text-[#C6A75E] text-sm font-semibold hover:underline"
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

      {/* MODAL */}
      <AnimatePresence>
        {selectedKey && (
          <motion.div
            className="fixed inset-0 bg-black/40 flex items-center justify-center p-6 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              className="bg-white max-w-2xl w-full rounded-lg p-8 shadow-xl relative"
            >
              <button
                onClick={() => setSelectedKey(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-[#2F3E34]"
              >
                <X size={20} />
              </button>

              <h3 className="text-2xl font-bold text-[#2F3E34] mb-4">
                {pressItems[selectedKey].title}
              </h3>

              <p className="text-gray-600 whitespace-pre-line leading-relaxed">
                {pressItems[selectedKey].content}
              </p>

              <div className="mt-8 text-right">
                <button
                  onClick={() => setSelectedKey(null)}
                  className="text-sm text-[#C6A75E] font-semibold hover:underline"
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