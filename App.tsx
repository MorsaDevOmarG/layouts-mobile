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

    // Poner FLEX: 1 en todos los hijos, hace que crezcan en la misma proporción, si el padre no tiene el FLEX: 1, no van a crecer en su totalidad.
  },

  caja1: {
    padding: 20,
    backgroundColor: 'navy',
    flex: 1,
  },

  caja2: {
    padding: 20,
    backgroundColor: 'yellow',
    flex: 1,
  },

  caja3: {
    padding: 20,
    backgroundColor: 'green',
    flex: 1,
  },

  caja4: {
    padding: 20,
    backgroundColor: 'teal',
    flex: 2,
  },
});

export default App;
