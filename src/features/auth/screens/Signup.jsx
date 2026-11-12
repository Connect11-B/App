import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "@shared/constants/routes";
import { THEME, TYPOGRAPHY } from "@shared/constants/theme";
import { useState } from "react";
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

export function Signup() {
  const navigation = useNavigation();

  const [email, setEmail] = useState(""); // 이메일
  const [password, setPassword] = useState(""); // 비밀번호
  const [grade, setGrade] = useState(""); // 학번
  const [error, setError] = useState(null);

  const [isVerified, setIsVerified] = useState(false); // 이메일 인증
  const [loading, setLoading] = useState(false);

  const emailError =
    email && !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
      ? "유효하지 않은 이메일입니다"
      : null;
  const passwordError = password && password.length < 8 ? "비밀번호는 8자 이상 입력해주세요" : null;
  const gradeError = grade && !/^[0-9]+/.test(grade) ? "제대로된 학번을 입력해주세요" : null;
  const isValid = email && password && !emailError;

  const SignupToLogin = () => {
    return navigation.navigate(ROUTES.Login);
  };

  /* TODO: 회원가입 submit 처리 함수 */
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
                error={passwordError}
              />

              <AuthTextField
                label="학번"
                value={grade}
                onChangeText={setGrade}
                error={gradeError}
              />
            </View>
            <View style={styles.confirm_container}>
              <View style={styles.button_container}>
                <AuthButton label="로그인" onClick={handleSubmit} loading={loading} />
              </View>
              <Text style={[THEME.typography.caption]}>비밀번호를 잊으셨나요?</Text>
              <View style={styles.navigator_container}>
                <Text style={[TYPOGRAPHY.caption, styles.caption]}>계정이 존재하나요?</Text>
                <TouchableOpacity onPress={SignupToLogin}>
                  <Text style={[TYPOGRAPHY.caption, styles.nav_text]}>로그인</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
