import { useTranslation } from "react-i18next";
import { Mail, Phone } from "lucide-react";

const PRIMARY = "#C6A75E";

const CorporateSecretary = () => {
  const { t } = useTranslation();

  return (
    <section
      id="secretary"
      className="scroll-mt-24 py-20"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-[#2F3E34]">
            {t("corporateSecretary")}
          </h2>

          <div className="w-20 h-[3px] bg-[#C6A75E] mx-auto mt-6"></div>
        </div>

        {/* PROFILE CARD */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-md p-10 grid md:grid-cols-3 gap-10 items-center">

          {/* PHOTO */}
          <div className="w-full h-72 rounded-lg overflow-hidden bg-[#F4F6F3]">
            <img
              src="/images/corporate-secretary.jpg"
              alt="Corporate Secretary"
              className="w-full h-full object-cover"
            />
          </div>

          {/* INFO */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold text-[#2F3E34] mb-4">
              Corporate Secretary
            </h3>

            <p className="text-gray-700 leading-relaxed mb-8 text-sm">
              The Corporate Secretary ensures the Company’s compliance with
              capital market regulations and facilitates communication between
              the Company, shareholders, regulators, and the public.
            </p>

            {/* CONTACT INFO */}
            <div className="space-y-4 text-sm">

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-[#C6A75E]/15">
                  <Mail size={16} color={PRIMARY} />
                </div>
                <span className="text-gray-700">
                  corporate.secretary@company.com
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-[#C6A75E]/15">
                  <Phone size={16} color={PRIMARY} />
                </div>
                <span className="text-gray-700">
                  +62 21 0000 0000
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CorporateSecretary;