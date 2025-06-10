"use client";

import Image from "next/image";
import { Card, cards } from "./cards";
import { useState } from "react";
import Link from "next/link";
import CardsList from "./CardsList";
import FilterBar from "./FiterBar";

export default function Home() {
  const [selectedType, setSelectedType] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [myCollection, setMyCollection] = useState<Card[]>([]);

  const filteredArray = cards.filter((card) => {
    if (selectedType === "") return true;
    return selectedType === card.type.toLocaleLowerCase();
  });

  const sortedArray = filteredArray.sort((a, b) => {
    if (a.name < b.name) return sortOrder === "asc" ? -1 : 1;
    if (a.name > b.name) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  console.log(myCollection);

  return (
    <div>
      <h1>Projet - Catalogue de cartes</h1>
      <div>
        <h1>Liste des cartes</h1>
        <FilterBar
          sortOrder={sortOrder}
          filterByType={setSelectedType}
          orderBy={setSortOrder}
          selectedType={selectedType}
        />
        <CardsList
          sortedArray={sortedArray}
          addToMyCollection={(card) => setMyCollection([...myCollection, card])}
        />
      </div>
    </div>
  );
}
