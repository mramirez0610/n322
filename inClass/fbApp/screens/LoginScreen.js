import { useState, useEffect } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { TextInput, List, Button } from "react-native-paper";

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>LoginScreen</Text>
      <Button
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        Home
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
