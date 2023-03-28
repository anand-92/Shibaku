import { View } from '../components/Themed';
import PlayerInfoScreen from "./PlayerInfo";
import {styles} from "../resources/stylesheets";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <PlayerInfoScreen/>
    </View>
  );
}
