import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";

import { Header } from "../components/Header.component";

export const Home = () => {
  return (
    <SafeAreaView>
      <View>
        <Header />
        {/* <Text>Home Screen</Text> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
