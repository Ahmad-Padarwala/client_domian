import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Search from "../screens/serach/Search";
import { MainNavigator } from "./BoardingPath";
const Stack = createNativeStackNavigator();

const SearchPath = () => {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        name="Main"
        component={MainNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="search"
        component={Search}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
export default SearchPath;
