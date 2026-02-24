import { motion } from "framer-motion";

const dividends = [
  {
    year: "2024",
    amount: "Rp 120 / saham",
    date: "25 Juni 2025",
    status: "Paid",
  },
  {
    year: "2023",
    amount: "Rp 95 / saham",
    date: "20 Juni 2024",
    status: "Paid",
  },
  {
    year: "2022",
    amount: "Rp 70 / saham",
    date: "18 Juni 2023",
    status: "Paid",
  },
];

const Dividend = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-[#f9f9f9] min-h-screen">
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-[#B59D55]">
          Dividend Information
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl">
          Informasi pembagian dividen PT Andalan Artha Primanusa kepada
          pemegang saham sebagai bentuk komitmen terhadap nilai pemegang
          saham.
        </p>
      </div>

      {/* Highlight Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-gray-100"
      >
        <h3 className="text-lg font-semibold text-gray-700">
          Total Dividend per Share 2024
        </h3>
        <p className="text-4xl font-bold text-[#B59D55] mt-3">
          Rp 120
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Dibayarkan pada 25 Juni 2025
        </p>
      </motion.div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
        <div className="px-8 py-6 border-b">
          <h3 className="text-lg font-semibold">
            Dividend History
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-[#B59D55]/10 text-[#B59D55] text-sm">
              <tr>
                <th className="px-8 py-4">Year</th>
                <th className="px-8 py-4">Amount</th>
                <th className="px-8 py-4">Payment Date</th>
                <th className="px-8 py-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {dividends.map((item, index) => (
                <tr
                  key={index}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="px-8 py-4 font-semibold">
                    {item.year}
                  </td>
                  <td className="px-8 py-4">
                    {item.amount}
                  </td>
                  <td className="px-8 py-4">
                    {item.date}
                  </td>
                  <td className="px-8 py-4">
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
    </section>
  );
};

export default Dividend;