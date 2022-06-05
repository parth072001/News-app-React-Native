import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import NavigationBar from "./src/components/NavigationBar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import Trending from "./src/screens/Trending";
import Headlines from "./src/screens/Headlines";
import NewsDetails from "./src/components/NewsDetails";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="The News App">
        <Stack.Screen
          name="The News App"
          component={Home}
          options={{
            headerTintColor: "#f4511e",
            headerTitleStyle: {
              fontSize: 25,
            },
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          options={{
            headerTintColor: "#f4511e",
            headerTitleStyle: {
              fontSize: 25,
            },
            headerTitleAlign: "center",
            headerBackVisible: false,
          }}
          name="Trending"
          component={Trending}
        />
        <Stack.Screen
          options={{
            headerTintColor: "#f4511e",
            headerTitleStyle: {
              fontSize: 25,
            },
            headerTitleAlign: "center",
            headerBackVisible: false,
          }}
          name="Headlines"
          component={Headlines}
        />
        <Stack.Screen
          options={{
            headerTintColor: "#f4511e",
            headerTitleStyle: {
              fontSize: 25,
            },
            headerTitleAlign: "center",
          }}
          name="News Details"
          component={NewsDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
