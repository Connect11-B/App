/**
 * Billage 디자인 시스템 토큰 통합 export
 */

import { BRAND, COLORS, COMMON, GRAY, PALETTE, SEMANTIC } from "./colors";
import { LAYOUT, RADIUS, SHADOWS, SIZES, SPACING } from "./layout";
import { FONT_SIZE, FONT_WEIGHT, LINE_HEIGHT, TYPOGRAPHY } from "./typography";

export {
  // 색상 (Colors)
  BRAND,
  COLORS,
  COMMON,
  // 타이포그래피 (Typography)
  FONT_SIZE,
  FONT_WEIGHT,
  GRAY,
  LAYOUT,
  LINE_HEIGHT,
  PALETTE,
  RADIUS,
  SEMANTIC,
  SHADOWS,
  SIZES,
  // 레이아웃 & 간격 (Layout)
  SPACING,
  TYPOGRAPHY,
};

export const THEME = {
  colors: COLORS,
  palette: PALETTE,
  semantic: SEMANTIC,
  typography: TYPOGRAPHY,
  fontSize: FONT_SIZE,
  fontWeight: FONT_WEIGHT,
  lineHeight: LINE_HEIGHT,
  layout: LAYOUT,
  spacing: SPACING,
  radius: RADIUS,
  sizes: SIZES,
  shadows: SHADOWS,
};
