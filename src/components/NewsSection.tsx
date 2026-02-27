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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-[#2F3E34]">
            {t("newsPressTitle")}
          </h2>
          <div className="w-20 h-[3px] bg-[#C6A75E] mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* NEWS */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-md p-8">
            <p className="uppercase text-xs tracking-widest text-[#C6A75E] font-semibold mb-8">
              {t("newsLabel")}
            </p>

            <div className="space-y-6">
              {newsData.map((news, index) => (
                <div key={index} className="border-b border-gray-200 pb-5">

                  <p className="text-sm text-gray-500 mb-2">
                    {news.date}
                  </p>

                  <h3 className="font-semibold text-[#2F3E34]">
                    {t(news.key)}
                  </h3>

                  <button className="mt-3 text-sm font-semibold text-[#C6A75E] hover:underline">
                    {t("download")} →
                  </button>
                </div>
              ))}
            </div>

            <button className="mt-8 px-6 py-2 bg-[#C6A75E] text-white text-sm font-semibold rounded-md hover:bg-[#b8964f] transition">
              {t("viewAll")}
            </button>
          </div>

          {/* PRESS RELEASE */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-md p-8">
            <p className="uppercase text-xs tracking-widest text-[#C6A75E] font-semibold mb-8">
              {t("pressRelease")}
            </p>

            <div className="space-y-6">
              {newsData.slice(0, 3).map((news, index) => (
                <div key={index} className="border-b border-gray-200 pb-5">

                  <p className="text-sm text-gray-500 mb-2">
                    {news.date}
                  </p>

                  <h3 className="font-semibold text-[#2F3E34]">
                    {t(news.key)}
                  </h3>

                  <button className="mt-3 text-sm font-semibold text-[#C6A75E] hover:underline">
                    {t("download")} →
                  </button>
                </div>
              ))}
            </div>

            <button className="mt-8 px-6 py-2 bg-[#C6A75E] text-white text-sm font-semibold rounded-md hover:bg-[#b8964f] transition">
              {t("viewAll")}
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NewsSection;