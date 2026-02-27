import { useTranslation } from "react-i18next";
import React from "react";
const Box = ({
  children,
  variant = "default",
}: {
  children: React.ReactNode;
  variant?: "top" | "board" | "director" | "manager" | "default";
}) => {
  const variants: Record<string, string> = {
    top: "bg-[#2F3E34] text-white shadow-md",
    board: "bg-[#3E5A4C] text-white shadow-sm",
    director: "bg-[#5F7D6E] text-white shadow-sm",
    manager: "bg-[#8FAF97] text-white shadow-sm",
    default:
      "bg-[#F4F6F3] text-[#2F3E34] border border-[#DCE3DD] shadow-sm",
  };

  return (
    <div
      className={`px-6 py-4 rounded-lg text-sm font-semibold text-center min-w-[220px] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${variants[variant]}`}
    >
      {children}
    </div>
  );
};

export default function StrukturOrganisasi() {
  const { t } = useTranslation();

  const level5 = [
    t("struktur.op1"),
    t("struktur.op2"),
    t("struktur.op3"),
    t("struktur.op4"),
    t("struktur.op5"),
    t("struktur.op6"),
    t("struktur.op7"),
    t("struktur.op8"),
  ];

  return (
    <section
      id="struktur-organisasi"
      className="w-full py-20 px-6 to-white overflow-x-auto scroll-mt-24"
    >
      <div className="max-w-[1500px] mx-auto flex flex-col items-center">

        {/* TITLE */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-[#2F3E34]">
            {t("struktur.title")}
          </h2>
          <div className="w-20 h-[3px] bg-[#C6A75E] mx-auto mt-6"></div>
        </div>

        <div className="relative min-w-[1300px] flex flex-col items-center">

          {/* LEVEL 1 */}
          <Box variant="top">{t("struktur.gms")}</Box>
          <div className="w-[2px] h-12 bg-[#5F7D6E]/60"></div>

          {/* LEVEL 2 */}
          <div className="relative flex gap-32 items-start">

            <div className="absolute top-0 left-[110px] right-[110px] h-[2px] bg-[#5F7D6E]/60"></div>

            <div className="flex flex-col items-center pt-12">
              <Box variant="board">{t("struktur.boc")}</Box>
            </div>

            <div className="flex flex-col items-center pt-12">
              <Box variant="board">{t("struktur.audit")}</Box>
            </div>
          </div>

          <div className="w-[2px] h-12 bg-[#5F7D6E]/60"></div>

          {/* LEVEL 3 */}
          <div className="relative flex gap-28 items-start">

            <div className="absolute top-0 left-[110px] right-[110px] h-[2px] bg-[#5F7D6E]/60"></div>

            <div className="flex flex-col items-center pt-12">
              <Box variant="director">{t("struktur.cs")}</Box>
            </div>

            <div className="flex flex-col items-center pt-12">
              <Box variant="director">{t("struktur.bod")}</Box>
            </div>

            <div className="flex flex-col items-center pt-12">
              <Box variant="director">{t("struktur.internalAudit")}</Box>
            </div>
          </div>

          <div className="w-[2px] h-12 bg-[#5F7D6E]/60"></div>

          {/* LEVEL 4 */}
          <Box variant="manager">{t("struktur.gmOperational")}</Box>
          <div className="w-[2px] h-12 bg-[#5F7D6E]/60"></div>

          {/* LEVEL 5 */}
          <div className="relative w-full mt-10">

            <div className="absolute top-0 left-[110px] right-[110px] h-[2px] bg-[#5F7D6E]/60"></div>

            <div className="flex justify-between pt-12">
              {level5.map((item, index) => (
                <div key={index} className="relative flex flex-col items-center">

                  <div className="absolute -top-12 w-[2px] h-12 bg-[#5F7D6E]/60"></div>

                  <Box>{item}</Box>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}