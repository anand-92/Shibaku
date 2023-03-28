import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    click: {
        alignSelf: "flex-start",
    },
    pics: {
        minHeight: 200,
        minWidth: 200,
    },
    view: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 0,
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
    buttonOpen: {
        backgroundColor: "#F194FF",
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
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        alignSelf: "center",
        justifyContent: "center",
        textAlign: "center",
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%",
    },
    startButton: {
        marginTop: 20,
        padding: 0,
        backgroundColor: "white",
        width: 100,
        height: 50,
        borderRadius: 10,
        alignSelf: "center",
        justifyContent: "center",
    },
    buttonText: {
        alignSelf: "center",
        justifyContent: "center",
        textAlign: "center",
        fontWeight: "bold",
        color: "red",
    },
    homeImage: {
        position: "absolute",
        justifyContent: "center",
        flex: 1,
        height: "100%",
        width: "100%",
    },
});
