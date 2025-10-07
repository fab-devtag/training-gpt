// 1. Fonction générique simple
function premierElement<T>(tableau: T[]): T | undefined {
  return tableau[0];
}

// Testez avec différents types
const premierNombre = premierElement([1, 2, 3]);
const premierMot = premierElement(["bonjour", "monde"]);
console.log(typeof premierNombre);
console.log(typeof premierMot);

// 2. TODO: Créez une fonction générique `dernierElement` qui retourne le dernier élément
function dernierElement<T>(tableau: T[]): T | undefined {
  return tableau[tableau.length - 1];
}

const dernierNombre = dernierElement([1, 2, 3]);
const dernierMot = dernierElement(["salut", "coucou"]);
console.log(dernierNombre);
console.log(dernierMot);

// 3. Interface générique pour une réponse API
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
  timestamp: Date;
}

// TODO: Créez une interface Produit (id, nom, prix)
export interface Produit {
  readonly id: number;
  nom: string;
  prix: number;
}

// TODO: Créez une réponse API qui contient un Produit
const responseProduit: ApiResponse<Produit> = {
  data: { id: 1, nom: "Pain", prix: 2 },
  status: 200,
  message: "Récupéré avec succès",
  timestamp: new Date("2025-10-06"),
};

const responseProduits: ApiResponse<Produit[]> = {
  data: [
    { id: 1, nom: "Pain", prix: 2 },
    { id: 2, nom: "Banane", prix: 1 },
  ],
  status: 200,
  message: "Récupéré avec succès",
  timestamp: new Date("2025-10-06"),
};

// 4. CHALLENGE : Créez une fonction générique `filtrer`
// Elle prend un tableau de type T et une fonction de test
// Elle retourne un nouveau tableau avec seulement les éléments qui passent le test

function filtrer<T>(tableau: T[], test: (element: T) => boolean): T[] {
  return tableau.filter(test);
}

const ages = [14, 18, 25, 12, 45];
const major = filtrer(ages, (element: number) => element >= 18);
console.log(major);

const nombres = [1, 2, 3, 4, 5, 6];
const pairs = filtrer(nombres, (n) => n % 2 === 0);
console.log(pairs);
