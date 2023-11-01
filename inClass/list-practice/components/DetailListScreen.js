import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  Appbar,
  Button,
  Modal,
  TextInput,
  List,
  IconButton,
} from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function DetailListScreen({ navigation, route }) {
  let listObj = route.params;
  const [visible, setVisible] = useState();
  const [currentList, setCurrentList] = useState();
  const [allLists, setAllLists] = useState();
  const [currentItems, setCurrentItems] = useState([]);
  const [itemName, setItemName] = useState();

  useEffect(() => {
    getCurrentList();
  }, []);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const getCurrentList = async () => {
    console.log("DETAIL GET DATA LOAD ");
    try {
      const lists = await AsyncStorage.getItem("lists");
      console.log("DETAIL GET DATA LOAD ", lists);
      if (!lists) {
        // setNoListMessage('You have no lists at this time. Please add a list.');
        console.log("no sublists");
      } else {
        setCurrentList(JSON.parse(lists)[listObj.index]);
        console.log("DETAIL GET DATA JSON ", JSON.parse(lists)[listObj.index]);
        setAllLists(JSON.parse(lists));
      }
    } catch (e) {
      console.log("DETAIL GET DATA ERROR ", e);
    }
  };

  const saveData = async () => {
    currentList.items.push({ itemTitle: itemName });
    setCurrentItems(currentList.items);
    setItemName("");
    hideModal();

    console.log(currentItems);

    // so i need to find a way to set an item within currentList.items, which is found using the index

    //this is the only way i found so far, it updated my local storage but on reload it doesnt work
    // await AsyncStorage.setItem('lists', JSON.stringify(currentList));
  };

  const updateItemArray = async (filterArray) => {
    // await AsyncStorage.setItem('lists', JSON.stringify(filterArray));
    // getData();
  };

  const goHome = () => {
    navigation.navigate("Home");
  };

  const containerStyle = {
    backgroundColor: "#fff",
    padding: 20,
  };

  return (
    <View style={styles.container}>
      <View>
        <Appbar.Header theme={{ colors: { primary: "darkgreen" } }}>
          <Appbar.Action icon="keyboard-backspace" onPress={goHome} />
          <Appbar.Content title={"List Details"} />
          <Appbar.Action icon="plus-circle-outline" onPress={showModal} />
        </Appbar.Header>
      </View>

      <View style={styles.header}>
        <Text style={styles.welcome}>{listObj.title}</Text>
        <Text style={styles.subWelcome}>This lists' items:</Text>
      </View>

      <View style={styles.lists}>
        {currentItems.map((item, idx) => (
          <List.Item
            title={item.itemTitle}
            style={styles.listItem}
            onPress={() =>
              navigation.navigate("DetailList", {
                title: item.itemTitle,
                index: idx,
              })
            }
            right={(props) => (
              <IconButton
                onPress={() => {
                  updateItemArray(
                    currentItems.filter((a) => a.itemTitle !== item.itemTitle)
                  );
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
        <Text style={styles.heading}>Add an item to your list</Text>
        <TextInput label="Add item name" onChangeText={setItemName} />
        <Button onPress={saveData}>Add new item</Button>
        <Button mode="contained" onPress={hideModal}>
          Cancel
        </Button>
      </Modal>
    </View>
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
