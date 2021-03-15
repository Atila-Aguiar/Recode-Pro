import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Produto = ({ info, promo, preco }) => {
  return(
      <View style={styles.container}>    
          <Text>Produto: {info}</Text>
          <Text><strike>{promo}</strike></Text>
          <Text>Por apenas {preco}</Text>
      </View>
  );
}

export default Produto;

const styles = StyleSheet.create({
    container:{
        flex: 0.80,
        padding: 10,
        margin: 10,
        borderRadius: 10,
        backgroundColor: '#ABC'
    }
})