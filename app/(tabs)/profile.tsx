import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { products } from "./products";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://i.pinimg.com/736x/2c/7e/19/2c7e197f7b1d2787fe8e709357adbd60.jpg" }}
        style={styles.avatar}
      />
      <Text style={styles.name}>Andy Sachs</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Editar Perfil</Text>
      </TouchableOpacity>

      <View style={styles.productsSection}>
        <Text style={styles.sectionTitle}>Tus compras</Text>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.productItem}>
              <Image source={{ uri: item.image }} style={styles.productImage} />
              <View style={styles.productInfo}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
              </View>
            </View>
          )}
          contentContainerStyle={styles.flatListContent}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F0FF",
    padding: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 4,
    borderColor: "#BAACEB",
    alignSelf: "center",
    marginTop: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#5F5AA5",
    textAlign: "center",
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#5F5AA5",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    alignSelf: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  productsSection: {
    flex: 1, 
    width: "100%",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#5F5AA5",
    marginBottom: 10,
  },
  flatListContent: {
    paddingBottom: 20,
  },
  productItem: {
    flexDirection: "row",
    backgroundColor: "#E5E0F7",
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    width: "100%",
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 12,
  },
  productInfo: {
    flex: 1,
    justifyContent: "center",
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4A4270",
  },
  productPrice: {
    fontSize: 14,
    color: "#7B6CA3",
    marginTop: 4,
  },
});