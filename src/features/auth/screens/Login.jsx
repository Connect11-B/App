import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "@shared/constants/routes";
import { PALETTE, TYPOGRAPHY } from "@shared/constants/theme";
import React, { useState } from "react";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthButton } from "../components/AuthButton";
import { AuthTextField } from "../components/AuthTextField";
import { styles } from "./style";

export function LoginScreen() {
  const navigation = useNavigation();

  const [email, setEmail] = useState(""); // 이메일
  const [password, setPassword] = useState(""); // 비밀번호
  const [error, setError] = useState("");

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
    setError("");
    // TODO: 로그인 API 호출
    try {
    } catch {
    } finally {
      setLoading(false);
    }
    if (isValid) {
      return navigation.navigate(ROUTES.Home);
    } else setError("이메일과 비밀번호를 다시 확인해주세요");
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
                error={emailError || error}
              />

              <AuthTextField
                label="비밀번호"
                value={password}
                onChangeText={setPassword}
                error={error}
                secureTextEntry
              />
            </View>
            <View style={styles.confirm_container}>
              <View style={styles.button_container}>
                <AuthButton
                  label="로그인"
                  onClick={handleSubmit}
                  loading={loading}
                  disabled={!isValid}
                />
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
