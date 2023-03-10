import React, { useEffect, useState } from "react"
import {Image, StyleSheet, Text, Touchable, TouchableOpacity, View, Alert, Modal, Pressable} from "react-native";

const AsyncAwait = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [players, setPlayers] = useState<any[]>([])

    let kobePic = "https://hips.hearstapps.com/hmg-prod/images/gettyimages-490703338.jpg?resize=200:*"
    let lebronPic = "https://bolavip.com/__export/1675354537061/sites/bolavip/img/2023/02/02/lebron_james.jpg_1890075089.jpg"
    let mikePic = "https://bolavip.com/__export/1635190879012/sites/bolavip/img/2021/10/25/michael_jordan.jpg_1890075089.jpg"
    let kdPic = "https://www.japantimes.co.jp/wp-content/uploads/2023/02/np_file_209733-1-200x200.jpeg"
    // const fetchData = async () => {
    //     const response = await fetch("http://localhost:9090")
    //     const data = await response.json()
    //     setPlayers(data)
    // }
    async function fetchData() {
        const response = await fetch("http://localhost:9090")
        response.json().then(response => setPlayers(response))
    }
    const printKobe = () => {
        let nba = Object.entries(players);
        let name = nba[0][1].name
        alert(name);
    }
    const printLebron = () => {
        let nba = Object.entries(players);
        let name = nba[1][1].name
        alert(name);
    }
    const printMike = () => {
        let nba = Object.entries(players);
        let name = nba[2][1].name
        alert(name);
    }
    const printKd = () => {
        let nba = Object.entries(players);
        //let name = nba[3][1].name
        //return name
        return 'hi'
    }
    useEffect( () => {
        fetchData()
    }, [])

    return (
        <View style={styles.view}>
            <TouchableOpacity style={styles.click} onPress={printKobe}><Image style={styles.pics} source={{uri:kobePic}}></Image></TouchableOpacity>
            <TouchableOpacity style={styles.click} onPress={printLebron}><Image style={styles.pics} source={{uri:lebronPic}}></Image></TouchableOpacity>
            <TouchableOpacity style={styles.click} onPress={printMike}><Image style={styles.pics} source={{uri:mikePic}}></Image></TouchableOpacity>
            <TouchableOpacity style={styles.click} onPress={() => setModalVisible(true)}><Image style={styles.pics} source={{uri:kdPic}}></Image></TouchableOpacity>
            <TouchableOpacity style={styles.click} onPress={printKobe}><Image style={styles.pics} source={{uri:kobePic}}></Image></TouchableOpacity>
            <TouchableOpacity style={styles.click} onPress={printKobe}><Image style={styles.pics} source={{uri:kobePic}}></Image></TouchableOpacity>
            <TouchableOpacity style={styles.click} onPress={printKobe}><Image style={styles.pics} source={{uri:kobePic}}></Image></TouchableOpacity>
            <TouchableOpacity style={styles.click} onPress={printKobe}><Image style={styles.pics} source={{uri:kobePic}}></Image></TouchableOpacity>
            <TouchableOpacity style={styles.click} onPress={printKobe}><Image style={styles.pics} source={{uri:kobePic}}></Image></TouchableOpacity>
            <TouchableOpacity style={styles.click} onPress={printKobe}><Image style={styles.pics} source={{uri:kobePic}}></Image></TouchableOpacity>
            <TouchableOpacity style={styles.click} onPress={printKobe}><Image style={styles.pics} source={{uri:kobePic}}></Image></TouchableOpacity>
            <TouchableOpacity style={styles.click} onPress={printKobe}><Image style={styles.pics} source={{uri:kobePic}}></Image></TouchableOpacity>
            <TouchableOpacity style={styles.click} onPress={printKobe}><Image style={styles.pics} source={{uri:kobePic}}></Image></TouchableOpacity>
            <TouchableOpacity style={styles.click} onPress={printKobe}><Image style={styles.pics} source={{uri:kobePic}}></Image></TouchableOpacity>
            <TouchableOpacity style={styles.click} onPress={printKobe}><Image style={styles.pics} source={{uri:kobePic}}></Image></TouchableOpacity>
            <TouchableOpacity style={styles.click} onPress={printKobe}><Image style={styles.pics} source={{uri:kobePic}}></Image></TouchableOpacity>
            <TouchableOpacity style={styles.click} onPress={printKobe}><Image style={styles.pics} source={{uri:kobePic}}></Image></TouchableOpacity>
            <TouchableOpacity style={styles.click} onPress={printKobe}><Image style={styles.pics} source={{uri:kobePic}}></Image></TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>{
                            printKd()
                        }</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>

        {/*//*/}
        {/*//*/}
        {/*//*/}
        {/*//     /!*<button style={styles.button} onClick={printKobe}><Text style={styles.buttonText}>Kobe Bryant</Text></button>*!/*/}
        {/*//     /!*<button style={styles.button} onClick={printLebron}><Text style={styles.buttonText}>LeBron James</Text></button>*!/*/}
        {/*//     /!*<button style={styles.button} onClick={printMike}><Text style={styles.buttonText}>Michael Jordan</Text></button>*!/*/}
        </View>


            // <Modal
            //     animationType="slide"
            //     transparent={true}
            //     visible={modalVisible}
            //     onRequestClose={() => {
            //         Alert.alert('Modal has been closed.');
            //         setModalVisible(!modalVisible);
            //     }}>
            //     <View style={styles.centeredView}>
            //         <View style={styles.modalView}>
            //             <Text style={styles.modalText}>Hello World!</Text>
            //             <Pressable
            //                 style={[styles.button, styles.buttonClose]}
            //                 onPress={() => setModalVisible(!modalVisible)}>
            //                 <Text style={styles.textStyle}>Hide Modal</Text>
            //             </Pressable>
            //         </View>
            //     </View>
            // </Modal>

    )
}
const styles = StyleSheet.create({
    click : {
      alignSelf: "flex-start",
    },
    pics: {
        minHeight: 200,
        minWidth: 200,
    },
    view: {
        display: "flex",
        flexDirection: "row",
        flexWrap: 'wrap',
        gap: 0,

    },


    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
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
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});

export default AsyncAwait
