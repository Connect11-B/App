import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "@shared/constants/routes";
import { PALETTE, SEMANTIC, SIZES, TYPOGRAPHY } from "@shared/constants/theme";
import { useEffect, useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthButton } from "../components/AuthButton";
import { AuthTextField } from "../components/AuthTextField";
import { CodeButton } from "../components/CodeButton";
import { styles } from "./style";

export function SignupScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [studentId, setStudentId] = useState("");
  const [showVerificationPreview, setShowVerificationPreview] = useState(false);
  const [code, setCode] = useState("");
  const [sentAt, setSentAt] = useState(null);
  const [now, setNow] = useState(Date.now);
  const [message, setMessage] = useState("");

  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const secondsLeft = sentAt === null ? 0 : Math.max(0, 60 - Math.floor((now - sentAt) / 1000));
  const waiting = !showVerificationPreview && secondsLeft > 0;

  useEffect(() => {
    if (!waiting) return;
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, [waiting]);

  function changeEmail(value) {
    setEmail(value);
    setShowVerificationPreview(false);
    setSentAt(null);
    setCode("");
    setMessage("");
  }

  function requestCode() {
    const time = Date.now();
    setSentAt(time);
    setNow(time);
    setCode("");
    setMessage("");
  }

  function confirmCode() {
    setShowVerificationPreview(true);
    setMessage("");
  }

  function submit() {
    if (!validEmail) setMessage("이메일 주소를 확인해 주세요.");
    else if (password.length < 8) setMessage("비밀번호는 8자 이상 입력해 주세요.");
    else if (!/^\d+$/.test(studentId)) setMessage("학번은 숫자로 입력해 주세요.");
    else if (showVerificationPreview) setMessage("회원가입 서비스 연결이 필요해요.");
    else setMessage("회원가입하려면 이메일 인증이 필요해요.");
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView contentContainerStyle={signup.page} keyboardShouldPersistTaps="handled">
          <View style={signup.header}>
            <Image
              source={require("@assets/images/logo-title.png")}
              accessibilityLabel="빌리지"
              style={signup.logo}
            />
            <Text style={signup.tagline}>필요한 학교 물품을, 쉽고 편하게</Text>
          </View>

          <View style={signup.form}>
            <View style={signup.fields}>
              <View style={signup.row}>
                <AuthTextField
                  label="이메일"
                  keyboardType="email-address"
                  autoComplete="email"
                  value={email}
                  onChangeText={changeEmail}
                  boxStyle={signup.rowField}
                />
                {sentAt === null && (
                  <CodeButton
                    label="인증하기"
                    onPress={requestCode}
                    disabled={!validEmail}
                    secondary
                  />
                )}
              </View>
              {sentAt !== null && (
                <View>
                  <View style={signup.row}>
                    <AuthTextField
                      label="코드 6자리"
                      accessibilityLabel="인증 코드 6자리"
                      keyboardType="number-pad"
                      autoComplete="one-time-code"
                      maxLength={6}
                      editable={!showVerificationPreview}
                      accessibilityState={{ disabled: showVerificationPreview }}
                      value={code}
                      onChangeText={value => {
                        setCode(value.replace(/\D/g, ""));
                        setMessage("");
                      }}
                      boxStyle={signup.rowField}
                    />
                    <View>
                      <CodeButton
                        label="재전송"
                        onPress={requestCode}
                        disabled={waiting || showVerificationPreview}
                        waiting={waiting}
                        secondary
                      />
                      {waiting && <Text style={signup.countdown}>{secondsLeft}초 후 재전송</Text>}
                    </View>
                    <CodeButton
                      label="확인"
                      onPress={confirmCode}
                      disabled={showVerificationPreview || code.length !== 6}
                    />
                  </View>
                  {showVerificationPreview && (
                    <Text accessibilityLiveRegion="polite" style={signup.verifiedText}>
                      이메일 인증 완료 (미리보기)
                    </Text>
                  )}
                </View>
              )}
              <AuthTextField
                label="비밀번호"
                secureTextEntry
                autoComplete="new-password"
                value={password}
                onChangeText={value => {
                  setPassword(value);
                  setMessage("");
                }}
                boxStyle={signup.field}
              />
              <AuthTextField
                label="학번"
                keyboardType="number-pad"
                value={studentId}
                onChangeText={value => {
                  setStudentId(value);
                  setMessage("");
                }}
                boxStyle={signup.field}
              />
            </View>
            {message ? (
              <Text accessibilityRole="alert" style={signup.message}>
                {message}
              </Text>
            ) : null}
          </View>

          <View style={signup.footer}>
            <View style={signup.submitButton}>
              <AuthButton label="회원가입" onClick={submit} />
            </View>
            <Text style={signup.hint}>
              {sentAt === null
                ? "이메일 인증 후 가입할 수 있어요."
                : "인증 서비스 연결 전에는 메일이 발송되지 않아요."}
            </Text>
            <View style={styles.navigator_container}>
              <Text style={[TYPOGRAPHY.caption, styles.caption]}>이미 계정이 존재하나요?</Text>
              <Pressable
                accessibilityRole="link"
                hitSlop={8}
                onPress={() => navigation.navigate(ROUTES.Login)}
              >
                <Text style={[TYPOGRAPHY.caption, styles.nav_text]}>로그인</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const signup = StyleSheet.create({
  page: {
    flexGrow: 1,
    alignItems: "center",
    paddingHorizontal: "9%",
    paddingVertical: 24,
  },
  header: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
    minHeight: 170,
  },
  logo: {
    width: 216,
    height: 64,
    resizeMode: "contain",
  },
  tagline: {
    ...TYPOGRAPHY.body2,
    color: PALETTE.textSecondary,
  },
  form: {
    width: "100%",
    maxWidth: SIZES.maxWidth,
    paddingHorizontal: 16,
  },
  fields: {
    minHeight: 208,
    justifyContent: "space-between",
    gap: 40,
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 8,
  },
  field: {
    marginBottom: 0,
  },
  rowField: {
    flex: 1,
    minWidth: 0,
    marginBottom: 0,
  },
  countdown: {
    position: "absolute",
    top: "100%",
    alignSelf: "center",
    ...TYPOGRAPHY.caption,
    color: PALETTE.textSecondary,
  },
  message: {
    ...TYPOGRAPHY.body2,
    color: SEMANTIC.errorDark,
    marginTop: 12,
  },
  verifiedText: {
    marginTop: 4,
    ...TYPOGRAPHY.body2,
    color: SEMANTIC.successDark,
  },
  footer: {
    width: "100%",
    maxWidth: SIZES.maxWidth,
    flexGrow: 0.8,
    paddingTop: 56,
    paddingBottom: 24,
    alignItems: "center",
    gap: 6,
  },
  submitButton: {
    width: "100%",
    height: SIZES.buttonHeight,
  },
  hint: {
    ...TYPOGRAPHY.caption,
    color: PALETTE.textSecondary,
  },
});
