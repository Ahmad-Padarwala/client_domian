import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BoardingPath from "./BoardingPath";
import ViewCustomer from "../screens/customer/ViewCustomer";
import AddCustomer from "../screens/customer/AddCustomer";
import Search from "../screens/search/Search";
const Stack = createNativeStackNavigator();

const index = () => {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        name="boardingroute"
        component={BoardingPath}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="searchcustomer"
        component={Search}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddCustomer"
        component={AddCustomer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ViewCustomer"
        component={ViewCustomer}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default index;
