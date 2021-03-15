import {combineReducers} from 'redux'

import PCarrinho from './PCarrinho'

//combinação de todos os stores
export default combineReducers({
    PCarrinho
})
//quando for usar o useState, vai chamar com state.PCarrinho.produtos -- produtos é a lista do PCarrinho