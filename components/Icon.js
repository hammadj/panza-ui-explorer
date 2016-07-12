import React from 'react'
import {
  Icon,
  CheckMark,
  TouchableIcon,
  CloseIcon,
  ArrowRightIcon,
  PlusIcon,
  BackIcon,
  MoreIcon,
  SearchIcon
} from 'panza'

exports.displayName = 'Icon'
exports.title = 'Icon'
exports.description = 'Various Icons provided by Panza. We use Ionicons, as provided by react-native-vector-icons.'

function noop() {}

class CheckMarkExample extends React.Component {
  state = { isChecked: false }
  render() {
    return (
      <TouchableIcon accessibilityLabel='Check Mark' onPress={() => this.setState({ isChecked: !this.state.isChecked })}>
        <CheckMark isChecked={this.state.checked} />
      </TouchableIcon>
    )
  }
}

export const examples = [
  {
    title: 'CheckMark',
    render: () => <CheckMarkExample />
  },
  {
    title: 'ArrowRightIcon',
    render: () => <ArrowRightIcon />
  },
  {
    title: 'PlusIcon',
    render: () => <PlusIcon />
  },
  {
    title: 'CloseIcon',
    description: 'On Android this renders as a BackIcon, since this is standard Android behaviour',
    render: () => <CloseIcon />
  },
  {
    title: 'BackIcon',
    render: () => <BackIcon />
  },
  {
    title: 'MoreIcon',
    render: () => <MoreIcon />
  },
  {
    title: 'SearchIcon',
    render: () => <SearchIcon />
  }
].map((e) => {
  e.props = { p: 2 }
  return e
})
