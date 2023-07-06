import React from "react";
/** Components */
import { TextInput, View, Text } from "react-native";
/** Styles */
import containers from "../styles/containers";
const Identifier = ({
  characheristic,
  placeholderText,
  backgroundColor,
  update,
  id,
}) => {
  return (
    <View style={containers.identifierContainer}>
      <View style={containers.charataristicTextContainer}>
        <Text>{characheristic}</Text>
      </View>
      <View style={containers.textInputContainer}>
        <TextInput
          style={{ backgroundColor: backgroundColor, width: 200 }}
          placeholder={placeholderText}
          placeholderTextColor="dimgrey"
          onChangeText={(text) => {
            if (id == "name") {
              update(text);
            } else {
              update(parseInt(text));
            }
          }}
        />
      </View>
    </View>
  );
};

export default Identifier;
