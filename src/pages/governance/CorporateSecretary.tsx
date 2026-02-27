import { useTranslation } from "react-i18next";
import { Mail, Phone } from "lucide-react";

const PRIMARY = "#AEB596"; // hijau logo
const CREAM = "#FFFFFF";   // cream soft

const CorporateSecretary = () => {
  const { t } = useTranslation();

  return (
    <section
      id="secretary"
      className="scroll-mt-32 py-24 border-b"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <div className="mb-14">
          <h2
            className="text-4xl font-bold"
            style={{ color: PRIMARY }}
          >
            {t("corporateSecretary")}
          </h2>
          <div
            className="w-20 h-1 mt-4 rounded-full"
            style={{ backgroundColor: PRIMARY }}
          />
        </div>

        {/* PROFILE CARD */}
        <div
          className="bg-white shadow-xl rounded-3xl p-12 grid md:grid-cols-3 gap-12 items-center"
          style={{ border: `1px solid ${PRIMARY}30` }}
        >

          {/* PHOTO */}
          <div className="w-full h-80 rounded-2xl overflow-hidden">
            <img
              src="/images/corporate-secretary.jpg"
              alt="Corporate Secretary"
              className="w-full h-full object-cover"
            />
          </div>

          {/* INFO */}
          <div className="md:col-span-2">
            <h3
              className="text-2xl font-semibold mb-4"
              style={{ color: PRIMARY }}
            >
              Corporate Secretary
            </h3>

            <p className="text-gray-600 leading-relaxed mb-8">
              The Corporate Secretary ensures the Company’s compliance with
              capital market regulations and facilitates communication between
              the Company, shareholders, regulators, and the public.
            </p>

            {/* CONTACT INFO */}
            <div className="space-y-4 text-sm">

              <div className="flex items-center gap-3">
                <div
                  className="p-2 rounded-lg"
                  style={{ backgroundColor: `${PRIMARY}20` }}
                >
                  <Mail size={16} style={{ color: PRIMARY }} />
                </div>
                <span className="text-gray-700">
                  corporate.secretary@company.com
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div
                  className="p-2 rounded-lg"
                  style={{ backgroundColor: `${PRIMARY}20` }}
                >
                  <Phone size={16} style={{ color: PRIMARY }} />
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