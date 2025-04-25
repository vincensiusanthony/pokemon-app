import { Grid, GridItem } from '@chakra-ui/react';
import PokemonCard from './PokemonCards.tsx';
import { useEffect, useState } from 'react';

const Home = () => {
  const [pokemons, setPokemons] = useState<{ id: number; name: string; imageUrl: string }[]>([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
      .then((response) => response.json())
      .then((data) => {
        const formattedPokemons = data.results.map((pokemon: any, index: number) => ({
          id: index + 1,
          name: pokemon.name,
          imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
        }));
        setPokemons(formattedPokemons);
      });
  }, []);

  return (
    <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={4} p={4}>
      {pokemons.map((pokemon) => (
        <GridItem key={pokemon.id}>
          <PokemonCard {...pokemon} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default Home;