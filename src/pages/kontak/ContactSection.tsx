import { MapPin, Phone, Mail, Clock, Building2 } from "lucide-react";
import { useTranslation } from "react-i18next";

const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-white pt-32 pb-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-24">
          <p className="uppercase tracking-[0.35em] text-xs font-semibold mb-6 text-[#A77B3F]">
            {t("contactSection.official")}
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-black">
            {t("contactSection.title")}
          </h2>

          <div className="w-24 h-[3px] bg-[#A77B3F] mx-auto mt-8 rounded-full"></div>

          <p className="text-black max-w-2xl mx-auto mt-8 leading-relaxed whitespace-pre-line">
            {t("contactSection.description")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Head Office */}
          <div className="bg-white border border-[#A77B3F]/20 rounded-3xl p-12 shadow-md hover:shadow-xl transition-all duration-300">

            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#A77B3F]/15">
                <Building2 className="text-[#A77B3F]" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-black">
                {t("contactSection.headOffice")}
              </h3>
            </div>

            <div className="space-y-8 text-black">

              {[
                { icon: MapPin, text: t("contactSection.address") },
                { icon: Phone, text: t("contactSection.phone") },
                { icon: Mail, text: t("contactSection.email") },
                { icon: Clock, text: t("contactSection.hours") },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#A77B3F]/10">
                    <item.icon className="text-[#A77B3F]" size={18} />
                  </div>
                  <p className="leading-relaxed whitespace-pre-line">
                    {item.text}
                  </p>
                </div>
              ))}

            </div>
          </div>

          {/* Representative Office */}
          <div className="bg-white border border-[#A77B3F]/20 rounded-3xl p-12 shadow-md hover:shadow-xl transition-all duration-300">

            <div className="flex items-center gap-4 mb-12">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#A77B3F]/15">
                <Building2 className="text-[#A77B3F]" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-black">
                {t("contactSection.repOffice")}
              </h3>
            </div>

            <div className="space-y-10 text-black">

              {["bgg", "sbs", "dbk", "pos"].map((site) => (
                <div key={site}>

                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#A77B3F]/10">
                      <Building2 className="text-[#A77B3F]" size={16} />
                    </div>
                    <p className="font-semibold">
                      {t(`contactSection.sites.${site}.name`)}
                    </p>
                  </div>

                  <div className="flex gap-4 items-start ml-12">
                    <MapPin className="text-[#A77B3F]" size={18} />
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