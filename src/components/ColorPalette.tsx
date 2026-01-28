import { SectionHeading } from "./PurchasedItems";

const colors = [
  { name: "Aged Black Oak", hex: "#1c1917", textLight: true },
  { name: "Thyme / Sage Green", hex: "#8b9a82", textLight: false },
  { name: "Mochaccino / Warm Brown", hex: "#8b7355", textLight: false },
  { name: "Persian Red / Burgundy", hex: "#8b3a3a", textLight: true },
  { name: "Brass / Gold", hex: "#b5924c", textLight: false },
  { name: "Cream / Natural", hex: "#f5f0e8", textLight: false },
];

export default function ColorPalette() {
  return (
    <section>
      <SectionHeading title="Established Color Palette" />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        {colors.map((color) => (
          <div key={color.hex} className="group">
            <div
              className="aspect-square rounded-xl mb-3 border border-card-border group-hover:scale-105 transition-transform shadow-lg"
              style={{ backgroundColor: color.hex }}
            />
            <p className="text-foreground text-sm font-medium">{color.name}</p>
            <p className="text-muted text-xs font-mono uppercase">{color.hex}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
