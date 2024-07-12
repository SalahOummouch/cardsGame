import React from "react";
import { View, Image } from "react-native";

export default function Blink({ blinkcards, cardImages }) {
  return (
    <View style={{
      position: "absolute",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      flexWrap: "wrap",
      zIndex: 1000
    }}>
      {blinkcards.map((blinkcard, index) => (
        <Image
          key={index}
          style={{ width: 50, height: 75, margin: 5, resizeMode: "contain" }}
          source={cardImages[blinkcard]}
        />
      ))}
    </View>
  );
}
