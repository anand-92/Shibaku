import React, { useEffect, useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import PopUp from "./PopUp";
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
      .then((westbrookStatsResponse) =>
        setWestbrookInfo(westbrookStatsResponse)
      );

    const lillardStatsResponse = await fetch(
      "http://localhost:8081/player/lillard/seasonStats"
    );
    lillardStatsResponse
      .json()
      .then((lillardStatsResponse) => setLillardInfo(lillardStatsResponse));
  }

  function printLebron() {
    if (lebronInfo.data != undefined) {
      return (
        `Name: ${lebronInfo.data[0].first_name} ${lebronInfo.data[0].last_name}\n` +
        `Height: ${lebronInfo.data[0].height_feet}\'${lebronInfo.data[0].height_inches}\"\n` +
        `Position: ${lebronInfo.data[0].position}\n` +
        `PPG: ${lebronInfo.data[0].pts}`
      );
    }
  }
  function printKd() {
    if (durantInfo.data != undefined) {
      return (
        `Name: ${durantInfo.data[0].first_name} ${durantInfo.data[0].last_name}\n` +
        `Height: ${durantInfo.data[0].height_feet}\'${durantInfo.data[0].height_inches}\"\n` +
        `Position: ${durantInfo.data[0].position}\n` +
        `PPG: ${durantInfo.data[0].pts}`
      );
    }
  }
  function printHarden() {
    if (hardenInfo.data != undefined) {
      return (
        `Name: ${hardenInfo.data[0].first_name} ${hardenInfo.data[0].last_name}\n` +
        `Height: ${hardenInfo.data[0].height_feet}\'${hardenInfo.data[0].height_inches}\"\n` +
        `Position: ${hardenInfo.data[0].position}\n` +
        `PPG: ${hardenInfo.data[0].pts}`
      );
    }
  }
  function printWestbrook() {
    if (westbrookInfo.data != undefined) {
      return (
        `Name: ${westbrookInfo.data[0].first_name} ${westbrookInfo.data[0].last_name}\n` +
        `Height: ${westbrookInfo.data[0].height_feet}\'${westbrookInfo.data[0].height_inches}\"\n` +
        `Position: ${westbrookInfo.data[0].position}\n` +
        `PPG: ${westbrookInfo.data[0].pts}`
      );
    }
  }
  function printLillard() {
    if (lillardInfo.data != undefined) {
      return (
        `Name: ${lillardInfo.data[0].first_name} ${lillardInfo.data[0].last_name}\n` +
        `Height: ${lillardInfo.data[0].height_feet}\'${lillardInfo.data[0].height_inches}\"\n` +
        `Position: ${lillardInfo.data[0].position}\n` +
        `PPG: ${lillardInfo.data[0].pts}`
      );
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
      <TouchableOpacity
        style={styles.click}
        onPress={() => setDurantVisible(true)}
      >
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
        mode={localStorage.getItem("mode")}
      />
      <PopUp
        playerStats={printKd()}
        modalVisible={durantVisible}
        setModalVisible={setDurantVisible}
        mode={localStorage.getItem("mode")}
      />
      <PopUp
        playerStats={printHarden()}
        modalVisible={hardenVisible}
        setModalVisible={setHardenVisible}
        mode={localStorage.getItem("mode")}
      />
      <PopUp
        playerStats={printWestbrook()}
        modalVisible={westbrookVisible}
        setModalVisible={setWestbrookVisible}
        mode={localStorage.getItem("mode")}
      />
      <PopUp
        playerStats={printLillard()}
        modalVisible={lillardVisible}
        setModalVisible={setLillardVisible}
        mode={localStorage.getItem("mode")}
      />
    </View>
  );
};

export default PlayerInfoScreen;
