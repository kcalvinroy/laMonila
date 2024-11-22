import Image from "next/image";
import { client } from "../lib/sanity";
import { urlFor } from "../lib/sanity";
import Link from "next/link";
import { ArrowBigDownIcon, BookDown } from "lucide-react";
import { aboutSection } from "../interface";

async function getData() {
  const query = `* [_type == 'about'][0]{
      paragraph1,
      paragraph2,
        image,
  }`;

  const data = await client.fetch(query);

  return data;
}

export default async function About() {
  const data: aboutSection = await getData();

  return (
    <section className="mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
      <div className="mb-8 flex flex-wrap justify-between md:mb-16 ">
        <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/2 lg:pb-12 lg:pt-24">
          <h1 className="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">
            About La Monila
          </h1>
          <p className="w-full leading-relaxed text-gray-500 xl:text-lg ">
            {data.paragraph1}
          </p>
          <p className="w-full leading-relaxed text-gray-500 xl:text-lg mt-6">
            {data.paragraph2}
          </p>
        </div>

        <div className="mb-12 flex w-full md:mb-16 lg:w-1/2">
          <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 md:left-16 md:top-16 lg:ml-0">
            <Image
              src={urlFor(data.image).url()}
              alt="Great Map Photo"
              className="h-full w-full object-cover object-center"
              priority
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-8 md:flex-row">
        <div className="flex h-16 w-64 rounded-lg border bg-primary hover:bg-primary/80">
          <a
            href="/Profile.pdf"
            className="flex text-lg w-full font-semibold text-red-50 items-center justify-center ease-in-out transition duration-100  active:bg-primary/80"
          >
            Company Profile
            <span className="m-2 flex">
              <BookDown />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
