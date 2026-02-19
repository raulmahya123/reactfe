import { useTranslation } from "react-i18next";
import EnvImg from "../assets/hero1.png";

import LaborImg from "../assets/hero1.png";

import SocialImg from "../assets/hero1.png";


const Sustainability = () => {
  const { t } = useTranslation();

  const items = [
    {
      title: t("environmentTitle"),
      desc: t("environmentDesc"),
      image: EnvImg,
    },
    {
      title: t("laborTitle"),
      desc: t("laborDesc"),
      image: LaborImg,
    },
    {
      title: t("socialTitle"),
      desc: t("socialDesc"),
      image: SocialImg,
    },
  ];

  return (
    <section className="py-24 bg-[#f5f5f5]">
      <div className="max-w-[1400px] mx-auto px-8 text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-[#4A0404]">
          {t("sustainTitle")}
        </h2>

        <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
          {t("sustainSubtitle")}
        </p>

        <div className="grid md:grid-cols-3 gap-10 mt-16">

          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-52 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#4A0404]">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="mt-16">
          <a
            href="#sustainability-report"
            className="px-10 py-3 bg-[#4A0404] text-white font-semibold rounded-md hover:bg-[#600505] transition"
          >
            {t("viewSustainReport")}
          </a>
        </div>

      </div>
    </section>
  );
};

export default Sustainability;
