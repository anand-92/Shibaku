import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import {useEffect, useState} from "react";
import AsyncAwait from "../UsingFetch";


export default function TabTwoScreen() {


  useEffect(() => {
    // write your code here, it's like componentWillMount
  }, [])


  return (
    <View style={styles.container}>
      <AsyncAwait/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  row: {
    padding: 50,
    flexDirection: "row",
  },
  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  square: {
    marginHorizontal: 50,
    padding: 50,
    borderColor: "#fff",
    borderWidth: 1,
    width: 150,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
  },
});
