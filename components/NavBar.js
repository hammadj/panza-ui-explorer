import React from 'react'
import {
  NavBar,
  NavTouchableText,
  NavTouchableIcon,
  Icon,
  PlusIcon,
  ButtonGroup,
  Divider,
  Button,
  CloseIcon
} from 'panza'
import { View } from 'react-native'

exports.displayName = 'NavBar'
exports.title = 'NavBar'
exports.description = 'A navigation bar that emulates iOS and Android styles'

function log() {
  console.log('hello world')
}

function renderWithProps(props) {
  return (
    <NavBar
      RightButton={
        <NavTouchableText onPress={log}>
          Save
        </NavTouchableText>
      }
      LeftButton={
        <NavTouchableIcon
          accessibilityLabel='Close'
          onPress={log}>
          <CloseIcon />
        </NavTouchableIcon>
      }
      title='Hello World'
      backgroundColor='#fafafa'
      {...props}
    />
  )
}

export const examples = [
  {
    title: 'NavBar',
    description: 'A basic NavBar',
    render: () => renderWithProps()
  },
  {
    title: 'Inverted NavBar',
    render: () => renderWithProps({
      inverted: true,
      backgroundColor: 'primary'
    })
  },
  {
    title: 'With Button Group',
    render: () => (
      <View>
        {renderWithProps()}
        <ButtonGroup style={{ paddingVertical: 4 }} backgroundColor='#fafafa'>
          <Button small onPress={log} transparent icon='ios-heart-outline'>
            Like
          </Button>
          <Button small onPress={log} transparent icon='ios-text-outline'>
            Comment
          </Button>
          <Button small onPress={log} transparent icon='ios-share-outline'>
            Share
          </Button>
        </ButtonGroup>
        <Divider />
      </View>
    )
  }
]
