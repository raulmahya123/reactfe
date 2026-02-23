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
    <div className="w-full">

      {/* HERO */}
      <section className="bg-gradient-to-r from-[#BEC5A4] to-[#6B0B0B] text-white py-28">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold tracking-[0.2em] uppercase mb-4">
            {t("governanceInformation")}
          </h1>
          <div className="w-24 h-1 bg-[#C6A75E] mx-auto mb-6 rounded-full"></div>
          <p className="text-white/80 max-w-3xl mx-auto text-sm tracking-wide">
            {t("governanceInformationDesc")}
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24 bg-[#F9F6F1]">
        <div className="max-w-[1200px] mx-auto px-6">

          <div className="bg-white shadow-2xl rounded-2xl p-12 border-t-4 border-[#C6A75E]">

            <div className="grid md:grid-cols-2 gap-8">

              {documents.map((doc, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-6 rounded-xl border border-gray-200 
                  hover:shadow-lg hover:border-[#C6A75E] transition-all duration-300 bg-white group"
                >

                  {/* LEFT */}
                  <div className="flex items-center gap-5">

                    <div className="bg-[#C6A75E]/20 p-4 rounded-xl group-hover:bg-[#C6A75E]/30 transition">
                      <FileText className="text-[#C6A75E]" size={22} />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-[#BEC5A4]">
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
                    bg-[#BEC5A4] text-white text-xs font-semibold
                    hover:bg-[#6B0B0B] transition-all duration-300"
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

    </div>
  );
};

export default GovernanceInformation;