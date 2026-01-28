import { SectionHeading } from "./PurchasedItems";

type Alternative = {
  store: string;
  name: string;
  price: string;
};

type Item = {
  name: string;
  specs: string;
  qty: number;
  price: string;
  alternatives: Alternative[];
};

type FurnitureGroup = {
  category: string;
  items: Item[];
};

const furniture: FurnitureGroup[] = [
  {
    category: "Tables",
    items: [
      {
        name: "Reclaimed Russian Oak Coffee Table",
        specs: "Black Oak finish",
        qty: 1,
        price: "~$2,800",
        alternatives: [
          { store: "Arhaus", name: "Brinton Coffee Table", price: "~$1,800" },
          { store: "CB2", name: "Luisa Coffee Table", price: "~$1,200" },
        ],
      },
      {
        name: "Thaddeus Forged Iron Side Table",
        specs: "Antiqued Brass",
        qty: 2,
        price: "~$1,000",
        alternatives: [
          { store: "CB2", name: "Drape Side Table, Brass", price: "~$350" },
          { store: "Article", name: "Nivala Side Table", price: "~$400" },
        ],
      },
    ],
  },
  {
    category: "Storage",
    items: [
      {
        name: "French Casement Bookcase",
        specs: "Antiqued Coffee",
        qty: 3,
        price: "~$4,200 ea",
        alternatives: [
          { store: "Arhaus", name: "Tremont Bookcase", price: "~$3,800" },
          { store: "Room & Board", name: "Woodwind Bookcase", price: "~$2,500" },
        ],
      },
      {
        name: "Printmaker's Media Console",
        specs: "Antiqued Black Oak",
        qty: 1,
        price: "~$3,200",
        alternatives: [
          { store: "Arhaus", name: "Palmer Media Console", price: "~$2,800" },
          { store: "Room & Board", name: "Hudson Media Cabinet", price: "~$2,400" },
        ],
      },
    ],
  },
  {
    category: "Lighting",
    items: [
      {
        name: "Pauillac Chandelier",
        specs: "Antiqued Brass & Glass",
        qty: 1,
        price: "~$4,500",
        alternatives: [
          { store: "CB2", name: "Cascade Glass Chandelier", price: "~$800" },
          { store: "DWR", name: "Nelson Saucer Pendant", price: "~$500" },
        ],
      },
      {
        name: "Antiqued Linen Drum Shade Floor Lamp",
        specs: "Brass base",
        qty: 2,
        price: "~$900 ea",
        alternatives: [
          { store: "CB2", name: "Exposior Brass Floor Lamp", price: "~$350" },
          { store: "Article", name: "Rook Floor Lamp", price: "~$250" },
        ],
      },
      {
        name: "Luisa Table Lamp",
        specs: "Natural Rattan",
        qty: 2,
        price: "~$600 ea",
        alternatives: [
          { store: "CB2", name: "Woven Rattan Table Lamp", price: "~$200" },
          { store: "Article", name: "Nera Table Lamp", price: "~$150" },
        ],
      },
    ],
  },
  {
    category: "Seating (Accent)",
    items: [
      {
        name: "Accent Chairs (for lounge zone)",
        specs: "Leather or bouclé, warm tones",
        qty: 2,
        price: "~$2,500–$4,000 ea",
        alternatives: [
          { store: "DWR", name: "Eames Lounge Chair", price: "~$7,000" },
          { store: "Article", name: "Sven Chair, Charme Tan", price: "~$1,100" },
        ],
      },
    ],
  },
  {
    category: "Textiles",
    items: [
      {
        name: "Handknotted Wool Rug",
        specs: "Sage/Olive tones, 9'×12'",
        qty: 1,
        price: "~$5,000–$7,000",
        alternatives: [
          { store: "1stDibs", name: "Vintage Persian Rug", price: "~$3,000–$8,000" },
          { store: "Article", name: "Kura Rug, 9'×12'", price: "~$600" },
        ],
      },
      {
        name: "Belgian Linen Pillows",
        specs: "Mix of Thyme/Cream/Amber",
        qty: 8,
        price: "~$150 ea",
        alternatives: [
          { store: "Arhaus", name: "Linen Blend Pillow Set", price: "~$100 ea" },
          { store: "CB2", name: "Linen Throw Pillow", price: "~$60 ea" },
        ],
      },
      {
        name: "Chunky Knit Throw",
        specs: "Cream",
        qty: 1,
        price: "~$250",
        alternatives: [
          { store: "Arhaus", name: "Chunky Wool Throw", price: "~$200" },
          { store: "Article", name: "Sono Throw, Cream", price: "~$80" },
        ],
      },
    ],
  },
  {
    category: "Media",
    items: [
      {
        name: 'Samsung 75" The Frame TV',
        specs: "QLED, Art Mode",
        qty: 1,
        price: "~$2,000",
        alternatives: [
          { store: "LG", name: '77" OLED evo Gallery Edition', price: "~$2,500" },
          { store: "Sony", name: '75" Bravia XR A80L OLED', price: "~$2,200" },
        ],
      },
    ],
  },
];

const categoryIcons: Record<string, string> = {
  Tables: "🪵",
  Storage: "📚",
  Lighting: "💡",
  "Seating (Accent)": "💺",
  Textiles: "🧶",
  Media: "📺",
};

const storeColors: Record<string, string> = {
  Arhaus: "text-amber-400",
  CB2: "text-sky-400",
  DWR: "text-rose-400",
  "1stDibs": "text-purple-400",
  "Room & Board": "text-teal-400",
  Article: "text-orange-400",
  LG: "text-red-400",
  Sony: "text-blue-400",
};

const storeBgColors: Record<string, string> = {
  Arhaus: "bg-amber-400/10 border-amber-400/20",
  CB2: "bg-sky-400/10 border-sky-400/20",
  DWR: "bg-rose-400/10 border-rose-400/20",
  "1stDibs": "bg-purple-400/10 border-purple-400/20",
  "Room & Board": "bg-teal-400/10 border-teal-400/20",
  Article: "bg-orange-400/10 border-orange-400/20",
  LG: "bg-red-400/10 border-red-400/20",
  Sony: "bg-blue-400/10 border-blue-400/20",
};

export default function RecommendedFurniture() {
  return (
    <section>
      <SectionHeading title="Recommended Furniture" />
      <p className="text-muted text-sm mb-6 -mt-4">
        Primary picks from Restoration Hardware · Alternatives from Arhaus, CB2, DWR, 1stDibs, Room&nbsp;&amp;&nbsp;Board, Article
      </p>

      <div className="space-y-6">
        {furniture.map((group) => (
          <div key={group.category} className="bg-card border border-card-border rounded-xl overflow-hidden">
            <div className="px-5 py-3 border-b border-card-border bg-card flex items-center gap-2">
              <span>{categoryIcons[group.category]}</span>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider">
                {group.category}
              </h3>
            </div>

            <div className="divide-y divide-card-border/50">
              {group.items.map((item) => (
                <div key={item.name} className="group">
                  {/* Primary RH item */}
                  <div className="grid grid-cols-[1fr_auto] sm:grid-cols-[1fr_1fr_auto_auto] gap-x-4 gap-y-1 px-5 py-4 hover:bg-white/[0.02]">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-white font-medium">{item.name}</span>
                        <span className="text-[10px] font-semibold tracking-wider uppercase px-1.5 py-0.5 rounded bg-emerald/10 text-emerald border border-emerald/20 hidden sm:inline-block">
                          RH
                        </span>
                      </div>
                      <span className="block sm:hidden text-muted text-xs mt-0.5">
                        {item.specs}
                      </span>
                    </div>
                    <div className="text-muted text-sm self-center hidden sm:block">
                      {item.specs}
                    </div>
                    <div className="text-muted text-sm self-center text-center min-w-[40px] hidden sm:block">
                      ×{item.qty}
                    </div>
                    <div className="text-emerald font-semibold text-sm self-center text-right min-w-[120px]">
                      {item.price}
                    </div>
                  </div>

                  {/* Alternatives */}
                  <div className="px-5 pb-4 pt-0 flex flex-wrap gap-2">
                    <span className="text-muted text-xs self-center mr-1 shrink-0">
                      Alternatives →
                    </span>
                    {item.alternatives.map((alt) => (
                      <div
                        key={`${alt.store}-${alt.name}`}
                        className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-lg border ${
                          storeBgColors[alt.store] || "bg-white/5 border-white/10"
                        }`}
                      >
                        <span
                          className={`font-semibold ${
                            storeColors[alt.store] || "text-white"
                          }`}
                        >
                          {alt.store}
                        </span>
                        <span className="text-foreground/70">{alt.name}</span>
                        <span className="text-foreground/50 font-medium">
                          {alt.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Store legend */}
      <div className="mt-6 bg-card border border-card-border rounded-xl px-5 py-4">
        <p className="text-muted text-xs uppercase tracking-wider mb-3 font-medium">
          Retailer Key
        </p>
        <div className="flex flex-wrap gap-3">
          {Object.entries(storeColors).map(([store, color]) => (
            <div key={store} className="flex items-center gap-1.5">
              <div
                className={`w-2 h-2 rounded-full ${
                  color.replace("text-", "bg-")
                }`}
              />
              <span className="text-muted text-xs">{store}</span>
            </div>
          ))}
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-emerald" />
            <span className="text-muted text-xs">Restoration Hardware (primary)</span>
          </div>
        </div>
      </div>
    </section>
  );
}
