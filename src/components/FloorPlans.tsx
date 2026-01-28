import { SectionHeading } from "./PurchasedItems";

export default function FloorPlans() {
  return (
    <section>
      <SectionHeading title="Floor Plan Concepts" />
      <div className="space-y-10">
        <FloorPlanCard
          title="Concept 1 — Open Collaborative"
          description="Main space as open bullpen with Oslo table as centerpiece. Side rooms: conference room, focus room (4 desks), call room (2 phone booths + storage). Lounge area with sofa in bottom left. Great for team of 8-12."
          budget="~$40K"
          svg={<Concept1SVG />}
        />
        <FloorPlanCard
          title="Concept 2 — Executive Lounge"
          description="Main area split: Oslo working area + reception lounge zone with sectional, accent chairs, coffee table, rug, bar cart. Right rooms: investor meeting room (boardroom table + 75&quot; TV), CEO office (exec desk + small meeting nook), media/content room. Ideal for hosting LPs and founders."
          budget="~$49K"
          svg={<Concept2SVG />}
        />
      </div>
    </section>
  );
}

function FloorPlanCard({
  title,
  description,
  budget,
  svg,
}: {
  title: string;
  description: string;
  budget: string;
  svg: React.ReactNode;
}) {
  return (
    <div className="bg-card border border-card-border rounded-xl overflow-hidden">
      <div className="p-5 sm:p-6 border-b border-card-border">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <h3 className="text-foreground font-bold text-lg">{title}</h3>
          <span className="text-emerald font-semibold text-lg">{budget}</span>
        </div>
        <p className="text-muted text-sm mt-2 max-w-3xl">{description}</p>
      </div>
      <div className="p-4 sm:p-6 overflow-x-auto">{svg}</div>
    </div>
  );
}

function Concept1SVG() {
  return (
    <svg viewBox="0 0 800 600" className="w-full max-w-4xl mx-auto" style={{ minWidth: 600 }}>
      {/* Background */}
      <rect width="800" height="600" fill="#e4e4e7" rx="8" />

      {/* Main open area */}
      <rect x="40" y="80" width="460" height="480" fill="none" stroke="#d4d4d8" strokeWidth="2" />
      <text x="270" y="65" fill="#71717a" fontSize="11" textAnchor="middle" fontFamily="system-ui">24&apos;7&quot; × 28&apos;7&quot;</text>

      {/* Bathroom/utility top left */}
      <rect x="40" y="80" width="120" height="80" fill="#f4f4f5" stroke="#d4d4d8" strokeWidth="2" />
      <text x="100" y="125" fill="#71717a" fontSize="10" textAnchor="middle" fontFamily="system-ui">Bathroom</text>

      {/* Right rooms */}
      {/* Top right - Conference Room */}
      <rect x="500" y="80" width="260" height="190" fill="#f4f4f5" stroke="#d4d4d8" strokeWidth="2" />
      <text x="630" y="130" fill="#8b9a82" fontSize="13" textAnchor="middle" fontWeight="600" fontFamily="system-ui">Conference Room</text>
      {/* Conference table */}
      <rect x="570" y="150" width="120" height="50" rx="4" fill="none" stroke="#8b7355" strokeWidth="1.5" strokeDasharray="4" />
      <text x="630" y="180" fill="#71717a" fontSize="9" textAnchor="middle" fontFamily="system-ui">Table · 8 chairs</text>
      {/* Door */}
      <line x1="500" y1="200" x2="500" y2="240" stroke="#10b981" strokeWidth="2" />

      {/* Middle right - Focus Room */}
      <rect x="500" y="270" width="260" height="160" fill="#f4f4f5" stroke="#d4d4d8" strokeWidth="2" />
      <text x="630" y="310" fill="#8b9a82" fontSize="13" textAnchor="middle" fontWeight="600" fontFamily="system-ui">Focus Room</text>
      {/* 4 desks */}
      <rect x="530" y="330" width="50" height="30" rx="2" fill="none" stroke="#b5924c" strokeWidth="1" />
      <rect x="590" y="330" width="50" height="30" rx="2" fill="none" stroke="#b5924c" strokeWidth="1" />
      <rect x="650" y="330" width="50" height="30" rx="2" fill="none" stroke="#b5924c" strokeWidth="1" />
      <rect x="710" y="330" width="50" height="30" rx="2" fill="none" stroke="#b5924c" strokeWidth="1" />
      <text x="630" y="395" fill="#71717a" fontSize="9" textAnchor="middle" fontFamily="system-ui">4 desks</text>
      {/* Door */}
      <line x1="500" y1="310" x2="500" y2="350" stroke="#10b981" strokeWidth="2" />

      {/* Bottom right - Call Room */}
      <rect x="500" y="430" width="260" height="130" fill="#f4f4f5" stroke="#d4d4d8" strokeWidth="2" />
      <text x="630" y="475" fill="#8b9a82" fontSize="13" textAnchor="middle" fontWeight="600" fontFamily="system-ui">Call Room</text>
      {/* Phone booths */}
      <rect x="540" y="490" width="40" height="40" rx="4" fill="none" stroke="#b5924c" strokeWidth="1" />
      <text x="560" y="515" fill="#71717a" fontSize="8" textAnchor="middle" fontFamily="system-ui">Booth</text>
      <rect x="600" y="490" width="40" height="40" rx="4" fill="none" stroke="#b5924c" strokeWidth="1" />
      <text x="620" y="515" fill="#71717a" fontSize="8" textAnchor="middle" fontFamily="system-ui">Booth</text>
      <rect x="670" y="490" width="70" height="40" rx="4" fill="none" stroke="#71717a" strokeWidth="1" strokeDasharray="3" />
      <text x="705" y="515" fill="#71717a" fontSize="8" textAnchor="middle" fontFamily="system-ui">Storage</text>
      {/* Door */}
      <line x1="500" y1="460" x2="500" y2="500" stroke="#10b981" strokeWidth="2" />

      {/* Air duct indicator */}
      <rect x="720" y="530" width="40" height="30" fill="none" stroke="#71717a" strokeWidth="1" strokeDasharray="3" />
      <text x="740" y="550" fill="#71717a" fontSize="7" textAnchor="middle" fontFamily="system-ui">Air Duct</text>

      {/* Oslo Table - centerpiece */}
      <rect x="150" y="250" width="240" height="60" rx="4" fill="#1c1917" stroke="#8b7355" strokeWidth="2" />
      <text x="270" y="285" fill="#44403c" fontSize="11" textAnchor="middle" fontWeight="600" fontFamily="system-ui">Oslo Table (120&quot;)</text>
      {/* Chairs around table */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <circle key={`top-${i}`} cx={170 + i * 44} cy={240} r="8" fill="none" stroke="#8b7355" strokeWidth="1" />
      ))}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <circle key={`bot-${i}`} cx={170 + i * 44} cy={320} r="8" fill="none" stroke="#8b7355" strokeWidth="1" />
      ))}

      {/* Sofa lounge - bottom left */}
      <rect x="60" y="440" width="160" height="50" rx="6" fill="none" stroke="#8b9a82" strokeWidth="2" />
      <text x="140" y="470" fill="#8b9a82" fontSize="10" textAnchor="middle" fontWeight="600" fontFamily="system-ui">Copenhagen Sofa</text>
      {/* Reyna Chairs */}
      <rect x="60" y="400" width="50" height="30" rx="6" fill="none" stroke="#8b7355" strokeWidth="1.5" />
      <text x="85" y="420" fill="#71717a" fontSize="8" textAnchor="middle" fontFamily="system-ui">Reyna</text>
      <rect x="120" y="400" width="50" height="30" rx="6" fill="none" stroke="#8b7355" strokeWidth="1.5" />
      <text x="145" y="420" fill="#71717a" fontSize="8" textAnchor="middle" fontFamily="system-ui">Reyna</text>
      {/* Coffee table */}
      <rect x="240" y="445" width="60" height="35" rx="3" fill="none" stroke="#b5924c" strokeWidth="1" strokeDasharray="3" />
      <text x="270" y="467" fill="#71717a" fontSize="8" textAnchor="middle" fontFamily="system-ui">Coffee Tbl</text>

      {/* Bookcase */}
      <rect x="42" y="180" width="20" height="80" fill="none" stroke="#8b7355" strokeWidth="1" />
      <text x="52" y="225" fill="#71717a" fontSize="7" textAnchor="middle" fontFamily="system-ui" transform="rotate(-90 52 225)">Bookcase</text>

      {/* Labels */}
      <text x="270" y="200" fill="#10b981" fontSize="14" textAnchor="middle" fontWeight="700" fontFamily="system-ui">OPEN BULLPEN</text>
      <text x="140" y="530" fill="#10b981" fontSize="11" textAnchor="middle" fontWeight="600" fontFamily="system-ui">LOUNGE AREA</text>

      {/* Dimensions */}
      <text x="630" y="72" fill="#71717a" fontSize="9" textAnchor="middle" fontFamily="system-ui">14&apos;3&quot;</text>
      <text x="770" y="175" fill="#71717a" fontSize="9" textAnchor="middle" fontFamily="system-ui" transform="rotate(90 770 175)">10&apos;5&quot;</text>
      <text x="770" y="350" fill="#71717a" fontSize="9" textAnchor="middle" fontFamily="system-ui" transform="rotate(90 770 350)">9&apos;1&quot;</text>
      <text x="770" y="495" fill="#71717a" fontSize="9" textAnchor="middle" fontFamily="system-ui" transform="rotate(90 770 495)">6&apos;</text>

      {/* Title */}
      <text x="400" y="30" fill="#18181b" fontSize="16" textAnchor="middle" fontWeight="700" fontFamily="system-ui">Concept 1 — Open Collaborative</text>
    </svg>
  );
}

function Concept2SVG() {
  return (
    <svg viewBox="0 0 800 600" className="w-full max-w-4xl mx-auto" style={{ minWidth: 600 }}>
      {/* Background */}
      <rect width="800" height="600" fill="#e4e4e7" rx="8" />

      {/* Main open area */}
      <rect x="40" y="80" width="460" height="480" fill="none" stroke="#d4d4d8" strokeWidth="2" />

      {/* Bathroom/utility top left */}
      <rect x="40" y="80" width="120" height="80" fill="#f4f4f5" stroke="#d4d4d8" strokeWidth="2" />
      <text x="100" y="125" fill="#71717a" fontSize="10" textAnchor="middle" fontFamily="system-ui">Bathroom</text>

      {/* Divider line in main area - work vs lounge */}
      <line x1="40" y1="340" x2="500" y2="340" stroke="#d4d4d8" strokeWidth="1" strokeDasharray="6" />

      {/* Right rooms */}
      {/* Top right - Investor Meeting Room */}
      <rect x="500" y="80" width="260" height="190" fill="#f4f4f5" stroke="#d4d4d8" strokeWidth="2" />
      <text x="630" y="115" fill="#8b9a82" fontSize="12" textAnchor="middle" fontWeight="600" fontFamily="system-ui">Investor Meeting Room</text>
      {/* Boardroom table */}
      <rect x="555" y="140" width="150" height="50" rx="8" fill="none" stroke="#8b7355" strokeWidth="1.5" />
      <text x="630" y="170" fill="#71717a" fontSize="9" textAnchor="middle" fontFamily="system-ui">Boardroom Table</text>
      {/* Chairs */}
      {[0, 1, 2, 3, 4].map((i) => (
        <circle key={`mt-${i}`} cx={575 + i * 28} cy={132} r="6" fill="none" stroke="#8b7355" strokeWidth="1" />
      ))}
      {[0, 1, 2, 3, 4].map((i) => (
        <circle key={`mb-${i}`} cx={575 + i * 28} cy={198} r="6" fill="none" stroke="#8b7355" strokeWidth="1" />
      ))}
      {/* TV */}
      <rect x="720" y="140" width="5" height="50" fill="#b5924c" />
      <text x="735" y="170" fill="#71717a" fontSize="7" textAnchor="middle" fontFamily="system-ui" transform="rotate(90 735 170)">75&quot; TV</text>
      {/* Door */}
      <line x1="500" y1="200" x2="500" y2="240" stroke="#10b981" strokeWidth="2" />

      {/* Middle right - CEO Office */}
      <rect x="500" y="270" width="260" height="160" fill="#f4f4f5" stroke="#d4d4d8" strokeWidth="2" />
      <text x="630" y="298" fill="#8b9a82" fontSize="12" textAnchor="middle" fontWeight="600" fontFamily="system-ui">CEO Office</text>
      {/* Executive desk */}
      <rect x="600" y="310" width="100" height="45" rx="3" fill="none" stroke="#b5924c" strokeWidth="1.5" />
      <text x="650" y="337" fill="#71717a" fontSize="9" textAnchor="middle" fontFamily="system-ui">Exec Desk</text>
      {/* Chair */}
      <circle cx="650" cy="370" r="10" fill="none" stroke="#8b7355" strokeWidth="1" />
      {/* Small meeting nook */}
      <rect x="520" y="380" width="70" height="35" rx="3" fill="none" stroke="#8b7355" strokeWidth="1" strokeDasharray="3" />
      <text x="555" y="402" fill="#71717a" fontSize="8" textAnchor="middle" fontFamily="system-ui">Meeting Nook</text>
      {/* Door */}
      <line x1="500" y1="320" x2="500" y2="360" stroke="#10b981" strokeWidth="2" />

      {/* Bottom right - Media/Content Room */}
      <rect x="500" y="430" width="260" height="130" fill="#f4f4f5" stroke="#d4d4d8" strokeWidth="2" />
      <text x="630" y="470" fill="#8b9a82" fontSize="12" textAnchor="middle" fontWeight="600" fontFamily="system-ui">Media / Content Room</text>
      <rect x="540" y="485" width="80" height="45" rx="3" fill="none" stroke="#b5924c" strokeWidth="1" />
      <text x="580" y="512" fill="#71717a" fontSize="9" textAnchor="middle" fontFamily="system-ui">Edit Desk</text>
      <rect x="650" y="485" width="80" height="45" rx="3" fill="none" stroke="#71717a" strokeWidth="1" strokeDasharray="3" />
      <text x="690" y="512" fill="#71717a" fontSize="9" textAnchor="middle" fontFamily="system-ui">Equipment</text>
      {/* Door */}
      <line x1="500" y1="460" x2="500" y2="500" stroke="#10b981" strokeWidth="2" />

      {/* Air duct indicator */}
      <rect x="720" y="530" width="40" height="30" fill="none" stroke="#71717a" strokeWidth="1" strokeDasharray="3" />
      <text x="740" y="550" fill="#71717a" fontSize="7" textAnchor="middle" fontFamily="system-ui">Air Duct</text>

      {/* WORKING ZONE - top of main area */}
      {/* Oslo Table */}
      <rect x="180" y="140" width="200" height="50" rx="4" fill="#1c1917" stroke="#8b7355" strokeWidth="2" />
      <text x="280" y="170" fill="#44403c" fontSize="10" textAnchor="middle" fontWeight="600" fontFamily="system-ui">Oslo Table (120&quot;)</text>
      {/* Chairs */}
      {[0, 1, 2, 3, 4].map((i) => (
        <circle key={`wt-${i}`} cx={200 + i * 40} cy={132} r="7" fill="none" stroke="#8b7355" strokeWidth="1" />
      ))}
      {[0, 1, 2, 3, 4].map((i) => (
        <circle key={`wb-${i}`} cx={200 + i * 40} cy={200} r="7" fill="none" stroke="#8b7355" strokeWidth="1" />
      ))}
      {/* Bookcase on wall */}
      <rect x="42" y="180" width="20" height="80" fill="none" stroke="#8b7355" strokeWidth="1" />
      <text x="52" y="225" fill="#71717a" fontSize="7" textAnchor="middle" fontFamily="system-ui" transform="rotate(-90 52 225)">Bookcase</text>

      <text x="280" y="260" fill="#10b981" fontSize="12" textAnchor="middle" fontWeight="700" fontFamily="system-ui">WORKING ZONE</text>

      {/* LOUNGE ZONE - bottom of main area */}
      {/* Rug area */}
      <rect x="60" y="360" width="340" height="180" rx="6" fill="#8b9a82" fillOpacity="0.05" stroke="#8b9a82" strokeWidth="1" strokeDasharray="4" />
      <text x="230" y="380" fill="#10b981" fontSize="12" textAnchor="middle" fontWeight="700" fontFamily="system-ui">RECEPTION LOUNGE</text>

      {/* Sectional sofa - L shape */}
      <rect x="80" y="400" width="180" height="40" rx="4" fill="none" stroke="#8b9a82" strokeWidth="2" />
      <rect x="80" y="440" width="50" height="70" rx="4" fill="none" stroke="#8b9a82" strokeWidth="2" />
      <text x="170" y="425" fill="#8b9a82" fontSize="9" textAnchor="middle" fontFamily="system-ui">Sectional Sofa</text>

      {/* Accent chairs */}
      <rect x="290" y="420" width="45" height="35" rx="8" fill="none" stroke="#8b7355" strokeWidth="1.5" />
      <text x="312" y="442" fill="#71717a" fontSize="7" textAnchor="middle" fontFamily="system-ui">Chair</text>
      <rect x="345" y="420" width="45" height="35" rx="8" fill="none" stroke="#8b7355" strokeWidth="1.5" />
      <text x="367" y="442" fill="#71717a" fontSize="7" textAnchor="middle" fontFamily="system-ui">Chair</text>

      {/* Coffee table */}
      <rect x="180" y="450" width="80" height="40" rx="3" fill="none" stroke="#b5924c" strokeWidth="1.5" />
      <text x="220" y="475" fill="#b5924c" fontSize="9" textAnchor="middle" fontFamily="system-ui">Coffee Table</text>

      {/* Bar cart */}
      <rect x="420" y="380" width="50" height="30" rx="3" fill="none" stroke="#b5924c" strokeWidth="1" strokeDasharray="3" />
      <text x="445" y="400" fill="#71717a" fontSize="8" textAnchor="middle" fontFamily="system-ui">Bar Cart</text>

      {/* Chandelier indicator */}
      <circle cx="230" cy="300" r="15" fill="none" stroke="#b5924c" strokeWidth="1" strokeDasharray="3" />
      <text x="230" y="304" fill="#b5924c" fontSize="7" textAnchor="middle" fontFamily="system-ui">✦</text>
      <text x="260" y="304" fill="#71717a" fontSize="8" textAnchor="start" fontFamily="system-ui">Chandelier</text>

      {/* Dimensions */}
      <text x="270" y="65" fill="#71717a" fontSize="11" textAnchor="middle" fontFamily="system-ui">24&apos;7&quot; × 28&apos;7&quot;</text>
      <text x="630" y="72" fill="#71717a" fontSize="9" textAnchor="middle" fontFamily="system-ui">14&apos;3&quot;</text>
      <text x="770" y="175" fill="#71717a" fontSize="9" textAnchor="middle" fontFamily="system-ui" transform="rotate(90 770 175)">10&apos;5&quot;</text>
      <text x="770" y="350" fill="#71717a" fontSize="9" textAnchor="middle" fontFamily="system-ui" transform="rotate(90 770 350)">9&apos;1&quot;</text>
      <text x="770" y="495" fill="#71717a" fontSize="9" textAnchor="middle" fontFamily="system-ui" transform="rotate(90 770 495)">6&apos;</text>

      {/* Title */}
      <text x="400" y="30" fill="#18181b" fontSize="16" textAnchor="middle" fontWeight="700" fontFamily="system-ui">Concept 2 — Executive Lounge</text>
    </svg>
  );
}
