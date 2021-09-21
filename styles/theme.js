import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    mGrey: {
      100: '#E6E6E6',
      '200': '#C7C5C2',
      '300': '#B1AFAA',
      '400': '#9B9892',
      '500': '#85817A',
      '600': '#6A6762',
      '700': '#504E49',
      '800': '#353431',
      '900': '#1B1A18',
    },
    logoGrey: {
      '100': '#B1A79C',
      '200': '#979695'
    },
    logoBrown: {
      100: '#48362A'
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  components: {
    Text: {
      baseStyle: {
        fontSize: 'lg',
        fontWeight: 'normal',
      },
    },
    Button: {
      defaultProps: {
        colorScheme: 'yellow',
      },
    },
    Table: {
      baseStyle: {
        fontWeight: "bold",
        textTransform: "uppercase",
        borderRadius: "base", // <-- border radius is same for all variants and sizes
      },
    }

  },
  styles: {
    global: {
      body: {
        bg: 'pGray.900',
        color: 'pGray.50',
      },
    },
  },
});
