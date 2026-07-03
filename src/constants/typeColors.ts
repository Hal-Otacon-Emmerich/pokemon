export const POKEMON_TYPE_COLORS: Record<string, string> = {
  normal: '#A8A77A',
  fighting: '#C22E28',
  flying: '#A98FF3',
  poison: '#A33EA1',
  ground: '#E2BF65',
  rock: '#B6A136',
  bug: '#A6B91A',
  ghost: '#735797',
  steel: '#B7B7CE',
  fire: '#F08030',
  water: '#6890F0',
  grass: '#78C850',
  electric: '#F7D02C',
  psychic: '#F95587',
  ice: '#96D9D6',
  dragon: '#6F35FC',
  dark: '#705746',
  fairy: '#D685AD',
  stellar: '#5991F2',
  unknown: '#68A090',
};

export const getPokemonTypeColor = (type: string): string => {
  return POKEMON_TYPE_COLORS[type.toLowerCase()] || '#68A090';
};