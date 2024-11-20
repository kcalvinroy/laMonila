"use client";

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../lib/sanity";

interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}
export interface ProductCart {
  name: string;
  description: string;
  price: number;
  currency: string;
  image: SanityImage;
  price_id: string;
}

export default function AddToCart({
  currency,
  description,
  name,
  price,
  image,
  price_id,
}: ProductCart) {
  const { addItem, handleCartClick } = useShoppingCart();

  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    price_id: price_id,
  };

  const handleAddToCart = () => {
    addItem(product);
    handleCartClick();
  };

  return (
    <Button
      onClick={() => {
        handleAddToCart();
      }}
      className="flex gap-2.5"
    >
      Add to Cart
    </Button>
  );
}
