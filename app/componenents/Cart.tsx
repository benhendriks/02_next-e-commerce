"use client";

import Image from "next/image";
import { useCartStore } from "@/store";
import formatPrice from "@/util/PriceFormat";
import { IoAddCircle, IoRemoveCircle } from "react-icons/io5";
import basket from "../../public/basket.png";

export default function Cart() {
  const cartStore = useCartStore();
  return (
    <div
      onClick={() => cartStore.toggleCart()}
      className="fixed w-full h-screen left-0 top-0 bg-black/25 "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white absolute right-0 top-0 w-1/4 h-screen p-12 overflow-scroll text-gray-70"
      >
        <h1>Here is your shopping list 🎉</h1>
        {cartStore.cart.map((item) => (
          <div className="flex py-4 gap-4">
            <Image
              className="rounded-xl"
              src={item.image}
              alt={item.name}
              width={120}
              height={120}
            />
            <div className="text-lg">
              <h2 className="">{item.name}</h2>
              <div className="flex gap-2">
                <h2 className="">Quantity: {item.quantity}</h2>
                <button
                  className=""
                  onClick={() =>
                    cartStore.removeProduct({
                      id: item.id,
                      name: item.name,
                      image: item.image,
                      unit_amount: item.unit_amount,
                      quantity: item.quantity,
                    })
                  }
                >
                  <IoRemoveCircle />
                </button>
                <button
                  className=""
                  onClick={() =>
                    cartStore.addProduct({
                      id: item.id,
                      name: item.name,
                      image: item.image,
                      unit_amount: item.unit_amount,
                      quantity: item.quantity,
                    })
                  }
                >
                  <IoAddCircle />
                </button>
              </div>
              <h3 className="text-sm font-bold">
                {item.unit_amount && formatPrice(item.unit_amount)}
              </h3>
            </div>
          </div>
        ))}
        {cartStore.cart.length > 0 && (
          <button className="py-2 mt-4 bg-teal-700 w-full rounded-md text-white">
            Checkout
          </button>
        )}
        {!cartStore.cart.length && (
          <div className="flex flex-col items-center gap-12 text-2xl font-medium pt-56 opacity-75">
            <h1>Uhhh okhhh it`s empty</h1>
            <Image
              src={basket}
              alt="empty basket"
              width={200}
              height={200}
            ></Image>
          </div>
        )}
      </div>
    </div>
  );
}
