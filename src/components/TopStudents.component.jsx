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
    // {
    //   id: "05",
    //   name: "Munashe",
    //   image: assets.userProfile,
    // },
  ];

  return (
    <View>
      <Text style={styles.title}>Top design students</Text>

      <View style={styles.studentsView}>
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.studentsScroll}
        >
          {students.map((student, i) => (
            <View style={styles.students}>
              <Image
                source={student.image}
                key={student.id}
                resizeMode="contain"
                style={styles.studentImages}
              />
              <Text key={student.i} style={styles.studentsText}>
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
  title: {
    fontFamily: fonts.bold,
    fontSize: fontSizes.h5,
    marginBottom: space.lg,
  },

  studentsView: {},

  studentsScroll: {
    flex: 1,
    justifyContent: "space-between",
    overflow: "visible",
  },

  students: {
    flexDirection: "column",
    alignItems: "center",
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
