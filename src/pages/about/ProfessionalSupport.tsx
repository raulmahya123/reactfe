import { Building2, Landmark } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ProfessionalSupport() {
  const { t } = useTranslation();

  return (
    <section
      id="supporting-professionals"
      className="w-full py-20 px-6 bg-white scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-[#2F3E34]">
            {t("support.title")}
          </h2>
          <div className="w-20 h-[3px] bg-[#C6A75E] mx-auto mt-6"></div>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* PUBLIC ACCOUNTANT */}
          <div className="relative bg-[#F4F6F3] rounded-lg p-10 border border-[#E5E7EB] hover:shadow-md transition duration-300">

            {/* Accent Bar */}
            <div className="absolute left-0 top-0 h-full w-[4px] bg-[#C6A75E]"></div>

            {/* Icon */}
            <div className="mb-6 w-14 h-14 flex items-center justify-center rounded-md bg-white border border-[#E5E7EB] text-[#2F3E34]">
              <Building2 size={26} />
            </div>

            <h3 className="text-xl font-semibold text-[#2F3E34] mb-6">
              {t("support.accountant")}
            </h3>

            <div className="space-y-2 text-gray-700 leading-relaxed">
              <p className="font-semibold text-[#2F3E34]">
                KAP Tanubrata, Sutanto, Fahmi, Bambang dan Rekan
              </p>
              <p>Prudential Tower, 17th Floor</p>
              <p>Jl. Jendral Sudirman, Kav 79</p>
              <p>Jakarta 12910 - Indonesia</p>
            </div>
          </div>

          {/* SHARE REGISTRAR */}
          <div className="relative bg-[#F4F6F3] rounded-lg p-10 border border-[#E5E7EB] hover:shadow-md transition duration-300">

            {/* Accent Bar */}
            <div className="absolute left-0 top-0 h-full w-[4px] bg-[#C6A75E]"></div>

            {/* Icon */}
            <div className="mb-6 w-14 h-14 flex items-center justify-center rounded-md bg-white border border-[#E5E7EB] text-[#2F3E34]">
              <Landmark size={26} />
            </div>

            <h3 className="text-xl font-semibold text-[#2F3E34] mb-6">
              {t("support.bae")}
            </h3>

            <div className="space-y-2 text-gray-700 leading-relaxed">
              <p className="font-semibold text-[#2F3E34]">
                PT Datindo Entrycom
              </p>
              <p>Jl. Hayam Wuruk No.28, Lt.2</p>
              <p>Jakarta 10120 - Indonesia</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}