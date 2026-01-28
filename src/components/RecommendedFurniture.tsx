import { SectionHeading } from "./PurchasedItems";

type Alternative = {
  store: string;
  name: string;
  price: string;
  url?: string;
};

type Item = {
  name: string;
  specs: string;
  qty: number;
  price: string;
  url?: string;
  alternatives: Alternative[];
};

type FurnitureGroup = {
  category: string;
  items: Item[];
};

function storeSearchUrl(store: string, productName: string): string {
  const q = encodeURIComponent(productName).replace(/%20/g, "+");
  const urls: Record<string, string> = {
    RH: `https://rh.com/search/results.jsp?query=${q}`,
    Arhaus: `https://www.arhaus.com/search?q=${q}`,
    CB2: `https://www.cb2.com/search?query=${q}`,
    DWR: `https://www.dwr.com/search?q=${q}`,
    Article: `https://www.article.com/search?query=${q}`,
    "Room & Board": `https://www.roomandboard.com/search?query=${q}`,
  };
  return urls[store] || "#";
}

function externalUrl(store: string, name: string): string {
  // For non-furniture retailers, use generic search
  if (store === "1stDibs") return `https://www.1stdibs.com/search/?q=${encodeURIComponent(name).replace(/%20/g, "+")}`;
  if (store === "LG") return `https://www.lg.com/us/search/search-all?search=${encodeURIComponent(name).replace(/%20/g, "+")}`;
  if (store === "Sony") return `https://www.sony.com/en/search?query=${encodeURIComponent(name).replace(/%20/g, "+")}`;
  if (store === "Loloi") return `https://www.loloirugs.com/search?q=${encodeURIComponent(name).replace(/%20/g, "+")}`;
  return storeSearchUrl(store, name);
}

const furniture: FurnitureGroup[] = [
  {
    category: "Tables",
    items: [
      {
        name: "Reclaimed Russian Oak Coffee Table",
        specs: "Black Oak finish",
        qty: 1,
        price: "~$2,800",
        url: storeSearchUrl("RH", "Reclaimed Russian Oak Coffee Table"),
        alternatives: [
          { store: "Arhaus", name: "Brinton Coffee Table", price: "~$1,800", url: storeSearchUrl("Arhaus", "Brinton Coffee Table") },
          { store: "CB2", name: "Luisa Coffee Table", price: "~$1,200", url: storeSearchUrl("CB2", "Luisa Coffee Table") },
        ],
      },
      {
        name: "Thaddeus Forged Iron Side Table",
        specs: "Antiqued Brass",
        qty: 2,
        price: "~$1,000",
        url: storeSearchUrl("RH", "Thaddeus Forged Iron Side Table"),
        alternatives: [
          { store: "CB2", name: "Smart Round Marble Side Table", price: "~$250", url: storeSearchUrl("CB2", "Smart Round Marble Side Table") },
          { store: "Article", name: "Vitri Side Table", price: "~$200", url: storeSearchUrl("Article", "Vitri Side Table") },
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
        url: storeSearchUrl("RH", "French Casement Bookcase"),
        alternatives: [
          { store: "Arhaus", name: "Tremont Bookcase", price: "~$3,800", url: storeSearchUrl("Arhaus", "Tremont Bookcase") },
          { store: "Room & Board", name: "Woodwind Bookcase", price: "~$2,500", url: storeSearchUrl("Room & Board", "Woodwind Bookcase") },
        ],
      },
      {
        name: "Printmaker's Media Console",
        specs: "Antiqued Black Oak",
        qty: 1,
        price: "~$3,200",
        url: storeSearchUrl("RH", "Printmaker's Media Console"),
        alternatives: [
          { store: "Article", name: "Oscuro Media Console", price: "~$800", url: storeSearchUrl("Article", "Oscuro Media Console") },
          { store: "CB2", name: "Elements Media Console", price: "~$1,200", url: storeSearchUrl("CB2", "Elements Media Console") },
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
        url: storeSearchUrl("RH", "Pauillac Chandelier"),
        alternatives: [
          { store: "CB2", name: "Cascade Glass Chandelier", price: "~$800", url: storeSearchUrl("CB2", "Cascade Glass Chandelier") },
          { store: "DWR", name: "Nelson Saucer Pendant", price: "~$500", url: storeSearchUrl("DWR", "Nelson Saucer Pendant") },
        ],
      },
      {
        name: "Antiqued Linen Drum Shade Floor Lamp",
        specs: "Brass base",
        qty: 2,
        price: "~$900 ea",
        url: storeSearchUrl("RH", "Antiqued Linen Drum Shade Floor Lamp"),
        alternatives: [
          { store: "Article", name: "Stilt Floor Lamp", price: "~$200", url: storeSearchUrl("Article", "Stilt Floor Lamp") },
          { store: "CB2", name: "Arren Brass Floor Lamp", price: "~$400", url: storeSearchUrl("CB2", "Arren Brass Floor Lamp") },
        ],
      },
      {
        name: "Luisa Table Lamp",
        specs: "Natural Rattan",
        qty: 2,
        price: "~$600 ea",
        url: storeSearchUrl("RH", "Luisa Table Lamp"),
        alternatives: [
          { store: "CB2", name: "Woven Rattan Table Lamp", price: "~$200", url: storeSearchUrl("CB2", "Woven Rattan Table Lamp") },
          { store: "Article", name: "Nera Table Lamp", price: "~$150", url: storeSearchUrl("Article", "Nera Table Lamp") },
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
        url: storeSearchUrl("RH", "Leather Accent Chair"),
        alternatives: [
          { store: "DWR", name: "Eames Lounge Chair", price: "~$7,000", url: storeSearchUrl("DWR", "Eames Lounge Chair") },
          { store: "Article", name: "Sven Chair, Charme Tan", price: "~$1,100", url: storeSearchUrl("Article", "Sven Chair Charme Tan") },
        ],
      },
    ],
  },
  {
    category: "Textiles",
    items: [
      {
        name: "Handknotted Antique Persian Rug",
        specs: "Warm red/burgundy tones, 9'×12'",
        qty: 1,
        price: "~$5,000–$8,000",
        url: storeSearchUrl("RH", "Handknotted Antique Persian Rug"),
        alternatives: [
          { store: "1stDibs", name: "Vintage Persian Heriz Rug, Red/Rust", price: "~$3,000–$10,000", url: externalUrl("1stDibs", "Vintage Persian Heriz Rug") },
          { store: "Loloi", name: "Layla Collection, Red/Multi", price: "~$300–$600", url: externalUrl("Loloi", "Layla Red Multi Rug") },
        ],
      },
      {
        name: "Belgian Linen Pillows",
        specs: "Mix of Burgundy/Cream/Amber",
        qty: 8,
        price: "~$150 ea",
        url: storeSearchUrl("RH", "Belgian Linen Pillow"),
        alternatives: [
          { store: "Article", name: "Skov Throw Pillow", price: "~$50", url: storeSearchUrl("Article", "Skov Throw Pillow") },
          { store: "CB2", name: "Linen Throw Pillow", price: "~$60", url: storeSearchUrl("CB2", "Linen Throw Pillow") },
        ],
      },
      {
        name: "Chunky Knit Throw",
        specs: "Cream",
        qty: 1,
        price: "~$250",
        url: storeSearchUrl("RH", "Chunky Knit Throw"),
        alternatives: [
          { store: "Arhaus", name: "Chunky Wool Throw", price: "~$200", url: storeSearchUrl("Arhaus", "Chunky Wool Throw") },
          { store: "Article", name: "Sono Throw, Cream", price: "~$80", url: storeSearchUrl("Article", "Sono Throw") },
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
        url: storeSearchUrl("RH", "Samsung The Frame TV"),
        alternatives: [
          { store: "LG", name: 'C4 OLED 65"', price: "~$1,500", url: externalUrl("LG", "LG C4 OLED 65") },
          { store: "Sony", name: 'Bravia XR 75"', price: "~$2,200", url: externalUrl("Sony", "Sony Bravia XR 75") },
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
  Loloi: "text-pink-400",
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
  Loloi: "bg-pink-400/10 border-pink-400/20",
};

export default function RecommendedFurniture() {
  return (
    <section>
      <SectionHeading title="Recommended Furniture" />
      <p className="text-muted text-sm mb-6 -mt-4">
        Primary picks from Restoration Hardware · Alternatives from Arhaus, CB2, DWR, 1stDibs, Room&nbsp;&amp;&nbsp;Board, Article &amp; more
      </p>

      <div className="space-y-6">
        {furniture.map((group) => (
          <div key={group.category} className="bg-card border border-card-border rounded-xl overflow-hidden">
            <div className="px-5 py-3 border-b border-card-border bg-card flex items-center gap-2">
              <span>{categoryIcons[group.category]}</span>
              <h3 className="text-foreground font-semibold text-sm uppercase tracking-wider">
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
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground font-medium hover:text-emerald transition-colors underline decoration-gray-300 hover:decoration-emerald/60 underline-offset-2"
                        >
                          {item.name}
                        </a>
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
                      <a
                        key={`${alt.store}-${alt.name}`}
                        href={alt.url || externalUrl(alt.store, alt.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-lg border transition-all hover:scale-[1.03] hover:brightness-125 cursor-pointer ${
                          storeBgColors[alt.store] || "bg-white/5 border-white/10"
                        }`}
                      >
                        <span
                          className={`font-semibold ${
                            storeColors[alt.store] || "text-foreground"
                          }`}
                        >
                          {alt.store}
                        </span>
                        <span className="text-foreground/70">{alt.name}</span>
                        <span className="text-foreground/50 font-medium">
                          {alt.price}
                        </span>
                        <svg className="w-3 h-3 text-foreground/30 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
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
