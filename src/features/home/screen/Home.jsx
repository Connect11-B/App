import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text>로그인 성공</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignContent: "center",
    justifyContent: "center",
    fontSize: 24,
  },
});
