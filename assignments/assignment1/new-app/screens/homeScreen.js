import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.text}>
          test app, built with react native and expo, using react native stack
          navigator
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Second")}
        >
          <Text style={styles.btnText}>go to second screen</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#9A8C98",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: "#F2E9E4",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    height: "45%",
    borderRadius: 40,
  },
  text: {
    color: "#000",
    fontSize: 16,
    padding: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#4A4E69",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    color: "#fff",
  },
  btnText: {
    color: "#fff",
  },
});
