import {
  ImageBackground,
  Linking,
  Pressable,
} from "react-native";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { styles } from "../resources/stylesheets";
import React, { useEffect, useState } from "react";
import MovingText from "react-moving-text";

const shib = require("../assets/images/shib.png");
const logo = require("../assets/images/logo.jpeg");
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
        resizeMode="cover"
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
            <Text style={variableTitleStyle}>Shibaku Inu </Text>
            <img src={shib} style={styles.logo}></img>
          </MovingText>
        </div>
        <Pressable
          style={variableButtonStyle}
          onPress={() => Linking.openURL("https://pancakeswap.finance/swap")}
        >
          <Text style={variableButtonTextStyle}>Buy Now</Text>
        </Pressable>
        <Pressable
          style={variableButtonStyle}
          onPress={() => null} //open PDF? or just host on site? interactive whitepaper maybe?
        >
          <Text style={variableButtonTextStyle}>White Paper</Text>
        </Pressable>
        //dark mode shit
        {/*<Pressable style={variableButtonStyle} onPress={changeMode}>*/}
        {/*  <Text style={variableButtonTextStyle}>{mode}</Text>*/}
        {/*</Pressable>*/}
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
          <a href="https://t.me/+cyGohcPftyBjZTUx">
            <img src={telegram} style={styles.logoLinks}></img>
          </a>
          <a href="https://bscscan.com">
            <img src={scan} style={styles.logoLinks}></img>
          </a>
          <a href="https://www.dextools.io/app/en/ether/pair-explorer/0x04f01db076c85ea9a27c84c83e13b166fe9db95c">
            <img src={dex} style={styles.logoLinks}></img>
          </a>
          <a href="https://app.uniswap.org/#/swap">
            <img src={uni} style={styles.logoLinks}></img>
          </a>
          <a href="https://twitter.com">
            <img src={twitter} style={styles.logoLinks}></img>
          </a>
        </div>
      </ImageBackground>
    </View>
  );
}