import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IPokemonResponse, IPokemon } from "@types/pokemon";

export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/'}),
    endpoints: (build) => ({
        getPokemon : build.query<IPokemonResponse, number>({
            query: (number = 0) => `pokemon?limit=10&offset=${number > 0 && number}`
        }),
        getPokemonByName: build.query<IPokemon, string>({
            query: (name = "") => `pokemon/${name}`
        })
    })
});

export const { useGetPokemonByNameQuery, useGetPokemonQuery } = pokemonApi;