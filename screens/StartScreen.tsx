import { ImageBackground, Pressable } from "react-native";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { styles } from "../resources/stylesheets";

export default function StartScreen({navigation,}: RootTabScreenProps<"StartScreen">) {
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
                    onPress={() => navigation.navigate("NBAStats")}
                >
                    <Text style={styles.buttonText}>Start Now</Text>
                </Pressable>
            </ImageBackground>
        </View>
    );
}