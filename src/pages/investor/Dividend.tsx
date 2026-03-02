import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const PRIMARY = "#B59D55";

const Dividend = () => {
  const { t } = useTranslation();

  const dividends = [
    {
      year: "2024",
      amount: "Rp 120 / saham",
      date: "25 Juni 2025",
      status: t("dividend.paid"),
    },
    {
      year: "2023",
      amount: "Rp 95 / saham",
      date: "20 Juni 2024",
      status: t("dividend.paid"),
    },
    {
      year: "2022",
      amount: "Rp 70 / saham",
      date: "18 Juni 2023",
      status: t("dividend.paid"),
    },
  ];

  return (
    <section className="py-14 scroll-mt-28">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="mb-10">
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ color: PRIMARY }}
          >
            {t("dividend.title")}
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl leading-relaxed">
            {t("dividend.description")}
          </p>
        </div>

        {/* Highlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-2xl shadow-sm p-8 mb-10 border border-gray-200"
        >
          <h3 className="text-sm uppercase tracking-wide text-gray-500">
            {t("dividend.highlightTitle")}
          </h3>

          <p
            className="text-3xl font-bold mt-2"
            style={{ color: PRIMARY }}
          >
            Rp 120
          </p>

          <p className="text-sm text-gray-500 mt-2">
            {t("dividend.paidOn")} 25 Juni 2025
          </p>
        </motion.div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200">

          <div className="px-6 py-5 border-b border-gray-200">
            <h3 className="text-lg font-semibold">
              {t("dividend.history")}
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">

              <thead
                className="bg-opacity-10"
                style={{ backgroundColor: `${PRIMARY}15`, color: PRIMARY }}
              >
                <tr>
                  <th className="px-6 py-4">{t("dividend.year")}</th>
                  <th className="px-6 py-4">{t("dividend.amount")}</th>
                  <th className="px-6 py-4">{t("dividend.paymentDate")}</th>
                  <th className="px-6 py-4">{t("dividend.status")}</th>
                </tr>
              </thead>

              <tbody>
                {dividends.map((item, index) => (
                  <tr
                    key={index}
                    className="border-t border-gray-100 hover:bg-gray-50 transition"
                  >
                    <td className="px-6 py-4 font-semibold">
                      {item.year}
                    </td>

                    <td className="px-6 py-4">
                      {item.amount}
                    </td>

                    <td className="px-6 py-4">
                      {item.date}
                    </td>

                    <td className="px-6 py-4">
                      <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-600">
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Dividend;