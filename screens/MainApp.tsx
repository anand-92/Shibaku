import { View } from '../components/Themed';
import PlayerInfoScreen from "../components/PlayerInfo";
import {styles} from "../resources/stylesheets";
import {TextInput} from "react-native";
import React, {useState} from "react";
import PopUp from "../components/PopUp";

export default function MainApp() {
    const [searchInfo, setSearchInfo] = useState<any>([]);
    const [searchVisible, setSearchVisible] = useState(false);
    const [statInfo, setStatInfo] = useState<any>("Loading...");

    const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

    function getInfo(player: string) {
        fetchSearch(player).then( async () => {
            if (searchInfo.data != undefined) {
                console.log(JSON.stringify(searchInfo.data[0].first_name))
                if (searchInfo.data[0].first_name == "No Player Found") {
                    setStatInfo("No Player Found");
                } else {
                    setStatInfo(`Name: ${searchInfo.data[0].first_name} ${searchInfo.data[0].last_name}\n` +
                        `Height: ${searchInfo.data[0].height_feet}\'${searchInfo.data[0].height_inches}\"\n` +
                        `Position: ${searchInfo.data[0].position}\n` +
                        `PPG: ${searchInfo.data[0].pts}`);
                }
            }
        })
    }


    async function fetchSearch(name: string) {
        const searchStatsResponse = await fetch(
            "http://localhost:8081/player/"+name+"/seasonStats"
        );
        searchStatsResponse
            .json()
            .then((searchStatsResponse) => setSearchInfo(searchStatsResponse));
    }

     async function onSearch(text: string) {
         getInfo(text);
         await sleep(5000)
         setSearchVisible(true);
     }
    const [text, onChangeText] = React.useState('Search A Player...');

  return (
    <View style={styles.container}>
        <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            placeholder={text}
            onSubmitEditing={() => onSearch(text)}
        />
        <PopUp
            playerStats={statInfo}
            modalVisible={searchVisible}
            setModalVisible={setSearchVisible}/>
      <PlayerInfoScreen/>
    </View>
  );
}
