import React from "react";
/** Contexts */
import ValueProvider from "./Context/ValueContext";
/**Nvigation */
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
/** Pages */
import Profile from "./pages/Profile";
import BMI from "./pages/BMI";
import Age from "./pages/Age";

const Tab = createBottomTabNavigator();

export default function App() {
  const data = { name: "", age: 0, weight: 0, height: 0 };

  return (
    <ValueProvider value={data}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Profile" component={Profile} />
          <Tab.Screen name="Age" component={Age} />
          <Tab.Screen name="BMI" component={BMI} />
        </Tab.Navigator>
      </NavigationContainer>
    </ValueProvider>
  );
}
