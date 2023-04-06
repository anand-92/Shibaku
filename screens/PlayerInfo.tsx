import React, { useEffect, useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import PopUp from "../components/PopUp";
import {
    lebronPic,
    kdPic,
    hardenPic,
    westbrookPic,
    lillardPic,
} from "../resources/pictures";
import { styles } from "../resources/stylesheets";

const PlayerInfoScreen = () => {
    const [lebronVisible, setLebronVisible] = useState(false);
    const [durantVisible, setDurantVisible] = useState(false);
    const [hardenVisible, setHardenVisible] = useState(false);
    const [westbrookVisible, setWestbrookVisible] = useState(false);
    const [lillardVisible, setLillardVisible] = useState(false);

    const [durantInfo, setDurantInfo] = useState<any>([]);
    const [lebronInfo, setLebronInfo] = useState<any>([]);
    const [hardenInfo, setHardenInfo] = useState<any>([]);
    const [westbrookInfo, setWestbrookInfo] = useState<any>([]);
    const [lillardInfo, setLillardInfo] = useState<any>([]);

    async function fetchData() {
        const lebronStatsResponse = await fetch(
            "http://localhost:8081/player/lebron/seasonStats"
        );
        lebronStatsResponse
            .json()
            .then((lebronStatsResponse) => setLebronInfo(lebronStatsResponse));

        const durantStatsResponse = await fetch(
            "http://localhost:8081/player/durant/seasonStats"
        );
        durantStatsResponse
            .json()
            .then((durantStatsResponse) => setDurantInfo(durantStatsResponse));

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

        const lillardStatsResponse = await fetch(
            "http://localhost:8081/player/lillard/seasonStats"
        );
        lillardStatsResponse
            .json()
            .then((lillardStatsResponse) => setLillardInfo(lillardStatsResponse));
    }

    function printLebron() {
        if(lebronInfo.lebron!=undefined) {
            return  `Name: ${lebronInfo.lebron[0].first_name} ${lebronInfo.lebron[0].last_name}\n`+
                    `Height: ${lebronInfo.lebron[0].height_feet}\'${lebronInfo.lebron[0].height_inches}\"\n`+
                    `Position: ${lebronInfo.lebron[0].position}\n`+
                    `PPG: ${lebronInfo.lebron[0].pts}`;
        }
    }
    function printKd() {
        if(durantInfo.durant!=undefined) {
            return  `Name: ${durantInfo.durant[0].first_name} ${durantInfo.durant[0].last_name}\n`+
                `Height: ${durantInfo.durant[0].height_feet}\'${durantInfo.durant[0].height_inches}\"\n`+
                `Position: ${durantInfo.durant[0].position}\n`+
                `PPG: ${durantInfo.durant[0].pts}`;
        }
    }
    function printHarden() {
        if(hardenInfo.harden!=undefined) {
            return  `Name: ${hardenInfo.harden[0].first_name} ${hardenInfo.harden[0].last_name}\n`+
                `Height: ${hardenInfo.harden[0].height_feet}\'${hardenInfo.harden[0].height_inches}\"\n`+
                `Position: ${hardenInfo.harden[0].position}\n`+
                `PPG: ${hardenInfo.harden[0].pts}`;
        }
    }
    function printWestbrook() {
        if(westbrookInfo.westbrook!=undefined) {
            return  `Name: ${westbrookInfo.westbrook[0].first_name} ${westbrookInfo.westbrook[0].last_name}\n`+
                `Height: ${westbrookInfo.westbrook[0].height_feet}\'${westbrookInfo.westbrook[0].height_inches}\"\n`+
                `Position: ${westbrookInfo.westbrook[0].position}\n`+
                `PPG: ${westbrookInfo.westbrook[0].pts}`;
        }
    }
    function printLillard() {
        if(lillardInfo.lillard!=undefined) {
            return  `Name: ${lillardInfo.lillard[0].first_name} ${lillardInfo.lillard[0].last_name}\n`+
                `Height: ${lillardInfo.lillard[0].height_feet}\'${lillardInfo.lillard[0].height_inches}\"\n`+
                `Position: ${lillardInfo.lillard[0].position}\n`+
                `PPG: ${lillardInfo.lillard[0].pts}`;
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
            <TouchableOpacity style={styles.click} onPress={() => setDurantVisible(true)}>
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
                onPress={() => setWestbrookVisible(true)}
            >
                <Image style={styles.pics} source={{ uri: westbrookPic }}></Image>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.click}
                onPress={() => setLillardVisible(true)}
            >
                <Image style={styles.pics} source={{ uri: lillardPic }}></Image>
            </TouchableOpacity>

            <PopUp
                playerStats={printLebron()}
                modalVisible={lebronVisible}
                setModalVisible={setLebronVisible}
            />
            <PopUp
                playerStats={printKd()}
                modalVisible={durantVisible}
                setModalVisible={setDurantVisible}
            />
            <PopUp
                playerStats={printHarden()}
                modalVisible={hardenVisible}
                setModalVisible={setHardenVisible}
            />
            <PopUp
                playerStats={printWestbrook()}
                modalVisible={westbrookVisible}
                setModalVisible={setWestbrookVisible}
            />
            <PopUp
                playerStats={printLillard()}
                modalVisible={lillardVisible}
                setModalVisible={setLillardVisible}
            />
        </View>
    );
};

export default PlayerInfoScreen;
