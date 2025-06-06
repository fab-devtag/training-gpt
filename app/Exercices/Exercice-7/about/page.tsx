import Link from "next/link";
import Clock from "../components/Clock";

export default function AboutPage() {
  return (
    <div className="bg-white h-screen text-black flex flex-col justify-center items-center space-y-4">
      <h1 className="text-2xl">À propos</h1>
      <Clock />
      <Link className="text-blue-500 underline" href="/Exercices/Exercice-7">
        Accueil
      </Link>
    </div>
  );
}

export const metadata = {
  title: "Ceci est la page About",
};
