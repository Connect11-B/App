/**
 * Billage 디자인 시스템 - 타이포그래피 토큰
 */

export const FONT_SIZE = {
  xxs: 10,
  xs: 12,
  sm: 14,
  md: 16, // 기본 본문 크기
  lg: 18,
  xl: 20,
  xxl: 24,
  xxxl: 30,
  display: 36,
};

export const FONT_WEIGHT = {
  regular: "400",
  medium: "500",
  semiBold: "600",
  bold: "700",
};

export const LINE_HEIGHT = {
  xxs: 14,
  xs: 16,
  sm: 20,
  md: 24,
  lg: 26,
  xl: 28,
  xxl: 32,
  xxxl: 38,
  display: 44,
};

export const TYPOGRAPHY = {
  // 제목용 (Headings)
  h1: {
    fontSize: FONT_SIZE.xxl,
    fontWeight: FONT_WEIGHT.bold,
    lineHeight: LINE_HEIGHT.xxl,
  },
  h2: {
    fontSize: FONT_SIZE.xl,
    fontWeight: FONT_WEIGHT.bold,
    lineHeight: LINE_HEIGHT.xl,
  },
  h3: {
    fontSize: FONT_SIZE.lg,
    fontWeight: FONT_WEIGHT.semiBold,
    lineHeight: LINE_HEIGHT.lg,
  },

  // 소제목용 (Subtitles)
  subtitle1: {
    fontSize: FONT_SIZE.md,
    fontWeight: FONT_WEIGHT.semiBold,
    lineHeight: LINE_HEIGHT.md,
  },
  subtitle2: {
    fontSize: FONT_SIZE.sm,
    fontWeight: FONT_WEIGHT.semiBold,
    lineHeight: LINE_HEIGHT.sm,
  },

  // 본문용 (Body)
  body1: {
    fontSize: FONT_SIZE.md,
    fontWeight: FONT_WEIGHT.regular,
    lineHeight: LINE_HEIGHT.md,
  },
  body2: {
    fontSize: FONT_SIZE.sm,
    fontWeight: FONT_WEIGHT.regular,
    lineHeight: LINE_HEIGHT.sm,
  },

  // UI 컴포넌트용 (Button, Label, Caption)
  button: {
    fontSize: FONT_SIZE.md,
    fontWeight: FONT_WEIGHT.semiBold,
    lineHeight: LINE_HEIGHT.md,
  },
  buttonSmall: {
    fontSize: FONT_SIZE.sm,
    fontWeight: FONT_WEIGHT.semiBold,
    lineHeight: LINE_HEIGHT.sm,
  },
  label: {
    fontSize: FONT_SIZE.sm,
    fontWeight: FONT_WEIGHT.semiBold,
    lineHeight: LINE_HEIGHT.sm,
  },
  caption: {
    fontSize: FONT_SIZE.xxs,
    fontWeight: FONT_WEIGHT.regular,
    lineHeight: LINE_HEIGHT.xs,
  },
  captionBold: {
    fontSize: FONT_SIZE.xxs,
    fontWeight: FONT_WEIGHT.semiBold,
    lineHeight: LINE_HEIGHT.xs,
  },
};
