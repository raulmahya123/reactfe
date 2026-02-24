import { motion } from "framer-motion";
import { Leaf, Users, ShieldCheck } from "lucide-react";

const ESG = () => {
  return (
    <section
      id="esg"
      className="py-24 px-6 md:px-12 lg:px-20 bg-white"
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
            ESG Commitment
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg max-w-4xl">
            PT Andalan Artha Primanusa mengintegrasikan prinsip Environmental,
            Social, and Governance (ESG) dalam strategi bisnis untuk memastikan
            pertumbuhan berkelanjutan dan penciptaan nilai jangka panjang.
          </p>
        </motion.div>

        {/* ESG Pillars */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Environmental */}
          <motion.div
            className="bg-gray-50 rounded-2xl p-8 shadow hover:shadow-xl transition duration-300 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Leaf className="text-[#B59D55] mx-auto mb-4" size={40} />
            <h3 className="text-xl font-semibold text-[#4A0404] mb-3">
              Environmental
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Mengurangi dampak lingkungan melalui efisiensi energi,
              pengelolaan limbah, serta pengurangan emisi karbon secara berkelanjutan.
            </p>
          </motion.div>

          {/* Social */}
          <motion.div
            className="bg-gray-50 rounded-2xl p-8 shadow hover:shadow-xl transition duration-300 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Users className="text-[#B59D55] mx-auto mb-4" size={40} />
            <h3 className="text-xl font-semibold text-[#4A0404] mb-3">
              Social
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Memberdayakan masyarakat, menjaga keselamatan kerja,
              serta membangun hubungan harmonis dengan seluruh pemangku kepentingan.
            </p>
          </motion.div>

          {/* Governance */}
          <motion.div
            className="bg-gray-50 rounded-2xl p-8 shadow hover:shadow-xl transition duration-300 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <ShieldCheck className="text-[#B59D55] mx-auto mb-4" size={40} />
            <h3 className="text-xl font-semibold text-[#4A0404] mb-3">
              Governance
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Menjunjung tinggi transparansi, etika bisnis, dan kepatuhan
              terhadap regulasi sebagai fondasi tata kelola perusahaan yang baik.
            </p>
          </motion.div>
        </div>

        {/* Strategic Approach */}
        <motion.div
          className="bg-white border rounded-2xl p-10 shadow"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl font-semibold text-[#4A0404] mb-4">
            Strategic ESG Integration
          </h3>
          <p className="text-gray-600 leading-relaxed">
            ESG bukan hanya komitmen, tetapi bagian dari strategi inti perusahaan.
            Setiap keputusan bisnis mempertimbangkan dampak lingkungan, sosial,
            dan tata kelola untuk memastikan keberlanjutan jangka panjang.
          </p>
        </motion.div>

        {/* Closing Section */}
        <motion.div
          className="bg-[#B59D55] text-white rounded-2xl p-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <h3 className="text-2xl font-semibold mb-4">
            Building Sustainable Value
          </h3>
          <p className="max-w-3xl mx-auto leading-relaxed">
            Dengan mengimplementasikan prinsip ESG secara konsisten,
            PT Andalan Artha Primanusa menciptakan nilai berkelanjutan
            bagi investor, masyarakat, dan lingkungan.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ESG;