import Categories from "./components/Categories";
import Hero from "./components/Hero";
import Newest from "./components/Newest";
import About from "./components/About";
import NavCategoriesData from "./components/NavCategoriesData";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      {/* <NavCategoriesData /> */}
      <Hero />
      <About />
      <Categories />
      <Newest />
    </div>
  );
}
