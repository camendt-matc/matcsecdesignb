import React, { useState, useEffect } from "react";
import { Product } from "@/entities/Product";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard from "../components/shop/ProductCard";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    let filtered = products;

    if (selectedCategory !== "all") {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [searchQuery, selectedCategory, products]);

  const loadProducts = async () => {
    setIsLoading(true);
    const data = await Product.list("-featured", 100);
    setProducts(data);
    setIsLoading(false);
  };

  const categories = [
    { value: "all", label: "Full Manifest" },
    { value: "firearms", label: "Firearms" },
    { value: "field-gear", label: "Field Gear" },
    { value: "intel", label: "Intel" },
    { value: "sustenance", label: "Sustenance" },
    { value: "medical", label: "Medical" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-100 mb-4 tracking-wider font-stencil">
          The Smuggler's Exchange
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Declassified assets and battlefield contraband. For discerning collectors.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mb-12 space-y-6">
        <div className="relative max-w-2xl mx-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          <Input
            placeholder="Search the manifest..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 h-14 text-lg bg-gray-900/50 border-gray-600 focus:border-amber-600 focus:ring-amber-600 shadow-md text-white"
          />
        </div>

        <div className="flex justify-center">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
            <TabsList className="bg-gray-900/50 border border-gray-700 shadow-sm h-12">
              {categories.map((cat) => (
                <TabsTrigger
                  key={cat.value}
                  value={cat.value}
                  className="data-[state=active]:bg-amber-800/80 data-[state=active]:text-white text-gray-300 px-6 font-stencil"
                >
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* Products Grid */}
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {Array(8).fill(0).map((_, i) => (
            <div key={i} className="space-y-4 bg-gray-700/50 p-4 rounded-lg">
              <Skeleton className="aspect-square rounded-lg bg-gray-600" />
              <Skeleton className="h-4 w-3/4 bg-gray-600" />
              <Skeleton className="h-4 w-1/2 bg-gray-600" />
            </div>
          ))}
        </div>
      ) : filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-gray-900/50 rounded-lg border border-gray-700">
          <Filter className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-300 mb-2 font-stencil">No Assets Found</h3>
          <p className="text-gray-500">Your search of the manifest came up empty.</p>
        </div>
      )}
    </div>
  );
}