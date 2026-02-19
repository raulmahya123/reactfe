import { useTranslation } from "react-i18next";

const InvestorSection = () => {
  const { t } = useTranslation();

  const links = [
    { label: t("annualReportBtn"), href: "#annual-report" },
    { label: t("financialReportBtn"), href: "#financial-report" },
    { label: t("gmsBtn"), href: "#gms" },
    { label: t("disclosureBtn"), href: "#disclosure" },
    { label: t("stockBtn"), href: "#stock" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-8 text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-[#4A0404]">
          {t("investorAccessTitle")}
        </h2>

        <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
          {t("investorAccessSubtitle")}
        </p>

        <div className="grid md:grid-cols-5 gap-6 mt-16">

          {links.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="border border-[#4A0404] text-[#4A0404] font-semibold py-6 rounded-lg hover:bg-[#4A0404] hover:text-white transition duration-300"
            >
              {item.label}
            </a>
          ))}

        </div>

      </div>
    </section>
  );
};

export default InvestorSection;
