import Link from "next/link";
import React from "react";

import { IoBagHandleSharp } from "react-icons/io5";
import NavLinks from "./navLinks";
import { Button } from "@/components/ui/button";
const navbar = () => {
  return (
    <nav className="">
      <div className="flex items-center font-medium justify-around h-32">
        <div className="flex gap-8">
          <IoBagHandleSharp size={66} className="text-red-600" />
          <h1 className="text-black font-bold text-2xl">Delivery X</h1>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins] text-2xl font-bold">
          <li>
            <Link
              href="/"
              className="py-7 px-3 inline-block hover:text-red-500 cursor-pointer"
            >
              Home
            </Link>
          </li>
          <NavLinks />
        </ul>
        <div className="flex items-center justify-around">
          <div className="py-8 px-4">
            <Button
              variant="outline"
              className="text-2xl size-lg h-20 hover:bg-red-600 hover:text-white rounded-2xl"
            >
              Download app
            </Button>
          </div>
          <div>
            <Button
              variant="destructive"
              className="text-2xl size-lg h-20 rounded-2xl"
            >
              Register
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
