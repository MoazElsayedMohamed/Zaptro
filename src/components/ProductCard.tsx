import { IoCartOutline } from "react-icons/io5";

type ProductCardProps = {
  title: string;
  slug: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

const ProductCard = (product: ProductCardProps) => {
  return (
    <div className="relative flex flex-col justify-between border border-gray-100 rounded-2xl cursor-pointer hover:scale-105 hover:shadow-2xl transition-all p-2 h-full">
      <div>
        <img
          src={product.image}
          alt={product.title}
          className="bg-gray-100 aspect-square"
        />
        <h1 className="line-clamp-2 p-1 font-semibold">{product.title}</h1>
        <p className="my-1 text-lg text-gray-800 font-bold">${product.price}</p>
      </div>
      <button className="bg-red-500 px-3 py-2 text-lg rounded-md text-white w-full cursor-pointer flex gap-6 items-center justify-center justify-self-end  font-semibold">
        <IoCartOutline className="size-6" /> Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
