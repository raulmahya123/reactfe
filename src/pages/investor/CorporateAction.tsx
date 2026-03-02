import { useTranslation } from "react-i18next";

const PRIMARY = "#B7A15A";

const CorporateAction = () => {
  const { t } = useTranslation();

  return (
    <section
      id="corporate-action"
      className="scroll-mt-28 py-14 border-b border-gray-200"
    >
      <div className="max-w-5xl mx-auto px-6">

        {/* TITLE */}
        <div className="mb-10">
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ color: PRIMARY }}
          >
            {t("corporateAction")}
          </h2>

          <div
            className="w-20 h-1 mt-4 rounded-full"
            style={{ backgroundColor: PRIMARY }}
          />

          <p className="text-gray-600 mt-5 max-w-2xl leading-relaxed">
            {t("corporateActionDesc")}
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Future corporate action cards go here */}
        </div>

      </div>
    </section>
  );
};

export default CorporateAction;