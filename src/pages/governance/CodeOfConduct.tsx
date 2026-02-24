import { FileText, ShieldCheck, Scale, Users } from "lucide-react";

const PRIMARY = "#AEB596";
const CREAM = "#FFFFFF";

const principles = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    desc: "We uphold honesty, transparency, and accountability in all business activities.",
  },
  {
    icon: Scale,
    title: "Compliance",
    desc: "We comply with all applicable laws, regulations, and corporate governance standards.",
  },
  {
    icon: Users,
    title: "Professional Conduct",
    desc: "We promote respect, fairness, and ethical behavior in the workplace.",
  },
];

const CodeOfConduct = () => {
  return (
    <section
      id="code"
      className="scroll-mt-32 py-24 border-b"
      style={{ backgroundColor: CREAM }}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <div className="mb-14">
          <h2
            className="text-4xl font-bold"
            style={{ color: PRIMARY }}
          >
            Code of Conduct
          </h2>
          <div
            className="w-20 h-1 mt-4 rounded-full"
            style={{ backgroundColor: PRIMARY }}
          />
          <p className="text-gray-600 mt-6 max-w-2xl leading-relaxed">
            The Code of Conduct outlines ethical standards and expected
            behavior for all employees, management, and stakeholders to ensure
            responsible and sustainable business practices.
          </p>
        </div>

        {/* PRINCIPLES GRID */}
        <div className="grid md:grid-cols-3 gap-10 mb-16">
          {principles.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-md hover:shadow-lg transition-all duration-300"
                style={{ border: `1px solid ${PRIMARY}25` }}
              >
                <div
                  className="w-14 h-14 flex items-center justify-center rounded-xl mb-6"
                  style={{ backgroundColor: `${PRIMARY}20` }}
                >
                  <Icon size={24} style={{ color: PRIMARY }} />
                </div>

                <h3
                  className="text-lg font-semibold mb-3"
                  style={{ color: PRIMARY }}
                >
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* DOWNLOAD SECTION */}
        <div
          className="bg-white rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg"
          style={{ border: `1px solid ${PRIMARY}30` }}
        >
          <div className="flex items-center gap-5">
            <div
              className="p-4 rounded-xl"
              style={{ backgroundColor: `${PRIMARY}20` }}
            >
              <FileText size={24} style={{ color: PRIMARY }} />
            </div>
            <div>
              <p className="font-semibold text-gray-800">
                Code of Conduct Document
              </p>
              <p className="text-sm text-gray-500 mt-1">
                PDF Version – Updated 2024
              </p>
            </div>
          </div>

          <a
            href="/documents/code-of-conduct.pdf"
            download
            className="px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300"
            style={{
              backgroundColor: PRIMARY,
              color: "white",
            }}
          >
            Download Document
          </a>
        </div>

      </div>
    </section>
  );
};

export default CodeOfConduct;