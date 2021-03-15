import React, {useState} from 'react'
import { View, Text, TouchableOpacity, TextInput, SafeAreaView, Image } from 'react-native'
import { useDispatch } from 'react-redux'

const Cadastro = ( props ) => {
    
    const [nome, setNome] = useState('')

    const dispatch = useDispatch()
    function TrocarNome(){
        console.log(nome)
        dispatch({  type:"Adicionar_Nome",
                    nome:nome
        })
    }

    const Navega = props.navigation

    return (
        <SafeAreaView style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#847D65",
        }}>
            <Image style={{flex: 0.8 ,width: '100%'}} source={require('../../../assets/Guerreiro.gif')} />
            <View style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#847D65",
            }}>
                <TextInput 
                style={{
                backgroundColor: "#BBB",
                borderRadius: 5,
                padding: 15, 
                }}
                
                placeholder="Digite seu nome" 
                onChangeText={(text)=> setNome(text)}
                />
            </View>
            <View>
                <TouchableOpacity 
                style={{
                    backgroundColor: "#BBB",
                    margin: 10,
                    padding: 15,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 5,
                    }} 
                onPress={() => {
                    TrocarNome() 
                    Navega.navigate("Historia")}}
                >
                    <Text>Começar</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}


export default Cadastro
