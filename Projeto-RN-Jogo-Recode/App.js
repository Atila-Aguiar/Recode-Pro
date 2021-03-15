import React from 'react';
import { Provider } from 'react-redux'
import Store from './src/Store/Store'


import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './src/pages/home/index'
import Jogo from './src/pages/jogo/index'
import Loja from './src/pages/loja/index'
import Cadastro from './src/pages/cadastro/index'
import Historia from './src/pages/historia/index'

const Stack = createStackNavigator()

function App(){
  return(
    <Provider store={Store}>
      <NavigationContainer initialRouteName='Home' headerMode='screen' >
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Cadastro" component={Cadastro} />
          <Stack.Screen name="Historia" component={Historia} />
          <Stack.Screen name="Jogo" component={Jogo} />
          <Stack.Screen name="Loja" component={Loja} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App