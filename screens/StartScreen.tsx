import { ImageBackground, Pressable } from "react-native";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { styles } from "../resources/stylesheets";
import { useState } from "react";

export default function StartScreen({
  navigation,
}: RootTabScreenProps<"StartScreen">) {
  const [mode, setMode] = useState<any>("Light Mode");
  const [variableButtonStyle, setVariableButtonStyle] = useState<any>(
    styles.button
  );
  const [variableButtonTextStyle, setVariableButtonTextStyle] = useState<any>(
    styles.buttonText
  );

  function setDarkMode() {
    //change button text
    if (mode === "Dark Mode") {
      setMode("Light Mode");
      setVariableButtonStyle(styles.button);
      setVariableButtonTextStyle(styles.buttonText);
    } else {
      setMode("Dark Mode");
      setVariableButtonStyle(styles.darkButton);
      setVariableButtonTextStyle(styles.darkButtonText);
    }

    //set mode
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.homeImage}
        source={require("../assets/images/HomeScreen.jpg")}
        resizeMode="cover"
      >
        <Text style={styles.title}>NBA Stats Aggregator</Text>
        <Pressable
          style={variableButtonStyle}
          onPress={() => navigation.navigate("NBAStats")}
        >
          <Text style={variableButtonTextStyle}>Start Now</Text>
        </Pressable>

        <Pressable style={variableButtonStyle} onPress={setDarkMode}>
          <Text style={variableButtonTextStyle}>{mode}</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
}
