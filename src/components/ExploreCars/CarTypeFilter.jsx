"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { FaFilter } from "react-icons/fa";

const CarTypeFilter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const selectedType = searchParams.get("type") || "all";

  const handleFilter = (e) => {
    const value = e.target.value;

    const params = new URLSearchParams(searchParams.toString());

    if (value === "all") {
      params.delete("type");
    } else {
      params.set("type", value);
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="relative w-full md:w-64">
      {/* Filter Icon */}
      <div className="pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2">
        <FaFilter className="text-blue-500" />
      </div>

      {/* Select */}
      <select
        value={selectedType}
        onChange={handleFilter}
        className="h-14 w-full appearance-none rounded-2xl border-2 border-gray-200 bg-white pl-12 pr-12 text-sm font-medium text-gray-700 shadow-sm outline-none transition-all duration-300 hover:border-blue-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
      >
        <option value="all">🚘 All Types</option>
        <option value="suv">🚙 SUV</option>
        <option value="sedan">🚗 Sedan</option>
        <option value="hatchback">🚘 Hatchback</option>
        <option value="luxury">💎 Luxury</option>
        <option value="sports">🏎️ Sports</option>
      </select>

      {/* Custom Arrow */}
      <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
        <svg
          className="h-4 w-4 text-gray-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
};

export default CarTypeFilter;
