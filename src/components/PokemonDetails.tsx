// src/components/PokemonDetails.tsx
import { Flex, Image, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const PokemonDetails = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState<any>(null);

  useEffect(() => {
    if (id) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((response) => response.json())
        .then((data) => setPokemon(data));
    }
  }, [id]);

  if (!pokemon) {
    return <Text>Loading...</Text>;
  }

  return (
    <Flex direction="column" align="center" p={4}>
      <Image src={pokemon.sprites.front_default} alt={pokemon.name} boxSize={200} mb={4} />
      <Text fontSize="xl" fontWeight="bold">
        {pokemon.name}
      </Text>
      <Text mt={2}>Height: {pokemon.height / 10} m</Text>
      <Text>Type: {pokemon.types[0].type.name}</Text>
    </Flex>
  );
};

export default PokemonDetails;