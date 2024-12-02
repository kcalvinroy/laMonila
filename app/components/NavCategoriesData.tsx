import { client } from "../lib/sanity";
import { simplifiedCategory } from "../interface";
import NavCategories from "./NavCategories";

async function getData() {
  const query = `* [_type =='category']{
    _id,
      name,
      "slug": slug.current,
  }`;

  const data = await client.fetch(query);
  return data;
}

async function AllCategories() {
  const data: simplifiedCategory[] = await getData();
  return data;
}

export default async function NavCategoriesData() {
  const categories = await AllCategories();
  return <NavCategories categories={categories} />;
}
