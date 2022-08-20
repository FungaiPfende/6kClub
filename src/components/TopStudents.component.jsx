import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import {
  assets,
  colours,
  fonts,
  fontSizes,
  sizes,
  space,
} from "../constants/theme";

export const TopStudents = () => {
  const students = [
    {
      id: "01",
      name: "Liarah",
      image: assets.student01,
    },
    {
      id: "02",
      name: "Cateline",
      image: assets.student02,
    },
    {
      id: "03",
      name: "Marcus",
      image: assets.student03,
    },
    {
      id: "04",
      name: "Sarah",
      image: assets.student04,
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top Design Students</Text>

      <View style={styles.studentsView}>
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.studentsScroll}
          pagingEnabled={true}
        >
          {students.map((student, i) => (
            <View style={styles.students}>
              <Image
                source={student.image}
                key={student.id}
                resizeMode="contain"
                style={styles.studentImages}
              />
              <Text key={i} style={styles.studentsText}>
                {student.name}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },

  title: {
    fontFamily: fonts.bold,
    fontSize: fontSizes.h5,
    marginBottom: space.lg,
  },

  studentsView: {
    flex: 1,
  },

  studentsScroll: {
    flex: 1,
    justifyContent: "space-between",
    overflow: "visible",
  },

  students: {
    flexDirection: "column",
    alignItems: "center",
    paddingRight: space.lg,
  },

  studentsText: {
    fontFamily: fonts.medium,
    fontSize: fontSizes.body,
    marginTop: space.md,
  },

  studentImages: {
    borderRadius: sizes.xl,
    height: sizes.xxl,
    width: sizes.xxl,
    borderColor: colours.brand.primary,
    borderWidth: sizes.sm,
  },
});
