import Card from "@components/Card";
import Flex from "@components/Flex";
import { useGetPokemonQuery } from "@services/pokemon";
import type { IPokemonResults } from "@types/pokemon";
import { lazy } from "react";
const Pokemon = lazy(() => import("@components/Pokemon"))

export default function Pokemons() {
    const { data } = useGetPokemonQuery(0);
    
    if(!data) return "Pokemons are missing...";


    return (
        <Flex>
            {
                data.results.map((pokemon: IPokemonResults) => (
                <Card key={pokemon.name}>
                    <Pokemon 
                        name={pokemon.name}
                    />
                </Card>
                ))
            }
        </Flex>
    )
}