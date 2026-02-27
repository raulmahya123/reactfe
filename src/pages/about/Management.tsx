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
    <div className="bg-white rounded-lg border border-gray-100 hover:shadow-md transition duration-300 overflow-hidden">
      <div className="flex flex-col md:flex-row">

        {/* FOTO */}
        <div className="w-full md:w-1/3 bg-[#F8F9F4] flex items-center justify-center p-6">
          {member.image ? (
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 object-cover rounded-md"
            />
          ) : (
            <div className="w-32 h-32 bg-white border border-gray-200 rounded-md flex items-center justify-center text-3xl font-semibold text-[#2F3E34]">
              {member.name.charAt(0)}
            </div>
          )}
        </div>

        {/* INFO */}
        <div className="w-full md:w-2/3 p-8 flex flex-col justify-center relative">

          <h3 className="text-xl font-semibold text-[#2F3E34] tracking-wide">
            {member.name}
          </h3>

          <p className="text-[#C6A75E] mt-2 font-medium">
            {member.position}
          </p>

          <div className="absolute right-0 top-0 h-full w-[3px] bg-[#C6A75E]"></div>

        </div>
      </div>
    </div>
  );

  return (
    <section className="bg-white py-20 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-[#2F3E34]">
            {t("management")}
          </h2>
          <div className="w-20 h-[3px] bg-[#C6A75E] mx-auto mt-6"></div>
        </div>

        {/* DIREKTUR */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-[#2F3E34] mb-6">
            {t("boardOfDirectorss")}
          </h3>
          <div className="w-16 h-[2px] bg-[#C6A75E] mb-10"></div>

          <div className="grid md:grid-cols-2 gap-10">
            {directors.map((member, index) => (
              <Card key={index} member={member} />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 my-14"></div>

        {/* KOMISARIS */}
        <div>
          <h3 className="text-2xl font-semibold text-[#2F3E34] mb-6">
            {t("boardOfCommissioners")}
          </h3>
          <div className="w-16 h-[2px] bg-[#C6A75E] mb-10"></div>

          <div className="grid md:grid-cols-2 gap-10">
            {commissioners.map((member, index) => (
              <Card key={index} member={member} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Management;