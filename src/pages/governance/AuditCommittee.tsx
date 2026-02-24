import { useTranslation } from "react-i18next";
import { ShieldCheck, FileText, Scale } from "lucide-react";

const AuditCommittee = () => {
  const { t } = useTranslation();

  return (
    <section
      id="audit"
      className="scroll-mt-32 py-28 bg-[#FFFFFF] border-b"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#B59D55]">
            {t("auditCommittee")}
          </h2>

          <div className="w-20 h-[3px] bg-[#B59D55] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* MAIN CARD */}
        <div className="bg-white border border-[#B59D55]/20 shadow-[0_15px_40px_rgba(0,0,0,0.05)] rounded-2xl p-12 space-y-12">

          <p className="text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
            The Audit Committee assists the Board of Commissioners in
            overseeing financial reporting processes, internal control systems,
            risk management implementation, and compliance with applicable laws
            and regulations.
          </p>

          {/* RESPONSIBILITIES GRID */}
          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-[#faf8f3] rounded-xl p-8 text-center border border-[#B59D55]/10 hover:shadow-md transition">
              <FileText className="text-[#B59D55] mx-auto mb-4" size={30} />
              <h3 className="font-semibold text-[#1a1a1a] mb-3">
                Financial Oversight
              </h3>
              <p className="text-sm text-gray-600">
                Reviewing financial statements and ensuring transparency
                in reporting.
              </p>
            </div>

            <div className="bg-[#faf8f3] rounded-xl p-8 text-center border border-[#B59D55]/10 hover:shadow-md transition">
              <ShieldCheck className="text-[#B59D55] mx-auto mb-4" size={30} />
              <h3 className="font-semibold text-[#1a1a1a] mb-3">
                Internal Control
              </h3>
              <p className="text-sm text-gray-600">
                Monitoring effectiveness of internal audit and
                risk control systems.
              </p>
            </div>

            <div className="bg-[#faf8f3] rounded-xl p-8 text-center border border-[#B59D55]/10 hover:shadow-md transition">
              <Scale className="text-[#B59D55] mx-auto mb-4" size={30} />
              <h3 className="font-semibold text-[#1a1a1a] mb-3">
                Regulatory Compliance
              </h3>
              <p className="text-sm text-gray-600">
                Ensuring compliance with laws and capital market regulations.
              </p>
            </div>

          </div>

          {/* MEMBERS */}
          <div className="mt-10 text-center">
            <h3 className="text-xl font-semibold text-[#1a1a1a] mb-6">
              Committee Members
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li>Chairman: Independent Commissioner</li>
              <li>Member: Financial Expert</li>
              <li>Member: Independent Professional</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AuditCommittee;