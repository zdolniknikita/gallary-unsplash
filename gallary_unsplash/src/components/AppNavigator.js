import React from 'react'

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'

import Gallery from './Screens/Gallery'
import Photo from './Screens/Photo'

const MainNavigator = createStackNavigator({
    Home: Gallery,
    Photo: Photo,
},{
    initialRouteName: 'Home',
    // headerMode: "none"
})

const App = createAppContainer( MainNavigator )

export default App


