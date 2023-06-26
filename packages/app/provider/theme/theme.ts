import { makeTheme } from 'dripsy'

export const theme = makeTheme({
  colors: {
    $text: '#000',
    $background: '#fff',
    $primary: 'darkorchid',
    $secondary: 'orchid',
  },

  space: {
    $0: 0,
    $1: 4,
    $2: 8,
    $3: 12,
    $4: 16,
    $5: 20,
    $6: 24,
    $7: 28,
    $8: 32,
    $9: 36,
    $10: 40,
    $11: 44,
    $12: 48,
    $14: 56,
    $16: 64,
    $20: 80,
    $24: 96,
    $28: 112,
    $32: 128,
  },
  fontSizes: {
    $0: 12 /*xs*/,
    $1: 14 /*sm*/,
    $2: 16 /*base*/,
    $3: 18 /*lg*/,
    $4: 20 /*xl*/,
    $5: 24 /*2xl*/,
    $6: 30 /*3xl*/,
    $7: 36 /*4xl*/,
  },
  text: {
    h1: {
      fontSize: ['$4', '$6', '$7'],
      my: '$4',
    },
    p: {
      fontSize: ['$2', '$4', '$5'],
      my: '$4',
    },
  },
})
