import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="bg-white h-screen text-black flex justify-center items-center">
        <div className="space-y-2">
          <h1>Bienvenue</h1>
          <Link
            className="bg-red-400 p-2 rounded-full hover:bg-red-600"
            href="/Exercices/Exercice-7/about"
          >
            À propos
          </Link>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: "Ceci est la page Accueil",
};
