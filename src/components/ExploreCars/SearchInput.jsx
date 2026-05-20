// search in explore cars
"use client";

import { Input } from "@heroui/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";

const SearchInput = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("searchTerm") || "");

  // Auto Search with debounce
  useEffect(() => {
    const delay = setTimeout(() => {
      const params = new URLSearchParams(searchParams);

      if (search) {
        params.set("searchTerm", search);
      } else {
        params.delete("searchTerm");
      }

      router.push(`${pathname}?${params.toString()}`);
    }, 500);

    return () => clearTimeout(delay);
  }, [search]);

  return (
    <Input
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search cars by name..."
      className="flex-1"
      size="lg"
    />
  );
};

export default SearchInput;
