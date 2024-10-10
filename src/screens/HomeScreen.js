import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import styles from '../Styles/HomeScreenStyles';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-Vindo!</Text>
      <Text style={styles.title}>Catálogo de Animes!</Text>
      <Text style={styles.subtitle}>Explore os melhores animes agora mesmo.</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AnimeListScreen')}
      >
        <Text style={styles.buttonText}>Ver Lista de Animes</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
