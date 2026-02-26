import { useTranslation } from "react-i18next";
import Csr1 from "../../assets/csr1.png";
import Csr2 from "../../assets/csr2.png";
import Csr3 from "../../assets/csr3.png";

export default function CSRSection() {
  const { t } = useTranslation();

  const csrGallery = [
    {
      src: Csr1,
      caption: t("csr.gallery1"),
    },
    {
      src: Csr2,
      caption: t("csr.gallery2"),
    },
    {
      src: Csr3,
      caption: t("csr.gallery3"),
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
            {t("csr.title")}
          </h2>

          <p className="text-[#6B8E73] mt-4 uppercase tracking-[0.3em] text-sm">
            {t("csr.subtitle")}
          </p>

          <div className="w-24 h-[3px] bg-gradient-to-r from-[#6B8E73] to-[#2F3E34] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* TEXT */}
          <div className="space-y-6 text-[#2F3E34] leading-relaxed text-[17px]">
            <p>{t("csr.paragraph1")}</p>
            <p>{t("csr.paragraph2")}</p>
            <p>{t("csr.paragraph3")}</p>
          </div>

          {/* HIGHLIGHT CARD */}
          <div className="relative bg-white/80 backdrop-blur-md rounded-3xl p-12 shadow-xl border border-[#E5E7EB] hover:shadow-2xl transition duration-500">

            <h3 className="text-2xl font-bold text-[#2F3E34] mb-8">
              {t("csr.focusTitle")}
            </h3>

            <ul className="space-y-5 text-[#4F6F5D] text-[16px]">
              <li className="flex items-start gap-3">
                <span className="text-[#6B8E73]">✔</span>
                <span>{t("csr.focus1")}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#6B8E73]">✔</span>
                <span>{t("csr.focus2")}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#6B8E73]">✔</span>
                <span>{t("csr.focus3")}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#6B8E73]">✔</span>
                <span>{t("csr.focus4")}</span>
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

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-8">
                <span className="text-white text-lg font-semibold tracking-wide">
                  {item.caption}
                </span>
              </div>

              <div className="absolute inset-0 rounded-3xl border border-white/10 group-hover:border-[#6B8E73]/40 transition duration-500"></div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}