import ImageUrlBuilder from "@sanity/image-url/";
import { createClient } from "next-sanity";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const client = createClient({
  projectId: "8gwf8ji3",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

const builder = ImageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
