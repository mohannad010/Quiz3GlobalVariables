import React from "react";
/** Components */
import { Text, View } from "react-native";
/** Hook */
import { useValue } from "../Context/ValueContext";

const Age = () => {
  const { currentValue } = useValue();
  console.log(currentValue);
  return (
    <View style={{ fontSize: 18 }}>
      <Text style={{ fontSize: 18 }}>Age Calculator</Text>
      <Text style={{ fontSize: 18 }}>age in years: {currentValue.age}</Text>
      <Text style={{ fontSize: 18 }}>
        age is weeks: {currentValue.age * 52.176}
      </Text>
      <Text style={{ fontSize: 18 }}>
        age in days: {currentValue.age * 365.24}
      </Text>
    </View>
  );
};

export default Age;
