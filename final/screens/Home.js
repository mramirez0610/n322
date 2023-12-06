import { useState, useEffect } from "react";
import { ScrollView, View, Text, SafeAreaView, StyleSheet } from "react-native";
import { TextInput, List, Button } from "react-native-paper";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBJU-UNyDQD1PBq3_-FnnEQCORbaVKJ4ow",
  authDomain: "n322-data.firebaseapp.com",
  projectId: "n322-data",
  storageBucket: "n322-data.appspot.com",
  messagingSenderId: "28862481552",
  appId: "1:28862481552:web:bb3cb42faf4289e4fd4415",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default function HomeScreen({ navigation }) {
  const [username1, setUsername1] = useState("");
  const [password1, setPassword1] = useState("");
  const [username2, setUsername2] = useState("");
  const [password2, setPassword2] = useState("");
  const [displayName, setDisplayName] = useState("");

  async function signIn(email, password) {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      navigateToLoggedIn();
      setUsername1("");
      setPassword1("");
      setDisplayName("");
    } catch (error) {
      console.error("Error signing in:", error);
    }
  }

  async function signup(username, email, password) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      await updateProfile(user, { displayName: username });
      navigateToLoggedIn();
      setDisplayName("");
      setUsername2("");
      setPassword2("");
    } catch (error) {
      console.error("Error signing up:", error);
    }
  }

  function navigateToLoggedIn() {
    navigation.navigate("Loggedin");
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputs}>
        <Text style={styles.label}>Hello! Go ahead and login.</Text>
        <TextInput
          label="email"
          value={username1}
          style={styles.input}
          autoCapitalize="none"
          onChangeText={(text) => setUsername1(text)}
        />
        <TextInput
          label="password"
          value={password1}
          style={styles.input}
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText={(text) => setPassword1(text)}
        />
        <Button
          style={styles.button}
          onPress={() => signIn(username1, password1)}
        >
          Login
        </Button>
      </View>
      <View style={styles.inputs}>
        <Text style={styles.label}>Don't have an account? Sign up here!</Text>
        <TextInput
          label="username"
          value={displayName}
          style={styles.input}
          autoCapitalize="none"
          onChangeText={(text) => setDisplayName(text)}
        />
        <TextInput
          label="email"
          value={username2}
          style={styles.input}
          autoCapitalize="none"
          onChangeText={(text) => setUsername2(text)}
        />
        <TextInput
          label="password"
          value={password2}
          style={styles.input}
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText={(text) => setPassword2(text)}
        />
        <Button
          style={styles.button}
          onPress={() => signup(displayName, username2, password2)}
        >
          Sign Up
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c9eef7",
    alignItems: "center",
    justifyContent: "center",
  },
  inputs: {
    width: "90%",
    marginTop: 20,
    backgroundColor: "#444888",
    borderRadius: 20,
    padding: 30,
  },
  input: {
    marginBottom: 10,
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
