import { useTranslation } from "react-i18next";
import { FileText, Download, Calendar, Scale } from "lucide-react";

const PRIMARY = "#AEB596"; // hijau logo
const CREAM = "#FFFFFF";   // cream soft background

const BudgetDocument = () => {
  const { t } = useTranslation();

  return (
    <section
      id="budget"
      className="scroll-mt-32 py-24 border-b"
      style={{ backgroundColor: CREAM }}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <div className="mb-14">
          <h2
            className="text-4xl font-bold"
            style={{ color: PRIMARY }}
          >
            {t("budgetDocument")}
          </h2>
          <div
            className="w-20 h-1 mt-4 rounded-full"
            style={{ backgroundColor: PRIMARY }}
          />
        </div>

        <div
          className="bg-white shadow-xl rounded-3xl p-14 space-y-12"
          style={{ border: `1px solid ${PRIMARY}30` }}
        >

          {/* INFO GRID */}
          <div className="grid md:grid-cols-2 gap-12">

            <div className="flex items-start gap-5">
              <div
                className="p-4 rounded-xl"
                style={{ backgroundColor: `${PRIMARY}20` }}
              >
                <Calendar size={24} style={{ color: PRIMARY }} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">
                  {t("effectiveDate")}
                </p>
                <p className="text-sm font-semibold text-gray-800">
                  31 July 2018
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div
                className="p-4 rounded-xl"
                style={{ backgroundColor: `${PRIMARY}20` }}
              >
                <Scale size={24} style={{ color: PRIMARY }} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">
                  {t("notarialDeed")}
                </p>
                <p className="text-sm font-semibold text-gray-800">
                  Deed No. 58 – Ministry Approval
                </p>
              </div>
            </div>

          </div>

          {/* DESCRIPTION */}
          <div>
            <h3
              className="text-lg font-semibold mb-4 uppercase tracking-wide"
              style={{ color: PRIMARY }}
            >
              {t("documentOverview")}
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              {t("budgetDocumentFullDesc")}
            </p>
          </div>

          {/* DOWNLOAD CARD */}
          <div
            className="p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6"
            style={{
              backgroundColor: PRIMARY,
              color: "white"
            }}
          >
            <div className="flex items-center gap-5">
              <div
                className="p-4 rounded-xl"
                style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
              >
                <FileText size={24} />
              </div>
              <div>
                <p className="text-sm font-semibold">
                  {t("budgetDocument")}
                </p>
                <p className="text-xs text-white/80 mt-1">
                  PDF Document
                </p>
              </div>
            </div>

            <a
              href="/documents/articles-of-association.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 rounded-lg 
              bg-white text-sm font-semibold
              transition-all duration-300"
              style={{ color: PRIMARY }}
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