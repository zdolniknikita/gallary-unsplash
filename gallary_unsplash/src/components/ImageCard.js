import React, { Component, useEffect } from 'react'
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, Button, TouchableHighlight, ActivityIndicator } from 'react-native'

class ListItem extends Component {

    state = {
        loading: true
    }

    onLoad = () => this.setState({ loading: false })
    
    render() {
        
        const { styles, uri, indicatorSize } = this.props
        const { loading } = this.state
        const { onLoad } = this

        return(
            <View>
                { 
                    loading ? <ActivityIndicator animating={loading} size={indicatorSize}/> : null
                }       
                <Image
                    style={styles}
                    source={{ uri }}
                    onLoadEnd={onLoad}
                />
            </View>
        )
    }
}

export default ListItem