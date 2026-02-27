import { Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

const PRIMARY = "#C6A75E";

const Directors = () => {
  const { t } = useTranslation();

  const directorsData = [
    {
      name: "David Santoso",
      position: t("presidentDirector"),
      email: "david@company.com",
      image: "/images/director1.jpg",
      highlight: true,
      description: t("presidentDirectorDesc"),
    },
    {
      name: "Rina Kurniawati",
      position: t("financeDirector"),
      email: "rina@company.com",
      image: "/images/director2.jpg",
    },
    {
      name: "Arief Nugroho",
      position: t("operationsDirector"),
      email: "arief@company.com",
      image: "/images/director3.jpg",
    },
  ];

  return (
    <section
      id="directors"
      className="scroll-mt-24 py-20"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-[#2F3E34]">
            {t("boardOfDirectors")}
          </h2>

          <div className="w-20 h-[3px] bg-[#C6A75E] mx-auto mt-6"></div>

          <p className="text-gray-700 mt-6 max-w-2xl mx-auto leading-relaxed">
            {t("boardOfDirectorsDesc")}
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {directorsData.map((item, index) => (
            <div
              key={index}
              className={`bg-white border border-gray-200 rounded-lg hover:shadow-md transition overflow-hidden ${
                item.highlight ? "lg:col-span-3 md:col-span-2" : ""
              }`}
            >
              <div className={`grid ${item.highlight ? "md:grid-cols-2" : ""}`}>

                {/* IMAGE */}
                <div className="h-72 overflow-hidden bg-[#F4F6F3]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                </div>

                {/* INFO */}
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-xl font-semibold text-[#2F3E34] mb-1">
                    {item.name}
                  </h3>

                  <p className="text-sm text-gray-500 mb-6">
                    {item.position}
                  </p>

                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <Mail size={16} color={PRIMARY} />
                    {item.email}
                  </div>

                  {item.highlight && (
                    <p className="text-sm text-gray-700 mt-6 leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Directors;