import Image from "next/image";
import formatPrice from "@/util/PriceFormat";
import { SearchParamTypes } from "@/types/SearchParamTypes";
import AddCart from "./AddCart";

export default async function Product({ searchParams }: SearchParamTypes) {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-8 text-gray-700">
      <Image
        className="rounded-lg w-full"
        src={searchParams.image}
        alt={searchParams.name}
        width={600}
        height={600}
      />
      <div className="font-medium">
        <h1 className="text-2xl py-2">{searchParams.name}</h1>
        <p className="py-2">{searchParams.description}</p>
        <p className="py-2">{searchParams.features}</p>
        <div className="flex gap-2"></div>
        <h2 className="font-bold text-teal-700 py-2">
          {searchParams.unit_amount !== null
            ? formatPrice(searchParams.unit_amount as number)
            : "N/A"}
        </h2>
      </div>
      <AddCart
        name={searchParams.name}
        id={searchParams.id}
        image={searchParams.image}
        description={searchParams.description}
        unit_amount={searchParams.unit_amount}
        quantity={searchParams.quantity}
      />
    </div>
  );
}
