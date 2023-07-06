import React from "react";
/** Components */
import { View, Text } from "react-native";
/** Hooks */
import { useValue } from "../Context/ValueContext";
/** Styles */
import texts from "../styles/texts";
import containers from "../styles/containers";

const DisplayingCurrentValue = () => {
  const { currentValue } = useValue();
  return (
    <View style={containers.currentValuesContainer}>
      <Text style={texts.currentValuesText}>
        currentValue= {JSON.stringify(currentValue)}
      </Text>
    </View>
  );
};

export default DisplayingCurrentValue;
