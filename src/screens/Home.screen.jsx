import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";

import { Header } from "../components/Header.component";
import { WebinarCard } from "../components/WebinarCard.component";

export const Home = () => {
  return (
    <SafeAreaView>
      <View>
        <Header />
        <WebinarCard />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
