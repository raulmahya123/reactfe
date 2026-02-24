import { useTranslation } from "react-i18next";
import { FileText, Download } from "lucide-react";

const GovernanceInformation = () => {
  const { t } = useTranslation();

  const documents = [
    { key: "boardManual", file: "/documents/board-manual.pdf" },
    { key: "corporateSecretaryAppointment", file: "/documents/corporate-secretary.pdf" },
    { key: "internalAuditCharter", file: "/documents/internal-audit.pdf" },
    { key: "codeOfEthics", file: "/documents/code-of-ethics.pdf" },
    { key: "committeeGuidelines", file: "/documents/committee-guidelines.pdf" },
    { key: "auditCommitteeAppointment", file: "/documents/audit-committee.pdf" },
    { key: "nominationRemunerationProcedure", file: "/documents/nomination-remuneration.pdf" },
    { key: "riskManagementPolicy", file: "/documents/risk-management.pdf" },
    { key: "whistleblowingSystem", file: "/documents/whistleblowing.pdf" },
    { key: "antiCorruptionPolicy", file: "/documents/anti-corruption.pdf" },
    { key: "supplierCreditorPolicy", file: "/documents/supplier-policy.pdf" },
    { key: "vendorDevelopmentPolicy", file: "/documents/vendor-development.pdf" },
  ];

  return (
    <section
      id="information"
      className="scroll-mt-32 py-24 bg-gray-50 border-b"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-3xl font-bold text-[#B59D55] mb-12">
          {t("governanceInformation")}
        </h2>

        {/* DOCUMENT CARD CONTAINER */}
        <div className="bg-white shadow-lg rounded-2xl p-12 border border-[#C6A75E]/20">

          <div className="grid md:grid-cols-2 gap-8">

            {documents.map((doc, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-6 rounded-xl 
                border border-gray-200 
                hover:shadow-md hover:border-[#C6A75E] 
                transition-all duration-300 bg-white group"
              >

                {/* LEFT */}
                <div className="flex items-center gap-5">
                  <div className="bg-[#C6A75E]/15 p-4 rounded-xl group-hover:bg-[#C6A75E]/25 transition">
                    <FileText className="text-[#C6A75E]" size={22} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-gray-800">
                      {t(doc.key)}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      PDF Document
                    </p>
                  </div>
                </div>

                {/* DOWNLOAD BUTTON */}
                <a
                  href={doc.file}
                  download
                  className="flex items-center gap-2 px-4 py-2 rounded-lg 
                  bg-[#C6A75E] text-white text-xs font-semibold
                  hover:bg-[#b8964f] transition-all duration-300"
                >
                  <Download size={16} />
                  {t("download")}
                </a>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default GovernanceInformation;