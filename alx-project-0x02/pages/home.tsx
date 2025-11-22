export default function HomePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-10">
        Welcome to the Home Page
      </h1>
    </div>
  );
}
import Card from "@/components/common/Card";

export default function HomePage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Welcome to the Home Page
      </h1>

      <div className="flex flex-wrap justify-center">
        <Card
          title="Card 1"
          content="This is the content for the first card."
        />
        <Card
          title="Card 2"
          content="This is some more content for another card."
        />
        <Card
          title="Card 3"
          content="Cards are reusable and dynamic components!"
        />
      </div>
    </div>
  );
}

