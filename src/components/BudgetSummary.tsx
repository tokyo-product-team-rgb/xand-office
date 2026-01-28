import { SectionHeading } from "./PurchasedItems";

const budgetItems = [
  { label: "Already Purchased", value: "$14,054", color: "text-emerald", bar: 27 },
  { label: "Recommended Items", value: "~$35K–$40K", color: "text-accent-brass", bar: 73 },
];

export default function BudgetSummary() {
  return (
    <section>
      <SectionHeading title="Budget Summary" />
      <div className="bg-card border border-card-border rounded-xl p-6 sm:p-8">
        <div className="space-y-6">
          {budgetItems.map((item) => (
            <div key={item.label}>
              <div className="flex justify-between items-center mb-2">
                <span className="text-muted text-sm">{item.label}</span>
                <span className={`${item.color} font-bold text-lg`}>{item.value}</span>
              </div>
              <div className="h-2 bg-background rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${
                    item.color === "text-emerald" ? "bg-emerald" : "bg-accent-brass"
                  }`}
                  style={{ width: `${item.bar}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-card-border">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <div>
              <p className="text-white font-bold text-lg">Estimated Total</p>
              <p className="text-muted text-sm">Full office build-out</p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-white">~$49K–$54K</p>
              <p className="text-muted text-xs mt-1">Including all purchased & recommended items</p>
            </div>
          </div>
          <div className="mt-4 h-3 bg-background rounded-full overflow-hidden">
            <div className="h-full rounded-full bg-gradient-to-r from-emerald to-accent-brass" style={{ width: "100%" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
