import { useTranslation } from "react-i18next";

const Management = () => {
  const { t } = useTranslation();

  const directors = [
    {
      name: "Gahari Christine",
      position: t("presidentDirector"),
    },
    {
      name: "—",
      position: t("financeDirector"),
    },
  ];

  const commissioners = [
    {
      name: "Billy Theristine Lim",
      position: t("commissionerPresident"),
    },
    {
      name: "Willy Christine",
      position: t("commissioner"),
    },
    {
      name: "—",
      position: t("independentCommissioner"),
    },
  ];

  const Card = ({ member }) => (
    <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-500 overflow-hidden">
      <div className="h-2 bg-gradient-to-r from-[#4A0404] to-[#8B0000]"></div>

      <div className="p-10 text-center">
        <div className="w-32 h-32 mx-auto rounded-full border-4 border-[#C6A75E] bg-gray-200 mb-6 flex items-center justify-center text-3xl font-bold text-[#4A0404]">
          {member.name.charAt(0)}
        </div>

        <h3 className="text-xl font-semibold text-[#4A0404]">
          {member.name}
        </h3>

        <p className="text-[#C6A75E] font-medium mt-3 tracking-wide">
          {member.position}
        </p>

        <div className="w-12 h-[2px] bg-[#C6A75E] mx-auto mt-6 opacity-70"></div>
      </div>
    </div>
  );

  return (
    <section
      id="management"
      className="py-28 bg-gradient-to-b from-white to-gray-50 scroll-mt-40"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4A0404] uppercase tracking-wider">
            {t("management")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#C6A75E] to-[#D4B76A] mx-auto mt-6"></div>
        </div>

        {/* ===== DIREKSI (2 orang di atas) ===== */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {directors.map((member, index) => (
            <Card key={index} member={member} />
          ))}
        </div>

        {/* ===== KOMISARIS (3 orang di bawah - centered) ===== */}
        <div className="grid md:grid-cols-3 gap-12 md:px-24">
          {commissioners.map((member, index) => (
            <Card key={index} member={member} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Management;