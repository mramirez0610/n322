import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function AboutScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>About!</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.text}> Go to Home </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#222999",
  },
  paragraph: {
    padding: 8,
    textAlign: "center",
    color: "#FFF",
  },
  button: {
    backgroundColor: "#222888",
    padding: 20,
  },
  text: {
    color: "#FFFFFF",
    textAlign: "center",
  },
});
