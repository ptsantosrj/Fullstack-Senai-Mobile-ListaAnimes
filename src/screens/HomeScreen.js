import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from '../Styles/HomeScreenStyles';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Bem-Vindos!</Text>

      <Image 
        source={{ uri: 'https://i.pinimg.com/originals/33/b5/96/33b596755706c28cb85e041d8deeb7df.jpg' }}
        style={styles.image}
      />

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
