import { Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

const PRIMARY = "#C6A75E";

const Committees = () => {
  const { t } = useTranslation();

  const committeesData = [
    {
      name: "Audit Committee",
      position: t("auditCommittee"),
      email: "audit@company.com",
      image: "/images/committee1.jpg",
    },
  ];

  return (
    <section
      id="committees"
      className="scroll-mt-24 py-20"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-[#2F3E34]">
            {t("corporateCommittees")}
          </h2>

          <div className="w-20 h-[3px] bg-[#C6A75E] mx-auto mt-6"></div>

          <p className="text-gray-700 mt-6 max-w-2xl mx-auto leading-relaxed">
            {t("corporateCommitteesDesc")}
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {committeesData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 hover:shadow-md transition overflow-hidden"
            >
              {/* IMAGE */}
              <div className="h-64 overflow-hidden bg-[#F4F6F3]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              {/* INFO */}
              <div className="p-8">
                <h3 className="text-lg font-semibold text-[#2F3E34] mb-1">
                  {item.name}
                </h3>

                <p className="text-sm text-gray-500 mb-6">
                  {item.position}
                </p>

                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <Mail size={16} style={{ color: PRIMARY }} />
                  {item.email}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Committees;