import { useTranslation } from "react-i18next";
import OverviewImage from "../assets/hero1.png";
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(122,0,0,0.05),_transparent_60%)]"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* SECTION TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-sm tracking-widest text-[#7a0000] font-semibold uppercase">
            Company Profile
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-[#4A0404] mt-4">
            {t("companyOverviewTitle")}
          </h2>

          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Building sustainable mining operations with innovation and integrity.
          </p>

          {/* Elegant Divider */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="w-12 h-[2px] bg-[#7a0000]"></div>
            <div className="w-3 h-3 bg-[#7a0000] rotate-45"></div>
            <div className="w-12 h-[2px] bg-[#7a0000]"></div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-gray-700 leading-relaxed text-lg">
              {t("companyOverviewText")}
            </p>

            {/* Highlight Points */}
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-[#7a0000] mt-1" size={18} />
                {t("overviewPoint1")}
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle className="text-[#7a0000] mt-1" size={18} />
                {t("overviewPoint2")}
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle className="text-[#7a0000] mt-1" size={18} />
                {t("overviewPoint3")}
              </li>
            </ul>

            {/* CTA */}
            <div className="pt-6">
              <a
                href="#investor"
                className="inline-block px-8 py-3 bg-[#7a0000] text-white font-semibold rounded-md hover:bg-[#5f0000] hover:scale-105 transition-all duration-300 shadow-md"
              >
                {t("investor")}
              </a>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-[#7a0000]/10 rounded-xl"></div>
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-[#7a0000] rounded-xl"></div>

            <img
              src={OverviewImage}
              alt="Mining Operations"
              className="relative rounded-xl shadow-2xl w-full"
            />
          </motion.div>
        </div>

        {/* Divider Before Stats */}
        <div className="border-t border-gray-200 my-24"></div>

        {/* STATS SECTION */}
        <div className="grid md:grid-cols-3 gap-8">

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-3xl font-bold text-[#7a0000]">
              <CountUp end={2010} duration={2} />
            </h3>
            <p className="text-gray-600 mt-2">{t("established")}</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-3xl font-bold text-[#7a0000]">
              <CountUp end={3} duration={2} />+
            </h3>
            <p className="text-gray-600 mt-2">{t("operationalSites")}</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-3xl font-bold text-[#7a0000]">
              <CountUp end={1500} duration={2} />+
            </h3>
            <p className="text-gray-600 mt-2">{t("employees")}</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;