import React from 'react'
import { View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native'

const Home = ( props ) => {
    const Navega = props.navigation


    return (
      <SafeAreaView 
      style={{
        flex: 1,
        backgroundColor: "#847D65",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <Image style={{flex: 0.8 ,width: '100%'}} source={require('../../../assets/Guerreiro.gif')} />
        <View style={{flex: 0.2}}>
            <TouchableOpacity 
            style={{
              backgroundColor: "#BBB",
              width: 100,
              padding: 20,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 5,
            }}
            onPress={() => Navega.navigate("Cadastro")}>
                <Text>Iniciar</Text>
            </TouchableOpacity>
        </View>
        <Text style={{fontSize:16}}>
          **Todos os gifs foram tirados do Google Imagens**
        </Text>
      </SafeAreaView>
    )
}

export default Home
