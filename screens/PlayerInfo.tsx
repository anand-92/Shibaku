import React, { useEffect, useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import PopUp from "../components/PopUp";
import {
    lebronPic,
    kdPic,
    hardenPic,
    russPic,
} from "../resources/pictures";
import { styles } from "../resources/stylesheets";

const PlayerInfoScreen = () => {
    const [lebronVisible, setLebronVisible] = useState(false);
    const [kdVisible, setKdVisible] = useState(false);
    const [hardenVisible, setHardenVisible] = useState(false);
    const [russVisible, setRussVisible] = useState(false);

    const [players, setPlayers] = useState<any>([]);

    const [kdInfo, setKdInfo] = useState<any>([]);
    const [lebronInfo, setLebronInfo] = useState<any>([]);
    const [hardenInfo, setHardenInfo] = useState<any>([]);
    const [westbrookInfo, setWestbrookInfo] = useState<any>([]);

    async function fetchData() {
        const response = await fetch("http://localhost:8081/listPlayers");
        response.json().then((response) => setPlayers(response));

        const lebronStatsResponse = await fetch(
            "http://localhost:8081/player/lebron/seasonStats"
        );
        lebronStatsResponse
            .json()
            .then((lebronStatsResponse) => setLebronInfo(lebronStatsResponse));

        const kdStatsResponse = await fetch(
            "http://localhost:8081/player/durant/seasonStats"
        );
        kdStatsResponse
            .json()
            .then((kdStatsResponse) => setKdInfo(kdStatsResponse));

        const hardenStatsResponse = await fetch(
            "http://localhost:8081/player/harden/seasonStats"
        );
        hardenStatsResponse
            .json()
            .then((hardenStatsResponse) => setHardenInfo(hardenStatsResponse));

        const westbrookStatsResponse = await fetch(
            "http://localhost:8081/player/westbrook/seasonStats"
        );
        westbrookStatsResponse
            .json()
            .then((westbrookStatsResponse) => setWestbrookInfo(westbrookStatsResponse));

    }

    function printLebron() {
        let nba = Object.entries(players);
        if(lebronInfo.lebron!=undefined) {
            console.log(JSON.stringify(lebronInfo.lebron[0].pts));
            return `${printPlayer(nba, "lebron")}\nPosition: ${lebronInfo.lebron[0].position}\nPPG: ${lebronInfo.lebron[0].pts}`;
        }
    }
    function printKd() {
        let nba = Object.entries(players);
        if (kdInfo.durant != undefined) {
            console.log(JSON.stringify(kdInfo.durant[0].pts));
            return `${printPlayer(nba, "durant")}\nPosition: ${kdInfo.durant[0].position}\nPPG: ${kdInfo.durant[0].pts}`;
        }
    }
    function printHarden() {
        let nba = Object.entries(players);
        if(hardenInfo.harden!=undefined) {
            console.log(JSON.stringify(hardenInfo.harden[0].pts));
            return `${printPlayer(nba, "harden")}\nPosition: ${hardenInfo.harden[0].position}\nPPG: ${hardenInfo.harden[0].pts}`;
        }
    }
    function printRuss() {
        let nba = Object.entries(players);
        if(westbrookInfo.westbrook!=undefined) {
            console.log(JSON.stringify(westbrookInfo.westbrook[0].pts));
            return `${printPlayer(nba, "westbrook")}\nPosition: ${westbrookInfo.westbrook[0].position}\nPPG: ${westbrookInfo.westbrook[0].pts}`;
        }
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
        fetchData().then();
    }, []);

    return (
        <View style={styles.view}>
            <TouchableOpacity
                style={styles.click}
                onPress={() => setLebronVisible(true)}
            >
                <Image style={styles.pics} source={{ uri: lebronPic }}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.click} onPress={() => setKdVisible(true)}>
                <Image style={styles.pics} source={{ uri: kdPic }}></Image>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.click}
                onPress={() => setHardenVisible(true)}
            >
                <Image style={styles.pics} source={{ uri: hardenPic }}></Image>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.click}
                onPress={() => setRussVisible(true)}
            >
                <Image style={styles.pics} source={{ uri: russPic }}></Image>
            </TouchableOpacity>

            <PopUp
                playerStats={printLebron()}
                modalVisible={lebronVisible}
                setModalVisible={setLebronVisible}
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
                playerStats={printRuss()}
                modalVisible={russVisible}
                setModalVisible={setRussVisible}
            />
        </View>
    );
};

export default PlayerInfoScreen;
