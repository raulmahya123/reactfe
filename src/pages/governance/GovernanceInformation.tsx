import { useTranslation } from "react-i18next";
import { FileText, Download } from "lucide-react";

const PRIMARY = "#C6A75E";

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
      className="scroll-mt-24 py-20"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-[#2F3E34]">
            {t("governanceInformation")}
          </h2>

          <div className="w-20 h-[3px] bg-[#C6A75E] mx-auto mt-6"></div>
        </div>

        {/* CONTAINER */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-md p-10">

          <div className="grid md:grid-cols-2 gap-6">

            {documents.map((doc, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-5 rounded-lg 
                border border-gray-200 
                hover:shadow-sm hover:border-[#C6A75E]/40
                transition bg-[#F4F6F3]"
              >

                {/* LEFT */}
                <div className="flex items-center gap-4">
                  <div className="bg-[#C6A75E]/15 p-3 rounded-md">
                    <FileText size={20} color={PRIMARY} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-[#2F3E34]">
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
                  className="flex items-center gap-2 px-4 py-2 rounded-md 
                  bg-[#C6A75E] text-white text-xs font-semibold
                  hover:opacity-90 transition"
                >
                  <Download size={14} />
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