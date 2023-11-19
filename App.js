
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.box}>Hello <Text style={styles.test}>World!</Text></Text>

    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor:'green',
  },
  test: {
    color:'green',
  },
  container: {
    backgroundColor:"plum",
    flex:1,
    padding:'20px'
  },
});
