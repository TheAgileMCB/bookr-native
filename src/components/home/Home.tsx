import React from 'react';
import {
    ImageBackground,
    StyleSheet,
    Text,
    Button,
    //Dimensions,
    View,
} from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
const image = { uri: "./assets/balanced-stones.jpg" };

type NavProps = {
  navigation: NavigationStackProp<{ home: string }>;
}

export default class Home extends React.Component<NavProps> {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    accessible={true}
                    accessibilityLabel="a pleasant balanced stone form"
                    style={styles.image}
                    source={image}
                >
                    <Text style={styles.text}>Welcome.</Text>
                    <Text style={styles.text}>Be at peace.</Text>
                    <Text style={styles.text}>You have come here for one thing.</Text>
                    <Text style={styles.text}>Press the button to seek Nirvana.</Text>
                    <Button
                        title="Find Yourself"
                        onPress={() =>
                            this.props.navigation.navigate('Map')
                        }
                    />
                </ImageBackground>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    text: {
        padding: 15,
    },
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
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: 'center',
        alignItems: 'center',
    },
    map: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: 'absolute'
    },
})