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

const COLORS: string[] = [
  "#2F3E34",
  "#4F6F5D",
  "#6B8E73",
  "#8FAF97",
  "#C2B280",
  "#A3B18A",
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
      className="relative w-full py-28 px-6 bg-gradient-to-br from-[#F4F6F3] via-[#EEF2ED] to-[#F7F8F6] scroll-mt-32"
    >
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#2F3E34] tracking-tight">
            {t("ownership.title")}
          </h2>
          <div className="w-28 h-[4px] bg-gradient-to-r from-[#6B8E73] to-[#2F3E34] mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Chart */}
          <div className="relative h-[500px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={150}
                  outerRadius={210}
                  paddingAngle={3}
                  dataKey="value"
                  animationDuration={900}
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
                      strokeWidth={3}
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

            {/* Center Info */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center px-4">
              {activeData ? (
                <>
                  <span className="text-[#6B8E73] text-sm uppercase tracking-widest">
                    {activeData.name}
                  </span>
                  <span className="text-4xl font-bold text-[#2F3E34] mt-2">
                    {activeData.value}%
                  </span>
                </>
              ) : (
                <>
                  <span className="text-[#8FAF97] text-sm uppercase tracking-widest">
                    {t("ownership.total")}
                  </span>
                  <span className="text-xl font-semibold text-[#2F3E34] mt-2">
                    PT Andalan Artha Primanusa
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Legend */}
          <div className="space-y-4">
            {data.map((item, index) => (
              <div
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                className="flex items-center justify-between p-5 rounded-2xl bg-white shadow-sm border border-[#E5E7EB] hover:shadow-lg transition cursor-pointer"
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
                <span className="font-bold text-[#2F3E34]">
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