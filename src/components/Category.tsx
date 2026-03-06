import { useDataContext } from "@/context/DataContext";
import { Button } from "./ui/button";

const Category = () => {
  const context = useDataContext();

  if (!context) {
    return <div>Error: DataContext not available</div>;
  }

  const { uniqueCategory } = context;

  return (
    <div className="bg-[#101829]">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-7 px-4">
        {uniqueCategory?.map((category, index) => {
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
