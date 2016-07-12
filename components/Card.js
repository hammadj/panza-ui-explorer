import React from 'react'
import {
  Card,
  CardHeader,
  Image,
  TouchableIcon,
  Icon,
  Divider,
  Button,
  ButtonGroup,
  Text,
  Base
} from 'panza'
import {
  Dimensions
} from 'react-native'

const screen = Dimensions.get('window')

exports.displayName = 'Card'
exports.title = 'Card'
exports.description = 'Card and CardHeader help create standard Card layouts.'

function noop() {}

export const examples = [
  {
    title: 'Card',
    description: 'Using Card & CardHeader',
    render: () => (
      <Card>
        <CardHeader
          avatar='http://placehold.it/128/08e/fff'
          title='Ben McMahen'
          subtitle='October 7, 2016'
        >
          <TouchableIcon
            accessibilityLabel='Show More'
            onPress={noop}>
            <Icon name='ios-arrow-down' size={20} light />
          </TouchableIcon>
        </CardHeader>
        <Image
          backgroundColor='#eee'
          style={{ width: screen.width, height: 250 }}
          source={{ uri: 'http://placehold.it/300/08e/fff' }}
        />
        <Base p={2}>
          <Text large bold mb={1}>Card Title</Text>
          <Text lineHeight={2} small>
            Ad id Lorem officia reprehenderit magna commodo ut voluptate. Ex ipsum in exercitation in officia reprehenderit dolor tempor.
          </Text>
        </Base>
        <Divider />
        <ButtonGroup py={1}>
          <Button small onPress={noop} transparent icon='ios-heart-outline'>
            Like
          </Button>
          <Button small onPress={noop} transparent icon='ios-text-outline'>
            Comment
          </Button>
          <Button small onPress={noop} transparent icon='ios-share-outline'>
            Share
          </Button>
        </ButtonGroup>
      </Card>
    )
  }
]
