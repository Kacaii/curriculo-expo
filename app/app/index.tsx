import { Text, View, StyleSheet, ScrollView } from "react-native";
import React from "react";

const fav_languages = ["Typescript", "Golang", "Zig", "Gleam", "SQL"];
const fav_technologies = ["Git", "Jujutsu", "Beam VM", "PostgreSQL"];

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pedro Ayres 🌠 </Text>
      <Text style={styles.subtitle}>Backend Developer</Text>

      <Text style={styles.list_header}>Favorite Languages:</Text>
      {fav_languages.map((language, index) => (
        <Text key={index} style={styles.text}>
          * {language}
        </Text>
      ))}

      <Text style={styles.list_header}>Favorite Technologies</Text>
      {fav_technologies.map((tech, index) => (
        <Text key={index} style={styles.text}>
          * {tech}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e2e",
    justifyContent: "center",
    alignItems: "center",
  },

  title: { fontWeight: "bold", color: "#cdd6f4" },
  subtitle: { textDecorationStyle: "dashed", color: "#cdd6f4" },

  list_header: {
    fontWeight: "bold",
    color: "#cdd6f4",
    marginVertical: 10,
  },

  bio: {},
  text: { color: "#cdd6f4" },
});
