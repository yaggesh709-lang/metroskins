"use client";

import { useCart } from "../../lib/cart";
import Link from "next/link";

export default function CartCount() {
  const items = useCart((state) => state.items);

  return (
  <Link
    href="/cart"
    className="
      hover:text-white
      transition
      cursor-pointer
    "
  >
    Cart ({items.length})
  </Link>
);
}