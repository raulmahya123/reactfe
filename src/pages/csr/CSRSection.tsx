import Csr1 from "../../assets/csr1.png";
import Csr2 from "../../assets/csr2.png";
import Csr3 from "../../assets/csr3.png";

export default function CSRSection() {
  const csrGallery = [
    {
      src: Csr1,
      caption: "Perbaikan Gorong-gorong Desa Muara",
    },
    {
      src: Csr2,
      caption: "Bantuan Renovasi Masjid",
    },
    {
      src: Csr3,
      caption: "Pembangunan Mushola",
    },
  ];

  return (
    <section
      id="csr"
      className="relative w-full py-32 px-6 bg-gradient-to-br scroll-mt-32"
    >
      <div className="max-w-7xl mx-auto">

        {/* ================= TITLE ================= */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2F3E34] tracking-tight">
            Tanggung Jawab Sosial Perusahaan
          </h2>

          <p className="text-[#6B8E73] mt-4 uppercase tracking-[0.3em] text-sm">
            Corporate Social Responsibility
          </p>

          <div className="w-24 h-[3px] bg-gradient-to-r from-[#6B8E73] to-[#2F3E34] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* TEXT SECTION */}
          <div className="space-y-6 text-[#2F3E34] leading-relaxed text-[17px]">
            <p>
              Tanggung Jawab Sosial Perusahaan (“CSR”) merupakan wujud komitmen
              Perseroan untuk berperan aktif dalam meningkatkan kualitas hidup
              masyarakat serta menjaga kelestarian lingkungan di sekitar wilayah
              operasional Perseroan.
            </p>

            <p>
              Salah satu kegiatan yang dilaksanakan adalah bantuan perbaikan
              gorong-gorong di Desa Muara yang terdampak bencana banjir.
              Bantuan ini bertujuan untuk mempercepat pemulihan akses utama
              masyarakat dan mendukung keberlanjutan aktivitas ekonomi serta sosial.
            </p>

            <p>
              Selain itu, Perseroan juga memberikan dukungan terhadap kegiatan
              keagamaan melalui bantuan perbaikan masjid dan pembangunan mushola
              sebagai sarana ibadah masyarakat sekitar wilayah operasional.
            </p>
          </div>

          {/* HIGHLIGHT CARD */}
          <div className="relative bg-white/80 backdrop-blur-md rounded-3xl p-12 shadow-xl border border-[#E5E7EB] hover:shadow-2xl transition duration-500">

            <h3 className="text-2xl font-bold text-[#2F3E34] mb-8">
              Fokus Program CSR
            </h3>

            <ul className="space-y-5 text-[#4F6F5D] text-[16px]">
              <li className="flex items-start gap-3">
                <span className="text-[#6B8E73]">✔</span>
                <span>Pemulihan Infrastruktur Pasca Bencana</span>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-[#6B8E73]">✔</span>
                <span>Dukungan Fasilitas Keagamaan</span>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-[#6B8E73]">✔</span>
                <span>Penguatan Hubungan Sosial Masyarakat</span>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-[#6B8E73]">✔</span>
                <span>Pembangunan Sosial Berkelanjutan</span>
              </li>
            </ul>

          </div>
        </div>

        {/* ================= GALLERY ================= */}
        <div className="mt-28 grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {csrGallery.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl shadow-lg cursor-pointer"
            >
              <img
                src={item.src}
                alt={item.caption}
                className="w-full h-80 object-cover transform group-hover:scale-110 transition duration-700 ease-out"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-8">
                <span className="text-white text-lg font-semibold tracking-wide">
                  {item.caption}
                </span>
              </div>

              {/* Subtle Border Glow */}
              <div className="absolute inset-0 rounded-3xl border border-white/10 group-hover:border-[#6B8E73]/40 transition duration-500"></div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}