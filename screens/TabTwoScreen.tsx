import { View } from '../components/Themed';
import PlayerInfoScreen from "./PlayerInfo";
import {styles} from "../resources/stylesheets";
import {TextInput} from "react-native";
import React, {useState} from "react";

export default function TabTwoScreen() {
    const [searchInfo, setSearchInfo] = useState<any>([]);
    const [searchVisible, setSearchVisible] = useState(false);
    function printSearch(player: string) {
        //alert('Searched: '+player);

        if(searchInfo.lebron!=undefined) {
            return  `Name: ${searchInfo.lebron[0].first_name} ${searchInfo.lebron[0].last_name}\n`+
                `Height: ${searchInfo.lebron[0].height_feet}\'${searchInfo.lebron[0].height_inches}\"\n`+
                `Position: ${searchInfo.lebron[0].position}\n`+
                `PPG: ${searchInfo.lebron[0].pts}`;
        }
    }

    async function fetchSearch(name: string) {
        const searchStatsResponse = await fetch(
            "http://localhost:8081/player/"+name+"/seasonStats"
        );
        searchStatsResponse
            .json()
            .then((searchStatsResponse) => setSearchInfo(searchStatsResponse));
    }

    const [text, onChangeText] = React.useState('Search A Player...');

  return (
    <View style={styles.container}>
        {/*<TextInput*/}
        {/*    style={styles.input}*/}
        {/*    onChangeText={onChangeText}*/}
        {/*    placeholder={text}*/}
        {/*    onSubmitEditing={() => printSearch(text)}*/}
        {/*/>*/}
      <PlayerInfoScreen/>
    </View>
  );
}
