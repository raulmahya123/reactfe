import { MapPin, Phone, Mail, Clock, Building2 } from "lucide-react";
import { useTranslation } from "react-i18next";

const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-24">
          <p className="uppercase tracking-[0.35em] text-xs text-[#7A0000] font-semibold mb-6">
            {t("contactSection.official")}
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-[#BEC5A4]">
            {t("contactSection.title")}
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-[#C6A75E] to-[#E5C97A] mx-auto mt-8 rounded-full"></div>

          <p className="text-gray-600 max-w-2xl mx-auto mt-8 leading-relaxed whitespace-pre-line">
            {t("contactSection.description")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Head Office */}
          <div className="bg-white border border-gray-200 rounded-2xl p-10 shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-gradient-to-br from-[#C6A75E] to-[#E5C97A]">
                <Building2 className="text-[#BEC5A4]" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-[#7A0000]">
                {t("contactSection.headOffice")}
              </h3>
            </div>

            <div className="space-y-6 text-gray-700">
              <div className="flex gap-4">
                <MapPin className="text-[#C6A75E]" />
                <p className="whitespace-pre-line">
                  {t("contactSection.address")}
                </p>
              </div>

              <div className="flex gap-4">
                <Phone className="text-[#C6A75E]" />
                <p>{t("contactSection.phone")}</p>
              </div>

              <div className="flex gap-4">
                <Mail className="text-[#C6A75E]" />
                <p>{t("contactSection.email")}</p>
              </div>

              <div className="flex gap-4">
                <Clock className="text-[#C6A75E]" />
                <p>{t("contactSection.hours")}</p>
              </div>
            </div>
          </div>

          {/* Representative Office */}
          <div className="bg-white border border-gray-200 rounded-2xl p-10 shadow-sm hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-bold text-[#7A0000] mb-10">
              {t("contactSection.repOffice")}
            </h3>

            <div className="space-y-10 text-gray-700">

              {["bgg", "sbs", "dbk", "pos"].map((site) => (
                <div key={site}>
                  <div className="flex gap-4 mb-2">
                    <Building2 className="text-[#C6A75E]" />
                    <p className="font-semibold">
                      {t(`contactSection.sites.${site}.name`)}
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <MapPin className="text-[#C6A75E]" />
                    <p>
                      {t(`contactSection.sites.${site}.location`)}
                    </p>
                  </div>
                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;