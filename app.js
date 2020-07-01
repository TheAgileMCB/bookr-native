import React from 'react';
import AppNavigator from './AppNavigator';

export default class App extends React.Component {
  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     initialPosition: {
  //       latitude: 0,
  //       longitude: 0,
  //       latitudeDelta: 0,
  //       longitudeDelta: 0,
  //     },
  //     markerPosition: {
  //       latitude: 0,
  //       longitude: 0,
  //     }
  //   }
  // }
  render() {
    return (
      <AppNavigator
        // screenProps={{
        //   initialPosition: this.state.initialPosition,
        //   markerPosition: this.state.markerPosition,
        // }}
      />
    );
  }
}