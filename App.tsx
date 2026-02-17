import { StyleSheet, Text, View } from 'react-native';

const App = () => {
  return (
    <>
      <View style={styles.contenedor}>
        <View style={styles.caja1}></View>
        <View style={styles.caja2}></View>
        <View style={styles.caja3}></View>
        <View style={styles.caja4}></View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: 'cornflowerblue',
    // flex: 1 = hace que crezca verticalmente, es decir; de arriba hacia abajo
    flex: 1,
    // Direccionamiento con FLEX, por default en MOBILE es COLUMN
    // flexDirection: 'row',
    // flexDirection: 'column',
  },

  caja1: {
    padding: 20,
    backgroundColor: 'navy',
  },

  caja2: {
    padding: 20,
    backgroundColor: 'yellow',
  },

  caja3: {
    padding: 20,
    backgroundColor: 'green',
  },

  caja4: {
    padding: 20,
    backgroundColor: 'teal',
  },
});

export default App;
