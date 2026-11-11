
"use client";

import { useCart } from "../../lib/cart";

export default function CheckoutPage() {
  const items = useCart((state) => state.items);

  const total = items.reduce(
    (sum, item) => sum + item.price,
    0
  );

  const groupedItems = Object.values(
    items.reduce((acc, item) => {
      if (!acc[item.name]) {
        acc[item.name] = {
          ...item,
          quantity: 1,
        };
      } else {
        acc[item.name].quantity++;
      }

      return acc;
    }, {} as Record<string, any>)
  );

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">

        {/* Checkout Form */}
        <div>
          <h1 className="text-5xl font-bold mb-10">
            Checkout
          </h1>

         
<form className="space-y-6">

  <input
    required
    placeholder="Full Name"
    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-4"
  />

  <input
    required
    type="tel"
    pattern="[0-9]{10}"
    title="Enter a 10 digit phone number"
    placeholder="Phone Number"
    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-4"
  />

  <input
    required
    type="email"
    placeholder="Email"
    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-4"
  />

  <textarea
    required
    placeholder="Shipping Address"
    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-4 h-32"
  />

  <button
    type="submit"
    className="
    w-full
    bg-white
    text-black
    py-4
    rounded-full
    font-semibold
    hover:scale-[1.01]
    transition
    "
  >
    Place Order
  </button>

</form>

        </div>

        {/* Order Summary */}
        <div className="border border-zinc-800 rounded-2xl p-6 h-fit">

          <h2 className="text-2xl font-bold mb-6">
            Order Summary
          </h2>

          <div className="space-y-4">

            {groupedItems.map((item) => (
              <div
                key={item.name}
                className="flex justify-between items-center"
              >
                <div>
                  <p className="font-medium">
                    {item.name}
                  </p>

                  <p className="text-zinc-500 text-sm">
                    ₹{item.price}
                  </p>
                </div>

                <div
                  className="
                  px-3 py-1
                  rounded-full
                  bg-zinc-900
                  border border-zinc-800
                  text-sm
                  "
                >
                  x{item.quantity}
                </div>
              </div>
            ))}

          </div>

          <div className="border-t border-zinc-800 mt-6 pt-6">

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

            <div className="flex justify-between mt-4 text-xl font-bold">
              <span>Total</span>
              <span>₹{total}</span>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}