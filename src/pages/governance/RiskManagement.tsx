import { ShieldAlert, TrendingDown, Landmark, Leaf } from "lucide-react";

const PRIMARY = "#C6A75E";

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
      className="scroll-mt-24 py-20"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-[#2F3E34]">
            Risk Management
          </h2>

          <div className="w-20 h-[3px] bg-[#C6A75E] mx-auto mt-6"></div>

          <p className="text-gray-700 mt-6 max-w-2xl mx-auto leading-relaxed">
            The Company implements a structured risk management framework to
            identify, assess, and mitigate risks that may affect operational
            performance, financial stability, and long-term sustainability.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8">
          {risks.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-[#F4F6F3] border border-gray-200 rounded-lg p-8 hover:shadow-md transition"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-md mb-6 bg-[#C6A75E]/15">
                  <Icon size={22} color={PRIMARY} />
                </div>

                <h3 className="text-lg font-semibold text-[#2F3E34] mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-700 leading-relaxed">
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