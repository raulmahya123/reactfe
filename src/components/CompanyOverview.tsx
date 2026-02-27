import { useTranslation } from "react-i18next";
import OverviewImage from "../assets/company.png";
import { CheckCircle } from "lucide-react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const CompanyOverview = () => {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="py-28 bg-gradient-to-b from-[#ffffff] to-[#f3f3f3] relative overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(181,157,85,0.08),_transparent_60%)]"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        {/* SECTION TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
        </motion.div>

        {/* CONTENT GRID */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-gray-700 leading-relaxed text-sm text-justify">
              {t("companyOverviewText")}
            </p>

            <ul className="space-y-4 text-gray-700 text-sm leading-relaxed">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-[#B59D55] mt-1" size={18} />
                {t("overviewPoint1")}
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle className="text-[#B59D55] mt-1" size={18} />
                {t("overviewPoint2")}
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle className="text-[#B59D55] mt-1" size={18} />
                {t("overviewPoint3")}
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle className="text-[#B59D55] mt-1" size={18} />
                {t("overviewPoint4")}
              </li>
            </ul>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="relative w-[85%]">
              <div className="absolute inset-0 bg-[#B59D55]/10 rounded-xl"></div>
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#B59D55] rounded-xl"></div>

              <img
                src={OverviewImage}
                alt="Mining Operations"
                className="relative rounded-xl shadow-2xl w-full max-h-[480px] object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-24"></div>

        {/* STATS */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Established */}
          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-3xl font-bold text-[#B59D55]">2018</h3>
            <p className="text-gray-600 mt-2">{t("established")}</p>
          </motion.div>

          {/* Operational Sites */}
          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-3xl font-bold text-[#B59D55]">
              <CountUp end={4} duration={2} />
            </h3>
            <p className="text-gray-600 mt-2">{t("operationalSites")}</p>
          </motion.div>

          {/* Employees */}
          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-3xl font-bold text-[#B59D55]">
              <CountUp end={700} duration={2} separator="," />+
            </h3>
            <p className="text-gray-600 mt-2">{t("employees")}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
