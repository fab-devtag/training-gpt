export default async function Main() {
  // Parallel & Sequential Fetching
  console.time("parallel");
  const [userInfo, stats, recentActivity] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/users/1").then((r) => r.json()),
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5").then((r) =>
      r.json()
    ),
    fetch("https://jsonplaceholder.typicode.com/comments?_limit=5").then((r) =>
      r.json()
    ),
  ]);

  console.timeEnd("parallel");

  console.time("sequential");
  await fetch("https://jsonplaceholder.typicode.com/users/1").then((r) =>
    r.json()
  );
  await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5").then((r) =>
    r.json()
  );
  await fetch("https://jsonplaceholder.typicode.com/comments?_limit=5").then(
    (r) => r.json()
  );
  console.timeEnd("sequential");
  return <div>Coucou</div>;
}

/* 

Exerice 1 : 

Composant A/ C'est un composant serveur, il accède à la bdd directement 
Composant B/ C'est un composant client, il utilise un hook useState
Composant C/ C'est un composant serveur, pas de hook utilisé
Composant D/ C'est un composant client, il utilise un onclick sur le bouton, de l'interactivité signifie composant client
Composant E/ C'est un composant serveur, aucune interactivité ni hook utilisé


Exercice 2 : 

ProductPage.tsx


Exercice 3 : 

1/ SSG Static très peu de changement
2/ SSR Beaucoup d'actualisation besoin de données à jour régulièrement
3/ SSG Plutôt static peu de mise à jour
4/ ISR Mise à jour modérée 
5/ SSR Temps réel besoin de données fraiches régulièrement
6/ SSG Texte static donc pas de changement 
7/ ISR Mise à jour quotidienne donc pas besoin de temps réel mais pas de static non plus
8/ SSG données qui ne changement pas régulièrement à priori, un peu d'hésitation sur celui la


Quizz Rapide : 
1/ Un server component est un composant qui render côté serveur, il envoie tout le HTML au client, pas de JS donc bundle size réduit, bon SEO, pas d'interactivité à l'inverse d'un client component qui est rendu côté client, recoit du HTML et du JS, rend le composant interactif si besoin via des hooks, onclick etc
2/ SSG pour des pages qui sont static avec très peu de changement, type blog, SSR pour des données qui doivent être fraiche régulièrement, type dashboard, ISR pour un mix des deux, qui n'a pas besoin de mise à jour trè srégulière, type une page de produit par exemple sur un site e commerce
3/ Ce code est ISR en raison de la présence du revalidate. Le site va servir des données fraiches à un utilisateur, et les garder en cache pendant 3600 secondes, il reservira des données fraiches après ces 3600 secondes si un utilisatuer arrive après cette expiration
4/ en utilisant des tags aec revalidateTag
5/ Car il utilise un hook et un onchange 
*/
