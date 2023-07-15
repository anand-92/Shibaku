import { View } from "../components/Themed";
import { styles } from "../resources/stylesheets";
import { Text, TextInput } from "react-native";
import React, { useState } from "react";
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
      <Text style={{ paddingBottom: 80, fontWeight: "bold" }}>
        Note: Technical Analysis of Small-Cap Cryptocurrencies Is Unreliable
      </Text>
      <iframe
        id="dextools-widget"
        title="DEXTools Trading Chart"
        width="75%"
        height="50%"
        src="https://www.dextools.io/widget-chart/en/ether/pe-light/0x04f01db076c85ea9a27c84c83e13b
              166fe9db95c?theme=light&chartType=2&chartResolution=30&drawingToolbars=false"
      ></iframe>
    </View>
  );
}
