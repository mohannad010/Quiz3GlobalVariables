import React from "react";
/** Style*/
import containers from "../styles/containers";
/** Components*/
import Identifier from "./Identifier";
import DisplayingCurrentValue from "./DisplayingCurrentValue";
import { Text, View } from "react-native";

export default function Identifiers({
  updateName,
  updateAge,
  updateWeight,
  updateHeight,
}) {
  return (
    <View style={containers.mainBodyContainer}>
      <DisplayingCurrentValue />
      <Identifier
        characheristic="name"
        placeholderText="Write your name here"
        backgroundColor="chartreuse"
        update={updateName}
        id="name"
      />
      <Identifier
        characheristic="age"
        placeholderText="Write your age here"
        backgroundColor="lightskyblue"
        update={updateAge}
        id="age"
      />
      <Identifier
        characheristic="weight"
        placeholderText="Write your weight in lbs here"
        backgroundColor="pink"
        update={updateWeight}
        id="weight"
      />
      <Identifier
        characheristic="height"
        placeholderText="Write your height in inches here"
        backgroundColor="cyan"
        update={updateHeight}
        id="height"
      />
    </View>
  );
}
