"use client";

import { useDebounce } from "@/hooks/use-debounce";
import { Product } from "@/types/types";
import { useRouter } from "next/navigation";
import * as React from "react";

import { Icons } from "@/components/icons/icons";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Search } from "@/components/icons/search-icon";

export function Searchbox() {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const debouncedQuery = useDebounce(query, 300);
  const [products, setProducts] = React.useState<Product[]>([]);

  //   const fetchData = async () => {
  //     setIsLoading(true);
  //     const products = await getProducts();
  //     setIsLoading(false);
  //     setProducts(products as Product[]); // Simpan produk dalam state
  //   };

  //   React.useEffect(() => {
  //     fetchData();
  //   }, []);

  const filterProducts = (query: string, products: Product[]) => {
    const filteredData = products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );

    return filteredData;
  };

  const handleSelect = (productId: number) => {
    router.push(`/product/${productId}`);
    setIsOpen(false);
  };

  React.useEffect(() => {
    if (!isOpen) {
      setQuery("");
    }
  }, [isOpen]);

  const filteredData = filterProducts(debouncedQuery, products);

  return (
    <>
      <div
        className="flex items-center relative"
        onClick={() => setIsOpen(true)}
      >
        <div className="absolute left-2.5">
          <Search />
        </div>
        <input
          type="search"
          name="search"
          className="rounded-full bg-[#ffffff] h-8 w-72 px-8 text-sm items-center border border-gray-400 font-jakarta"
          placeholder=" Search products..."
        />
        <span className="sr-only">Search products</span>
      </div>

      <CommandDialog open={isOpen} onOpenChange={setIsOpen}>
        <CommandInput
          placeholder="Search products..."
          value={query}
          onValueChange={setQuery}
        />
        <CommandList>
          {isLoading ? (
            <div className="space-y-1 overflow-hidden px-1 py-2">
              <Skeleton className="h-4 w-10 rounded" />
              <Skeleton className="h-8 rounded-sm" />
              <Skeleton className="h-8 rounded-sm" />
            </div>
          ) : filteredData && filteredData.length > 0 ? (
            filteredData.map((product) => (
              <CommandItem
                key={product.id}
                onSelect={() => handleSelect(product.id)}
              >
                {product.title}
              </CommandItem>
            ))
          ) : (
            <CommandEmpty className="py-6 text-center text-sm">
              No products found
            </CommandEmpty>
          )}
        </CommandList>
      </CommandDialog>
    </>
  );
}
