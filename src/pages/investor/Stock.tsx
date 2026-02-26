import { motion } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";
import { useTranslation } from "react-i18next";

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
    <section className="py-16 px-6 md:px-12 bg-[#f9f9f9] min-h-screen">
      
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-[#B59D55]">
          {t("stock.title")}
        </h2>

        <p className="text-gray-600 mt-3 max-w-2xl">
          {t("stock.description")}
        </p>
      </div>

      {/* Stock Highlight */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-gray-100"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          
          <div>
            <span className="text-sm font-semibold text-[#B59D55]">
              {stockData.ticker}
            </span>

            <h3 className="text-4xl font-bold mt-2">
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

          <div className="grid grid-cols-2 gap-6 text-sm">
            <div>
              <p className="text-gray-500">{t("stock.marketCap")}</p>
              <p className="font-semibold">{stockData.marketCap}</p>
            </div>

            <div>
              <p className="text-gray-500">{t("stock.volume")}</p>
              <p className="font-semibold">{stockData.volume}</p>
            </div>

            <div>
              <p className="text-gray-500">{t("stock.high52")}</p>
              <p className="font-semibold">{stockData.high52}</p>
            </div>

            <div>
              <p className="text-gray-500">{t("stock.low52")}</p>
              <p className="font-semibold">{stockData.low52}</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Chart Placeholder */}
      <motion.div
        whileHover={{ y: -5 }}
        className="bg-white rounded-2xl shadow-lg p-12 border border-gray-100 text-center"
      >
        <p className="text-gray-500">
          {t("stock.chartPlaceholder")}
        </p>
      </motion.div>
    </section>
  );
};

export default Stock;