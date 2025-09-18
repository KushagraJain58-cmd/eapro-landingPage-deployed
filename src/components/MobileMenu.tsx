export default function MobileMenu() {
  return (
    <div className="md:hidden bg-white border-t">
      <div className="px-2 pt-2 pb-3 space-y-1">
        {[
          "On-Grid Inverters",
          "Off-Grid Inverters",
          "Solar Modules",
          "Batteries",
          "Store Locator",
          "Downloads",
        ].map((item) => (
          <a
            key={item}
            href="#products"
            className="block px-3 py-2 text-gray-700"
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}
