import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Alert, StyleSheet, Text, View, Button, Image } from "react-native";
import Ronda from "./Components/Ronda";

export default function App() {

    const [distributedCards, setDistributedCards] = useState([
      "00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10",
      "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21",
      "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32",
      "33", "34", "35", "36", "37", "38", "39"
    ]);

    const [player1, setPlayer1] = useState([]);
    const [player2, setPlayer2] = useState([]);

    const distributeCards = () => {
      const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      };

      const shuffledCards = shuffleArray([...distributedCards]);

      const cardsPlayer1 = shuffledCards.slice(0, 4);
      const cardsPlayer2 = shuffledCards.slice(4, 8);

      setPlayer1(cardsPlayer1);
      setPlayer2(cardsPlayer2);
      setDistributedCards(shuffledCards.slice(8));

      Alert.alert(
        "Distribution des cartes",
        "Les cartes ont été distribuées avec succès !"
      );
    };

    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Button title="Distribuer les cartes" onPress={distributeCards} />

        <View style={{ marginTop: 20 }}>
          <Text>Joueur 1:</Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {player1.map((card, index) => (
              <Image
                key={index}
                style={{ width: "25%", height: 150 }}
                source={require(`./assets/cartes/22.gif`)}
              />
            ))}
          </View>
        </View>
        <Ronda />

        <View style={{ marginTop: 20 }}>
          <Text>Joueur 2:</Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {player2.map((card, index) => (
              <Image
                key={index}
                style={{ width: "25%", height: 150 }}
                source={require(`./assets/cartes/00.gif`)}
              />
            ))}
          </View>
        </View>
      </View>
    );
  };
