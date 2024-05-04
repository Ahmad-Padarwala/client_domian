import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "../../styles/style";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import axios from "axios";
const PORT = process.env.EXPO_PUBLIC_API_URL;

const Customer = () => {
  const navigation = useNavigation();
  const [getContact, setGetContact] = useState([]);
  const getContactTableData = async () => {
    await axios
      .get(`${PORT}/getcontactdata`)
      .then((response) => {
        setGetContact(response.data);
      })
      .catch((error) => {
        console.log("Error fetching Contact data:", error);
      });
  };

  useFocusEffect(
    React.useCallback(() => {
      getContactTableData();
    }, [])
  );

  return (
    <View style={styles.container}>
      <View>
        <Ionicons
          style={styles.serchIcon}
          onPress={() => {
            navigation.navigate("searchcustomer");
          }}
          name="search-outline"
          size={24}
        ></Ionicons>
      </View>
      <Text style={styles.headingTitle}>Customer</Text>
      <Text style={{ marginBottom: 20 }}>{getContact.length} customer</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {getContact.map((contact, index) => (
          <TouchableOpacity
            key={index + 1}
            style={styles.maincustomer}
            onPress={() => {
              navigation.navigate("ViewCustomer");
            }}
          >
            <View style={styles.customerLogo}>
              <Text style={{ fontSize: 26, textTransform: "uppercase" }}>
                {contact.cname.charAt(0)}
              </Text>
            </View>
            <View style={styles.customerName}>
              <Text style={{ fontSize: 18, fontWeight: "500" }}>
                {contact.cname}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <TouchableOpacity
        style={styles.addIconMain}
        onPress={() => {
          navigation.navigate("AddCustomer");
        }}
      >
        <Ionicons
          name="add-outline"
          size={32}
          style={styles.addIcon}
          color={"white"}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Customer;
