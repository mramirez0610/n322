import * as React from "react";

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.parapgraph}>Home Screen!</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("About")}
      >
        <Text style={styles.text}> Go to About </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#444777",
    padding: 8,
  },
  parapgraph: {
    textAlign: "center",
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
