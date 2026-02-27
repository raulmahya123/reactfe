import { MapPin, Phone, Mail, Clock, Building2 } from "lucide-react";
import { useTranslation } from "react-i18next";

const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      className="bg-white pt-36 pb-24 scroll-mt-40"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-[#2F3E34]">
            {t("contactSection.title")}
          </h2>

          <div className="w-20 h-[3px] bg-[#C6A75E] mx-auto mt-6"></div>

          <p className="text-gray-600 max-w-2xl mx-auto mt-6 leading-relaxed whitespace-pre-line">
            {t("contactSection.description")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* HEAD OFFICE */}
          <div className="bg-white border border-gray-200 rounded-xl p-10 shadow-md hover:shadow-lg transition">

            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#C6A75E]/15">
                <Building2 className="text-[#C6A75E]" size={22} />
              </div>
              <h3 className="text-xl font-semibold text-[#2F3E34]">
                {t("contactSection.headOffice")}
              </h3>
            </div>

            <div className="space-y-6 text-gray-700">

              {[
                { icon: MapPin, text: t("contactSection.address") },
                { icon: Phone, text: t("contactSection.phone") },
                { icon: Mail, text: t("contactSection.email") },
                { icon: Clock, text: t("contactSection.hours") },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-9 h-9 flex items-center justify-center rounded-md bg-[#C6A75E]/10">
                    <item.icon className="text-[#C6A75E]" size={16} />
                  </div>
                  <p className="leading-relaxed whitespace-pre-line">
                    {item.text}
                  </p>
                </div>
              ))}

            </div>
          </div>

          {/* REPRESENTATIVE OFFICE */}
          <div className="bg-white border border-gray-200 rounded-xl p-10 shadow-md hover:shadow-lg transition">

            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#C6A75E]/15">
                <Building2 className="text-[#C6A75E]" size={22} />
              </div>
              <h3 className="text-xl font-semibold text-[#2F3E34]">
                {t("contactSection.repOffice")}
              </h3>
            </div>

            <div className="space-y-8 text-gray-700">

              {["bgg", "sbs", "dbk", "pos"].map((site) => (
                <div key={site}>

                  <div className="flex items-center gap-3 mb-2">
                    <Building2 className="text-[#C6A75E]" size={16} />
                    <p className="font-semibold text-[#2F3E34]">
                      {t(`contactSection.sites.${site}.name`)}
                    </p>
                  </div>

                  <div className="flex gap-3 items-start ml-6">
                    <MapPin className="text-[#C6A75E]" size={16} />
                    <p className="text-sm">
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