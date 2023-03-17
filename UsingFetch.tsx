import React, { useEffect, useState } from "react"
import {Image, StyleSheet, Text, Touchable, TouchableOpacity, View, Alert, Modal, Pressable} from "react-native";


const AsyncAwait = () => {
    const [kobeVisible, setKobeVisible] = useState(false);
    const [lebronVisible, setLebronVisible] = useState(false);
    const [mikeVisible, setMikeVisible] = useState(false);
    const [kdVisible, setKdVisible] = useState(false);
    const [players, setPlayers] = useState<any[]>([])

    let kobePic = "https://hips.hearstapps.com/hmg-prod/images/gettyimages-490703338.jpg?resize=200:*"
    let lebronPic = "https://bolavip.com/__export/1675354537061/sites/bolavip/img/2023/02/02/lebron_james.jpg_1890075089.jpg"
    let mikePic = "https://bolavip.com/__export/1635190879012/sites/bolavip/img/2021/10/25/michael_jordan.jpg_1890075089.jpg"
    let kdPic = "https://www.japantimes.co.jp/wp-content/uploads/2023/02/np_file_209733-1-200x200.jpeg"

    async function fetchData() {
        const response = await fetch("http://localhost:9090")
        response.json().then(response => setPlayers(response))
    }
    function printKobe() {
        let nba = Object.entries(players);
        return printPlayer(nba,'kobe');
    }
    function printLebron() {
        let nba = Object.entries(players);
        return printPlayer(nba,'lebron');
    }
    function printMike() {
        let nba = Object.entries(players);
        return printPlayer(nba,'mike');
    }

    //Modal Test
    function printKd() {
        let playerList = Object.entries(players);
        let nba = Object.entries(players);
        return printPlayer(nba,'kd');
    }
    function printPlayer(playerList: any, playerName: string) {
        for(let i=0; i<playerList.length; i++)
        {
            if(playerList[i][0].toString()==playerName) {
                let player = playerList[i][1];
                return (`Name: ${player.name}\nPoints: ${player.points}\nChampionships: ${player.rings}`)
            }
        }
    }
    useEffect( () => {
        fetchData()
    }, [])

    return (
        <View style={styles.view}>
            <TouchableOpacity style={styles.click} onPress={() => setKobeVisible(true)}><Image style={styles.pics} source={{uri:kobePic}}></Image></TouchableOpacity>
            <TouchableOpacity style={styles.click} onPress={() => setLebronVisible(true)}><Image style={styles.pics} source={{uri:lebronPic}}></Image></TouchableOpacity>
            <TouchableOpacity style={styles.click} onPress={() => setMikeVisible(true)}><Image style={styles.pics} source={{uri:mikePic}}></Image></TouchableOpacity>
            <TouchableOpacity style={styles.click} onPress={() => setKdVisible(true)}><Image style={styles.pics} source={{uri:kdPic}}></Image></TouchableOpacity>
            <TouchableOpacity style={styles.click} onPress={() => setKobeVisible(true)}><Image style={styles.pics} source={{uri:kobePic}}></Image></TouchableOpacity>
            <TouchableOpacity style={styles.click} onPress={() => setKobeVisible(true)}><Image style={styles.pics} source={{uri:kobePic}}></Image></TouchableOpacity>
            <TouchableOpacity style={styles.click} onPress={() => setKobeVisible(true)}><Image style={styles.pics} source={{uri:kobePic}}></Image></TouchableOpacity>
            <TouchableOpacity style={styles.click} onPress={() => setKobeVisible(true)}><Image style={styles.pics} source={{uri:kobePic}}></Image></TouchableOpacity>
            <TouchableOpacity style={styles.click} onPress={() => setKobeVisible(true)}><Image style={styles.pics} source={{uri:kobePic}}></Image></TouchableOpacity>
            <TouchableOpacity style={styles.click} onPress={() => setKobeVisible(true)}><Image style={styles.pics} source={{uri:kobePic}}></Image></TouchableOpacity>
            <TouchableOpacity style={styles.click} onPress={() => setKobeVisible(true)}><Image style={styles.pics} source={{uri:kobePic}}></Image></TouchableOpacity>
            <TouchableOpacity style={styles.click} onPress={() => setKobeVisible(true)}><Image style={styles.pics} source={{uri:kobePic}}></Image></TouchableOpacity>
            <TouchableOpacity style={styles.click} onPress={() => setKobeVisible(true)}><Image style={styles.pics} source={{uri:kobePic}}></Image></TouchableOpacity>
            <TouchableOpacity style={styles.click} onPress={() => setKobeVisible(true)}><Image style={styles.pics} source={{uri:kobePic}}></Image></TouchableOpacity>
            <TouchableOpacity style={styles.click} onPress={() => setKobeVisible(true)}><Image style={styles.pics} source={{uri:kobePic}}></Image></TouchableOpacity>
            <TouchableOpacity style={styles.click} onPress={() => setKobeVisible(true)}><Image style={styles.pics} source={{uri:kobePic}}></Image></TouchableOpacity>
            <TouchableOpacity style={styles.click} onPress={() => setKobeVisible(true)}><Image style={styles.pics} source={{uri:kobePic}}></Image></TouchableOpacity>
            <TouchableOpacity style={styles.click} onPress={() => setKobeVisible(true)}><Image style={styles.pics} source={{uri:kobePic}}></Image></TouchableOpacity>

            <PopUp playerStats={printKobe()} modalVisible={kobeVisible} setModalVisible={setKobeVisible}/>
            <PopUp playerStats={printLebron()} modalVisible={lebronVisible} setModalVisible={setLebronVisible}/>
            <PopUp playerStats={printMike()} modalVisible={mikeVisible} setModalVisible={setMikeVisible}/>
            <PopUp playerStats={printKd()} modalVisible={kdVisible} setModalVisible={setKdVisible}/>
        </View>
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
