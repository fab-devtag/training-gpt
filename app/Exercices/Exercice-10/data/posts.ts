export type Post = {
  id: number;
  title: string;
  content: string;
};

export const posts: Post[] = [
  {
    id: 1,
    title: "Comprendre le useEffect",
    content:
      "useEffect est un hook React qui permet de gérer les effets de bord, comme les appels API ou les timers. Il s'exécute après le rendu du composant.",
  },
  {
    id: 2,
    title: "Next.js vs Create React App",
    content:
      "Next.js offre le rendu côté serveur, le routing basé sur les fichiers, et d'autres fonctionnalités prêtes à l'emploi. CRA est plus simple, mais nécessite plus de configuration.",
  },
  {
    id: 3,
    title: "Pourquoi TypeScript avec React ?",
    content:
      "TypeScript permet de sécuriser votre code en détectant les erreurs de type à la compilation. Il améliore l'autocomplétion, la lisibilité et la robustesse de vos composants.",
  },
  {
    id: 4,
    title: "Les clés de la performance avec React",
    content:
      "Utilisez React.memo, useCallback et le code splitting pour éviter les rendus inutiles et optimiser les performances de vos applications React.",
  },
  {
    id: 5,
    title: "Déployer une app Next.js sur Vercel",
    content:
      "Vercel est la plateforme officielle pour héberger vos applications Next.js. Il suffit de connecter votre repo GitHub et le déploiement est automatique.",
  },
];
