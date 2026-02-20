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
          <p className="uppercase tracking-[0.3em] text-xs text-yellow-500 font-semibold">
            {t("media")}
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-[#4A0404] mt-2">
            {t("newsPressTitle")}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* LEFT - NEWS */}
          <div className="relative bg-[#5a0000] text-white p-10 rounded-md overflow-hidden">

            <div className="absolute right-6 top-20 w-2 h-52 bg-yellow-400 rounded-full"></div>

            <p className="uppercase text-xs tracking-widest text-yellow-400 mb-6">
              {t("newsLabel")}
            </p>

            <div className="space-y-6">
              {newsData.map((news, index) => (
                <div key={index} className="border-b border-white/30 pb-5">

                  <p className="text-sm text-white/70 mb-1">
                    {news.date}
                  </p>

                  <h3 className="font-semibold text-lg">
                    {t(news.key)}
                  </h3>

                  <button className="mt-3 text-yellow-400 font-semibold hover:underline">
                    {t("download")} →
                  </button>
                </div>
              ))}
            </div>

            <button className="mt-6 bg-yellow-400 text-[#5a0000] px-6 py-2 font-semibold rounded-full hover:scale-105 transition">
              {t("viewAll")}
            </button>
          </div>

          {/* RIGHT - PRESS RELEASE */}
          <div className="relative bg-[#8b5c5c] text-white p-10 rounded-md overflow-hidden">

            <div className="absolute right-6 top-20 w-2 h-52 bg-yellow-400 rounded-full"></div>

            <p className="uppercase text-xs tracking-widest text-yellow-400 mb-6">
              {t("pressRelease")}
            </p>

            <div className="space-y-6">
              {newsData.slice(0, 3).map((news, index) => (
                <div key={index} className="border-b border-white/30 pb-5">

                  <h3 className="font-semibold text-lg">
                    {t(news.key)}
                  </h3>

                  <button className="mt-3 text-yellow-400 font-semibold hover:underline">
                    {t("download")} →
                  </button>
                </div>
              ))}
            </div>

            <button className="mt-6 bg-yellow-400 text-[#5a0000] px-6 py-2 font-semibold rounded-full hover:scale-105 transition">
              {t("viewAll")}
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NewsSection;