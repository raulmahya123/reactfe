import { ShieldCheck, Mail, Phone, Lock } from "lucide-react";

const PRIMARY = "#C6A75E";

const WhistleblowingSystem = () => {
  return (
    <section
      id="wbs"
      className="scroll-mt-24 py-20"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-[#2F3E34]">
            Whistleblowing System
          </h2>

          <div className="w-20 h-[3px] bg-[#C6A75E] mx-auto mt-6"></div>

          <p className="text-gray-700 mt-6 max-w-2xl mx-auto leading-relaxed">
            The Company provides a secure and confidential channel for
            reporting suspected violations of laws, regulations, ethical
            standards, or corporate policies. All reports are handled
            independently and professionally.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT - PRINCIPLES */}
          <div className="bg-[#F4F6F3] border border-gray-200 rounded-lg p-8 hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck size={22} color={PRIMARY} />
              <h3 className="text-lg font-semibold text-[#2F3E34]">
                Protection & Confidentiality
              </h3>
            </div>

            <ul className="space-y-3 text-sm text-gray-700 leading-relaxed">
              <li>• Confidential handling of all reports</li>
              <li>• Protection against retaliation</li>
              <li>• Independent investigation process</li>
              <li>• Transparent and fair resolution</li>
            </ul>
          </div>

          {/* RIGHT - CHANNELS */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-6">
              <Lock size={22} color={PRIMARY} />
              <h3 className="text-lg font-semibold text-[#2F3E34]">
                Reporting Channels
              </h3>
            </div>

            <div className="space-y-4 text-sm text-gray-700">
              <div className="flex items-center gap-3">
                <Mail size={16} color={PRIMARY} />
                whistleblowing@company.com
              </div>

              <div className="flex items-center gap-3">
                <Phone size={16} color={PRIMARY} />
                +62 21 0000 0000
              </div>

              <p className="pt-4 text-gray-500 text-xs leading-relaxed">
                Reports may be submitted anonymously and will be reviewed
                by the designated compliance committee.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhistleblowingSystem;