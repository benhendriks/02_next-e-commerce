"use client";

import Image from "next/image";
import { useCardStore } from "@/store";

export default function Cart() {
  const CartStore = useCardStore();
  console.log(
    "🚀 ~ file: Cart.tsx:9 ~ Cart ~ CartStore.isOpen:",
    CartStore.isOpen
  );
  return (
    <div className="">
      <h1>Cart</h1>
    </div>
  );
}
