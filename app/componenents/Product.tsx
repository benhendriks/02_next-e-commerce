import Image from "next/image";

export default function Product({ name, image, price }) {
  return (
    <div>
      <Image src={image} alt={name} width={200} height={200} />
      <h1>{name}</h1>
      <p>{price}</p>
    </div>
  );
}
