import { type PostProps } from "@/interfaces";

export default function PostCard({ title, body, userId }: PostProps) {
  return (
    <div className="border rounded-lg shadow-md p-6 m-4 bg-white w-80 hover:shadow-xl transition">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-2">{body}</p>
      <p className="text-sm text-gray-500">User ID: {userId}</p>
    </div>
  );
}

