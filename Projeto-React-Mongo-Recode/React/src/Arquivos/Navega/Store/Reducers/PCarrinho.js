const Estado_inicial = {
    produtos: []
}

function PCarrinho(state = Estado_inicial, action){
     switch (action.type) {
         case "Adicionar_Produto":
             if (!state.produtos.includes(action.produto)){

                return { ...state, produtos: [...state.produtos, action.produto] }
             }

         case "Remover_Produto":
             if (state.produtos.includes(action.produto)){
                 var index = state.produtos.indexOf(action.produto)
                 state.produtos.splice(index, 1)
                 return {...state, produtos: [...state.produtos]}
             }

        default:
            return state;
    }
}

export default PCarrinho