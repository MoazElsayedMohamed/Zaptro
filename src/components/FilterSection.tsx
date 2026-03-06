import { useDataContext } from "@/context/DataContext";
import type { Dispatch, SetStateAction } from "react";

interface FilterSectionProps {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;
  priceRange: number[];
  setPriceRange: Dispatch<SetStateAction<number[]>>;
  handleCategoryChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FilterSection = ({
  search,
  setSearch,
  category,
  setCategory,
  handleCategoryChange,
  priceRange,
  setPriceRange,
}: FilterSectionProps) => {
  const context = useDataContext();

  if (!context) {
    return <div>Error: DataContext not available</div>;
  }

  const { uniqueCategory } = context;
  return (
    <div className="bg-gray-100 mt-10 p-4 rounded-md ">
      <input
        type="text"
        value={search}
        placeholder="Search..."
        className="bg-white p-2 rounded-md border-gray-400 border-2"
        onChange={(e) => setSearch(e.target.value)}
      />
      <h1 className="mt-5 font-semibold text-xl">Category</h1>
      <div className="flex flex-col gap-2 mt-3">
        {uniqueCategory?.map((item, index) => {
          return (
            <div key={index} className="flex gap-2 items-center">
              <input
                type="checkbox"
                name={item}
                checked={category === item}
                value={item}
                onChange={handleCategoryChange}
              />
              <button className="uppercase cursor-pointer">{item}</button>
            </div>
          );
        })}
      </div>
      <h1 className="mt-5 font-semibold text-xl">Price Range</h1>
      <div className="flex flex-col gap-2">
        <label htmlFor="">
          Price Range: ${priceRange[0]} - ${priceRange[1]}
        </label>
        <input
          type="range"
          name=""
          id=""
          min="0"
          max="5000"
          value={priceRange[1]}
          onChange={(e) =>
            setPriceRange([priceRange[0], Number(e.target.value)])
          }
        />
      </div>
      <button
        className="bg-red-500 text-white rounded-md px-3 py-1 mt-5 cursor-pointer"
        onClick={() => {
          setSearch("");
          setCategory("ALL");
          setPriceRange([0, 5000]);
        }}
      >
        Reset filters
      </button>
    </div>
  );
};

export default FilterSection;
