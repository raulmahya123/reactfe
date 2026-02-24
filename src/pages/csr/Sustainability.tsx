import { motion } from "framer-motion";
import CountUp from "react-countup";
import { FileText, Download, BarChart3 } from "lucide-react";

const Sustainability = () => {
  return (
    <section
      id="sustainability"
      className="py-24 px-6 md:px-12 lg:px-20 bg-white scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#B59D55] mb-4">
            Sustainability Report
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg max-w-4xl">
            Laporan keberlanjutan PT Andalan Artha Primanusa disusun secara
            transparan untuk memberikan gambaran kinerja perusahaan dalam aspek
            lingkungan, sosial, dan tata kelola (ESG).
          </p>
        </motion.div>

        {/* Highlight Metrics */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <motion.div
            className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-xl transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-4xl font-bold text-[#B59D55]">
              <CountUp end={25} duration={2} />%
            </h3>
            <p className="text-gray-600 mt-2">Reduction in Emissions</p>
          </motion.div>

          <motion.div
            className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-xl transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-4xl font-bold text-[#B59D55]">
              <CountUp end={40} duration={2} />+
            </h3>
            <p className="text-gray-600 mt-2">Community Programs</p>
          </motion.div>

          <motion.div
            className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-xl transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <h3 className="text-4xl font-bold text-[#B59D55]">
              <CountUp end={100} duration={2} />%
            </h3>
            <p className="text-gray-600 mt-2">Regulatory Compliance</p>
          </motion.div>
        </div>

        {/* Reports Section */}
        <div className="space-y-8">
          <motion.div
            className="bg-white border rounded-2xl p-8 shadow hover:shadow-xl transition flex flex-col md:flex-row md:items-center md:justify-between gap-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-4">
              <FileText className="text-[#B59D55]" size={36} />
              <div>
                <h3 className="text-xl font-semibold text-[#4A0404]">
                  Sustainability Report 2025
                </h3>
                <p className="text-gray-600 text-sm">
                  Comprehensive ESG performance report.
                </p>
              </div>
            </div>

            <button className="flex items-center gap-2 bg-[#B59D55] text-white px-6 py-3 rounded-full hover:bg-[#9c8548] transition">
              <Download size={18} />
              Download PDF
            </button>
          </motion.div>

          <motion.div
            className="bg-white border rounded-2xl p-8 shadow hover:shadow-xl transition flex flex-col md:flex-row md:items-center md:justify-between gap-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1 }}
          >
            <div className="flex items-center gap-4">
              <BarChart3 className="text-[#B59D55]" size={36} />
              <div>
                <h3 className="text-xl font-semibold text-[#4A0404]">
                  Sustainability Report 2024
                </h3>
                <p className="text-gray-600 text-sm">
                  Annual sustainability and ESG disclosure.
                </p>
              </div>
            </div>

            <button className="flex items-center gap-2 bg-[#B59D55] text-white px-6 py-3 rounded-full hover:bg-[#9c8548] transition">
              <Download size={18} />
              Download PDF
            </button>
          </motion.div>
        </div>

        {/* Closing */}
        <motion.div
          className="bg-[#B59D55] text-white rounded-2xl p-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.3 }}
        >
          <h3 className="text-2xl font-semibold mb-4">
            Transparency Builds Trust
          </h3>
          <p className="max-w-3xl mx-auto leading-relaxed">
            Melalui publikasi Sustainability Report secara berkala,
            PT Andalan Artha Primanusa memastikan akuntabilitas dan
            keterbukaan informasi kepada seluruh pemangku kepentingan.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Sustainability;