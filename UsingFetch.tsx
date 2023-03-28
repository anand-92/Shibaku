import React, {useEffect, useState} from "react";
import {
    Image,
    StyleSheet,
    TouchableOpacity,
    View,
} from "react-native";
import PopUp from "./components/PopUp";

const AsyncAwait = () => {
    const [kobeVisible, setKobeVisible] = useState(false);
    const [lebronVisible, setLebronVisible] = useState(false);
    const [mikeVisible, setMikeVisible] = useState(false);
    const [kdVisible, setKdVisible] = useState(false);
    const [hardenVisible, setHardenVisible] = useState(false);
    const [pierceVisible, setPierceVisible] = useState(false);
    const [shaqVisible, setShaqVisible] = useState(false);
    const [russVisible, setRussVisible] = useState(false);

    const [players, setPlayers] = useState<any>([]);
    const [lebron, setLebron] = useState<any>([]);
    const [lebronSeasonStats, setLebronSeasonStats] = useState<any>([]);

    let kobePic =
        "https://hips.hearstapps.com/hmg-prod/images/gettyimages-490703338.jpg?resize=200:*";
    let lebronPic =
        "https://bolavip.com/__export/1675354537061/sites/bolavip/img/2023/02/02/lebron_james.jpg_1890075089.jpg";
    let mikePic =
        "https://bolavip.com/__export/1635190879012/sites/bolavip/img/2021/10/25/michael_jordan.jpg_1890075089.jpg";
    let kdPic =
        "https://www.japantimes.co.jp/wp-content/uploads/2023/02/np_file_209733-1-200x200.jpeg";
    let hardenPic =
        "https://www.chronicle.co.zw/wp-content/uploads/sites/3/2019/02/James-Harden-200x200.jpg";
    let piercePic =
        "https://static1.personality-database.com/profile_images/f81e255a86f6427086c593c6bb01bfaf.png";
    let shaqPic =
        "https://static.classora.com/files/uploads/images/entries/510390/main.jpg";
    let russPic =
        "https://bolavip.com/__export/1666651031547/sites/bolavip/img/2022/10/24/russellwestbrooklakerstrade.jpg_1890075089.jpg";

    async function fetchData() {
        //Web API Load
        const response = await fetch("http://localhost:8081/listPlayers");

        //android API Load
        //const response = await fetch("http://10.0.2.2:9090");

        response.json().then(response => setPlayers(response));

        const lebronStatsResponse = await fetch("http://localhost:8081/player/lebron/seasonStats");
        lebronStatsResponse.json().then(lebronStatsResponse => setLebronSeasonStats(lebronStatsResponse));

        //External API START
        const requestOptions = {
            method: 'GET',
        };
        const lebronResponse = await fetch("https://balldontlie.io/api/v1/players?search=lebron", requestOptions);
        lebronResponse.json().then(lebronResponse => setLebron(lebronResponse));
        //External API END
    }

    function printKobe() {
        let nba = Object.entries(players);
        return printPlayer(nba, "kobe");
    }

    function printLebron() {
        let nba = Object.entries(players);
        if(JSON.stringify(lebron.data)!==undefined) {
            console.log(JSON.stringify(lebron.data[0].position));
            return `${printPlayer(nba, "lebron")}\nPosition: ${lebron.data[0].position}\n2023 PPG: ${lebronSeasonStats.pts}`;
        }

    }

    function printMike() {
        let nba = Object.entries(players);
        return printPlayer(nba, "mike");
    }

    function printKd() {
        let nba = Object.entries(players);
        return printPlayer(nba, "kd");
    }

    function printHarden() {
        let nba = Object.entries(players);
        return printPlayer(nba, "harden");
    }

    function printPierce() {
        let nba = Object.entries(players);
        return printPlayer(nba, "paulpierce");
    }

    function printShaq() {
        let nba = Object.entries(players);
        return printPlayer(nba, "shaq");
    }

    function printRuss() {
        let nba = Object.entries(players);
        return printPlayer(nba, "russ");
    }

    function printPlayer(playerList: any, playerName: string) {
        for (let i = 0; i < playerList.length; i++) {
            if (playerList[i][0].toString() == playerName) {
                let player = playerList[i][1];
                return `Name: ${player.name}\nPoints: ${player.points}\nChampionships: ${player.rings}`;
            }
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <View style={styles.view}>
            <TouchableOpacity
                style={styles.click}
                onPress={() => setKobeVisible(true)}
            >
                <Image style={styles.pics} source={{uri: kobePic}}></Image>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.click}
                onPress={() => setLebronVisible(true)}
            >
                <Image style={styles.pics} source={{uri: lebronPic}}></Image>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.click}
                onPress={() => setMikeVisible(true)}
            >
                <Image style={styles.pics} source={{uri: mikePic}}></Image>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.click}
                onPress={() => setKdVisible(true)}>
                <Image style={styles.pics} source={{uri: kdPic}}></Image>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.click}
                onPress={() => setHardenVisible(true)}
            >
                <Image style={styles.pics} source={{uri: hardenPic}}></Image>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.click}
                onPress={() => setPierceVisible(true)}
            >
                <Image style={styles.pics} source={{uri: piercePic}}></Image>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.click}
                onPress={() => setShaqVisible(true)}
            >
                <Image style={styles.pics} source={{uri: shaqPic}}></Image>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.click}
                onPress={() => setRussVisible(true)}
            >
                <Image style={styles.pics} source={{uri: russPic}}></Image>
            </TouchableOpacity>

            <PopUp
                playerStats={printKobe()}
                modalVisible={kobeVisible}
                setModalVisible={setKobeVisible}
            />
            <PopUp
                playerStats={printLebron()}
                modalVisible={lebronVisible}
                setModalVisible={setLebronVisible}
            />
            <PopUp
                playerStats={printMike()}
                modalVisible={mikeVisible}
                setModalVisible={setMikeVisible}
            />
            <PopUp
                playerStats={printKd()}
                modalVisible={kdVisible}
                setModalVisible={setKdVisible}
            />
            <PopUp
                playerStats={printHarden()}
                modalVisible={hardenVisible}
                setModalVisible={setHardenVisible}
            />
            <PopUp
                playerStats={printPierce()}
                modalVisible={pierceVisible}
                setModalVisible={setPierceVisible}
            />
            <PopUp
                playerStats={printShaq()}
                modalVisible={shaqVisible}
                setModalVisible={setShaqVisible}
            />
            <PopUp
                playerStats={printRuss()}
                modalVisible={russVisible}
                setModalVisible={setRussVisible}
            />
        </View>
    );
};
const styles = StyleSheet.create({
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
});

export default AsyncAwait;
