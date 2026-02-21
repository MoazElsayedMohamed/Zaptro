import { Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { FaCaretDown } from "react-icons/fa";

const Navbar = () => {
  const location = false;
  return (
    <div className="bg-white py-3 shadow-2xl">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex gap-7 items-center">
          <Link to="/">
            <h1 className="text-3xl font-bold">
              <span className="text-red-500 font-serif  ">Z</span>aptro
            </h1>
          </Link>
          <div className="flex gap-1 cursor-pointer text-gray-700 items-center">
            <MapPin className="text-red-500" />
            <span className="font-semibold">
              {location ? <div></div> : "Add Address"}
            </span>
            <FaCaretDown />
          </div>
        </div>
        <ul className="flex gap-7 items-center text-xl font-semibold">
          <Link
            to="/"
            activeProps={{
              className: "border-b-3 border-red-500 transition-all",
            }}
          >
            <li>Home</li>
          </Link>
          <Link
            to="/products"
            activeProps={{
              className: "border-b-3 border-red-500 transition-all",
            }}
          >
            <li>Products</li>
          </Link>
          <Link
            to="/about"
            activeProps={{
              className: "border-b-3 border-red-500 transition-all",
            }}
          >
            <li>About</li>
          </Link>
          <Link
            to="/contact"
            activeProps={{
              className: "border-b-3 border-red-500 transition-all",
            }}
          >
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
