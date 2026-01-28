import { SectionHeading } from "./PurchasedItems";

type FurnitureItem = {
  category: string;
  items: {
    name: string;
    specs: string;
    qty: number;
    price: string;
  }[];
};

const furniture: FurnitureItem[] = [
  {
    category: "Tables",
    items: [
      { name: "Reclaimed Russian Oak Coffee Table", specs: "Black Oak finish", qty: 1, price: "~$2,800" },
      { name: "Thaddeus Forged Iron Side Table", specs: "Antiqued Brass", qty: 2, price: "~$1,000" },
    ],
  },
  {
    category: "Storage",
    items: [
      { name: "French Casement Bookcase", specs: "Antiqued Coffee", qty: 3, price: "~$4,200 ea" },
      { name: "Printmaker's Media Console", specs: "Antiqued Black Oak", qty: 1, price: "~$3,200" },
    ],
  },
  {
    category: "Lighting",
    items: [
      { name: "Pauillac Chandelier", specs: "Antiqued Brass & Glass", qty: 1, price: "~$4,500" },
      { name: "Antiqued Linen Drum Shade Floor Lamp", specs: "Brass base", qty: 2, price: "~$900 ea" },
      { name: "Luisa Table Lamp", specs: "Natural Rattan", qty: 2, price: "~$600 ea" },
    ],
  },
  {
    category: "Textiles",
    items: [
      { name: "Handknotted Wool Rug", specs: "Sage/Olive tones, 9'×12'", qty: 1, price: "~$5,000–$7,000" },
      { name: "Belgian Linen Pillows", specs: "Mix of Thyme/Cream/Amber", qty: 8, price: "~$150 ea" },
      { name: "Chunky Knit Throw", specs: "Cream", qty: 1, price: "~$250" },
    ],
  },
  {
    category: "Media",
    items: [
      { name: 'Samsung 75" The Frame TV', specs: "QLED, Art Mode", qty: 1, price: "~$2,000" },
    ],
  },
];

const categoryIcons: Record<string, string> = {
  Tables: "🪵",
  Storage: "📚",
  Lighting: "💡",
  Textiles: "🧶",
  Media: "📺",
};

export default function RecommendedFurniture() {
  return (
    <section>
      <SectionHeading title="Recommended Furniture" />
      <p className="text-muted text-sm mb-6 -mt-4">
        Curated from Restoration Hardware · Prices estimated
      </p>

      <div className="space-y-6">
        {furniture.map((group) => (
          <div key={group.category} className="bg-card border border-card-border rounded-xl overflow-hidden">
            <div className="px-5 py-3 border-b border-card-border bg-card flex items-center gap-2">
              <span>{categoryIcons[group.category]}</span>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider">{group.category}</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-card-border">
                    <th className="text-left text-muted font-medium px-5 py-3">Item</th>
                    <th className="text-left text-muted font-medium px-5 py-3 hidden sm:table-cell">Specs</th>
                    <th className="text-center text-muted font-medium px-5 py-3">Qty</th>
                    <th className="text-right text-muted font-medium px-5 py-3">Est. Price</th>
                  </tr>
                </thead>
                <tbody>
                  {group.items.map((item) => (
                    <tr key={item.name} className="border-b border-card-border/50 last:border-0 hover:bg-white/[0.02]">
                      <td className="px-5 py-3">
                        <span className="text-white font-medium">{item.name}</span>
                        <span className="block sm:hidden text-muted text-xs mt-0.5">{item.specs}</span>
                      </td>
                      <td className="px-5 py-3 text-muted hidden sm:table-cell">{item.specs}</td>
                      <td className="px-5 py-3 text-center text-muted">{item.qty}</td>
                      <td className="px-5 py-3 text-right text-emerald font-medium">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
