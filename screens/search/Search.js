import React, { useEffect, useState } from "react";
import { View, ScrollView, Text, TextInput } from "react-native";
import { styles } from "../../styles/style";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
const PORT = process.env.EXPO_PUBLIC_API_URL;

const Search = () => {
  const navigation = useNavigation();
  const [searchValue, setSearchValue] = useState("");
  const [getContact, setGetContact] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(`${PORT}/getcontactdata`);
      setGetContact(response.data);
    } catch (error) {
      console.log("Error fetching Contact data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const filteredContacts = getContact.filter((contact) => {
    const fullName = `${contact.cname}`;
    if (searchValue === "") {
      return false;
    }
    return fullName.toLowerCase().startsWith(searchValue.toLowerCase());
  });

  return (
    <View style={styles.container}>
      <View style={styles.searchcontainer}>
        <View style={styles.backIcon}>
          <Ionicons
            name="arrow-back-outline"
            onPress={() => {
              navigation.goBack();
            }}
            size={20}
          ></Ionicons>
        </View>
        <View style={styles.textcontainer}>
          <TextInput
            placeholder="Search contacts"
            onChangeText={(text) => {
              setSearchValue(text);
            }}
            value={searchValue}
            style={styles.searchInput}
            autoFocus
          />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {filteredContacts.map((contact, index) => (
          <View key={index} style={styles.maincustomer}>
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
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Search;
