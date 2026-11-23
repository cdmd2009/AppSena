import { View, StyleSheet, Text } from "react-native";

const inicio = () =>{
  return(<View style={styles.contenedor}><Text style={styles.titulo} >App Sena</Text></View>)
}

export default inicio

const styles = StyleSheet.create({
  titulo:{
    fontSize:30,
    color: '#fd0909'
  },
  contenedor:{
    flex: 1,
    alignItems:"center",
    justifyContent:"center"
  }
})