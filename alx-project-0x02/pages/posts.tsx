import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import type { PostProps } from "@/interfaces";

interface PostsPageProps {
  posts: PostProps[];
}

export default function PostsPage({ posts }: PostsPageProps) {
  return (
    <div>
      <Header />
      <div className="p-8">
        <h1 className="text-3xl font-bold text-center mb-8">Posts Page</h1>

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
      </div>
    </div>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
  const posts: PostProps[] = await res.json();

  return {
    props: {
      posts,
    },
  };
}
