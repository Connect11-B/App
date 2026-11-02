/**
 * Billage 디자인 시스템 - 레이아웃 & 간격 토큰
 */

export const SPACING = {
  none: 0,
  xxs: 2,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 40,
  xxxl: 48,
};

export const RADIUS = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  full: 9999,
};

export const SIZES = {
  // 인풋 & 폼 컨트롤 높이
  inputHeight: 48,
  inputHeightDense: 40,

  // 버튼 높이
  buttonHeight: 48,
  buttonSmallHeight: 36,

  // 네비게이션 높이
  headerHeight: 56,
  bottomTabHeight: 60,

  // 아이콘 크기
  iconSize: {
    xs: 16,
    sm: 20,
    md: 24,
    lg: 32,
    xl: 40,
  },

  // 화면 레이아웃
  maxWidth: 400,
  screenPaddingHorizontal: 20,
  screenPaddingVertical: 16,
};

export const SHADOWS = {
  none: {
    shadowColor: "transparent",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  sm: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 2,
    elevation: 2,
  },
  md: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  lg: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.14,
    shadowRadius: 8,
    elevation: 8,
  },
};

export const LAYOUT = {
  spacing: SPACING,
  radius: RADIUS,
  borderRadius: RADIUS,
  sizes: SIZES,
  shadows: SHADOWS,

  // 자주 쓰는 단축 속성
  inputHeight: SIZES.inputHeight,
  buttonHeight: SIZES.buttonHeight,
  buttonSmallHeight: SIZES.buttonSmallHeight,
  headerHeight: SIZES.headerHeight,
  maxWidth: SIZES.maxWidth,
  screenPadding: SIZES.screenPaddingHorizontal,
  iconSize: SIZES.iconSize,
};
