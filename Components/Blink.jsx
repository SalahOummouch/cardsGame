import React from "react";
import { View, Image } from "react-native";

export default function Blink({ blinkcards, cardImages }) {
  return (
    <View style={{position: "absolute", display : "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", flexWrap: "wrap", zIndex:1000}}>
      {blinkcards.map((blinkcard, index) => (
        <Image
          key={index}
        
          source={cardImages[blinkcard]}
        />
      ))}
    </View>
  );
}
