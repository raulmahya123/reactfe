import { useTranslation } from "react-i18next";

const NewsSection = () => {
  const { t } = useTranslation();

  const newsData = [
    { key: "newsItem1", date: "15 March 2025" },
    { key: "newsItem2", date: "28 February 2025" },
    { key: "newsItem3", date: "10 January 2025" },
    { key: "newsItem4", date: "05 January 2025" },
  ];

  return (
    <section className="pt-8 pb-16 bg-[#f3f3f3]">
      <div className="max-w-[1400px] mx-auto px-8">

        {/* HEADER */}
        <div className="mb-10">
          <p className="uppercase tracking-[0.3em] text-xs text-[#babe75] font-semibold">
            {t("media")}
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-[#babe75] mt-2">
            {t("newsPressTitle")}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* LEFT - #d5c7ad */}
          <div className="relative bg-[#F1EAD8] text-[#3a2f1f] p-10 rounded-md overflow-hidden">

            <div className="absolute right-6 top-20 w-2 h-52 bg-[#3a2f1f]/40 rounded-full"></div>

            <p className="uppercase text-xs tracking-widest text-[#3a2f1f] mb-6">
              {t("newsLabel")}
            </p>

            <div className="space-y-6">
              {newsData.map((news, index) => (
                <div key={index} className="border-b border-[#3a2f1f]/30 pb-5">

                  <p className="text-sm text-[#3a2f1f]/70 mb-1">
                    {news.date}
                  </p>

                  <h3 className="font-semibold text-lg">
                    {t(news.key)}
                  </h3>

                  <button className="mt-3 text-[#3a2f1f] font-semibold hover:underline">
                    {t("download")} →
                  </button>
                </div>
              ))}
            </div>

            <button className="mt-6 bg-[#3a2f1f] text-white px-6 py-2 font-semibold rounded-full hover:scale-105 transition">
              {t("viewAll")}
            </button>
          </div>

          {/* RIGHT - #babe75 */}
          <div className="relative bg-[#C7CDBF] text-[#2f3a1f] p-10 rounded-md overflow-hidden">

            <div className="absolute right-6 top-20 w-2 h-52 bg-[#2f3a1f]/40 rounded-full"></div>

            <p className="uppercase text-xs tracking-widest text-[#2f3a1f] mb-6">
              {t("pressRelease")}
            </p>

            <div className="space-y-6">
              {newsData.slice(0, 3).map((news, index) => (
                <div key={index} className="border-b border-[#2f3a1f]/30 pb-5">

                  <h3 className="font-semibold text-lg">
                    {t(news.key)}
                  </h3>

                  <button className="mt-3 text-[#2f3a1f] font-semibold hover:underline">
                    {t("download")} →
                  </button>
                </div>
              ))}
            </div>

            <button className="mt-6 bg-[#2f3a1f] text-white px-6 py-2 font-semibold rounded-full hover:scale-105 transition">
              {t("viewAll")}
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NewsSection;