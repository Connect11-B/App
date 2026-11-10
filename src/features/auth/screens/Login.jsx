import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "@shared/constants/routes";
import { FONT_WEIGHT, PALETTE, TYPOGRAPHY } from "@shared/constants/theme";
import React, { useState } from "react";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthButton } from "../components/AuthButton";
import { AuthTextField } from "../components/AuthTextField";

export function Login() {
  const ref = React.useRef(null);

  const navigation = useNavigation();

  const [email, setEmail] = useState(""); // 이메일
  const [password, setPassword] = useState(""); // 비밀번호
  const [error, setError] = useState(null);

  const [loading, setLoading] = useState(false);

  const emailError =
    email && !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) // 'exmple.com' 형태
      ? "유효하지 않은 이메일입니다"
      : null;
  const isValid = email && password && !emailError;

  const loginToSignup = () => {
    return navigation.navigate(ROUTES.Signup);
  };

  const handleSubmit = () => {
    setLoading(true);
    if (isValid) return navigation.navigate(ROUTES.Home);
  };

  return (
    <SafeAreaView style={{ width: "100%", flex: 1 }}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <Pressable style={styles.textAreaContainer} onPress={Keyboard.dismiss}>
          <View style={styles.logo_container}>
            <Image source={require("@assets/images/logo-title.png")} style={styles.logo} />
          </View>
          <ScrollView
            style={{ flex: 1, width: "100%" }}
            contentContainerStyle={styles.scroll_container}
          >
            <View style={styles.form_container}>
              <AuthTextField
                label="이메일"
                value={email}
                onChangeText={setEmail}
                error={emailError}
              />

              <AuthTextField
                label="비밀번호"
                value={password}
                onChangeText={setPassword}
                error={error}
              />
            </View>
            <View style={styles.confirm_container}>
              <View style={styles.button_container}>
                <AuthButton label="로그인" onClick={handleSubmit} loading={loading} />
              </View>
              <TouchableOpacity>
                <Text style={[TYPOGRAPHY.caption, { color: PALETTE.textSecondary }]}>
                  비밀번호를 잊으셨나요?
                </Text>
              </TouchableOpacity>
              <View style={styles.navigator_container}>
                <Text style={[TYPOGRAPHY.caption, styles.caption]}>계정이 없으신가요?</Text>
                <TouchableOpacity onPress={loginToSignup}>
                  <Text style={[TYPOGRAPHY.caption, styles.nav_text]}>회원가입</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
    paddingTop: 40,
    paddingHorizontal: 60,
    gap: 20,
  },
  form_container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    maxWidth: 400,
    paddingHorizontal: 15,
    gap: 20,
  },
  confirm_container: {
    flex: 1,
    justifySelf: "center",
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
