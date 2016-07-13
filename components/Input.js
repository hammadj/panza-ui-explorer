import React from 'react'
import { Input } from 'panza'
import { Dimensions } from 'react-native'

exports.displayName = 'Input'
exports.title = 'Input'
exports.description = 'Standard text input fields'

function createInput(type) {
  return class InputExample extends React.Component {
    state = {
      value: ''
    }
    render() {
      let input = <Input flex={1} style={{ width: 200, height: 40}} value={this.state.value} placeholder='Placeholder' onChangeText={(v) => this.setState({ value: v })} />
      return React.cloneElement(input, {
        [type]: true
      })
    }
  }
}


export const examples = ['tiny', 'large', 'small', 'medium', 'giant'].map((name) => {
  let Type = createInput(name)
  return {
    title: name,
    props: { px: 2 },
    render: () => <Type />
  }
})
