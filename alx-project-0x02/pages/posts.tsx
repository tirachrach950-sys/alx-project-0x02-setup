import { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import type { PostProps } from "@/interfaces";

export default function PostsPage() {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <Header />
      <div className="p-8">
        <h1 className="text-3xl font-bold text-center mb-8">Posts Page</h1>

        {loading ? (
          <p className="text-center">Loading posts...</p>
        ) : (
          <div className="flex flex-wrap justify-center">
            {posts.map((post) => (
              <PostCard
                key={post.id}
                title={post.title}
                body={post.body}
                userId={post.userId}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
