import { createStore } from 'redux'

import TodosValores from './Reducers/index'

const Store = createStore(TodosValores)

export default Store