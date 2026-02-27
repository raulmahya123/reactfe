import { useTranslation } from "react-i18next";
import { FileText, Download, Calendar, Scale } from "lucide-react";

const PRIMARY = "#C6A75E";

const BudgetDocument = () => {
  const { t } = useTranslation();

  return (
    <section
      id="budget"
      className="scroll-mt-24 py-20"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-[#2F3E34]">
            {t("budgetDocument")}
          </h2>

          <div className="w-20 h-[3px] bg-[#C6A75E] mx-auto mt-6"></div>
        </div>

        {/* CARD */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-md p-12 space-y-10">

          {/* INFO GRID */}
          <div className="grid md:grid-cols-2 gap-10">

            <div className="flex items-start gap-4">
              <div
                className="p-3 rounded-md"
                style={{ backgroundColor: `${PRIMARY}15` }}
              >
                <Calendar size={22} style={{ color: PRIMARY }} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">
                  {t("effectiveDate")}
                </p>
                <p className="text-sm font-semibold text-[#2F3E34]">
                  31 July 2018
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div
                className="p-3 rounded-md"
                style={{ backgroundColor: `${PRIMARY}15` }}
              >
                <Scale size={22} style={{ color: PRIMARY }} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">
                  {t("notarialDeed")}
                </p>
                <p className="text-sm font-semibold text-[#2F3E34]">
                  Deed No. 58 – Ministry Approval
                </p>
              </div>
            </div>

          </div>

          {/* DESCRIPTION */}
          <div>
            <h3 className="text-lg font-semibold text-[#2F3E34] mb-3 uppercase tracking-wide">
              {t("documentOverview")}
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              {t("budgetDocumentFullDesc")}
            </p>
          </div>

          {/* DOWNLOAD */}
          <div className="bg-[#F4F6F3] border border-gray-200 rounded-lg p-8 flex flex-col md:flex-row items-center justify-between gap-6">

            <div className="flex items-center gap-4">
              <div
                className="p-3 rounded-md"
                style={{ backgroundColor: `${PRIMARY}15` }}
              >
                <FileText size={22} style={{ color: PRIMARY }} />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#2F3E34]">
                  {t("budgetDocument")}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  PDF Document
                </p>
              </div>
            </div>

            <a
              href="/documents/articles-of-association.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 rounded-md 
              bg-[#C6A75E] text-white text-sm font-semibold 
              hover:opacity-90 transition"
            >
              <Download size={18} />
              {t("download")}
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};

export default BudgetDocument;