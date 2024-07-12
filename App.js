import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Alert, StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Ronda from "./Components/Ronda";
import Blink from "./Components/Blink";

const cardImages = {
  "00": require("./assets/cartes/00.gif"),
  "01": require("./assets/cartes/01.gif"),
  "02": require("./assets/cartes/02.gif"),
  "03": require("./assets/cartes/03.gif"),
  "04": require("./assets/cartes/04.gif"),
  "05": require("./assets/cartes/05.gif"),
  "06": require("./assets/cartes/06.gif"),
  "07": require("./assets/cartes/07.gif"),
  "08": require("./assets/cartes/08.gif"),
  "09": require("./assets/cartes/09.gif"),
  "10": require("./assets/cartes/10.gif"),
  "11": require("./assets/cartes/11.gif"),
  "12": require("./assets/cartes/12.gif"),
  "13": require("./assets/cartes/13.gif"),
  "14": require("./assets/cartes/14.gif"),
  "15": require("./assets/cartes/15.gif"),
  "16": require("./assets/cartes/16.gif"),
  "17": require("./assets/cartes/17.gif"),
  "18": require("./assets/cartes/18.gif"),
  "19": require("./assets/cartes/19.gif"),
  "20": require("./assets/cartes/20.gif"),
  "21": require("./assets/cartes/21.gif"),
  "22": require("./assets/cartes/22.gif"),
  "23": require("./assets/cartes/23.gif"),
  "24": require("./assets/cartes/24.gif"),
  "25": require("./assets/cartes/25.gif"),
  "26": require("./assets/cartes/26.gif"),
  "27": require("./assets/cartes/27.gif"),
  "28": require("./assets/cartes/28.gif"),
  "29": require("./assets/cartes/29.gif"),
  "30": require("./assets/cartes/30.gif"),
  "31": require("./assets/cartes/31.gif"),
  "32": require("./assets/cartes/32.gif"),
  "33": require("./assets/cartes/33.gif"),
  "34": require("./assets/cartes/34.gif"),
  "35": require("./assets/cartes/35.gif"),
  "36": require("./assets/cartes/36.gif"),
  "37": require("./assets/cartes/37.gif"),
  "38": require("./assets/cartes/38.gif"),
  "39": require("./assets/cartes/39.gif")
};

export default function App() {
  const initialDistributedCards = [
    "00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10",
    "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21",
    "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32",
    "33", "34", "35", "36", "37", "38", "39"
  ];

  const [currentTurn, setCurrentTurn] = useState(1);
  const [distributedCards, setDistributedCards] = useState(initialDistributedCards);
  const [player1, setPlayer1] = useState([]);
  const [player2, setPlayer2] = useState([]);
  const [blinkCards, setBlinkCards] = useState([]);

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

   
  };

  const cardToBlink = (card, player) => {
    if (player !== currentTurn) {
      Alert.alert("Wa Tsna Asahbi !");
      return;
    }

    setBlinkCards((prevBlinkCards) => [...prevBlinkCards, card]);

    if (player === 1) {
      setPlayer1((prevPlayer1) => prevPlayer1.filter((c) => c !== card));
    } else if (player === 2) {
      setPlayer2((prevPlayer2) => prevPlayer2.filter((c) => c !== card));
    }

    setCurrentTurn(currentTurn === 1 ? 2 : 1);
  };

  const restartGame = () => {
    setCurrentTurn(1);
    setDistributedCards(initialDistributedCards);
    setPlayer1([]);
    setPlayer2([]);
    setBlinkCards([]);
    Alert.alert( "Awa chti Tbrhich!");
  };

  const confirmRestartGame = () => {
    Alert.alert(
      'Confirm Restart',
      'Wach bseh baghi t3awd l game?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        { text: 'Awdi gha sir end inak', onPress: () => restartGame() }
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Solitaire</Text>
      <View style={styles.playerContainer}>
        <Text style={styles.playerText}>Joueur 1:</Text>
        <View style={styles.cardContainer}>
          {player1.map((card, index) => (
            <TouchableOpacity key={index} onPress={() => cardToBlink(card, 1)}>
              <Image
                style={styles.card}
                source={cardImages[card]}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <Ronda />
      <Blink blinkcards={blinkCards} cardImages={cardImages} />

      <View style={styles.playerContainer}>
        <Text style={styles.playerText}>Joueur 2:</Text>
        <View style={styles.cardContainer}>
          {player2.map((card, index) => (
            <TouchableOpacity key={index} onPress={() => cardToBlink(card, 2)}>
              <Image
                style={styles.card}
                source={cardImages[card]}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={distributeCards}>
        <Text style={styles.buttonText}>Distribuer les cartes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={confirmRestartGame}>
        <Text style={styles.buttonText}>Redémarrer le jeu</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop :20,
    color: "#333",
  },
  playerContainer: {
    marginVertical: 20,
    alignItems: "center",
    width: "100%",
  },
  playerText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  card: {
    width: 50,
    height: 75,
    margin: 5,
    resizeMode: "contain",
  },
  button: {
    backgroundColor: "#6200ee",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});