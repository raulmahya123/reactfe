import { useTranslation } from "react-i18next";
import { FileText, Download, Calendar, Scale } from "lucide-react";

const BudgetDocument = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full">

      {/* HERO */}
      <section className="bg-gradient-to-r from-[#4A0404] via-[#5B0606] to-[#6B0B0B] text-white py-32">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold tracking-[0.25em] uppercase mb-4">
            {t("budgetDocument")}
          </h1>
          <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-[#C6A75E] to-transparent mx-auto mb-6"></div>
          <p className="text-white/80 max-w-3xl mx-auto text-sm tracking-wide leading-relaxed">
            {t("budgetDocumentDesc")}
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24 bg-[#F8F5EF]">
        <div className="max-w-[1000px] mx-auto px-6">

          <div className="bg-white shadow-2xl rounded-3xl p-14 border border-[#C6A75E]/40 space-y-12">

            {/* INFO GRID */}
            <div className="grid md:grid-cols-2 gap-12">

              <div className="flex items-start gap-5">
                <div className="bg-[#C6A75E]/15 p-4 rounded-xl">
                  <Calendar className="text-[#C6A75E]" size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">
                    {t("effectiveDate")}
                  </p>
                  <p className="text-sm font-semibold text-[#4A0404]">
                    31 July 2018
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-[#C6A75E]/15 p-4 rounded-xl">
                  <Scale className="text-[#C6A75E]" size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">
                    {t("notarialDeed")}
                  </p>
                  <p className="text-sm font-semibold text-[#4A0404]">
                    Deed No. 58 – Ministry Approval
                  </p>
                </div>
              </div>

            </div>

            {/* DESCRIPTION */}
            <div>
              <h2 className="text-xl font-semibold text-[#4A0404] mb-4 uppercase tracking-wide">
                {t("documentOverview")}
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                {t("budgetDocumentFullDesc")}
              </p>
            </div>

            {/* DOWNLOAD CARD */}
            <div className="bg-gradient-to-r from-[#4A0404] to-[#6B0B0B] text-white p-8 rounded-2xl flex items-center justify-between">

              <div className="flex items-center gap-5">
                <div className="bg-[#C6A75E] p-4 rounded-xl">
                  <FileText className="text-[#4A0404]" size={24} />
                </div>
                <div>
                  <p className="text-sm font-semibold">
                    {t("budgetDocument")}
                  </p>
                  <p className="text-xs text-white/70 mt-1">
                    PDF Document
                  </p>
                </div>
              </div>

              <a
                href="/documents/articles-of-association.pdf"
                download
                className="flex items-center gap-2 px-6 py-3 rounded-lg 
                bg-[#C6A75E] text-[#4A0404] text-sm font-semibold
                hover:bg-[#D4B76A] transition-all duration-300"
              >
                <Download size={18} />
                {t("download")}
              </a>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default BudgetDocument;