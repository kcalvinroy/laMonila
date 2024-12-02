"use client";

import { simplifiedService } from "../interface";
import Link from "next/link";
import { useState } from "react";

interface NavServicesProps {
  services: simplifiedService[];
}

export default function NavServices({ services }: NavServicesProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      className="relative inline-block text-left"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href="/services/all"
        className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
      >
        Services
      </Link>

      <div
        className={`z-30 absolute w-64 -ml-3 mt-2 origin-top-right rounded-b-md shadow-lg bg-white focus:outline-none transition duration-300 ease-in-out ${
          isOpen ? "-translate-y-2 opacity-100" : "translate-y-2 opacity-0"
        }`}
      >
        <div className="py-1">
          {services.map((service) => (
            <a
              key={service._id}
              href={`/services/${service.name}`}
              className="block px-4 py-2 text-md text-gray-600 hover:text-primary"
            >
              {service.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
