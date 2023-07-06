import React from "react";
/** Components */
import { Text, View } from "react-native";
/** Hook */
import { useValue } from "../Context/ValueContext";

const BMI = () => {
  const { currentValue } = useValue();

  return (
    <View style={{ fontSize: 18 }}>
      <Text style={{ fontSize: 18 }}>BMI Calculator</Text>
      <Text style={{ fontSize: 18 }}>height: {currentValue.height}</Text>
      <Text style={{ fontSize: 18 }}>weight: {currentValue.weight}</Text>
      <Text style={{ fontSize: 18 }}>
        BMI:{" "}
        {(currentValue.weight / (currentValue.height * currentValue.height)) *
          703}
      </Text>
    </View>
  );
};

export default BMI;
