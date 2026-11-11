
"use client";
import Link from "next/link";
import Navbar from "./components/Navbar";
import CartCount from "./components/CartCount";
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center px-8">
        {/* Glow */}
        <div className="absolute w-[500px] h-[500px] bg-white/10 blur-[140px] rounded-full" />

        <div className="relative z-10 text-center">
          <p className="uppercase tracking-[0.35em] text-zinc-500 text-sm mb-5">
            Premium Metro Card Skins
          </p>

          <h1 className="text-6xl md:text-8xl font-bold leading-[0.95] max-w-5xl mx-auto">
            Customize
            <br />
            Your Metro Card.
          </h1>

          <p className="mt-8 text-zinc-400 max-w-xl mx-auto text-lg">
            Premium skins that make your metro card
            actually look aesthetic.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition">
              Shop Collection
            </button>

            <button className="border border-zinc-700 px-8 py-4 rounded-full hover:bg-zinc-900 transition">
              Create Your Own
            </button>
          </div>
        </div>

        {/* Floating Metro Card */}
        <div className="absolute flex items-center justify-center -translate-y-10">
          <div className="metro-card">
            <div className="card-inner">
              <div className="card-front">
                <span>MetroSkins</span>
              </div>

              <div className="card-back">
                Premium Skin
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="px-8 md:px-14 py-28 border-t border-zinc-900">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.3em] text-zinc-500 text-sm">
            Collection
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Trending Skins
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
  {
    name: "Matte Black",
    slug: "matte-black",
  },
  {
    name: "Anime",
    slug: "anime-edition",
  },
  {
    name: "Luxury",
    slug: "luxury-edition",
  },
].map((skin) => (


            
<Link
  href={`/product/${skin.slug}`}
  key={skin.slug}
  className="rounded-[32px] border border-zinc-900 bg-zinc-950 p-6 hover:border-zinc-700 transition group block cursor-pointer hover:scale-[1.01]"
>


              

<div className="aspect-square rounded-[32px] bg-zinc-900 flex items-center justify-center overflow-hidden relative max-h-[520px]">



  {/* glow */}
  <div className="absolute w-[280px] h-[280px] bg-white/5 blur-[80px] rounded-full" />

  <div className="w-[320px] h-[190px] rounded-[30px] bg-zinc-700 rotate-[-4deg] shadow-[0_40px_120px_rgba(255,255,255,0.12)] flex items-center justify-center text-white text-2xl font-semibold group-hover:rotate-0 group-hover:scale-105 transition duration-700">
    {skin.name}
  </div>

</div>



              <div className="mt-5 flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-semibold">
                    {skin.name}
                  </h3>

                  <p className="text-zinc-500 mt-1">
                    ₹149
                  </p>
                </div>

                <button className="rounded-full bg-white text-black px-5 py-2 text-sm font-medium hover:scale-105 transition">
                  Buy
                </button>
              </div>
              </Link>
          ))}
        </div>
      </section>
{/* Browse Categories */}
<section className="px-8 md:px-14 py-32 border-t border-zinc-900 overflow-hidden">
  <div className="flex items-end justify-between mb-14">
    <div>
      <p className="uppercase tracking-[0.3em] text-zinc-500 text-sm">
        Browse
      </p>

      <h2 className="text-5xl md:text-6xl font-bold mt-3">
        Explore Skins
      </h2>
    </div>

    <button className="hidden md:block text-zinc-500 hover:text-white transition">
      View All →
    </button>
  </div>

 <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory" ref={(el) => { if (!el) return; let ticking = false; el.onwheel = (e) => { e.preventDefault(); if (!ticking) { window.requestAnimationFrame(() => { el.scrollLeft += e.deltaY * 1.5; ticking = false; }); ticking = true; } }; }} >

    {[
      "Minimal",
      "Anime",
      "Luxury",
      "Gaming",
      "Streetwear",
      "Custom",
    ].map((category) => (
      <div
        key={category}
        className="group min-w-[340px] h-[430px] rounded-[40px] bg-zinc-950 border border-zinc-900 hover:border-zinc-700 transition duration-500 overflow-hidden relative cursor-pointer"
      >
        {/* Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent" />

        {/* Floating Metro Card */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[260px] h-[160px] rounded-[30px] bg-zinc-700 rotate-[-8deg] shadow-[0_50px_100px_rgba(255,255,255,0.12)] border border-zinc-500 group-hover:rotate-0 group-hover:scale-105 transition duration-700 flex items-center justify-center text-xl font-semibold text-white">
            {category}
          </div>
        </div>

        {/* Text */}
        <div className="absolute bottom-8 left-8">
          <h3 className="text-3xl font-bold">
            {category}
          </h3>

          <p className="text-zinc-500 mt-2">
            Explore collection
          </p>
        </div>
      </div>
    ))}
  </div>
</section>

{/* Custom Skin Section */}
<section className="px-8 md:px-14 py-36 border-t border-zinc-900">
  <div className="grid lg:grid-cols-2 gap-16 items-center">

    {/* Left */}
    <div>
      <p className="uppercase tracking-[0.3em] text-zinc-500 text-sm">
        Custom Design
      </p>

      <h2 className="text-5xl md:text-7xl font-bold mt-5 leading-[1]">
        Your Design.
        <br />
        Your Metro Card.
      </h2>

      <p className="text-zinc-400 mt-8 text-lg max-w-lg">
        Upload your favorite artwork, anime,
        photo, logo, or design and we’ll turn
        it into a premium metro card skin.
      </p>

      <div className="flex gap-4 mt-10">
        <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition">
          Upload Design
        </button>

        <button className="border border-zinc-700 px-8 py-4 rounded-full hover:bg-zinc-900 transition">
          Learn More
        </button>
      </div>
    </div>

    {/* Right Preview */}
    <div className="relative flex justify-center items-center min-h-[500px] group cursor-pointer">

      {/* glow */}
      <div
        className="
        absolute w-[380px] h-[380px]
        rounded-full bg-white/10 blur-[120px]
        opacity-40
        transition-all duration-500
        group-hover:opacity-80
        group-hover:scale-110
      "
      />

      {/* back card */}
      <div
        className="
        absolute w-[320px] h-[200px]
        rounded-[34px]
        bg-zinc-800
        border border-zinc-700
        rotate-[-12deg]
        -translate-x-[60px]
        shadow-[0_30px_100px_rgba(255,255,255,0.06)]
        transition-all duration-500
        group-hover:-translate-y-2
        group-hover:-translate-x-[70px]
      "
      />

      {/* middle card */}
      <div
        className="
        absolute w-[320px] h-[200px]
        rounded-[34px]
        bg-zinc-700
        border border-zinc-600
        rotate-[10deg]
        translate-x-[50px]
        shadow-[0_30px_100px_rgba(255,255,255,0.06)]
        transition-all duration-500
        group-hover:-translate-y-1
        group-hover:translate-x-[60px]
      "
      />

      {/* main card */}
      <div
        className="
        relative w-[360px] h-[220px]
        rounded-[38px]
        bg-gradient-to-br
        from-zinc-500
        via-zinc-700
        to-zinc-950
        border border-zinc-500
        shadow-[0_50px_150px_rgba(255,255,255,0.10)]
        flex items-center justify-center
        text-3xl font-semibold
        transition-all duration-500
        group-hover:scale-105
        group-hover:-translate-y-4
        group-hover:shadow-[0_70px_180px_rgba(255,255,255,0.18)]
      "
      >
        Your Design
      </div>

    </div>
  </div>
</section>


    </main>
  );
}