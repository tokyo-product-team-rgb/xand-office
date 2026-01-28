export default function Header() {
  return (
    <header className="mb-12 sm:mb-16">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-2 h-8 bg-emerald rounded-full" />
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
          X& Office — Furniture Plan
        </h1>
      </div>
      <p className="text-muted text-lg sm:text-xl ml-5">
        El Segundo, CA · ~1,200 sq ft
      </p>
    </header>
  );
}
