import { Product } from "./products";

interface Props {
  favorites: Product[];
}

const FavoriteList = ({ favorites }: Props) => {
  return (
    <div className="mt-5">
      <h1>Liste des favoris</h1>
      {favorites.map((fav) => (
        <div className="flex gap-2" key={fav.id}>
          <h1>{fav.name}</h1>
          <h2>{fav.price}</h2>
        </div>
      ))}
    </div>
  );
};

export default FavoriteList;
