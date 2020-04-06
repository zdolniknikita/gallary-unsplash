import React, { Component, useState } from 'react'
import { View, Text, StyleSheet, Image, Dimensions, SafeAreaView, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'

import ImageCard from '../ImageCard'

import { getPhoto } from '../../actions/photo.actions'


class Photo extends Component {
    
    componentDidMount() {
        
        const { id } = this.props.navigation.state.params
        this.props.getPhoto( id )
    }

    render () {

        const { loaded, loading, photo } = this.props

        return (
            <SafeAreaView style={styles.container}>
                {
                            loaded ? (
                                <ImageCard 
                                    styles={styles.photo}
                                    uri={photo.urls.full}
                                    indicatorSize={'large'}
                            />
                            ) : (
                                <Text> ads</Text>
                            )  
                }
 
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },  
    photo: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'

    }
})

 /*
    Redux
 */

const mapStateToProps = ( state, ownProps ) => {

    return {
        photo: state.photo.photo,
        loading: state.photo.loading,
        loaded: state.photo.loaded
    }
 }

 const mapDispatchToProps = {
    getPhoto
 }

 export default connect( mapStateToProps, mapDispatchToProps )( Photo )
