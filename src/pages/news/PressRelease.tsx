import { motion } from "framer-motion";
import { CalendarDays, ArrowUpRight } from "lucide-react";

const pressData = [
  {
    title: "PT Andalan Artha Primanusa Announces Strategic Expansion",
    date: "March 2026",
    category: "Expansion",
    description:
      "Perusahaan mengumumkan ekspansi strategis untuk memperkuat posisi di industri dan meningkatkan pertumbuhan berkelanjutan di tahun 2026.",
  },
  {
    title: "Company Reports Strong Financial Performance FY2025",
    date: "February 2026",
    category: "Financial",
    description:
      "Kinerja keuangan tahun buku 2025 menunjukkan pertumbuhan signifikan pada pendapatan dan laba bersih.",
  },
  {
    title: "Commitment to ESG and Sustainable Mining Practices",
    date: "January 2026",
    category: "ESG",
    description:
      "Perusahaan memperkuat komitmen terhadap praktik pertambangan berkelanjutan serta tata kelola perusahaan yang baik.",
  },
];

const PressRelease = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Header */}
        <div>
          <h2 className="text-4xl font-bold text-[#B59D55]">
            Press Release
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl">
            Informasi resmi dan pengumuman terbaru perusahaan terkait
            perkembangan bisnis, kinerja keuangan, serta inisiatif strategis.
          </p>
        </div>

        {/* Press List */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pressData.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl border border-gray-100 transition-all"
            >
              {/* Date */}
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <CalendarDays size={16} className="mr-2 text-[#B59D55]" />
                {item.date}
              </div>

              {/* Category Badge */}
              <span className="inline-block text-xs font-semibold bg-[#B59D55]/10 text-[#B59D55] px-3 py-1 rounded-full mb-4">
                {item.category}
              </span>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[#4A0404] mb-3 leading-snug">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Footer */}
              <div className="flex justify-end">
                <button className="flex items-center text-[#B59D55] text-sm font-medium hover:underline">
                  Read Full Release
                  <ArrowUpRight size={16} className="ml-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PressRelease;