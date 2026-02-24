import { motion } from "framer-motion";
import { CalendarDays, ArrowUpRight } from "lucide-react";

const mediaData = [
  {
    title: "Featured in National Business Magazine",
    source: "Business Today Indonesia",
    date: "February 2026",
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1200",
    description:
      "Liputan media nasional mengenai pencapaian ESG perusahaan serta ekspansi proyek strategis di tahun 2026.",
  },
  {
    title: "Mining Expansion Gains Investor Confidence",
    source: "Indonesia Energy Review",
    date: "January 2026",
    image:
      "https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=1200",
    description:
      "Perusahaan dinilai berhasil menjaga stabilitas operasional dan pertumbuhan pendapatan secara berkelanjutan.",
  },
  {
    title: "Sustainability Commitment Highlighted",
    source: "Global ESG Report",
    date: "December 2025",
    image:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1200",
    description:
      "Komitmen perusahaan terhadap praktik pertambangan berkelanjutan mendapat apresiasi internasional.",
  },
];

const MediaCoverage = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Header */}
        <div>
          <h2 className="text-4xl font-bold text-[#B59D55]">
            Media Coverage
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl">
            Publikasi dan liputan media terkait perkembangan serta pencapaian
            perusahaan di tingkat nasional dan internasional.
          </p>
        </div>

        {/* Media Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mediaData.map((item, index) => (
            <motion.div
              key={index}
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
                  <CalendarDays size={14} className="mr-2 text-[#B59D55]" />
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
                    Read More
                    <ArrowUpRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaCoverage;