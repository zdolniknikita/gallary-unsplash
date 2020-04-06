import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'

import ImageCard from './ImageCard'

class ListItem extends Component {

    render() {
    
        const { onPress, photo, } = this.props

        return(
            <View style={styles.container}>
                    <TouchableOpacity
                        onPress={onPress( photo.id )}
                    >

                        <ImageCard 
                            uri={photo.urls.regular}
                            styles={styles.img}
                            indicatorSize='small'
                        />
                        
                        <Text style={styles.label}> { this.props.photo.user.name } </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        margin: 10,
        width: Dimensions.get('window').width * 0.25,  

    },
    img: {
        width: Dimensions.get('window').width * 0.25,  
        height: Dimensions.get('window').height * 0.25,
        borderRadius: 10,

    },
    label: {
        marginTop: 10,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default ListItem