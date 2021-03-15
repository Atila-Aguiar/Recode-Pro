import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, FlatList } from 'react-native'

import Produto from './lista'

const dados = [{"id":1,"quantidade":100,"tipo":"geladeira","nome":"geladeira1","info":"Geladeira/Refrigerador Consul Duplex Frost Free 340 litros CRM39 Evox 110V","promo":"12x de R$ 181,66 sem juros","preco":"R$ 2.179,99"},{"id":2,"quantidade":100,"tipo":"fogao","nome":"fogao1","info":"Fogão Elétrico de Mesa 2.000W 2 Bocas Inox Agratto","promo":"11x de R$ 9,90 sem juros","preco":"R$ 108,90"},{"id":3,"quantidade":100,"tipo":"fogao","nome":"fogao2","info":"Cooktop 05 Bocas - Itatiaia - Bivolt","promo":"12x de R$ 36,58 sem juros","preco":"R$ 439,00"},{"id":4,"quantidade":100,"tipo":"geladeira","nome":"geladeira2","info":"Geladeira Brastemp Frost Free 443 litros - BRE57 Inox 110v","promo":"De R$ 3.699,99 Para","preco":"R$ 2.179,99"},{"id":5,"quantidade":100,"tipo":"geladeira","nome":"geladeira3","info":"Geladeira/Refrigerador Brastemp Frost Free BRM44 375 Litros - Branco - 110V","promo":"De R$ 2.300,00 Para","preco":"R$ 2.099,99"},{"id":6,"quantidade":100,"tipo":"lavaRoupa","nome":"lavaRoupa1","info":"Lavadora de Roupas Brastemp 12Kg BWK12 Branca 220V","promo":"12x de R$ 141,66 sem juros","preco":"R$ 1.699,99"},{"id":7,"quantidade":100,"tipo":"geladeira","nome":"geladeira4","info":"Geladeira/Refrigerador Consul Duplex Frost Free 340 litros CRM39 Branca 110V","promo":"De R$ 2.199,90 Para","preco":"R$ 2.089,90"},{"id":8,"quantidade":100,"tipo":"geladeira","nome":"geladeira5","info":"Geladeira/Refrigerador Brastemp Frost Free 375 Litros BRM45 - Evox - 127v","promo":"De R$ 2.689,90 Para","preco":"R$ 2.474,70"},{"id":9,"quantidade":100,"tipo":"geladeira","nome":"geladeira6","info":"Geladeira/Refrigerador French Door Electrolux 579l Dm84x Inox 110v","promo":"De R$ 5.399,99 Para","preco":"R$ 5.199.99"},{"id":10,"quantidade":100,"tipo":"geladeira","nome":"geladeira7","info":"Geladeira/Refrigerador Consul CRM51 405 Litros Interface Touch Branco 110v","promo":"De R$ 2.610,99 Para","preco":"R$ 2.399,99"},{"id":11,"quantidade":100,"tipo":"geladeira","nome":"geladeira8","info":"Refrigerador Consul CRD37 334 Litros Cycle Defrost Branco 220v","promo":"12x de R$ 149,99 sem juros","preco":"R$ 1.799,99"},{"id":12,"quantidade":100,"tipo":"geladeira","nome":"geladeira9","info":"Refrigerador Brastemp Side Inverse BRO80 540 Litros Ice Maker Evox 110v","promo":"12x de R$ 438,24 sem juros","preco":"R$ 5.258,99"},{"id":13,"quantidade":100,"tipo":"lavaRoupa","nome":"lavaRoupa2","info":"Lavadora de Roupas Electrolux 8,5Kg LAC09 - Branca - 220v","promo":"12x de R$ 114,99 sem juros","preco":"R$ 1.374,99"},{"id":14,"quantidade":100,"tipo":"microOndas","nome":"microondas1","info":"Forno micro-ondas Electrolux MTD30 20 litros 110v","promo":"12x de R$ 39,16 sem juros","preco":"R$ 469,99"},{"id":15,"quantidade":100,"tipo":"geladeira","nome":"geladeira10","info":"Geladeria/Refrigerador Consul Frost Free 397 Freezer Embaixo CRE44 Evox - 110V","promo":"De R$ 3.199,99 Para","preco":"R$ 2.999,99"},{"id":16,"quantidade":100,"tipo":"microOndas","nome":"microondas2","info":"Micro-ondas Consul Espelhado - 20L - Cinza 127V - Cm020","promo":"12x de R$ 41,66 sem juros","preco":"R$ 499,99"}]


const Loja = (props) => {
    const Navega = props.navigation

    return (
        <SafeAreaView style={{backgroundColor: "#847D65"}}>
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
                    alert("Você chegou ao final!\nParabéns!")
                    Navega.navigate("Home")
                    }}>
                    <Text>Pegar Lista</Text>
                </TouchableOpacity>
            </View>
            <View>
            <FlatList data={dados}
                  keyExtractor={(item) => `${item.id}`}
                  renderItem={({item}) => (
                    <Produto info={item.info} promo={item.promo} preco={item.preco}/>
                  )}          
            />
            </View>
        </SafeAreaView>
    )
}

export default Loja
