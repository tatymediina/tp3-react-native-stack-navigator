import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function DashboardScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>STELLA SHOPP</Text>
      <Text style={styles.subtitle}>Bienvenido a tu aplicación</Text>
      <Link href="/(tabs)/products" style={styles.link}>
        Ver productos
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF', 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#5F5AA5',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#BAACEB', 
    marginBottom: 24,
  },
  link: {
    fontSize: 16,
    color: '#FFFFFF',
    backgroundColor: '#5F5AA5', 
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 10,
    textAlign: 'center',
    overflow: 'hidden',
  },
});
