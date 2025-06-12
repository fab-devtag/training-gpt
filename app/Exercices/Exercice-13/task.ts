// tasks.ts

export type Priority = "low" | "medium" | "high";

export interface Task {
  id: number;
  title: string;
  description: string;
  priority: Priority;
  done: boolean;
  dueDate: string; // format ISO
}

export const tasks: Task[] = [
  {
    id: 1,
    title: "Mettre à jour le README",
    description:
      "Ajouter des instructions claires pour les nouveaux développeurs.",
    priority: "low",
    done: false,
    dueDate: "2025-06-15",
  },
  {
    id: 2,
    title: "Corriger le bug de la page de connexion",
    description:
      "Erreur 500 quand l’utilisateur soumet un mauvais mot de passe.",
    priority: "high",
    done: false,
    dueDate: "2025-06-11",
  },
  {
    id: 3,
    title: "Créer le composant Button réutilisable",
    description: "Doit gérer les variantes : primary, secondary, disabled.",
    priority: "medium",
    done: true,
    dueDate: "2025-06-08",
  },
  {
    id: 4,
    title: "Planifier la réunion de sprint",
    description:
      "Prévoir un créneau cette semaine avec toute l’équipe produit.",
    priority: "medium",
    done: false,
    dueDate: "2025-06-13",
  },
  {
    id: 5,
    title: "Optimiser les images",
    description:
      "Compresser toutes les images de la home pour améliorer le LCP.",
    priority: "high",
    done: true,
    dueDate: "2025-06-07",
  },
  {
    id: 6,
    title: "Créer une page de contact",
    description: "Formulaire avec validation et envoi vers une API fictive.",
    priority: "medium",
    done: false,
    dueDate: "2025-06-20",
  },
  {
    id: 7,
    title: "Supprimer les comptes inactifs",
    description: "Nettoyage des comptes inutilisés depuis plus de 6 mois.",
    priority: "low",
    done: false,
    dueDate: "2025-06-10",
  },
];
