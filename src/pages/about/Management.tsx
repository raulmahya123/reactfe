import { useTranslation } from "react-i18next";

const Management = () => {
  const { t } = useTranslation();

  const team = [
    {
      name: "John Doe",
      position: t("presidentDirector"),
    },
    {
      name: "Jane Smith",
      position: t("financeDirector"),
    },
    {
      name: "Michael Tan",
      position: t("operationsDirector"),
    },
  ];

  return (
    <section
      id="management"
      className="py-24 bg-gray-50 scroll-mt-40"
    >
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-[#4A0404] mb-16 uppercase tracking-wide">
          {t("management")}
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-8 text-center hover:shadow-xl transition duration-300"
            >
              {/* Avatar Placeholder */}
              <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-6"></div>

              <h3 className="text-xl font-semibold text-[#4A0404]">
                {member.name}
              </h3>

              <p className="text-[#8B0000] mt-2">
                {member.position}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Management;