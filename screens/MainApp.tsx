import { View } from '../components/Themed';
import PlayerInfoScreen from "../components/PlayerInfo";
import {styles} from "../resources/stylesheets";
import {Image, TextInput} from "react-native";
import React, {useState} from "react";
import SearchPopUp from "../components/SearchPopUp";
import {stockPic} from "../resources/pictures";

export default function MainApp() {
    const [searchInfo, setSearchInfo] = useState<any>([]);
    const [searchVisible, setSearchVisible] = useState(false);
    const [statInfo, setStatInfo] = useState<any>("Loading...");
    const [playerPic, setPlayerPic] = useState<any>(stockPic);

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
                    setPlayerPic("https://www.basketball-reference.com/req/202106291/images/players/"
                        +(searchInfo.data[0].last_name.substring(0,5)+searchInfo.data[0].first_name.substring(0,2)).toLowerCase()+"01.jpg");
                    console.log(playerPic);
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
         setSearchVisible(true);
     }
    const [text, onChangeText] = React.useState('Search A Player...');

  return (
    <View style={styles.container}>
        <Image></Image>
        <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            placeholder={text}
            onSubmitEditing={() => onSearch(text)}
        />
        <SearchPopUp
            playerStats={statInfo}
            modalVisible={searchVisible}
            setModalVisible={setSearchVisible}
            playerImg={playerPic}
        />
      <PlayerInfoScreen/>
    </View>
  );
}
