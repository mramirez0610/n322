import { useState, useEffect } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { TextInput, List, Button } from "react-native-paper";

export default function DetailScreen({ navigation, route }) {
  let data = route.params;

  return (
    <View style={styles.container}>
      <Text>DetailScreen</Text>
      <Button style={styles.button} onPress={() => navigation.navigate("Home")}>
        go back home
      </Button>
      <Text>{data.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddfdde",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    padding: 10,
    backgroundColor: "fff",
  },
});
