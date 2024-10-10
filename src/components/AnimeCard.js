import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../Styles/AnimeCardStyles';

const AnimeCard = ({ title, author, genre, emoji }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('AnimeDetailScreen', { title, author, genre, emoji })}>
      <View style={styles.card}>
        <Text style={styles.emoji}>{emoji}</Text>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.author}>{author}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AnimeCard;
