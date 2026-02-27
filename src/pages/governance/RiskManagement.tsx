import { ShieldAlert, TrendingDown, Landmark, Leaf } from "lucide-react";

const PRIMARY = "#AEB596";
const CREAM = "#FFFFFF";

const risks = [
  {
    icon: TrendingDown,
    title: "Financial Risk",
    desc: "Exposure to market fluctuations, liquidity constraints, and credit risks that may impact financial stability.",
  },
  {
    icon: ShieldAlert,
    title: "Operational Risk",
    desc: "Risks arising from operational processes, systems, human resources, and unforeseen disruptions.",
  },
  {
    icon: Landmark,
    title: "Regulatory Risk",
    desc: "Compliance risks related to laws, capital market regulations, and industry-specific requirements.",
  },
  {
    icon: Leaf,
    title: "Environmental & ESG Risk",
    desc: "Potential environmental, social, and governance risks that may affect sustainability objectives.",
  },
];

const RiskManagement = () => {
  return (
    <section
      id="risk"
      className="scroll-mt-32 py-24 border-b"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-14">
          <h2
            className="text-4xl font-bold"
            style={{ color: PRIMARY }}
          >
            Risk Management
          </h2>
          <div
            className="w-20 h-1 mt-4 rounded-full"
            style={{ backgroundColor: PRIMARY }}
          />
          <p className="text-gray-600 mt-6 max-w-2xl leading-relaxed">
            The Company implements a structured risk management framework to
            identify, assess, and mitigate risks that may affect operational
            performance, financial stability, and long-term sustainability.
          </p>
        </div>

        {/* RISK GRID */}
        <div className="grid md:grid-cols-2 gap-10">
          {risks.map((item, index) => {
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

      </div>
    </section>
  );
};

export default RiskManagement;