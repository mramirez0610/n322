import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import {
  Button,
  Appbar,
  Modal,
  TextInput,
  List,
  IconButton,
} from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function HomeScreen({ navigation }) {
  const [visible, setVisible] = useState();
  const [listName, setListName] = useState();
  const [lists, setLists] = useState([]);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  useEffect(() => {
    getData();
  }, []);

  const saveData = async () => {
    console.log("ASSETS SAVE DATA", lists + "" + listName);

    let tempArray = [];
    let tempObj = { name: listName, items: [] };
    console.log("ASSESTS SAVE NEW OBJ", lists);

    if (lists.length != 0) {
      tempArray = lists;
      tempArray.push(tempObj);
    } else {
      tempArray.push(tempObj);
    }

    await AsyncStorage.setItem("lists", JSON.stringify(tempArray));

    getData();
    hideModal();
    setListName("");
  };

  const updateDeletedArray = async (filterArray) => {
    console.log("UPDATE DELETE ", filterArray);
    await AsyncStorage.setItem("lists", JSON.stringify(filterArray));
    getData();
  };

  const getData = async () => {
    console.log("ASSETS GET DATA LOAD ");
    try {
      const allLists = await AsyncStorage.getItem("lists");
      console.log("ASSETS GET DATA LOAD ", allLists);
      if (!allLists) {
        // setNoListMessage('You have no lists at this time. Please add a list.');
        console.log("you have no lists");
      } else {
        console.log("ASSETS GET DATA JSON ", JSON.parse(allLists));
        setLists(JSON.parse(allLists));
      }
    } catch (e) {
      console.log("ASSET GET DATA ERROR ", e);
    }
  };

  const containerStyle = {
    backgroundColor: "#fff",
    padding: 20,
  };

  return (
    <SafeAreaView style={styles.container}>
      <Appbar.Header theme={{ colors: { primary: "darkgreen" } }}>
        <Appbar.Content title={"My List App"} />
        <Appbar.Action icon="plus-circle-outline" onPress={showModal} />
      </Appbar.Header>

      <View style={styles.header}>
        <Text style={styles.welcome}>Welcome, User!</Text>
        <Text style={styles.subWelcome}>Your current lists:</Text>
      </View>

      <View style={styles.lists}>
        {lists.map((list, idx) => (
          <List.Item
            title={list.name}
            style={styles.listItem}
            onPress={() =>
              navigation.navigate("Detail", {
                title: list.name,
                index: idx,
              })
            }
            right={(props) => (
              <IconButton
                onPress={() => {
                  setLists(lists.filter((a) => a.name !== list.name));
                  updateDeletedArray(lists.filter((a) => a.name !== list.name));
                }}
                icon="delete"
                size={20}
              />
            )}
          />
        ))}
      </View>

      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={containerStyle}
      >
        <Text style={styles.heading}>Add the name of your new list</Text>
        <TextInput
          label="Add list name"
          onChangeText={setListName}
          value={listName}
        />
        <Button onPress={saveData}>Add new list</Button>
        <Button mode="contained" onPress={hideModal}>
          Cancel
        </Button>
      </Modal>
    </SafeAreaView>
  );
}

const widthP = "90%";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  lists: {
    flex: 1,
    justifyContent: "flexStart",
    alignItems: "center",
  },
  header: {
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 20,
  },
  welcome: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subWelcome: {
    marginTop: 10,
    fontSize: 16,
  },
  listItem: {
    width: widthP,
    backgroundColor: "#dbdbdb",
    borderRadius: 10,
    border: "solid",
    borderWidth: 0.1,
    marginTop: 5,
    marginBottom: 5,
  },
});
