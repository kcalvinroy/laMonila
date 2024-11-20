import { fullProduct } from "@/app/interface";
import { client } from "@/app/lib/sanity";
import ImageGallery from "@/app/components/ImageGallery";
import { Button } from "../../../components/ui/button";
import { Star, Truck } from "lucide-react";
import AddToCart from "@/app/components/AddToCart";
import Checkout from "@/app/components/Checkout";

async function getData(slug: string) {
  const query = `* [_type == "product" && slug.current == "${slug}"][0]{
    _id,
      images,
      price,
      name,
      description,
      "slug":slug.current,
      "categoryName": category->name,
      price_id
  }`;

  const data = await client.fetch(query);

  return data;
}

export const dynamic = "force-dynamic";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const data: fullProduct = await getData((await params).slug);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 md:p-8">
        <div className="grid gap-8 md:grid-cols-2">
          <ImageGallery images={data.images} />

          <div className="md:py-8">
            <div className="mb-2 md:mb-3">
              <span className="mb-0.5 inline-block text-gray-500">
                {data.categoryName}
              </span>
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                {data.name}
              </h2>
            </div>
            <div className="mb-6 flex items-center gap-3 md:mb-10">
              <Button className="rounded-full gap-x-2">
                <span className="text-sm">4.2</span>
                <Star className="h-5 w-5" />
              </Button>

              <span className="text-sm text-gray-500 transition duration-100">
                56 Ratings
              </span>
            </div>
            <div className="mb-4">
              <div className="flex items-center gap-2">
                {/* Actual Price after discount*/}
                <span className="text-xl font-bold text-gray-800 md:text-2xl">
                  AED {data.price}
                </span>

                {/* Price before discount */}
                <span className="mb-0.5 text-red-500 line-through">
                  AED {data.price + 3}
                </span>
              </div>
              <span className="text-sm text-gray-500">
                Inc. VAT plus shipping
              </span>
            </div>

            <div className="mb-6 flex items-center gap-2 text-gray-500">
              <Truck className="w-5 h-5" />
              <span className="text-sm ">Delivery in 2-4 working days</span>
            </div>

            <div className="flex gap-2.5">
              <AddToCart
                currency="AED"
                description={data.description}
                image={data.images[0]}
                name={data.name}
                price={data.price}
                price_id={data.price_id}
              />
              <Checkout
                currency="AED"
                description={data.description}
                image={data.images[0]}
                name={data.name}
                price={data.price}
                price_id={data.price_id}
              />
            </div>

            <p className="mt-12 txt-base text-gray-500 tracking-wide">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
