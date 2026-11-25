import { FONT_WEIGHT, PALETTE } from "@shared/constants/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
  },
  textAreaContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    paddingVertical: 75,
  },
  logo_container: {
    flex: 0.25,
    justifyContent: "flex-end",
    marginBottom: 15,
  },
  logo: {
    width: 210,
    height: 100,
    resizeMode: "contain",
  },
  scroll_container: {
    flexGrow: 1,
    marginBottom: 75,
    paddingTop: 50,
    paddingHorizontal: 60,
    gap: 20,
  },
  form_container: {
    width: "100%",
    alignItems: "center",
    maxWidth: 400,
    paddingHorizontal: 15,
    gap: 30,
  },
  confirm_container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 4,
  },
  button_container: {
    width: "100%",
    height: 44,
  },
  navigator_container: {
    flexDirection: "row",
    gap: 10,
  },
  caption: {
    fontWeight: FONT_WEIGHT.semiBold,
    color: PALETTE.textBrand,
  },
  nav_text: {
    fontWeight: FONT_WEIGHT.semiBold,
    color: PALETTE.brand[800],
  },
});
