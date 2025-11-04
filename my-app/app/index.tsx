import { Text, View } from "react-native";
import React from "react";

const languages = [
  "Typescript",
  "Javascript",
  "Golang",
  "Zig",
  "Python",
  "SQL",
];

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ textDecorationLine: "underline", marginBottom: 10 }}>
        Pedro Ayres
      </Text>

      <Text style={{ fontWeight: "bold" }}>Languages</Text>
      {languages.map((language, index) => (
        <ViewLanguage key={index} lang={language} />
      ))}
    </View>
  );
}

function ViewLanguage({ lang }: { lang: string }) {
  return <Text>{lang}</Text>;
}
