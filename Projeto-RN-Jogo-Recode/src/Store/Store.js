import React from 'react'
import { createStore } from 'redux'


const Estado_inicial = {
    nome: [""]
}

function NomeJ(state = Estado_inicial, action){
     switch (action.type) {
         case "Adicionar_Nome":
             if (!state.nome.includes(action.nome)){
                return { ...state, nome: [action.nome] }
             }

        default:
            return state;
    }
}

const Store = createStore(NomeJ)

export default Store