// 1. Interface avec propriétés optionnelles
interface Utilisateur {
  id: number;
  email: string;
  nom: string;
  telephone?: string; // optionnel
  premium?: boolean; // optionnel
}

// TODO: Créez 2 utilisateurs, un avec téléphone, un sans
const user1: Utilisateur = {
  id: 1,
  email: "fabien.sens@free.fr",
  nom: "Fabien",
  telephone: "0606060606",
  premium: true,
};

const user2: Utilisateur = {
  id: 2,
  email: "fabien.sens@free.fr",
  nom: "Fabien",
  premium: true,
};

// 2. Interface qui étend une autre
interface Admin extends Utilisateur {
  role: "super-admin" | "admin" | "moderateur";
  permissions: string[];
}

// TODO: Créez un admin
const admin1: Admin = {
  id: 1,
  email: "fabien.sens@free.fr",
  nom: "Fabien",
  telephone: "0606060606",
  premium: true,
  role: "super-admin",
  permissions: ["read", "write"],
};

// 3. Votre tour ! Créez ces interfaces pour un e-commerce :
// Interface Produit avec : id, nom, prix, description, stock, categorie
interface Produit {
  readonly id: number;
  nom: string;
  prix: number;
  description: string;
  stock: number;
  categorie: string;
}

// Interface Panier avec : items (array de Produit), total (number), utilisateurId (number)
interface Panier {
  items: Produit[];
  total: number;
  utilisateurId: number;
}

// Interface Commande qui étend Panier et ajoute : dateCommande, statut ("en cours" | "livree" | "annulee")
interface Commande extends Panier {
  dateCommande: Date;
  statut: "en cours" | "livree" | "annulee";
}

// TODO: Créez un exemple de chaque (1 produit, 1 panier, 1 commande)

function calculerTotal(items: Produit[]): number {
  return items.reduce((sum, item) => sum + item.prix, 0);
}

const produit1: Produit = {
  id: 1,
  nom: "Riz",
  prix: 3,
  description: "Paquet de riz 500g",
  stock: 15,
  categorie: "Féculents",
};

const panier1: Panier = {
  items: [produit1],
  total: calculerTotal([produit1]),
  utilisateurId: 1,
};

const commande1: Commande = {
  items: [produit1],
  total: 3,
  utilisateurId: 1,
  dateCommande: new Date("2025-10-16"),
  statut: "en cours",
};
