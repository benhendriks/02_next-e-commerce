import Image from "next/image";
import formatPrice from "@/util/PriceFormat";
import { SearchParamTypes } from "@/types/SearchParamTypes";

export default async function Product({ searchParams }: SearchParamTypes) {
  return (
    <div className="flex flex-col gap-8 p-12 text-gray-700">
      <Image
        className="rounded-lg"
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
      <button className="my-4 text-white py-2 font-medium rounded-md bg-teal-700">
        Add to card
      </button>
    </div>
  );
}
