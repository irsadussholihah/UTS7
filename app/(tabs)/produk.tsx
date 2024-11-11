import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native';

const Produk = () => {
  // State untuk produk yang diinput sebelumnya
  const [produkList] = useState([
    {
      id: 1,
      nama: 'Produk 1',
      deskripsi: 'Deskripsi Produk 1',
      harga: 100000,
    },
    {
      id: 2,
      nama: 'Produk 2',
      deskripsi: 'Deskripsi Produk 2',
      harga: 150000,
    },
    {
      id: 3,
      nama: 'Produk 3',
      deskripsi: 'Deskripsi Produk 3',
      harga: 200000,
    },
    {
      id: 4,
      nama: 'Produk 4',
      deskripsi: 'Deskripsi Produk 4',
      harga: 250000,
    },
    {
      id: 5,
      nama: 'Produk 5',
      deskripsi: 'Deskripsi Produk 5',
      harga: 300000,
    },
    {
      id: 6,
      nama: 'Produk 6',
      deskripsi: 'Deskripsi Produk 6',
      harga: 350000,
    },
  ]);

  return (
    <ScrollView style={styles.container}>
      {/* Menu Kategori */}
      <View style={styles.kategoriMenu}>
        <TouchableOpacity style={styles.kategoriItem}>
          <Text style={styles.kategoriText}>Kategori 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.kategoriItem}>
          <Text style={styles.kategoriText}>Kategori 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.kategoriItem}>
          <Text style={styles.kategoriText}>Kategori 3</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.judul}>Produk Toko Kami</Text>

      {/* Menampilkan daftar produk dalam grid 2 kolom */}
      <FlatList
        data={produkList}
        renderItem={({ item }) => (
          <View style={styles.produkCard}>
            {/* Detail Produk */}
            <View style={styles.produkDetail}>
              <Text style={styles.namaProduk}>{item.nama}</Text>
              <Text style={styles.hargaProduk}>Rp {item.harga.toLocaleString()}</Text>
              <Text style={styles.deskripsiProduk}>{item.deskripsi}</Text>
            </View>

            {/* Tombol Beli */}
            <TouchableOpacity style={styles.tombolBeli}>
              <Text style={styles.teksTombol}>Beli Sekarang</Text>
            </TouchableOpacity>
          </View>
        )}
        numColumns={2} // Display 2 products per row for better layout
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.grid}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3f2fd', // Light blue background
    padding: 20,
  },
  kategoriMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  kategoriItem: {
    backgroundColor: '#01579b', // Dark blue for category items
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  kategoriText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  judul: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#01579b', // Dark blue color for title
  },
  grid: {
    justifyContent: 'space-between',
  },
  produkCard: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    marginBottom: 15,
    overflow: 'hidden',
    elevation: 4,
    marginHorizontal: 5,
    flex: 1,
  },
  produkDetail: {
    padding: 15,
  },
  namaProduk: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#01579b', // Dark blue color for product name
  },
  hargaProduk: {
    fontSize: 14,
    color: '#0277bd', // Slightly lighter blue for price
    fontWeight: '500',
    marginBottom: 10,
  },
  deskripsiProduk: {
    fontSize: 12,
    color: '#757575',
    marginBottom: 15,
  },
  tombolBeli: {
    backgroundColor: '#00897b', // Teal button color
    paddingVertical: 12,
    marginBottom: 10,
    alignItems: 'center',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  teksTombol: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Produk;
