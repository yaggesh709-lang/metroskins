"use client";

import { useCart } from "../../../lib/cart";
type Props = {
  id: string;
  name: string;
  price: number;
};

export default function AddToCartButton({
  id,
  name,
  price,
}: Props) {
  const addItem = useCart((state) => state.addItem);

  return (
    <button
      onClick={() => {
  console.log("ADDED:", name);
addItem({
  id: crypto.randomUUID(),
  productId: id,
  name,
  price,
});
}}
      className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
    >
      Add To Cart
    </button>
  );
}
