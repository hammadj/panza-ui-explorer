import React from 'react'
import { render } from 'react-dom'

import { AppRegistry } from 'react-native'
import App from './components/App'

AppRegistry.registerComponent('App', () => App)
AppRegistry.runApplication('App', {
  rootTag: document.getElementById('app')
})
