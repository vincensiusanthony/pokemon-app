import { extendTheme } from '@chakra-ui/theme-utils';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

export default theme;