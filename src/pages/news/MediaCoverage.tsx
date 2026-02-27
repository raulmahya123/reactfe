import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { CalendarDays, ArrowUpRight } from "lucide-react";

const MediaCoverage = () => {
  const { t } = useTranslation();

  const mediaItems = t("mediaCoverageSection.items", {
    returnObjects: true,
  }) as any;

  return (
    <section id="media" className="scroll-mt-24 py-20">
      <div className="max-w-7xl mx-auto px-6 space-y-12">

        {/* HEADER */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-[#2F3E34]">
            {t("mediaCoverageSection.title")}
          </h2>
          <div className="w-20 h-[3px] bg-[#C6A75E] mx-auto mt-6"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            {t("mediaCoverageSection.subtitle")}
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.keys(mediaItems).map((key) => {
            const item = mediaItems[key];

            return (
              <motion.div
                key={key}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200 hover:shadow-lg transition"
              >
                {/* IMAGE */}
                <div className="h-48 overflow-hidden bg-[#F4F6F3]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6 space-y-4">

                  {/* DATE */}
                  <div className="flex items-center text-xs text-gray-500">
                    <CalendarDays
                      size={14}
                      className="mr-2 text-[#C6A75E]"
                    />
                    {item.date}
                  </div>

                  {/* TITLE */}
                  <h3 className="text-lg font-semibold text-[#2F3E34]">
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>

                  {/* FOOTER */}
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs font-medium text-gray-400">
                      {item.source}
                    </span>

                    <button className="flex items-center text-[#C6A75E] text-sm font-semibold hover:underline">
                      {t("mediaCoverageSection.readMore")}
                      <ArrowUpRight size={16} className="ml-1" />
                    </button>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MediaCoverage;