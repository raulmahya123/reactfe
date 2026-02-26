import { motion } from "framer-motion";
import { Users, Truck, Cpu } from "lucide-react";

const PRIMARY = "#C6A75E";

const ResourcesSection = () => {
  const resources = [
    {
      icon: <Users size={28} style={{ color: PRIMARY }} />,
      title: "Sumber Daya Manusia Profesional",
      desc: "Didukung oleh tenaga kerja berpengalaman, kompeten, dan bersertifikasi yang memiliki komitmen tinggi terhadap keselamatan dan standar operasional perusahaan.",
    },
    {
      icon: <Truck size={28} style={{ color: PRIMARY }} />,
      title: "Peralatan & Infrastruktur Modern",
      desc: "Menggunakan armada dan peralatan pertambangan modern dengan sistem pemeliharaan terintegrasi untuk memastikan produktivitas dan efisiensi maksimal.",
    },
    {
      icon: <Cpu size={28} style={{ color: PRIMARY }} />,
      title: "Sistem Operasional Terintegrasi",
      desc: "Menerapkan sistem monitoring dan manajemen berbasis teknologi untuk meningkatkan kontrol operasional, akurasi data, serta pengambilan keputusan strategis.",
    },
  ];

  return (
    <section
      id="sumber-daya"
      className="relative py-36 bg-gradient-to-b from-white to-gray-100 text-center scroll-mt-32 overflow-hidden"
    >
      <div className="relative max-w-6xl mx-auto px-6">

        {/* ================= TITLE ================= */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900"
        >
          SUMBER DAYA KAMI
        </motion.h2>

        <div className="w-32 h-[4px] bg-[#C6A75E] mx-auto mt-8 rounded-full"></div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-10 text-gray-600 max-w-3xl mx-auto leading-relaxed text-lg"
        >
          Keunggulan operasional Perseroan didukung oleh kombinasi sumber daya
          manusia yang kompeten, peralatan modern, serta sistem manajemen
          terintegrasi yang dirancang untuk menjamin efisiensi, keselamatan,
          dan keberlanjutan dalam setiap aktivitas pertambangan.
        </motion.p>

        {/* ================= GRID ================= */}
        <div className="grid md:grid-cols-3 gap-12 mt-20">
          {resources.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl p-10 transition-all border border-gray-200"
            >
              <div
                className="w-16 h-16 flex items-center justify-center rounded-2xl mx-auto mb-6"
                style={{ backgroundColor: `${PRIMARY}20` }}
              >
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ================= STATISTICS ================= */}
        <div className="grid md:grid-cols-3 gap-12 mt-24">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#C6A75E] mb-2">500+</div>
            <div className="text-gray-600 text-sm">Tenaga Kerja Profesional</div>
          </div>

          <div className="text-center">
            <div className="text-4xl font-bold text-[#C6A75E] mb-2">120+</div>
            <div className="text-gray-600 text-sm">Unit Alat Berat</div>
          </div>

          <div className="text-center">
            <div className="text-4xl font-bold text-[#C6A75E] mb-2">0</div>
            <div className="text-gray-600 text-sm">
              Fatality Accident Commitment
            </div>
          </div>
        </div>

      </div>

      {/* Decorative Accent */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-[#C6A75E]/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-black/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default ResourcesSection;