import Header from "@/components/Header";
import PurchasedItems from "@/components/PurchasedItems";
import ColorPalette from "@/components/ColorPalette";
import FloorPlans from "@/components/FloorPlans";
import RecommendedFurniture from "@/components/RecommendedFurniture";
import BudgetSummary from "@/components/BudgetSummary";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Header />
        <div className="space-y-12 sm:space-y-16">
          <PurchasedItems />
          <ColorPalette />
          <FloorPlans />
          <RecommendedFurniture />
          <BudgetSummary />
        </div>
        <footer className="mt-16 pb-8 text-center text-muted text-sm">
          <p>X& Office Planning Dashboard · Built with Next.js</p>
        </footer>
      </div>
    </main>
  );
}
