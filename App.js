import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Landing from './src/assets/Landing'
import Login from './src/assets/Login'
import Register from './src/assets/Register'

const Map = createStackNavigator(
  {
    Landing: { screen: Landing },
    Login: { screen: Login },
    Register: { screen: Register },
  },
  {
    initialRouteName: 'Landing',
  }
)

const Navigator = createAppContainer(Map)

class App extends React.Component {
  render() {
    return <Navigator />
  }
}
export default App