import React, { PropTypes } from 'react'
import Perf from 'react-addons-perf'
import {
  View,
  Text,
  ScrollView
} from 'react-native'

import {
  Base, Button
} from 'panza'

const options = {
  max: 200,
  change: 50,
  updateInterval: 200,
  duration: 5000
}

exports.displayName = 'Benchmarks'
exports.title = 'Benchmarks'
exports.description = 'Various panza benchmarks'

export const examples = [
  {
    title: 'Base vs. View',
    render: () => (
      <Benchmark />
    )
  }
]

class Benchmark extends React.Component {

  constructor(props) {
    super(props);
    this.startBenchmark = this.startBenchmark.bind(this);
    this.stopBenchmark = this.stopBenchmark.bind(this);
    this.renderItem = this.renderItem.bind(this);
    const data = [];
    for (let i = 0; i < options.max; i++) {
      const stateNum = Math.round(Math.random() * 100);
      data[i] = { val: stateNum, color: this.getStateColor(stateNum) };
    }
    this.state = {
      data,
      running: false
    }
  }

  getStateColor(state) {
    let colour = 'lightGray';
    let stateNum = +state;

    if (stateNum === 0) {
      colour = 'red';
    }
    else if (stateNum === 100) {
      colour = 'lime';
    }
    else if ((stateNum > 0) && (stateNum < 1)) {
      colour = 'rgb(255, 141, 0)';
    }
    else if ((stateNum >= 1) && (stateNum < 100)) {
      colour = 'rgb(255, ' + (140 + Math.floor(stateNum)) + ', 0)';
    }

    return colour;
  }
  update() {
    const data = this.state.data.slice(0);
    for (let i = 0; i < options.change; i++) {
      const stateNum = Math.round(Math.random() * 100);
      data[Math.round(Math.random() * options.max)] = { val: stateNum, color: this.getStateColor(stateNum) };
    }
    this.setState({
      data
    })
  }
  startBenchmark(withBase) {
    Perf.start();

    this.setState({
      withBase,
      running: true
    });
    const timer = setInterval(() => this.update(), options.updateInterval);

    setTimeout(() => {
      clearInterval(timer);
      this.stopBenchmark();
    }, options.duration)
  }
  stopBenchmark() {
    Perf.stop();
    Perf.printWasted(Perf.getLastMeasurements());
    this.setState({
      running: false,
    })
  }
  renderItem(data, i) {
    if (this.state.withBase) {
      return (
        <Base
          key={i}
          px={1}
          py={1}
          mt={1}
          mr={1}
          backgroundColor={data.color}
        >
          <Text>{data.val}</Text>
        </Base>
      )
    }
    return (
      <View
        key={i}
        style={{
          marginTop: 8,
          marginRight: 8,
          paddingHorizontal: 8,
          paddingVertical: 8,
          backgroundColor: data.color,
        }}
      >
        <Text>{data.val}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={{ backgroundColor: '#fafafa', flex: 1}}>
        {this.state.running ?
          <Text>RUNNING</Text>
          :
          <Base row p={1}>
            <Button onPress={() => this.startBenchmark(true)} m={1} block> Run With Base </Button>
            <Button onPress={() => this.startBenchmark(false)} m={1} block> Run With View </Button>
          </Base>
        }

        <ScrollView>
          <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
            {this.state.data.map((data, i) => this.renderItem(data, i))}
          </View>
        </ScrollView>
      </View>
    )
  }
}
