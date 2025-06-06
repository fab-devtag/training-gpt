"use client";

import { useState } from "react";
import ImageCard from "./ImageCard";

interface Props {
  images: {
    id: number;
    title: string;
    url: string;
    category: string;
  }[];
}

const Gallery = ({ images }: Props) => {
  const [filter, setFilter] = useState("Tous");

  const filterButtons = [
    {
      id: 1,
      title: "Tous",
      backgroundColor: "bg-red-500",
    },
    {
      id: 2,
      title: "Nature",
      backgroundColor: "bg-green-500",
    },
    {
      id: 3,
      title: "Ville",
      backgroundColor: "bg-gray-500",
    },
    {
      id: 4,
      title: "Animaux",
      backgroundColor: "bg-amber-500",
    },
  ];

  const filteredImage = images.filter((image) =>
    filter === "Tous" ? true : image.category === filter
  );

  return (
    <div>
      <div className="space-x-3 mb-5">
        {filterButtons.map((button) => (
          <button
            key={button.id}
            className={`${button.backgroundColor} text-black p-1 rounded-full`}
            onClick={() => setFilter(button.title)}
          >
            {button.title}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-3">
        {filteredImage.map((image) => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
