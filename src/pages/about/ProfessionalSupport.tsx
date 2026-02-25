import { Building2, Landmark } from "lucide-react";

export default function ProfessionalSupport() {
  return (
    <section
      id="professionalSupport"
      className="relative w-full py-32 px-6 bg-gradient-to-br from-[#F4F6F3] via-[#EEF2ED] to-[#F7F8F6] scroll-mt-32"
    >
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <div className="text-center mb-24">
          <h2 className="text-5xl font-bold text-[#2F3E34] tracking-tight">
            Profesi Penunjang
          </h2>
          <div className="w-32 h-[4px] bg-gradient-to-r from-[#6B8E73] to-[#2F3E34] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-14">

          {/* AKUNTAN PUBLIK */}
          <div className="group relative bg-white/80 backdrop-blur-lg rounded-3xl p-12 border border-[#E5E7EB] shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">

            {/* Decorative Accent */}
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#6B8E73] to-[#2F3E34]"></div>

            {/* Icon */}
            <div className="mb-8 w-16 h-16 flex items-center justify-center rounded-full bg-[#EEF2ED] text-[#2F3E34] shadow-md">
              <Building2 size={28} />
            </div>

            <h3 className="text-2xl font-bold text-[#2F3E34] mb-6">
              Akuntan Publik
            </h3>

            <div className="space-y-2 text-[#4F6F5D] leading-relaxed">
              <p className="font-semibold text-[#2F3E34]">
                KAP Tanubrata, Sutanto, Fahmi, Bambang dan Rekan
              </p>
              <p>Prudential Tower, 17th Floor</p>
              <p>Jl. Jendral Sudirman, Kav 79</p>
              <p>Jakarta 12910 - Indonesia</p>
            </div>
          </div>

          {/* BAE */}
          <div className="group relative bg-white/80 backdrop-blur-lg rounded-3xl p-12 border border-[#E5E7EB] shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">

            {/* Decorative Accent */}
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#6B8E73] to-[#2F3E34]"></div>

            {/* Icon */}
            <div className="mb-8 w-16 h-16 flex items-center justify-center rounded-full bg-[#EEF2ED] text-[#2F3E34] shadow-md">
              <Landmark size={28} />
            </div>

            <h3 className="text-2xl font-bold text-[#2F3E34] mb-6">
              Biro Administrasi Efek (BAE)
            </h3>

            <div className="space-y-2 text-[#4F6F5D] leading-relaxed">
              <p className="font-semibold text-[#2F3E34]">
                PT Datindo Entrycom
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}