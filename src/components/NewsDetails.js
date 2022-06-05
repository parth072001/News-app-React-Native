import {
  StyleSheet,
  Text,
  View,
  VirtualizedList,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";

const NewsDetails = ({ navigation, route }) => {
  return (
    <View>
      <ScrollView>
        <TouchableOpacity style={{ marginHorizontal: 1 }}>
          <Text
            style={{
              fontSize: 33,
              marginVertical: 10,
              marginHorizontal: 10,
              color: "red",
            }}
          >
            {route.params.title}
          </Text>
          <Image
            source={{ uri: `${route.params.img}` }}
            style={styles.cardImg}
          />
          <Text
            style={{ fontSize: 23, marginVertical: 10, marginHorizontal: 10 }}
          >
            {route.params.desc}
          </Text>
          <Text
            style={{ fontSize: 23, marginVertical: 0, marginHorizontal: 10 }}
          >
            {route.params.desc}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default NewsDetails;

const styles = StyleSheet.create({
  cardImg: {
    height: 250,
    width: "100%",
    resizeMode: "cover",
    borderRadius: 2,
  },
});
