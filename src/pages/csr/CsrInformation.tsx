import { useTranslation } from "react-i18next";
import { Leaf, Users, ShieldCheck, PackageCheck, Download } from "lucide-react";

const CsrInformation = () => {
  const { t } = useTranslation();

  const sections = [
    {
      icon: <Leaf className="text-[#C6A75E]" size={24} />,
      title: "csrEnvironment",
      desc: "csrEnvironmentDesc",
      budget: "csrEnvironmentBudget",
    },
    {
      icon: <ShieldCheck className="text-[#C6A75E]" size={24} />,
      title: "csrLabor",
      desc: "csrLaborDesc",
      budget: "csrLaborBudget",
    },
    {
      icon: <Users className="text-[#C6A75E]" size={24} />,
      title: "csrSocial",
      desc: "csrSocialDesc",
      budget: "csrSocialBudget",
    },
    {
      icon: <PackageCheck className="text-[#C6A75E]" size={24} />,
      title: "csrProduct",
      desc: "csrProductDesc",
      budget: "csrProductBudget",
    },
  ];

  return (
    <div className="w-full">

      {/* HERO */}
      <section className=" text-black pt-44 pb-32">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold tracking-[0.25em] uppercase mb-4">
            {t("csrInformation")}
          </h1>

          <div className="w-32 h-[2px] bg-[#C6A75E] mx-auto mb-6"></div>

          <p className="max-w-3xl mx-auto text-sm tracking-wide leading-relaxed">
            {t("csrInformationDesc")}
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 space-y-12">

          {sections.map((item, index) => (
            <div
              key={index}
              className="bg-white p-12 rounded-3xl shadow-lg border border-[#C6A75E]/30"
            >
              {/* TITLE */}
              <div className="flex items-center gap-5 mb-6">
                <div className="bg-[#C6A75E]/15 p-4 rounded-xl">
                  {item.icon}
                </div>
                <h2 className="text-xl font-semibold text-black uppercase tracking-wide">
                  {t(item.title)}
                </h2>
              </div>

              {/* DESCRIPTION */}
              <p className="text-sm text-black leading-relaxed mb-6">
                {t(item.desc)}
              </p>

              {/* BUDGET TABLE */}
              <div className="bg-[#F9F6F1] rounded-xl p-6 border border-[#C6A75E]/20">
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">
                  {t("csrBudget")}
                </p>
                <p className="text-sm font-semibold text-black">
                  {t(item.budget)}
                </p>
              </div>
            </div>
          ))}

          {/* SUPPORTING DOCUMENT */}
          <div className="bg-[#F1EAD8] p-10 rounded-3xl flex items-center justify-between">

            <div>
              <h3 className="text-lg font-semibold mb-2 text-black">
                {t("csrSupportingDocument")}
              </h3>
              <p className="text-sm text-black">
                {t("csrSupportingDocumentDesc")}
              </p>
            </div>

            <a
              href="/documents/sustainability-report.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 rounded-lg 
              bg-[#C6A75E] text-black text-sm font-semibold
              hover:bg-[#D4B76A] transition-all duration-300"
            >
              <Download size={18} />
              {t("download")}
            </a>

          </div>

        </div>
      </section>

    </div>
  );
};

export default CsrInformation;