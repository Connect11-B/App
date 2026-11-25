import { PALETTE, RADIUS, TYPOGRAPHY } from "@shared/constants/theme";
import { StyleSheet } from "react-native";
import { AuthButton } from "./AuthButton";

export function CodeButton({ label, onPress, disabled, secondary, waiting }) {
  return (
    <AuthButton
      label={label}
      onClick={onPress}
      disabled={disabled}
      boxStyle={[styles.button, secondary && styles.secondary, waiting && styles.waiting]}
      textStyle={TYPOGRAPHY.captionBold}
    />
  );
}

const styles = StyleSheet.create({
  button: {
    flex: -1,
    width: 64,
    height: 32,
    borderRadius: RADIUS.sm,
    backgroundColor: PALETTE.primaryDark,
  },
  secondary: {
    backgroundColor: PALETTE.textBrand,
  },
  waiting: {
    backgroundColor: PALETTE.gray[500],
  },
});
