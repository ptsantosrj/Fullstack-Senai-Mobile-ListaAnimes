import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    card: {
      backgroundColor: '#fff',
      padding: 20,
      marginVertical: 10,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 5,
      elevation: 5,
      flexDirection: 'row',
      alignItems: 'center',
    },
    emoji: {
      fontSize: 24,
      marginRight: 10,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    author: {
      fontSize: 16,
      color: '#555',
    },
  });

  export default styles;