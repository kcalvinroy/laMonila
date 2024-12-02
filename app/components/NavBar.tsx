import Link from "next/link";
import NavCategoriesData from "./NavCategoriesData";
import NavServicesData from "./NavServicesData";
import Cart from "./Cart";
import Home from "./Home";

export default function NavBar() {
  return (
    <>
      <header id="nav" className="mb-8 border-b">
        <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
          <Link href="/">
            <h1 className="mt-2 font-alexBrush text-5xl font-bold ">
              La <span className="text-primary">Molina</span>
            </h1>
          </Link>

          <nav className="hidden gap-12 lg:flex 2xl:ml-16">
            <Home />
            <NavServicesData />
            <NavCategoriesData />
          </nav>

          <Cart />
        </div>
      </header>
    </>
  );
}
