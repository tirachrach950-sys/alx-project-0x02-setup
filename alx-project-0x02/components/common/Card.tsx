import type { CardProps } from "@/interfaces";

export default function Card({ title, content }: CardProps) {
  return (
    <div className="border rounded-lg shadow-md p-6 m-4 bg-white hover:shadow-xl transition">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p>{content}</p>
    </div>
  );
}
