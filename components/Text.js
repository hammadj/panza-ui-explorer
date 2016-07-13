import React from 'react'
import { Text } from 'panza'

exports.displayName = 'Text'
exports.title = 'Text'
exports.description = 'Write some text'

const lorem = 'Sit id culpa ullamco ipsum ullamco cupidatat in elit aliqua ea reprehenderit aute.'

exports.examples = [
  'tiny',
  'small',
  'medium',
  'large',
  'giant'
].map(size => {
  const props = {
    [size]: true
  }

  return {
    title: size,
    props: { px: 2 },
    render: () => <Text {...props}>{lorem}</Text>
  }
})
