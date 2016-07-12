import React, { PropTypes } from 'react'
import {
  ListView
} from 'react-native'
import {
  Divider,
  Text,
  Base
} from 'panza'

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
})

export default class Module extends React.Component {

  render() {

    const dataSource = ds.cloneWithRows(this.props.module.examples)

    return (
      <ListView
        style={{ flex: 1 }}
        dataSource={dataSource}
        renderRow={this._renderRow.bind(this)}
        renderSeparator={(a, b) => <Divider key={a + b} />}
        keyboardShouldPersistTaps={true}
        automaticallyAdjustContentInsets={false}
        keyboardDismissMode="on-drag"
      />
    )
  }

  _renderRow(example, more) {
    return (
      <Base py={2}>
        <Base px={2} pb={2}>
          <Text bold>{example.title}</Text>
          {example.description && <Text small light>{example.description}</Text>}
        </Base>
        <Base {...example.props}>
          {example.render()}
        </Base>
      </Base>
    )
  }
}
