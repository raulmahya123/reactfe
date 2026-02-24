import { ShieldCheck, Mail, Phone, Lock } from "lucide-react";

const PRIMARY = "#AEB596";
const CREAM = "#FFFFFF";

const WhistleblowingSystem = () => {
  return (
    <section
      id="wbs"
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
            Whistleblowing System
          </h2>
          <div
            className="w-20 h-1 mt-4 rounded-full"
            style={{ backgroundColor: PRIMARY }}
          />
          <p className="text-gray-600 mt-6 max-w-2xl leading-relaxed">
            The Company provides a secure and confidential channel for
            reporting suspected violations of laws, regulations, ethical
            standards, or corporate policies. All reports are handled
            independently and professionally.
          </p>
        </div>

        {/* CONTENT GRID */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT - PRINCIPLES */}
          <div
            className="bg-white rounded-3xl p-10 shadow-md"
            style={{ border: `1px solid ${PRIMARY}25` }}
          >
            <div className="flex items-center gap-4 mb-6">
              <ShieldCheck size={24} style={{ color: PRIMARY }} />
              <h3
                className="text-xl font-semibold"
                style={{ color: PRIMARY }}
              >
                Protection & Confidentiality
              </h3>
            </div>

            <ul className="space-y-4 text-sm text-gray-600 leading-relaxed">
              <li>• Confidential handling of all reports</li>
              <li>• Protection against retaliation</li>
              <li>• Independent investigation process</li>
              <li>• Transparent and fair resolution</li>
            </ul>
          </div>

          {/* RIGHT - REPORTING CHANNELS */}
          <div
            className="bg-white rounded-3xl p-10 shadow-md"
            style={{ border: `1px solid ${PRIMARY}25` }}
          >
            <div className="flex items-center gap-4 mb-6">
              <Lock size={24} style={{ color: PRIMARY }} />
              <h3
                className="text-xl font-semibold"
                style={{ color: PRIMARY }}
              >
                Reporting Channels
              </h3>
            </div>

            <div className="space-y-5 text-sm text-gray-600">

              <div className="flex items-center gap-3">
                <Mail size={18} style={{ color: PRIMARY }} />
                whistleblowing@company.com
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} style={{ color: PRIMARY }} />
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