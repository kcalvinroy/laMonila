"use client";

import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

import { useShoppingCart } from "use-shopping-cart";

export default function Cart() {
  const { handleCartClick } = useShoppingCart();

  return (
    <div className="flex divide-x border-r sm:border-l">
      <Button
        variant={"outline"}
        onClick={() => handleCartClick()}
        className="flex flex-col gap-y-1.5 h-14 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none"
      >
        <ShoppingBag />
        <span className="hidden text-xs font-semibold text-gray-500 sm:block">
          Cart
        </span>
      </Button>
    </div>
  );
}
