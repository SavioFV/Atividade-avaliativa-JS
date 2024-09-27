import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function CronometroApp() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  const resetTime = () => {
    setTime(0);
    setRunning(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.time}>
        {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
        {("0" + Math.floor((time / 1000) % 60)).slice(-2)}:
        {("0" + ((time / 10) % 100)).slice(-2)}
      </Text>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={() => setRunning(true)} style={styles.button}>
          <Text style={styles.buttonText}>Iniciar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setRunning(false)} style={styles.button}>
          <Text style={styles.buttonText}>Pausar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={resetTime} style={styles.button}>
          <Text style={styles.buttonText}>Reiniciar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000', // Fundo preto
  },
  time: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#FF0000', // Números vermelhos
    marginBottom: 30,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%', 
    marginTop: 20,
  },
  button: {
    margin: 10,
    paddingVertical: 15,
    paddingHorizontal: 25,
    backgroundColor: '#FFFFFF', // Botões brancos
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    elevation: 5,
  },
  buttonText: {
    color: '#000000', // Letras pretas
    fontSize: 20,
    fontWeight: 'bold',
  },
});
