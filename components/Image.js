import React from 'react'
import {
  Image
} from 'panza'
import {
  Dimensions
} from 'react-native'

const screen = Dimensions.get('window')

exports.displayName = 'Image'
exports.title = 'Image'
exports.description = 'An Image component with some added functionality'

const URL = 'https://s-media-cache-ak0.pinimg.com/236x/d0/48/8b/d0488bf62c88505964faf542afebfd00.jpg'

export const examples = [
  {
    title: 'Image',
    description: 'Fade an image in when loading',
    render: () => (
      <Image
        my={1}
        width={screen.width}
        height={300}
        source={{ uri: URL }}
      />
    )
  },
  {
    title: 'Avatar image',
    description: 'An image with the circular prop applied',
    props: { p: 2 },
    render: () => (
      <Image
        my={1}
        width={100}
        height={100}
        circular
        source={{ uri: URL }}
      />
    )
  }
]
