import React from "react";
import { Alert, Modal, Pressable, StyleSheet, Text, View } from "react-native";

class PopupProps {
  playerStats: any;
  modalVisible: any;
  setModalVisible: any;
  mode: any;
}

const PopUp: React.FC<PopupProps> = ({
  playerStats,
  modalVisible,
  setModalVisible,
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
          <Text style={popUpModalText}>{playerStats}</Text>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <Text style={styles.textStyle}>Hide Modal</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default PopUp;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
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
    margin: 20,
    backgroundColor: "black",
    borderRadius: 20,
    padding: 35,
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
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  modalDarkText: {
    marginBottom: 15,
    textAlign: "center",
    color: "white",
  },
});
