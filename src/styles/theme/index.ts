import { colors, palette } from './colors';
import { fonts } from './fonts';
import { zIndex } from './zIndex';

const theme = {
  palette,
  colors,
  fonts,
  zIndex,
} as const;

export type Theme = typeof theme;

export default theme;
