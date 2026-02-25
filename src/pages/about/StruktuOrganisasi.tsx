import React from "react";

const Box = ({
  children,
  variant = "default",
}: {
  children: React.ReactNode;
  variant?: "top" | "board" | "director" | "manager" | "default";
}) => {
  const variants: Record<string, string> = {
    top: "bg-[#2F3E34] text-white shadow-lg",
    board: "bg-[#4F6F5D] text-white shadow-md",
    director: "bg-[#6B8E73] text-white shadow-md",
    manager: "bg-[#8FAF97] text-white shadow-sm",
    default: "bg-white text-[#2F3E34] border border-[#E5E7EB] shadow-sm",
  };

  return (
    <div
      className={`px-8 py-4 rounded-2xl text-sm font-semibold text-center min-w-[220px] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${variants[variant]}`}
    >
      {children}
    </div>
  );
};

export default function StrukturOrganisasi() {
  return (
    <section
      id="strukturOrganisasi"
      className="w-full py-28 px-6 bg-gradient-to-br from-[#F4F6F3] via-[#EEF2ED] to-[#F7F8F6] overflow-x-auto scroll-mt-32"
    >
      <div className="max-w-[1500px] mx-auto flex flex-col items-center">

        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-[#2F3E34] tracking-tight">
            Struktur Organisasi
          </h2>
          <div className="w-28 h-[4px] bg-gradient-to-r from-[#6B8E73] to-[#2F3E34] mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="relative min-w-[1300px] flex flex-col items-center">

          {/* Level 1 */}
          <Box variant="top">General Meeting of Shareholders</Box>
          <div className="w-[2px] h-14 bg-[#8FAF97]"></div>

          {/* Level 2 */}
          <div className="flex gap-40 relative">
            <Box variant="board">Board of Commissioners</Box>
            <Box variant="board">Audit Committee</Box>

            <div className="absolute top-[-28px] left-1/2 -translate-x-1/2 w-[60%] h-[2px] bg-[#8FAF97]"></div>
          </div>

          <div className="w-[2px] h-14 bg-[#8FAF97]"></div>

          {/* Level 3 */}
          <div className="flex gap-32 relative">
            <Box variant="director">Corporate Secretary</Box>
            <Box variant="director">Board of Directors</Box>
            <Box variant="director">Internal Audit</Box>

            <div className="absolute top-[-28px] left-1/2 -translate-x-1/2 w-[70%] h-[2px] bg-[#8FAF97]"></div>
          </div>

          <div className="w-[2px] h-14 bg-[#8FAF97]"></div>

          {/* Level 4 */}
          <Box variant="manager">General Manager Operational</Box>

          <div className="w-[2px] h-14 bg-[#8FAF97]"></div>

          {/* Level 5 */}
          <div className="relative w-full mt-12">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-[#8FAF97]"></div>

            <div className="flex justify-between mt-10">
              {[
                "Penanggung Jawab Operational",
                "Operational Manager",
                "Plant Manager",
                "Aset Manager",
                "Supply Chain Manager",
                "SHE Manager",
                "HRGA Manager",
                "Finance Accounting Manager",
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-[2px] h-10 bg-[#8FAF97]"></div>
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