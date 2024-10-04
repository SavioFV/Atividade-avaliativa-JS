import React, { useState } from 'react';
import { View, Text, Slider, Switch, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';  // Novo import do Picker

const PreferencesScreen = () => {
  // Estados do aplicativo
  const [theme, setTheme] = useState('Claro');
  const [fontSize, setFontSize] = useState(16);
  const [nightMode, setNightMode] = useState(false);

  // Função para resetar preferências
  const resetPreferences = () => {
    setTheme('Claro');
    setFontSize(16);
    setNightMode(false);
  };

  return (
    <View style={styles.container}>
      {/* Título */}
      <Text style={styles.title}>Configurações de Preferências</Text>

      {/* Picker para seleção do tema */}
      <Text style={styles.label}>Selecione o Tema:</Text>
      <Picker
        selectedValue={theme}
        style={styles.picker}
        onValueChange={(itemValue) => setTheme(itemValue)}
      >
        <Picker.Item label="Claro" value="Claro" />
        <Picker.Item label="Escuro" value="Escuro" />
        <Picker.Item label="Automático" value="Automático" />
      </Picker>

      {/* Slider para ajuste do tamanho da fonte */}
      <Text style={styles.label}>Tamanho da Fonte: {fontSize}</Text>
      <Slider
        style={styles.slider}
        minimumValue={12}
        maximumValue={30}
        step={1}
        value={fontSize}
        onValueChange={(value) => setFontSize(value)}
      />

      {/* Switch para o Modo Noturno */}
      <Text style={styles.label}>
        Modo Noturno: {nightMode ? 'Ativado' : 'Desativado'}
      </Text>
      <Switch
        value={nightMode}
        onValueChange={(value) => setNightMode(value)}
      />

      {/* Botão para resetar preferências */}
      <Button title="Resetar Preferências" onPress={resetPreferences} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  picker: {
    height: 50,
    marginBottom: 20,
  },
  slider: {
    width: '100%',
    height: 40,
    marginBottom: 20,
  },
});

export default PreferencesScreen;
