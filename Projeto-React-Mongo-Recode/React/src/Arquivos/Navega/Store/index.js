import { createStore } from 'redux'

import CombinaOsReducers from './Reducers/index'

const Store = createStore(CombinaOsReducers)

export default Store