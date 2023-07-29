"use client";

import Image from "next/image";
import { useCartStore } from "@/store";
import formatPrice from "@/util/PriceFormat";
import { IoAddCircle, IoRemoveCircle } from "react-icons/io5";
import basket from "../../public/basket.png";
import { motion, AnimatePresence } from "framer-motion";

export default function Cart() {
  const cartStore = useCartStore();
  const totalPrice = cartStore.cart.reduce((acc, item) => {
    return acc + item.unit_amount! * item.quantity!;
  }, 0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => cartStore.toggleCart()}
      className="fixed w-full h-screen left-0 top-0 bg-black/25 "
    >
      <motion.div
        layout
        onClick={(e) => e.stopPropagation()}
        className="bg-white absolute right-0 top-0 w-1/4 h-screen p-12 overflow-scroll text-gray-70"
      >
        <h1>Here is your shopping list 🎉</h1>
        {cartStore.cart.map((item) => (
          <motion.div layout key={item.id} className="flex py-4 gap-4">
            <Image
              className="rounded-xl"
              src={item.image}
              alt={item.name}
              width={120}
              height={120}
            />
            <motion.div layout className="text-lg">
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
            </motion.div>
          </motion.div>
        ))}
        {cartStore.cart.length > 0 && (
          <motion.div layout>
            <p className="py-2 mt-4 font-bold">
              Total: {formatPrice(totalPrice)}
            </p>
            <button className="py-2 mt-4 bg-teal-700 w-full rounded-md text-white">
              Checkout
            </button>
          </motion.div>
        )}
        <AnimatePresence>
          {!cartStore.cart.length && (
            <motion.div
              animate={{ scale: 1, rotateZ: 0, opacity: 0.75 }}
              initial={{ scale: 0.5, roatateZ: -10, opacity: 0 }}
              exit={{ scale: 0.5, roatateZ: -10, opacity: 0 }}
              className="flex flex-col items-center gap-12 text-2xl font-medium pt-56 opacity-75"
            >
              <h1>Uhhh okhhh it`s empty</h1>
              <Image
                src={basket}
                alt="empty basket"
                width={200}
                height={200}
              ></Image>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
