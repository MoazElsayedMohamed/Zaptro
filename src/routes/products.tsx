import FilterSection from "@/components/FilterSection";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
} from "@/components/ui/empty";
import { Spinner } from "@/components/ui/spinner";
import { useDataContext } from "@/context/DataContext";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

export const Route = createFileRoute("/products")({
  component: Products,
});

function Products() {
  const context = useDataContext();

  if (!context) {
    return <div>Error: DataContext not available</div>;
  }

  const { data, fetchAllProducts } = context;
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("ALL");
  const [priceRange, setPriceRange] = useState([0, 5000]);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
  };

  const filteredData = data?.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "ALL" || item.category === category) &&
      item.price >= priceRange[0] &&
      item.price <= priceRange[1],
  );

  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 mb-10">
        {data && data.length > 0 ? (
          <div className="flex gap-8">
            <FilterSection
              search={search}
              setSearch={setSearch}
              category={category}
              setCategory={setCategory}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              handleCategoryChange={handleCategoryChange}
            />
            {filteredData && filteredData?.length > 0 ? (
              <div className="grid grid-cols-4 gap-7 mt-10">
                {filteredData?.map((product, index) => {
                  return <ProductCard key={index} {...product} />;
                })}
              </div>
            ) : (
              <div className="w-full">
                <Empty>
                  <EmptyHeader>
                    <EmptyMedia variant="icon">
                      <FaShoppingCart />
                    </EmptyMedia>
                    <EmptyTitle>No Products Found</EmptyTitle>
                  </EmptyHeader>
                </Empty>
              </div>
            )}
          </div>
        ) : (
          <div className="flex items-center justify-center h-96">
            <Spinner className="size-8" />
          </div>
        )}
      </div>
    </div>
  );
}
