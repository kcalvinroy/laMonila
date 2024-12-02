"use client";

import { simplifiedCategory } from "../interface";
import Link from "next/link";
import { useState } from "react";

interface NavCategoriesProps {
  categories: simplifiedCategory[];
}

export default function NavCategories({ categories }: NavCategoriesProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      className="relative inline-block text-left w-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href="/category/all"
        className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
      >
        Categories
      </Link>

      <div
        className={`z-30 flex absolute w-80 -ml-2 mt-2 origin-top-right rounded-b-md shadow-lg bg-white focus:outline-none transition duration-300 ease-in-out ${
          isOpen ? "-translate-y-2 opacity-100" : "translate-y-2 opacity-0"
        }`}
      >
        <div className="py-1 flex-row grid grid-cols-2 gap-2 w-full">
          {categories.map((category) => (
            <a
              key={category._id}
              href={`/category/${category.slug}`}
              className="block px-4 py-2 w-48 text-md text-gray-600 hover:text-primary"
            >
              {category.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
