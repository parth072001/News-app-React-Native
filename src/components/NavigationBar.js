import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

const NavigationBar = () => {
  const navigation = useNavigation();
  const route = useRoute();
  console.log(route.name);

  return (
    <View style={styles.menu}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("The News App");
        }}
      >
        <Text
          style={
            route.name === "The News App" ? styles.textSelect : styles.text
          }
        >
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Headlines")}>
        <Text
          style={route.name === "Headlines" ? styles.textSelect : styles.text}
        >
          Top-Headlines
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Trending")}>
        <Text
          style={route.name === "Trending" ? styles.textSelect : styles.text}
        >
          Trending
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default NavigationBar;

const styles = StyleSheet.create({
  menu: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "white",
    padding: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  text: {
    color: "grey",
    fontWeight: "500",
    fontSize: 18,
  },
  textSelect: {
    color: "red",
    fontWeight: "500",
    fontSize: 18,
  },
});
