import React from "react";
/** Components */
import { TouchableOpacity, Text } from "react-native";
/** Styles */
import containers from "../styles/containers";
import texts from "../styles/texts";
/** Hook */
import { useValue } from "../Context/ValueContext";

const SaveProfileButton = (name, age, weight, height) => {
  const { setCurrentValue } = useValue();

  return (
    <TouchableOpacity
      style={containers.buttonContainer}
      onPress={() => {
        setCurrentValue(name, age, weight, height);
      }}
    >
      <Text style={texts.ButtonText}>Save Profile</Text>
    </TouchableOpacity>
  );
};

export default SaveProfileButton;
