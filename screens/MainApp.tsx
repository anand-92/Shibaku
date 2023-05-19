import { View } from "../components/Themed";
import PlayerInfoScreen from "../components/PlayerInfo";
import { styles } from "../resources/stylesheets";
import { Text, TextInput } from "react-native";
import React, { useState } from "react";
import SearchPopUp from "../components/SearchPopUp";
import { stockPic } from "../resources/pictures";
import { useIsFocused } from "@react-navigation/native";

export default function MainApp() {
  const isFocused = useIsFocused();
  let storedMode;
  const [variableContainerStyle, setVariableContainerStyle] = useState(
    styles.container
  );
  const [variableInstructionsStyle, setVariableInstructionsStyle] = useState(
    styles.instructions
  );
  const [variableInputStyle, setVariableInputStyle] = useState(styles.input);
  const [variablePlaceholderColor, setVariablePlaceholderColor] =
    useState("black");

  const [searchVisible, setSearchVisible] = useState(false);
  const [statInfo, setStatInfo] = useState<any>("Loading...");
  const [playerPic, setPlayerPic] = useState<any>(stockPic);
  const [text, onChangeText] = React.useState("Search A Player...");
  let searchInfo: any;

  async function getJSON(name: string) {
    return await fetch("http://localhost:8081/player/" + name + "/seasonStats")
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson;
      });
  }

  async function fetchSearch(name: string) {
    const searchStatsResponse = await getJSON(name);
    console.log(searchStatsResponse);
    searchInfo = searchStatsResponse;
    console.log(JSON.stringify(searchInfo));
  }

  async function onSearch(player: string) {
    setSearchVisible(true);
    await fetchSearch(player).then(() => {
      if (searchInfo.data != undefined) {
        if (searchInfo.data[0].first_name == "No Player Found") {
          setStatInfo("No/Multiple Players Found");
          setPlayerPic(stockPic);
        } else {
          setStatInfo(
            "" +
              `Name: ${searchInfo.data[0].first_name} ${searchInfo.data[0].last_name}\n` +
              `Team: ${searchInfo.data[0].team.full_name}\n` +
              `Height: ${searchInfo.data[0].height_feet}\'${searchInfo.data[0].height_inches}\"\n`.replaceAll(
                "null",
                "?"
              ) +
              `Weight: ${searchInfo.data[0].weight_pounds} lbs\n`.replaceAll(
                "null",
                "?"
              ) +
              `Position: ${searchInfo.data[0].position}\n` +
              `PPG: ${searchInfo.data[0].pts}\n` +
              `RPG: ${searchInfo.data[0].reb}\n` +
              `APG: ${searchInfo.data[0].ast}\n`
          );
          setPlayerPic(
            "https://www.basketball-reference.com/req/202106291/images/players/" +
              (
                searchInfo.data[0].last_name.substring(0, 5) +
                searchInfo.data[0].first_name.substring(0, 2)
              ).toLowerCase() +
              "01.jpg"
          );
        }
      }
    });
  }

  function startUp() {
    storedMode = localStorage.getItem("mode");
    if (storedMode === "Dark Mode") {
      setVariableContainerStyle(styles.darkContainer);
      setVariableInstructionsStyle(styles.darkInstructions);
      setVariableInputStyle(styles.darkInput);
      setVariablePlaceholderColor("white");
    } else {
      setVariableContainerStyle(styles.container);
      setVariableInstructionsStyle(styles.instructions);
      setVariableInputStyle(styles.input);
      setVariablePlaceholderColor("black");
    }
  }

  React.useEffect(() => {
    if (isFocused) {
      startUp();
    }
  }, [isFocused]);

  return (
    <View style={variableContainerStyle}>
      <Text style={variableInstructionsStyle}>
        Enter a player's first & last name to search.
        <br />
        <br />
        Hint: Players with unique names like "LeBron" can be found with just
        their first or last unique name.
      </Text>
      <TextInput
        style={variableInputStyle}
        onChangeText={onChangeText}
        //TODO fix color of inputed text when in dark mode
        placeholder={text}
        placeholderTextColor={variablePlaceholderColor}
        onSubmitEditing={() => onSearch(text)}
      />
      <SearchPopUp
        playerStats={statInfo}
        modalVisible={searchVisible}
        setModalVisible={setSearchVisible}
        playerImg={playerPic}
        mode={storedMode}
      />
      <PlayerInfoScreen />
    </View>
  );
}
