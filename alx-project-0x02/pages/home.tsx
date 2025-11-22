import { useState } from "react";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import type { CardProps } from "@/interfaces";

export default function HomePage() {
  const [cards, setCards] = useState<CardProps[]>([
    { title: "Card 1", content: "This is the content for the first card." },
    { title: "Card 2", content: "This is some more content for another card." },
  ]);

  const handleAddCard = (title: string, content: string) => {
    setCards((prev) => [...prev, { title, content }]);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Welcome to the Home Page
      </h1>

      <div className="flex justify-center mb-6">
        <PostModal onAdd={handleAddCard} />
      </div>

      <div className="flex flex-wrap justify-center">
        {cards.map((card, index) => (
          <Card key={index} title={card.title} content={card.content} />
        ))}
      </div>
    </div>
  );
}
