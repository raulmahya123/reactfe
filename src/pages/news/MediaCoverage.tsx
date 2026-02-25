import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { CalendarDays, ArrowUpRight } from "lucide-react";

const MediaCoverage = () => {
  const { t } = useTranslation();

  const mediaItems = t("mediaCoverageSection.items", {
    returnObjects: true,
  }) as any;

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Header */}
        <div>
          <h2 className="text-4xl font-bold text-[#B59D55]">
            {t("mediaCoverageSection.title")}
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl">
            {t("mediaCoverageSection.subtitle")}
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.keys(mediaItems).map((key) => {
            const item = mediaItems[key];

            return (
              <motion.div
                key={key}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-100"
              >
                {/* Image */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center text-xs text-gray-500">
                    <CalendarDays
                      size={14}
                      className="mr-2 text-[#B59D55]"
                    />
                    {item.date}
                  </div>

                  <h3 className="text-lg font-semibold text-[#4A0404]">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs font-medium text-gray-400">
                      {item.source}
                    </span>

                    <button className="flex items-center text-[#B59D55] text-sm font-medium hover:underline">
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