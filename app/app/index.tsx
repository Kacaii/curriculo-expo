import { Text, View, StyleSheet, ScrollView } from "react-native";
import React from "react";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pedro Ayres 🌠 </Text>
      <Text style={styles.subtitle}>Backend Developer</Text>
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
  bio: {},
  text: {},
});
