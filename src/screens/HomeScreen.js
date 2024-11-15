/** @format */

import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Categories from "../components/Categories";

function HomeScreen(props) {
  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" backgroundColor="white" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ margin: 20, marginVertical: 50 }}
        className="space-y-6 pt=14"
      >
        {/* header */}
        <View className=" via-gray-600 flex-row justify-between items-center mb-2">
          <Image
            source={require("../../assets/images/avatar.png")}
            style={{ height: hp(5), width: hp(5) }}
          />
          <MaterialCommunityIcons name="bell-outline" size={24} color="black" />
        </View>

        {/* greetings */}
        <View className="mx-4 mb-2 space-y-2">
          <Text style={{ fontSize: hp(1.7) }} className="text-gray-700">
            Hello User,
          </Text>
          <View>
            <Text
              style={{ fontSize: hp(3.8) }}
              className="text-gray-600 font-semibold"
            >
              Make your own food,
            </Text>
            <Text
              style={{ fontSize: hp(3.8) }}
              className="text-gray-600 font-semibold"
            >
              Stay at <Text className="text-blue-500">Home</Text>
            </Text>
          </View>
        </View>

        {/* searchbar */}
        <View className="mx-2 flex-row items-center rounded-full bg-black/5 p-[6px]">
          <TextInput
            placeholder="Search Any recipe"
            placeholderTextColor={"grey"}
            style={{ fontSize: hp(1.7) }}
            className="flex-1 text-base mb-1 pl-3 tracking-wider"
          />
          <MaterialCommunityIcons name="magnify" size={24} color="black" />
        </View>

        {/* categories */}
        <View>
          <Categories />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default HomeScreen;
