interface ISprite {
    back_default: string;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female:null
    front_default: string;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
}

interface IStat {
    base_stat: number;
    effort: number;
    stat: {
        name: string;
        url: string;
    }
}

interface IType {
    type: {
        name: string;
        url: string;
    }
}

export interface IPokemon {
    id: number;
    name: string;
    height: number;
    weight: number;
    sprites: ISprite;
    stats: IStat[];
    types: IType[];
}

export interface IPokemonResults {
    name: string;
    url: string;
} 

export interface IPokemonResponse {
    count: number | null;
    next: string;
    previous: number | null;
    results: IPokemonResults[];
}

export type PokemonShortInfo = Pick<IPokemon, "name">;