import AddToCartButton from "./AddToCartButton";
import CartCount from "../../components/CartCount";
import FlipCard from "./FlipCard";
import Navbar from "../../components/Navbar";
const products = {
  "matte-black": {
    name: "Matte Black",
    price: 99,
    description:
      "Premium matte black metro card skin with a clean, minimal aesthetic. High-quality vinyl with free shipping across India.",
  },

  "anime-edition": {
    name: "Anime",
    price: 99,
    description:
      "Anime-inspired metro card skin for people who want their card to stand out and feel unique.",
  },

  "luxury-edition": {
    name: "Luxury",
    price: 99,
    description:
      "Luxury metro card skin with a premium aesthetic designed to feel elegant and expensive.",
  },
};

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product =
    products[slug as keyof typeof products];
  if (!product) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1 className="text-4xl font-bold">
          Product not found
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white px-8 md:px-14 py-32">
      <Navbar />

      <div className="grid lg:grid-cols-2 gap-20 items-center">

        {/* Left Product Preview */}
        <div className="relative flex justify-center items-center min-h-[600px] group cursor-pointer">

          {/* glow */}
          <div
            className="
            absolute w-[500px] h-[500px]
            rounded-full bg-white/10 blur-[140px]
            opacity-50 transition-all duration-500
            group-hover:scale-110
          "
          />

          {/* back card */}
          <div
            className="
            absolute w-[340px] h-[220px]
            rounded-[36px]
            bg-zinc-800
            border border-zinc-700
            rotate-[-12deg]
            -translate-x-[70px]
            shadow-[0_40px_120px_rgba(255,255,255,0.06)]
            transition-all duration-500
            group-hover:-translate-y-2
          "
          />

          {/* middle card */}
          <div
            className="
            absolute w-[340px] h-[220px]
            rounded-[36px]
            bg-zinc-700
            border border-zinc-600
            rotate-[10deg]
            translate-x-[70px]
            shadow-[0_40px_120px_rgba(255,255,255,0.06)]
            transition-all duration-500
            group-hover:-translate-y-1
          "
          />

        <FlipCard name={product.name} />
        </div>

        {/* Right Side */}
        <div>

          <p className="uppercase tracking-[0.35em] text-zinc-500 text-sm">
            MetroSkins Collection
          </p>

          <h1 className="text-6xl md:text-7xl font-bold mt-4 leading-[0.95]">
            {product.name}
          </h1>

          <div className="mt-8 flex items-center gap-4 flex-wrap">
            <p className="text-4xl font-bold">
              ₹{product.price}
            </p>

            <span className="text-sm font-medium text-green-400 border border-green-500/30 bg-green-500/10 px-4 py-2 rounded-full">
              Free Shipping
            </span>
          </div>

          <p className="text-zinc-400 mt-8 text-lg leading-relaxed max-w-lg">
            {product.description}
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <AddToCartButton
  id={slug}
  name={product.name}
  price={product.price}
/>

            <button className="border border-zinc-700 px-8 py-4 rounded-full hover:bg-zinc-900 transition">
              Customise Design
            </button>
          </div>

          <div className="mt-14 space-y-5 text-zinc-400">
            <div>✦ Premium Vinyl Material</div>
            <div>✦ Scratch Resistant</div>
            <div>✦ Easy To Apply</div>
            <div>✦ Residue-Free Removal</div>
            <div className="text-green-400">
              ✦ Free Shipping Across India
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
