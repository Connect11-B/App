import { COLORS, FONT_WEIGHT, THEME } from "@shared/constants/theme";
import { ActivityIndicator, Pressable, StyleSheet, Text } from "react-native";

/**
 * 로그인 및 회원가입 페이지에 활용되는 버튼
 *
 * @param {string} [label] - 버튼 내부에 표시될 텍스트
 * @param {() => void} [onClick] - 클릭 처리 동작
 * @param {boolean} [loading] - 로딩 여부
 * @param {style} [boxStyle] - 추가적인 버튼 스타일
 * @param {style} [textStyle] - 추가적인 텍스트 스타일
 */
export const AuthButton = ({ boxStyle, label, textStyle, onClick, loading, disabled }) => {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled, busy: loading }}
      onPress={onClick}
      style={[
        styles.container,
        boxStyle,
        disabled && {
          boxShadow: "none",
          opacity: 0.7,
        },
      ]}
      disabled={disabled}
    >
      {loading ? (
        <ActivityIndicator color={COLORS.palette.textInverse} size={24} />
      ) : (
        <Text style={[THEME.typography.button, textStyle, styles.label]}>{label}</Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: THEME.radius.md,
    overflow: "hidden",
    backgroundColor: COLORS.palette.primary,
    boxShadow: "inset 0px 2px 4px rgba(0, 0, 0, 0.25)",
    opacity: 1,
  },
  label: {
    fontWeight: FONT_WEIGHT.bold,
    color: "white",
  },
});
