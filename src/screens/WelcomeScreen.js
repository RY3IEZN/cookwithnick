/** @format */

import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

function WelcomeScreen(props) {
  const ring1padding = useSharedValue(1);
  const ring2padding = useSharedValue(1);

  const navigation = useNavigation();

  useEffect(() => {
    ring1padding.value = 1;
    ring2padding.value = 1;
    setTimeout(
      () => (ring1padding.value = withSpring(ring1padding.value * hp(5))),
      100
    );
    setTimeout(
      () => (ring2padding.value = withSpring(ring2padding.value * hp(5.5))),
      300
    );
    setTimeout(() => {
      navigation.navigate("home");
    }, 2500);
  }, []);

  return (
    <View className="flex-1 justify-center items-center space-y-10 bg-blue-500">
      <StatusBar translucent />
      {/* rings */}
      <Animated.View
        className="bg-white/20 rounded-full"
        style={{ padding: ring2padding }}
      >
        <Animated.View
          className="bg-white/20 rounded-full"
          style={{ padding: ring1padding }}
        >
          <Image
            source={require("../../assets/images/Welcome.png")}
            style={{ width: hp(20), height: hp(20) }}
          />
        </Animated.View>
      </Animated.View>
      {/* title */}
      <View className="flex items-center space-y-2">
        <Text
          style={{ fontSize: hp(7) }}
          className="text-white font-bold tracking-widest text-6xl"
        >
          CWNick
        </Text>
        <Text
          style={{ fontSize: hp(2) }}
          className="text-white font-bold tracking-widest text-lg"
        >
          Cook with Nick
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default WelcomeScreen;
