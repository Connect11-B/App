import { StyleSheet, Text, View } from "react-native";

export function Home() {
  return (
    <View style={styles.container}>
      <Text>로그인 성공</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
});
