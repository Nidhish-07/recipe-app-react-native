import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { RootStackParamsList } from "./RootParamsLists";
// import { useNavigation } from "@react-navigation/native";

// type categoriesScreenProps = NativeStackNavigationProp<
//   RootStackParamsList,
//   "Categories"
// >;
type Props = {};

type categoriesScreenProps = NativeStackScreenProps<RootStackParamsList>;

const CategoriesScreen = ({ navigation }: categoriesScreenProps) => {
  // const { navigation } = props;
  // const navigation = useNavigation<categoriesScreenProps>();
  const pressHandler = (itemData: any) => {
    navigation.navigate("Overview", { categoryId: itemData.item.id });
  };
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <CategoryGridTile
          title={itemData.item.title}
          color={itemData.item.color}
          onPress={pressHandler.bind(this,itemData)}
        ></CategoryGridTile>
      )}
      numColumns={2}
    ></FlatList>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
