import { client, urlFor } from "../lib/sanity";
import { category_service } from "../interface";
import Link from "next/link";
import Image from "next/image";

async function getData() {
  const query = `* [_type =='category']{
    _id,
      name,
      slug,
      description,
      image,
  }`;

  const data = await client.fetch(query);

  return data;
}

export default async function Categories() {
  const data: category_service[] = await getData();

  function toSlug(str: string) {
    return str
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  }

  return (
    <div className="bg-white" id="categories">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold tracking-tight text-black">
            Categories
          </h1>
        </div>
        <div className="flex pt-4 justify-start items-center">
          <p className="text-xl flex items-center leading-relaxed text-gray-500 xl:text-lg">
            Besides the delicious chocolate products, La Molina offers different
            services to cater to our customers&apos; needs.
          </p>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((category) => (
            <div key={category._id} className="group relative">
              <Link href={`/category/${toSlug(category.name)}`}>
                <div className="aspect-square w-full drop-shadow-xl group-hover:shadow-primary/85 overflow-hidden rounded-lg bg-primary group-hover:scale-105 lg:h-80 transition duration-300 ease-in-out group-hover:shadow-2xl">
                  <div className="w-full  h-3/4">
                    <Image
                      src={
                        category.image == null
                          ? "file.svg"
                          : urlFor(category.image).url()
                      }
                      alt={category.name}
                      className="w-full h-full object-cover object-center hover:scale-105 lg:h-full lg:w-full bg-white transition duration-300 ease-in-out"
                      width={300}
                      height={300}
                    />
                  </div>
                  <div className="m-auto flex justify-center w-full h-1/4 items-center">
                    <h3 className="text-2xl text-red-50">{category.name}</h3>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
