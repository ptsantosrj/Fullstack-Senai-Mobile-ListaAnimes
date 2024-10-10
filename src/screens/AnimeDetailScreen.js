import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from '../Styles/AnimeDetailStyles';

const AnimeDetailScreen = ({ route }) => {
  const { title, author, genre, emoji } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>{emoji}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.author}>Autor: {author}</Text>
      <Text style={styles.genre}>Gênero: {genre}</Text>
      <Text style={styles.details}>Em breve mais informações</Text>
    </View>
  );
};

export default AnimeDetailScreen;
