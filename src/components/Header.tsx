import { Box, Flex, Image, IconButton, MenuItem } from '@chakra-ui/react';
import { Menu, MenuButton, MenuList } from '@chakra-ui/menu';
import { SearchIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Flex bg="gray.800" p={4} alignItems="center">
      <Link to="/">
        <Image src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="Pokémon Logo" boxSize={6} mr={4} />
      </Link>
      <Box flexGrow={1} />
      <Menu>
        <MenuButton as={IconButton} aria-label="Options"><SearchIcon /></MenuButton>
        <MenuList>
          <MenuItem value="sort">Sort by</MenuItem>
          <MenuItem value="filter">Filter</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default Header;