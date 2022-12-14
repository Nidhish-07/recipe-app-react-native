import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import React, { ReactNode } from "react";
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import { RootStackParamsList } from "./screens/RootStackParamsList";
import MealDetailScreen from "./screens/MealDetailScreen";

const Stack = createNativeStackNavigator<RootStackParamsList>();

export default function App() {
  return (
    <React.Fragment>
      <StatusBar style="light"></StatusBar>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#402101" },
            headerTintColor: "#fff",
            contentStyle: { backgroundColor: "#845628" },
          }}
        >
          <Stack.Screen
            name="Categories"
            component={CategoriesScreen}
            options={{
              title: "All Categories",
            }}
          ></Stack.Screen>
          <Stack.Screen
            name="Overview"
            component={MealsOverviewScreen}
            // options={({ route, navigation }): NativeStackNavigationOptions => {
            //   const catId = route.params.categoryId;
            //   return { title: catId };
            // }}
          ></Stack.Screen>
          <Stack.Screen
            name="MealDetail"
            component={MealDetailScreen}
            // options={{
            //   headerRight: (): ReactNode => {
            //     return <Button title="Tap"></Button>;
            //   },
            // }}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({});
