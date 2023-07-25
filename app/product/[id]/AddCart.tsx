"use client";

import { useCartStore } from "@/store";
import { AddCartType } from "@/types/AddCartType";
import { useState } from "react";

export default function AddCart({
  name,
  id,
  image,
  unit_amount,
  quantity,
}: AddCartType) {
  const cartStore = useCartStore();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    cartStore.addProduct({
      name,
      id,
      image,
      unit_amount,
      quantity,
    });
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
    }, 500);
  };
  return (
    <>
      <button
        onClick={handleAddToCart}
        disabled={added}
        className="my-12 text-white py-2 px-6 font-medium rounded-md bg-teal-700"
      >
        Add to card
      </button>
    </>
  );
}
