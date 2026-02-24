import { motion } from "framer-motion";
import { Download } from "lucide-react";

const quarterlyData = [
  { period: "Q3 2025", title: "Interim Financial Statement Q3 2025" },
  { period: "Q2 2025", title: "Interim Financial Statement Q2 2025" },
  { period: "Q1 2025", title: "Interim Financial Statement Q1 2025" },
  { period: "Q4 2024", title: "Interim Financial Statement Q4 2024" },
];

const Quarterly = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-[#f9f9f9] min-h-screen">
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-[#B59D55]">
          Quarterly Reports
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl">
          Laporan kinerja keuangan triwulanan PT Andalan Artha Primanusa
          sebagai bentuk transparansi kepada pemegang saham dan investor.
        </p>
      </div>

      {/* Highlight Latest */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-gray-100"
      >
        <span className="text-sm font-semibold text-[#B59D55]">
          Latest Quarter
        </span>
        <h3 className="text-2xl font-bold mt-3">
          Q3 2025
        </h3>
        <p className="text-gray-500 mt-2">
          Interim Financial Statement
        </p>

        <button className="mt-6 inline-flex items-center gap-2 px-5 py-2 bg-[#B59D55] text-white rounded-xl hover:opacity-90 transition">
          <Download size={16} />
          Download Report
        </button>
      </motion.div>

      {/* Grid Reports */}
      <div className="grid md:grid-cols-2 gap-8">
        {quarterlyData.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -6 }}
            className="bg-white p-8 rounded-2xl shadow border border-gray-100 hover:shadow-xl transition"
          >
            <span className="text-sm font-semibold text-[#B59D55]">
              {item.period}
            </span>
            <h3 className="text-lg font-bold mt-2">
              {item.title}
            </h3>

            <button className="mt-5 inline-flex items-center gap-2 px-4 py-2 border border-[#B59D55] text-[#B59D55] rounded-xl hover:bg-[#B59D55] hover:text-white transition text-sm">
              <Download size={14} />
              Download
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Quarterly;