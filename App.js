import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const RestaurantCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 0 ? count - 1 : 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador de Pessoas</Text>
      <Text style={styles.countText}>{count}</Text>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={increment} style={styles.button}>
          <Text style={styles.buttonText}>Entrada</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={decrement} style={[styles.button, styles.decrementButton]}>
          <Text style={styles.buttonText}>Saída</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f3f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#1e272e',
    marginBottom: 30,
  },
  countText: {
    fontSize: 90,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 40,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  button: {
    backgroundColor: '#1abc9c', // Cor verde mais suave para o botão de "Entrada"
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25, // Bordas arredondadas mais suaves
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6, // Sombra mais visível
  },
  decrementButton: {
    backgroundColor: '#e74c3c', // Cor vermelha mais forte para o botão de "Saída"
  },
  buttonText: {
    fontSize: 22,
    color: '#ffffff',
    fontWeight: '700', // Texto mais grosso
  },
});

export default RestaurantCounter;
