import Image from "next/image";
import formatPrice from "@/util/PriceFormat";
import { ProductType } from "@/types/ProductTypes";

export default function Product({ name, image, price }: ProductType) {
  return (
    <div className="text-gray-700">
      <Image
        className="rounded-lg"
        src={image}
        alt={name}
        width={800}
        height={800}
      />
      <div className="font-medium py-2">
        <h1>{name}</h1>
        <h2>{price !== null ? formatPrice(price as number) : "N/A"}</h2>
      </div>
    </div>
  );
}
