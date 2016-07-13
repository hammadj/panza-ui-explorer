import React, { PropTypes } from 'react'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import ExampleList from './ExampleList'
import Module from './Module'
import ModuleList from './ModuleList'
import shallowCompare from 'react-addons-shallow-compare'

import { View } from 'react-native'

import {
  NavBar,
  Base,
  Text
} from 'panza'

const ModuleContainer = (props, { router }) => {
  const { state } = props.location
  return (
    <Base flex={1}>
      <Module module={state} />
    </Base>
  )
}

ModuleContainer.contextTypes = {
  router: PropTypes.object
}

const App = ({ children, location }, { router }) => {

  const { state } = location
  const title = (state && state.title) ? state.title : 'Panza'

  console.log('render with navbar')

  return (
    <Base flex={1} backgroundColor='white'>
      <NavBar
        backgroundColor='#fafafa'
        style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 500 }}
        title={title} />
      <Base style={{ paddingTop: NavBar.totalNavHeight }}>
        {children}
      </Base>
    </Base>
  )
}

const ExampleListContainer = (props, { router }) => {
  return (
    <ExampleList
      onNavigate={(example) => {
        router.push({
          pathname: '/' + example.key,
          state: example.module
        })
      }}
      list={ModuleList}
    />
  )
}

ExampleListContainer.contextTypes = {
  router: PropTypes.object
}

class AppContainer extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState)
  }

  render () {
    return (
      <View>
        <Router history={browserHistory}>
          <Route path='/' component={App}>
            <IndexRoute component={ExampleListContainer} />
            <Route path='*' component={ModuleContainer} />
          </Route>
        </Router>
      </View>
    )
  }
}

export default AppContainer
