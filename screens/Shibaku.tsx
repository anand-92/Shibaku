import { ImageBackground, Linking, Pressable } from "react-native";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { styles } from "../resources/stylesheets";
import React, { useEffect, useState } from "react";
import MovingText from "react-moving-text";

const shib = require("../assets/images/shib.png");
const logo = require("../assets/images/baku.jpg");
const telegram = require("../assets/images/telegram-icon-512x512-z8lb0qsx.png");
const dex = require("../assets/images/dex.png");
const scan = require("../assets/images/scan-w.png");
const twitter = require("../assets/images/twi-w.png");
const uni = require("../assets/images/uni-w.png");

export default function Shibaku(
  this: any,
  { navigation }: RootTabScreenProps<"Shibaku">
) {
  let storedMode = localStorage.getItem("mode");
  const [mode, setMode] = useState(storedMode);

  const [variableButtonStyle, setVariableButtonStyle] = useState(styles.button);
  const [variableButtonTextStyle, setVariableButtonTextStyle] = useState(
    styles.buttonText
  );
  const [variableTitleStyle, setVariableTitleStyle] = useState(styles.title);

  function changeMode() {
    //change button text
    if (mode === "Dark Mode") {
      localStorage.setItem("mode", "Light Mode");
      setMode("Light Mode");
      setVariableButtonStyle(styles.button);
      setVariableButtonTextStyle(styles.buttonText);
      setVariableTitleStyle(styles.title);
    } else {
      localStorage.setItem("mode", "Dark Mode");
      setMode("Dark Mode");
      setVariableButtonStyle(styles.darkButton);
      setVariableButtonTextStyle(styles.darkButtonText);
      setVariableTitleStyle(styles.darkTitle);
    }
  }

  useEffect(() => {
    if (mode === "Dark Mode") {
      setVariableButtonStyle(styles.darkButton);
      setVariableButtonTextStyle(styles.darkButtonText);
      setVariableTitleStyle(styles.darkTitle);
    }
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.homeImage}
        source={logo}
        resizeMode="contain"
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MovingText
            type="bounce"
            duration="1000ms"
            delay="0s"
            direction="normal"
            timing="ease"
            iteration="infinite"
            fillMode="none"
          >
            <Text style={variableTitleStyle}>Shibaku </Text>
            <img src={shib} style={styles.logo}></img>
          </MovingText>
        </div>
        <Pressable
          style={variableButtonStyle}
          onPress={() => Linking.openURL("https://app.uniswap.org/#/swap?outputCurrency=0x04Ec425e0773A06e504b81924ae349D758edEbd1")}
        >
          <Text style={variableButtonTextStyle}>Buy Now</Text>
        </Pressable>
        <Text style={styles.contract}>0x04Ec425e0773A06e504b81924ae349D758edEbd1</Text>
        <Text style={styles.contract}>1% Tax</Text>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
          }}
        >
          <a href="https://t.me/shibakueth">
            <img src={telegram} style={styles.logoLinks}></img>
          </a>
          <a href="https://etherscan.io/address/0x04Ec425e0773A06e504b81924ae349D758edEbd1">
            <img src={scan} style={styles.logoLinks}></img>
          </a>
          <a href="https://www.dextools.io/app/en/ether/pair-explorer/0x04Ec425e0773A06e504b81924ae349D758edEbd1">
            <img src={dex} style={styles.logoLinks}></img>
          </a>
          <a href="https://app.uniswap.org/#/swap?outputCurrency=0x04Ec425e0773A06e504b81924ae349D758edEbd1">
            <img src={uni} style={styles.logoLinks}></img>
          </a>
          <a href="https://twitter.com/ShibakuETH">
            <img src={twitter} style={styles.logoLinks}></img>
          </a>
        </div>
      </ImageBackground>
    </View>
  );
}
