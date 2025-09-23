import Link from "next/link";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";

export default function Home() {
  const queryClient = new QueryClient();
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
        30 - Mini-projet : Dashboard + rapports (fonctionne pas)
      </Link>
      <Link href="/Exercices/Exercice-31">
        31 - Création custom hook (useDebounce)
      </Link>
      <Link href="/Exercices/Exercice-32">
        32 - Blog Post - Custom Hook Generic
      </Link>
      <Link href="/Exercices/Exercice-33">33 - Blog Post - SWR / mutate</Link>

      <Link href="/Exercices/Exercice-34">34 - Blog Post - React Query</Link>
      <Link href="/Exercices/Exercice-35">
        35 - Blog Post - Custom hook genric avec React Query
      </Link>
      <Link href="/Exercices/Exercice-36">
        36 - Blog Post - Custom hook genric avec SWR et NAvigation dynamique
      </Link>
      <Link href="/Exercices/Exercice-37">
        37 - Blog Post - UseMutation ajout et suppression de posts (pagination)
      </Link>
      <Link href="/Exercices/Exercice-38">38 - Formulaire useReducer</Link>

      <Link href="/Exercices/Exercice-39">
        39 - Login simple avec NextAuth.js (credentials provider)
      </Link>
      <Link href="/Exercices/Exercice-40">40 - SEO</Link>
      <Link href="/Exercices/Exercice-41">41 - UseReducer à nouveau</Link>
      <Link href="/Exercices/Exercice-42">42 - useRef & forwardRef</Link>
      <Link href="/Exercices/Exercice-43">43 - useMemo et useCallback</Link>
      <Link href="/Exercices/Exercice-44">
        44 - Lazy loading + Suspense avec React / Next.js
      </Link>
      <Link href="/Exercices/Exercice-45-4">
        45-4 - Mini Live Coding : ProductSearch & Highlight text
      </Link>
      <Link href="/Exercices/Exercice-46-4">
        46-4 - Mini Live Coding : Pagination côté serveur avec React Query
      </Link>
      <Link href="/Exercices/Exercice-47-4">
        47-4 - Mini Live Coding : TodoList avec filtrage et ajout dynamique
      </Link>
      <Link href="/Exercices/Exercice-48-4">48-4 - Evaluation - TodoList</Link>
      <Link href="/Exercices/Exercice-49-4">
        49-4 - Evaluation - Compteur avancé avec useReducer
      </Link>
      <Link href="/Exercices/Exercice-50-4">
        50-4 - Evaluation - Optimisation d’une TodoList
      </Link>
      <Link href="/Exercices/Exercice-51-4">
        51-4 - Evaluation - SEO / métadonnées dans Next.js
      </Link>
      <Link href="/Exercices/Exercice-52-4">
        52-4 - Evaluation - SEO / métadonnées dans Next.js
      </Link>
      <Link href="/Exercices/Exercice-53-4">
        53-4 - Evaluation - Projet “Journal de bord”
      </Link>
      <Link href="/Exercices/Exercice-54-4">
        53-4 - Evaluation - Liste d’articles filtrable (useReducer, memo,
        callback)
      </Link>
      <Link href="/Exercices/Exercice-55-4">
        53-4 - Evaluation - Liste d’articles filtrable (Context)
      </Link>
      <Link href="/Exercices/Exercice-Coding-Interview">
        Exercice Test Live Coding Interview
      </Link>
    </div>
  );
}

export const metadata = {
  title: "Ceci est la page Accueil",
};
