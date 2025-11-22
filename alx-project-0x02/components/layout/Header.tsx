import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-blue-600 text-white p-4 flex justify-center gap-6">
      <Link href="/home" className="hover:underline text-lg">
        Home
      </Link>
      <Link href="/about" className="hover:underline text-lg">
        About
      </Link>
      <Link href="/posts" className="hover:underline text-lg">
        Posts
      </Link>
    </header>
  );
}
