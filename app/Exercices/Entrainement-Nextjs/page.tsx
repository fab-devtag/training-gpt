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

*/
