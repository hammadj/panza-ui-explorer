import React, { PropTypes } from 'react'

import {
  ListView
} from 'react-native'

import {
  Base,
  Divider,
  TouchableRow
} from 'panza'

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
})

export default class ExampleList extends React.Component {

  static propTypes = {
    list: PropTypes.array.isRequired,
    onNavigate: PropTypes.func.isRequired
  }

  render() {

    const dataSource = ds.cloneWithRows(this.props.list)

    return (
      <Base flex={1}>
        <ListView
          style={{ flex: 1 }}
          dataSource={dataSource}
          renderRow={this._renderRow.bind(this)}
          renderSeparator={(a, b) => <Divider key={a + b} inset={16} />}
          keyboardShouldPersistTaps={true}
          automaticallyAdjustContentInsets={false}
          keyboardDismissMode="on-drag"
        />
      </Base>
    )
  }

  _renderRow(example) {
    return (
      <TouchableRow
        primaryText={example.module.title}
        secondaryText={example.module.description}
        key={example.key}
        onPress={() => {
          this.props.onNavigate(example)
        }}
      />
    )
  }
}
