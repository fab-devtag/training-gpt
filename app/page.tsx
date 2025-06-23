import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Link href="/Exercices/Exercice-1">
        1 - Props & State - Composant simple : UserCard
      </Link>
      <Link href="/Exercices/Exercice-2">
        2 - UseEffect - Composant simple : TodoList
      </Link>
      <Link href="/Exercices/Exercice-3">
        3 - Filtrage Dynamique - UserList
      </Link>
      <Link href="/Exercices/Exercice-4">
        4 - Controlled Input - Task Manager
      </Link>
      <Link href="/Exercices/Exercice-5">
        5 - Form et Validation - Contact Form
      </Link>
      <Link href="/Exercices/Exercice-6">6 - UseEffect Avancé - Clock</Link>
      <Link href="/Exercices/Exercice-7">
        7 - Next.JS App Router - Navigation simple - About
      </Link>
      <Link href="/Exercices/Exercice-8">
        8 - Galerie Images et Filtre - Gallery
      </Link>
      <Link href="/Exercices/Exercice-9">
        9 - Simulation Panier - Add to Cart & ProductList
      </Link>
      <Link href="/Exercices/Exercice-10">
        10 - Mini Projet - Blog très simple
      </Link>
      <Link href="/Exercices/Exercice-11">
        11 - Projet - Catalogue de cartes (mini marketplace)
      </Link>
      <Link href="/Exercices/Exercice-12">
        12 - Projet - Article filtre order recherche
      </Link>
      <Link href="/Exercices/Exercice-13">13 - Projet - Task Manager</Link>
      <Link href="/Exercices/Exercice-14">
        14 - Mini Challenge - Progress Bar
      </Link>
      <Link href="/Exercices/Exercice-15">15 - setInterval + useEffect</Link>
      <Link href="/Exercices/Exercice-16">16 - LocalStorage</Link>
      <Link href="/Exercices/Exercice-17">17 - Timer</Link>
      <Link href="/Exercices/Exercice-18">18 - Compteur configurable</Link>
      <Link href="/Exercices/Exercice-19">
        19 - Dynamique Liste Tri et Filtre
      </Link>
      <Link href="/Exercices/Exercice-20">
        20 - Catalogue de Produit avec ajout au panier
      </Link>
      <Link href="/Exercices/Exercice-21">
        21 - Système de sélection multiple + suppression
      </Link>
      <Link href="/Exercices/Exercice-22">
        22 - Panier avec gestion des quantités
      </Link>
      <Link href="/Exercices/Exercice-23">
        23 - Gestion des favoris sans doublons
      </Link>
      <Link href="/Exercices/Exercice-24">
        24 - Filtrage dynamique des favoris par prix
      </Link>
      <Link href="/Exercices/Exercice-25">
        25 - Favoris + localStorage (Compilation d'exos à la suite sur le même
        projet)
      </Link>
      <Link href="/Exercices/Exercice-26">
        26 - Mini Feature API projet - Post
      </Link>
      <Link href="/Exercices/Exercice-27">
        27 - Challengfe : mini todo list
      </Link>
      <Link href="/Exercices/Exercice-28">
        28 - App Quiz - React / Typescript
      </Link>
      <Link href="/Exercices/Exercice-29">
        29 - Next.js React Server Component
      </Link>
      <Link href="/Exercices/Exercice-30">
        30 - Mini-projet : Dashboard + rapports
      </Link>
    </div>
  );
}

export const metadata = {
  title: "Ceci est la page Accueil",
};
