import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Counter = ({ target }: { target: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return <span>{count.toLocaleString()}</span>;
};

const KeyHighlights = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-[#f8f8f8]">
      <div className="max-w-[1400px] mx-auto px-8 text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-[#4A0404] mb-16">
          {t("performanceTitle")}
        </h2>

        <div className="grid md:grid-cols-4 gap-12">

          <div>
            <h3 className="text-4xl font-bold text-[#4A0404]">
              Rp <Counter target={5200000000000} />
            </h3>
            <p className="mt-4 text-gray-600">{t("revenue")}</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-[#4A0404]">
              Rp <Counter target={850000000000} />
            </h3>
            <p className="mt-4 text-gray-600">{t("netProfit")}</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-[#4A0404]">
              <Counter target={12000000} /> MT
            </h3>
            <p className="mt-4 text-gray-600">{t("production")}</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-[#4A0404]">
              Rp <Counter target={9000000000000} />
            </h3>
            <p className="mt-4 text-gray-600">{t("assets")}</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default KeyHighlights;
