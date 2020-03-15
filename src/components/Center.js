import React from "react";
import { View } from "react-native";


const Center = ({ children }) => (
  <View
    style={{
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    }}
  >
    {children}
  </View>
);


export default Center