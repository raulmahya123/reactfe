import { useTranslation } from "react-i18next";

type Member = {
  name: string;
  position: string;
  image?: string;
};

const Management = () => {
  const { t } = useTranslation();

  const directors: Member[] = [
    {
      name: "Gahari Christine",
      position: t("presidentDirector"),
      image: "",
    },
    {
      name: "—",
      position: t("financeDirector"),
      image: "",
    },
  ];

  const commissioners: Member[] = [
    {
      name: "Billy Theristine Lim",
      position: t("commissionerPresident"),
      image: "",
    },
    {
      name: "Willy Christine",
      position: t("commissioner"),
      image: "",
    },
    {
      name: "—",
      position: t("independentCommissioner"),
      image: "",
    },
  ];

  const Card = ({ member }: { member: Member }) => (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-xl transition duration-300 overflow-hidden border border-gray-200">
      <div className="flex flex-col md:flex-row">

        {/* FOTO */}
        <div className="w-full md:w-1/3 bg-gray-50 flex items-center justify-center p-6">
          {member.image ? (
            <img
              src={member.image}
              alt={member.name}
              className="w-36 h-36 object-cover rounded-md"
            />
          ) : (
            <div className="w-36 h-36 bg-gray-200 rounded-md flex items-center justify-center text-3xl font-bold text-[#4A0404]">
              {member.name.charAt(0)}
            </div>
          )}
        </div>

        {/* INFO */}
        <div className="w-full md:w-2/3 p-8 relative flex flex-col justify-center">
          <h3 className="text-xl font-semibold text-[#4A0404]">
            {member.name}
          </h3>

          <p className="text-[#C6A75E] mt-2 font-medium">
            {member.position}
          </p>

          <div className="absolute right-0 top-0 h-full w-[4px] bg-[#C6A75E]"></div>
        </div>

      </div>
    </div>
  );


  return (
    <div className="flex bg-white min-h-screen">

      {/* ================= CONTENT ================= */}
      <main className="flex-1 p-12">

        {/* TITLE */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-[#4A0404]">
            {t("management")}
          </h2>
          <div className="w-full h-[2px] bg-[#C6A75E] mt-4"></div>
        </div>

        {/* DIREKTUR */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-[#4A0404] mb-6">
            {t("boardOfDirectors")}
          </h3>
          <div className="w-20 h-[2px] bg-[#C6A75E] mb-10"></div>

          <div className="grid md:grid-cols-2 gap-10">
            {directors.map((member, index) => (
              <Card key={index} member={member} />
            ))}
          </div>
        </div>

        <div className="border-t border-gray-200 my-16"></div>

        {/* KOMISARIS */}
        <div>
          <h3 className="text-2xl font-semibold text-[#4A0404] mb-6">
            {t("boardOfCommissioners")}
          </h3>
          <div className="w-20 h-[2px] bg-[#C6A75E] mb-10"></div>

          <div className="grid md:grid-cols-2 gap-10">
            {commissioners.map((member, index) => (
              <Card key={index} member={member} />
            ))}
          </div>
        </div>

      </main>
    </div>
  );
};

export default Management;