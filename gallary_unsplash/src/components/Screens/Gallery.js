import React, { Component, useState } from 'react'
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import PhotoList from '../PhotoList'

const Gallary = ( props ) => {

    onPress = ( id ) => () => {

        props.navigation.navigate('Photo', { id })
    }

    return(
        <>
            <PhotoList onPress={onPress}/>
        </>
    )
}

export default Gallary