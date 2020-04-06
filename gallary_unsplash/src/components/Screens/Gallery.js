import React, { Component } from 'react'

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