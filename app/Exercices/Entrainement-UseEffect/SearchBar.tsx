"use client";
import { useEffect, useState } from "react";

interface SearchResult {
  id: number;
  title: string;
  description: string;
}

export const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      searchAPI(query).then((res) => {
        setResults(res);
        setLoading(false);
      });
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [query]);

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Rechercher..."
      />
      {loading && <div>Chargement...</div>}
      <ul>
        {results.map((result) => (
          <li key={result.id}>
            <strong>{result.title}</strong>
            <p>{result.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const searchAPI = async (query: string): Promise<SearchResult[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return [
    { id: 1, title: `Résultat pour "${query}"`, description: "Description 1" },
    { id: 2, title: `Autre résultat "${query}"`, description: "Description 2" },
  ];
};

/* Question : au début j'avais fait comme ça :

  useEffect(() => {
    let ignore = false;
    setLoading(true);
    if (!ignore) {
      setTimeout(() => {
        console.log("commencer");
        searchAPI(query).then((res) => {
          setResults(res);
          setLoading(false);
        });
      }, 500);
    }

    return () => {
      ignore = true;
    };
  }, [query]);

  Parce que comme tu m'as dit je pensais que du coup ça faisait ignore true et que ça n'allait pas lancer le timeout vu qu'à chaque fois que j'écrivais ignore etait à true mais apparemmeht non,
  par contre du coup avec la version corrigé que je t'ai envoyé ça fonctionne. Je suis pas sur de comprendre même si j'ai réussi
 */
