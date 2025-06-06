import Link from "next/link";
import Gallery from "./Gallery";

export default function Home() {
  const images = [
    {
      id: 1,
      title: "Image #1",
      url: "https://picsum.photos/id/237/200/200",
      category: "Animaux",
    },
    {
      id: 2,
      title: "Image #2",
      url: "https://picsum.photos/id/238/200/200",
      category: "Nature",
    },
    {
      id: 3,
      title: "Image #3",
      url: "https://picsum.photos/id/239/200/200",
      category: "Ville",
    },
    {
      id: 4,
      title: "Image #4",
      url: "https://picsum.photos/id/240/200/200",
      category: "Animaux",
    },
    {
      id: 5,
      title: "Image #5",
      url: "https://picsum.photos/id/241/200/200",
      category: "Ville",
    },
  ];
  return (
    <div>
      <Gallery images={images} />
    </div>
  );
}
