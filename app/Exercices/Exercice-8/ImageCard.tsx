import Image from "next/image";

interface Props {
  image: { id: number; title: string; url: string; category: string };
}

const ImageCard = ({ image }: Props) => {
  return (
    <div className="relative hover:scale-105 transition-all duration-300">
      <Image
        className="rounded-lg cursor-pointer "
        alt={image.title}
        src={image.url}
        width={200}
        height={200}
      />
      <div className="absolute bottom-0 bg-black w-full opacity-75">
        <h1>{image.title}</h1>
      </div>
    </div>
  );
};

export default ImageCard;
