import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import { Animated, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Button, Image } from "react-native";
import icon from "./assets/cat.jpg";

export default function Demo() {
  const [location, setLocation] = useState({
    x: null,
    y: null,
    marginLeft: new Animated.Value(10),
    marginTop: new Animated.Value(10),
  });

  function onPress(evt) {
    var x = evt.nativeEvent.locationX;

    console.log(x);

    var y = evt.nativeEvent.locationY;

    setLocation({
      x: x,
      y: y,
      marginLeft: x,
      marginTop: y,
    });
  }
  function onMove(evt) {
    console.log("====================================");
    console.log(location);
    console.log("====================================");
    // setLocation({ marginLeft: x, marginTop: y });
  }
  function onRelease() {
    console.log("Realse!");
  }
  const { marginTop, marginLeft } = location;
  return (
    <SafeAreaView
      onStartShouldSetResponder={() => true}
      onMoveShouldSetResponder={() => true}
      onResponderGrant={onPress}
      onResponderMove={onMove}
      onResponderRelease={onRelease}
      style={styles.container}
    >
      <Animated.Image
        style={[
          styles.imageView,
          { marginLeft: marginLeft, marginTop: marginTop },
        ]}
        source={icon}
      ></Animated.Image>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  imageView: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
});
