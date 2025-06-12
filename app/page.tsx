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
    </div>
  );
}

export const metadata = {
  title: "Ceci est la page Accueil",
};
