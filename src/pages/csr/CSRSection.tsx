import { useTranslation } from "react-i18next";
import Csr1 from "../../assets/csr1.png";
import Csr2 from "../../assets/csr2.png";
import Csr3 from "../../assets/csr3.png";

export default function CSRSection() {
  const { t } = useTranslation();

  const csrGallery = [
    { src: Csr1, caption: t("csr.gallery1") },
    { src: Csr2, caption: t("csr.gallery2") },
    { src: Csr3, caption: t("csr.gallery3") },
  ];

  return (
    <section
      id="csr"
      className="relative w-full py-36 px-6 bg-gradient-to-br from-[#F8F9F6] via-white to-[#EEF2EA] scroll-mt-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* ================= TITLE ================= */}
        <div className="text-center mb-28">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E2A22] tracking-tight">
            {t("csr.title")}
          </h2>

          <p className="text-[#6B8E73] mt-4 uppercase tracking-[0.4em] text-xs">
            {t("csr.subtitle")}
          </p>

          <div className="w-20 h-[3px] bg-[#C6A75E] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* ================= CONTENT (CENTERED CLEAN VERSION) ================= */}
        <div className="max-w-4xl mx-auto text-center space-y-8 text-[#2F3E34] leading-relaxed text-[17px] mb-32">

          <p className="text-xl md:text-2xl font-medium text-[#1E2A22]">
            {t("csr.paragraph1")}
          </p>

          <div className="w-16 h-[2px] bg-[#C6A75E] mx-auto rounded-full"></div>

          <p>
            {t("csr.paragraph2")}
          </p>

          <p>
            {t("csr.paragraph3")}
          </p>

        </div>

        {/* ================= GALLERY ================= */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {csrGallery.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl shadow-lg bg-black"
            >
              <img
                src={item.src}
                alt={item.caption}
                className="w-full h-[420px] object-cover transform group-hover:scale-105 transition duration-700 ease-out opacity-90 group-hover:opacity-100"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-8">
                <span className="text-white text-lg font-semibold tracking-wide translate-y-6 group-hover:translate-y-0 transition duration-500">
                  {item.caption}
                </span>
              </div>

              {/* Border glow */}
              <div className="absolute inset-0 rounded-3xl border border-white/10 group-hover:border-[#C6A75E]/60 transition duration-500"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}