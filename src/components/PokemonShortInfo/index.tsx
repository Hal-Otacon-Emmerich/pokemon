import type { PokemonShortInfo } from "@types/pokemonShortInfo";
import { Tag as TagD } from "antd";
import '@styles/PokemonShortInfo.scss';

export default function PokemonShortInfo({ number, name, tags }: PokemonShortInfo) {
    function Tag() {
        return tags.map((tag: string) => <TagD className="pokemon-tags-container_tag">{tag}</TagD>)
    };
    
    return (
        <div className="pokemon">
            <span className="pokemon-number">{number}</span>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/44.png" alt={name} />
            <span className="pokemon-name">{name}</span>
            <div className="pokemon-tags-container">
                {Tag()}
            </div>
        </div>
    )
}