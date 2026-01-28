const purchasedItems = [
  {
    name: "Oslo Open Rectangular Dining Table",
    specs: '120"L, Aged Black Oak',
    price: 3869,
    icon: "🪵",
  },
  {
    name: "Copenhagen Sofa",
    specs: "10' wide, Performance Linen Weave, Thyme (sage green)",
    price: 6795,
    icon: "🛋️",
  },
  {
    name: "Reyna Chair (x2)",
    specs: "Performance Bouclé, Mochaccino (warm brown)",
    price: 3390,
    icon: "💺",
  },
  {
    name: "Herman Miller Aeron Chair (x8)",
    specs: "Graphite polished aluminum, Size B Medium, PostureFit SL, Quiet roll casters",
    price: 11160,
    icon: "🪑",
  },
];

const total = purchasedItems.reduce((sum, item) => sum + item.price, 0);

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(price);
}

export default function PurchasedItems() {
  return (
    <section>
      <SectionHeading title="Already Purchased" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {purchasedItems.map((item) => (
          <div
            key={item.name}
            className="bg-card border border-card-border rounded-xl p-5 sm:p-6 hover:border-emerald/30 transition-colors group"
          >
            <div className="flex items-start justify-between mb-3">
              <span className="text-2xl">{item.icon}</span>
              <span className="text-emerald text-sm font-medium flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Purchased
              </span>
            </div>
            <h3 className="text-foreground font-semibold text-lg mb-1 group-hover:text-emerald transition-colors">
              {item.name}
            </h3>
            <p className="text-muted text-sm mb-4">{item.specs}</p>
            <p className="text-2xl font-bold text-foreground">{formatPrice(item.price)}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-end">
        <div className="bg-card border border-emerald/30 rounded-xl px-6 py-4 inline-flex items-center gap-3">
          <span className="text-muted text-sm uppercase tracking-wider">Running Total</span>
          <span className="text-emerald text-2xl font-bold">{formatPrice(total)}</span>
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-3 mb-6 sm:mb-8">
      <div className="w-1.5 h-6 bg-emerald rounded-full" />
      <h2 className="text-xl sm:text-2xl font-bold text-foreground">{title}</h2>
    </div>
  );
}
