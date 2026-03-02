import { useTranslation } from "react-i18next";

const PRIMARY = "#B59D55";

const Material = () => {
  const { t } = useTranslation();

  return (
    <section className="py-14 scroll-mt-28">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="mb-10">
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ color: PRIMARY }}
          >
            {t("material.title")}
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl leading-relaxed">
            {t("material.description")}
          </p>
        </div>

        {/* Timeline List */}
        <div className="space-y-6">
          {/* Future material disclosure timeline items here */}
        </div>

      </div>
    </section>
  );
};

export default Material;