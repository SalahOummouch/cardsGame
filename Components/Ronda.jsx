import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Ronda = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/ronda_maroc.png')}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    position: 'relative',
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: 'contain',
  },
  playerIcon: {
    position: 'absolute',
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  topIcon: {
    top: 20,
    left: 10,
  },
  bottomIcon: {
    bottom: 10,
    right: 10,
  },
});

export default Ronda;
