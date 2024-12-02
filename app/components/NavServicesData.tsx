import { client } from "../lib/sanity";
import { simplifiedService } from "../interface";
import NavServices from "./NavServices";

async function getData() {
  const query = `* [_type =='service']{
    _id,
      name,
  }`;

  const data = await client.fetch(query);
  return data;
}

async function AllServices() {
  const data: simplifiedService[] = await getData();
  return data;
}

export default async function NavCategoriesData() {
  const services = await AllServices();
  return <NavServices services={services} />;
}
