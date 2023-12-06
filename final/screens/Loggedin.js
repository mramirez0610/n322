import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { TextInput, List, Button } from "react-native-paper";
import { signOut } from "firebase/auth";
import { auth } from "../screens/Home";

export default function LoggedIn({ navigation }) {
  let userDisplay = auth.currentUser.displayName;

  return (
    <View style={styles.container}>
      <View style={styles.greeting}>
        <Text style={styles.label}>Hello, {userDisplay}</Text>
        <Text style={styles.label}>How can we help today?</Text>
        <Text style={styles.label}>
          Not much to do here except log out, though.
        </Text>
        <Button
          style={styles.button}
          onPress={() => {
            signOut(auth);
            navigation.navigate("Home");
          }}
        >
          Logout
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c9eef7",
    justifyContent: "center",
    alignItems: "center",
  },
  greeting: {
    width: "90%",
    height: "55%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#444888",
    borderRadius: 20,
  },
  label: {
    marginBottom: 20,
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  button: {
    backgroundColor: "#fff",
  },
});
