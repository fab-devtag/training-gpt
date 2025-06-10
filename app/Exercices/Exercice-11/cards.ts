// app/data/cards.ts

export interface Card {
  id: number;
  name: string;
  image: string;
  type: string;
}

export const cards: Card[] = [
  {
    id: 1,
    name: "Pikachu",
    image: "https://img.pokemondb.net/artwork/large/pikachu.jpg",
    type: "Électrik",
  },
  {
    id: 2,
    name: "Salamèche",
    image: "https://img.pokemondb.net/artwork/large/charmander.jpg",
    type: "Feu",
  },
  {
    id: 3,
    name: "Carapuce",
    image: "https://img.pokemondb.net/artwork/large/squirtle.jpg",
    type: "Eau",
  },
  {
    id: 4,
    name: "Bulbizarre",
    image: "https://img.pokemondb.net/artwork/large/bulbasaur.jpg",
    type: "Plante",
  },
  {
    id: 5,
    name: "Roucool",
    image: "https://img.pokemondb.net/artwork/large/pidgey.jpg",
    type: "Vol",
  },
  {
    id: 6,
    name: "Goupix",
    image: "https://img.pokemondb.net/artwork/large/vulpix.jpg",
    type: "Feu",
  },
];
