import { useState } from "react";
import { useTranslation } from "react-i18next";

const Management = () => {
  const { t } = useTranslation();

  const directors = [
    {
      name: "Gahari Christine",
      position: t("presidentDirector"),
      description:
        "Memimpin strategi perusahaan dan bertanggung jawab atas arah bisnis secara keseluruhan.",
    },
    {
      name: "—",
      position: t("financeDirector"),
      description:
        "Mengelola keuangan perusahaan serta memastikan stabilitas dan pertumbuhan finansial.",
    },
  ];

  const commissioners = [
    {
      name: "Billy Theristine Lim",
      position: t("commissionerPresident"),
      description:
        "Mengawasi kebijakan direksi serta memastikan tata kelola perusahaan berjalan baik.",
    },
    {
      name: "Willy Christine",
      position: t("commissioner"),
      description:
        "Memberikan pengawasan dan masukan strategis terhadap manajemen perusahaan.",
    },
    {
      name: "—",
      position: t("independentCommissioner"),
      description:
        "Menjaga independensi dan objektivitas dalam pengambilan keputusan perusahaan.",
    },
  ];

  const auditCommittee = [
    {
      name: "Nama 1",
      position: "Komite Audit",
      description:
        "Melakukan pengawasan terhadap laporan keuangan dan sistem pengendalian internal.",
    },
    {
      name: "Nama 2",
      position: "Komite Audit",
      description:
        "Mendukung komisaris dalam memastikan kepatuhan terhadap regulasi.",
    },
  ];

  const legalCorporate = [
    {
      name: "Nama 3",
      position: "Legal & Corporate Secretary",
      description:
        "Mengelola aspek hukum perusahaan dan komunikasi dengan pemegang saham.",
    },
  ];

  const Card = ({ member }) => {
    const [open, setOpen] = useState(false);

    return (
      <div
        onClick={() => setOpen(!open)}
        className="cursor-pointer group bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-500 overflow-hidden"
      >
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

          {/* EXPAND ICON */}
          <div className="mt-4 text-sm text-gray-500">
            {open ? "▲ Hide Detail" : "▼ View Detail"}
          </div>

          {/* EXPAND CONTENT */}
          <div
            className={`transition-all duration-500 overflow-hidden ${
              open ? "max-h-40 mt-6 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-gray-600 text-sm leading-relaxed">
              {member.description}
            </p>
          </div>

          <div className="w-12 h-[2px] bg-[#C6A75E] mx-auto mt-6 opacity-70"></div>
        </div>
      </div>
    );
  };

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

        {/* DIREKSI */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {directors.map((member, index) => (
            <Card key={index} member={member} />
          ))}
        </div>

        {/* KOMISARIS */}
        <div className="grid md:grid-cols-3 gap-12 md:px-24 mb-20">
          {commissioners.map((member, index) => (
            <Card key={index} member={member} />
          ))}
        </div>

        {/* KOMITE AUDIT */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-[#4A0404] uppercase">
            Komite Audit
          </h3>
          <div className="w-16 h-1 bg-[#C6A75E] mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {auditCommittee.map((member, index) => (
            <Card key={index} member={member} />
          ))}
        </div>

        {/* LEGAL */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-[#4A0404] uppercase">
            Legal & Corporate Secretary
          </h3>
          <div className="w-16 h-1 bg-[#C6A75E] mx-auto mt-4"></div>
        </div>

        <div className="flex justify-center">
          <div className="w-full md:w-1/3">
            {legalCorporate.map((member, index) => (
              <Card key={index} member={member} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Management;