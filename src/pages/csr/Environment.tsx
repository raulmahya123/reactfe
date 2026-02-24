import { motion } from "framer-motion";
import { Leaf, Recycle, Factory, Droplets } from "lucide-react";

const Environment = () => {
  return (
    <section
      id="environment"
      className="py-24 px-6 md:px-12 lg:px-20 bg-white"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#B59D55] mb-4">
            Environmental Responsibility
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg max-w-4xl">
            PT Andalan Artha Primanusa berkomitmen menjaga keseimbangan antara
            aktivitas operasional dan kelestarian lingkungan melalui praktik
            berkelanjutan serta kepatuhan terhadap regulasi lingkungan.
          </p>
        </motion.div>

        {/* Program Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Waste Management */}
          <motion.div
            className="bg-gray-50 rounded-2xl p-8 shadow hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Recycle className="text-[#B59D55] mb-4" size={36} />
            <h3 className="text-xl font-semibold text-[#4A0404] mb-3">
              Waste Management
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Pengelolaan limbah dilakukan secara sistematis untuk meminimalkan
              dampak terhadap lingkungan dan meningkatkan efisiensi operasional.
            </p>
          </motion.div>

          {/* Emission Reduction */}
          <motion.div
            className="bg-gray-50 rounded-2xl p-8 shadow hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Factory className="text-[#B59D55] mb-4" size={36} />
            <h3 className="text-xl font-semibold text-[#4A0404] mb-3">
              Emission Reduction
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Perusahaan menerapkan teknologi ramah lingkungan untuk mengurangi
              emisi karbon dan meningkatkan efisiensi energi.
            </p>
          </motion.div>

          {/* Water Conservation */}
          <motion.div
            className="bg-gray-50 rounded-2xl p-8 shadow hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <Droplets className="text-[#B59D55] mb-4" size={36} />
            <h3 className="text-xl font-semibold text-[#4A0404] mb-3">
              Water Conservation
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Penggunaan air dilakukan secara efisien melalui sistem daur ulang
              dan pengawasan konsumsi air dalam setiap proses operasional.
            </p>
          </motion.div>

          {/* Biodiversity Protection */}
          <motion.div
            className="bg-gray-50 rounded-2xl p-8 shadow hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <Leaf className="text-[#B59D55] mb-4" size={36} />
            <h3 className="text-xl font-semibold text-[#4A0404] mb-3">
              Biodiversity Protection
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Komitmen terhadap perlindungan ekosistem dan keanekaragaman hayati
              melalui program rehabilitasi dan konservasi lingkungan.
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
            Protecting Today for Tomorrow
          </h3>
          <p className="max-w-3xl mx-auto leading-relaxed">
            Dengan komitmen terhadap praktik ramah lingkungan, PT Andalan Artha
            Primanusa berupaya menciptakan pertumbuhan bisnis yang selaras dengan
            pelestarian lingkungan untuk generasi mendatang.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Environment;