import React from 'react'
import { useSelector } from 'react-redux'
import { View, Text, TouchableOpacity, ImageBackground, SafeAreaView } from 'react-native'

const Historia = ( props ) => {
    const Navega = props.navigation

    const StoreNome = useSelector(state => state.nome)


    return (
      <SafeAreaView 
      style={{
        flex: 1,
        backgroundColor: "#032031",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <ImageBackground style={{flex: 0.8 ,width: '100%',alignItems: "center",
        justifyContent: "center",}} source={require('../../../assets/MagoDeCura.gif')}>
          <Text style={{color: '#FFF', fontSize: 20, padding:20}}>
              {StoreNome[0]} foi convocado pelo RecodePro a entrar pro exercito 
          </Text>
          <Text style={{color: '#FFF', fontSize: 20, padding:20}}>
              Se destacando no exercito, o Grande Mestre Samuel especializado na matrix de cura, descidiu passar seus ensinamentos e o ensinou a magia basica de cura
          </Text>
          <Text style={{color: '#FFF', fontSize: 20, padding:20}}>
              Ele precisava de um microondas, então em troca queria uma lista dos produtos da loja mais proxima
          </Text>
          <Text style={{color: '#FFF', fontSize: 20, padding:20}}>
              Sua missão: Atravessar a foresta da morte para pegar uma lista de compras da loja FullStackEletro
          </Text>
        </ImageBackground>


        <View style={{flex: 0.2}}>
            <TouchableOpacity 
            style={{
              backgroundColor: "#BBB",
              width: 150,
              padding: 20,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 5,
            }}
            onPress={() => Navega.navigate("Jogo")}>
                <Text>Iniciar Missão</Text>
            </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
}

export default Historia
