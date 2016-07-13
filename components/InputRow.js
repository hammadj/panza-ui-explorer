import React from 'react'
import {
  InputRow,
  InputGroup,
  InputHelpText,
  InputToggle,
  InputDatePicker,
  InputPicker,
  InputAddRow,
  SearchIcon
} from 'panza'
import { LayoutAnimation } from 'react-native'

import { View, Picker, Platform } from 'react-native'

exports.displayName = 'InputRow'
exports.title = 'InputRow'
exports.description = 'Various input widgets'

function noop(){}

function renderInputWithProps(props) {

  return class Example extends React.Component {

    state = {
      value: '' || props.value
    }

    render() {
      return (
        <InputRow
          value={this.state.value}
          onChangeText={(value) => this.setState({ value })}
          {...props}
        />
      )
    }
  }
}

class BasicGroup extends React.Component {

  state = {
    editable: true,
    basic: '',
    label: '',
    label2: '',
    label3: '',
    label4: '',
    label5: ''
  }

  render() {

    let First = renderInputWithProps({ placeholder: 'Basic Input '})
    let Second = renderInputWithProps({
      label: 'Basic Input with Label',
      placeholder: 'Your Value'
    })
    let Third = renderInputWithProps({
      label: 'Basic Input with Label & Vertical',
      vertical: true,
      placeholder: 'Placeholder'
    })

    let Fourth = renderInputWithProps({
      label: 'Removable',
      removable: true,
      placeholder: 'Type here...',
      onSelectLabel: () => noop
    })

    return (
      <View>
        <InputGroup label='ROW INPUT' inset={16} mt={3}>
          <First />
          <Second />
          <Third />
          <Fourth />
        </InputGroup>
        <InputHelpText>
          Some help text. Aute nulla ex ea amet sunt occaecat qui fugiat cupidatat fugiat in. Veniam amet elit et tempor sit ea nulla adipisicing laboris pariatur.
        </InputHelpText>
      </View>
    )
  }
}

class InputDatePickerExample extends React.Component {

  state = {
    date: new Date(),
    focusDate: false
  }

  render() {
    return (
      <InputDatePicker
        expanded={this.state.focusDate}
        date={this.state.date}
        showMore
        editable={this.state.editable}
        value={new Date(this.state.date).getFullYear().toString()}
        onDateChange={(date) => this.setState({ date })}
        label='Your Birthday'
        onToggleExpansion={() => {
          LayoutAnimation.spring()
          this.setState({ focusDate: !this.state.focusDate })
        }}
      />
    )
  }
}

class InputPickerExample extends React.Component {

  state = {
    editable: true,
    focusPicker: false,
    language: 'Java'
  }

  render() {
    return (
      <InputPicker
        expanded={this.state.focusPicker}
        value={this.state.language}
        showMore
        label='Select a Language'
        editable={this.state.editable}
        onToggleExpansion={() => {
          this.setState({ focusPicker: !this.state.focusPicker })
        }}>
        <Picker
          prompt='Select a language'
          style={{ width: 300 }}
          selectedValue={this.state.language}
          onValueChange={(lang) => this.setState({ language: lang })}>
            <Picker.Item label='Java' value='Java' />
            <Picker.Item label='Javascript' value='Javascript' />
        </Picker>
    </InputPicker>
    )
  }
}

class InputToggleExample extends React.Component {

  state = {
    value: true
  }

  render() {
    return (
      <InputToggle
        onTintColor='positive'
        label='Toggle'
        value={this.state.value}
        onValueChange={(value) => this.setState({ value })}
      />
    )
  }

}

export let examples = [
  {
    title: 'Basic InputGroup',
    render: () => (
      <BasicGroup />
    )
  },
  {
    title: 'AddRow',
    render: () => (
      <InputAddRow
        onPress={() => {
          console.log('baby baby baby, ohh!')
        }}
        label='add row'
      />
    )
  },
  {
    title: 'InputToggle',
    render: () => (
      <InputToggleExample />
    )
  },
  {
    title: 'InputPickerExample',
    render: () => (
      <InputPickerExample />
    )
  },
  {
    title: 'InputDatePicker',
    render: () => (
      <InputDatePickerExample />
    )
  }
]

// if (Platform.OS !== 'web') {
//   examples = examples.concat([
//     {
//       title: 'InputPickerExample',
//       render: () => (
//         <InputPickerExample />
//       )
//     },
//     {
//       title: 'InputDatePicker',
//       render: () => (
//         <InputDatePickerExample />
//       )
//     }
//   ])
// }
