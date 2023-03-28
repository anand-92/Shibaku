import React, {useEffect, useState} from "react";
import {
    Image,
    TouchableOpacity,
    View,
} from "react-native";
import PopUp from "./components/PopUp";
import {kobePic, lebronPic, mikePic, kdPic, hardenPic, piercePic, shaqPic, russPic} from './resources/pictures'
import {styles} from "./resources/stylesheets";

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

    async function fetchData() {
        const response = await fetch("http://localhost:8081/listPlayers");
        response.json().then(response => setPlayers(response));

        const lebronStatsResponse = await fetch("http://localhost:8081/player/lebron/seasonStats");
        lebronStatsResponse.json().then(lebronStatsResponse => setLebronSeasonStats(lebronStatsResponse));

        const lebronResponse = await fetch("http://localhost:8081/player/lebron/position");
        lebronResponse.json().then(lebronResponse => setLebron(lebronResponse)); //+lebronSeasonStats));
    }

    function printKobe() {
        let nba = Object.entries(players);
        return printPlayer(nba, "kobe");
    }

    function printLebron() {
        let nba = Object.entries(players);
        console.log(lebron);
        return `${printPlayer(nba, "lebron")}\nPosition: ${lebron}\nPPG: ${lebronSeasonStats.pts}`;
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

export default AsyncAwait;
