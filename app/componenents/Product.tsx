import Image from "next/image";
import formatPrice from "@/util/PriceFormat";
import { ProductType } from "@/types/ProductTypes";
import Link from "next/link";

export default function Product({
  id,
  name,
  image,
  unit_amount,
  description,
  metadata,
}: ProductType) {
  const { features } = metadata;

  return (
    <Link
      href={{
        pathname: `/product/${id}`,
        query: {
          id,
          name,
          description,
          image,
          unit_amount,
          features,
        },
      }}
    >
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
          <p>{description}</p>
          <h2>
            {unit_amount !== null ? formatPrice(unit_amount as number) : "N/A"}
          </h2>
        </div>
      </div>
    </Link>
  );
}
