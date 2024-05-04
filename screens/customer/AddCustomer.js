import React, { useState } from "react";
import { View, Text, TextInput, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../../styles/style";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
const PORT = process.env.EXPO_PUBLIC_API_URL;

const AddCustomer = () => {
  const navigation = useNavigation();
  const [addContact, setAddContact] = useState({
    cname: "",
    domain: "",
    mobile_no: "",
    email: "",
  });
  const handleChange = (name, value) => {
    setAddContact((prevProdData) => ({
      ...prevProdData,
      [name]: value,
    }));
  };

  const postdata = async () => {
    try {
      if (addContact.cname === "") {
        window.alert("Customer Name is Required");
        return false;
      }
      if (!isNaN(addContact.cname)) {
        window.alert("Do Not Allow Number in Customer Name");
        return false;
      }
      if (addContact.domain === "") {
        window.alert("Domain Name is Required");
        return false;
      }
      if (addContact.mobile_no === "") {
        window.alert("Mobile Number is Required");
        return false;
      }
      if (isNaN(addContact.mobile_no)) {
        window.alert("Must Write Digit Only in Mobile Number");
        return false;
      }

      if (addContact.email !== "") {
        // Check if email is not empty
        let regEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/g;
        if (!regEmail.test(addContact.email)) {
          window.alert("Enter A Valid Email Address");
          return false;
        }
      }
      const response = await axios.post(`${PORT}/addcontactdata`, addContact);
      if (response.status === 200) {
        navigation.navigate("Main");
      } else {
        window.alert("Customer Add Failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainAddContact}>
        <Ionicons
          name="close-outline"
          size={30}
          onPress={() => {
            navigation.goBack();
          }}
          style={{ textAlignVertical: "center" }}
        />
        <Text style={styles.customerTitle}>Add Customer</Text>
        <Text style={styles.saveName} onPress={postdata}>
          Add
        </Text>
      </View>
      <View style={styles.formMain}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.mainInputContainer}>
            <Ionicons
              name="person"
              size={22}
              style={{ textAlignVertical: "center" }}
            />
            <TextInput
              placeholder="Customer Name"
              style={styles.formInput}
              value={addContact.cname}
              onChangeText={(text) => handleChange("cname", text)}
            />
          </View>
          <View style={styles.mainInputContainer}>
            <TextInput
              placeholder="Domain Name"
              style={[styles.formInput, styles.singleInput]}
              value={addContact.domain}
              onChangeText={(text) => handleChange("domain", text)}
            />
          </View>
          <View style={styles.mainInputContainer}>
            <Ionicons
              name="call"
              size={22}
              style={{ textAlignVertical: "center" }}
            />
            <TextInput
              keyboardType="numeric"
              placeholder="Phone"
              style={styles.formInput}
              value={addContact.mobile_no}
              onChangeText={(text) => handleChange("mobile_no", text)}
            />
          </View>
          <View style={styles.mainInputContainer}>
            <Ionicons
              name="mail"
              size={22}
              style={{ textAlignVertical: "center" }}
            />
            <TextInput
              placeholder="Email"
              style={styles.formInput}
              value={addContact.email}
              onChangeText={(text) => handleChange("email", text)}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default AddCustomer;
