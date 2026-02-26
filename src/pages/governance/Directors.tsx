import { Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

const PRIMARY = "#AEB596";
const CREAM = "#FFFFFF";

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
      className="scroll-mt-32 py-24 border-b"
      style={{ backgroundColor: CREAM }}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-14">
          <h2
            className="text-4xl font-bold"
            style={{ color: PRIMARY }}
          >
            {t("boardOfDirectors")}
          </h2>

          <div
            className="w-20 h-1 mt-4 rounded-full"
            style={{ backgroundColor: PRIMARY }}
          />

          <p className="text-gray-600 mt-6 max-w-2xl leading-relaxed">
            {t("boardOfDirectorsDesc")}
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {directorsData.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                item.highlight ? "lg:col-span-3 md:col-span-2" : ""
              }`}
              style={{ border: `1px solid ${PRIMARY}25` }}
            >
              <div className={`grid ${item.highlight ? "md:grid-cols-2" : ""}`}>
                
                {/* IMAGE */}
                <div className="h-80 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                </div>

                {/* INFO */}
                <div className="p-8 flex flex-col justify-center">
                  <h3
                    className="text-2xl font-semibold mb-1"
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

                  {item.highlight && (
                    <p className="text-sm text-gray-600 mt-6 leading-relaxed">
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