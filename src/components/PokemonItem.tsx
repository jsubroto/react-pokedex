import { useEffect, useState } from "react";
import { typeColor } from "../constants";
import { type Pokemon } from "../types";
import { fetchJson } from "../fetchJson";

interface PokemonDataRaw {
  id: number;
  sprites: {
    other?: {
      ["official-artwork"]?: {
        front_default: string | null;
      };
    };
  };
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
}

interface PokemonData {
  id: number;
  imageUrl: string;
  types: string[];
}

const padWithZeroes = (id?: number) => String(id ?? "").padStart(3, "0");
const capitalize = (s: string) => s[0].toUpperCase() + s.slice(1);

export const PokemonItem = ({ name, url }: Pokemon) => {
  const [pokemonData, setPokemonData] = useState<PokemonData | null>(null);

  useEffect(() => {
    let ignore = false;
    setPokemonData(null);
    fetchJson<PokemonDataRaw>(url)
      .then((data) => {
        if (ignore) return;
        setPokemonData({
          id: data.id,
          imageUrl:
            data.sprites.other?.["official-artwork"]?.front_default ?? "",
          types: data.types.map((t) => t.type.name),
        });
      })
      .catch(console.error);
    return () => {
      ignore = true;
    };
  }, [url]);

  const typeElements = pokemonData?.types.map((type) => (
    <div
      key={type}
      className="w-28 rounded text-white"
      style={{ backgroundColor: typeColor.get(type) }}
    >
      <p className="pb-0.5 text-center text-xs">{type}</p>
    </div>
  ));

  return (
    <div>
      <div className="aspect-square bg-gray-100">
        {pokemonData?.imageUrl && (
          <img src={pokemonData.imageUrl} alt={name} loading="lazy" />
        )}
      </div>
      <div className="mx-2 mb-12">
        <p className="text-xs font-bold text-gray-400">
          #{padWithZeroes(pokemonData?.id)}
        </p>
        <h1 className="my-1 text-xl font-medium">{capitalize(name)}</h1>
        <div className="flex gap-1">{typeElements}</div>
      </div>
    </div>
  );
};
