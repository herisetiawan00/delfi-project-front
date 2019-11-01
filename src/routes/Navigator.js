import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Landing from '../assets/Landing'
import Login from '../assets/Login'
import Register from '../assets/Register'

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
export default Navigator