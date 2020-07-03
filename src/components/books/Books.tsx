import React, { Component } from 'react';
import {
    StyleSheet,
    // Text,
    Dimensions,
    View,
} from 'react-native';
import { GoogleBookSearch } from 'react-native-google-books';
import { LinearGradient } from 'expo-linear-gradient';
import { BOOK_KEY } from 'react-native-dotenv';

interface BookProps {
    id?: number,
    title?: string,
    authors?: {
        [key: string]: Authors
    },
    isbn?: string,
    raw?: object
}

interface Authors {
    name?: string
}

export default class Books extends Component<BookProps> {
    // constructor(props: BookProps) {
    //     super(props)

    //     this.state = {
    //         id: 0,
    //         title: "",
    //         authors: [],
    //         isbn: "",
    //         raw: {}
    //       }
    // }

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
                    }}>
                <GoogleBookSearch
                    style={{
                        background: 'transparent',
                    }}
                    apikey={BOOK_KEY}
                    onResultPress={(book: BookProps) => console.log(book)}
                />
                </LinearGradient>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#750303',
    },
})
