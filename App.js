import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Button, Image } from "react-native";
import iconCat from "./assets/cat.jpg";
import iconMouse from "./assets/images.jpg";

export default function App() {
  const left = Math.min(Math.random() * 300, Dimensions.get("window").width);
  const top = Math.min(Math.random() * 500, Dimensions.get("window").height);

  const [location, setLocation] = useState({
    marginLeft: new Animated.Value(10),
    marginTop: new Animated.Value(10),
  });

  const [locationMouse1, setLocationMouse1] = useState({
    marginLeft: left,
    marginTop: top,
  });

  const [locationMouse2, setLocationMouse2] = useState({
    marginLeft: left,
    marginTop: top,
  });

  const [locationMouse3, setLocationMouse3] = useState({
    marginLeft: left,
    marginTop: top,
  });

  function onPress(evt) {
    var x = evt.nativeEvent.locationX;
    var y = evt.nativeEvent.locationY;

    var x1 = Math.random() * 300;
    var y1 = Math.random() * 300;
    var x2 = Math.random() * 300;
    var y2 = Math.random() * 300;
    var x3 = Math.random() * 300;
    var y3 = Math.random() * 300;

    console.log("Image1", x1, y1);
    console.log("Image2", x2, y2);
    console.log("Image3", x3, y3);

    setLocation({
      marginLeft: x,
      marginTop: y,
    });

    setLocationMouse1({
      marginLeft1: x1,
      marginTop1: y1,
    });
    setLocationMouse2({
      marginLeft2: x2,
      marginTop2: y2,
    });
    setLocationMouse3({
      marginLeft1: x3,
      marginTop1: y3,
    });
  }

  function onMove(evt) {
    console.log("====================================");
    console.log(location);
    console.log("====================================");
  }
  function onRelease() {
    console.log("Realse!");
  }

  const { marginTop, marginLeft } = location;
  const { marginTop1, marginLeft1 } = locationMouse1;
  const { marginTop2, marginLeft2 } = locationMouse2;
  const { marginTop3, marginLeft3 } = locationMouse3;

  return (
    <SafeAreaView
      onStartShouldSetResponder={() => true}
      onMoveShouldSetResponder={() => true}
      onResponderGrant={onPress}
      onResponderMove={onMove}
      style={styles.container}
    >
      <Animated.Image
        source={iconCat}
        style={[
          {
            marginLeft: marginLeft,
            marginTop: marginTop,
          },
          styles.imageView,
          {
            position: "absolute",
            top: Math.floor(Math.random() * 10),
          },
        ]}
      />
      <Animated.Image
        source={iconMouse}
        style={[
          {
            marginLeft: marginLeft1,
            marginTop: marginTop1,
          },
          styles.imageView,
        ]}
      />
      <Animated.Image
        source={iconMouse}
        style={[
          {
            marginLeft: marginLeft2,
            marginTop: marginTop2,
          },
          styles.imageView,
        ]}
      />
      <Animated.Image
        source={iconMouse}
        style={[
          {
            marginLeft: marginLeft3,
            marginTop: marginTop3,
          },
          styles.imageView,
        ]}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageView: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});
