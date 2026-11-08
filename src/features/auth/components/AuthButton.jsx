import { COLORS, THEME } from "@shared/constants/theme";
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
export const AuthButton = ({ boxStyle, label, textStyle, onClick, loading }) => {
  return (
    <Pressable onPress={onClick} style={[styles.container, boxStyle, THEME.shadows.lg]}>
      {loading ? (
        <ActivityIndicator color={COLORS.palette.textInverse} size={24}></ActivityIndicator>
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
    backgroundColor: THEME.colors.brand[500],
    borderRadius: THEME.radius.md,
  },
  label: {
    color: "white",
    fontWeight: "regular",
  },
});
