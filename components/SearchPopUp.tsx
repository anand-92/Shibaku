import React from "react";
import {Alert, Image, Modal, Pressable, StyleSheet, Text, View} from "react-native";

class SearchPopupProps {
    playerStats: any;
    modalVisible: any;
    setModalVisible: any;
    playerImg: any;
}

const SearchPopUp: React.FC<SearchPopupProps> = ({
     playerStats,
     modalVisible,
     setModalVisible,
    playerImg,
 }) => {
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
                <View style={styles.modalView}>
                    <Image source={{uri: playerImg}} style={styles.image}/>
                    <Text style={styles.modalText}>{playerStats}</Text>
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

export default SearchPopUp;

const styles = StyleSheet.create({
    image: {
        justifyContent: "center",
        alignItems: "center",
        minWidth: 120,
        minHeight: 180,
        marginBottom: 20,
    },
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
});
