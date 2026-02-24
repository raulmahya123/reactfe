import { motion } from "framer-motion";
import { CalendarDays, ArrowUpRight } from "lucide-react";

const corporateActionsData = [
  {
    title: "Dividend Distribution 2025",
    date: "March 2025",
    status: "Approved",
    description:
      "Perusahaan menyetujui pembagian dividen sebagai bagian dari komitmen terhadap pemegang saham dan peningkatan nilai investasi.",
  },
  {
    title: "Share Buyback Program",
    date: "January 2025",
    status: "Completed",
    description:
      "Program pembelian kembali saham untuk menjaga stabilitas harga saham dan meningkatkan kepercayaan investor.",
  },
  {
    title: "Rights Issue",
    date: "September 2024",
    status: "Completed",
    description:
      "Penambahan modal melalui rights issue untuk mendukung ekspansi bisnis dan pengembangan proyek strategis.",
  },
];

const CorporateActions = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Section Header */}
        <div>
          <h2 className="text-4xl font-bold text-[#B59D55]">
            Corporate Actions
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl">
            Informasi terkait aksi korporasi terbaru yang dilakukan perusahaan
            sebagai bentuk transparansi dan komitmen kepada pemegang saham.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {corporateActionsData.map((item, index) => (
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
                    item.status === "Approved"
                      ? "bg-green-100 text-green-600"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {item.status}
                </span>

                <button className="flex items-center text-[#B59D55] text-sm font-medium hover:underline">
                  View Details
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

export default CorporateActions;