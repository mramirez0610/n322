import { useState, useEffect } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { TextInput, List, Button } from "react-native-paper";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Button
        onPress={() =>
          navigation.navigate("Detail", { title: "crab day", desc: "yuuup" })
        }
      >
        go to detail
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#89def9",
    alignItems: "center",
    justifyContent: "center",
  },
});
