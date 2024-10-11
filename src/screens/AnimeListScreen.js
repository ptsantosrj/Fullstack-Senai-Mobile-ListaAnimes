import React,{ useState } from 'react';
import { View, TextInput, FlatList, StyleSheet } from 'react-native';
import AnimeCard from '../components/AnimeCard';
import styles from '../Styles/AnimeListScreenStyles';
import animes from '../services/AnimesData';
import AnimeSearch from '../services/AnimeSearch';

const AnimeListScreen = () => {
  const { searchQuery, setSearchQuery, filteredData } = AnimeSearch(animes);

  return (
    
    <View style={styles.container}>

      <TextInput
        style={styles.searchInput}
        placeholder="Pesquisar animes..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <FlatList
        data={filteredData}
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
