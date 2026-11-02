/**
 * Billage 디자인 시스템 - 색상 토큰
 * 로고 컬러(#9868FF, #6A29C4) 기반의 모던 퍼플 & 뉴트럴 컬러 팔레트
 */

export const BRAND = {
  50: "#F5F0FF",
  100: "#ECE0FD",
  200: "#D9C2FC",
  300: "#BF9BF9",
  400: "#A979F7",
  500: "#9868FF", // Brand Primary
  600: "#824DF0",
  700: "#6A29C4", // Brand Deep Violet
  800: "#521D9C",
  900: "#391270",
};

export const GRAY = {
  50: "#F9FAFB",
  100: "#F3F4F6",
  200: "#E5E7EB",
  300: "#D1D5DB",
  400: "#9CA3AF",
  500: "#6B7280",
  600: "#4B5563",
  700: "#374151",
  800: "#1F2937",
  900: "#111827",
};

export const COMMON = {
  white: "#FFFFFF",
  black: "#000000",
  transparent: "transparent",
};

export const SEMANTIC = {
  // 에러 / 위험
  error: "#EF4444",
  errorLight: "#FEE2E2",
  errorDark: "#B91C1C",

  // 성공
  success: "#10B981",
  successLight: "#D1FAE5",
  successDark: "#047857",

  // 경고
  warning: "#F59E0B",
  warningLight: "#FEF3C7",
  warningDark: "#B45309",

  // 정보 / 알림
  info: "#3B82F6",
  infoLight: "#DBEAFE",
  infoDark: "#1D4ED8",
};

export const PALETTE = {
  // 브랜드 & 메인
  primary: BRAND[500],
  primaryDark: BRAND[700],
  primaryLight: BRAND[100],
  primaryBackground: BRAND[50],

  // 배경 & 서피스
  background: COMMON.white,
  backgroundSecondary: GRAY[50],
  surface: COMMON.white,
  surfaceElevated: COMMON.white,

  // 텍스트
  textPrimary: GRAY[900],
  textSecondary: GRAY[600],
  textTertiary: GRAY[400],
  textDisabled: GRAY[300],
  textInverse: COMMON.white,
  textBrand: BRAND[600],

  // 테두리 & 구분선
  border: GRAY[200],
  borderLight: GRAY[100],
  borderDark: GRAY[300],
  borderFocus: BRAND[500],
  divider: GRAY[100],

  // 입력 요소
  placeholder: GRAY[400],
  disabled: GRAY[100],

  // 기타 공통
  ...COMMON,
  brand: BRAND,
  gray: GRAY,
};

export const COLORS = {
  brand: BRAND,
  gray: GRAY,
  common: COMMON,
  semantic: SEMANTIC,
  palette: PALETTE,
};
