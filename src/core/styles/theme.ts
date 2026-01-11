const shared = {
  brand: {
    primary: '#9E792E',
  },

  // Keep these literal primitives available, but components should rarely use them directly.
  primitive: {
    black: '#000000',
    white: '#FFFFFF',
  },

  shadows: {
    focus: '0px 1px 2px 2px rgba(158, 121, 46, 0.3)',
    soft: '0px 1px 0px 1px rgba(0, 0, 0, 0.07)',
  },
} as const;

const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  '2xl': 24,
  '3xl': 30,
  '4xl': 36,
  '5xl': 52,
} as const;

const radii = {
  sm: 6,
  md: 10,
  lg: 12,
  pill: 26,
  round: 999,
} as const;

const typography = {
  size10: 10,
  size11: 11,
  size12: 12,
  size14: 14,
  size16: 16,
  size18: 18,
  size20: 20,
  size24: 24,
  size32: 32,

  w400: '400',
  w500: '500',
  w600: '600',

  lh15: 15,
  lh18: 18,
  lh22: 22,
  lh34: 34,
  lh39: 39,
} as const;

/**
 * Semantic colors:
 * - background: large surfaces (screen, page)
 * - content: text & icons (primary/secondary/muted)
 * - border: dividers, outlines, tracks
 * - surface: cards, inputs, filled controls
 * - button: explicit button roles (primary/secondary)
 *
 * You could merge surface into background, but keeping it separate reads nicer in components.
 */
const lightColors = {
  ...shared,

  background: {
    screen: '#FFFFFF', // main screens
    screen_auth: '#F7F8FB', // special app background (auth)
  },

  surface: {
    base: '#FFFFFF', // cards, inputs
    muted: '#F2F2F2', // oauth button bg, subtle blocks
    soft: '#ECECEC', // secondary button bg, option cards, tracks
  },

  content: {
    primary: '#000000',
    secondary: '#808080',
    muted: '#999999',
    onBrand: '#FFFFFF', // text on brand fills
    onDark: '#FFFFFF', // text on dark fills (primary button)
  },

  border: {
    subtle: '#E5E5E5', // dividers, inactive indicators
    default: '#DBDBDB', // outlines, chips
  },

  button: {
    primaryBg: '#000000',
    primaryText: '#FFFFFF',
    secondaryBg: '#ECECEC',
    secondaryText: '#000000',
  },
} as const;

const darkColors = {
  ...shared,

  background: {
    screen: '#000000',
    screen_auth: '#000000',
  },

  surface: {
    base: '#111111',
    muted: '#1A1A1A',
    soft: '#222222',
  },

  content: {
    primary: '#FFFFFF',
    secondary: '#B3B3B3',
    muted: '#8C8C8C',
    onBrand: '#FFFFFF',
    onDark: '#FFFFFF',
  },

  border: {
    subtle: '#2A2A2A',
    default: '#333333',
  },

  button: {
    primaryBg: '#FFFFFF',
    primaryText: '#000000',
    secondaryBg: '#222222',
    secondaryText: '#FFFFFF',
  },
} as const;

export const lightTheme = {
  colors: lightColors,
  spacing,
  radii,
  typography,
  shadows: shared.shadows,
} as const;

export const darkTheme = {
  colors: darkColors,
  spacing,
  radii,
  typography,
  shadows: shared.shadows,
} as const;
