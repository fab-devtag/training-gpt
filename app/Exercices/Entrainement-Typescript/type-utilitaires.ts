interface Tache {
  id: number;
  titre: string;
  description: string;
  termine: boolean;
  priorite: "basse" | "moyenne" | "haute";
  dateCreation: Date;
}

// 1. Partial - Pour les mises à jour partielles
type TacheMiseAJour = Partial<Tache>;

// TODO: Créez une fonction qui met à jour une tâche
function mettreAJourTache(tache: Tache, updates: TacheMiseAJour): Tache {
  return { ...tache, ...updates };
}

//Tester
const maTache: Tache = {
  id: 1,
  titre: "Apprendre TypeScript",
  description: "Suivre le plan de Claude",
  termine: false,
  priorite: "haute",
  dateCreation: new Date(),
};

const tacheMiseAJour = mettreAJourTache(maTache, { termine: true });
console.log(tacheMiseAJour);

// 2. Pick - Sélectionner certains champs
type TacheAperçu = Pick<Tache, "id" | "titre" | "priorite">;

// TODO: Créez une fonction qui retourne un aperçu de tâche
function obtenirApercu(tache: Tache): TacheAperçu {
  const { id, titre, priorite } = tache;
  return { id, titre, priorite };
}

console.log(obtenirApercu(maTache));

// 3. Omit - Exclure certains champs
type NouvelleTache = Omit<Tache, "id" | "dateCreation">;

// TODO: Créez une fonction qui crée une nouvelle tâche
function creerTache(donnees: NouvelleTache): Tache {
  return {
    id: Math.random(),
    dateCreation: new Date(),
    ...donnees,
  };
}

console.log(
  creerTache({
    titre: "Approfondir Type",
    description: "Exercice 4 de Claude",
    priorite: "haute",
    termine: false,
  })
);

// 4. Record - Dictionnaire typé
type TacheParPriorité = Record<Tache["priorite"], Tache[]>;

// TODO: Créez un objet qui groupe les tâches par priorité
const groupees: TacheParPriorité = {
  basse: [],
  moyenne: [],
  haute: [maTache],
};

// 5. VOTRE TOUR : Créez ces types utilitaires
type TacheSeulementLecture = Readonly<Tache>;
type TacheRequise = Required<Tache>;

//Différence entre type et interface, pourquoi parfdois on utilise type et parfois interface
// Pas compris le record, la je mets rien dans basse et haute et dans moyenne je mets ma tache que j'ai crée à la base, c'est moi qui trie manuellement ça c'est ça ? parce que je sais que j'aimis ma tache en prio haute ?
