import { Box, Image, Text, Link as ChakraLink } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

interface PokemonCardProps {
  id: number;
  name: string;
  imageUrl: string;
}

const PokemonCard = ({ id, name, imageUrl }: PokemonCardProps) => {
  return (
    <ChakraLink as={RouterLink} to={`/pokemon/${id}`} _hover={{ transform: 'scale(1.05)' }} transition="transform 0.2s ease-in-out" {...(RouterLink as any).defaultProps}>
      <Box
        bg="white"
        borderRadius="md"
        boxShadow="md"
        p={4}
        mb={4}
        w="100%"
        maxW={200}
        textAlign="center"
        overflow="hidden"
      >
        <Image src={imageUrl} alt={name} boxSize={100} mx="auto" mb={2} />
        <Text fontSize="lg" fontWeight="bold" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {name}
        </Text>
      </Box>
    </ChakraLink>
  );
};

export default PokemonCard;