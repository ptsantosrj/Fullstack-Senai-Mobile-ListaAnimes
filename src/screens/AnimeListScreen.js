import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import AnimeCard from '../components/AnimeCard';
import styles from '../Styles/AnimeListScreenStyles';
import animes from '../services/AnimesData';

const AnimeListScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={animes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <AnimeCard 
            title={item.title} 
            author={item.author} 
            genre={item.genre} 
            emoji={item.emoji} 
          />
        )}
      />
    </View>
  );
};


export default AnimeListScreen;
