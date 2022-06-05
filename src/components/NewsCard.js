import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const NewsCard = ({ title }) => {
  return (
    <>
      <View style={styles.card}>
        <Image
          style={styles.cardImg}
          source={{
            uri: "https://ajo.prod.reuters.tv/api/v2/img/621eb074e4b085d396fd4c90-1646178420660?location=LANDSCAPE",
          }}
        />
        <Text style={{ fontSize: 20, marginTop: 8 }}>{title}</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 6,
            marginHorizontal: 4,
          }}
        >
          <Text style={{ color: "grey" }}>author</Text>
          <Text style={{ color: "grey" }}> 4m ago</Text>
        </View>
      </View>
      <View
        style={{ height: 1, backgroundColor: "#D8D8D8", marginTop: 8 }}
      ></View>
    </>
  );
};

export default NewsCard;

const styles = StyleSheet.create({
  cardImg: {
    height: 250,
    width: "100%",
    resizeMode: "cover",
    borderRadius: 2,
  },
  card: {
    marginHorizontal: 15,
    marginTop: 10,
  },
});
