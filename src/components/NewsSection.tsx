import { useTranslation } from "react-i18next";
import NewsImg1 from "../assets/hero1.png";

import NewsImg2 from "../assets/hero1.png";

import NewsImg3 from "../assets/hero1.png";


const NewsSection = () => {
  const { t } = useTranslation();

  const newsData = [
    {
      title: "Public Expose 2025",
      date: "15 March 2025",
      image: NewsImg1,
    },
    {
      title: "Annual Report 2024 Released",
      date: "28 February 2025",
      image: NewsImg2,
    },
    {
      title: "Corporate Action Announcement",
      date: "10 January 2025",
      image: NewsImg3,
    },
  ];

  return (
    <section className="py-24 bg-[#f8f8f8]">
      <div className="max-w-[1400px] mx-auto px-8 text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-[#4A0404]">
          {t("newsTitle")}
        </h2>

        <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
          {t("newsSubtitle")}
        </p>

        <div className="grid md:grid-cols-3 gap-10 mt-16">

          {newsData.map((news, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 text-left"
            >
              <img
                src={news.image}
                alt={news.title}
                className="h-52 w-full object-cover"
              />

              <div className="p-6">
                <p className="text-sm text-gray-500">{news.date}</p>

                <h3 className="text-lg font-semibold text-[#4A0404] mt-3">
                  {news.title}
                </h3>

                <button className="mt-6 text-[#4A0404] font-semibold hover:underline">
                  {t("readMore")}
                </button>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default NewsSection;
