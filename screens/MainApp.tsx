import { View } from "../components/Themed";
import { styles } from "../resources/stylesheets";
import { Text, TextInput } from "react-native";
import React, { useState } from "react";
import { useIsFocused } from "@react-navigation/native";

export default function MainApp() {

  return (
    <View style={styles.container}>
      <Text style={{ paddingBottom: 20, fontWeight: "bold", color: "white", fontSize: 14, textAlign: 'center' }}>
        Note: Technical Analysis of Small-Cap Cryptocurrencies Is Unreliable
      </Text>
      <iframe
        id="dextools-widget"
        title="DEXTools Trading Chart"
        width="90%"
        height="100%"
        src="https://www.dextools.io/widget-chart/en/ether/pe-light/0x04Ec425e0773A06e504b81924ae349D758edEbd1?theme=dark&chartType=2&chartResolution=30&drawingToolbars=false"
      ></iframe>
    </View>
  );
}
