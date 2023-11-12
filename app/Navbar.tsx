import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="flex py-2 px-5 bg-sky-800 ">
      <h1 className="text-white">Navbar</h1>
      <ul className="flex ml-2 gap-3">
        <Link href={"/"}>
          <li className="text-white cursor-pointer">Home</li>
        </Link>
        <Link href={"/product"}>
          <li className="text-white cursor-pointer">Products</li>
        </Link>
        <Link href={"/"}>
          <li className="text-white cursor-pointer">Profile</li>
        </Link>
        <Link href={"/dashboard"}>
          <li className="text-white cursor-pointer">Dashboard</li>
        </Link>
      </ul>
    </nav>
  );
}
