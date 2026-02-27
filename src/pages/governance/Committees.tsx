import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ShieldCheck, Users } from "lucide-react";

const PRIMARY = "#AEB596"; // hijau dari logo
const CREAM = "#FFFFFF";   // cream lembut yang cocok

const Committees = () => {
  const { t } = useTranslation();

  return (
    <section
      id="committees"
      className="scroll-mt-32 py-24 border-b"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <div className="mb-14">
          <h2
            className="text-4xl font-bold"
            style={{ color: PRIMARY }}
          >
            {t("committees")}
          </h2>
          <div
            className="w-20 h-1 mt-4 rounded-full"
            style={{ backgroundColor: PRIMARY }}
          />
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* AUDIT COMMITTEE */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="bg-white shadow-md hover:shadow-xl rounded-2xl p-10 transition-all"
            style={{ border: `1px solid ${PRIMARY}20` }}
          >
            <div className="flex items-center mb-6">
              <div
                className="p-3 rounded-xl mr-4"
                style={{ backgroundColor: `${PRIMARY}20` }}
              >
                <ShieldCheck size={24} style={{ color: PRIMARY }} />
              </div>
              <h3
                className="text-xl font-semibold"
                style={{ color: PRIMARY }}
              >
                Audit Committee
              </h3>
            </div>

            <p className="text-gray-600 leading-relaxed mb-8">
              The Audit Committee assists the Board of Commissioners in ensuring
              the effectiveness of internal control systems, financial reporting,
              and compliance with applicable regulations.
            </p>

            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex justify-between border-b pb-2"
                  style={{ borderColor: `${PRIMARY}20` }}>
                <span>Chairman</span>
                <span className="font-medium" style={{ color: PRIMARY }}>
                  Independent Commissioner
                </span>
              </li>
              <li className="flex justify-between border-b pb-2"
                  style={{ borderColor: `${PRIMARY}20` }}>
                <span>Member</span>
                <span className="font-medium" style={{ color: PRIMARY }}>
                  Financial Expert
                </span>
              </li>
              <li className="flex justify-between">
                <span>Member</span>
                <span className="font-medium" style={{ color: PRIMARY }}>
                  Independent Party
                </span>
              </li>
            </ul>
          </motion.div>

          {/* NOMINATION & REMUNERATION */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="bg-white shadow-md hover:shadow-xl rounded-2xl p-10 transition-all"
            style={{ border: `1px solid ${PRIMARY}20` }}
          >
            <div className="flex items-center mb-6">
              <div
                className="p-3 rounded-xl mr-4"
                style={{ backgroundColor: `${PRIMARY}20` }}
              >
                <Users size={24} style={{ color: PRIMARY }} />
              </div>
              <h3
                className="text-xl font-semibold"
                style={{ color: PRIMARY }}
              >
                Nomination & Remuneration Committee
              </h3>
            </div>

            <p className="text-gray-600 leading-relaxed mb-8">
              The Committee supports the Board in evaluating board performance,
              succession planning, and remuneration policies aligned with
              corporate governance principles.
            </p>

            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex justify-between border-b pb-2"
                  style={{ borderColor: `${PRIMARY}20` }}>
                <span>Chairman</span>
                <span className="font-medium" style={{ color: PRIMARY }}>
                  Commissioner
                </span>
              </li>
              <li className="flex justify-between border-b pb-2"
                  style={{ borderColor: `${PRIMARY}20` }}>
                <span>Member</span>
                <span className="font-medium" style={{ color: PRIMARY }}>
                  Independent Commissioner
                </span>
              </li>
              <li className="flex justify-between">
                <span>Member</span>
                <span className="font-medium" style={{ color: PRIMARY }}>
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