import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full p-4 bg-blue-600 text-white flex justify-center gap-6">
      <Link href="/home" className="text-lg hover:underline">
        Home
      </Link>
      <Link href="/about" className="text-lg hover:underline">
        About
      </Link>
    </header>
  );
}
