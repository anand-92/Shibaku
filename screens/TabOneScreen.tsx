import { Button, ImageBackground, Pressable, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { ScreenConstants } from "./ScreenConstants";
import TabTwoScreen from "./TabTwoScreen";




export default function TabOneScreen({
                                       navigation,
                                     }: RootTabScreenProps<"TabOne">) {
  return (
      <View style={styles.container}>
        <ImageBackground
            style={styles.homeImage}
            source={require("../assets/images/HomeScreen.jpg")}
            resizeMode="cover"
        >
            <Text style={styles.title}>NBA Stats Aggregator</Text>
            <Pressable
                style={styles.startButton}
                onPress={() => navigation.navigate("TabTwo")}
            >
              <Text style={styles.buttonText}>Start Now</Text>
            </Pressable>
        </ImageBackground>
      </View>
  );
}

const Stack = createNativeStackNavigator();
function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="TabOne">
          {/*<Stack.Screen name="TabOne" component={TabOneScreen}/>*/}
          <Stack.Screen name="TabTwo" component={TabTwoScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
      alignSelf: "center",
      justifyContent: "center",
      textAlign: "center",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  startButton: {
    marginTop: 20,
    padding: 0,
    backgroundColor: "white",
    width: 100,
    height: 50,
    borderRadius: 10,
    alignSelf: "center",
    justifyContent: "center",
  },
  buttonText: {
    alignSelf: "center",
    justifyContent: "center",
    textAlign: "center",
    fontWeight: 'bold',
    color: "red",
  },
    homeImage: {
      position: 'absolute',
        justifyContent: 'center',
      flex: 1,
      height: '100%',
        width: '100%',
    },
});
