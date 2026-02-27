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
      className="scroll-mt-24 py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-[#2F3E34]">
            {t("csr.title")}
          </h2>

          <div className="w-20 h-[3px] bg-[#C6A75E] mx-auto mt-6"></div>

          <p className="mt-6 text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {t("csr.subtitle")}
          </p>
        </div>

        {/* CONTENT */}
        <div className="max-w-4xl mx-auto text-center space-y-6 text-gray-700 leading-relaxed mb-16">

          <p className="text-lg font-medium text-[#2F3E34]">
            {t("csr.paragraph1")}
          </p>

          <div className="w-12 h-[2px] bg-[#C6A75E] mx-auto"></div>

          <p>{t("csr.paragraph2")}</p>
          <p>{t("csr.paragraph3")}</p>

        </div>

        {/* GALLERY */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {csrGallery.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition"
            >
              <div className="h-64 bg-[#F4F6F3] overflow-hidden">
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6">
                <p className="text-sm font-semibold text-[#2F3E34]">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}