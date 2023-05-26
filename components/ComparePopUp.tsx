import React from "react";
import {
  Alert,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

class ComparePopUpProps {
  playerStats1: any;
  playerStats2: any;
  modalVisible: any;
  setModalVisible: any;
  playerImg1: any;
  playerImg2: any;
  mode: any;
}

const ComparePopUp: React.FC<ComparePopUpProps> = ({
  playerStats1,
  playerStats2,
  modalVisible,
  setModalVisible,
  playerImg1,
  playerImg2,
  mode,
}) => {
  let popUpModalView;
  let popUpModalText;
  if (mode === "Dark Mode") {
    popUpModalView = styles.modalDarkView;
    popUpModalText = styles.modalDarkText;
  } else {
    popUpModalView = styles.modalView;
    popUpModalText = styles.modalText;
  }
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={popUpModalView}>
          <Image source={{ uri: playerImg1 }} style={styles.image} />
          <Text style={popUpModalText}>{playerStats1}</Text>
        </View>
        <View style={popUpModalView}>
          <Image source={{ uri: playerImg2 }} style={styles.image} />
          <Text style={popUpModalText}>{playerStats2}</Text>
        </View>
        <Pressable
          style={styles.button}
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <Text style={styles.textStyle}>Hide Modal</Text>
        </Pressable>
      </View>
    </Modal>
  );
};

export default ComparePopUp;

const styles = StyleSheet.create({
  image: {
    justifyContent: "center",
    alignItems: "center",
    minWidth: 120,
    minHeight: 180,
    marginBottom: 20,
  },
  centeredView: {
    backgroundColor: "black",
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    flexBasis: "31%",
    flexDirection: "column",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalDarkView: {
    flexBasis: "31%",
    flexDirection: "column",
    margin: 20,
    backgroundColor: "black",
    borderRadius: 20,
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    marginBottom: "25%",
    borderRadius: 20,
    padding: 10,
    justifyContent: "center",
    elevation: 2,
    width: "40%",
    height: "8%",
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    fontSize: 24,
    marginBottom: 5,
    textAlign: "center",
  },
  modalDarkText: {
    fontSize: 24,
    marginBottom: 5,
    textAlign: "center",
    color: "white",
  },
});
