import { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";
import { useTranslation } from "react-i18next";

type Ownership = {
  name: string;
  value: number;
};

/* Green hierarchy (sinkron dengan StrukturOrganisasi) */
const COLORS: string[] = [
  "#2F3E34", // primary
  "#3E5A4C",
  "#5F7D6E",
  "#8FAF97",
  "#A3B18A",
  "#C2B280", // soft gold blend
];

export default function StrukturKepemilikan() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const data: Ownership[] = [
    { name: "Billy Therstine Lim", value: 30 },
    { name: "PT Bumi Artha Caraka", value: 25 },
    { name: "PT Arkara Danatama Nusantara", value: 25 },
    { name: "PT Bhumi Caraka Persada", value: 10 },
    { name: "PT Tambang Lancar Indonesia", value: 5 },
    { name: "Arief Ramon", value: 5 },
  ];

  const activeData =
    activeIndex !== null && data[activeIndex]
      ? data[activeIndex]
      : null;

  return (
    <section
      id="struktur-kepemilikan"
      className="w-full py-20 px-6 bg-white scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-[#2F3E34]">
            {t("ownership.title")}
          </h2>
          <div className="w-20 h-[3px] bg-[#C6A75E] mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* CHART */}
          <div className="relative h-[460px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={120}
                  outerRadius={190}
                  paddingAngle={3}
                  dataKey="value"
                  animationDuration={800}
                  onMouseEnter={(_, index) =>
                    typeof index === "number" && setActiveIndex(index)
                  }
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  {data.map((_, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index % COLORS.length]}
                      stroke="#ffffff"
                      strokeWidth={2}
                      style={{
                        transform:
                          activeIndex === index
                            ? "scale(1.05)"
                            : "scale(1)",
                        transformOrigin: "center",
                        transition: "all 0.3s ease",
                        cursor: "pointer",
                      }}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>

            {/* CENTER INFO */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pointer-events-none">
              {activeData ? (
                <>
                  <span className="text-[#5F7D6E] text-xs uppercase tracking-widest">
                    {activeData.name}
                  </span>
                  <span className="text-3xl font-bold text-[#2F3E34] mt-2">
                    {activeData.value}%
                  </span>
                </>
              ) : (
                <>
                  <span className="text-[#8FAF97] text-xs uppercase tracking-widest">
                    {t("ownership.total")}
                  </span>
                  <span className="text-lg font-semibold text-[#2F3E34] mt-2">
                    PT Andalan Artha Primanusa
                  </span>
                </>
              )}
            </div>
          </div>

          {/* LEGEND */}
          <div className="space-y-4">
            {data.map((item, index) => (
              <div
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                className="flex items-center justify-between p-4 rounded-lg bg-[#F4F6F3] border border-[#E5E7EB] hover:shadow-md transition cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{
                      backgroundColor:
                        COLORS[index % COLORS.length],
                    }}
                  />
                  <span className="text-[#2F3E34] font-medium">
                    {item.name}
                  </span>
                </div>
                <span className="font-semibold text-[#2F3E34]">
                  {item.value}%
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}