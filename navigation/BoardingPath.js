import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Contact from "../screens/customer/Customer";
import Favourite from "../screens/favourite/Favourite";
import { primaryColor } from "../styles/style";

const Stack = createNativeStackNavigator();
const TabNavigator = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <TabNavigator.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "black",
        tabBarStyle: {
          height: 60,
          shadowColor: "#000",
          shadowOpacity: 1,
          shadowRadius: 3,
          elevation: 15,
          shadowOffset: { height: -400, width: 0 },
        },
        tabBarLabelStyle: {
          fontSize: 14,
          marginBottom: 8,
        },
        tabBarShowLabel: true,
        tabBarIconStyle: {
          top: 4,
        },
        tabBarActiveBackgroundColor: primaryColor,
      }}
    >
      <TabNavigator.Screen
        name="Customer"
        component={Contact}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "people" : "people-outline"}
                size={22}
                color={focused ? "white" : "black"}
                style={{ padding: 0, margin: 0 }}
              />
            );
          },
        }}
      />
      <TabNavigator.Screen
        name="Favourite"
        component={Favourite}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "star" : "star-outline"}
                size={22}
                color={focused ? "white" : "black"}
                style={{ padding: 0, margin: 0 }}
              />
            );
          },
        }}
      />
    </TabNavigator.Navigator>
  );
};

const BoardingPath = () => {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        name="Main"
        component={MainNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="contact"
        component={Contact}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="favourite"
        component={Favourite}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default BoardingPath;
