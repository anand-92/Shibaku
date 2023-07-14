import { View } from "../components/Themed";
import { styles } from "../resources/stylesheets";
import { Image, Pressable, Text, TextInput } from "react-native";
import React, { useState } from "react";
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
      <Text style={variableInstructionsStyle}>
        Enter 2 player's first & last names to search and compare.
      </Text>
      <Text style={variableInstructionsSearchStyle}>
        Enter the second player's first & last name to search.
      </Text>
      <Text style={variableButtonTextStyle}>Submit</Text>
    </View>
  );
}
