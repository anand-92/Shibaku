import { View } from '../components/Themed';
import AsyncAwait from "../UsingFetch";
import {styles} from "../resources/stylesheets";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <AsyncAwait/>
    </View>
  );
}
