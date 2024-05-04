import React from "react";
import { View, Text } from "react-native";
import { styles } from "../../styles/style";

const ViewCustomer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.maincustomer}>
        <View style={styles.customerLogo}>
          <Text style={{ fontSize: 26, textTransform: "uppercase" }}>a</Text>
        </View>
        <View style={styles.customerName}>
          <Text style={{ fontSize: 18, fontWeight: "500" }}>ahmad</Text>
        </View>
      </View>
    </View>
  );
};

export default ViewCustomer;
