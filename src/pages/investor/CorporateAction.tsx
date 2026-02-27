import { useTranslation } from "react-i18next";

const PRIMARY = "#B7A15A";
const CREAM = "#FFFFFF";

const CorporateAction = () => {
  const { t } = useTranslation();

  return (
    <section
      id="corporate-action"
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
            {t("corporateAction")}
          </h2>

          <div
            className="w-24 h-1 mt-4 rounded-full"
            style={{ backgroundColor: PRIMARY }}
          />

          <p className="text-gray-600 mt-6 max-w-3xl leading-relaxed">
            {t("corporateActionDesc")}
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-10">
        </div>

      </div>
    </section>
  );
};

export default CorporateAction;