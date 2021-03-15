import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import { View, Text, TouchableOpacity, SafeAreaView, Image} from 'react-native'

const ImgGoblin = require('../../../assets/Goblin.gif')
const ImgEsqueleto = require('../../../assets/Esqueleto.gif')
const ImgLobo = require('../../../assets/Lobo1.gif')

function Jogo(props) {

    const Navega = props.navigation
    

    const StoreNome = useSelector(state => state.nome)

    const [logstatus, setLogstatus] = useState('Um Goblin apareceu!\n Defenda-se')
    const [logataque, setLogataque] = useState('')
    const [ivida, setIvida] = useState('')
    const [iataque, setIataque] = useState('')
    const [img, setImg] = useState(ImgGoblin)
    const [jogador, setJogador] = useState({
        'nome': StoreNome,
        'vida':300,
        'vida_M':300,
        'mana':100,
        'mana_M':100
    })
    const [inimigo, setInimigo] = useState({
        'nome':'Goblin',
        'vida':100,
        'vida_M':100,
        'esfaqueamento':25,
        'lança':35,
        'ATK': [
            'esfaqueamento',
            'lança'
        ]
    })

    var inimigo_atk = inimigo.ATK


var ataques_jogador = {
    'espadada':15,
    'cura':75
}

var esqueleto = {
    'nome':'Esqueleto',
    'vida':75,
    'vida_M':75,
    'flechada':30,
    'batida':35,
    'ATK': [
        'flechada',
        'batida'
    ]
}
var lobo = {
    'nome':'Lobo',
    'vida':150,
    'vida_M':150,
    'arranhão':35,
    'mordida':45,
    'ATK': [
        'arranhão',
        'mordida'
    ]
}





function Aleatorio(Lista){
    var listaN = []
    listaN.push( ...Lista)
    var index = Math.floor(Math.random() * listaN.length - 1);

    var aleatorio = listaN.splice(index, 1);

    return(aleatorio[0])
}



function CalculadorDeDano(dano){
    var ListaDeDano = []
    for (let i=5; i<= dano; i++){
        ListaDeDano.push(i)
    }
    return (ListaDeDano)
}

function Ataque(atk,i,j_atk,j){

    if (atk == 'cura'){
        setLogataque(`${j.nome} se curou restaurando 75 pontos de vida`)
        j.vida = j.vida + j_atk.cura
        if (j.vida_M < j.vida){
            j.vida= j.vida_M
        }
        j.mana = j.mana -20
    } else {
        var dano = Aleatorio(CalculadorDeDano(j_atk[atk]))
        i.vida = i.vida - dano
        setLogataque(`${j.nome} deu uma ${atk} causando ${dano} de dano ao ${i.nome}`)
    }
}

function ContraAtaque(i, i_atk,j){
    if (i.vida >= 1){
        setIvida(`A vida atual do ${i.nome} é de ${i.vida} pontos de vida`)
        var nome_do_atk = Aleatorio(i_atk)
        var dano=Aleatorio(CalculadorDeDano(i[nome_do_atk]))
        j.vida = j.vida - dano
        setIataque(`${i.nome} te atacou com ${nome_do_atk} causando ${dano} de pontos de vida`)
    }
}

function RegenDeMana(j,v){
    if (v==true){
        j.mana = j.mana + 3
        if (j.mana>j.mana_M){
            j.mana = j.mana_M
        }
    } else {
        alert("Cura consome 20 de mana!")
    }    
}


function Turno(ataque) {
    var Validação=true

    setLogstatus(`======Status======\nVida: ${jogador.vida}\nMana: ${jogador.mana}\n=================`)

                        
    if (ataque.startsWith('e')){
        Ataque('espadada',inimigo,ataques_jogador,jogador)
        ContraAtaque (inimigo, inimigo_atk, jogador)
                        
    } else if (ataque.startsWith('c') && jogador.mana>19){
        Ataque('cura',inimigo,ataques_jogador,jogador)
        ContraAtaque(inimigo, inimigo_atk, jogador)
    } else {
        alert("Use um ataque valido!")
        Validação=false
    }

    RegenDeMana(jogador,Validação)

    setLogstatus(`======Status======\n          Vida: ${jogador.vida}\n         Mana: ${jogador.mana}\n=================`)
                
    if (inimigo.vida<=0){
        alert(`O ${inimigo.nome} morreu!`)
        alert(`Você Venceu a Luta contra o ${inimigo.nome}!`)
        if(inimigo.nome == 'Goblin'){
            setInimigo(esqueleto)
            setImg(ImgEsqueleto)
            alert(`Um Esqueleto apareceu!\nDefenda-se `)
        } else if (inimigo.nome == 'Esqueleto'){
            setInimigo(lobo)
            setImg(ImgLobo)
            alert(`Um lobo apareceu!\nDefenda-se`)
        } else{
            alert("E conseguil chegar na loja vivo")
            Navega.navigate("Loja")
        }
                            
    }
    if (jogador.vida<=0){
        alert("Você morreu!")
        Navega.navigate("Home")
                        
    }
           
}

    return(
        <SafeAreaView style={{backgroundColor: '#938A7D', flex:1}}>
            <Image style={{flex: 0.8 ,width: '100%'}} source={img} />
            <View style={{justifyContent: 'center',alignItems:'center'}}>
                    <Text style={{color:"#FFF", justifyContent: 'center',alignItems:'flex-start',paddingHorizontal:100}}>{logstatus}</Text>
                    <Text style={{color:"#FFF", justifyContent: 'center',alignItems:'center',paddingHorizontal:100}}>{logataque}</Text>
                    <Text style={{color:"#FFF", justifyContent: 'center',alignItems:'center',paddingHorizontal:100}}>{ivida}</Text>
                    <Text style={{color:"#FFF", justifyContent: 'center',alignItems:'center',paddingHorizontal:100}}>{iataque}</Text>
                </View>
                <View style={{justifyContent: 'flex-end',alignItems:'center'}}>
                    <TouchableOpacity 
                    style={{backgroundColor:'#AAA', padding: 15, margin: 15, borderRadius:5}}
                    onPress={() => Turno('espadada')}>
                        <Text>Espadada</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={{backgroundColor:'#AAA', padding: 15, margin: 15, borderRadius:5}}
                    onPress={() => Turno('cura')}>
                    <Text>Cura</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )    
}

export default Jogo