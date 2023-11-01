import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

export default function SecondScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.text}>this is the second screen</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.btnText}>go back home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#BBC5AA",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    backgroundColor: "#E6EED6",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    height: "40%",
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
    backgroundColor: "#311f25",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  btnText: {
    color: "#fff",
  },
});
