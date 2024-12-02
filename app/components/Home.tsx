"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Home",
    href: "/",
  },
];

export default function Home() {
  const pathname = usePathname();

  return (
    <div className="gap-12 lg:flex 2xl:ml-16">
      {links.map((link, idx) => (
        <div key={idx}>
          {pathname === link.href ? (
            <Link
              href={link.href}
              className="text-lg font-semibold text-primary"
            >
              {link.name}
            </Link>
          ) : (
            <Link
              href={link.href}
              className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
            >
              {link.name}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}
