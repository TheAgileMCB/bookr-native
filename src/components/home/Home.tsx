import React from 'react';
import {
    StyleSheet,
    Text,
    Button,
    //Dimensions,
    View,
} from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import { LinearGradient } from 'expo-linear-gradient';
const image = { uri: "./assets/balanced-stones.jpg" };

type NavProps = {
    navigation: NavigationStackProp<{ home: string }>;
}

export default class Home extends React.Component<NavProps> {
    render() {
        return (
            <View style={styles.container}>
                <LinearGradient
                    colors={['rgba(70,10,10,0.8)', 'transparent']}
                    style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: 0,
                        height: 500,
                    }}
                />
                <LinearGradient
                    colors={['#c08e0f', '#e6b947', '#ac7d07']}
                    style={{ padding: 15, alignItems: 'center', borderRadius: 5 }}>
                    <Text
                        onPress={() =>
                            this.props.navigation.navigate('Books')
                        }
                        style={{
                            backgroundColor: 'transparent',
                            fontSize: 20,
                            color: '#000',
                            borderColor: '#fff',
                        }}>
                        Find Books!
                    </Text>
                </LinearGradient>
                <Text></Text>
                <LinearGradient
                    colors={['#c08e0f', '#e6b947', '#ac7d07']}
                    style={{ padding: 15, alignItems: 'center', borderRadius: 5 }}>
                    <Text
                        onPress={() =>
                            this.props.navigation.navigate('Map')
                        }
                        style={{
                            backgroundColor: 'transparent',
                            fontSize: 20,
                            color: '#000',
                            borderColor: '#fff',
                        }}>
                        Find Yourself!
                    </Text>
                </LinearGradient>
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
        backgroundColor: '#750303',
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