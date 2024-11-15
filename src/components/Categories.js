/** @format */

import React from "react";
import { View, StyleSheet, Text, ScrollView, Button } from "react-native";
import { CategoryData } from "../constants/Data";

function Categories(props) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="space-x-4"
      contentContainerStyle={{ paddingHorizontal: 15 }}
    >
      {CategoryData.map((cat, index) => {
        return <Button title={cat.name} />;
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default Categories;
