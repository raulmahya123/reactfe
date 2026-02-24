import { motion } from "framer-motion";

const Policy = () => {
  return (
    <section
      id="csr-policy"
      className="py-24 px-6 md:px-12 lg:px-20 bg-white scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#B59D55] mb-4">
            CSR Policy
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg max-w-4xl">
            PT Andalan Artha Primanusa berkomitmen menjalankan tanggung jawab sosial
            perusahaan secara berkelanjutan sebagai bagian dari strategi bisnis
            jangka panjang dan kontribusi terhadap pembangunan nasional.
          </p>
        </motion.div>

        {/* Policy Points */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Point 1 */}
          <motion.div
            className="bg-gray-50 rounded-2xl p-8 shadow hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xl font-semibold text-[#4A0404] mb-3">
              Sustainability Commitment
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Perusahaan memastikan seluruh aktivitas operasional dilakukan dengan
              memperhatikan aspek keberlanjutan lingkungan, sosial, dan tata kelola.
            </p>
          </motion.div>

          {/* Point 2 */}
          <motion.div
            className="bg-gray-50 rounded-2xl p-8 shadow hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-semibold text-[#4A0404] mb-3">
              Community Empowerment
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Program CSR difokuskan pada peningkatan kualitas hidup masyarakat
              melalui pendidikan, kesehatan, dan pemberdayaan ekonomi lokal.
            </p>
          </motion.div>

          {/* Point 3 */}
          <motion.div
            className="bg-gray-50 rounded-2xl p-8 shadow hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <h3 className="text-xl font-semibold text-[#4A0404] mb-3">
              Environmental Responsibility
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Perusahaan menerapkan standar pengelolaan lingkungan yang ketat,
              termasuk pengurangan emisi dan pengelolaan limbah yang bertanggung jawab.
            </p>
          </motion.div>

          {/* Point 4 */}
          <motion.div
            className="bg-gray-50 rounded-2xl p-8 shadow hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-xl font-semibold text-[#4A0404] mb-3">
              Transparency & Governance
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Perusahaan menjunjung tinggi prinsip transparansi, akuntabilitas,
              serta kepatuhan terhadap regulasi yang berlaku.
            </p>
          </motion.div>
        </div>

        {/* Closing Statement */}
        <motion.div
          className="bg-[#B59D55] text-white rounded-2xl p-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <h3 className="text-2xl font-semibold mb-4">
            Our Commitment
          </h3>
          <p className="max-w-3xl mx-auto leading-relaxed">
            Kebijakan CSR ini menjadi landasan utama PT Andalan Artha Primanusa
            dalam menciptakan nilai tambah yang berkelanjutan bagi seluruh pemangku
            kepentingan dan generasi mendatang.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Policy;