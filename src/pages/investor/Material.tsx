import { useTranslation } from "react-i18next";

const Material = () => {
  const { t } = useTranslation();
  return (
    <section className="py-16 px-6 md:px-12 bg-[#f9f9f9] min-h-screen">
      
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-[#B59D55]">
          {t("material.title")}
        </h2>

        <p className="text-gray-600 mt-3 max-w-2xl">
          {t("material.description")}
        </p>
      </div>

      {/* Timeline List */}
      <div className="space-y-6">
      </div>
    </section>
  );
};

export default Material;