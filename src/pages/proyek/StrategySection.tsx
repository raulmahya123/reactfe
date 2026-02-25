import { ShieldCheck, Users, TrendingUp, Pickaxe, Briefcase } from "lucide-react";

const strategies = [
  {
    icon: TrendingUp,
    title: "Penguatan Fundamental & Efisiensi Operasional",
    description:
      "Perseroan mengoptimalkan utilisasi alat berat, pengendalian biaya operasional, serta perencanaan pemeliharaan terstruktur guna menjaga produktivitas dan stabilitas margin usaha di tengah dinamika industri.",
  },
  {
    icon: Briefcase,
    title: "Diversifikasi Pelanggan dan Komoditas",
    description:
      "Ekspansi ke komoditas nikel melalui perolehan Letter of Award PT Position pada Januari 2026 menjadi langkah strategis dalam memperluas basis pelanggan dan memperkuat struktur pendapatan.",
  },
  {
    icon: Users,
    title: "Pengembangan Sumber Daya Manusia",
    description:
      "Perseroan meningkatkan kapabilitas teknis dan manajerial tenaga kerja serta menanamkan budaya kerja yang berorientasi pada keselamatan, kepatuhan, dan kinerja berbasis hasil.",
  },
];

const advantages = [
  {
    icon: Pickaxe,
    title: "Kapabilitas Multi-Komoditas",
    description:
      "Berpengalaman dalam jasa kontraktor pertambangan batu bara dan telah memperluas portofolio ke komoditas nikel.",
  },
  {
    icon: ShieldCheck,
    title: "Rekam Jejak & Standar Keselamatan",
    description:
      "Penyelesaian pekerjaan sesuai target produksi dengan penerapan standar keselamatan dan pengendalian operasional yang konsisten.",
  },
  {
    icon: Briefcase,
    title: "Layanan Operasional Terintegrasi",
    description:
      "Menyediakan layanan overburden removal, penambangan, dan pengangkutan untuk mendukung kebutuhan operasional secara menyeluruh.",
  },
  {
    icon: TrendingUp,
    title: "Struktur Biaya Kompetitif",
    description:
      "Optimalisasi utilisasi alat berat dan pengendalian biaya operasional memungkinkan penawaran harga jasa yang bersaing.",
  },
  {
    icon: Users,
    title: "Diversifikasi Pendapatan",
    description:
      "Ekspansi pelanggan dan komoditas memperkuat struktur pendapatan serta mengurangi ketergantungan pada satu pemberi kerja.",
  },
  {
    icon: ShieldCheck,
    title: "Kepatuhan & Tata Kelola",
    description:
      "Penerapan standar keselamatan kerja dan kepatuhan terhadap regulasi untuk menjaga kelancaran operasional dan reputasi usaha.",
  },
];

const StrategySection = () => {
  return (
    <section className="relative py-32 bg-[#f9f9f7] overflow-hidden">
      {/* HEADER */}
      <div className="max-w-6xl mx-auto px-6 text-center mb-20">
        <div className="text-sm tracking-[0.3em] text-[#C6A75E] uppercase mb-6">
          Strategi & Keunggulan
        </div>

        <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
          <span className="bg-gradient-to-r from-black to-[#C6A75E] bg-clip-text text-transparent">
            Strategi Usaha & Keunggulan Kompetitif
          </span>
        </h2>

        <div className="w-24 h-[3px] bg-[#C6A75E] mx-auto mt-8 rounded-full"></div>

        <p className="mt-8 text-gray-600 max-w-3xl mx-auto leading-relaxed text-lg">
          Perseroan menerapkan strategi yang berfokus pada penguatan fundamental,
          diversifikasi usaha, serta peningkatan daya saing operasional guna
          menjaga stabilitas kinerja dan menangkap peluang pertumbuhan industri.
        </p>
      </div>

      {/* STRATEGI USAHA */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 mb-24">
        {strategies.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-3xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C6A75E] to-transparent rounded-t-3xl"></div>

              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-[#C6A75E]/10 text-[#C6A75E] mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon size={28} />
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* KEUNGGULAN KOMPETITIF */}
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-2xl font-semibold text-center mb-12">
          Keunggulan Kompetitif
        </h3>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {advantages.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative bg-white p-6 rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#C6A75E]/10 text-[#C6A75E]">
                    <Icon size={22} />
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Decorative Accent */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-[#C6A75E]/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-black/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default StrategySection;