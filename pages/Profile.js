import React from "react";
/** Style*/
import containers from "../styles/containers";
import texts from "../styles/texts";
import Identifiers from "../components/Identifiers";
/** Components*/
import SaveProfileButton from "../components/SaveProfileButton";
import { Text, View } from "react-native";
/**Hooks */
import { useState } from "react";

export default function Profile() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);

  const updateName = (text) => {
    setName(text);
  };
  const updateAge = (text) => {
    setAge(text);
  };
  const updateWeight = (text) => {
    setWeight(text);
  };
  const updateHeight = (text) => {
    setHeight(text);
  };

  return (
    <View style={containers.pageContainer}>
      <Identifiers
        updateName={updateName}
        updateAge={updateAge}
        updateWeight={updateWeight}
        updateHeight={updateHeight}
      />
      <SaveProfileButton
        name={name}
        age={age}
        weight={weight}
        height={height}
      />
    </View>
  );
}
