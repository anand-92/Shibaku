import { View } from "../components/Themed";
import { styles } from "../resources/stylesheets";
import { Image, Pressable, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { stockPic } from "../resources/pictures";
import ComparePopUp from "../components/ComparePopUp";
import { useIsFocused } from "@react-navigation/native";

export default function ComparePlayers() {
  const isFocused = useIsFocused();
  let storedMode;
  const [variableContainerStyle, setVariableContainerStyle] = useState(
    styles.container
  );
  const [variableInstructionsStyle, setVariableInstructionsStyle] = useState(
    styles.instructions
  );
  const [variableInstructionsSearchStyle, setVariableInstructionsSearchStyle] =
    useState(styles.instructionsSearch);
  const [variableInputStyle, setVariableInputStyle] = useState(styles.input);
  const [variableButtonStyle, setVariableButtonStyle] = useState(styles.button);
  const [variableButtonTextStyle, setVariableButtonTextStyle] = useState(
    styles.buttonText
  );
  const [variablePlaceholderColor, setVariablePlaceholderColor] =
    useState("black");

  const [searchVisible, setSearchVisible] = useState(false);
  const [statInfo1, setStatInfo1] = useState<any>("Loading...");
  const [statInfo2, setStatInfo2] = useState<any>("Loading...");
  const [playerPic1, setPlayerPic1] = useState<any>(stockPic);
  const [playerPic2, setPlayerPic2] = useState<any>(stockPic);
  const [player1, onChangeText1] = React.useState("Search A Player...");
  const [player2, onChangeText2] = React.useState("Search A Player...");
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

  async function onSearch(player1: string, player2: string) {
    setSearchVisible(true);
    await fetchSearch(player1).then(() => {
      if (searchInfo.data != undefined) {
        if (searchInfo.data[0].first_name == "No Player Found") {
          setStatInfo1("No/Multiple Players Found");
        } else {
          setStatInfo1(
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
          setPlayerPic1(
            "https://www.basketball-reference.com/req/202106291/images/players/" +
              (
                searchInfo.data[0].last_name.substring(0, 5) +
                searchInfo.data[0].first_name.substring(0, 2)
              ).toLowerCase() +
              "01.jpg"
          );
        }
      }
      searchInfo = undefined;
    });
    await fetchSearch(player2).then(() => {
      if (searchInfo.data != undefined) {
        if (searchInfo.data[0].first_name == "No Player Found") {
          setStatInfo2("No/Multiple Players Found");
        } else {
          setStatInfo2(
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
          setPlayerPic2(
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
      setVariableInstructionsSearchStyle(styles.darkInstructionsSearch);
      setVariableButtonStyle(styles.darkButton);
      setVariableButtonTextStyle(styles.darkButtonText);
      setVariableInputStyle(styles.darkInput);
      setVariablePlaceholderColor("white");
    } else {
      setVariableContainerStyle(styles.container);
      setVariableInstructionsStyle(styles.instructions);
      setVariableInstructionsSearchStyle(styles.instructionsSearch);
      setVariableButtonStyle(styles.button);
      setVariableButtonTextStyle(styles.buttonText);
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
      <Image></Image>
      <Text style={variableInstructionsStyle}>
        Enter 2 player's first & last names to search and compare.
        <br />
        <br />
        Hint: Players with unique names like "LeBron" can be found with just
        their first or last unique name.
      </Text>
      <Text style={variableInstructionsSearchStyle}>
        Enter the first player's first & last name to search.
      </Text>
      <TextInput
        style={variableInputStyle}
        onChangeText={onChangeText1}
        placeholder={player1}
        placeholderTextColor={variablePlaceholderColor}
      />
      <Text style={variableInstructionsSearchStyle}>
        Enter the second player's first & last name to search.
      </Text>
      <TextInput
        style={variableInputStyle}
        onChangeText={onChangeText2}
        placeholder={player2}
        placeholderTextColor={variablePlaceholderColor}
      />
      <Pressable
        style={variableButtonStyle}
        onPress={() => onSearch(player1, player2)}
      >
        <Text style={variableButtonTextStyle}>Submit</Text>
      </Pressable>
      <ComparePopUp
        playerStats1={statInfo1}
        playerStats2={statInfo2}
        modalVisible={searchVisible}
        setModalVisible={setSearchVisible}
        playerImg1={playerPic1}
        playerImg2={playerPic2}
        mode={localStorage.getItem("mode")}
      />
    </View>
  );
}
