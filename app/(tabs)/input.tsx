import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const InputDataProduk = () => {
  // State for storing input values
  const [nama, setNama] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const [jumlah, setJumlah] = useState('');
  const [harga, setHarga] = useState('');

  // Function to handle data submission
  const handleSubmit = () => {
    console.log({
      nama,
      deskripsi,
      jumlah,
      harga,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tambah Produk</Text>

      <TextInput
        style={styles.input}
        placeholder="Nama Produk"
        placeholderTextColor="#6a6a6a"
        value={nama}
        onChangeText={setNama}
      />

      <TextInput
        style={styles.input}
        placeholder="Deskripsi Produk"
        placeholderTextColor="#6a6a6a"
        value={deskripsi}
        onChangeText={setDeskripsi}
        multiline
      />

      <TextInput
        style={styles.input}
        placeholder="Jumlah"
        placeholderTextColor="#6a6a6a"
        value={jumlah}
        onChangeText={setJumlah}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Harga"
        placeholderTextColor="#6a6a6a"
        value={harga}
        onChangeText={setHarga}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Simpan Produk</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#e3f2fd', // Light blue background
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#01579b', // Dark blue text color
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#cfd8dc', // Light gray-blue input background
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginVertical: 8,
    borderRadius: 25,
    fontSize: 16,
    color: '#01579b', // Dark blue text color
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  button: {
    backgroundColor: '#00897b', // Teal button color
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
    elevation: 5, // Android shadow
    shadowColor: '#00897b', // iOS shadow color
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default InputDataProduk;
