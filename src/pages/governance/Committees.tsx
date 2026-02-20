import { useTranslation } from "react-i18next";

const Committees = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-40 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-[#8B0000] uppercase tracking-[0.1em]">
            {t("committees")}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#C6A75E] to-[#D4B76A] mt-6"></div>
        </div>

        {/* AUDIT COMMITTEE */}
        <div className="bg-white shadow-lg rounded-xl p-10 mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Audit Committee
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            The Audit Committee assists the Board of Commissioners in ensuring
            the effectiveness of internal control systems, financial reporting,
            and compliance with applicable regulations.
          </p>

          <ul className="space-y-3 text-gray-700">
            <li>• Chairman: Independent Commissioner</li>
            <li>• Member: Financial Expert</li>
            <li>• Member: Independent Party</li>
          </ul>
        </div>

        {/* NOMINATION & REMUNERATION */}
        <div className="bg-white shadow-lg rounded-xl p-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Nomination & Remuneration Committee
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            The Committee supports the Board in evaluating board performance,
            succession planning, and remuneration policies aligned with
            corporate governance principles.
          </p>

          <ul className="space-y-3 text-gray-700">
            <li>• Chairman: Commissioner</li>
            <li>• Member: Independent Commissioner</li>
            <li>• Member: HR Expert</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Committees;