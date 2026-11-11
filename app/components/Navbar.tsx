
import Link from "next/link";
import CartCount from "./CartCount";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-6">
      <Link
        href="/"
        className="text-2xl font-bold"
      >
        MetroSkins
      </Link>

      <CartCount />
    </nav>
  );
}
