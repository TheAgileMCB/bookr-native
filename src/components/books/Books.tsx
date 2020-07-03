import React, { Component } from 'react';
import {
    StyleSheet,
    // Text,
    Dimensions,
    View,
} from 'react-native';
import { GoogleBookSearch } from 'react-native-google-books';

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
            <View>
                <GoogleBookSearch
                    apikey={"AIzaSyDBvBSx_sAV1JbOj7Vwir6xG19ylfK4KUI"}
                    onResultPress={(book: BookProps) => console.log(book)}
                />
            </View>
        )
    }
}
