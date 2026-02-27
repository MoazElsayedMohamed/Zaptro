import { useDataContext, type Props } from "@/context/DataContext";
import { useEffect } from "react";
import { Button } from "./ui/button";

const Category = () => {
  const context = useDataContext();

  if (!context) {
    return <div>Error: DataContext not available</div>;
  }

  const { data, fetchAllProducts } = context;

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const getUniqueCategory = (
    data: Props | undefined,
    property: keyof Props[number],
  ) => {
    if (!data) return [];
    let newVal = data.map((item) => item[property]);
    newVal = [...new Set(newVal)];
    return newVal;
  };
  const uniqueCategory = getUniqueCategory(data, "category");
  console.log(uniqueCategory);

  return (
    <div className="bg-[#101829]">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-7 px-4">
        {uniqueCategory.map((category, index) => {
          return (
            <div key={index}>
              <Button variant="destructive">{category}</Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
