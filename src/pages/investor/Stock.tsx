import { motion } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";
import { useTranslation } from "react-i18next";

const PRIMARY = "#B59D55";

const Stock = () => {
  const { t } = useTranslation();

  const stockData = {
    ticker: "AAP",
    price: "Rp 1,250",
    change: "+2.45%",
    marketCap: "Rp 3.2 T",
    volume: "12.5M",
    high52: "Rp 1,480",
    low52: "Rp 890",
  };

  const isPositive = stockData.change.includes("+");

  return (
    <section className="py-14 scroll-mt-28">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="mb-10">
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ color: PRIMARY }}
          >
            {t("stock.title")}
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl leading-relaxed">
            {t("stock.description")}
          </p>
        </div>

        {/* Stock Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-2xl shadow-sm p-8 border border-gray-200"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

            {/* Left */}
            <div>
              <span
                className="text-sm font-semibold"
                style={{ color: PRIMARY }}
              >
                {stockData.ticker}
              </span>

              <h3 className="text-3xl md:text-4xl font-bold mt-2">
                {stockData.price}
              </h3>

              <div
                className={`flex items-center gap-2 mt-3 text-sm font-semibold ${
                  isPositive ? "text-green-600" : "text-red-600"
                }`}
              >
                {isPositive ? (
                  <TrendingUp size={16} />
                ) : (
                  <TrendingDown size={16} />
                )}
                {stockData.change}
              </div>
            </div>

            {/* Right */}
            <div className="grid grid-cols-2 gap-x-10 gap-y-6 text-sm">
              <div>
                <p className="text-gray-500">{t("stock.marketCap")}</p>
                <p className="font-semibold mt-1">{stockData.marketCap}</p>
              </div>

              <div>
                <p className="text-gray-500">{t("stock.volume")}</p>
                <p className="font-semibold mt-1">{stockData.volume}</p>
              </div>

              <div>
                <p className="text-gray-500">{t("stock.high52")}</p>
                <p className="font-semibold mt-1">{stockData.high52}</p>
              </div>

              <div>
                <p className="text-gray-500">{t("stock.low52")}</p>
                <p className="font-semibold mt-1">{stockData.low52}</p>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Stock;