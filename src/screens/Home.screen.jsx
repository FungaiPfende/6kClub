import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import React from "react";

import { space } from "../constants/theme";

import { Header } from "../components/Header.component.jsx";
import { WebinarCard } from "../components/WebinarCard.component.jsx";
import { TopStudents } from "../components/TopStudents.component.jsx";

export const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <WebinarCard />
        <TopStudents />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: space.lg,
  },
});
