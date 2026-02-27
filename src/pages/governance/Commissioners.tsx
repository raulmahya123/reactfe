import { Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

const PRIMARY = "#AEB596";
const CREAM = "#FFFFFF";

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
      className="scroll-mt-32 py-24 border-b"
      style={{ backgroundColor: CREAM }}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <div className="mb-14">
          <h2
            className="text-4xl font-bold"
            style={{ color: PRIMARY }}
          >
            {t("corporateCommittees")}
          </h2>

          <div
            className="w-20 h-1 mt-4 rounded-full"
            style={{ backgroundColor: PRIMARY }}
          />

          <p className="text-gray-600 mt-6 max-w-2xl leading-relaxed">
            {t("corporateCommitteesDesc")}
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {committeesData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              style={{ border: `1px solid ${PRIMARY}25` }}
            >
              {/* IMAGE */}
              <div className="h-72 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              {/* INFO */}
              <div className="p-8">
                <h3
                  className="text-xl font-semibold mb-1"
                  style={{ color: PRIMARY }}
                >
                  {item.name}
                </h3>

                <p className="text-sm text-gray-500 mb-6">
                  {item.position}
                </p>

                <div className="flex items-center gap-3 text-sm text-gray-600">
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