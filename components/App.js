import React, { PropTypes } from 'react'
import ModuleList from './ModuleList'
import { View, Navigator } from 'react-native'
import ExampleList from './ExampleList'
import Module from './Module'
import {
  NavTouchableIcon,
  BackIcon,
  NavBar,
  Icon,
  NavTitle,
  PopupMenu,
  Base
} from 'panza'
import shallowCompare from 'react-addons-shallow-compare'

function noop(){}

export default class App extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState)
  }

  constructor(props) {
    super(props)

    this._routeMapper = {
      LeftButton: (route, nav, i) => {
        if (i !== 0) return (
          <NavTouchableIcon
            accessibilityLabel='Back'
            onPress={() => nav.pop()}>
            <BackIcon />
          </NavTouchableIcon>
        )
      },
      RightButton: () => {
        return (
          <NavTouchableIcon
            onPress={() => this.setState({ menu: true })}
            accessibilityLabel='Share'>
              <Icon size={28} name='ios-more' />
            </NavTouchableIcon>
        )
      },
      Title: (route) => {
        return <NavTitle>{route.title}</NavTitle>
      }
    }

    this.state = {
      list: ModuleList,
      menu: false
    }
  }

  render() {

    const {
      list,
      menu
    } = this.state

    const options = [
      { label: 'Share on Facebook', onPress: noop },
      { label: 'Share on Twitter', onPress: noop }
    ]

    return (
      <Base flex={1}>
        <PopupMenu
          showing={menu}
          title='Share Panza'
          onRequestClose={() => this.setState({ menu: false })}
          options={options}
        />
          <Navigator
            initialRoute={{ title: 'Module List', id: 'list' }}
            sceneStyle={{
              paddingTop: NavBar.totalNavHeight,
              backgroundColor: 'white',
              flex: 1
            }}
            navigationBar={
              <Navigator.NavigationBar
                style={NavBar.defaultStyles}
                routeMapper={this._routeMapper}
              />
            }
            renderScene={(route, navigator) => {

              if (route.id === 'list') {
                return (
                  <ExampleList
                    list={list}
                    onNavigate={(example) => {
                      navigator.push({
                        title: example.module.title,
                        example: example.module
                      })
                    }}
                  />
                )
              }

              return <Module module={route.example} />
            }}
          />
      </Base>
    )
  }
}
