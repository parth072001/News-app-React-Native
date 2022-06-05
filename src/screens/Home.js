import {
  StyleSheet,
  Text,
  View,
  VirtualizedList,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import NavigationBar from "../components/NavigationBar";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);
  const newsData = async () => {
    const response = await fetch(
      "https://newsapi.org/v2/everything?q=war&apiKey=c32a0a9e975d41758b9541a1388ea078",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const res = await response.json();
    setIsLoaded(false);
    setData(res);
    console.log("*****************************");
    console.log("*****************************");
    console.log("*****************************");
    console.log("*****************************");
    console.log("*****************************");
    console.log(data);
  };
  const date = (t) => {
    let d = new Date(`${t}`);
    let m = d.toLocaleDateString();

    return m;
  };
  useEffect(() => {
    newsData();
  }, []);

  const Card = ({ item }) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("News Details", {
              title: `${item.title}`,
              desc: `${item.description}`,
              img: `${item.urlToImage}`,
            })
          }
        >
          <View style={styles.card}>
            <Image
              style={styles.cardImg}
              source={{
                uri: `${item.urlToImage}`,
              }}
            />
            <Text style={{ fontSize: 23, marginTop: 8 }}>{item.title}</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 6,
                marginHorizontal: 4,
              }}
            >
              <Text style={{ color: "red", fontSize: 17 }}>
                {item.source.name}
              </Text>
              <Text style={{ color: "grey", fontSize: 17 }}>
                {date(item.publishedAt)}
              </Text>
            </View>
          </View>
          <View
            style={{ height: 1, backgroundColor: "#D8D8D8", marginTop: 15 }}
          ></View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.home}>
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data.articles}
          renderItem={Card}
          keyExtractor={(item) => item.url}
        />
      </View>
      <View style={styles.menu}>
        <NavigationBar />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  home: {
    position: "relative",
    height: "100%",
  },
  menu: {
    position: "absolute",
    width: "100%",
    bottom: 0,
  },
  cardImg: {
    height: 250,
    width: "100%",
    resizeMode: "cover",
    borderRadius: 2,
  },
  card: {
    marginHorizontal: 15,
    marginTop: 16,
  },
});

// <VirtualizedList
// data={data}
// renderItem={({ item }) => <NewsCard title={item.articles.title} />}
// keyExtractor={(item) => item.articles.url}
// />
