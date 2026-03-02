import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { FaCaretDown } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";

const Navbar = ({
  location,
  getLocation,
}: {
  location: any;
  getLocation: any;
}) => {
  return (
    <header className="bg-white py-3 shadow-2xl">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex gap-7 items-center">
          <Link to="/">
            <h1 className="text-3xl font-bold">
              <span className="text-red-500 font-serif  ">Z</span>aptro
            </h1>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex gap-1 cursor-pointer text-gray-700 items-center">
                <MapPin className="text-red-500" />
                <span className="font-semibold">
                  {location ? (
                    <div className="-space-y-2">
                      <p>{location.country}</p>
                      <p>{location.state}</p>
                    </div>
                  ) : (
                    "Add Address"
                  )}
                </span>
                <FaCaretDown />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuGroup>
                <h1 className="font-semibold text-lg mb-4 flex justify-between p-1.5">
                  Change Location
                </h1>
                <Button onClick={getLocation}>Detect Location</Button>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <nav className="flex gap-7 items-center">
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
          <Link to="/cart" className="relative">
            <IoCartOutline className="h-7 w-7" />
            <span className="bg-red-500 px-2 rounded-full absolute -top-3 -right-3 text-white">
              0
            </span>
          </Link>
          <div>
            <SignedOut>
              <span className="bg-red-500 rounded-md px-3 py-1  text-white">
                <SignInButton />
              </span>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
