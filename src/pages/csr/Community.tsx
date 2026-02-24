import { motion } from "framer-motion";
import { Users, GraduationCap, HeartPulse, Briefcase } from "lucide-react";

const Community = () => {
  return (
    <section
      id="community"
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
            Community Development
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg max-w-4xl">
            PT Andalan Artha Primanusa berkomitmen untuk memberdayakan masyarakat
            melalui program berkelanjutan yang berfokus pada peningkatan kualitas
            hidup, pendidikan, kesehatan, dan pertumbuhan ekonomi lokal.
          </p>
        </motion.div>

        {/* Program Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            className="bg-gray-50 rounded-2xl p-8 shadow hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <GraduationCap className="text-[#B59D55] mb-4" size={36} />
            <h3 className="text-xl font-semibold text-[#4A0404] mb-3">
              Education Support
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Program beasiswa, renovasi fasilitas sekolah, dan pelatihan
              keterampilan untuk mendukung generasi muda yang kompetitif.
            </p>
          </motion.div>

          {/* Health */}
          <motion.div
            className="bg-gray-50 rounded-2xl p-8 shadow hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <HeartPulse className="text-[#B59D55] mb-4" size={36} />
            <h3 className="text-xl font-semibold text-[#4A0404] mb-3">
              Healthcare Initiative
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Pemeriksaan kesehatan gratis, dukungan fasilitas medis, dan
              program edukasi kesehatan masyarakat.
            </p>
          </motion.div>

          {/* Economic Empowerment */}
          <motion.div
            className="bg-gray-50 rounded-2xl p-8 shadow hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <Briefcase className="text-[#B59D55] mb-4" size={36} />
            <h3 className="text-xl font-semibold text-[#4A0404] mb-3">
              Economic Empowerment
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Pelatihan UMKM, akses permodalan, dan pengembangan kewirausahaan
              untuk meningkatkan kemandirian ekonomi lokal.
            </p>
          </motion.div>

          {/* Social Engagement */}
          <motion.div
            className="bg-gray-50 rounded-2xl p-8 shadow hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <Users className="text-[#B59D55] mb-4" size={36} />
            <h3 className="text-xl font-semibold text-[#4A0404] mb-3">
              Social Engagement
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Kegiatan sosial, bantuan bencana, dan program kemitraan komunitas
              sebagai bentuk kepedulian perusahaan terhadap masyarakat.
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
            Growing Together with the Community
          </h3>
          <p className="max-w-3xl mx-auto leading-relaxed">
            Melalui program Community Development, PT Andalan Artha Primanusa
            berupaya menciptakan dampak positif jangka panjang dan membangun
            hubungan harmonis dengan seluruh pemangku kepentingan.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Community;