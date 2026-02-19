import { useTranslation } from "react-i18next";
import OverviewImage from "../assets/hero1.png";

const CompanyOverview = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#4A0404] mb-6">
            {t("companyOverviewTitle")}
          </h2>

          <p className="text-gray-700 leading-relaxed text-lg">
            {t("companyOverviewText")}
          </p>

          <div className="mt-8 flex gap-8 text-[#4A0404] font-semibold">
            <div>
              <h3 className="text-2xl">2010</h3>
              <p className="text-sm text-gray-600">Established</p>
            </div>

            <div>
              <h3 className="text-2xl">3+</h3>
              <p className="text-sm text-gray-600">Operational Sites</p>
            </div>

            <div>
              <h3 className="text-2xl">1500+</h3>
              <p className="text-sm text-gray-600">Employees</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <img
            src={OverviewImage}
            alt="Mining Operations"
            className="rounded-lg shadow-xl w-full"
          />
        </div>

      </div>
    </section>
  );
};

export default CompanyOverview;
