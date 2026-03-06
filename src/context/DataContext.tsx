import { createContext, useContext, useState, type ReactNode } from "react";

interface DataContextType {
  data: Props | undefined;
  setData: React.Dispatch<React.SetStateAction<Props | undefined>>;
  fetchAllProducts: () => Promise<void>;
  uniqueCategory: string[];
}

type DataProviderProps = {
  children: ReactNode;
};

export type Props = {
  title: string;
  slug: string;
  price: number;
  description: string;
  category: string;
  image: string;
}[];

export const DataContext = createContext<DataContextType | null>(null);

export const DataProvider = ({ children }: DataProviderProps) => {
  const [data, setData] = useState<Props>();

  const fetchAllProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const products = await response.json();
      setData(products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const getUniqueCategory = (
    data: Props | undefined,
    property: keyof Props[number],
  ) => {
    if (!data) return [];
    let newVal = data.map((item) => item[property]);
    newVal = ["ALL", ...new Set(newVal)];
    return newVal;
  };
  const uniqueCategory = getUniqueCategory(data, "category") as string[];
  return (
    <DataContext.Provider
      value={{ data, setData, fetchAllProducts, uniqueCategory }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);
