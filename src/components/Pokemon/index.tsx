import type { PokemonShortInfo } from "@types/pokemon";
import { Tag as TagAnt } from "antd";
import '@styles/PokemonShortInfo.scss';
import { useGetPokemonByNameQuery } from "@services/pokemon";
import { getPokemonTypeColor } from "@constants/typeColors";

export default function Pokemon({ name }: PokemonShortInfo) {
    const { data } = useGetPokemonByNameQuery(name)

    if(!data) return "Pokemon not Found!";

    function Tag() {
        if(!data) return "";
        return data.types.map((type) => <TagAnt variant="filled" color={getPokemonTypeColor(type.type.name)} key={`${data.id}_${type.type.name}`} className="pokemon-tags-container_tag">{type.type.name}</TagAnt>)
    };
    
    return (
        <div className="pokemon" onClick={() => console.log(data)}>
            <span className="pokemon-number">#{data.id}</span>
            <img className="pokemon-image" src={data.sprites.front_default} alt={data.name} height="120" width="120" />
            <span className="pokemon-name">{data.name}</span>
            <div className="pokemon-tags-container">
                {Tag()}
            </div>
        </div>
    )
}