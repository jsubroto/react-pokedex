import { useEffect, useState } from "react";
import { DarkModeToggle, Pagination, PokemonItem } from "./components/index";
import { fetchJson } from "./fetchJson";
import type { Pokemon } from "./types";

interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}

const App = () => {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [prevUrl, setPrevUrl] = useState<string | null>(null);
  const [nextUrl, setNextUrl] = useState<string | null>(null);

  useEffect(() => {
    let ignore = false;
    setPokemons([]);
    setPrevUrl(null);
    setNextUrl(null);
    fetchJson<PokemonListResponse>(url)
      .then((data) => {
        if (ignore) return;
        setPokemons(data.results);
        setPrevUrl(data.previous);
        setNextUrl(data.next);
      })
      .catch(console.error);
    return () => {
      ignore = true;
    };
  }, [url]);

  return (
    <div className="mx-auto max-w-[86%] dark:bg-black dark:text-white">
      <div className="flex justify-center pt-4">
        <h1 className="text-center text-3xl">Pokédex</h1>
        <DarkModeToggle />
      </div>
      <Pagination
        hasPrev={!!prevUrl}
        hasNext={!!nextUrl}
        onPrev={() => prevUrl && setUrl(prevUrl)}
        onNext={() => nextUrl && setUrl(nextUrl)}
      />
      <div className="gap-6 sm:grid sm:grid-cols-2 md:mx-16 lg:grid-cols-4 xl:mx-40 2xl:mx-60">
        {pokemons.map(({ name, url }) => (
          <PokemonItem key={name} name={name} url={url} />
        ))}
      </div>
      <footer className="mx-auto border-t md:w-2/3">
        <p className="py-2 text-center">
          © {new Date().getFullYear()} Jaimes Subroto
        </p>
      </footer>
    </div>
  );
};

export default App;
