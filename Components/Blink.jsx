import React from "react";

export default function Blink(blinkcards) {
  return (
    <div>
      <View style={{display : flex, flexDirection: "row",   alignItems: "center", justifyContent: "center"}}>
        {blinkcards.map((blinkcard, index) => (
          <Image
            key={index}
            style={styles.blinkcard}
            source={cardImages[blinkcard]}
          />
        ))}
      </View>
    </div>
  );
}
