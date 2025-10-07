// 1. Types primitifs
let prenom: string = "Alexandre";
let age: number = 28;
let estActif: boolean = true;

// 2. Arrays
let competences: string[] = ["React", "TypeScript", "123"];
let scores: number[] = [85, 90, 95];

// 3. Objects - Créez l'interface Developpeur
interface Developpeur {
  nom: string;
  experience: number;
  langages: string[];
}

const moi: Developpeur = {
  nom: "Fabien",
  experience: 2,
  langages: ["JavaScript", "TypeScript", "React"],
};

// 4. Union types - Le statut peut être "junior", "confirme" ou "senior"
type NiveauDeveloppeur = "junior" | "confirme" | "senior";

let monNiveau: NiveauDeveloppeur = "junior";

// 5. Functions - Typez cette fonction
function calculterSalaire(experience: number, niveau: NiveauDeveloppeur) {
  const tauxBase = 35000;
  const bonus = niveau === "senior" ? 2 : niveau === "confirme" ? 1.5 : 1;
  return tauxBase + experience * 5000 * bonus;
}

console.log(calculterSalaire(3, "confirme"));
