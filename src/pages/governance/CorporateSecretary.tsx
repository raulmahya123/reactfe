import { useTranslation } from "react-i18next";

const CorporateSecretary = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-40 pb-24 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-[#8B0000] uppercase tracking-[0.1em]">
            {t("corporateSecretary")}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#C6A75E] to-[#D4B76A] mt-6"></div>
        </div>

        {/* PROFILE CARD */}
        <div className="bg-gray-50 shadow-xl rounded-xl p-12 grid md:grid-cols-3 gap-10 items-center">

          {/* PHOTO PLACEHOLDER */}
          <div className="w-full h-72 bg-gradient-to-br from-[#8B0000] to-[#4A0404] rounded-xl"></div>

          {/* INFO */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Corporate Secretary
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              The Corporate Secretary ensures the Company’s compliance with
              capital market regulations and facilitates communication between
              the Company, shareholders, regulators, and the public.
            </p>

            <div className="space-y-3 text-gray-700">
              <p><strong>Name:</strong> John Doe</p>
              <p><strong>Email:</strong> corporate.secretary@company.com</p>
              <p><strong>Phone:</strong> +62 21 0000 0000</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default CorporateSecretary;