import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ShieldCheck, Users } from "lucide-react";

const PRIMARY = "#C6A75E";

const Committees = () => {
  const { t } = useTranslation();

  return (
    <section
      id="committees"
      className="scroll-mt-24 py-20"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-[#2F3E34]">
            {t("committees")}
          </h2>

          <div className="w-20 h-[3px] bg-[#C6A75E] mx-auto mt-6"></div>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* AUDIT COMMITTEE */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.25 }}
            className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-md transition"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-md mr-4 bg-[#C6A75E]/15">
                <ShieldCheck size={22} color={PRIMARY} />
              </div>

              <h3 className="text-lg font-semibold text-[#2F3E34]">
                Audit Committee
              </h3>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6 text-sm">
              The Audit Committee assists the Board of Commissioners in ensuring
              the effectiveness of internal control systems, financial reporting,
              and compliance with applicable regulations.
            </p>

            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex justify-between pb-2 border-b border-gray-100">
                <span>Chairman</span>
                <span className="font-medium text-[#2F3E34]">
                  Independent Commissioner
                </span>
              </li>
              <li className="flex justify-between pb-2 border-b border-gray-100">
                <span>Member</span>
                <span className="font-medium text-[#2F3E34]">
                  Financial Expert
                </span>
              </li>
              <li className="flex justify-between">
                <span>Member</span>
                <span className="font-medium text-[#2F3E34]">
                  Independent Party
                </span>
              </li>
            </ul>
          </motion.div>

          {/* NOMINATION & REMUNERATION */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.25 }}
            className="bg-[#F4F6F3] border border-gray-200 rounded-lg p-8 hover:shadow-md transition"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-md mr-4 bg-[#C6A75E]/15">
                <Users size={22} color={PRIMARY} />
              </div>

              <h3 className="text-lg font-semibold text-[#2F3E34]">
                Nomination & Remuneration Committee
              </h3>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6 text-sm">
              The Committee supports the Board in evaluating board performance,
              succession planning, and remuneration policies aligned with
              corporate governance principles.
            </p>

            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex justify-between pb-2 border-b border-gray-100">
                <span>Chairman</span>
                <span className="font-medium text-[#2F3E34]">
                  Commissioner
                </span>
              </li>
              <li className="flex justify-between pb-2 border-b border-gray-100">
                <span>Member</span>
                <span className="font-medium text-[#2F3E34]">
                  Independent Commissioner
                </span>
              </li>
              <li className="flex justify-between">
                <span>Member</span>
                <span className="font-medium text-[#2F3E34]">
                  HR Expert
                </span>
              </li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Committees;