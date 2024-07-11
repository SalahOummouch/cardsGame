import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

function Ronda  () {
  return (
    <View style={styles.container}>
      
      <Image 
        source={require('../assets/profile (1).gif')} 
        style={[styles.playerIcon, styles.topIcon]} 
      />
      
     
      <Image 
        source={require('../assets/ronda_maroc.png')} 
        style={styles.image} 
      />

      
      <Image 
        source={require('../assets/profile.gif')} 
        style={[styles.playerIcon, styles.bottomIcon]} 
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
    height: 400,
    resizeMode: 'contain',
  },
  playerIcon: {
    position: 'absolute',
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  topIcon: {
    top: 10, 
    left: 10, 
  },
  bottomIcon: {
    bottom: 10, 
    right: 10, 
  },
});

export default Ronda;
