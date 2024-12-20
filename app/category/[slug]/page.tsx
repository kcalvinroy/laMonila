import Image from "next/image";
import { simplifiedProduct } from "../../interface";
import { client } from "../../lib/sanity";
import Link from "next/link";

async function getData(slug: string): Promise<simplifiedProduct[]> {
  return new Promise(async (resolve, reject) => {
    try {
      const query =
        slug === "all"
          ? `* [_type == "product"]{
      _id,
        "imageUrl": images[0].asset->url,
          price,
        name,
        "slug": slug.current,
        "categoryName": category->name
    }`
          : `* [_type == "product" && category->slug.current == "${slug}"]{
        _id,
          "imageUrl": images[0].asset->url,
            price,
          name,
          "slug": slug.current,
          "categoryName": category->name
      }`;

      const data = await client.fetch(query);

      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
}

export const dynamic = "force-dynamic";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  try {
    const data = await getData((await params).slug);

    function toName(slug: string) {
      return slug
        .replace(/-/g, " ")
        .replace(
          /\w\S*/g,
          (word) =>
            word.charAt(0).toUpperCase() + word.substring(1).toLowerCase(),
        );
    }

    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-20  sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              {(await params).slug === "all"
                ? "All Our Products"
                : `Our Products of ${toName((await params).slug)}`}
            </h2>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {data.map((product) => (
              <div key={product._id} className="group relative">
                <Link href={`/product/${product.slug}`}>
                  <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-full object-cover object-center lg:h-full lg:w-full bg-white"
                      width={300}
                      height={300}
                    />
                  </div>

                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">{product.name}</h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {product.categoryName}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      AED {product.price}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading products</div>;
  }
}
