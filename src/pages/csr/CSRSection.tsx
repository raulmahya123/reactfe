import Csr1 from "../../assets/csr1.png"
import Csr2 from "../../assets/csr2.png"
import Csr3 from "../../assets/csr3.png"


export default function CSRSection() {
  return (
    <section
      id="csr"
      className="w-full py-28 px-6 bg-gradient-to-br from-[#F4F6F3] via-[#EEF2ED] to-[#F7F8F6] scroll-mt-32"
    >
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-[#2F3E34] tracking-tight">
            Tanggung Jawab Sosial Perusahaan
          </h2>
          <p className="text-[#6B8E73] mt-4 uppercase tracking-widest text-sm">
            Corporate Social Responsibility
          </p>
          <div className="w-28 h-[4px] bg-gradient-to-r from-[#6B8E73] to-[#2F3E34] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Text */}
          <div className="space-y-6 text-[#2F3E34] leading-relaxed">
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

          {/* Highlight Card */}
          <div className="bg-white rounded-3xl p-10 shadow-lg border border-[#E5E7EB]">
            <h3 className="text-2xl font-bold text-[#2F3E34] mb-6">
              Fokus Program CSR
            </h3>

            <ul className="space-y-4 text-[#4F6F5D]">
              <li>✔ Pemulihan Infrastruktur Pasca Bencana</li>
              <li>✔ Dukungan Fasilitas Keagamaan</li>
              <li>✔ Penguatan Hubungan Sosial Masyarakat</li>
              <li>✔ Pembangunan Sosial Berkelanjutan</li>
            </ul>
          </div>

        </div>

        {/* Photo Gallery */}
        <div className="mt-24 grid md:grid-cols-3 gap-8">

          {[
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
          ].map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl shadow-md"
            >
              <img
                src={item.src}
                alt={item.caption}
                className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-6">
                <span className="text-white font-semibold">
                  {item.caption}
                </span>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}