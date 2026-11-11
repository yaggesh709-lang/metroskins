
"use client";

import Navbar from "../components/Navbar";
import { useCart } from "../../lib/cart";
import Link from "next/link";

export default function CartPage() {
  const items = useCart((state) => state.items);

  const addItem = useCart(
    (state) => state.addItem
  );

  const removeItem = useCart(
    (state) => state.removeItem
  );

  const removeAllByProduct = useCart(
    (state) => state.removeAllByProduct
  );

  const total = items.reduce(
    (sum, item) => sum + item.price,
    0
  );

  const groupedItems = Object.values(
    items.reduce((acc, item) => {
      if (!acc[item.productId]) {
        acc[item.productId] = {
          ...item,
          quantity: 1,
        };
      } else {
        acc[item.productId].quantity++;
      }

      return acc;
    }, {} as Record<string, any>)
  );

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <Navbar />

      <h1 className="text-5xl font-bold mb-10">
        Cart
      </h1>

      {items.length === 0 ? (
        <p className="text-zinc-500 text-xl">
          Your cart is empty.
        </p>
      ) : (
        <div className="grid lg:grid-cols-3 gap-8">

          
{/* Cart Items */}
<div className="lg:col-span-2 space-y-4">

  {groupedItems.map((item) => (
    <div
      key={item.productId}
      className="border border-zinc-800 p-6 rounded-2xl"
    >
      <div className="flex justify-between items-start">

        <div>
          <h2 className="text-2xl font-semibold">
            {item.name}
          </h2>

          <p className="text-zinc-500 mt-2">
            ₹{item.price} each
          </p>

          <p className="font-semibold mt-1">
            ₹{item.price * item.quantity}
          </p>

          <button
            onClick={() =>
              removeAllByProduct(
                item.productId
              )
            }
            className="
            mt-4
            text-sm
            text-red-400
            hover:text-red-300
            underline
            "
          >
            Remove All
          </button>
        </div>

        <div className="flex items-center gap-4">

          <button
            onClick={() => {
              const firstItem = items.find(
                (i) =>
                  i.productId ===
                  item.productId
              );

              if (firstItem) {
                removeItem(firstItem.id);
              }
            }}
            className="
            w-10 h-10
            rounded-full
            border border-zinc-700
            hover:bg-zinc-900
            "
          >
            -
          </button>

          <span className="text-lg font-semibold min-w-[20px] text-center">
            {item.quantity}
          </span>

          <button
            onClick={() =>
              addItem({
                id: crypto.randomUUID(),
                productId: item.productId,
                name: item.name,
                price: item.price,
              })
            }
            className="
            w-10 h-10
            rounded-full
            border border-zinc-700
            hover:bg-zinc-900
            "
          >
            +
          </button>

        </div>

      </div>
    </div>
  ))}

</div>


          {/* Summary */}
          <div className="border border-zinc-800 p-6 rounded-2xl h-fit">

            <h2 className="text-2xl font-bold mb-6">
              Order Summary
            </h2>

            <div className="flex justify-between text-zinc-400">
              <span>Items</span>
              <span>{items.length}</span>
            </div>

            <div className="flex justify-between mt-3 text-zinc-400">
              <span>Shipping</span>
              <span className="text-green-400">
                Free
              </span>
            </div>

            <div className="border-t border-zinc-800 mt-6 pt-6 flex justify-between text-xl font-bold">
              <span>Total</span>
              <span>₹{total}</span>
            </div>

            <Link
              href="/checkout"
              className="
              block
              text-center
              w-full
              mt-8
              bg-white
              text-black
              py-4
              rounded-full
              font-semibold
              "
            >
              Checkout
            </Link>

          </div>

        </div>
      )}
    </main>
  );
}
