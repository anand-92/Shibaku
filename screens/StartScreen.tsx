import { ImageBackground, Pressable } from "react-native";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { styles } from "../resources/stylesheets";
import { useEffect, useState } from "react";

export default function StartScreen({
  navigation,
}: RootTabScreenProps<"StartScreen">) {
  const storedMode = localStorage.getItem("mode");
  const [mode, setMode] = useState(storedMode);

  const [variableButtonStyle, setVariableButtonStyle] = useState(styles.button);
  const [variableButtonTextStyle, setVariableButtonTextStyle] = useState(
    styles.buttonText
  );
  const [variableTitleStyle, setVariableTitleStyle] = useState(styles.title);

  function startUp() {
    if (mode === "Dark Mode") {
      setVariableButtonStyle(styles.darkButton);
      setVariableButtonTextStyle(styles.darkButtonText);
      setVariableTitleStyle(styles.darkTitle);
    }
  }
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

    //set mode
  }

  useEffect(() => {
    console.log(`Is in dark mode? ${mode}`);
    //changeMode();
  }, [mode]);

  useEffect(() => {
    startUp();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.homeImage}
        source={require("../assets/images/HomeScreen.jpg")}
        resizeMode="cover"
      >
        <Text style={variableTitleStyle}>NBA Stats Aggregator</Text>
        <Pressable
          style={variableButtonStyle}
          onPress={() => navigation.navigate("NBAStats")}
        >
          <Text style={variableButtonTextStyle}>Start Now</Text>
        </Pressable>
        <Pressable style={variableButtonStyle} onPress={changeMode}>
          <Text style={variableButtonTextStyle}>{mode}</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
}
