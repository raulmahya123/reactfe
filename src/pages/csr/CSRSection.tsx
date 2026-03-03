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
      className="scroll-mt-24 py-24 bg-gradient-to-b from-white to-[#F9FAF8]"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-[#2F3E34]">
            {t("csr.title")}
          </h2>

          <div className="w-24 h-[3px] bg-[#C6A75E] mx-auto mt-6"></div>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t("csr.subtitle")}
          </p>
        </div>

        {/* CONTENT */}
        <div className="max-w-4xl mx-auto space-y-8 text-gray-700 leading-relaxed mb-20">

          <p className="text-lg font-medium text-[#2F3E34] text-justify">
            {t("csr.paragraph1")}
          </p>

          <div className="w-16 h-[2px] bg-[#C6A75E] mx-auto"></div>

          <p className="text-justify">
            {t("csr.paragraph2")}
          </p>

          <p className="text-justify">
            {t("csr.paragraph3")}
          </p>

        </div>

        {/* GALLERY */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {csrGallery.map((item, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition duration-500"
            >
              <div className="h-64 bg-[#F4F6F3] overflow-hidden">
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-6">
                <p className="text-sm font-semibold tracking-wide text-[#2F3E34]">
                  {item.caption}
                </p>

                <div className="w-10 h-[2px] bg-[#C6A75E] mt-3"></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}