import { SectionHeading } from "./PurchasedItems";

type BudgetItem = {
  label: string;
  price: string;
};

type BudgetTier = {
  name: string;
  emoji: string;
  description: string;
  total: number;
  totalLabel: string;
  color: string;
  barColor: string;
  bgColor: string;
  borderColor: string;
  items: BudgetItem[];
};

const SOFT_CAP = 50000;
const PURCHASED = 25214;

const tiers: BudgetTier[] = [
  {
    name: "Dream Build",
    emoji: "✨",
    description: "Best possible outcome, no compromises — all RH primary picks",
    total: 73414,
    totalLabel: "~$73K",
    color: "text-amber-400",
    barColor: "bg-gradient-to-r from-amber-500 to-amber-300",
    bgColor: "bg-amber-400/5",
    borderColor: "border-amber-400/20",
    items: [
      { label: "Already Purchased (table, sofa, Reyna ×2, Aeron ×8)", price: "$25,214" },
      { label: "Coffee Table (RH Reclaimed Russian Oak)", price: "$2,800" },
      { label: "Side Tables ×2 (RH Thaddeus)", price: "$2,000" },
      { label: "Bookcases ×3 (RH French Casement)", price: "$12,600" },
      { label: "Media Console (RH Printmaker's)", price: "$3,200" },
      { label: "Chandelier (RH Pauillac)", price: "$4,500" },
      { label: "Floor Lamps ×2 (RH Drum Shade)", price: "$1,800" },
      { label: "Table Lamps ×2 (RH Luisa)", price: "$1,200" },
      { label: "Accent Chairs ×2 (RH Premium, lounge zone)", price: "$8,000" },
      { label: "Persian Rug 9'×12' (RH Handknotted, red/burgundy)", price: "$7,000" },
      { label: "Pillows ×8 (RH Belgian Linen)", price: "$1,200" },
      { label: "Throw (RH Chunky Knit)", price: "$250" },
      { label: 'Samsung 75" The Frame TV', price: "$2,000" },
      { label: "Accessories & Art", price: "$1,650" },
    ],
  },
  {
    name: "Sweet Spot",
    emoji: "🎯",
    description: "Optimized mix — lands right at the $50K soft cap",
    total: 49694,
    totalLabel: "~$50K",
    color: "text-emerald",
    barColor: "bg-gradient-to-r from-emerald to-emerald-dark",
    bgColor: "bg-emerald/5",
    borderColor: "border-emerald/20",
    items: [
      { label: "Already Purchased (table, sofa, Reyna ×2, Aeron ×8)", price: "$25,214" },
      { label: "Coffee Table (Arhaus Brinton)", price: "$1,800" },
      { label: "Side Tables ×2 (Article Vitri)", price: "$400" },
      { label: "Bookcases ×3 (Room & Board Woodwind)", price: "$7,500" },
      { label: "Media Console (Article Oscuro)", price: "$800" },
      { label: "Chandelier (RH Pauillac — splurge)", price: "$4,500" },
      { label: "Floor Lamps ×2 (Article Stilt)", price: "$400" },
      { label: "Table Lamps ×2 (CB2 Rattan)", price: "$400" },
      { label: "Accent Chairs ×2 (Article Sven, lounge zone)", price: "$2,200" },
      { label: "Persian Rug 9'×12' (1stDibs Vintage, red/rust)", price: "$3,500" },
      { label: "Pillows ×8 (Article Skov)", price: "$400" },
      { label: "Throw (Article Sono)", price: "$80" },
      { label: 'Samsung 75" The Frame TV', price: "$2,000" },
      { label: "Accessories", price: "$500" },
    ],
  },
  {
    name: "Essentials Only",
    emoji: "⚡",
    description: "Must-haves to get functional — under $35K total",
    total: 34814,
    totalLabel: "~$35K",
    color: "text-sky-400",
    barColor: "bg-gradient-to-r from-sky-500 to-sky-300",
    bgColor: "bg-sky-400/5",
    borderColor: "border-sky-400/20",
    items: [
      { label: "Already Purchased (table, sofa, Reyna ×2, Aeron ×8)", price: "$25,214" },
      { label: "Coffee Table (CB2 Luisa)", price: "$1,200" },
      { label: "Bookcases ×2 (Room & Board Woodwind)", price: "$5,000" },
      { label: "Media Console (Article Oscuro)", price: "$800" },
      { label: "Floor Lamps ×2 (Article Stilt)", price: "$400" },
      { label: "Rug 9'×12' (Loloi Layla Red/Multi)", price: "$500" },
      { label: "Pillows ×4 (Article Skov)", price: "$200" },
      { label: 'LG C4 OLED 65"', price: "$1,500" },
    ],
  },
];

function BudgetBar({ spent }: { spent: number }) {
  const maxBar = SOFT_CAP * 1.6;
  const pct = Math.min((spent / maxBar) * 100, 100);
  const capPct = (SOFT_CAP / maxBar) * 100;
  const purchasedPct = (PURCHASED / maxBar) * 100;

  return (
    <div className="relative mt-3 mb-1">
      <div className="h-4 bg-background rounded-full overflow-hidden relative">
        {/* Purchased portion */}
        <div
          className="h-full rounded-l-full bg-emerald/40 absolute left-0 top-0"
          style={{ width: `${purchasedPct}%` }}
        />
        {/* Total bar */}
        <div
          className="h-full rounded-full bg-gradient-to-r from-emerald to-accent-brass transition-all duration-700 absolute left-0 top-0"
          style={{ width: `${pct}%`, opacity: 0.8 }}
        />
        {/* $50K cap marker */}
        <div
          className="absolute top-0 h-full w-0.5 bg-white/50 z-10"
          style={{ left: `${capPct}%` }}
        />
      </div>
      <div className="relative flex justify-between mt-1.5">
        <span className="text-muted text-[10px]">$0</span>
        <span
          className="text-muted text-[10px] absolute"
          style={{ left: `${purchasedPct}%`, transform: "translateX(-50%)" }}
        >
          $25K purchased
        </span>
        <span
          className="text-white/60 text-[10px] font-medium absolute"
          style={{ left: `${capPct}%`, transform: "translateX(-50%)" }}
        >
          $50K cap
        </span>
        <span className="text-muted text-[10px]">${(maxBar / 1000).toFixed(0)}K</span>
      </div>
    </div>
  );
}

export default function BudgetSummary() {
  const remaining = SOFT_CAP - PURCHASED;

  return (
    <section>
      <SectionHeading title="Budget Tiers" />
      <p className="text-muted text-sm mb-6 -mt-4">
        Three approaches to building out the office · $50K soft cap · <span className="text-emerald font-medium">${remaining.toLocaleString()}</span> remaining after purchases
      </p>

      <div className="space-y-6">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`bg-card border ${tier.borderColor} rounded-xl overflow-hidden`}
          >
            {/* Tier header */}
            <div className={`px-5 py-4 border-b border-card-border ${tier.bgColor}`}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-foreground font-bold text-lg flex items-center gap-2">
                    <span>{tier.emoji}</span>
                    {tier.name}
                  </h3>
                  <p className="text-muted text-sm mt-0.5">{tier.description}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className={`text-2xl sm:text-3xl font-bold ${tier.color}`}>
                    {tier.totalLabel}
                  </p>
                  <p className="text-muted text-xs">
                    {tier.total > SOFT_CAP
                      ? `$${((tier.total - SOFT_CAP) / 1000).toFixed(0)}K over cap`
                      : tier.total === SOFT_CAP
                      ? "Right at cap"
                      : `$${((SOFT_CAP - tier.total) / 1000).toFixed(0)}K under cap`}
                  </p>
                </div>
              </div>
              <BudgetBar spent={tier.total} />
            </div>

            {/* Items breakdown */}
            <div className="px-5 py-3">
              <details className="group/details">
                <summary className="cursor-pointer text-muted text-xs uppercase tracking-wider font-medium flex items-center gap-1.5 py-1 select-none">
                  <svg className="w-3 h-3 transition-transform group-open/details:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                  View breakdown ({tier.items.length} items)
                </summary>
                <div className="mt-2 divide-y divide-card-border/30">
                  {tier.items.map((item) => (
                    <div
                      key={item.label}
                      className="flex justify-between items-center py-2 text-sm"
                    >
                      <span className="text-foreground/70">{item.label}</span>
                      <span className={`font-medium ${tier.color} tabular-nums shrink-0 ml-4`}>
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </details>
            </div>
          </div>
        ))}
      </div>

      {/* Comparison footer */}
      <div className="mt-6 bg-card border border-card-border rounded-xl px-5 py-4">
        <p className="text-muted text-xs uppercase tracking-wider mb-3 font-medium">Quick Comparison</p>
        <div className="grid grid-cols-3 gap-4 text-center">
          {tiers.map((tier) => (
            <div key={tier.name}>
              <p className="text-lg font-bold">{tier.emoji}</p>
              <p className={`font-bold text-lg ${tier.color}`}>{tier.totalLabel}</p>
              <p className="text-muted text-xs mt-0.5">{tier.name}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-3 border-t border-card-border/50 text-center">
          <p className="text-muted text-xs">
            Already spent <span className="text-emerald font-semibold">$25,214</span> of <span className="text-foreground/60 font-semibold">$50,000</span> soft cap
            — <span className="text-foreground/60 font-semibold">${remaining.toLocaleString()}</span> remaining for new items
          </p>
        </div>
      </div>
    </section>
  );
}
