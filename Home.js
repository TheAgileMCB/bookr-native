import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Button,
    Dimensions,
    View,
} from 'react-native';

// import MapView from 'react-native-maps';

// const {width, height} = Dimensions.get('window')

// const SCREEN_HEIGHT = height
// const SCREEN_WIDTH = width
// const ASPECT_RATIO = width / height
// const LATITUDE_DELTA = 0.0922
// const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

// function HomeScreen() {
//   return (
//     <View style={styles.container}>
//           <Button
//             title="Locate Me!"
//             onPress={(navigation) =>
//               navigation.navigate('Map', { name: 'map' })
//             }
//           />
//     </View>
//   );
// }

// function MapScreen() {
//   return (
//     <View style={styles.container}>
//       <Map />
//     </View>
//   )
// }

// const Stack = createStackNavigator();

export default class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Welcome.</Text>
                <Text>Be at peace.</Text>
                <Text>You have come here for one thing.</Text>
                <Text>Press the button to seek Nirvana.</Text>
                <Button
                    title="Find Yourself"
                    onPress={() =>
                        this.props.navigation.navigate('Map')
                    }
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    radius: {
        height: 50,
        width: 50,
        borderRadius: 50 / 2,
        overflow: 'hidden',
        backgroundColor: 'rgba(0, 122, 255, 0.1)',
        borderWidth: 1,
        borderColor: 'rgba(0, 112, 255, 0.3)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    marker: {
        height: 20,
        width: 20,
        borderWidth: 3,
        borderColor: 'white',
        borderRadius: 20 / 2,
        overflow: 'hidden',
        backgroundColor: '#007aff',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff',
    },
    map: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: 'absolute'
    },
})