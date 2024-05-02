import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "../../styles/style";
import { Ionicons } from "@expo/vector-icons";

const Contact = () => {
  return (
    <View style={styles.container}>
      <View>
        <Ionicons
          style={styles.serchIcon}
          name="search-outline"
          size={24}
        ></Ionicons>
      </View>
      <Text style={styles.headingTitle}>Contact</Text>
      <Text>200 contact</Text>

      <View style={styles.maincontact}>
        <View style={styles.contactLogo}>
          <Text style={{ fontSize: 20 }}>A</Text>
        </View>
        <View style={styles.contactName}>
          <Text style={{ fontSize: 18, fontWeight: "500" }}>
            Ahmad Padarwala
          </Text>
        </View>
      </View>
      <View style={styles.maincontact}>
        <View style={styles.contactLogo}>
          <Text style={{ fontSize: 20 }}>A</Text>
        </View>
        <View style={styles.contactName}>
          <Text style={{ fontSize: 18, fontWeight: "500" }}>
            Ahmad Padarwala
          </Text>
        </View>
      </View>
      <View style={styles.maincontact}>
        <View style={styles.contactLogo}>
          <Text style={{ fontSize: 20 }}>A</Text>
        </View>
        <View style={styles.contactName}>
          <Text style={{ fontSize: 18, fontWeight: "500" }}>
            Ahmad Padarwala
          </Text>
        </View>
      </View>
      <View style={styles.maincontact}>
        <View style={styles.contactLogo}>
          <Text style={{ fontSize: 20 }}>A</Text>
        </View>
        <View style={styles.contactName}>
          <Text style={{ fontSize: 18, fontWeight: "500" }}>
            Ahmad Padarwala
          </Text>
        </View>
      </View>
      <View style={styles.maincontact}>
        <View style={styles.contactLogo}>
          <Text style={{ fontSize: 20 }}>A</Text>
        </View>
        <View style={styles.contactName}>
          <Text style={{ fontSize: 18, fontWeight: "500" }}>
            Ahmad Padarwala
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Contact;
